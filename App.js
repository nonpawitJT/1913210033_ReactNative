import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Information from "./components/Information";
import Practice1_StyleSheet from "./components/Practice1_StyleSheet";
import Welcome from "./components/Welcome";
import TxtInput from "./components/TxtInput";
import CustomComponent from "./components/CustomComponent";
const App = () => {
  return (
    <View>
      {/* <Information/> */}
      {/* <Welcome/> */}
      {/* <Practice1_StyleSheet /> */}
      {/* <TxtInput/> */}
      <CustomComponent/>
    </View>
  );
};

export default App;
