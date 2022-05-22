import React from "react";
import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/core';

const LoginScreen = ({ navigation }) => {
   const [email, setEmail] = React.useState('');
   const [password, setPassword] = React.useState('');
 
  //  const { signIn } = React.useContext(AuthContext);
  function navigate(){
    navigation.navigate('Register');    
}
   return (
     <View style={styles.center}>
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
       {/* <Button title="Login" onPress={() => LoginScreen({ email, password })} /> */}
       <>
       <TouchableOpacity 
        // onPress={'Register'}>
    onPress={() => navigation.navigate('Register')}>
        
          <Text> Login </Text>
          </TouchableOpacity>
          </>
     </View>
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

export default LoginScreen;