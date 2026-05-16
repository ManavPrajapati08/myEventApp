import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { ArrowRight, Upload, Heart } from 'lucide-react-native';
import { Event } from '../../../types';
import { Tag } from '../atoms/Tag';
import { styles } from './EventCard.styles';

interface EventCardProps {
  event: Event;
  onFavoritePress: (eventId: number) => void;
}

export const EventCard = ({ event, onFavoritePress }: EventCardProps) => {
  const priceRange =
    event.event_price_from && event.event_price_to
      ? `€${event.event_price_from} - €${event.event_price_to}`
      : '€0';

  const renderImage = () => (
    <Image
      source={{ uri: event.event_profile_img }}
      style={styles.image}
      resizeMode="cover"
    />
  );

  const renderHeader = () => (
    <View style={styles.headerRow}>
      <Text style={styles.title} numberOfLines={1}>
        {event.event_name}
      </Text>
      <ArrowRight size={18} color="#666" />
    </View>
  );

  const renderDetails = () => (
    <View style={styles.detailsRow}>
      <Text style={styles.dateText}>{event.readable_from_date}</Text>
      <Text
        style={styles.locationText}
      >{`${event.city}, ${event.country}`}</Text>
    </View>
  );

  const renderPrice = () => <Text style={styles.priceText}>{priceRange}</Text>;

  const renderTags = () => (
    <View style={styles.tagsContainer}>
      {event.danceStyles?.[0] && <Tag label={event.danceStyles[0].ds_name} />}
      {event.danceStyles?.[1] && <Tag label={event.danceStyles[1].ds_name} />}
    </View>
  );

  const renderActions = () => (
    <View style={styles.actionsContainer}>
      <TouchableOpacity style={styles.iconButton}>
        <Upload size={20} color="#666" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconButton}
        onPress={() => onFavoritePress(event.event_date_id)}
      >
        <Heart
          size={20}
          color={event.isFavorite === 1 ? '#10B981' : '#666'}
          fill={event.isFavorite === 1 ? '#10B981' : 'none'}
        />
      </TouchableOpacity>
    </View>
  );

  const renderFooter = () => (
    <View style={styles.footerRow}>
      {renderTags()}
      {renderActions()}
    </View>
  );

  return (
    <View style={styles.cardContainer}>
      {renderImage()}
      <View style={styles.contentContainer}>
        {renderHeader()}
        {renderDetails()}
        {renderPrice()}
        {renderFooter()}
      </View>
    </View>
  );
};
