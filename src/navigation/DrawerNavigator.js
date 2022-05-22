import React from 'react';
import { Text, StyleSheet, View } from 'react-native'

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem 
} from '@react-navigation/drawer';

import Drawer1 from '../screens/Drawer/Drawer1';
import Drawer2 from '../screens/Drawer/Drawer2';
import Profile from '../screens/Tab/Profile';
import BottomTabNavigator from './BottomTabNavigator';
const Drawer = createDrawerNavigator()

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

const DrawerNavigator = () => {
  return (
        <Drawer.Navigator initialRouteName='Main' screenOptions={{ headerShown: true }}
        useLegacyImplementation
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
          <Drawer.Screen name="Main" component={BottomTabNavigator}
            options={{ headerTitleAlign: 'center', headerShown: true }}
          />
          <Drawer.Screen name="Drawer1" component={Drawer1} />
          <Drawer.Screen name="Drawer2" component={Drawer2} />
          <Drawer.Screen name="Profile" component={Profile} />
        </Drawer.Navigator>
  )
}

export default DrawerNavigator;
