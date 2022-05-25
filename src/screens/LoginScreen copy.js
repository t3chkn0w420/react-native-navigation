import React, {useContext, useState} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  Switch,
} from 'react-native';

import { AsyncStorage } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {AuthContext} from '../context/AuthContext';

// const { login } = React.useContext(AuthContext);

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEnabled, setIsEnabled] = useState('false');
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
  const {isLoading, login} = useContext(AuthContext);
  
  const checkTextInput = () => {
    if (!email.trim()) {
      alert('Please Enter Email');
      return;
    }
    if (!password.trim()) {
      alert('Please Enter Password');
      return;
    }
    alert('Success');
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <Spinner visible={isLoading} />
      <View style={styles.TopView}>
          <Image
          source={require('../assets/images/logo.png')}  
          style={styles.imagesStyle}
        />
      </View>
    
    <View style={{flexDirection: 'row', marginTop: 20}}>
          <Text>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.links}>Register</Text>
          </TouchableOpacity>
        </View>
        
      <View style={styles.wrapper}>
        <View style={styles.sectionStyle}>
            <Image
                source={{
                  uri:
                    'https://img.icons8.com/plumpy/344/user.png',
                }}
                style={styles.imageStyle}
              />
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
        
        <View style={styles.sectionStyle}>
          <Image
              source={{
                uri:
                  'https://img.icons8.com/plumpy/344/forgot-password.png',
              }}
              style={styles.imageStyle}
            />
          
          <TextInput
            style={styles.input}
            value={password}
            placeholder="Enter password"
            onChangeText={text => setPassword(text)}
            secureTextEntry
          />
          <TouchableOpacity>
            <Image
                source={{
                  uri:
                    'https://img.icons8.com/material-two-tone/344/closed-eye.png',
                }}
                style={styles.eyeStyle}
            />
          </TouchableOpacity>
        </View>
        
        
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <Switch
            trackColor={{ false: "#ccc", true: "#999" }}
            thumbColor={isEnabled ? "#3d3d3d" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
        <Text> Remember Me? </Text>
                
          <TouchableOpacity 
            onPress={() => navigation.navigate('Forgot')}
          >
            <Text style={styles.link}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        
        <View style={ styles.logButton}>
            <TouchableOpacity
            onPress={() => {
                login(email, password);
              }}
            >
                <Text style={styles.logText}>Login</Text>
              </TouchableOpacity>
        </View>
      </View>
      
      
      <View style={styles.bottom}>
        <TouchableOpacity
            style={styles.buttonFacebookStyle}
            activeOpacity={0.5}>
            <Image
              source={{
                uri:
                  'https://img.icons8.com/plumpy/452/facebook-new.png',
              }}
              style={styles.buttonImageIconStyle}
            />
            <View style={styles.buttonIconSeparatorStyle} />
            <Text style={styles.buttonTextStyle}>
             Facebook
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.buttonGPlusStyle}
            activeOpacity={0.5}>
            <Image
              source={{
                uri:
                  'https://img.icons8.com/material-two-tone/344/google-logo.png',
              }}
              style={styles.buttonImageIconStyle}
            />
            <View style={styles.buttonIconSeparatorStyle} />
            <Text style={styles.buttonTextStyle}>
              Google
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.buttonFacebookStyle}
            activeOpacity={0.5}>
            <Image
              source={{
                uri:
                  'https://img.icons8.com/material-two-tone/344/github.png',
              }}
              style={styles.buttonImageIconStyle}
            />
            <View style={styles.buttonIconSeparatorStyle} />
            <Text style={styles.buttonTextStyle}>
             Github
            </Text>
          </TouchableOpacity>
      </View>
      <>
        <TouchableOpacity
        //  onPress ={() navigation.navigate('OtpScreen')}
        >
          <Text>use SMS</Text>
        </TouchableOpacity>
      </>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionStyle: {
    width: 300,
    borderColor: '#ccc',
    flexDirection: 'row',
    borderWidth: 1.5,
    borderRadius: 5,
    margin: 8,
    borderRadius: 10
    // padding: 109/
    // mareginTop: 15
  },
  imageStyle: {
    padding: 10,
    margin: 5,
    height: 35,
    width: 35,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  eyeStyle: {
    // padding: 10,
    marginTop: 10,
    marginLeft: 90,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  imagesStyle: {
    height: 50,
    width: 250
  },
  bottom: {
    flexDirection: 'row',
    marginTop: 20
  },
  buttonGPlusStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ccc',
    borderWidth: 0.5,
    color: '#000',
    borderColor: '#fff',
    height: 40,
    borderRadius: 5,
    width: 120,
    margin: 5,
  },
  buttonFacebookStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ccc',
    borderWidth: 0.5,
    borderColor: '#fff',
    color: '#000',
    width: 120,
    height: 40,
    borderRadius: 5,
    margin: 5,
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
  },
  buttonTextStyle: {
    color: '#000',
    marginBottom: 4,
    marginLeft: 10,
  },
  buttonIconSeparatorStyle: {
    backgroundColor: '#fff',
    width: 1,
    height: 40,
  },
  logButton: {
    marginTop: 20,
    backgroundColor: '#3d3d3d',
    height: 50,
    justifyContent: 'center',
    marginLeft: 35,
    width: 250,
    borderRadius: 10
  },
  logText: {
    // marginTop: 8,
    textAlign: 'center',
    color: '#fff',
    // fontWeight: 'bold',
    fontSize: 25
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    marginTop: 10,
    width: '80%',
  },
  input: {
    // marginTop: 15
    // marginBottom: 12,
    // width: 270,
    // borderWidth: 1,
    // borderColor: '#bbb',
    // borderRadius: 5,
    // paddingHorizontal: 14,
  },
  links: {
    color: '#000',
    // fontWeight: 'bold',
  },
  link: {
    color: 'black',
    // fontWeight: 'bold',
    marginLeft: 50
  },
});

export default LoginScreen;