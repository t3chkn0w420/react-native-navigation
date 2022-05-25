import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Text, StyleSheet, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

import Analytics from '../Tab/Analytics';
import About from '../Tab/About';
import HomeScreen from '../screens/HomeScreen';
import Settings from '../Tab/Settings';
import Profile from '../Tab/Profile';

import DrawerNavigator from './DrawerNavigator';
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
            <Image source={require('../assets/images/analytics.png')} style={{
              width: 30,
              height: 30
            }}></Image>
          ), navigationOptions: { title: 'Analytics Screen' } }}/>
  
        
      <Tab.Screen name="About" component={About} options={{ tabBarIcon: ({ color, size }) => (
          <Image source={require('../assets/images/messages.png')} style={{
            width: 30,
            height: 30
          }}></Image>
        )}}/>
                
      <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarIcon: ({ color, size }) => (
          <Image source={require('../assets/images/home.png')} style={{
            width: 30,
            height: 30
          }}></Image>
        )}}/>
        
      <Tab.Screen name="Settings" component={Settings} options={{ tabBarIcon: ({ color, size }) => (
          <Image source={require('../assets/images/settings.png')} style={{
            width: 30,
            height: 30
          }}></Image>
        )}}/>
                
      <Tab.Screen name="Profile" component={Profile} options={{ tabBarIcon: ({ color, size }) => ( 
                        <Image source={require('../assets/images/profile.png')} style={{
                          width: 30,
                          height: 30
                        }}></Image>
                      )}}/>
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