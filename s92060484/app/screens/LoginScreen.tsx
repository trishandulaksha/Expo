import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Link } from "expo-router";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>VibezPlay</Text>
      <TextInput placeholder="Username" style={styles.input} />
      <TextInput placeholder="E-mail" style={styles.input} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert("Logged In!")}
      >
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      <Link href="/screens/SignUpScreen" style={styles.link}>
        Create an account? Sign Up
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#444",
  },
  title: { fontSize: 28, color: "#fff", marginBottom: 30 },
  input: {
    width: "80%",
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#ffcc00",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: { color: "#000", fontSize: 16, fontWeight: "bold" },
  link: { color: "#ffcc00", marginTop: 15 },
});
