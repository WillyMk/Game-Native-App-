import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

const NoContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

const deveiceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: "maroon",
    padding: deveiceWidth < 380 ? 12 : 18,
    borderRadius: deveiceWidth < 380 ? 8 : 10,
    margin: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  numberText: {
    color: "white",
    fontSize: 39,
    fontWeight: "bold",
  },
});

export default NoContainer;
