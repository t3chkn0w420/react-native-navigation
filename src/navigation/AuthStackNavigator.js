import * as React from 'react'

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../LoginScreen';
import RegisterScreen from '../RegisterScreen';
import ForgotScreen from '../ForgotScreen';

const Stack = createStackNavigator();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      
      <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
      
      <Stack.Screen name="Register" component={RegisterScreen}
        options={{
          headerShown: false,
          title: 'Register',
          headerStyle: {
            backgroundColor: '#ddd', 
          },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold', 
          },
        }}
      />
      <Stack.Screen name="Forgot" component={ForgotScreen} options={{headerShown: false}} />
      
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;


{/* <>
{isSignedIn ? (
  <>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Profile" component={ProfileScreen} />
  </>
) : (
  <>
    <Stack.Screen name="SignIn" component={SignInScreen} />
    <Stack.Screen name="SignUp" component={SignUpScreen} />
  </>
)}
<Stack.Group navigationKey={isSignedIn ? 'user' : 'guest'}>
  <Stack.Screen name="Help" component={HelpScreen} />
  <Stack.Screen name="About" component={AboutScreen} />
</Stack.Group>
</> */}