import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import { totalSize } from 'react-native-dimension';
import {Icon} from 'react-native-elements';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { backgroundColor } from 'styled-system';
import { appColor, COLORS, MyStyles } from "../constants/colors";


// Add this in you screen where you want to use header...

// import {Header, HeaderIcon, CuttomHeader} from '../../components/Header'

export const Header = ({props, onPress}) => {
  // const [selected, setSelected] = useState('');
  return (    // <Header onPress={() => props.navigation.goBack()} />
      <View style={styles.iconView}>
      <Icon  
          name= "arrow-left"
          type= "feather"
          size={totalSize(2.5)}
          color={appColor.black}
          onPress={onPress}
        />
      </View>
  );
};
export const HeaderIcon = ({props, onPress, iconName, iconType, customstyles}) => {
  // const [selected, setSelected] = useState('');
  return (    // <Header onPress={() => props.navigation.goBack()} />
      <View style={{customstyles}}>
      <View style={styles.HeadericonView}>
      <Icon  
          name= {iconName ? iconName : "arrow-right"} // angle-right
          type={iconType ? iconType : "feather"} // font-awesome
          size={responsiveFontSize(2.5)}
          color={appColor.black}
          onPress={onPress}
        />
      </View>
      </View>
  );
};

export const CuttomHeader = ({ props, 
  headerstyle,
  leftonPress,
  rightonPress,
  headertitle,
  LefticonName,
  LefticonType,
  Lefticonsize,
  RighticonName,
  RighticonType,
  Righticonsize,
  customstyles,
  }) => {
  return(
      <View style={[styles.Cuttomheader, customstyles]}>
        <TouchableOpacity
          style={styles.Cuttomheaderimg}
          onPress={leftonPress} // leftonPress={()=>{props.navigation.goBack()}}
          >
         <Icon
          name= {LefticonName ? LefticonName : "arrow-left"} // angle-left
          type={LefticonType ? LefticonType : "feather"} // font-awesome
          size={Lefticonsize ? Lefticonsize : totalSize(3)}
          color={appColor.black}
        />
        </TouchableOpacity>
        <Text style={styles.Cuttomheadertxt}>
            {headertitle= headertitle ? headertitle : null}
          </Text>
        <TouchableOpacity 
        style={styles.Cuttomheaderimg}
        onPress={rightonPress}>
         <Icon
          name= {RighticonName ? RighticonName : null}
          type={RighticonType ? RighticonType : null}
          size={Righticonsize ? Righticonsize : totalSize(4)}
        />
        </TouchableOpacity>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: responsiveFontSize(6),
    width: '100%',
    // position: 'absolute',
    top: 0,
    elevation: 4,
  },
  iconView: {
    position: "absolute",
    zIndex: 5,
    top: responsiveHeight(1),
    left: responsiveWidth(1.5),
    justifyContent: "center",
    height: responsiveWidth(8),
    width: responsiveWidth(8),
    marginHorizontal: 5,
    borderRadius: responsiveHeight(5),
    backgroundColor: COLORS.iconbg,
  },
  HeadericonView: {
    // position: "absolute",   
    // top: responsiveHeight(1),
    // right: responsiveWidth(1.5),
    // zIndex: 5,
    justifyContent: "center",
    height: responsiveWidth(8),
    width: responsiveWidth(8),
    marginHorizontal: 5,
    borderRadius: responsiveHeight(5),
    backgroundColor: COLORS.iconbg,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 30,
  },
  Cuttomheader: {
    backgroundColor: appColor.white,
    width: "100%",
    height: responsiveHeight(6),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',    
    // paddingHorizontal: responsiveWidth(4),
    borderBottomEndRadius: responsiveWidth(3),
    borderBottomStartRadius: responsiveWidth(3),
    // ...MyStyles.elevation,
  },
  
  Cuttomheadertxt: {
    flex: 1,
    justifyContent: "flex-end",
    color: COLORS.black,
    marginLeft: 5,
    // backgroundColor: "red",
    fontSize: responsiveFontSize(2.5),
    fontWeight:"bold",
    
    },
  Cuttomheaderimg:{ 
      height: responsiveWidth(8),
      width: responsiveWidth(8),
      marginHorizontal: 5,
      borderRadius: responsiveWidth(5),
      alignSelf: "center",
      justifyContent: "flex-start",
      // alignContent: "center",
      // alignItems: "center",
      // backgroundColor: COLORS.white,  
  },
});

export default Header;


