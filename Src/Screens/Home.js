import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import TripCard from "../Component/TripCard";
import { Delet_Trip, Get_Trip } from "../Config/Database/Functions";

export default function Home({ navigation }) {
  let [Trips, setTrips] = useState([]);

  let DeleteFunc = async (id) => {
    await Delet_Trip(id);
    GetTripFunc();
    try {
    } catch (error) {
      alert(error);
    }
  };

  let GetTripFunc = async () => {
    try {
      let response = await Get_Trip();
      setTrips(response);
      console.log(response);
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    navigation.addListener("focus", () => {
      GetTripFunc();
    });
  }, []);
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.headerTitle}>Tripify</Text>
        <View style={styles.imageContainer}>
          <Image
            source={require("./../../assets/homeimage.jpg")}
            style={styles.image}
            resizeMode="stretch"
          />
          <TouchableOpacity
            style={styles.addNew}
            onPress={() => navigation.navigate("AddNewTrip")}
          >
            <Text style={styles.addnewText}>Add New Trip</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.recentTrip}>RECENT TRIP</Text>
        <View style={styles.recent}>
          {Trips.length > 0 ? (
            Trips.map((val, ind) => (
              <TripCard
                navigation={navigation}
                data={val}
                key={ind}
                DeleteFunc={(id) => DeleteFunc(id)}
              />
            ))
          ) : (
            <Text
              style={{
                fontSize: 20,
                color: "white",
                marginTop: 50,
                fontWeight: "bold",
              }}
            >
              YOU DID NOT ADD ANY TRIP YET
            </Text>
          )}
        </View>
      </View>
    </ScrollView>
  );
}

const windowHeight = Dimensions.get("window").height;

let styles = StyleSheet.create({
  container: {
    backgroundColor: "#21222d",
    flex: 1,
    paddingTop: 10,
    // justifyContent: "center",
    borderWidth: 1,
    minHeight: windowHeight,
    paddingBottom: 90,
  },
  imageContainer: {
    height: "25%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  headerTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 20,
  },
  addNew: {
    backgroundColor: "white",
    alignSelf: "flex-end",
    position: "absolute",
    bottom: -20,
    right: 5,
    width: 150,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    borderRadius: 40,
  },
  addnewText: {
    fontWeight: "bold",
  },
  recentTrip: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
    marginVertical: 50,
    marginLeft: 20,
  },
  recent: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});
