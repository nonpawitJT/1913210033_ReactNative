import { View, Text,StyleSheet} from 'react-native'
import React from 'react'

const SecondPage = ({route}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Thai-Nichi Institute of Technology</Text>
      <Text style={styles.textStyle}>Value pass from First Page : {route.params?.name}</Text>
    </View>
  )
}

export default SecondPage
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  heading: {
    fontSize: 25,
    textAlign: "center",
    marginVertical: 10,
  },
  textStyle: {
    textAlign: "center",
    fontSize: 16,
    marginVertical: 10,
  },
  textInputStyle: {
    width: "60%",
    height: 40,
    paddingHorizontal: 5,
    borderWidth: 0.5,
    marginTop: 15,
    marginBottom: 15,
  },
});
