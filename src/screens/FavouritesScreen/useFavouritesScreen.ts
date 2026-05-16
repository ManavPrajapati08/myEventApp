import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Event } from '../../types';

export const useFavouritesScreen = () => {
  const { events } = useSelector((state: RootState) => state.events);
  const { user } = useSelector((state: RootState) => state.auth);

  const favoriteEvents = events.filter(
    (event: Event) => event.isFavorite === 1,
  );

  return {
    favoriteEvents,
    user,
  };
};
