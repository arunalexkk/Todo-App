import { useAppDispatch } from '../store/hooks';
import { updateSearchTerm } from '../store/stores/notesSlice';

export const useTopBarManager = () => {
  const actionsDispatcher = useAppDispatch();

  const searchNotes = (searchTerm: string) => {
    actionsDispatcher(updateSearchTerm({ searchTerm }));
  };

  return {
    searchNotes,
  };
};
