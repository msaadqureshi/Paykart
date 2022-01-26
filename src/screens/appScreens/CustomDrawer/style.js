import React from 'react';
import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {appColor, COLORS, MyStyles} from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a2745',
  },
  headerview: {
    borderBottomWidth: responsiveWidth(0.1),
    borderColor: appColor.grey,
  },
 
  profilepic: {
    height: responsiveHeight(15),
    width: responsiveWidth(30),
    borderRadius: responsiveWidth(15),
    backgroundColor: appColor.white,
    borderBottomWidth: responsiveWidth(0.5),
    borderColor: appColor.grey,
    alignSelf: 'center',
  },
  prfilename: {
    fontSize: responsiveFontSize(2),
    color: appColor.white,
    fontWeight: '700',     
  },
  blueText: {
    fontSize: responsiveFontSize(1.5),
    color: '#2164a8',
    // fontWeight: '700',
  },
  greyText: {
    fontSize: responsiveFontSize(2),
    margin: responsiveWidth(1.2),
    paddingHorizontal: responsiveWidth(3),
    color: appColor.grey,    
    textAlign: 'right',
    // fontWeight: '700',
  },
  whiteText: {
    fontSize: responsiveFontSize(1.8),    
    margin: responsiveWidth(1.2),
    paddingHorizontal: responsiveWidth(3),
    color: appColor.white,
    textAlign: 'right',
    // fontWeight: '700',
  },
  logoutbtn: {
    height: responsiveHeight(4),
    width: responsiveWidth(40),
    borderRadius: responsiveWidth(15), 
    margin: responsiveWidth(3),
    backgroundColor: '#ff4c44',
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent:  'center',
  }
});
