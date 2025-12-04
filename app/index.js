import { Link } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function MainScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Currency Converter</Text>
      <Text>This is the main screen. We will add inputs here.</Text>

      <View style={{ marginTop: 20 }}>
        <Link href="/about">
          <Button title="Go to About Screen" />
        </Link>
      </View>
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
});
