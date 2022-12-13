import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Expensecard({ data }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{data.for_What}</Text>
        <Text style={styles.category}>{data.category}</Text>
      </View>
      <Text style={styles.expense}>${data.Total_Expense}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#080808",
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    alignSelf: "center",
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    color: "white",
  },
  category: {
    fontWeight: "bold",
    fontSize: 11,
    color: "white",
  },
  expense: {
    fontWeight: "bold",
    color: "white",
  },
});
