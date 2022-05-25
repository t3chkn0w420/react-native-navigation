import React from "react";
import { View, StyleSheet, Text } from "react-native";
// import { useAuth } from "../AuthContext";

const Drawer3 = () => {
  const [user] = useAuth();
  return (
    <View style={styles.center}>
      <Text>{user.displayName}</Text>
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

export default Drawer3;