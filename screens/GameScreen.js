import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import Title from "../component/ui/Title";
import NoContainer from "../component/game/NoContainer";
import CustomButton from "../component/ui/CustomButton";

function getRandomNumber(min, max, exluded) {
  const rndNo = Math.floor(Math.random() * (max - min + 1)) + min;
  if (rndNo === exluded) {
    return getRandomNumber(min, max, exluded);
  } else {
    return rndNo;
  }
}

let min = 1;
let max = 100;
const GameScreen = ({ userNumber, setGameOver }) => {
  const initialGuess = getRandomNumber(1, 100, userNumber);
  const [guessedNo, setGuessedNo] = useState(initialGuess);

  useEffect(() => {
    if (guessedNo === userNumber) {
      setGameOver(true);
    }
  }, [guessedNo, userNumber]);

  const nextGuess = (direction) => {
    if (
      (direction === "lower" && guessedNo < userNumber) ||
      (direction === "higher" && guessedNo > userNumber)
    ) {
      Alert.alert("Don't lie buddy!");
      return;
    }
    if (direction === "lower") {
      max = guessedNo;
    } else {
      min = guessedNo + 1;
    }
    const newNo = getRandomNumber(min, max, guessedNo);
    setGuessedNo(newNo);
  };

  return (
    <View style={styles.container}>
      <Title />
      <NoContainer>{guessedNo}</NoContainer>
      <View>
        <Text style={{ color: "white" }}>Higer or Lower</Text>
        <View style={styles.btn}>
          <CustomButton onPress={() => nextGuess("higher")}>Add</CustomButton>
          <CustomButton onPress={() => nextGuess("lower")}>Remove</CustomButton>
        </View>
      </View>
      <View>
        <Text style={{ color: "white" }}>Log Rounds</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  btn: {
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default GameScreen;
