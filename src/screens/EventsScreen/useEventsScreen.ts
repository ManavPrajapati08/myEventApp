import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents, toggleFavorite } from '../../redux/slices/eventsSlice';

export const useEventsScreen = () => {
  const dispatch = useDispatch();
  const { events, isLoading, error } = useSelector(
    (state: any) => state.events,
  );
  const { user, token } = useSelector((state: any) => state.auth);

  useEffect(() => {
    if (token) {
      dispatch(fetchEvents(token) as any);
    }
  }, [dispatch, token]);

  const handleFavoritePress = (eventId: number) => {
    dispatch(toggleFavorite(eventId) as any);
  };

  return {
    events,
    isLoading,
    error,
    user,
    handleFavoritePress,
  };
};
