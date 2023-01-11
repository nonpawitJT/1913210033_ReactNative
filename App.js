import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import HomePost from "./screens/HomePost";
import CreatePost from "./screens/CreatePost";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";

const Stack = createNativeStackNavigator();

const FirstStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="FirstPage"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="FirstPage" component={FirstPage} />
    </Stack.Navigator>
  );
};
const SecondStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="SecondPage"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SecondPage" component={SecondPage} />
      <Stack.Screen name="ThirdPage" component={ThirdPage} />
    </Stack.Navigator>
  );
};

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}
const Drawer = createDrawerNavigator();
function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#b0e0e6",
          width: 240,
        },
      }}
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="FirstPage"
        component={FirstStack}
        options={{ title: "First Stack", drawerLabel: "First Page Option" }}
      />
      <Drawer.Screen
        name="SecondPage"
        component={SecondStack}
        options={{ title: "Second Stack", drawerLabel: "Second Page Option" }}
      />
    </Drawer.Navigator>
  );
}
const App = () => {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
};

export default App;
