import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


import Home from './Screens/Home'





export default function App() {
  return (
    <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Food"
            tabBarOptions={{
              activeTintColor: '#841584',
            }}
            >

<Tab.Screen
              name="Home"
              component={HomeStack}
              options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons
                    name="home"
                    color={color}
                    size={size}
                  />
                ),
              }}/>

            </Tab.Navigator>
            </NavigationContainer>
  );
}

function HomeStack() {
  return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#841584' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}
        >
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: 'Home Page' }}
            />
</Stack.Navigator>

  )}


const styles = StyleSheet.create({
 
})
