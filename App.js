import { View, Text, Button ,StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import HomePost from "./screens/HomePost";
import CreatePost from "./screens/CreatePost";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
       initialRouteName="Home"
       screenOptions={{
        headerStyle:{
          backgroundColor :'#66cdaa'
        },
        headerTintColor:'#ffff',
        headerTitleStyle:{
          fontWeight:'bold'
        }
       }}
      >
        {/* <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} /> */}
        {/* <Stack.Screen name="HomePost" component={HomePost} />
        <Stack.Screen name="CreatePost" component={CreatePost} /> */}
        <Stack.Screen name="FirstPage" component={FirstPage} />
        <Stack.Screen name="SecondPage" component={SecondPage} />
        <Stack.Screen name="ThirdPage" component={ThirdPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;







// function HomeScreen({ navigation }) {
  // return (
  //   <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
  //     <Text>Home Screen</Text>
      // <Button 
      //   title="About Me" 
      //   onPress={() => navigation.navigate("About")} 
      //   />
  //   </View>
  // );
// }

// function AboutScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>About Screen</Text>
//     </View>
//   );
// }