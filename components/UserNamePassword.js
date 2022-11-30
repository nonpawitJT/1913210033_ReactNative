import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Button,
} from "react-native";
import React, { useState } from "react";

const UserNamePassword = () => {
  const [textInputName, settextInputName] = useState("");
  const [textInputEmail, settextInputEmail] = useState("");
  const checkTextInput = () => {
    if (!textInputName.trim()) {
      alert("Please Enter Name");
      return;
    }
    if (!textInputEmail.trim()) {
      alert("Please Enter Email");
      return;
    }
    alert("Success");
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput
          value={textInputName}
          style={styles.textInputStyle}
          placeholder={"Enter Name"}
          onChangeText={(textInputName) => {
            settextInputName(textInputName);
          }}
        />
        <TextInput
          value={textInputEmail}
          style={styles.textInputStyle}
          placeholder={"Enter Email"}
          onChangeText={(textInputEmail) => {
            settextInputEmail(textInputEmail);
          }}
        />
      </View>
      <View  style={{ flex: 1 ,padding:35}}>
        <Button title="Submit" onPress={checkTextInput} />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, padding: 35 },
  textInputStyle: {
    width: "100%",
    height: 60,
    paddingHorizontal: 5,
    borderWidth: 0.5,
    marginTop: 15,
  },
});
export default UserNamePassword;
