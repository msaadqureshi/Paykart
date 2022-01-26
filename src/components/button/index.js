import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { totalSize } from "react-native-dimension";
import { Icon } from "react-native-elements";
import LinearGradient from "react-native-linear-gradient";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { appColor, COLORS, MyStyles } from "../../constants/colors";

export const MyButton = (props) => {
  const { Title, onPress, customstyles, iconName, iconType, iconsize } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[styles.linearGradient, customstyles]}
    >
      <View style={MyStyles.Row}>
      <Icon
          name= {iconName ? iconName : null} 
          type= {iconType ? iconType : null} 
          size= {iconsize ? iconsize : totalSize(3)}
          color= {appColor.white}
        />
      <Text style={styles.buttonText}>{Title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export const MyIconButton = (props) => {
  const { Title, onPress, customstyles, iconName, iconType, iconsize } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[styles.MultiBtn, customstyles]}
    >
      <View style={MyStyles.Row}>
      <Icon
          name= {iconName ? iconName : null} 
          type= {iconType ? iconType : null} 
          size= {iconsize ? iconsize : totalSize(3)}
          color= {appColor.white}
        />
      <Text style={styles.buttonText}>{Title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export const MyPostButton = (props) => {
  const { Title, onPress, customstyles, iconName, iconType, iconsize } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[styles.PostBtn, customstyles]}
    >
      <Icon
          name= {iconName ? iconName : "plus"} 
          type= {iconType ? iconType : "feather"} 
          size= {iconsize ? iconsize : totalSize(3.5)}
          color= {appColor.white}
        />
    </TouchableOpacity>
  );
};

export const MySaveCancelButton = (props) => {

  const { SaveTitle, CancelTitle, onSavePress, onCancelPress, customstyles } = props;
  return (
    <View style={MyStyles.Row}>
      <TouchableOpacity
      activeOpacity={0.7}
      onPress={onSavePress}
      style={[styles.DualButton, styles.buttonFill, customstyles]}
    >
          <Text style={styles.buttonText}>Save</Text>
    </TouchableOpacity>
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onCancelPress}
      style={[styles.DualButton, MyStyles.Border, customstyles]}
    >
          <Text style={{...styles.buttonText, color: appColor.Primary}}>Cancel</Text>
    </TouchableOpacity>
    </View>
  );
};

export const GradientButton = (props) => {
  const { Title, onpress, activity = false, customstyles } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onpress}
      style={customstyles}
    >
      <LinearGradient
        style={styles.linearGradient}
        colors={[appColor.lgSecondary, appColor.Primary]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        {activity ? (
          <ActivityIndicator size="small" color="white" />
        ) : (
          <Text style={styles.buttonText}>{Title}</Text>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  linearGradient: {
    // flex: 1,   
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center", 
    height: responsiveHeight(6),
    width: responsiveWidth(90),
    marginTop: responsiveHeight(5),
    marginBottom: responsiveHeight(1),
    borderRadius: responsiveWidth(2),
    backgroundColor: appColor.Primary,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.2,
    // shadowRadius: 1.41,
    // elevation: 2,
  },
  MultiBtn: {
    // flex: 1,   
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center", 
    height: responsiveHeight(6),
    marginHorizontal: responsiveHeight(0.5),
    marginBottom: responsiveHeight(1),
    borderRadius: responsiveWidth(2),
    backgroundColor: appColor.Primary,
    ...MyStyles.elevation
  },
  PostBtn: {
    // flex: 1,   
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center", 
    height: responsiveHeight(6),
    width: responsiveWidth(12),
    // marginHorizontal: responsiveHeight(0.5),
    // marginBottom: responsiveHeight(1),
    borderRadius: responsiveWidth(10),
    backgroundColor: appColor.Primary,
    ...MyStyles.elevation,

    position: "absolute",
    bottom: responsiveHeight(2),
    right: responsiveWidth(4), 
    zIndex: 5,

    
  },
  buttonText: {
    fontSize: responsiveFontSize(2),
    marginHorizontal: responsiveWidth(2),
    color: appColor.white,
    backgroundColor: "transparent",
    fontWeight: "bold",
  },
  DualButton: {
    flex: 1,   
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center", 
    height: responsiveHeight(6),
    margin: responsiveHeight(2),
    borderRadius: responsiveWidth(2),
    // backgroundColor: appColor.Primary,
  },
  buttonFill: {
    backgroundColor: appColor.Primary,
  },
});

