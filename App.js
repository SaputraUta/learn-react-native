import { View, ScrollView, Image, Text, ImageBackground } from "react-native";
const logoImg = require("./assets/adaptive-icon.png");
export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <ScrollView>
        <Image source={logoImg} style={{ width: 200, height: 200 }} />
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          natus voluptates tempora voluptatum, quia sapiente!. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Possimus natus voluptates
          tempora voluptatum, quia sapiente!. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Possimus natus voluptates tempora
          voluptatum, quia sapiente!. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Possimus natus voluptates tempora voluptatum, quia
          sapiente!. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Possimus natus voluptates tempora voluptatum, quia sapiente!. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Possimus natus
          voluptates tempora voluptatum, quia sapiente!.Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Possimus natus voluptates tempora
          voluptatum, quia sapiente!. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Possimus natus voluptates tempora voluptatum, quia
          sapiente!.
        </Text>
        <Image source={logoImg} style={{ width: 200, height: 200 }} />
      </ScrollView>
    </View>
  );
}
