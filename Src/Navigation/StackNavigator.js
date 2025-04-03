import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {LogBox} from 'react-native';
import Events from '../Screens/Events';

LogBox.ignoreAllLogs();
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureDirection: 'horizontal',
        animation: 'default',
        gestureEnabled: false,
        headerShown: false,
      }}
      initialRouteName="Events">
      <Stack.Screen name="Events" component={Events} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
