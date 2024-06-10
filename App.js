import { View, Button} from "react-native";
const logoImg = require("./assets/adaptive-icon.png");
export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Button title="Press here!" color="midnightblue" onPress={() => alert('Pressed!')} disabled={false} />
    </View>
  );
}
