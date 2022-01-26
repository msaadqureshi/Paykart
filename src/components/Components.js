import React, {useEffect, useState}from 'react';
import { StyleSheet, Text, Image, View, TextInput, Pressable, FlatList, TouchableOpacity } from 'react-native';
import { appColor, COLORS, SIZES } from "../constants/colors";
import { width, height, totalSize } from 'react-native-dimension';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import {Icon} from 'react-native-elements';
// import * as Animatable from 'react-native-animatable';

// import in your screen
// import {TitleTextInput, AuthTextInput, AuthButton, Spacer, IconButton, CustomIcon, Card  } from '../';

// useEffect(() => {
// let manuList = MANU;
// manuList[0].selected = true;
// setManu([...manuList]);
// setMenuProducts(manuList[0].products);
// },[])

// export const YourCompnentName =({}) =>{
//   return(
//     <View></View>
//   )
// }

// export const iconebuttion =({}) =>{
//   return(
//     <View></View>
//   )
// }

// cartIcon: {
//   flexDirection: 'row',
//   justifyContent: 'space-between',
//   position: 'absolute',
//   right: 50,
//   top: 8,
// },
// iconView: {
//   backgroundColor: COLORS.lightGray3,
//   width: 30,
//   height: 30,
//   borderRadius: 20,
//   justifyContent: 'center',
//   alignItems: 'center',
// },

export const cardWithBothIcon = ({
  props,
  placeholder,
  placeholderTextColor,
  onFocus,
  onBlur,
  onChangeText,
  secureTextEntry,
  value,
  keyboardType,
  maxLength,
  multiline,
}) => {
      // const [textInputValue, setTextInputValue] = useState(''); 
    
      return (
        <View style={{
          height: cardheight ? cardheight : height(10),
          width: cardwidth ? cardwidth : width(90),
          padding: padding ? padding : 2,
          margin: margin ? margin : 4,
          flexDirection: 'row',
          elevation: elevation ? elevation : 5,
          
        }}>

        <TextInput 
         onChangeText={onChangeText}
         value={value}
         placeholder={placeholder}
         placeholderTextColor={placeholderTextColor}
         onFocus={onFocus}
         onBlur={onBlur}
         keyboardType={keyboardType}
         maxLength={maxLength}
         multiline={multiline}
         secureTextEntry={secureTextEntry}

          style={styles.inputText}
          // onChangeText={text => setTextInputValue(text)}
          // value={textInputValue}
          // placeholder="Insert your text!"
        />
        </View>
      );
  }

export const TitleTextInput =({
  text,
}) =>{
  return(
    <Text 
    style= {styles.Titletext} 
    text={text}
    >{text}</Text>
  )
}

export const AuthTextInput = ({
    props,
    placeholder,
    placeholderTextColor,
    onFocus,
    onBlur,
    onChangeText,
    secureTextEntry,
    value,
    keyboardType,
    maxLength,
    multiline,
}) => {
        // const [textInputValue, setTextInputValue] = useState(''); 
      
        return (
          <View style={styles.inputView}>
          <TextInput 
           onChangeText={onChangeText}
           value={value}
           placeholder={placeholder}
           placeholderTextColor={placeholderTextColor}
           onFocus={onFocus}
           onBlur={onBlur}
           keyboardType={keyboardType}
           maxLength={maxLength}
           multiline={multiline}
           secureTextEntry={secureTextEntry}

            style={styles.inputText}
            // onChangeText={text => setTextInputValue(text)}
            // value={textInputValue}
            // placeholder="Insert your text!"
          />
          </View>
        );
    }

export const AuthButton =({
  props,
  text,
  onPress,
  height,
  width,
}) => {
    // const 
    return(
        <Pressable 
        style={({pressed}) => [{backgroundColor: pressed ? COLORS.appBgColor4 : COLORS.secondary},
        height={height},
        width={width},
        styles.AuthBtnstyle]}
        onPress={onPress}
        // {() => props.navigation.navigate('StartAuth')} 
        // style={styles.signupBtn}
        >
        {/* {text} */}
          <Text style={styles.btnText}>{text}</Text>
        </Pressable>
    )
}

