import React, {useState, createRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  AsyncStorage,
  Switch
} from 'react-native';
 
import Loader from './components/Loader';
 
const LoginScreen = ({navigation}) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');

  const [agree, setAgree] = useState('');
  const [enabled, isEnabled] = useState('');
 
  const passwordInputRef = createRef();
 
  const handleSubmitPress = () => {
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
 
    fetch('http://192.168.1.11:4200/api/auth/signin', {
      method: 'POST',
      body: formBody,
      headers: {
        'Content-Type':
        'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //Hide Loader
        setLoading(false);
        console.log(responseJson);
        // If server response message same as Data Matched
        if (responseJson.status === 'success') {
          AsyncStorage.setItem('user_id', responseJson.data.email);
          console.log(responseJson.data.email);
          navigation.replace('DrawerNavigation');
        } else {
          // navigation.replace('DrawerNavigation');
          setErrortext(responseJson.msg);
          alert('Invalid Email Or Password 😓😓');
          console.log('Invalid Email Or Password 😓😓');
        }
      })
      .catch((error) => {
        //Hide Loader
        setLoading(false);
        console.error(error);
      });
  };
 
  return (
    <View style={styles.mainBody}>
      <Loader loading={loading} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        
        <View style={styles.container}>
          <KeyboardAvoidingView enabled>
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('./assets/images/logo.png')}
                style={
                    styles.imagesStyle
                  // width: '80%',
                  // height: 150,
                  // resizeMode: 'contain',
                  // margin: 30,
                }
              />
            </View>
            
          <View style={{flexDirection: 'row', marginLeft: 80}}>
            <Text>Don't have an account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={styles.links}>Register</Text>
              </TouchableOpacity>
        </View>
        
            <View style={styles.SectionStyle}>
              <Image
                      source={{
                        uri:
                          'https://img.icons8.com/plumpy/344/user.png',
                      }}
                      style={styles.imageStyle}
                    />
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserEmail) =>
                  setUserEmail(UserEmail)
                }
                placeholder="Enter Email"
                placeholderTextColor="#8b9cb5"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() =>
                  passwordInputRef.current &&
                  passwordInputRef.current.focus()
                }
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
            </View>
            
            <View style={styles.SectionStyle}>
             <Image
                    source={{
                      uri:
                        'https://img.icons8.com/plumpy/344/forgot-password.png',
                    }}
                    style={styles.imageStyle}
                  />
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserPassword) =>
                  setUserPassword(UserPassword)
                }
                placeholder="Enter Password" 
                placeholderTextColor="#8b9cb5"
                keyboardType="default"
                ref={passwordInputRef}
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
                underlineColorAndroid="#f000"
                returnKeyType="next"
              />
            </View>
            
            {errortext != '' ? (
              <Text style={styles.errorTextStyle}>
                {errortext}
              </Text>
            ) : null}
            
        <View style={{flexDirection: 'row', marginLeft: 35}}>
          <Switch

            ios_backgroundColor="#3e3e3e"
            activeOpacity={1}
            // onValueChange={toggleSwitch}
            // value={isEnabled}
            trackColor={{ false: "#c1c1c1", true: "#000" }}
            thumbColor={isEnabled ? "#ccc" : "#3d3d3d"}
             value={agree}
            onValueChange={() => setAgree(!agree)}
          //  color={agree ? "#4630EB" : undefined}
            />
          <Text> Remember Me? </Text>
          
          <TouchableOpacity 
            onPress={() => navigation.navigate('Forgot')}
          >
            <Text style={styles.link}>Forgot Password?</Text>
            <Image
                    source={{
                      uri:
                        'https://img.icons8.com/plumpy/344/forgot-password.png',
                    }}
                    style={styles.imageForgot}
                  />
          </TouchableOpacity>
        </View>
        
            <TouchableOpacity
               disabled={!agree}
                style={styles.logButton}
                activeOpacity={0.5}
                onPress={handleSubmitPress}>
              <Text style={styles.logText}>LOGIN</Text>
            </TouchableOpacity>
            
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
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
};
export default LoginScreen;
 
const styles = StyleSheet.create({
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
  bottom: {
    flexDirection: 'row',
    marginTop: 20
  },
  logButton: {
    marginTop: 20,
    backgroundColor: '#3d3d3d',
    height: 50,
    justifyContent: 'center',
    marginLeft: 70,
    width: 250,
    borderRadius: 10
  },
  logText: {
    // marginTop: 8,
    textAlign: 'center',
    color: '#fff',
    // fontWeight: 'bold',
    fontSize: 20,
    fontWeight: 'bold'
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
    alignContent: 'center',
  },
  SectionStyle: {
    width: 300,
    borderColor: '#ccc',
    flexDirection: 'row',
    borderWidth: 1.5,
    borderRadius: 5,
    margin: 8,
    marginLeft: 50,
    borderRadius: 10
    // padding: 109/
    // mareginTop: 15
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
  buttonStyle: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
  fontWeight: 'bold',
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 12,
  },
  // inputStyle: {
  //   flex: 1,
  //   color: 'white',
  //   paddingLeft: 15,
  //   paddingRight: 15,
  //   borderWidth: 1,
  //   borderRadius: 30,
  //   borderColor: '#dadae8',
  // },
  imagesStyle: {
    // padding: 10,
    // margin: 5,
    height: 100,
    width: '80%',
    // resizeMode: 'stretch',
    // alignItems: 'center',
  },
  imageStyle: {
    padding: 10,
    margin: 5,
    height: 35,
    width: 35,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  registerTextStyle: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
});