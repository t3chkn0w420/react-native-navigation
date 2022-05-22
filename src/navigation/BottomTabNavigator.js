import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Text, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

import Analytics from '../screens/Tab/Analytics';
import About from '../screens/About';
import Home from '../screens/Home';
import Settings from '../screens/Settings';
import Profile from '../screens/Tab/Profile';

const Tab = createBottomTabNavigator()

// const BottomTabNavigator = () => {
//   return (
//     <Tab.Navigator screenOptions={{ headerShown: false }}>
//       <Tab.Screen name="HomeStack" component={HomeStackNavigator} options={{
//       //   tabBarIcon: ({ focused }) => (
//       //    //  <Icon name="home" size={30} color={focused ? '#551E18' : '#000'} />
//       //   ),
//         tabBarLabel: () => <Text style={styles.tabBarLabel}>Home</Text>
//       }}
//       />
//       <Tab.Screen name="BookStack" component={BookStackNavigator} options={{
//       //   tabBarIcon: ({ focused }) => (
//       //     <Icon name="bed" size={30} color={focused ? '#551E18' : '#000'} />
//       //   ),
//         tabBarLabel: () => <Text style={styles.tabBarLabel}>Book Room</Text>
//       }}
//       />
//       <Tab.Screen name="ContactStack" component={ContactStackNavigator} options={{
//       //   tabBarIcon: ({ focused }) => (
//       //     <Icon name="phone" size={30} color={focused ? '#551E18' : '#000'} />
//       //   ),
//         tabBarLabel: () => <Text style={styles.tabBarLabel}>Contact Us</Text>
//       }}
//       />
//     </Tab.Navigator>
//   )
// }

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Analytics" component={Analytics} 
           options={{ tabBarIcon: ({ color, size }) => (
            <Ionicons name="analytics-outline" color={'#000'} size={40} />
          ), }}/>
        
        
      <Tab.Screen name="About" component={About} />
      <Tab.Screen name="Home" component={Home} 
        options={{
          headerTitleAlign: 'center'
        }}
      />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
    
  )
}

const styles = StyleSheet.create({
  tabBarLabel: {
    color: '#292929',
    fontSize: 12,
  },
})

export default BottomTabNavigator