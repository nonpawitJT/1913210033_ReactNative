import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Information = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textSyle}>React Native With Thai-Nichi</Text>
      <Text style={{ color: "blue", fontSize: 15, fontWeight: "bold" }}>By .... Nonpawit Nittaworn</Text>
      <Text style={[styles.textSyle,styles.warning]}>
        Student ID: 1913210033
      </Text>
      <Text>Major : Multimedia Techonology</Text>
    </View>
  );
};

export default Information;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#add8e6",
    alignItems: "center",
    justifyContent: "center",
  },
  textSyle: {
    
    fontSize: 20,
  },
  warning :{
    fontWeight : "bold",color: "red",

  }
});
