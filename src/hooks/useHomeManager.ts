import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import {
  removeNote,
  setIdOfNoteToDelete,
  updateSearchTerm,
} from '../store/stores/notesSlice';

export const useHomeManager = () => {
  const [openSheet, setOpenSheet] = useState(false);

  const idOfNoteToDeleteState = useAppSelector(
    state => state.notes.idOfNoteToDelete,
  );

  const notes = useAppSelector(state => state.notes.notes);

  const actionsDispatcher = useAppDispatch();

  useEffect(() => {
    actionsDispatcher(updateSearchTerm({ searchTerm: '' }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deleteNote = () => {
    actionsDispatcher(removeNote({ id: idOfNoteToDeleteState }));
    actionsDispatcher(setIdOfNoteToDelete({ id: '' }));
  };

  const openDeleteDialog = (id: string) => {
    setOpenSheet(true);
    actionsDispatcher(setIdOfNoteToDelete({ id }));
  };

  const closeDeleteDialog = () => {
    setOpenSheet(false);
  };

  return {
    notes,
    openSheet,
    deleteNote,
    openDeleteDialog,
    closeDeleteDialog,
  };
};
