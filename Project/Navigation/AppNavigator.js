import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';

import * as actions from '../redux/actions/actions';
import AuthScreen from '../Screens/AuthScreen';
import ShopScreen from '../Screens/ShopScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import OpenJioScreen from '../Screens/OpenJioScreen';
import GroupBuyScreen from '../Screens/GroupBuyScreen';
import ChatScreen from '../Screens/ChatScreen';
import paymentScreen from '../Screens/paymentScreen';
import ConfirmPayScreen from '../Screens/ConfirmPayScreen';

const App = createStackNavigator();
const Auth = createStackNavigator();
const Tabs = createBottomTabNavigator();
const Orders = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Auth.Navigator headerMode='none'>
      <Auth.Screen name='Auth' component={AuthScreen} />
    </Auth.Navigator>
  );
};

const OrdersNavigator = () => (
  <Orders.Navigator headerMode='none' initialRouteName='Shop'>
    <Orders.Screen name='Shop' component={ShopScreen} />
    <Orders.Screen name='ShopForm' component={OpenJioScreen} />
    <Orders.Screen name='GroupBuy' component={GroupBuyScreen} />
    <Orders.Screen name='Chat' component={ChatScreen} />
    <Orders.Screen name='Payment' component={paymentScreen} />
    <Orders.Screen name='ConfirmPay' component={ConfirmPayScreen} />
  </Orders.Navigator>
);

const TabsNavigator = () => {
  return (
    <Tabs.Navigator
      initialRouteName='Shop'
      tabBarOptions={{ activeTintColor: '#FFD52C' }}
    >
      <Tabs.Screen
        name='OrdersNavigator'
        component={OrdersNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name='shoppingcart' size={size} color={color} />
          ),
          tabBarLabel: 'Shop'
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

const AppNavigator = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(actions.getShops());
  }, []);

  return (
    <NavigationContainer>
      <AppStackNavigator />
    </NavigationContainer>
  );
};
export default AppNavigator;
