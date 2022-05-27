import 'react-native-gesture-handler';

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from './src/SplashScreen';
import AuthStackNavigator from './src/navigation/AuthStackNavigator';
import DrawerNavigation from './src/navigation/DrawerNavigation';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false}} />
        
        <Stack.Screen name="Auth" component={AuthStackNavigator} options={{headerShown: false}} />
        
         <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
