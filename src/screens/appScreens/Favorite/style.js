import React from "react";
import { StyleSheet } from "react-native";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { appColor, COLORS } from "../../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,    
    paddingBottom: responsiveHeight(2),
    backgroundColor: appColor.white,
  },
  ListCardTitle: {
    fontSize: responsiveFontSize(2),
    color: appColor.Primary, 
    fontWeight: 'bold',
    // paddingHorizontal: responsiveWidth(2),
    marginHorizontal:  responsiveWidth(2),
  },
 
});
