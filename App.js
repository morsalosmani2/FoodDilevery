import React from 'react';
import { StyleSheet } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './Screens/Home';
import Detail from './Screens/Detail';
import Favorite from './Screens/Favorite';
import Profile from './Screens/Profile';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
  export default function BottomNavigation() {
    return (
      <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Food"
            tabBarOptions={{
              activeTintColor: '#841584',
            }}>
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
              }}  />
            <Tab.Screen
              name="Favorite"
              component={FavoriteStack}
              options={{
                tabBarLabel: 'Favorite',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons
                    name="heart"
                    color={color}
                    size={size}
                  />
                ),
              }} />
              <Tab.Screen
                  name="Profile"
                  component={ProfileStack}
                  options={{
                  tabBarLabel: 'Profile',
                  tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcons
                      name="account"
                      color={color}
                      size={size}
                      />
                  ),
              }} />
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
          }}>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: 'Home Page' }}/>
          <Stack.Screen
              name="Detail"
              component={Detail}/>
        </Stack.Navigator>
    );
  }
  
  function FavoriteStack() {
    return (
      <Stack.Navigator
        initialRouteName="Favorite"
        screenOptions={{
          headerStyle: { backgroundColor: '#841584' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}>
        <Stack.Screen
          name="Favorite"
          component={Favorite}
          options={{ title: 'Favorite Page' }}/>
      </Stack.Navigator>
    );
  }

  function ProfileStack() {
    return (
      <Stack.Navigator
        initialRouteName="Profile"
        screenOptions={{
          headerStyle: { backgroundColor: '#841584' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}>
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ title: 'Profile Page' }}/>
      </Stack.Navigator>
    );
  }
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  image: {
    width: 350, 
    height: 200, 
    margin: 4,
    borderRadius: 20
  }
});
