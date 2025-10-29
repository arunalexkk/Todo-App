import uuid from 'react-native-uuid';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { addNote, removeNote, updateNote } from '../store/stores/notesSlice';

export const useNoteManager = () => {
  const notesState = useAppSelector(state => state.notes.notes);
  const actionsDispatcher = useAppDispatch();

  const createNote = () => {
    const id = String(uuid.v4());
    actionsDispatcher(addNote({ id, title: '', content: '' }));
    return id;
  };

  const updateNoteTitle = (id: string, title: string) => {
    actionsDispatcher(updateNote({ id, title }));
  };

  const updateNoteContent = (id: string, content: string) => {
    actionsDispatcher(updateNote({ id, content }));
  };

  const deleteNote = (id: string) => {
    actionsDispatcher(removeNote({ id }));
  };

  const getNote = (id: string) => {
    return notesState.find(note => note.id === id);
  };

  return {
    createNote,
    updateNoteTitle,
    updateNoteContent,
    deleteNote,
    getNote,
  };
};
