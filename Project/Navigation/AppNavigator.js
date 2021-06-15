import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign } from '@expo/vector-icons';

import AuthScreen from '../Screens/AuthScreen';
import ShopScreen from '../Screens/ShopScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import OpenJioScreen from '../Screens/OpenJioScreen';

const App = createStackNavigator();
const Auth = createStackNavigator();
const Tabs = createBottomTabNavigator();

const AuthNavigator = () => {
  return (
    <Auth.Navigator headerMode='none'>
      <Auth.Screen name='Auth' component={AuthScreen} />
    </Auth.Navigator>
  );
};

const TabsNavigator = () => {
  return (
    <Tabs.Navigator
      initialRouteName='Shop'
      tabBarOptions={{ activeTintColor: '#FFC300' }}
    >
      <Tabs.Screen
        name='Shop'
        component={OpenJioScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name='shoppingcart' size={size} color={color} />
          )
        }}
      />
      <Tabs.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name='user' size={size} color={color} />
          )
        }}
      />
    </Tabs.Navigator>
  );
};

const AppStackNavigator = () => {
  return (
    <App.Navigator headerMode='none'>
      <App.Screen name='AuthNavigator' component={AuthNavigator} />
      <App.Screen name='TabsNavigator' component={TabsNavigator} />
    </App.Navigator>
  );
};

const AppNavigator = () => (
  <NavigationContainer>
    <AppStackNavigator />
  </NavigationContainer>
);
export default AppNavigator;
