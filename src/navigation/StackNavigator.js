import * as React from 'react'
import { useNavigation } from '@react-navigation/core';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ForgotScreen from '../screens/ForgotScreen';

import BottomTabNavigator from './BottomTabNavigator';
import DrawerNavigator from './DrawerNavigator';
// import Profile from '../src/screens/Tab/Profile';

const Stack = createNativeStackNavigator();

const Navigator = ({ navigation }) => {
   // const [user] = useAuth();
   const isLoggedIn = false;
   
   if (!isLoggedIn) {
     return (
       <Stack.Navigator screenOptions={{ headerShown: false }}>
             {/* Auth screens */}
             <Stack.Group screenOptions={{ headerShown: false }}>
               <Stack.Screen name="Login" component={LoginScreen} />
               <Stack.Screen name="Register" component={RegisterScreen} />
                <Stack.Screen name="Forgot" component={ForgotScreen} />
                <Stack.Screen name="Home" component={DrawerNavigator} />
             </Stack.Group>
       </Stack.Navigator>
     )
   }
 
 return (
   <Stack.Navigator>
      <Stack.Group>
         <Stack.Screen name="Profile" component={Profile} />
       </Stack.Group>
   </Stack.Navigator>
  )
 }
 export default Navigator;