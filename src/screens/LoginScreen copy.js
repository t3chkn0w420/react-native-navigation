import React, {useContext, Component, createRef, useState} from 'react';
import {
  Text,
  Keyboard,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  Switch,
  ScrollView
} from 'react-native';

import { AsyncStorage } from 'react-native';
import Loader from './components/Loader';
// import Spinner from 'react-native-loading-spinner-overlay';
// import {AuthContext} from '../context/AuthContext';

const LoginScreen = ({navigation}) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
const [agree, setAgree] = useState('');
 
  const passwordInputRef = createRef();
 
  const handleLogin = () => {
    setErrortext('');
    if (!userEmail) {
      alert('Please fill Email');
      return;
    }
    if (!userPassword) {
      alert('Please fill Password');
      return;
    }
    setLoading(true);
    let dataToSend = {email: userEmail, password: userPassword};
    let formBody = [];
    for (let key in dataToSend) {
      let encodedKey = encodeURIComponent(key);
      let encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');
 
    fetch('http://192.168.1.11/api/auth/signin', {
      method: 'POST',
      body: formBody,
      headers: {
        'Content-Type':
        'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        setLoading(false);
        console.log(responseJson);
        // If server response message same as Data Matched
        if (responseJson.status === 'success') {
          AsyncStorage.setItem('user_id', responseJson.data.email);
          console.log(responseJson.data.email);
          navigation.replace('DrawerNavigation');
        } else {
          setErrortext(responseJson.msg);
          navigation.replace('DrawerNavigation');
          // console.log('Please check your email id or password');
        }
      })
      .catch((error) => {
        //Hide Loader
        setLoading(false);
        console.error(error);
      });
};
    //   updateSecureTextEntry(){
    //     this.setState({
    //         ...this.state,
    //         secureTextEntry: !this.state.secureTextEntry
    //     });
    //   }
    
    //   updateConfirmSecureTextEntry(){
    //     this.setState({
    //         ...this.state,
    //         confirmSecureTextEntry: !this.state.confirmSecureTextEntry
    //     });
    // }
  return (
    <SafeAreaView style={styles.container}>
      {/* <Spinner visible={isLoading} /> */}
      <Loader loading={loading} />
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{
            flex: 1,
            justifyContent: 'center',
            alignContent: 'center',
          }}>
      <View style={{ alignItems: 'center' }}>
          <Image
          source={require('./assets/images/logo.png')}  
          style={styles.imagesStyle}
        />
      </View>
    
      <KeyboardAvoidingView enabled>
        <View style={{flexDirection: 'row', marginLeft: 80, marginTop: 20}}>
          <Text>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.links}>Register</Text>
          </TouchableOpacity>
        </View>
        
      <View style={styles.FormView}>
      
              <View style={styles.sectionStyle}>
                  <Image
                      source={{
                        uri:
                          'https://img.icons8.com/plumpy/344/user.png',
                      }}
                      style={styles.imageStyle}
                    />
                  <TextInput
                    // label={email}
                    style={styles.input}
                    // value={email}
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardAppearance='dark'
                    returnKeyType='next'
                    icon='mail'
                    autoCompleteType='email'
                    returnKeyLabel='next'
                    placeholderTextColor="#8b9cb5"
                    placeholder="Enter email"
                    textContentType="emailAddress"
                    // activeUnderlineColor="green" //when this TextInput is active, change its accent color to green
                    // underlineColor="purple"
                    underlineColorAndroid="#f000"
                    blurOnSubmit={false}
                    enablesReturnKeyAutomatically
                    // onChangeText={text => setEmail(text)}
                    onChangeText={(UserEmail) => setUserEmail(UserEmail)}
                    // onChangeText={email=>this.setState({email})}
                    keyboardType="email-address"
                    onSubmitEditing={() =>
                      passwordInputRef.current && passwordInputRef.current.focus()
                    }
                    // onSubmitEditing={(value) => setName(value.nativeEvent.text)}
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
                  // value={password}
                  placeholderTextColor="#8b9cb5"
                  keyboardType="default"
                  ref={passwordInputRef}
                  onSubmitEditing={Keyboard.dismiss}
                  blurOnSubmit={false}
                  underlineColorAndroid="#f000"
                  returnKeyType="next"
                  secureTextEntry={true}
                  // onChangeText={password=>this.setState({password})}
                  placeholder="Enter password"
                  onChangeText={(UserPassword) => setUserPassword(UserPassword)}
                  // secureTextEntry={this.state.secureTextEntry ? true : false}
                  // onChangeText={text => setPassword(text)}
                  // secureTextEntry
                />
                <TouchableOpacity
                  //  onPress={() =>this.setState({secureTextEntry: !this.state.secureTextEntry})}
                >
                  <Image
                      name={true ? "eye-off" : "eye"} size={25}
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
            // thumbColor={isEnabled ? "#3d3d3d" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            // onValueChange={toggleSwitch}
            // value={isEnabled}
            
             value={agree}
                      onValueChange={() => setAgree(!agree)}
        color={agree ? "#4630EB" : undefined}
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
            //  disabled={!agree}
              activeOpacity={0.5}
              // style={styles.buttonStyle}
              onPress={handleLogin}
            >
                <Text style={styles.logText}>Login</Text>
              </TouchableOpacity>
        </View>
      </View>
      {errortext != '' ? (
            <Text style={styles.errorTextStyle}> {errortext} </Text>
          ) : null}
      
      
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
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
}
export default LoginScreen;

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
  FormView: {
    marginLeft: 30,
    marginTop: 10,
    width: '80%',
    alignItems: 'center'
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