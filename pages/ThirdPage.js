import { View, Text, Button, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import { styles } from "../components/style";

const ThirdPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <View style={styles.container}>
      <Text style={styles.textTopStyle}>This is The ThirdPage</Text>
      <Button
        title="Go to FirstPage"
        onPress={() => navigation.navigate("FirstPage")}
      />
      <Button
        title="Go to SecondPage"
        onPress={() => navigation.navigate("SecondPage")}
      />
      </View>
      <View style={{  justifyContent: "flex-end" }}>
        <Text style={styles.textBottomSytel}>
          Thai-Nichi Institute of Technology
        </Text>
      </View>
    </View>
  );
};

export default ThirdPage;
