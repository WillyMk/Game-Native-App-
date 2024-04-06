import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const GameOver = ({ handleReset }) => {
  return (
    <View style={styles.container}>
      <View style={styles.brd}>
        <Text style={styles.txt}>Game Over</Text>
      </View>
      <View>
        <Button title="Restart Game" color={"maroon"} onPress={handleReset} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  txt: {
    width: "100%",
    height: "100%",
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  brd: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 2,
    padding: 30,
    margin: 4,
    borderColor: "orange",
    overflow: "hidden",
  },
});

export default GameOver;
