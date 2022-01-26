import { StyleSheet} from 'react-native'
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { height, width, totalSize } from 'react-native-dimension';
import { Dimensions, Platform, StatusBar } from "react-native";

export const appColor = {

    Primary: "#0e0a53", // rgba(70,122,185, 0.8)  #467ab9  #6892C6 #89AAD2  #ABC3DF  #CDDBEC  blue
    Secondary: "#bbdbeb", // rgba(187,219,235, 0.8) oringe
    // Secondary: "#eb6c30", // rgba(235,108,48, 0.8) oringe

    transparent: "transparent",

    appTheme1: "#292d76", // rgba(41,45,118,255)
    appTheme2: "#325086", // rgba(50,80,134,255)
    appTheme3: "#7890ac", // rgba(120,144,172,255)
    appTheme3: "#3b73a2", // rgba(70,122,185, 0.8)
    appTheme4: "#eaa540", // rgba(234,165,64,255)


    red: "#ca2129",   
    white:'#ffffff',  
    silver:"#dcdfe3",
    grey:"#b3afb1",
    Stormgrey: "#74778b",    
    black: '#000',
    blackgrey: '#1a1a1a', 
    Modalbg:"rgba(0,0,0,0.5)",

    Hex1: "#35407e", // rgba(53,64,126, 0.8)
    Hex2: "#2596be", // rgba(37,150,190, 0.8)   
    Hex3: "#3b73a2", // rgba(59,115,162, 0.8)
    Hex4: "#649ac2", // rgba(100,154,194, 0.8)
    Hex5: "#74778b", // rgba(116,119,139, 0.8)    
    Hex6: "#f4a13d", // rgba(244,161,61, 0.8)
    Hex7: "#fbbe36",    
    Hex8: "#f3c893", 

    lgPrimary:"#fbbe36",
    lgSecondary:"#ca2129",
    Textred:'#BB1E25',
    ViewRed:'#750000',

    Screenbg: "#F8F9F9",
    bgPrimary:  "rgba(187,219,235,0.8)",

    appGradiantColors: ['rgba(70,122,185, 0.8)', 'rgba(235,108,48, 0.8)'],
}

export const COLORS = {
    // base colors
    primary: "#ca2129", // red
    secondary: "#fbbe36",   // yellow

    appGradiantColors: ['rgba(202, 33, 41, 1)', 'rgba(251, 190, 54, 1)'],
   
   
    iconbg: "rgba(205,205,210, 0.7)",
    iconbgwhite: "rgba(248,249,249, 0.7)",
    iconbgblack: "rgba(0,0,0,0.7)",
    iconbgRed: "rgba(202, 33, 41, 0.7)",
    iconbgYellow: "rgba(251, 190, 54, 0.7)",

    transparent: "transparent",

    appTheme1: "#fbbe36",
    appTheme2: "#ca2129",
    appTheme3: "#2c282e",
    appTheme4: "#747475",
    appTheme5: "#969798",
    appTheme6: "#CDCDD2",
    appTheme7: "#f3c893",
    appTheme8: "#a53b2b",
    
  appTextColor1: '#000000',
  appTextColor2: 'rgba(49,49,49, 1)',
  appTextColor3: '#606060',
  appTextColor4: '#808080', // gray
  appTextColor5: '#BCBCBC',
  appTextColor6: '#FFFFFF',

  appBg: '#F8F9F9',
  appBgColor1: '#FFFFFF',
  appBgColor2: '#F7F7F7',
  appBgColor3: '#EFEFEF',
  appBgColor4: '#A1A1A1',
  appBgColor5: '#606060',
  appBgColor6: '#414141',
};

export const MyStyles = StyleSheet.create ({
  MainHeader: {
    flexDirection: "row", 
    alignItems: "center", 
    justifyContent: "space-between",
    width: responsiveWidth(100),
    height: responsiveHeight(6), 
    backgroundColor: appColor.white,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  Row: {    
    flexDirection: "row",
    alignItems: "center",
  },
  RowwithSpace: {    
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

  },
  Border: {
    borderColor: appColor.Primary,
    borderWidth: responsiveHeight(0.2),
  },
  underLine: {
    borderBottomWidth: responsiveHeight(0.1),
    borderBottomColor: appColor.grey,
  },

  elevation: { 
   shadowColor: "#000",
    shadowOffset: {
   width: 0,
   height: 1,
  },
  shadowOpacity: 0.2,
  shadowRadius: 1.41,
  elevation: 5,
  },
}
);

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 30,
    padding: 10,
    padding2: 12,

    // font sizes
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 20,
    h4: 18,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    // width,
    // height,

    
  marginBottom: height * 0.025,
  marginTop: height * 0.025,
  marginHorizontal: width * 0.05,
  marginVertical: height * 0.025,
  section: 25,
  TinyMargin: totalSize(0.5),
  smallMargin: totalSize(1),
  baseMargin: totalSize(2),
  doubleBaseMargin: totalSize(5),
  doubleSection: 50,
  horizontalLineHeight: 1,
  searchBarHeight: 30,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: Platform.OS === 'ios' ? 64 : 54,
  buttonRadius: 10,
  modalRadius: 15,
  loginRadius: totalSize(10),
  cardRadius: 15,
  ModalRadius: 25,
  inputRadius: 10,
  
  icons: {
    tiny: totalSize(1.5),
    small: totalSize(2),
    medium: totalSize(2.5),
    large: totalSize(3.5),
    xl: totalSize(4.5),
    xxl: totalSize(5),
  },
  fontSize: {
    tiny: totalSize(1),
    smaller: totalSize(1.25),
    small: totalSize(1.5),
    smallMedium: totalSize(1.75),
    medium: totalSize(2),
    large: totalSize(2.5),
    xl: totalSize(3.5),
    xxl: totalSize(5),
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 200,
  },
};

export const cart = {
  cartItems:[]
}
