import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './components/HomeScreen';
import CarteirinhaScreen from './components/CarteirinhaScreen';
import { Icon } from 'react-native-elements';

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
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Carteirinha"
          component={CarteirinhaScreen}
          options={{
            tabBarLabel: 'Sair',
            tabBarIcon: ({ color, size }) => (
              <Icon name="logout" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
