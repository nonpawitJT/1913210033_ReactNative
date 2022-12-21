import { View, Text, Button } from "react-native";
import React from "react";
import { stylesXD } from "../components/styles";

const ThirdPage = ({ navigation }) => {
  return (
    <View style={stylesXD.container}>
      <View style={stylesXD.container}>
        <Text style={stylesXD.textTopStyle}>This is the Third Page</Text>
        <Button
          title="Go to First Page"
          onPress={() => navigation.navigate("FirstPage")}
        />
        <Button
          title="Go to Second Page"
          onPress={() => navigation.navigate("SecondPage")}
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

export default ThirdPage;
