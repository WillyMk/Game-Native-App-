import { ImageBackground, StyleSheet, Text, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import { useState } from "react";
import GameOver from "./screens/GameOver";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const pickedNumber = (number) => {
    setUserNumber(number);
  };
  const handleReset = () => {
    setGameOver(false);
    setUserNumber(null);
  };
  let screens = gameOver ? (
    <GameOver handleReset={handleReset} />
  ) : userNumber ? (
    <GameScreen userNumber={userNumber} setGameOver={setGameOver} />
  ) : (
    <StartGameScreen onSelectedNumber={pickedNumber} />
  );
  return (
    <>
      <StatusBar style="light" />
      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1582567397638-559df60a4d24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D",
        }}
        style={styles.container}
      >
        <SafeAreaView style={styles.container}>{screens}</SafeAreaView>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
