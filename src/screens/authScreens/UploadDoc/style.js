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
    backgroundColor: appColor.white,
  },
  imageContainer: {
    // backgroundColor:'red',
    height: responsiveWidth(35),
    width: responsiveWidth(35),
    // borderRadius: responsiveWidth(25),
    alignSelf: "center",
  },
  form: {
    marginTop: responsiveHeight(10),
    alignItems: "center",
  },
  // SocialView: {
  //   marginVertical: responsiveHeight(4),
  //   width: responsiveWidth(38),
  //   alignSelf: "center",
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  // },
  // socialLogo: {
  //   height: responsiveHeight(5),
  //   width: responsiveWidth(10),
  // },
  uploadtext: {
    fontSize: responsiveFontSize(1.5),
    color: appColor.grey,
    // marginTop: responsiveHeight(0.9),
    // alignSelf: "center",
    fontWeight: "500",
  },
  CreateTextText: {
    fontSize: responsiveFontSize(2.5),
    color: appColor.Primary,
    margin: responsiveHeight(4),
    alignSelf: "center",
    fontWeight: "bold",
  },

  DocCardView: {
    alignSelf: "center",
    justifyContent: "center",
    height: responsiveHeight(8),
    width: responsiveWidth(90),
    marginVertical: responsiveHeight(1),
    padding: responsiveHeight(0.5),
    borderRadius: responsiveWidth(2),
    backgroundColor: appColor.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  cardItem: {
    flexDirection: "row", 
    justifyContent: "space-between",  
    alignItems: "center",
    width: responsiveWidth(90),
    paddingHorizontal: responsiveWidth(2),
    // backgroundColor: appColor.Secondary,
  },

  iconView: {
    height: responsiveWidth(12),
    width: responsiveWidth(12),
    marginRight: responsiveWidth(2),
    borderRadius: (2),
    // borderWidth: 1,
    // borderColor: appColor.Primary,
  },

  modalContainer: {
    backgroundColor: appColor.Modalbg,
    height: responsiveHeight(100),
    width: responsiveWidth(100),
    alignSelf: "center",
    justifyContent: "center",
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
    fontSize: responsiveFontSize(2),
    marginHorizontal: responsiveWidth(3),
    marginTop: responsiveHeight(1), 
  },
  ModalTouchable: {
    // backgroundColor: appColor.Secondary,
    // flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
    borderRadius: responsiveWidth(2),
    width: responsiveWidth(80),
    height: responsiveHeight(8),
    marginVertical: responsiveHeight(4),
  },
  // emailINPUT: {
  //   // height: responsiveHeight(7),    
  //   marginTop: responsiveHeight(4),
  // },
  // googleView: {
  //   width: responsiveWidth(16),
  //   height: responsiveWidth(16),
  //   borderRadius: responsiveWidth(8),
  //   alignItems: "center",
  //   justifyContent: "center",
  //   backgroundColor: "white",
  //   shadowColor: "#000",
  //   shadowOffset: {
  //     width: 0,
  //     height: 2,
  //   },
  //   shadowOpacity: 0.25,
  //   shadowRadius: 3.84,

  //   elevation: 5,
  // },
  // icon: {
  //   height: responsiveWidth(12),
  //   width: responsiveWidth(12),
  // },
  // fbView: {
  //   width: responsiveWidth(16),
  //   height: responsiveWidth(16),
  //   borderRadius: responsiveWidth(8),
  //   alignItems: "center",
  //   justifyContent: "center",
  //   borderColor: "blue",
  //   borderWidth: responsiveWidth(0.2),
  //   shadowColor: "#000",
  //   shadowOffset: {
  //     width: 0,
  //     height: 2,
  //   },
  //   shadowOpacity: 0.25,
  //   shadowRadius: 3.84,

  //   elevation: 5,
  //   backgroundColor: "white",
  // },
  // iconView: {
  //   flexDirection: "row",
  //   marginTop: responsiveHeight(4),
  //   width: responsiveWidth(38),
  //   alignSelf: "center",
  //   justifyContent: "space-between",
  //   marginBottom: responsiveHeight(3),
  // },  
  
});
