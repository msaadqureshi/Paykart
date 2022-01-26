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
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: appColor.white,
  },

  imagebg: {
    flex: 1,
    height: responsiveHeight(100),
    width: responsiveWidth(100),
    resizeMode: "contain",
    // alignSelf: "center",
  },
  Logo: {
    marginTop: responsiveHeight(30),
    height: responsiveHeight(35),
    width: responsiveWidth(50),
    resizeMode: "contain",
    alignSelf: "center",
  },
  Lodding: {
    marginTop: responsiveHeight(10),
    height: responsiveHeight(10),
    width: responsiveWidth(70),
    resizeMode: "contain",
    alignSelf: "center",
  },
  txt: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: "bold",
    textAlign: "center",
    marginTop: responsiveHeight(1),
  },
  greytxt: {
    fontSize: responsiveFontSize(1.5),
    color: appColor.grey,
  },
});
