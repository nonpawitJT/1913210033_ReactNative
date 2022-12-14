import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Information from './components/Information'
import Welcome from './components/Welcome'
import Practice1_styleSheet from './components/Practice1_styleSheet'
import TxtInput from './components/TxtInput'
import CustomComponent from './components/CustomComponent'
import Logo from './components/Logo'
import Users from './components/Users'
import LotsOfGreeting from './components/LotsOfGreeting'
import MyCustomTextWith from './components/MyCustomTextWith'
import Count from './components/Count'
import Txtinput1 from './components/Txtinput1'
import UserNamePassword from './components/UserNamePassword'
import AlertExample from './components/AlertExample'
import ImageWithTextInput from './components/ImageWithTextInput'
import ButtonExample from './components/ButtonExample'
import TouchAble_Example from './components/TouchAble_Example'
import TouchablePractice from './components/TouchablePractice'

const App = () => {
  return (
    <View> 
      {/* <Information/> */}
      {/* <Welcome/> */}
      {/* <Practice1_styleSheet/> */}
      {/* <TxtInput/> */}
      {/* <CustomComponent/> */}
      {/* <Logo/> */}
      {/* <Users/> */}
      {/* <LotsOfGreeting/> */}
      {/* <MyCustomTextWith/> */}
      {/* <Count num={2} title="Click"/> */}
      {/* <Txtinput1/> */}
      {/* <UserNamePassword/> */}
      {/* <AlertExample/> */}
      {/* <ImageWithTextInput/> */}
      {/* <ButtonExample/> */}
      {/* <TouchAble_Example/> */}
      <TouchablePractice/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
  }
})
