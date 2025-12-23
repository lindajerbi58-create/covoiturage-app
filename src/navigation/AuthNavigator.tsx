import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from '../screens/auth/WelcomeScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';

import HomeScreen from '../screens/home/HomeScreen';
import SearchRideScreen from '../screens/home/SearchRideScreen';
import CreateRideScreen from '../screens/home/CreateRideScreen';
import RideDetailsScreen from '../screens/home/RideDetailsScreen';
import ProfileScreen from '../screens/home/ProfileScreen';
import ChatScreen from '../screens/home/ChatScreen';

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />

      {/* MAIN */}
      <Stack.Screen name="Home" component={HomeScreen} />

      {/* OTHER SCREENS */}
      <Stack.Screen name="SearchRide" component={SearchRideScreen} />
      <Stack.Screen name="CreateRide" component={CreateRideScreen} />
      <Stack.Screen name="RideDetails" component={RideDetailsScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Chat" component={ChatScreen} />
    </Stack.Navigator>
  );
}
