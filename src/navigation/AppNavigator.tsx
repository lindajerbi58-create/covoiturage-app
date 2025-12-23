import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/home/HomeScreen';
import CreateRideScreen from '../screens/home/CreateRideScreen';
import SearchRideScreen from '../screens/home/SearchRideScreen';
import RideDetailsScreen from '../screens/home/RideDetailsScreen';
import ChatScreen from '../screens/home/ChatScreen';
import ProfileScreen from '../screens/home/ProfileScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Dashboard"
        component={HomeScreen}
        options={{ title: 'Dashboard' }}
      />
      <Stack.Screen
        name="CreateRide"
        component={CreateRideScreen}
        options={{ title: 'Post New Ride' }}
      />
      <Stack.Screen
        name="SearchRide"
        component={SearchRideScreen}
        options={{ title: 'Search Rides' }}
      />
      <Stack.Screen
  name="RideDetails"
  component={RideDetailsScreen}
  options={{ title: 'Ride Details' }}
/>
<Stack.Screen
  name="Chat"
  component={ChatScreen}
  options={{ title: 'Messaging' }}
/>
<Stack.Screen
  name="Profile"
  component={ProfileScreen}
  options={{ title: 'Profile' }}
/>


    </Stack.Navigator>
  );
}
