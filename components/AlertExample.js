import { StyleSheet, Text, View, Button, Alert } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-web";

const AlertExample = () => {
  const simpletAlertHandler = () => {
    alert("Hello I am Simple Alert");
  };

  const twoOptionAlertHandler = () => {
    //function to make two option alert
    Alert.alert(
        //title
        'Hello',
        //body
        'I am to option alert. Do you want to cancel me ?',
        [
            {
                text:'yes',
                onPress:()=> alert('Yes Pressed')
            },
            {
                text:'no',
                onPress:()=> alert('No Pressed')
            }
        ],
        //Click out side of alert will not cancel
        {cancelable:false}
    )
  };

  return (
    <SafeAreaView styles={{ flex: 1 }}>
      <View style={styles.container}>
        <Text>Alert Example</Text>
        <Button title="Simple Alert" onPress={simpletAlertHandler} />
        <Button
          title="Alert with Two Options"
          onPress={twoOptionAlertHandler}
        />
      </View>
    </SafeAreaView>
  );
};

export default AlertExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
});
