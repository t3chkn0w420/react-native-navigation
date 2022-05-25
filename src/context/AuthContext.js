// import AsyncStorage from '@react-native-async-storage/async-storage';
import { AsyncStorage } from 'react-native';
import axios from 'axios';
import React, {createContext, useEffect, useState} from 'react';
import {BASE_URL} from '../config';
// import Navigation from '../components/Navigation';
// import { useNavigation } from '@react-navigation/native';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [splashLoading, setSplashLoading] = useState(false);

  //   function navigate({ navigation }){
  //     navigation.navigate('Home');    
  // }

  const register = (fullname, email, password) => {
    setIsLoading(true);
    axios
      .post(`${BASE_URL}/signup`, {
        fullname,
        email,
        password,
      })
      .then(res => {
        let userInfo = res.data;
        setUserInfo(userInfo);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        setIsLoading(false);
        console.log(userInfo);
      })
      .catch(e => {
        console.log(`register error ${e}`);
        setIsLoading(false);
      });
  };

  const login = (email, password) => {
    setIsLoading(true);
    axios
      .post(`${BASE_URL}/signin`, {
        email,
        password,
      })
      .then(res => {
        let userInfo = res.data;
        console.log(userInfo);
        // navigation.navigate('Home')
        // navigation.push('Home')
        setUserInfo(userInfo);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        setIsLoading(false);
        // navigation.navigate('Home');
        if(res.success === true){
          alert('welcome' + fullname );
        }
      })
      .dont();
          this.props.navigation.navigate("Home")
      }
      // .catch(e => {
      //   console.log(`login error ${e}`);
      //   setIsLoading(false);
      // });
      // if (status !== 'SUCCESS') {
      //   handleMessage(message, status);
      // } else {
      //   navigation.navigate('Home')
      // }


  const logout = () => {
    setIsLoading(true);

    axios
      .post(
        `${BASE_URL}/logout`,
        {},
        {
          headers: {Authorization: `Bearer ${userInfo.access_token}`},
        },
      )
      .then(res => {
        console.log(res.data);
        AsyncStorage.removeItem('userInfo');
        setUserInfo({});
        setIsLoading(false);
      })
      .catch(e => {
        console.log(`logout error ${e}`);
        setIsLoading(false);
      });
  };

  const isLoggedIn = async () => {
    try {
      setSplashLoading(true);

      let userInfo = await AsyncStorage.getItem('userInfo');
      userInfo = JSON.parse(userInfo);

      if (userInfo) {
        setUserInfo(userInfo);
      }

      setSplashLoading(false);
    } catch (e) {
      setSplashLoading(false);
      console.log(`is logged in error ${e}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        userInfo,
        splashLoading,
        register,
        login,
        logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};