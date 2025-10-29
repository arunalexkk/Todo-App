import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { RootStackParamList } from '../navigation/CustomNavigatorTypes';
import FormControlInputComponent from '../commonComponents/FormControlInput';
import { spacing } from '../utils/spacing';
import { useNoteManager } from '../hooks/useNoteManager';

type Props = NativeStackScreenProps<RootStackParamList, 'Note'>;

const NoteView: React.FC<Props> = ({ route }) => {
  const { createNote, updateNoteTitle, updateNoteContent, deleteNote, getNote } = useNoteManager();

  const [noteId, setNoteId] = useState<string>('');
  const [noteTitle, setNoteTitle] = useState<string>('');
  const [noteContent, setNoteContent] = useState<string>('');

  const noteIdRef = useRef<string>();
  noteIdRef.current = noteId;

  const noteTitleRef = useRef<string>();
  noteTitleRef.current = noteTitle;

  const noteContentRef = useRef<string>();
  noteContentRef.current = noteContent;

  const handleTitleChange = (text: string) => {
    setNoteTitle(text);
    updateNoteTitle(noteId, text);
  };

  const handleContentChange = (text: string) => {
    setNoteContent(text);
    updateNoteContent(noteId, text);
  };

  const deleteNoteIfEmpty = () => {
    if (noteTitleRef.current || noteContentRef.current) {
      return;
    }

    if (noteIdRef.current !== undefined) {
      deleteNote(noteIdRef.current);
    }
  };

  useEffect(() => {
    if (route.params?.id === undefined) {
      const newNoteId = createNote();
      setNoteId(newNoteId);
    } else {
      const note = getNote(route.params.id);
      if (note) {
        setNoteId(note.id);
        setNoteTitle(note.title);
        setNoteContent(note.content);
      }
    }

    return deleteNoteIfEmpty;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <FormControlInputComponent
          inputName="Title"
          inputType="text"
          invalid={false}
          placeholder="Title"
          required={false}
          value={noteTitle}
          onChangeText={handleTitleChange}
        />
        <FormControlInputComponent
          inputName="Content"
          inputType="text"
          invalid={false}
          placeholder="Content"
          required={false}
          value={noteContent}
          onChangeText={handleContentChange}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: spacing.small,
  },
});

export default NoteView;