import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Account from "../Screens/Account";
import Home from "../Screens/Home";
import HomeStack from "./HomeStack";
const Tab = createBottomTabNavigator();
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";

export default function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",

      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          headerShown: false,
          title: "Tripify",
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