export const Spacer = ({style,width,height }) => {
  return (
      <View style={[{height:height,width:width},style]}/>
  );
}

export const CartButton =({ 
  props,
  navigation,
  style,
  onPress,
  iconSize,
  iconColor,
  iconName,
  iconType,
  buttonColor,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress ? onPress : () => props.navigation.navigate("Cart")}
      style={{backgroundColor: buttonColor ? buttonColor : COLORS.iconbg,
         ...styles.IconButtonContainer}}>
      <Icon
        name={iconName ? iconName : 'shopping-cart'}
        type={iconType ? iconType : 'font-awesome-5'}
        size={iconSize ? iconSize : SIZES.icons.medium}
        color={iconColor ? iconColor : COLORS.white}
      />
    </TouchableOpacity>
  );
}

export const IconButton =({ 
  customstyles,
  onPress,
  iconSize,
  iconColor,
  iconName,
  iconType,
  buttonColor,
}) => {

  // for use in your Screen
  // <IconButton
  //     customstyles={{ right: responsiveWidth(12),}}
  //     iconName={}
  //     iconType={}
  //     iconSize={}
  //     iconColor={}
  //     />

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{backgroundColor: buttonColor ? buttonColor : COLORS.iconbg,
         ...styles.IconButtonContainer, ...customstyles}}>
      <Icon
        name={iconName ? iconName : 'information-circle'}
        type={iconType ? iconType : 'ionicon'}
        size={iconSize ? iconSize : SIZES.icons.medium}
        color={iconColor ? iconColor : COLORS.white}
      />
    </TouchableOpacity>
  );
}
export const AddCustomIcon = ({icon, size, animation, duration, color, style}) => {
  const defaulSize = totalSize(5);
  return (
    <Animatable.View animation={animation} duration={duration} style={style}>
      <Image
        source={icon}
        resizeMode="contain"
        style={{
          height: size ? size : defaulSize,
          width: size ? size : defaulSize,
          tintColor: color,
        }}
      />
    </Animatable.View>
  );
};
export const CustomIcon = ({
  icon, 
  size, 
  animation, 
  duration,
  onPress, 
  color, 
  style,
  text,
  BTNwidth,
  BTNheight,
  BTNmargin,
  BTNpadding,
  bgcolor,
  textColor,
  BTNRadius,
  fontSize,
  fontWeight,
  
}) => {
  const defaulSize = totalSize(5);
  return (
    <View 
    animation={animation} 
    duration={duration}>
    <TouchableOpacity 
    onPress={onPress}
    style={[
      style,
      // styles.CustumBtnstyle,
      {
        backgroundColor: bgcolor ? bgcolor : 'white',
        width: BTNwidth ? BTNwidth : width(30),
        height: BTNheight ? BTNheight : height(6),
        margin: BTNmargin ? BTNmargin : totalSize(0.5),
        // padding: BTNpadding ? BTNpadding : totalSize(0.5),
        borderRadius: BTNRadius ? BTNRadius : totalSize(3),
        alignItems:"center",
        justifyContent:"center",
        elevation: 3,
      }
    ]}>
      {/* <Image
        source={icon}
        resizeMode="contain"
        style={{
          height: size ? size : defaulSize,
          width: size ? size : defaulSize,
          tintColor: color,
        }}
      />  */}
      <Text style={{
        color: textColor ? textColor :appColor.black,
        fontSize: fontSize? fontSize: 16,
        fontWeight: fontWeight ? fontWeight : '500',
        }}>{text}</Text> 
      </TouchableOpacity>
    </View>
  );
};

// export const Card =({props}) => {
//     // const 
//     return(
//         <View>
//             <FlatList
//         style={styles.cardStyle}
//         data={MenuProducts}
//         renderItem={({item}) => (
//           <TouchableOpacity
//             onPress={() => props.navigation.navigate('productDetail', item)}
//             // onPress={()=>alert(item)}
//             style={styles.cardStyle}>
//             <View style={{flexDirection: 'row'}}>
//               <Image style={styles.cardimage} source={item.image} />

