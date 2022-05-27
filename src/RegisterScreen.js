import React, {useContext, createRef, useState} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  Switch,
  SafeAreaView,
  KeyboardAvoidingView,
  Keyboard,
  ScrollView,
  AsyncStorage
} from 'react-native';

import CheckBox from 'react-native-check-box';

const RegisterScreen = ({ navigation, props }) => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [agree, setAgree] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  
  const [
    isRegistraionSuccess,
    setIsRegistraionSuccess
  ] = useState(false);
 
  const emailInputRef = createRef();
  const passwordInputRef = createRef();
  
  const handleRegister = () => {
    setErrortext('');
    if (!userName) {
      alert('Please fill Name');
      return;
    }
    if (!userEmail) {
      alert('Please fill Email');
      return;
    }
    if (!userPassword) {
      alert('Please fill Password');
      return;
    }
    //Show Loader
    setLoading(true);
    var dataToSend = {
      name: userName,
      email: userEmail,
      password: userPassword,
    };
    
    const storeData = async (value) => {
      try {
        await AsyncStorage.setItem('dataToSend', value)
      } catch (e) {
      }
      console.log('Done.')
    }
    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');
 
    fetch('http://192.168.1.11:4200/api/auth/signup', {
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
        if (responseJson.status === 'success') {
          setIsRegistraionSuccess(true);
          console.log(
            'Registration Successful. Please Login to proceed'
          );
        } else {
          setErrortext(responseJson.msg);
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  };
  if (isRegistraionSuccess) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#307ecc',
          justifyContent: 'center',
        }}>
        <Image
          source={require('../Image/success.png')}
          style={{
            height: 150,
            resizeMode: 'contain',
            alignSelf: 'center'
          }}
        />
        <Text style={styles.successTextStyle}>
          Registration Successful
        </Text>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={() => props.navigation.navigate('Login')}>
          <Text style={styles.buttonTextStyle}>Login Now</Text>
        </TouchableOpacity>
      </View>
    );
  }
    return (
      <SafeAreaView style={styles.container}>
          <View style={styles.Top}>
            <TouchableOpacity
                onPress={() => {navigation.goBack()}}
            >
                <Image source={require('./assets/images/back.png')}
                  style={{ height: 30, width: 30}}
                />
            </TouchableOpacity>
          </View>
        <View style={styles.TopView}>
            <Image
            source={require('./assets/images/logo.png')}  
            style={styles.imagesStyle}
          />
        </View>
      
      <View style={{flexDirection: 'row', marginTop: 20}}>
            <Text>Already Have An Account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.links}>Login</Text>
            </TouchableOpacity>
          </View>
          
        <View style={styles.wrapper}>
                <View style={styles.sectionStyle}>
                <TextInput
                    // label={userFullname}
                    style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Enter Full Name"
                    // value={userFullname}
                    // editable={!isLoading}
                    // onChangeText={onChangeNameHandler}
                    // onChangeText={text => setuserFullname(text)}
                    // onSubmitEditing={(value) => setuserFullname(value.nativeEvent.text)}
                  />
                </View>      
          <View style={styles.sectionStyle}>
              <TextInput
                // label={email}
                underlineColorAndroid="transparent"
                style={styles.input}
                placeholder="Enter email"
                keyboardType="email-address"
                // value={email}
                // editable={!isLoading}
                // onChangeText={onChangeEmailHandler}
                // value={email}
                // onChangeText={setEmail}
                // onChangeText={text => setEmail(text)}
                // onSubmitEditing={(value) => setName(value.nativeEvent.text)}
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
              secureTextEntry
              style={styles.input}
              placeholder="Enter password"
              // value={password}
              // onChangeText={setPassword}
              // onChangeText={text => setPassword(text)}
            />
          </View>
          
          <View style={{flexDirection: 'row', marginTop: 10}}>
              {/* <CheckBox
                checked={true}
                onPress={() => setAgree(agree)}
                value={agree}
                onClick={() => setAgree(!agree)}
                onValueChange={() => setAgree(agree)}
                color={agree ? "#4630EB" : undefined}
              /> */}
                                <Switch
                  ios_backgroundColor="#3e3e3e"
                  activeOpacity={1}
                  trackColor={{ false: "#c1c1c1", true: "#000" }}
                  // thumbColor={isEnabled ? "#ccc" : "#3d3d3d"}
                   value={agree}
                  onValueChange={() => setAgree(!agree)}
                  />
             <Text> I have read and agree to the privacy policy {'\n'} terms of service and community guidelines </Text>
          </View>
          
          <View style={ styles.logButton}>
            <TouchableOpacity 
              title="Register"
              disabled={!agree}
              onPress={handleRegister}
              >
              <Text style={styles.logText}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  
};

export default RegisterScreen;

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
// const styles = StyleSheet.create({
//   Top: {
//     marginTop: 20,
//     marginLeft: -320
//   },
//   TopView: {
//     marginTop: 100
//   },
//   sectionStyle: {
//     width: 300,
//     borderColor: '#ccc',
//     flexDirection: 'row',
//     borderWidth: 1.5,
//     borderRadius: 5,
//     margin: 8,
//     borderRadius: 10
//     // padding: 109/
//     // mareginTop: 15
//   },
//   imageStyle: {
//     padding: 10,
//     margin: 5,
//     height: 35,
//     width: 35,
//     resizeMode: 'stretch',
//     alignItems: 'center',
//   },
//   eyeStyle: {
//     // padding: 10,
//     marginTop: 10,
//     marginLeft: 90,
//     margin: 5,
//     height: 25,
//     width: 25,
//     resizeMode: 'stretch',
//     alignItems: 'center',
//   },
//   imagesStyle: {
//     height: 50,
//     width: 250
//   },
//   buttonGPlusStyle: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#ccc',
//     borderWidth: 0.5,
//     color: '#000',
//     borderColor: '#fff',
//     height: 40,
//     borderRadius: 5,
//     width: 120,
//     margin: 5,
//   },
//   buttonFacebookStyle: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#ccc',
//     borderWidth: 0.5,
//     borderColor: '#fff',
//     color: '#000',
//     width: 120,
//     height: 40,
//     borderRadius: 5,
//     margin: 5,
//   },
//   buttonImageIconStyle: {
//     padding: 10,
//     margin: 5,
//     height: 25,
//     width: 25,
//     resizeMode: 'stretch',
//   },
//   buttonTextStyle: {
//     color: '#000',
//     marginBottom: 4,
//     marginLeft: 10,
//   },
//   buttonIconSeparatorStyle: {
//     backgroundColor: '#fff',
//     width: 1,
//     height: 40,
//   },
//   logButton: {
//     marginTop: 20,
//     backgroundColor: '#3d3d3d',
//     height: 50,
//     justifyContent: 'center',
//     marginLeft: 35,
//     width: 250,
//     borderRadius: 10
//   },
//   logText: {
//     // marginTop: 8,
//     textAlign: 'center',
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 25
//   },
//   container: {
//     // flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   wrapper: {
//     marginTop: 10,
//     width: '80%',
//   },
//   input: {
//     // marginTop: 15
//     // marginBottom: 12,
//     // width: 270,
//     // borderWidth: 1,
//     // borderColor: '#bbb',
//     // borderRadius: 5,
//     // paddingHorizontal: 14,
//   },
//   links: {
//     color: '#000',
//     fontWeight: 'bold',
//   },
//   link: {
//     color: 'black',
//     // fontWeight: 'bold',
//     marginLeft: 50
//   },
// });
