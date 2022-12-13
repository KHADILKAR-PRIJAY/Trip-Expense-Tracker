import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import Input from "../Component/Input";
import { Login_In_User } from "../Config/Database/Functions";

export default function Login({ navigation }) {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let SignUpFunct = async () => {
    try {
      let response = await Login_In_User(email, password);
      alert(response);
      // console.log(response);
      navigation.navigate("HomeTab");
    } catch (error) {
      console.log(error.message);
      alert(error);
    }
  };
  return (
    <View style={styles.container}>
      <Image source={require("./../../assets/log.png")} style={styles.logo} />
      <Text style={styles.title}>Welcome Back</Text>
      <Input
        title="Email "
        security={false}
        onPress={(text) => setEmail(text)}
      />
      <Input
        title="Password "
        security={true}
        onPress={(text) => setPassword(text)}
      />
      <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
        <Text style={styles.newAccount}>Create New Account?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.SignInButton}
        onPress={() => SignUpFunct()}
      >
        <Text style={styles.signinText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}

let styles = StyleSheet.create({
  container: {
    backgroundColor: "#21222d",
    flex: 1,
    padding: 10,
    justifyContent: "center",
  },

  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },

  //signInButton
  SignInButton: {
    backgroundColor: "white",
    alignSelf: "center",
    width: 200,
    height: 40,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: 10,
  },
  signinText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  newAccount: {
    alignSelf: "flex-end",
    color: "#e69023",
    marginVertical: 10,
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
  logo: {
    width: "40%",
    height: "20%",
    borderRadius: 200,
    alignSelf: "center",
    marginBottom: 20,
  },
});
