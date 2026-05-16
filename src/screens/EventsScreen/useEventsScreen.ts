import { useEffect } from 'react';
import { fetchEvents, toggleFavorite } from '../../redux/slices/eventsSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

export const useEventsScreen = () => {
  const dispatch = useAppDispatch();
  const { events, isLoading, error } = useAppSelector(state => state.events);
  const { user, token } = useAppSelector(state => state.auth);

  useEffect(() => {
    if (token) {
      dispatch(fetchEvents(token));
    }
  }, [dispatch, token]);

  const handleFavoritePress = (eventId: number) => {
    dispatch(toggleFavorite(eventId));
  };

  return {
    events,
    isLoading,
    error,
    user,
    handleFavoritePress,
  };
};
