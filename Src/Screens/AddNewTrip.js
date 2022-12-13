import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Expensecard from "../Component/Expensecard";
import { Add_New_Trip } from "../Config/Database/Functions";

export default function AddNewTrip({ navigation }) {
  let [city, setCity] = useState("");
  let [country, setCountry] = useState("");
  let [date, setDate] = useState("");

  let AddnewTripFunc = async () => {
    if (city === "" || country === "" || date === "") {
      alert("Please Enter All Data");
    } else {
      try {
        await Add_New_Trip(city, country, date);
        alert("TRIP ADDED SUCCESSFULLY ");
        navigation.goBack();
      } catch (error) {
        alert(error);
      }
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
        <Ionicons name="ios-chevron-back" size={24} color="red" />
      </TouchableOpacity>
      <ScrollView>
        <View style={styles.imageView}>
          <Image
            source={require("./../../assets/image1.png")}
            style={styles.image}
            resizeMode="contain"
          />
          <View style={styles.nameView}>
            <Text style={styles.name}>Add New Trip</Text>
          </View>
        </View>
        <View style={styles.form}>
          <Text style={styles.ques}>City Name?</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setCity(text)}
          />

          <Text style={styles.ques}>Country ?</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setCountry(text)}
          />

          <Text style={styles.ques}>Date ?</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setDate(text)}
          />

          <TouchableOpacity style={styles.add} onPress={() => AddnewTripFunc()}>
            <Text style={styles.Addtext}>ADD</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#21222d",
    flex: 1,
    paddingTop: 10,
    borderWidth: 1,
  },
  back: {
    backgroundColor: "white",
    width: 30,
    height: 30,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
  },
  image: {
    // width: 500,
    height: 250,
    alignSelf: "center",
  },
  imageView: {
    borderWidth: 1,
    borderColor: "white",
    height: 280,
    marginHorizontal: 10,
  },
  nameView: {
    backgroundColor: "white",
    width: "70%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 50,
    marginTop: 8,
  },
  name: {
    // fontWeight: "bold",
    color: "#f02c69",
    // fontWeight: 20,
    fontSize: 20,
  },
  form: {
    marginTop: 40,
    padding: 10,
  },
  ques: {
    color: "white",
    // fontWeight: "bold",
    fontSize: 18,
  },
  input: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 8,
    marginVertical: 10,
  },
  buttonView: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  buttonTitle: {
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "white",
    margin: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  add: {
    backgroundColor: "#f02c69",
    width: "90%",
    alignSelf: "center",
    alignItems: "center",
    height: 40,
    justifyContent: "center",
    borderRadius: 20,
    marginVertical: 20,
  },
  Addtext: {
    color: "white",
    // fontWeight:"bold",
    fontSize: 20,
  },
});
