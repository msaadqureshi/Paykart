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
    flex: 1,
    // paddingBottom: responsiveHeight(2),
    // paddingHorizontal: responsiveWidth(2),
    // backgroundColor: appColor.white,
  },  
  logo: {
    height: responsiveHeight(3),
    width: responsiveWidth(6),
    // alignSelf: "center",
    resizeMode: "contain",
  },
  HeaderText: {
    color: appColor.white,
    fontSize: responsiveFontSize(2),
    fontWeight: '500',
    // marginTop: responsiveHeight(38),
    // width: responsiveWidth(85),  
    // alignSelf: 'center',
  },
  nameText: {
    color: appColor.white,
    fontSize: responsiveFontSize(3),
    fontWeight: '500',
    marginHorizontal: responsiveWidth(2),
  },
  Totalamount: {
    color: appColor.white,
    fontSize: responsiveFontSize(4),
    fontWeight: '500',
  },
  otheramount: {
    color: appColor.white,
    fontSize: responsiveFontSize(3),
    fontWeight: '500',
  },
  Textcroncy: {
    color: appColor.white,
    fontSize: responsiveFontSize(2),
    textAlign: 'center',
  },
  amountText: {
    color: appColor.white,
    fontSize: responsiveFontSize(1.5),
    // fontWeight: '500',
  },
  graphimage: {
    height: responsiveHeight(30),
    width: responsiveWidth(95),        
    marginTop: responsiveHeight(-6),     
    // marginBottom: responsiveHeight(6),
    alignSelf: "center",
    resizeMode: "contain",        
    borderRadius: 5,
  },
  compnentview: {
    height: responsiveHeight(28),
    width: responsiveWidth(90),
    marginVertical: responsiveHeight(1),
    backgroundColor: appColor.white,
    alignSelf: "center",
    borderRadius: 10,
    ...MyStyles.elevation,
  },
  compnentheadingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: responsiveWidth(2),
  },
  compnentheadingText: {
    color: appColor.grey,
    fontWeight: '500',
    fontSize: responsiveFontSize(2),
  },
  compnentBlueText: {
    color: 'blue',
    fontWeight: '500',
    fontSize: responsiveFontSize(2),
  },
  datacompimage: {
    height: responsiveHeight(5),
    width: responsiveWidth(10),
    resizeMode: 'contain',
    margin: responsiveWidth(1),
  },
  datacompTitle: {
    color: appColor.black,
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
  },
  datacompPrice: {
    color: appColor.black,
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  featuredview: {
    // height: responsiveHeight(28),
    width: responsiveWidth(90),
    marginVertical: responsiveHeight(1),
    marginBottom: responsiveHeight(2),
    backgroundColor: appColor.white,
    alignSelf: "center",
    borderRadius: 10,
    ...MyStyles.elevation,
  },

  

 
});