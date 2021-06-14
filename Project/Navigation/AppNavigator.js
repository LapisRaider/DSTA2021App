import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';

import { ShopScreen, ProfileScreen } from '../Screens/index';

const Tabs = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <Tabs.Navigator
      initialRouteName='Shop'
      tabBarOptions={{ activeTintColor: '#FFC300' }}
    >
      <Tabs.Screen
        name='Shop'
        component={ShopScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name='user' size={size} color={color} />
          )
        }}
      />
      <Tabs.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name='shoppingcart' size={size} color={color} />
          )
        }}
      />
    </Tabs.Navigator>
  );
};

const AppNavigator = () => (
  <NavigationContainer>
    <TabsNavigator />
  </NavigationContainer>
);
export default AppNavigator;
