import React, {useState} from 'react';
import {StyleSheet, Text, Button, TextInput, Headline, TouchableOpacity, View} from 'react-native';
import { AsyncStorage } from 'react-native';


export default function RegisterScreen(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const sendCred = async props => {
  //   fetch('http://10.0.2.2:3000/signup', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       email: email,
  //       password: password,
  //     }),
  //   })
  //     .then(res => res.json())
  //     .then(async data => {
  //       try {
  //         await AsyncStorage.setItem('token', data.token);
  //         props.navigation.replace('home');
  //       } catch (e) {
  //         console.log('error hai', e);
  //       }
  //     });
  // };
  return (
    <View style={styles.container}>
      {/* <Text>
        <Headline style={{alignItems: 'center'}}>create new account</Headline>;
      </Text> */}
      <View style={styles.inputContainer}>
        <View>
          <TextInput
          style={styles.textinput}
            mode="flat"
            label="email"
            value={email}
            placeholder="enter your email"
            onChangeText={text => setEmail(text)}
          />
        </View>
        <View style={{marginTop: 15, marginBottom: 15}}>
          <TextInput
          style={styles.textinput}
            label="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={text => {
              setPassword(text);
            }}
            right={<TextInput.Icon name="eye" />}
          />
        </View>
        <View>
          <Button
            mode="contained"
            style={{marginLeft: 18, marginRight: 18, marginTop: 18}}
            onPress={() => sendCred(props)}>
            signup
          </Button>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 18,
                marginLeft: 18,
                marginTop: 20,
              }}
              onPress={() => props.navigation.replace('login')}>
              already have a account ? ?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    padding: 20,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  inputContainer: {
    marginTop: 20,
  },
  textinput: {
    height: "5%",
    width: "50%",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#6168db",
    paddingHorizontal: 10
  }
});