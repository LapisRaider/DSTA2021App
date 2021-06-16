import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Provider as PaperProvider } from 'react-native-paper';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import AppNavigator from './Navigation/AppNavigator';
import shopReducer from './redux/reducers/shopReducer';

const rootReducer = combineReducers({
  shop: shopReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <AppNavigator />
        <StatusBar style='auto' />
      </PaperProvider>
    </Provider>
  );
}
