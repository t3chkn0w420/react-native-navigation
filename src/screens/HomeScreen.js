import React from "react";
import { View, StyleSheet, Text } from "react-native";
import SwitchButton from "@freakycoder/react-native-switch-button";

function CustomDrawerContent({props, navigation}) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Open drawer"
        onPress={() => props.navigation.openDrawer()}
      />
    </DrawerContentScrollView>
  );
}


const HomeScreen = ({navigation, props}) => {
  return (
    <View style={styles.center}>
       <SwitchButton
        onPress={() => navigation.toggleDrawer()}
          // onPress={() => {
            // navigation.toggleDrawer()}
            //   props.navigation.closeDrawer();
            //   props.navigation.openDrawer();
            // }}
          text="ReactScript"
          inactiveImageSource={require("../assets/images/menu.png")}
          activeImageSource={require("../assets/images/close.png")}
          // onPress={(isActive: true) => console.log(isActive)}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default HomeScreen;