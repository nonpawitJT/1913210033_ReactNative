import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Information = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>React Native with TNI</Text>
      <Text style={{ color: "blue", fontSize: 15, fontWeight: "bold" }}>
        By....Passawee Wanwilai
      </Text>
      <Text style={[styles.textStyle,styles.warning]}>
        Student ID: 1913210587
      </Text>
      <Text>Major: Information Technology</Text>
      <Text style={{ fontSize: 20, fontWeight: "bold",color:"white" }}>Chob Mhee</Text>
    </View>
  );
};

export default Information;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2b8be",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontSize: 40,
  },
  warning:{
    fontWeight:"bold",
    color: "red",
  }
});
