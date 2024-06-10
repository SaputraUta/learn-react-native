import { View, Button, ActivityIndicator} from "react-native";
import { useState } from "react";
const logoImg = require("./assets/adaptive-icon.png");
export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <ActivityIndicator size={"large"} color={"red"} animating={isLoading}/>
      <Button title="Loading" onPress={() => setIsLoading(!isLoading)} />
    </View>
  );
}
