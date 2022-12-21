import { View, Text, Button } from "react-native";
import React from "react";

const Logo = () => {
  const textLogo = "React Native by Passawee";
  const isTH = false;

  const showData = ()=>{
    alert("Hello Button");
  }

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text>{textLogo}Logo</Text>
      {
        // isTH && <Text>ภาษาไทย</Text>
        isTH ? <Text>ภาษาไทย</Text> : <Text>English</Text>
      }
      <Button title="Click me" onPress={showData}/>
    </View>
  );
};

export default Logo;
