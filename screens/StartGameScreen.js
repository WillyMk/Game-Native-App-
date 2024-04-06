import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import CustomButton from "../component/ui/CustomButton";

const StartGameScreen = ({ onSelectedNumber }) => {
  const [enteredValue, setEnteredValue] = useState("");

  const { width, height } = useWindowDimensions();
  const handleNumber = (value) => {
    setEnteredValue(value);
  };
  const resetNumber = () => {
    setEnteredValue("");
  };
  const confirmNumber = () => {
    let myNumber = parseInt(enteredValue);
    if (isNaN(myNumber) || myNumber <= 1 || myNumber > 99) {
      Alert.alert("Please input numbers within range 1 - 99");
      return;
    }
    onSelectedNumber(myNumber);
  };

  const marginTopDistance = height < 380 ? 30 : 100;
  return (
    <ScrollView style={{ flex: 1 }}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="position">
        <View style={[styles.container, { marginTop: marginTopDistance }]}>
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 20,
              textTransform: "uppercase",
            }}
          >
            Please Input a number to play
          </Text>
          <View style={[styles.input]}>
            <TextInput
              value={enteredValue}
              style={{
                fontSize: 32,
                borderBottomColor: "green",
                borderBottomWidth: 2,
                color: "white",
                marginVertical: 8,
                fontWeight: "bold",
                textAlign: "center",
                height: 50,
                width: 50,
              }}
              maxLength={2}
              keyboardType="number-pad"
              autoCapitalize="none"
              onChangeText={(e) => handleNumber(e)}
            />
          </View>
          <View style={styles.btn}>
            <CustomButton onPress={resetNumber}>Reset</CustomButton>
            <CustomButton onPress={confirmNumber}>Confirm</CustomButton>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "maroon",
    marginHorizontal: 20,
    borderRadius: 10,
    elevation: 8, //FOR ANDROID ONLY
    alignItems: "center",
  },
  input: {
    flexDirection: "row",
    justifyContent: "center",
    fontSize: 32,
  },
  btn: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
    gap: 0,
  },
});

export default StartGameScreen;
