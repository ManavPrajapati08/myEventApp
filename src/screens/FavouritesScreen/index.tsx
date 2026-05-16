import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { EventCard } from '../../shared/components/organisms/EventCard';
import { useFavouritesScreen } from './useFavouritesScreen';
import { styles } from './styles';
import { useAppDispatch } from '../../redux/hooks';
import { toggleFavorite } from '../../redux/slices/eventsSlice';

export const FavouritesScreen = () => {
  const dispatch = useAppDispatch();
  const { favoriteEvents, user } = useFavouritesScreen();

  const handleFavoritePress = (eventId: number) => {
    dispatch(toggleFavorite(eventId));
  };

  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <Text style={styles.greeting}>Hello {user?.name || 'Guest'}!</Text>
      <Text style={styles.subGreeting}>Your favorite events</Text>
    </View>
  );

  const renderEmptyState = () => (
    <View style={styles.emptyContainer}>
      <Icon name="favorite-border" size={80} color="#D1D5DB" />
      <Text style={styles.emptyText}>No favorites yet</Text>
      <Text style={styles.emptySubText}>
        Start adding events to your favorites to see them here
      </Text>
    </View>
  );

  if (favoriteEvents.length === 0) {
    return (
      <SafeAreaView style={styles.centered} edges={['top']}>
        {renderHeader()}
        {renderEmptyState()}
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      {renderHeader()}
      <View style={styles.listContainer}>
        <FlatList
          data={favoriteEvents}
          keyExtractor={item => item.event_date_id.toString()}
          renderItem={({ item }) => (
            <EventCard event={item} onFavoritePress={handleFavoritePress} />
          )}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};
