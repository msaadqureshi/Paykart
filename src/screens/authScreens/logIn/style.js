import React from "react";
import { StyleSheet } from "react-native";
import {
  responsiveHeight,
  responsiveFontSize,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { appColor } from "../../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,    
    // alignItems: "center",
    // justifyContent: 'center',    
    height: responsiveHeight(100),
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  imagebg: {
    flex: 1,
    // remove width and height to override fixed static size
    width: null,
    height: null,
    resizeMode: "contain",
  }, 
  bgopecity: {
    width: responsiveWidth(100),
    height: responsiveHeight(100),
    backgroundColor: 'rgba(0,0,0,0.4)'
  },
  logo: {
    marginTop: responsiveHeight(6),
    height: responsiveWidth(10),
    width: responsiveWidth(20),
    alignSelf: 'center',
      resizeMode: "contain",
  },
  loginwrap: {
    position: 'absolute',
    bottom: responsiveHeight(0),
    // height: responsiveHeight(40),    
    paddingVertical: responsiveWidth(1),
    width: responsiveWidth(100),
    borderTopLeftRadius: responsiveHeight(2),
    borderTopRightRadius: responsiveHeight(2),
    backgroundColor: 'rgba(0,0,0,0.8)',      
  },  
  login: {
    color: appColor.white,
    fontSize: responsiveFontSize(5),
    fontWeight: 'bold',
    // marginTop: responsiveHeight(38),
    // width: responsiveWidth(85),  
    alignSelf: 'center',
  },
  inputText: {
    color: appColor.white,
    fontWeight: '700',
    margin: responsiveHeight(2),
    width: responsiveWidth(85),  
    paddingHorizontal: responsiveWidth(3),
  },
  emailINPUT: {
    height: responsiveHeight(5),    
    width: responsiveWidth(85),
    paddingHorizontal: responsiveWidth(2),
    backgroundColor: "transparent",
    // borderRadius: 50,
    borderBottomWidth: 0.5,
    borderColor: appColor.grey,
    borderColor: appColor.white,
  },
  inputError: {
    color: "red",
    textAlign: "right",
    marginHorizontal: responsiveWidth(5),
    // marginTop: responsiveHeight(0.5),
  },
  loginBtn: {
    backgroundColor: "transparent",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: appColor.white,
    marginTop: responsiveHeight(3),
  },
  readme: {
    color: appColor.white,
    fontWeight: '700', 
    
    width: responsiveWidth(36),  
    paddingHorizontal: responsiveWidth(3),
  },
  Forget: {
    color: '#2164a8',
    // fontWeight: '700',
    textDecorationLine: "underline",
    paddingHorizontal: responsiveWidth(3),
  },
});
