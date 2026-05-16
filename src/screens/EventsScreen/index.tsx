import React from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { EventCard } from '../../shared/components/organisms/EventCard';
import { useEventsScreen } from './useEventsScreen';
import { styles } from './styles';

export const EventsScreen = () => {
  const { events, isLoading, error, user, handleFavoritePress } =
    useEventsScreen();

  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <Text style={styles.greeting}>Hello {user?.name || 'Guest'}!</Text>
      <Text style={styles.subGreeting}>Are you ready to dance?</Text>
    </View>
  );

  if (isLoading && events.length === 0) {
    return (
      <SafeAreaView style={styles.centered} edges={['top']}>
        {renderHeader()}
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#10B981" />
        </View>
      </SafeAreaView>
    );
  }

  if (error && events.length === 0) {
    return (
      <SafeAreaView style={styles.centered} edges={['top']}>
        {renderHeader()}
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      {renderHeader()}
      <View style={styles.listContainer}>
        <FlatList
          data={events}
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
