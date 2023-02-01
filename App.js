import { View, Text } from "react-native";
import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import ProductScreen from "./screens/ProductScreen";
import DetailScreen from "./screens/DetailScreen";

function Tab2() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={DetailScreen}></Stack.Screen>
    </Stack.Navigator>
  );
}
function Stack2() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Setting" component={ProductScreen}></Stack.Screen>
    </Stack.Navigator>
  );
}
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close Drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
    </DrawerContentScrollView>
  );
}

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function ProductStack(){
  return(
    <Stack.Navigator screenOptions={{
      headerStyle:{backgroundColor:'#A9A9A9'},headerTintColor:'#ffffff',
      headerTitleStyle:{
        fonWeight:'bold'
      }
    }}>
      <Stack.Screen name='Product' component={ProductScreen}/>
      <Stack.Screen name='Detail' component={DetailScreen}/>
    </Stack.Navigator>
  )
}

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          width: 240,
        },
        drawerActiveBackgroundColor: "#BFE6FF",
      }}
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={DetailScreen} />
      <Drawer.Screen name="Product" component={ProductStack} />
      {/* <Drawer.Screen name="Product" component={closeDrawer} /> */}
      
    </Drawer.Navigator>
  );
}



const App = () => {
  return (
    <NavigationContainer>
      <MyDrawer/>
    </NavigationContainer>
  );
};

export default App;
