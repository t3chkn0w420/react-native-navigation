import React, {useState, useEffect} from 'react';
import {ActivityIndicator, View, StyleSheet, AsyncStorage, Image} from 'react-native';

// import AsyncStorage from '@react-native-community/async-storage';

import AuthStackNavigator from './navigation/AuthStackNavigator';
import DrawerNavigation from './navigation/DrawerNavigation';


const SplashScreen = ({navigation}) => {
  //State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      //Check if user_id is set or not
      //If not then send for Authentication
      //else send to Home Screen
      AsyncStorage.getItem('user_id').then((value) =>
        navigation.replace(value === null ? 'Auth' : 'DrawerNavigation'),
      );
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/images/logo.png')}
        style={{width: '90%', resizeMode: 'contain', margin: 30}}
      />
      <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ccc',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});
