import React from "react";
import { StyleSheet } from "react-native";
import {
  responsiveHeight,
  responsiveFontSize,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { appColor, COLORS, MyStyles } from "../../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColor.white,
  },
  imageContainer: {
    // backgroundColor:'red',
    height: responsiveWidth(25),
    width: responsiveWidth(25),
    borderRadius: responsiveWidth(25),
    alignSelf: "center",
  },
  form: {
    marginTop: responsiveHeight(5),
  },
  SocialView: {
    marginVertical: responsiveHeight(4),
    width: responsiveWidth(38),
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  socialLogo: {
    height: responsiveHeight(5),
    width: responsiveWidth(10),
  },
  CreateTextText: {
    fontSize: responsiveFontSize(2.5),
    color: appColor.Primary,
    margin: responsiveHeight(4),
    alignSelf: "center",
    fontWeight: "bold",
  },
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
  emailINPUT: {
    // height: responsiveHeight(7),    
    marginTop: responsiveHeight(2),
  },
  inputError: {
    color: "red",
    textAlign: "right",
    marginHorizontal: responsiveWidth(5),
    // marginTop: responsiveHeight(0.5),
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
  icon: {
    height: responsiveWidth(12),
    width: responsiveWidth(12),
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
  iconView: {
    flexDirection: "row",
    marginTop: responsiveHeight(4),
    width: responsiveWidth(38),
    alignSelf: "center",
    justifyContent: "space-between",
    marginBottom: responsiveHeight(3),
  },
});
