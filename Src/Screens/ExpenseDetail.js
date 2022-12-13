import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Expensecard from "../Component/Expensecard";
import { Get_Trip_Expense } from "../Config/Database/Functions";

export default function ExpenseDetail({ navigation, route }) {
  let data = route.params.data;
  console.log(data);

  let [AllExpense, setExpense] = useState([]);

  let GetExpenseFunc = async () => {
    try {
      let response = await Get_Trip_Expense(data.id);
      setExpense(response);
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    navigation.addListener("focus", () => {
      GetExpenseFunc();
    });
  }, []);
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
            <Text style={styles.name}>{data.city}</Text>
          </View>
        </View>
        <View style={styles.addExpense}>
          <Text style={styles.title}>Expenses</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("AddExpense", { data: data })}
          >
            <Text style={styles.addExpenseText}>Add Expense</Text>
          </TouchableOpacity>
        </View>
        {AllExpense.length > 0 ? (
          AllExpense.map((val, ind) => <Expensecard key={ind} data={val} />)
        ) : (
          <Text
            style={{
              fontSize: 20,
              color: "white",
              marginTop: 50,
              fontWeight: "bold",
              width: "90%",
              textAlign: "center",
            }}
          >
            YOU DID NOT ADD ANY EXPENSE YET
          </Text>
        )}
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
    minHeight: windowHeight,
    paddingBottom: 90,
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
    width: "50%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 50,
    marginTop: -45,
  },
  name: {
    fontWeight: "bold",
    color: "#f02c69",
    // fontWeight: 20,
    fontSize: 20,
  },
  addExpense: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 50,
    marginHorizontal: 20,
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  addExpenseText: {
    color: "#f02c69",
    fontWeight: "bold",
    fontSize: 20,
  },
});
