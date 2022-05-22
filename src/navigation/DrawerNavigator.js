import React from 'react';
import { Text, StyleSheet, View } from 'react-native'

import { createDrawerNavigator } from '@react-navigation/drawer';

// import Drawer1 from '../screens/Drawer/Drawer1';
// import Drawer2 from '../screens/Drawer/Drawer2';
// import Drawer3 from '../screens/Drawer/Drawer3';
// import Home from '../screens/Home';

import BottomTabNavigator from './BottomTabNavigator';

import HomeStackNavigator from './stack-navigators/HomeStackNavigator';
import MyRewardsStackNavigator from './stack-navigators/MyRewardsStackNavigator';
import LocationsStackNavigator from './stack-navigators/LocationStackNavigator';

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      {/* <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Drawer1" component={Drawer1} />
      <Drawer.Screen name="Drawer2" component={Drawer2} />
      <Drawer.Screen name="Drawer3" component={Drawer3} /> */}
      <Drawer.Screen name="HomeTabs" component={BottomTabNavigator} />
      <Drawer.Screen name="MyRewardsStack" component={MyRewardsStackNavigator} />
      <Drawer.Screen name="LocationsStack" component={LocationsStackNavigator} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator
// export default DrawerNavigator