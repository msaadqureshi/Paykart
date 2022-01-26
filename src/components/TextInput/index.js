import { set } from "core-js/core/dict";
import React,{useState} from "react";
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import PhoneInput from "react-native-phone-number-input";
import DateTimePicker from '@react-native-community/datetimepicker';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { appColor, COLORS } from "../../constants/colors";

export const MyTextInput = (props) => {
   const [isShowPassword, setIsShowPassword] = useState(false)

   const {
    inputIcon,
    inputIconType,
    inputIconName,
    inputTconColor,
    label,
    onchange,
    issecure,
    type,
    maxLength,
    placeholder,
    customstyles,
    inputstyle,
    placeholderTextColor,
    selectionColor,
    IconName,
    onPress,
    showIcon,
  } = props;
  return (
    <View style={[styles.textInput, customstyles]}>
       {inputIcon ? ( 
      <Icon
          type={inputIconType ? inputIconType : "font-awesome"}
          name={inputIconName ? inputIconName:'user'}
          size={responsiveFontSize(2.5)}
          color={inputTconColor ? inputTconColor : appColor.grey}
          // onPress={()=>{setInputIcon(!inputIcon)}}
        />
      ) : null
      }
      <TextInput style={{...inputstyle, flex: 4, }}
        // maxLength={maxLength ? maxLength : 100}
        onChangeText={onchange}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor ? placeholderTextColor : appColor.grey }
        selectionColor={selectionColor}
        secureTextEntry={!isShowPassword}
        keyboardType={type}
        onPress={onPress}
      />
      {showIcon ? ( 
      <Icon
          type={"ionicon"}
          name={isShowPassword ? 'eye':'eye-off-sharp'}
          size={responsiveFontSize(2.8)}
          color={appColor.grey}
          onPress={()=>{setIsShowPassword(!isShowPassword)}}
        />
      ) : null
      }
      
    </View>
  );
};
export const MyInputParagrph = (props) => {
   const {
    label,
    onchange,
    type,
    placeholder,
    maxLength,
    customstyles,
    inputstyle,
    placeholderTextColor,
    onPress,
  } = props;
  return (
    <View style={[styles.ParaInput, customstyles]}>
      <TextInput style={{...inputstyle, textAlignVertical: 'top'}}
       multiline={true}
       numberOfLines={8}
       maxLength = {maxLength}
        onChangeText={onchange}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        keyboardType={type}
        onPress={onPress}
      />
    </View>
  );
};
export const MyFocusInput = (props) => {
   const [isShowPassword, setIsShowPassword] = useState(false);
   const [focus, setFocus] = useState(false);
   const focusStyle = focus ? styles.activeInput :  styles.unactiveInput;
  const {
    label,
    onchange,
    issecure,
    type,
    placeholder,
    customstyles,
    placeholderTextColor,
    IconName,
    onPress,
    showIcon,
  } = props;
  return (
    <View style={{focusStyle, ...styles.textInput, customstyles}}>
      <TextInput style={{flex: 4}}
        onChangeText={onchange}
        onFocus={() => setFocus()}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        secureTextEntry={isShowPassword}
        keyboardType={type}
        onPress={onPress}
      />
      {showIcon ? ( <Icon
          type={"ionicon"}
          name={isShowPassword ? 'eye':'eye-off-sharp'}
          size={responsiveFontSize(2.8)}
          color={appColor.grey}
          onPress={()=>{setIsShowPassword(!isShowPassword)}}
        />
      ) : null
      }
      
    </View>
  );
};
export const MyPhoneInput = (props) => {
   const [phoneNumber, setphoneNumber] = useState("")
  const {
    onchange,
    placeholder,
    customstyles,
    placeholderTextColor,
    onpress,
    showIcon,
  } = props;

  return (
    <View >
      <PhoneInput 
        containerStyle = {[styles.phoneInputStyle, customstyles]}
        textContainerStyle={styles.phoneInputTextStyle}
        textInputStyle= {{paddingVertical: responsiveHeight(0), margin: responsiveHeight(0)}}
        // codeTextStyle= {{paddingVertical: responsiveHeight(0)}}


        defaultValue = {phoneNumber}
        defaultCode = "PK" 
        onChangeFormattedText= {()=> {setphoneNumber()}}

        onChangeText={onchange}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        // onPress={onpress}
      />
      
    </View>
  );
};

export const MyDateInput = (props) => {
  const {
    onchange,
    placeholder,
    customstyles,
    placeholderTextColor,
    // onpress,
    showIcon,
  } = props;
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [datetext, setDateText] = useState("DOB");
  const [timetext, setTimeText] = useState("DOB");

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  let tempDate = new Date(currentDate);
  let fdate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1 ) + '/' + tempDate.getFullYear();
  setDateText(fdate)

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <TouchableOpacity style={[styles.phoneInputStyle, customstyles]}
    onPress={showDatepicker}>
      <Text>{datetext}</Text>
      
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textInput: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "space-between",
    width: responsiveWidth(90),  
    // height: responsiveHeight(6),
    paddingHorizontal: responsiveWidth(3),
    // marginTop: responsiveHeight(3),
    borderRadius: responsiveWidth(2),
    backgroundColor: appColor.white,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.2,
    // shadowRadius: 1.41,
    // elevation: 2,
    
    // borderColor: COLORS.black,
    // borderWidth: 0.5,    
  },
  ParaInput: {
    width: responsiveWidth(90),  
    height: responsiveHeight(15),
    paddingHorizontal: responsiveWidth(3),
    marginTop: responsiveHeight(3),
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
    
    // borderColor: COLORS.black,
    // borderWidth: 0.5,    
  },
  phoneInputStyle: {
    alignItems: "center",
    alignSelf: "center",
    width: responsiveWidth(90),  
    // height: responsiveHeight(6),  
    marginTop: responsiveHeight(3),
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
    
    // borderColor: COLORS.black,
    // borderWidth: 0.5,    
  },
  phoneInputTextStyle: {
    // height: responsiveHeight(6),      
    backgroundColor: appColor.white,
    
  },
  activeInput: {
    borderColor: appColor.white,
    borderColor: appColor.Primary,
    borderWidth: 0.5,
  },
  unactiveInput: {
    borderColor: appColor.white,
    borderColor: appColor.silver,
    borderWidth: 0.5,
  },
});

