import { View, Text, StatusBar } from "react-native";
import React from "react";
import MainNavigater from "./Src/Config/MainNavigation";
import firebase from "firebase";
export default function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyDPBvpYuEj59fsZ7341GLVdqafkTZn6I8E",
    authDomain: "expensetracker-cb9b8.firebaseapp.com",
    projectId: "expensetracker-cb9b8",
    storageBucket: "expensetracker-cb9b8.appspot.com",
    messagingSenderId: "851337221045",
    appId: "1:851337221045:web:fe24872dea5a2b89a97ffc",
    measurementId: "G-2TYZFVH5M4",
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    firebase
      .firestore()
      .settings({ experimentalForceLongPolling: true, merge: true }); // this is for to remove setting time warning..
  }
  return (
    <View style={{ flex: 1 }}>
      <MainNavigater />
      <StatusBar />
    </View>
  );
}
