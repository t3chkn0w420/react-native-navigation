import React, { useState, useEffect } from 'react'
import { SafeAreaView, StyleSheet, StatusBar, Text } from "react-native";
import { useNavigation } from '@react-navigation/core';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {   createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem } from '@react-navigation/drawer';
  import { AsyncStorage } from 'react-native';

const Stack = createNativeStackNavigator();

import AuthProvider from './AuthContext';

import DrawerNavigator from './src/navigation/DrawerNavigator';
import Navigator from './src/navigation/StackNavigator';

function navigate(){
    navigation.navigate('RegisterScreen');    
}

const App = () => {
  const [isloggedin, setLogged] = useState(null);

  const detectLogin = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      setLogged(true);
    } else {
      setLogged(false);
    }
  };
  useEffect(() => {
    detectLogin();
  }, []);


  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="Navigator"  component={Navigator} />
          <Stack.Screen name="DrawerNavigator"  component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default App;
