import React, {useContext, useState} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
} from 'react-native';
import CheckBox from 'react-native-check-box';
import { AsyncStorage } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {AuthContext} from '../context/AuthContext';

const RegisterScreen = ({ navigation }) => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agree, setAgree] = useState('true');
  
  const {isLoading, register} = useContext(AuthContext);
  
    return (
      <SafeAreaView style={styles.container}>
      <Spinner visible={isLoading} />
                  <View style={styles.Top}>
                    <TouchableOpacity
                        onPress={() => {navigation.goBack()}}
                    >
                        <Image source={require('../assets/images/back.png')}
                          style={{ height: 30, width: 30}}
                        />
                    </TouchableOpacity>
                  </View>
        <View style={styles.TopView}>
            <Image
            source={require('../assets/images/logo.png')}  
            style={styles.imagesStyle}
          />
        </View>
      
      <View style={{flexDirection: 'row', marginTop: 20}}>
            <Text>Already Have An Account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.links}>Login</Text>
            </TouchableOpacity>
          </View>
          
        {/* <Spinner visible={isLoading} /> */}
        <View style={styles.wrapper}>
                <View style={styles.sectionStyle}>
                  <TextInput
                    label={fullname}
                    style={styles.input}
                    value={fullname}
                    underlineColorAndroid="transparent"
                    placeholder="Enter Full Name"
                    onChangeText={text => setFullname(text)}
                    onSubmitEditing={(value) => setFullname(value.nativeEvent.text)}
                  />
                </View>      
          <View style={styles.sectionStyle}>
              <TextInput
                label={email}
                underlineColorAndroid="transparent"
                style={styles.input}
                value={email}
                placeholder="Enter email"
                onChangeText={text => setEmail(text)}
                keyboardType="email-address"
                onSubmitEditing={(value) => setName(value.nativeEvent.text)}
              />
          </View>
          {/* <Text>Welcome: {name}</Text> */}
          <View style={styles.sectionStyle}>
              <TouchableOpacity>
                <Image
                    source={{
                      uri:
                        'https://img.icons8.com/material-two-tone/344/closed-eye.png',
                    }}
                   />
              </TouchableOpacity>
            <TextInput
              style={styles.input}
              value={password}
              placeholder="Enter password"
              onChangeText={text => setPassword(text)}
              secureTextEntry
            />
  
          </View>
          
          <View style={{flexDirection: 'row', marginTop: 10}}>
              <CheckBox
                checked={true}
                onPress={() => setAgree(agree)}
                value={agree}
                onClick={() => setAgree(!agree)}
                onValueChange={() => setAgree(agree)}
                color={agree ? "#4630EB" : undefined}
              />
             <Text> I have read and agree to the privacy policy terms of service and community guidelines </Text>
          </View>
          
          <View style={ styles.logButton}>
              <TouchableOpacity 
                title="Register"
                // disabled={!agree}
              onPress={() => {
                register(fullname, email, password);
              }}
                >
                  <Text style={styles.logText}>Register</Text>
                </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  Top: {
    marginTop: 20,
    marginLeft: -320
  },
  TopView: {
    marginTop: 100
  },
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
    fontWeight: 'bold',
    fontSize: 25
  },
  container: {
    // flex: 1,
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
    fontWeight: 'bold',
  },
  link: {
    color: 'black',
    // fontWeight: 'bold',
    marginLeft: 50
  },
});

export default RegisterScreen;