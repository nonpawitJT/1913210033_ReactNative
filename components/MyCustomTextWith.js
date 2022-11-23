import { View, Text } from "react-native";
import React from "react";

const MyText =(props)=>{
    return(
        <View style={{alignItems:"center"}}>
            <Text style ={{fontSize:20}}>Your First Name is :{props.fname} and Last name is :{props.lname}</Text>

        </View>
    );
}

const MyCustomTextWith = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", top: 50 }}>
      <MyText fname="Passawee" lname="Wanwilai" />
      <MyText fname="Thor" lname="Odin Son" />
    </View>
  );
};

export default MyCustomTextWith;
