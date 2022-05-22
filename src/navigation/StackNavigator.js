import * as React from 'react'
import { useNavigation } from '@react-navigation/core';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
// import Profile from '../src/screens/Tab/Profile';
import { AuthContext } from '../context/AuthContexts';
import { AuthProvider } from '../../AuthContext';

const Stack = createNativeStackNavigator();

const Navigator = () => {
   // const [user] = useAuth();
   const isLoggedIn = false;
   
   if (!isLoggedIn) {
     return (
       <Stack.Navigator 
          screenOptions={{
            gestureEnabled: true,
            headerStyle: { backgroundColor: 'tomato' },
            headerTitleStyle: { fontWeight: 'bold' },
            headerTintColor: '#f8f8f8'
          }}
       >
             {/* Auth screens */}
             <Stack.Group screenOptions={{ headerShown: false }}>
               <Stack.Screen name="Login" component={LoginScreen} />
               <Stack.Screen name="Register" component={RegisterScreen} />
             </Stack.Group>
       </Stack.Navigator>
     )
   }
 
 return (
   <Stack.Navigator>
      <Stack.Group>
         <Stack.Screen name="Profile" component={Profile} />
         <Stack.Screen name="Home" component={Home} />
       </Stack.Group>
   </Stack.Navigator>
  )
 }
 
 export default Navigator;