import { StyleSheet, Text, View } from "react-native";

export default function AboutScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>About This App</Text>
      <Text style={styles.text}>Full Name: Alisha Adhikari & Thomas del Mundo</Text>
      <Text style={styles.text}>Student ID of Alisha Adhikari : 101514070 & Student ID of Thomas del Mundo: 101498572</Text>

      <Text style={[styles.text, { marginTop: 16 }]}>
        This app converts currencies using freecurrencyapi. It validates input,
        fetches live exchange rates, and displays converted values.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
  },
});


// Added placeholder for future testing integration
