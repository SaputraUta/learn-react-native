import { View, Button, Alert} from "react-native";
export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Button title="Alert" onPress={() => Alert.alert("Invalid data!")} />
      <Button title="Alert" onPress={() => Alert.alert("Invalid data!", "Username is not valid")} />
      <Button title="Alert" onPress={() => Alert.alert("Invalid data!", "Username is not valid", [
        {
          text: "Cancel",
          onPress: () => {
            console.log("Cancel Pressed");
          }
        },
        {
          text: "OK",
          onPress: () => {
            console.log("OK Pressed");
          }
        }
      ])} />
    </View>
  );
}
