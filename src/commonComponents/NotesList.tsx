import React, { useMemo, useCallback } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { useAppSelector } from '../store/hooks';
import ListItemComponent from './ListItem';

interface Props {
  onNotePress: (id: string) => void;
  onNoteLongPress: (id: string) => void;
}

const NotesListComponent: React.FC<Props> = ({ onNotePress, onNoteLongPress }) => {
  const notesState = useAppSelector(state => state.notes.notes);
  const searchTerm = useAppSelector(state => state.notes.searchTerm);

  // useMemo to avoid filtering on every render
  const filteredNotes = useMemo(() => {
    const lowerSearch = searchTerm.trim().toLowerCase();

    if (!lowerSearch) return notesState;

    return notesState.filter(note => {
      const title = note.title.toLowerCase();
      const content = note.content.toLowerCase();
      return title.includes(lowerSearch) || content.includes(lowerSearch);
    });
  }, [notesState, searchTerm]);

  // useCallback to memoize renderItem for better FlatList performance
  const renderItem: ListRenderItem<typeof notesState[number]> = useCallback(
    ({ item }) => (
      <ListItemComponent
        title={item.title}
        content={item.content}
        onNotePress={() => onNotePress(item.id)}
        onNoteLongPress={() => onNoteLongPress(item.id)}
      />
    ),
    [onNotePress, onNoteLongPress]
  );

  return (
    <FlatList
      data={filteredNotes}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
      initialNumToRender={10} // render optimization
      maxToRenderPerBatch={10}
      windowSize={5}
      removeClippedSubviews
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ paddingBottom: 16 }}
    />
  );
};

export default React.memo(NotesListComponent);
