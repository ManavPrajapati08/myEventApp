import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
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
      <Icon name="arrow-forward" size={18} color="#666" />
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
      {event.danceStyles?.slice(0, 2).map((style: any, index: number) => (
        <Tag key={index} label={style.ds_name} />
      ))}
    </View>
  );

  const renderActions = () => (
    <View style={styles.actionsContainer}>
      <TouchableOpacity style={styles.iconButton}>
        <Icon name="ios-share" size={20} color="#666" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconButton}
        onPress={() => onFavoritePress(event.event_id)}
      >
        <Icon
          name={event.isFavorite === 1 ? 'favorite' : 'favorite-border'}
          size={20}
          color={event.isFavorite === 1 ? '#10B981' : '#666'}
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