//               <View style={{width: '100%'}}>
//                 <Text style={[styles.cardtitle]}>{item.title}</Text>
//                 <Text style={styles.cardDetail}>{item.detail}</Text>
//               </View>
//             </View>
//             <View>
//               <Text style={styles.cardprice}>{item.price}</Text>
//             </View>
//           </TouchableOpacity>
//         )}
//       />
//       </View>
//     );
// }


export const HeaderSimple = ({
  style,
  onPress,
  onBackPress,
  showSearch,
  item,
  animation,
}) => {
  return (
    <Animatable.View animation={animation ? animation : 'fadeInDown'}>
      <View
        style={[
          // styles.row,
          {
            width: width(100),
            paddingRight: width(5),
            backgroundColor: colors.greenLighter,
            marginTop: Platform.OS == 'ios' ? 0 : sizes.baseMargin,
          },
        ]}>
        <View style={styles.onlyRow}>
          <BackIcon onPress={onBackPress} />
          <LogoMain
            logo={appImages.logo}
            size={Platform.OS == 'ios' ? totalSize(8) : totalSize(10)}
          />
        </View>
        {showSearch ? <SearchIcon /> : null}
      </View>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    Titletext:{
      color:"#000",
      // backgroundColor: 'red',
      fontSize:14,
      fontWeight: 'bold',
      width:width(90),
      height:height(3),
      marginTop:totalSize(2),
      // padding:totalSize(2),
      justifyContent:"center",
    },
    inputView:{
        width: width(90),
        height: height(6),
        margin: totalSize(1),
        padding:totalSize(1),
        borderRadius:totalSize(3),
        elevation: 3,
        backgroundColor:COLORS.white,
        justifyContent:"center",
      },
      inputText:{
        height: height(6),
        fontSize: SIZES.fontSize.medium,
        // color:COLORS.primary,
        // backgroundColor:COLORS.primary
      },
      AuthBtnstyle:{
        width: width(90),
        height: height(6),
        margin: totalSize(1),
        padding:totalSize(1),
        borderRadius:totalSize(3),
        alignItems:"center",
        justifyContent:"center",
        elevation: 3,
      },   
      IconButtonContainer: {
        // position: "absolute",
        // zIndex: 5,
        // top: responsiveHeight(1),
        // right: responsiveWidth(1.5),
        height: responsiveHeight(4),
        width: responsiveWidth(8), 
        borderRadius: responsiveWidth(10),
        // marginBottom: responsiveHeight(3),       
        // backgroundColor: COLORS.black,       
        alignItems: 'center',
        justifyContent: 'center',
      },
      cardStyle: {
        // flexDirection: 'row',
        height: 100,
        padding: 10,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#e9e9e9',
      },
      cardimage: {
        height: 60,
        width: 60,
        borderRadius: 4,
      },
      cardtitle: {
        //   fontFamily:
        width: '100%',
        paddingHorizontal: 10,
        fontSize: 24,
        fontWeight: 'bold',
        // backgroundColor: 'yellow',
      },
      cardDetail: {
        width: '85%',
        paddingHorizontal: 10,
        fontSize: 14,
        // backgroundColor: 'pink',
      },
      cardprice: {
        color: 'gray',
        fontWeight: 'bold',
        fontSize: 14,    
        alignSelf: 'flex-end',
      },
      cartIconView: {
        position: 'absolute',
        zIndex: 5,
        top: responsiveHeight(1.5),
        right: responsiveWidth(1.5),
      },
      linkBtn:{
        width:width (16),
        height:height (8),
        backgroundColor:COLORS.white,
        borderRadius:totalSize(5),
        alignItems:"center",
        justifyContent:"center",
        margin:totalSize(2),
      },      
})

// const COMPONENTS = {AuthTextInput, AuthButton, SocialIcon, Spacer, cardWithBothIcon, cartButton, IconButton };

// export default COMPONENTS;