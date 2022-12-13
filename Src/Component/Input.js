import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";

export default function Input({ title, security, onPress }) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        secureTextEntry={security}
        placeholder={title}
        placeholderTextColor="white"
        onChangeText={(text) => onPress(text)}
      />
    </View>
  );
}

let styles = StyleSheet.create({
  container: {},
  input: {
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    borderBottomColor: "white",
    borderBottomWidth: 1,
    color: "white",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    color: "white",
  },
});
