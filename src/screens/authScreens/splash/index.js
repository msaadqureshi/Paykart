import React, { useEffect } from "react";
import { View, TouchableOpacity, Text, Image, ImageBackground } from "react-native";
import { styles } from "./syle";
import { appImages } from "../../../assets/utility";
import { appColor } from "../../../constants/colors";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
// import { _removeAll, _retrieveData } from "../../../Backend/AsyncFuncs";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SplashScreen = (props) => {
  // useEffect(async () => {
  //   const value = await AsyncStorage.getItem('userId')
  //   console.log(value)
  //   if(value){
  //       props.navigation.navigate("App");
  //   }
  //   else{
  //       props.navigation.navigate("Login");
  //   }
  //   startImageRotateFunction()
  //  moveUp()
    setTimeout(() => {
      props.navigation.navigate("Login");
    }, 2000);
  // });
  return (
    
    <View style={styles.container}>
      <ImageBackground 
      source={appImages.Splashbg} style={styles.imagebg} >
      <Image source={appImages.Logo} style={styles.Logo} />
      <Image source={appImages.Lodding} style={styles.Lodding} />
      </ImageBackground>
     </View>
  );
};
export default SplashScreen;
