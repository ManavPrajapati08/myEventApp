import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Search, Calendar, Heart, User } from 'lucide-react-native';
import { EventsScreen } from '../screens/EventsScreen/index';
import { SearchScreen } from '../screens/SearchScreen';
import { FavouritesScreen } from '../screens/FavouritesScreen/index';
import { ProfileScreen } from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const getTabBarIcon = (
  routeName: string,
  focused: boolean,
  color: string,
  size: number,
) => {
  switch (routeName) {
    case 'Search':
      return <Search color={color} size={size} />;
    case 'Events':
      return <Calendar color={color} size={size} />;
    case 'Favourites':
      return (
        <Heart color={color} size={size} fill={focused ? color : 'none'} />
      );
    case 'Profile':
      return <User color={color} size={size} fill={focused ? color : 'none'} />;
    default:
      return <Search color={color} size={size} />;
  }
};

export const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Events"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#10B981',
        tabBarInactiveTintColor: '#9CA3AF',
        tabBarIcon: ({ focused, color, size }) =>
          getTabBarIcon(route.name, focused, color, size),
      })}
    >
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Events" component={EventsScreen} />
      <Tab.Screen name="Favourites" component={FavouritesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
