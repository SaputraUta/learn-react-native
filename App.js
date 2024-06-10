import { View } from "react-native";
import Greeting from "./components/Greeting";
export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Greeting name="Saputra" />
      <Greeting name="Uta" />
    </View>
  );
}
