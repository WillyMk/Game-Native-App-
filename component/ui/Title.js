import { Text } from "react-native";
import { Colors } from "../../utils/colors";

const Title = () => {
  return (
    <Text
      style={{
        color: Colors.primaryColor,
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        borderWidth: 2,
        borderColor: "yellow",
        padding: 12,
      }}
    >
      Game Screen
    </Text>
  );
};
export default Title;
