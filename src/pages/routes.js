import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './Home'
import BluetoothConnect from './BuetoothConnect';
import ControlPainel from './ControlPainel'

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{ headerShown: false }} 
        initialRouteName='Home'
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Bluetooth" component={BluetoothConnect} />
        <Stack.Screen name="Control" component={ControlPainel} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;