import React from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";

const RegisterScreen = ({ navigation }) => {
   const [username, setUsername] = React.useState('');
   const [password, setPassword] = React.useState('');
 
   const { signIn } = React.useContext(AuthContext);
 
   return (
     <View>
       <TextInput
         placeholder="Username"
         value={username}
         onChangeText={setUsername}
       />
       <TextInput
         placeholder="Password"
         value={password}
         onChangeText={setPassword}
         secureTextEntry
       />
       <Button title="Sign in" onPress={() => signIn({ username, password })} />
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

export default RegisterScreen;