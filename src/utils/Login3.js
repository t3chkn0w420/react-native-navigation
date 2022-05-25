import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { VStack, HStack, TextInput, Button } from "@react-native-material/core";
import { useNavigation } from "@react-navigation/native";

import axios from "axios";

const Login = () => {
   
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const [isLoading,  setIsLoading] = useState(false);
   const [error, setError] = useState("");

   const handleLogin = () => {
      setIsLoading(true);
      axios({
         method: "POST",
         url: "http://192.168.1.101:3500/api/users/auth",
         params: {
            key: ''
         },
         data: {
            email,
            password
         },
      })
      .then((res) => {
          console.log(res.data, "profile");
      })
      .cactch((e) => {
         // setError("")
         console.warn(e);
         alert(e.error.message);
      })
      .finally(() => {
         setIsLoading(false);
      })
   };
   
   const navigation = useNavigation();
   
   return (
      <SafeAreaView>
         <VStack spacing={6} style={{ padding: 16 }}>
            <VStack spacing={1}>
               <Text variant="h6">Login</Text>
               <Text variant="subtitle1"> Create and account </Text>
            </VStack>
            
            <VStack spacing={2}>
               
               <TextInput
                  variant="outlined"
               //   placeholder="email"
                 keyboardType="email-address"
                 value={email}
                 onChangeText={setEmail}
               />
               
               <TextInput
                 value={password}
                 onChangeText={setPassword}
                 variant="outlined"
               //   placeholder="password"
                 keyboardType="visible-password"
               />
            </VStack>
            
            <HStack justify="between">
               <Button 
                  title="Login" 
                  variant="text" 
                  compact
                  onPress={handleLogin}
                  />
               <Button 
                  title="Register" 
                  onPress={() => navigation.navigate("Register")}
                  variant="text" 
                  // loading={isLoading}
                  // onPress={handleLogin}
                  />
            </HStack>
         </VStack>
      </SafeAreaView>
      
   )
};

const styles = StyleSheet.create({
   input: {
     height: 40,
     margin: 12,
     borderWidth: 1,
     padding: 10,
   },
 });

export default Login;