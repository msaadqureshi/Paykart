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
import { appColor, COLORS } from "../../constants/colors";


// Add this in you screen where you want to use header...

// import {Header, CuttomHeader} from '../../components/Header'

export const Header = ({props, onPress}) => {
  // const [selected, setSelected] = useState('');
  return (    // <Header onPress={() => props.navigation.goBack()} />
      <View style={styles.iconView}>
      <Icon  
          name= "arrow-left"
          type= "feather"
          size={totalSize(2.5)}
          color={COLORS.primary}
          onPress={onPress}
        />
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
  }) => {
  return(
      <View style={styles.Cuttomheader}
      >
        <TouchableOpacity
          style={styles.Cuttomheaderimg}
          onPress={leftonPress} // leftonPress={()=>{props.navigation.goBack()}}
          >
         <Icon
          name= {LefticonName ? LefticonName : "arrow-left"} // angle-left
          type={LefticonType ? LefticonType : "feather"} // font-awesome
          size={Lefticonsize ? Lefticonsize : totalSize(3)}
          color={COLORS.primary}
        />
        </TouchableOpacity>
        <Text style={styles.Cuttomheadertxt}>
            {headertitle= headertitle ? headertitle : "headerName"}
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
    height: 50,
    width: '100%',
    // position: 'absolute',
    top: 0,
    elevation: 4,
  },
  iconView: {
    position: "absolute",
    zIndex: 5,
    top: responsiveHeight(1.5),
    left: responsiveWidth(1.5),
    justifyContent: "center",
    height: totalSize(3.5),
    width: totalSize(3.5),
    // marginHorizontal: 5,
    borderRadius: totalSize(5),
    backgroundColor: COLORS.white,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 30,
  },
  Cuttomheader: {
    backgroundColor: COLORS.white,
    width: "100%",
    height: responsiveHeight(7),
    // backgroundColor: COLORS.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 5,
    // paddingHorizontal: responsiveWidth(4),
    borderBottomEndRadius: responsiveWidth(3),
    borderBottomStartRadius: responsiveWidth(3),
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
      borderRadius: totalSize(5),
      alignSelf: "center",
      justifyContent: "flex-start",
      // alignContent: "center",
      // alignItems: "center",
      // backgroundColor: COLORS.primary,  
  },
});

export default Header;


