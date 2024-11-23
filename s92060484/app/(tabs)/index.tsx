import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>VibezPlay</Text>
      <Text style={styles.subtitle}>
        Tuning into your world, one vibe at a time
      </Text>

      <Link href="/screens/SignUpScreen" style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#111",
  },
  title: { fontSize: 32, color: "#fff", marginBottom: 10 },
  subtitle: {
    fontSize: 16,
    color: "#bbb",
    marginBottom: 40,
    textAlign: "center",
  },
  button: { backgroundColor: "#ffcc00", padding: 15, borderRadius: 10 },
  buttonText: { color: "#000", fontSize: 16, fontWeight: "bold" },
});
