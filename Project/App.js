import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Provider as PaperProvider } from 'react-native-paper';

import AppNavigator from './Navigation/AppNavigator';

export default function App() {
  return (
    <PaperProvider>
      <AppNavigator />
      <StatusBar style='auto' />
    </PaperProvider>
  );
}
