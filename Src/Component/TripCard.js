import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

export default function TripCard({ navigation, data, DeleteFunc }) {
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate("ExpenseDetail", { data })}
    >
      <TouchableOpacity
        style={styles.delete}
        onPress={() => DeleteFunc(data.id)}
      >
        <MaterialIcons name="delete" size={30} color="red" />
      </TouchableOpacity>
      <Image
        source={require("./../../assets/image1.png")}
        style={styles.tripImage}
      />
      <Text style={styles.city}>{data.city}</Text>
      <Text style={styles.country}>{data.country}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  tripImage: {
    width: 120,
    height: 120,
    alignSelf: "center",
  },
  item: {
    width: "45%",
    margin: 5,
    elevation: 10,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
    paddingVertical: 10,
  },
  city: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 20,
  },
  country: {
    color: "white",
    marginLeft: 20,
    fontWeight: "bold",
    fontSize: 12,
  },
  delete: {
    alignSelf: "flex-end",
    marginRight: 10,
  },
});
