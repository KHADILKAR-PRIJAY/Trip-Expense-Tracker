import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import firebase from "firebase";
import { Get_Current_User } from "../Config/Database/Functions";

export default function Account({ navigation }) {
  let [user, setuser] = useState("");
  let logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => navigation.navigate("Login"));
  };

  let getUser = async () => {
    try {
      let responce = await Get_Current_User();
      setuser(responce);
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <View style={styles.container}>
      <Image
        source={require("./../../assets/profile.png")}
        resizeMode="contain"
        style={styles.profileimage}
      />
      <Text style={styles.name}>Name : {user.username} </Text>
      <Text style={styles.name}>Email : {user.email} </Text>
      <TouchableOpacity style={styles.logout} onPress={() => logout()}>
        <Text style={styles.name}>LOGOUT</Text>
      </TouchableOpacity>
    </View>
  );
}

const windowHeight = Dimensions.get("window").height;

let styles = StyleSheet.create({
  container: {
    backgroundColor: "#21222d",
    flex: 1,
    paddingTop: 10,
    justifyContent: "center",
    borderWidth: 1,
    minHeight: windowHeight,
    paddingBottom: 90,
    alignItems: "center",
  },
  profileimage: {
    height: 200,
  },
  name: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
    marginVertical: 10,
  },
  logout: {
    backgroundColor: "#f02c69",
    width: "70%",
    alignItems: "center",
    marginTop: 30,
    borderRadius: 10,
  },
});
