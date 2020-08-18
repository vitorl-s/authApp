/* eslint-disable no-use-before-define */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector, Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import SignUp from '../pages/SignUp/index';
import Login from '../pages/Login/index';
import { store, persistor } from '../redux/store';

const AuthStack = createStackNavigator();

const AuthRoutes = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
    </AuthStack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <AuthRoutes />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default AppNavigator;
