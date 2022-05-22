import React from 'react'
import { SafeAreaView, StyleSheet, StatusBar, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {   createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

import Home from './src/screens/Home';
import About from './src/screens/About';
import Settings from './src/screens/Settings';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import Analytics from './src/screens/Tab/Analytics';
import Profile from './src/screens/Tab/Profile';

import Tab1 from './src/screens/Tab/Tab1';
import Tab2 from './src/screens/Tab/Tab2';
import Tab3 from './src/screens/Tab/Tab3';

import Drawer1 from './src/screens/Drawer/Drawer1';
import Drawer2 from './src/screens/Drawer/Drawer2';
import Drawer3 from './src/screens/Drawer/Drawer3';

import DrawerNavigator from './src/navigation/DrawerNavigator';
// import BottomTabNavigator from './src/navigation/BottomTabNavigator';

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}

function DrawerTab() {
  return (
        <Drawer.Navigator initialRouteName='Home' screenOptions={{ headerShown: true }}
        useLegacyImplementation
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
          <Drawer.Screen name="Home" component={BottomTab} />
          <Drawer.Screen name="Drawer1" component={Drawer1} />
          <Drawer.Screen name="Drawer2" component={Drawer2} />
          <Drawer.Screen name="Drawer3" component={Drawer3} />
        </Drawer.Navigator>
  )
}

function BottomTab() {
  return (
    <Tab.Navigator initialRouteName='Home,' screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Analytics" component={Analytics} />
      <Tab.Screen name="About" component={About} />
      <Tab.Screen name="Home," component={Home} />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
    
  )
}

const App = () => {
  return (
    <NavigationContainer>
          {/* <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}> */}
            <DrawerTab />
              {/* <Stack.Screen name="Home" component={BottomTab} />
              <Stack.Screen name="About"  component={About} />
              <Stack.Screen name="Contact"  component={Contact} />
              
              <Stack.Screen name="LoginScreen"  component={LoginScreen} />
              <Stack.Screen name="RegisterScreen"  component={RegisterScreen} /> */}
          {/* </Stack.Navigator> */}
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
