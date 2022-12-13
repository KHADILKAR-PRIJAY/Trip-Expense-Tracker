import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import Input from "../Component/Input";
import { Sign_Up_User } from "../Config/Database/Functions";

export default function SignUp({ navigation }) {
  let [email, setEmail] = useState("");
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  let SignUpFunct = async () => {
    if (email === "" || username === "" || password === "") {
      alert("Please Fill All Data");
    } else {
      try {
        let response = await Sign_Up_User(email, username, password);
        alert(response);
        // console.log(response);
        navigation.navigate("HomeTab");
      } catch (error) {
        console.log(error.message);
        alert(error);
      }
    }
  };
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Image source={require("./../../assets/log.png")} style={styles.logo} />
        <Text style={styles.title}>Welcome Create New Account</Text>
        <Input
          title="Username "
          security={false}
          onPress={(text) => setUsername(text)}
        />
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

        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.newAccount}>Already Have An Account?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.SignInButton}
          onPress={() => SignUpFunct()}
        >
          <Text style={styles.signinText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const windowHeight = Dimensions.get("window").height;

let styles = StyleSheet.create({
  container: {
    backgroundColor: "#21222d",
    flex: 1,
    padding: 10,
    justifyContent: "center",
    borderWidth: 1,
    minHeight: windowHeight,
    paddingBottom: 50,
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
    borderWidth: 1,
    borderColor: "white",
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
    width: 150,
    height: 150,
    borderRadius: 200,
    alignSelf: "center",
    marginBottom: 10,
  },
});
