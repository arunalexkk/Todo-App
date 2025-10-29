import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from './store';

/**
 * Custom Redux hooks for typed usage across the app.
 *
 * useAppDispatch — provides the correctly typed dispatch function.
 * useAppSelector — provides typed state selector.
 *
 * These remove the need to manually type RootState and AppDispatch each time.
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
