import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeScreen from '../screens/DrawerScreens/HomeScreen';
import SettingsScreen from '../screens/DrawerScreens/SettingScreen';
import CustomSidebarMenu from '../components/CustomSidebarMenu';
import NavigationDrawerHeader from '../components/NavigationDrawerHeader';

import Drawer1 from '../screens/DrawerScreens/Drawer1'
import Drawer2 from '../screens/DrawerScreens/Drawer2'
import Drawer3 from '../screens/DrawerScreens/Drawer3'

import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const drawerScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="BottomTabNavigator">
      <Stack.Screen
        name="HomeScreen"
        component={BottomTabNavigator}
        options={{
          title: 'Home',
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#ccc', 
          },
          headerTintColor: '#fff', 
          headerTitleStyle: {
            fontWeight: 'bold', 
          },
        }}
      />
    </Stack.Navigator>
  );
};

const settingScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="SettingsScreen"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#307ecc',
        },
        headerTintColor: '#fff', 
        headerTitleStyle: {
          fontWeight: 'bold', 
        },
      }}>
      <Stack.Screen
        name="SettingsScreen" component={SettingsScreen}
          options={{
            title: 'Settings', 
          }}
      />
    </Stack.Navigator>
  );
};

const drawers = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#307ecc',
        },
        headerTintColor: '#fff', 
        headerTitleStyle: {
          fontWeight: 'bold', 
        },
      }}>
      <Stack.Screen
        name="Drawer1" component={Drawer1}
          options={{
            title: 'DRAWER1', 
          }}
      />
    </Stack.Navigator>
  );
};

const drawerss = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#307ecc',
        },
        headerTintColor: '#fff', 
        headerTitleStyle: {
          fontWeight: 'bold', 
        },
      }}>
      <Stack.Screen
        name="Drawer2" component={Drawer2}
          options={{
            title: 'DRAWER2', 
          }}
      />
    </Stack.Navigator>
  );
};

const drawersss = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#307ecc',
        },
        headerTintColor: '#fff', 
        headerTitleStyle: {
          fontWeight: 'bold', 
        },
      }}>
      <Stack.Screen
        name="Drawer3" component={Drawer3}
          options={{
            title: 'DRAWER3', 
          }}
      />
    </Stack.Navigator>
  );
};

const DrawerNavigation = (props) => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: '#cee1f2',
        color: '#cee1f2',
        itemStyle: {marginVertical: 5, color: 'white'},
        labelStyle: {
          color: '#d8d8d8',
        },
          }}
          screenOptions={{headerShown: false}}
            drawerContent={CustomSidebarMenu}>
          <Drawer.Screen name="drawerScreenStack" options={{drawerLabel: 'Home Screen'}} component={drawerScreenStack} />
          <Drawer.Screen name="settingScreenStack" options={{drawerLabel: 'Setting Screen'}} component={settingScreenStack}/>
          <Drawer.Screen name="drawers" options={{drawerLabel: 'Drawer1 '}} component={drawers}/>
          <Drawer.Screen name="drawerss" options={{drawerLabel: 'Drawer2 '}} component={Drawer2}/>
          <Drawer.Screen name="drawersss" options={{drawerLabel: 'Drawer3 '}} component={Drawer3}/>
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
