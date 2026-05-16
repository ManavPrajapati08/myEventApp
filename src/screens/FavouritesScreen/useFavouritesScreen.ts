import { useAppSelector } from '../../redux/hooks';
import { Event } from '../../types';

export const useFavouritesScreen = () => {
  const { events } = useAppSelector(state => state.events);
  const { user } = useAppSelector(state => state.auth);

  const favoriteEvents = events.filter(
    (event: Event) => event.isFavorite === 1,
  );

  return {
    favoriteEvents,
    user,
  };
};
