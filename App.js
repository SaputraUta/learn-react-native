import { View, Button, Modal, Text, StatusBar } from "react-native";
import { useState } from "react";
const logoImg = require("./assets/adaptive-icon.png");
export default function App() {
  const [isStatusbarVisible, setIsStatusbarVisible] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <StatusBar backgroundColor={"midnightblue"} barStyle={"light-content"} hidden={isStatusbarVisible} />
      <Button onPress={() => setIsStatusbarVisible(!isStatusbarVisible)} title="Hide" />
    </View>
  );
}
