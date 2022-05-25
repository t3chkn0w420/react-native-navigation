import React from 'react';
import { Text, StyleSheet, View } from 'react-native'

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem 
} from '@react-navigation/drawer';

// import HomeScreen from '../screens/HomeScreen';
import Drawer1 from '../Drawer/Drawer1';
import Drawer2 from '../Drawer/Drawer2';
import Drawer3 from '../Drawer/Drawer3';
// import Profile from '../Tab/Profile';
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
        <Drawer.Navigator screenOptions={{ headerShown: false }}
        useLegacyImplementation
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
          <Drawer.Screen name="Home" component={BottomTabNavigator}
            options={{ 
              headerStyle: {
                backgroundColor: "rgb(0, 145, 234)",
              },
              headerTintColor: "white",
              headerTitleStyle: {
                fontWeight: "bold",
                color: "white",
              },
            headerTitleAlign: 'center', headerTitle:'', headerShown: true }}
          />
          <Drawer.Screen name="Drawer1" component={Drawer1} />
          <Drawer.Screen name="Drawer2" component={Drawer2} />
          <Drawer.Screen name="Drawer3" component={Drawer3} />
          {/* <Drawer.Screen name="Profile" component={Profile} /> */}
        </Drawer.Navigator>
  )
}

export default DrawerNavigator;
