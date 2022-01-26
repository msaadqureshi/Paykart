import React from "react";
import { StyleSheet } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import { appColor } from "../../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColor.white,
  },
  Logo: {
    height: responsiveHeight(40),
    width: responsiveWidth(60),
    resizeMode: "contain",
    // borderRadius: responsiveWidth(2),
    alignSelf: "center",
    marginTop: responsiveHeight(6),
  },
  dontHaveAccountText: {
    fontSize: responsiveFontSize(1.5),
    marginTop: responsiveHeight(2),  
    textAlign: "center",
    fontWeight: "bold",
    color: appColor.grey,
  },
  iconView: {
    flexDirection: "row",
    marginTop: responsiveHeight(8),
    width: responsiveWidth(38),
    alignSelf: "center",
    justifyContent: "space-between",
  },
  icon: {
    height: responsiveWidth(12),
    width: responsiveWidth(12),
  },
  LoginButton: {
    height: responsiveHeight(7),
    width: responsiveWidth(76),
    alignSelf: "center",
    marginTop: responsiveHeight(2),
    alignItems: "center",
    borderRadius: responsiveWidth(2),
    justifyContent: "center",
    backgroundColor: appColor.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  StudentText: {
    fontSize: responsiveFontSize(2.4),
    color: appColor.Primary,
    fontWeight: "bold",
    alignSelf: "center",
  },
  orText: {
    fontSize: responsiveFontSize(2.4),
    color: appColor.white,
    fontWeight: "bold",
  },
  fbView: {
    width: responsiveWidth(16),
    height: responsiveWidth(16),
    borderRadius: responsiveWidth(8),
    alignItems: "center",
    justifyContent: "center",
    borderColor: "blue",
    borderWidth: responsiveWidth(0.2),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    backgroundColor: "white",
  },
  googleView: {
    width: responsiveWidth(16),
    height: responsiveWidth(16),
    borderRadius: responsiveWidth(8),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  forgetbtn: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: responsiveHeight(3),
  },
  forgetText: {
    // fontSize: responsiveFontSize(1.5),    
    textAlign: "center",
    fontWeight: "bold",
    color: appColor.red,
  },
  agreeText: {
    textAlign: "center",
    color: "black",
    marginTop: responsiveHeight(22),
    fontSize: responsiveFontSize(1.5),
  },
  privacyView: {
    flexDirection: "row",
    alignSelf: "center",
  },
  privacyText: {
    color: "#0074B7",
    textDecorationLine: "underline",
  },
});
