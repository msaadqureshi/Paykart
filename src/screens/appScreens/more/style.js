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
    backgroundColor: appColor.Primary,
  },
  headerView: {
    // width: responsiveWidth(100),
    paddingHorizontal: responsiveWidth(5),
    height: responsiveHeight(25),
    // backgroundColor: appColor.grey,
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


  // OptionsComponent styles
    btnstyle: {
      height: responsiveHeight(6),
      paddingHorizontal: responsiveWidth(5),  
      marginVertical: responsiveHeight(0.5),
      marginHorizontal: responsiveHeight(1),
      justifyContent: "space-between",
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: appColor.white,
      ...MyStyles.elevation,
    
    },
    txtstyle: {
      marginLeft: responsiveWidth(2),
      // marginVertical: responsiveHeight(2),
      // backgroundColor: "red",
      alignContent: "center",
      justifyContent: "center",
      fontSize: responsiveFontSize(2),
      fontWeight: "500",
      color: appColor.black,
    },
    iconRow: {
      flexDirection: "row",
      alignItems: "center",
      // backgroundColor: "green",
    },


    wrapper: {
      flex: 1,
      backgroundColor: appColor.Screenbg,
      paddingTop: responsiveHeight(2),
      borderTopLeftRadius: responsiveWidth(5),
      borderTopRightRadius: responsiveWidth(5),
    },
    OptionsComponentTitle: {
      fontSize: responsiveFontSize(2), 
      padding: responsiveWidth(2),
      color: appColor.grey,
    },
      


});
