import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Tab3 = () => {
  return (
    <View style={styles.center}>
      <Text>This is the Tab3 screen</Text>
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

export default Tab3;