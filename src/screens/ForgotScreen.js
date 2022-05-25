import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
 
const ForgotScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
 
  return (
    <SafeAreaView style={styles.container}>
            <View style={styles.Top}>
                  <TouchableOpacity
                      onPress={() => {navigation.goBack()}}
                  >
                      <Image source={require('../assets/images/back.png')}
                        style={{ height: 30, width: 30}}
                      />
                  </TouchableOpacity>
                </View>
      <View style={styles.inputView}>
        <Text> Forgot Password? </Text>
      <TextInput
              label={email}
              style={styles.input}
              value={email}
              placeholder="Enter email"
              onChangeText={text => setEmail(text)}
              keyboardType="email-address"
              onSubmitEditing={(value) => setName(value.nativeEvent.text)}
            />
      </View>
 
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Send</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
 
 
const styles = StyleSheet.create({
  Top: {
    marginTop: 20,
    marginLeft: -320
  },
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    marginTop: 15,
    marginBottom: 12,
    height: 50,
    width: 270,
    borderWidth: 1,
    backgroundColor: '#ccc',
    borderColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 14,
  },
 
  image: {
    marginBottom: 40,
  },
 
  inputView: {
    // backgroundColor: "#FFC0CB",
    borderColor: "000",
    borderRadius: 30,
    width: "70%",
    marginTop: 200,
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  loginText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 10,
    height: 50,
    color: '#fff',
    fontSize: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#3d3d3d",
  },
});

export default ForgotScreen;
