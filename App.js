import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './components/Main'
import Delivery from './components/Delivery'
import RestoList from './components/RestoList'
import RestoDetails from './components/RestoDetails'

const RoutesStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RoutesStack.Navigator initialRouteName="Main" headerMode='none'>
        <RoutesStack.Screen name="Main" component={Main} />
        <RoutesStack.Screen name="Delivery" component={Delivery} />
        <RoutesStack.Screen name="RestoList" component={RestoList} />
        <RoutesStack.Screen name="RestoDetails" component={RestoDetails} />
      </RoutesStack.Navigator>
    </NavigationContainer>
  );
}