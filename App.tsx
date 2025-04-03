import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './Src/Navigation/StackNavigator';

const MainNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default MainNavigator;
