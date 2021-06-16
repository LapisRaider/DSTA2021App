import React from "react";
import { StatusBar } from "expo-status-bar";
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import { LogBox } from "react-native";

import AppNavigator from "./Navigation/AppNavigator";
import shopReducer from "./redux/reducers/shopReducer";

const rootReducer = combineReducers({
  shop: shopReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#FFE32C",
  },
};
LogBox.ignoreAllLogs();
export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <AppNavigator />
        <StatusBar style="auto" />
      </PaperProvider>
    </Provider>
  );
}
