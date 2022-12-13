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
import { Add_Expense_of_Trip } from "../Config/Database/Functions";

let categoriesObj = [
  {
    name: "Shopping",
  },
  {
    name: "Food",
  },
  {
    name: "Commute",
  },
  {
    name: "Entertainment",
  },
  ,
  {
    name: "Other",
  },
];
export default function AddExpense({ navigation, route }) {
  let data = route.params.data;

  let [category, setCategory] = useState("");

  let [for_What, setFor_What] = useState("");
  let [Total_Expense, setTotal_Expense] = useState("");

  let AddExpenseFunc = async () => {
    if (for_What === "" || Total_Expense === "" || category === "") {
      alert("Please Enter All Data");
    } else {
      try {
        await Add_Expense_of_Trip(for_What, Total_Expense, category, data.id);
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
            <Text style={styles.name}>Add New Expenses</Text>
          </View>
        </View>
        <View style={styles.form}>
          <Text style={styles.ques}>For What?</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setFor_What(text)}
          />

          <Text style={styles.ques}>How Much ?</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setTotal_Expense(text)}
          />

          <Text style={styles.ques}>Category</Text>
          <View style={styles.buttonView}>
            {categoriesObj.length > 0 &&
              categoriesObj.map((val, ind) => (
                <TouchableOpacity
                  style={[
                    styles.button,
                    {
                      backgroundColor:
                        val.name === category ? "#a9f5b9" : "black",
                    },
                  ]}
                  key={ind}
                  onPress={() => {
                    setCategory(val.name);
                  }}
                >
                  <Text
                    style={[
                      styles.buttonTitle,
                      {
                        color: val.name === category ? "black" : "white",
                      },
                    ]}
                  >
                    {val.name}
                  </Text>
                </TouchableOpacity>
              ))}
          </View>
          <TouchableOpacity style={styles.add} onPress={() => AddExpenseFunc()}>
            <Text style={styles.Addtext}>ADD</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#21222d",
    flex: 1,
    paddingTop: 10,
    // justifyContent: "center",
    borderWidth: 1,
    // minHeight: windowHeight,
    // paddingBottom: 30,
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
    height: 300,
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
    marginTop: -45,
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
    marginBottom: 20,
    width: "90%",
    alignSelf: "center",
    alignItems: "center",
    height: 40,
    justifyContent: "center",
    borderRadius: 20,
  },
  Addtext: {
    color: "white",
    // fontWeight:"bold",
    fontSize: 20,
  },
});
