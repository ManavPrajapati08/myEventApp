import { useSelector } from 'react-redux';

export const useFavouritesScreen = () => {
  const { events } = useSelector((state: any) => state.events);
  const { user } = useSelector((state: any) => state.auth);

  const favoriteEvents = events.filter((event: any) => event.isFavorite === 1);

  return {
    favoriteEvents,
    user,
  };
};
