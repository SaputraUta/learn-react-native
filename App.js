import { View, Button, Modal, Text } from "react-native";
import { useState } from "react";
const logoImg = require("./assets/adaptive-icon.png");
export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Button title="Open modal" color="midnightblue" disabled={false} onPress={() => setIsModalVisible(true)} />
      <Modal visible={isModalVisible} animationType="slide">
        <View style={{ flex: 1, backgroundColor: "lightblue", padding: 60 }}>
          <Text>
            Modal is opened!
          </Text>
          <Button title="Close Modal" color="midnightblue" onPress={() => setIsModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
}
