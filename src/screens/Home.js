import React from "react";
import { View, SafeAreaView, Button, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

function StackScreen() {
  return (
    <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
  >
      <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
          screenOptions={{
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
      />
    </Stack.Navigator>
  );
}

function Home({ navigation }) {
  return (
    <SafeAreaView>
      <View styles={styles.header}>
        <TouchableOpacity
          // onPress={() => navigation.navigate('')}
          onPress={() => {
          // navigation.toggleDrawer()}
          navigation.goBack();
          navigation.openDrawer();
          }}
        >
            <Image source={require('../assets/images/user.png')}
                style={{ height: 50, width: 50, marginLeft: 340, marginTop: 5 }}
            /> 
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  header: {
  marginBottom: 200,
    marginLeft: 200,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Home;