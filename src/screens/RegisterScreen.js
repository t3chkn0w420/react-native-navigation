import React, { useState } from "react";
import { SafeAreaView, Text, Button, TextInput, StyleSheet, TouchableOpacity } from "react-native";

import Home from '../screens/Home';

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = React.useState('');
   const [email, setEmail] = React.useState('');
   const [password, setPassword] = React.useState('');
 
  //  const { signIn } = React.useContext(AuthContext);
  
  const RegisterPress = () => {
    navigation.navigate('DrawerTab');
  }

   return (
     <SafeAreaView style={ styles.center }>
       <TextInput
         placeholder="Name"
         value={name}
         onChangeText={setName}
       />
       <TextInput
         placeholder="Email"
         value={email}
         onChangeText={setEmail}
       
      />
       <TextInput
         placeholder="Password"
         value={password}
         onChangeText={setPassword}
         secureTextEntry
       />
       {/* <Button title="Register" onPress={() => RegisterScreen({ name, email, password })} /> */}
       <>
       <TouchableOpacity 
        // onPress={'Register'}>
         onPress={() => navigation.navigate('DrawerNavigator')}>
        
          <Text> Register </Text>
          </TouchableOpacity>
          </>
     </SafeAreaView>
   );
 }

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default RegisterScreen;