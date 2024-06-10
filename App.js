import { View, Button, Text, Image, Pressable } from "react-native";
const logoImg = require("./assets/adaptive-icon.png");
export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Button
        title="Press here!"
        color="midnightblue"
        onPress={() => alert("Pressed!")}
        disabled={false}
      />
      <Pressable onPress={() => alert("Image Pressed in!")}>
        <Image source={logoImg} style={{ width: 200, height: 200 }} />
      </Pressable>
      <Pressable onPress={() => alert("Text Pressed!")}>
        <Text style={{ marginTop: 20 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          dolores sunt necessitatibus voluptas. Quaerat dolores sunt
          necessitatibus voluptas.
        </Text>
      </Pressable>
    </View>
  );
}
