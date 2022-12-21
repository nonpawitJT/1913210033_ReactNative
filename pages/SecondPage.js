import { View, Text, Button, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import { styles } from "../components/style";

const SecondPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <View style={styles.container}>
      <Text style={styles.textTopStyle}>This is The SecondPage</Text>
      <Button
        title="Go to FirstPage"
        onPress={() => navigation.navigate("FirstPage")}
      />
      <Button
        title="Go to ThirdPage"
        onPress={() => navigation.navigate("ThirdPage")}
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

export default SecondPage;
