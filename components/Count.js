import { View, Text, Button, StyleSheet } from "react-native";
import React, { useState,useEffect } from "react";

const Count = ({num,title}) => {
  const [count, setCount] = useState(num);

//  useEffect(()=>{
// console.log('use effect 1')
//  });
//  useEffect(()=>{
//     console.log('use effect 2');
//      },[count]);


  return (
    <View >
      <Text>{title} : {count}</Text>
      <Button
        title="Click me"
        onPress={() => {
          setCount(count + 1);
        }}
      />
    </View>
  );
};

export default Count;


