import { View, Text, Button } from "react-native";
import React from "react";
import { stylesXD } from "../components/styles";

const FirstPage = ({ navigation }) => {
  return (
    <View style={stylesXD.container}>
      <View style={stylesXD.container}>
        <Text style={stylesXD.textTopStyle}>This is the First Page</Text>
        <Button
          title="Go to Second Page"
          onPress={() => navigation.navigate("SecondPage")}
        />
        <Button
          title="Go to Third Page"
          onPress={() => navigation.navigate("ThirdPage")}
        />
      </View>
      <View style={{ justifyContent: "flex-end" }}>
        <Text style={stylesXD.textBottomStyle}>
          Thai-Nichi Institute of Technology
        </Text>
      </View>
    </View>
  );
};

export default FirstPage;
