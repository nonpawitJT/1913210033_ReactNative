import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-web";



const UserNamePassword = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
    const checkTextInput = () => {
        console.log(!name.trim())
        if (!name.trim()) {
            alert('Please Enter Name');
            return;
            }else if(!email.trim()){
                alert("Please Enter Email");
                return;
            }else{
                alert("Success");
            }
            
    };
    
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TextInput
          placeholder="Enter Your Name"
          value={name}
          onChangeText={(name) => {
            setName(name);
          }}
          style={styles.textInputStyle}
        />
        <TextInput
          placeholder="Enter Your Email"
          value={email}
          onChangeText={(email) => {
            setEmail(email);
          }}
          style={styles.textInputStyle}
        />
        <Button
        title="SUBMIT" color="#E0E0E0" onPress={()=>{checkTextInput()}}
        />
      </View>
    </SafeAreaView>
  );
};

export default UserNamePassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },

  textInputStyle: {
    width: "100%",
    height: 40,
    paddingHorizontal: 5,
    borderWidth: 0.5,
    marginTop: 15,
  },
});
