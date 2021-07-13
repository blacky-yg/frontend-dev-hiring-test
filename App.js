import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './components/Main'
import RestoList from './components/RestoList'
import RestoDetails from './components/RestoDetails'

const RoutesStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RoutesStack.Navigator initialRouteName="Home">
        <RoutesStack.Screen name="Main" component={Main} />
        <RoutesStack.Screen name="RestoList" component={RestoList} />
        <RoutesStack.Screen name="RestoDetails" component={RestoDetails} />
      </RoutesStack.Navigator>
    </NavigationContainer>
  );
}