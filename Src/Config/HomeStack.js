import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Screens/Home";
import ExpenseDetail from "../Screens/ExpenseDetail";
import AddExpense from "../Screens/AddExpense";
import AddNewTrip from "../Screens/AddNewTrip";

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ExpenseDetail"
        component={ExpenseDetail}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AddNewTrip"
        component={AddNewTrip}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AddExpense"
        component={AddExpense}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
