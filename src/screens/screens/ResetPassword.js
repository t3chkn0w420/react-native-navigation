import React from 'react';
import { Text, View, TextInput, ImageBackground, Button, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
// import StyleSheet from '../styles/StyleSheet';
import InlineTextButton from './InlineTextButton';
// import { auth } from "../firebase";
// import { sendPasswordResetEmail } from 'firebase/auth';

export default function ResetPassword({ navigation }) {
  const background = require("../assets/images/logo.png");

  let [email, setEmail] = React.useState("");
  let [errorMessage, setErrorMessage] = React.useState("");

  let resetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        navigation.popToTop();
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }

  return (
    <ImageBackground style={StyleSheet.imageContainer} source={background}>
      <KeyboardAvoidingView 
        style={StyleSheet.backgroundCover} 
        behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset={60}>
        <Text style={[StyleSheet.lightText, StyleSheet.header]}>Reset Password</Text>
        <Text style={StyleSheet.errorText}>{errorMessage}</Text>
        <TextInput 
          style={[StyleSheet.textInput, StyleSheet.lightTextInput, StyleSheet.lightText]} 
          placeholder='Email' 
          placeholderTextColor="#BEBEBE"
          value={email}
          onChangeText={setEmail} />
        <View style={[StyleSheet.rowContainer, StyleSheet.topMargin]}>
          <Text style={StyleSheet.lightText}>Don't have an account? </Text>
          <InlineTextButton text="Sign Up" onPress={() => navigation.navigate("SignUp")} />
        </View>
        <Button title="Reset Password" onPress={resetPassword} color="#f7b267" />
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}
  const style = StyleSheet.create({
  imageContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16
  },
  noPadding: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "red"
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    marginVertical: 4,
  },
  fillSpace: {
    flex: 1
  },
  rightAligned: {
    justifyContent: "flex-end"
  },
  topMargin: {
    marginTop: 16
  },
  bottomMargin: {
    marginBottom: 16
  },
  rightMargin: {
    marginRight: 16
  },
  leftMargin: {
    marginLeft: 16
  },
  backgroundCover: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    opacity: 0.7,
    padding: 16
  },
  lightText: {
    color: "#fff"
  },
  errorText: {
    color: "#ff0000"
  },
  header: {
    fontSize: 20,
    alignSelf: "center"
  },
  textInput: {
    alignSelf: 'stretch',
    padding: 8,
    borderBottomWidth: 2,
    marginVertical: 8
  },
  lightTextInput: {
    borderBottomColor: "#ffffff"
  },
  darkTextInput: {
    borderBottomColor: "#000000"
  },
  inlineTextButton: {
    color: "#87F1FF"
  },
  pressedInlineTextButton: {
    color: "#87F1FF",
    opacity: 0.6
  }
});