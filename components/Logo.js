import { View, Text, Button } from "react-native";
import React from "react";
import Users from "./Users";

const Logo = () => {
  const textLogo = "React Native by Nonpawit";
  const isTH = false;
  const showData = () => {
    alert("Hello Duck");
  };
  return (
    <View style={{ justifyContent: "center", flex: 1 }}>
      <Text>{textLogo}</Text>
      {
        // isTH && <text>ภาษาไทย</text>
        isTH ? <text>ภาษาไทย</text> : <text>ภาษาอังกฤษ</text>
      }
      <Button title="Click Me" onPress={showData} />
      <Users />
    </View>
  );
};

export default Logo;
