import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './components/HomeScreen';
import CarteirinhaScreen from './components/CarteirinhaScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: { backgroundColor: '#6200ee' },
          tabBarActiveTintColor: '#fff',
        }}
      >
        <Tab.Screen
          name="Início"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Início',
          }}
        />
        <Tab.Screen
          name="Carteirinha"
          component={CarteirinhaScreen}
          options={{
            tabBarLabel: 'Carteirinha',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
