import React from "react";
import { StyleSheet } from "react-native";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { appColor ,COLORS, MyStyles} from "../../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingHorizontal: responsiveWidth(2),
    // backgroundColor: appColor.white,
  },  
  SectionTitle: {
    margin: responsiveHeight(1),
    fontSize: responsiveFontSize(2),
    color: appColor.Primary, 
    fontWeight: 'bold',
  },
  CardView: {
    height: responsiveHeight(11),
    width: responsiveWidth(22),
    borderRadius: responsiveWidth(2),
    backgroundColor: appColor.white,    
    margin: 4,
    // padding: 5,
    ...MyStyles.elevation,
    ...MyStyles.center,
  },
  CardIcon: {
    height: responsiveHeight(5),
    width: responsiveWidth(10),
    borderRadius: responsiveWidth(2),
    resizeMode: "contain",
  },
  CardTitle: {
    fontSize: responsiveFontSize(1.5), 
    // fontWeight: 'bold',
    paddingHorizontal:2,
    marginHorizontal: 2,
  },
  ImageSlider: {
    width: responsiveWidth(98),
    alignSelf: "center",
    marginVertical: responsiveHeight(1),
  },
});