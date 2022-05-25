import React, {useContext, Component, useState} from 'react';
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
// import Spinner from 'react-native-loading-spinner-overlay';
// import {AuthContext} from '../context/AuthContext';

// const { login } = React.useContext(AuthContext);

export default class LoginScreen extends Component {

      constructor(props) {
        super(props);
        this.state = {
          email : '',
          password : '',
          check_textInputChange : false,
          secureTextEntry : true,
        };
      }
  LoginUser=()=>{
    var email = this.state.email;
    var password = this.state.password;

    if ((email.length==0) || (password.length==0)){
      alert("Required Field Is Missing!");
    }
    else{
      var InsertAPIURL = "http://192.168.1.11/api/auth/signin";   //API to render signup

      var headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      };
      
      var Data ={
        email: email,
        password: password
      };

    fetch(InsertAPIURL,{
        method:'POST',
        headers:headers,
        body: JSON.stringify(Data) //convert data to JSON
    })
    .then((response)=>response.text()) //check response type of API (CHECK OUTPUT OF DATA IS IN JSON)
    .then((response)=>{
      alert(response[0].Message);       // If data is in JSON => Display alert msg
      this.props.navigation.navigate("Home"); //Navigate to next screen if authentications are valid
    })
    .catch((error)=>{
        alert("Error Occured" + error);
    })
    }
  }
    
    updateSecureTextEntry(){
      this.setState({
          ...this.state,
          secureTextEntry: !this.state.secureTextEntry
      });
    }
  
    updateConfirmSecureTextEntry(){
      this.setState({
          ...this.state,
          confirmSecureTextEntry: !this.state.confirmSecureTextEntry
      });
  }
  
  
render() {
    return (
      <SafeAreaView style={styles.container}>
        {/* <Spinner visible={isLoading} /> */}
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
                // label={email}
                style={styles.input}
                // value={email}
                placeholder="Enter email"
                onChangeText={email=>this.setState({email})}
                // onChangeText={text => setEmail(text)}
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
              // value={password}
              onChangeText={password=>this.setState({password})}
              placeholder="Enter password"
              secureTextEntry={this.state.secureTextEntry ? true : false}
              // onChangeText={text => setPassword(text)}
              // secureTextEntry
            />
            <TouchableOpacity
               onPress={() =>this.setState({secureTextEntry: !this.state.secureTextEntry})}
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
            {/* <Switch
              trackColor={{ false: "#ccc", true: "#999" }}
              // thumbColor={isEnabled ? "#3d3d3d" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              // onValueChange={toggleSwitch}
              // value={isEnabled}
          /> */}
          <Text> Remember Me? </Text>
                  
            <TouchableOpacity 
              onPress={() => navigation.navigate('Forgot')}
            >
              <Text style={styles.link}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          
          <View style={ styles.logButton}>
              <TouchableOpacity
                onPress={()=>{
                  this.LoginUser()
                }}
              // onPress={() => {
              //     login(email, password);
              //   }}
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
  }
}

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
