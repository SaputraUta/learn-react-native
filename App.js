import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>StyleSheet <Text style={styles.boldText}>API</Text></Text>
      </View>
      <View style={styles.cardContainer}>
        <View style={[styles.box, styles.lightblue, styles.boxShadow]}>
          <Text style={styles.boxTitle}>Lightblue box</Text>
        </View>
        <View style={[styles.box, styles.pink]}>
          <Text style={styles.boxTitle}>Pink box</Text>
        </View>
        <View style={[styles.box, styles.lightblue]}>
          <Text style={styles.boxTitle}>Lightblue box</Text>
        </View>
        <View style={[styles.box, styles.pink]}>
          <Text style={styles.boxTitle}>Pink box</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    gap: 10,
    padding: 60,
  },
  headerContainer: {
    backgroundColor: "lightblue",
    padding: 8,
    borderRadius: 10,
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    color: "white",
  },
  boldText: {
    fontWeight: "bold",
  },
  boxTitle: {
    fontSize: 10,
    textAlign: "center",
    marginTop: 5,
  },
  box: {
    width: 100,
    height: 100,
    padding: 10,
    borderColor: "white",
    borderWidth: 4,
    borderRadius: 10,
    borderStyle: "dashed",
  },
  lightblue: {
    backgroundColor: "lightblue",
  },
  pink: {
    backgroundColor: "pink",
  },
  boxShadow: {
    shadowColor: "red",
    elevation: 20,
  },
});
