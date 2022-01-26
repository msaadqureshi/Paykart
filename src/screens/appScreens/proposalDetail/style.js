import React from "react";
import { StyleSheet } from "react-native";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { appColor, COLORS, MyStyles } from "../../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColor.white,
  },
  headerView: {
    // width: responsiveWidth(100),
    paddingHorizontal: responsiveWidth(5),
    height: responsiveHeight(25),
    borderBottomLeftRadius: responsiveWidth(5),
    borderBottomRightRadius: responsiveWidth(5),
    backgroundColor: appColor.Primary,
    // justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  ProfileTitleView: {
    marginHorizontal: responsiveWidth(2),
  },
  ProfilePreview: {
    fontSize: responsiveFontSize(2), 
    textDecorationLine: 'underline',
    color: appColor.white,
    fontWeight: "500",
  },
  imageContainer: {
    // backgroundColor:'red',
    height: responsiveWidth(25),
    width: responsiveWidth(25),
    borderRadius: responsiveWidth(25),
    alignSelf: "center",
  },
  profilepic: {
    height: responsiveHeight(12),
    width: responsiveWidth(24),
    borderRadius: responsiveWidth(20),    
    backgroundColor: appColor.white,
  },
  editIcon: {
    height: responsiveHeight(3.5),
    width: responsiveWidth(7),       
    borderRadius: responsiveWidth(5),
    backgroundColor: appColor.white,
    ...MyStyles.center,
    position: "absolute",
    // zIndex: 2,
    // left: 2,
    bottom: 5,
  },
 
  SectionHeader: {
    paddingTop: responsiveWidth(1),
    fontSize: responsiveFontSize(2), 
    fontWeight: "500",
    color: appColor.Primary,
  },
  

  // BioComponent styles
  biostyle: {
    // height: responsiveHeight(6),
    padding: responsiveWidth(2),  
    // marginVertical: responsiveHeight(1),
    marginHorizontal: responsiveHeight(1),    
    borderRadius: responsiveWidth(1),
    justifyContent: "space-between",
    backgroundColor: appColor.white,
    // ...MyStyles.elevation,
    ...MyStyles.underLine,
  
  },
  txtstyle: {
    flex:1,
    fontSize: responsiveFontSize(1.8),
    color: appColor.black,
  },
  nametext:{
    flex:1,
    fontWeight: "500",
    fontSize: responsiveFontSize(2),
    marginTop: responsiveHeight(1),
    color: appColor.black,
    // backgroundColor: appColor.grey,
  },
  Headlinetext:{
    fontSize: responsiveFontSize(1.8),
    marginHorizontal: responsiveHeight(0.5),
    color: appColor.black,
  },
  editInputTitle:{
    // fontWeight: "500",
    fontSize: responsiveFontSize(1.8),
    marginTop: responsiveHeight(1),
    marginHorizontal: responsiveHeight(0.5),
    color: appColor.Primary,
  },
  RowContent: {
    flexDirection: "row",
    alignItems: "center",  
    // padding: responsiveWidth(1),
    // marginTop: responsiveHeight(0.5),
    // backgroundColor: "green",
  },
  underLine: {
    borderBottomWidth: responsiveHeight(0.1),
    borderBottomColor: appColor.Primary
  },
  


});
