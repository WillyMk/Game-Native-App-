import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const CustomButton = ({ children, onPress }) => {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        android_ripple={{ color: "purple" }}
        onPress={onPress}
        style={
          ({ pressed }) =>
            pressed ? [styles.container, styles.pressed] : styles.container //affects both ios and android
        }
      >
        <Text style={{ color: "white", textAlign: "center" }}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    borderRadius: 20,
    margin: 4,
    overflow: "hidden",
  },
  container: {
    backgroundColor: "blue",
    paddingVertical: 8,
    paddingHorizontal: 50,
  },
  pressed: {
    opacity: 0.5,
  },
});

export default CustomButton;
