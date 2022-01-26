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
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  ProfileTitleView: {
  },
  userName: {
    fontSize: responsiveFontSize(2), 
    color: appColor.white,
    fontWeight: "bold",
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
  ProfilePreview: {
    fontSize: responsiveFontSize(2), 
    textDecorationLine: 'underline',
    color: appColor.white,
    fontWeight: "500",
  },

  wrapper: {
    flex: 1,
    backgroundColor: appColor.Screenbg,
    paddingTop: responsiveHeight(2),
    // borderTopLeftRadius: responsiveWidth(5),
    // borderTopRightRadius: responsiveWidth(5),
  },  
  editTitle: {
    padding: responsiveWidth(2),
    fontSize: responsiveFontSize(2), 
    fontWeight: "500",
    color: appColor.blackgrey,
  },
  

  
  // BioComponent styles
  biostyle: {
    // height: responsiveHeight(6),
    padding: responsiveWidth(2),  
    marginVertical: responsiveHeight(0.5),
    marginHorizontal: responsiveHeight(1),    
    borderRadius: responsiveWidth(1),
    justifyContent: "space-between",
    backgroundColor: appColor.white,
    ...MyStyles.elevation,
  
  },
  txtstyle: {
    flex:1,
    marginLeft: responsiveWidth(2),
    fontSize: responsiveFontSize(1.8),
    color: appColor.black,
  },
  nametext:{
    fontSize: responsiveFontSize(3),
    fontWeight: "500",
    marginTop: responsiveHeight(1),
    color: appColor.black,
  },
  Headlinetext:{
    fontWeight: "500",
    fontSize: responsiveFontSize(2),
    marginTop: responsiveHeight(1),
    marginHorizontal: responsiveHeight(0.5),
    color: appColor.black,
  },
  editInputTitle:{
    fontWeight: "500",
    fontSize: responsiveFontSize(1.8),
    marginTop: responsiveHeight(1),
    marginHorizontal: responsiveHeight(0.5),
    color: appColor.Primary,
  },
  RowContent: {
    flexDirection: "row",
    alignItems: "center",  
    padding: responsiveWidth(1),
    // marginTop: responsiveHeight(0.5),
    // backgroundColor: "green",
  },
  editTitlestyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: responsiveWidth(3),
    // backgroundColor: "green",
  },
  EditDelBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  underLine: {
    borderBottomWidth: responsiveHeight(0.1),
    borderBottomColor: appColor.Primary
  },


  // Image Modal
  
  modalContainer: {
    backgroundColor: COLORS.iconbgblack,
    height: responsiveHeight(100),
    width: responsiveWidth(100),
    justifyContent: "flex-end",
    alignItems: "center",
  },
  ModalTouchableClose: {
    backgroundColor: appColor.black,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: responsiveWidth(2),
    width: responsiveWidth(20),
    height: responsiveHeight(4),
    marginVertical: responsiveHeight(2),
  },
  ModalText: {
    fontWeight: "700",
    color: appColor.black,
    fontSize: responsiveFontSize(2),
    marginHorizontal: responsiveWidth(3),
    // marginTop: responsiveHeight(1),
  },
  ModalView: {
    backgroundColor: "white",
    borderRadius: responsiveWidth(1.5),
    width: responsiveWidth(100),
    ...MyStyles.Row,
    ...MyStyles.center,
  },
  ModalTouchable: {
    backgroundColor: "white",
    // flexDirection: 'row',
    borderRadius: responsiveWidth(2),
    width: responsiveWidth(30),
    height: responsiveHeight(10),
    margin: responsiveHeight(2),
    // backgroundColor: "red",
    ...MyStyles.center,
  },


      





});
