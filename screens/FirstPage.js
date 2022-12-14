import { View, Text, Button, StyleSheet,TextInput } from "react-native";
import React, { useState } from "react";


const FirstPage = ({ navigation }) => {
  const [nameText, setNameText] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Thai-Nichi Institute of Technology</Text>
      <Text style={styles.textStyle}>
        Please Insert Your Name to pass it to second screen
      </Text>
      <TextInput
        placeholder="Enter Your Name"
        style={styles.textInputStyle}
        value={nameText}
        onChangeText={setNameText}
      />
      <Button title="Go Next" 
        onPress={() =>
            navigation.navigate("SecondPage", {name:nameText })
          }
      />
    </View>
  );
};

export default FirstPage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  heading: {
    fontSize: 25,
    textAlign: "center",
    marginVertical: 10,
  },
  textStyle: {
    textAlign: "center",
    fontSize: 16,
    marginVertical: 10,
  },
  textInputStyle: {
    width: "60%",
    height: 40,
    paddingHorizontal: 5,
    borderWidth: 0.5,
    marginTop: 15,
    marginBottom: 15,
  },
});
