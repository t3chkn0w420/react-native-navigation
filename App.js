
// import React from 'react';
// import {StatusBar, Text, View} from 'react-native';
// import Navigation from './src/components/Navigation';
// import {AuthProvider} from './src/context/AuthContext';

// const App = () => {
//   return (
//     <AuthProvider>
//       <StatusBar backgroundColor="#06bcee" />
//       <Navigation />
//     </AuthProvider>
//   );
// };

// export default App;

import React from 'react'
import { SafeAreaView, StyleSheet, StatusBar, Text } from "react-native";
import { useNavigation } from '@react-navigation/core';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {   createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();

import DrawerNavigator from './src/navigation/DrawerNavigator';
import Navigator from './src/navigation/StackNavigator';

const App = () => {
  return (
    <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
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
