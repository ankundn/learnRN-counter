import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Timer from "./components/timer";

export default function App() {
  return <Timer />;
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
