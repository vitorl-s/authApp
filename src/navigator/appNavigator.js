/* eslint-disable no-use-before-define */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import SignUp from '../pages/SignUp/index';
import Login from '../pages/Login/index';
import { store, persistor } from '../redux/store';
import Home from '../pages/Home';
import Contact from '../pages/Contact';

const AuthStack = createStackNavigator();

const AuthRoutes = () => {
  const token = useSelector((item) => item.tokenId.tokenId);
  console.log('valor token', token);
  return (
    <AuthStack.Navigator>
      {
        !token ?
        ( <>
            <AuthStack.Screen name="Login" component={Login} options={{headerShown: false}} />
            <AuthStack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
          </>
          ) :
          <>
            <AuthStack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <AuthStack.Screen name="Contato" component={Contact} options={{ headerShown: false }} />
          </>
      }
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
