import React, {useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  Modal,
  Button,
  ImageBackground,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Icon} from 'react-native-elements/dist/icons/Icon';
import {styles} from './style';
import {appImages} from '../../../assets/utility';
import {appColor} from '../../../constants/colors';
import {MyFocusInput, MyTextInput} from '../../../components/TextInput';
import {MyButton, GradientButton} from '../../../components/button';
// import { launchCamera, launchImageLibrary } from "react-native-image-picker";
// import { signIn } from "../../Backend/auth";
// import { Settings, LoginButton, AccessToken, LoginManager, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';
// import {
//   GoogleSignin,
//   GoogleSigninButton,
//   statusCodes,
// } from '@react-native-google-signin/google-signin';
// import { saveData } from "../../Backend/utility";
// import SimpleToast from "react-native-simple-toast";

const LoginScreen = props => {
  const [loginEmail, setLoginEmail] = useState('');
  const [password, setPassword] = useState('');

  const [passwordError, setPasswordError] = useState('');
  const [LoginEmailError, setLoginEmailError] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [isShow, setIsShow] = useState(true);
  const [flag, setFlag] = useState(true);

  const inputError = title => {
    return <Text style={{}}>{title}</Text>;
  };

  //login validation
  const handleOnChangeLoginEmailText = LoginEmail => {
    const re =
      /^\s*(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))\s*$/;
    !LoginEmail
      ? setLoginEmailError('')
      : !re.test(LoginEmail)
      ? setLoginEmailError('Email format is invalid')
      : setLoginEmailError('');
    setLoginEmail(LoginEmail);
  };
  const handleOnChangeLoginPasswordText = Password => {
    !Password
      ? setPasswordError('')
      : password.length < 5
      ? setPasswordError('Min 6 characters')
      : setPasswordError('');
    setPassword(Password);
  };
  const Loginvalidations = () => {
    const re =
      /^\s*(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))\s*$/;

    let valid = true;
    if (loginEmail === '') {
      setLoginEmailError('Please Enter Email');
      valid = false;
    }
    if (!re.test(email)) {
      setLoginEmailError('Email format is invalid');
      valid = false;
    }
    if (password === '') {
      setPasswordError('Enter your Password');
      valid = false;
    }
    if (password.length < 8) {
      setPasswordError('Min 8 characters');
      valid = false;
    } else {
      return valid;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
     <ImageBackground source={appImages.Loginbg} style={styles.imagebg}>
       <View style={styles.bgopecity}>
        
         <Image source={appImages.scan} style={styles.logo} /> 

    <View style={styles.loginwrap}>
          <Text style={styles.login}>Login</Text>
        
<Text style={styles.inputText}>Email Address</Text>

<MyTextInput          
inputIcon={true}
inputIconType={'feather'}
inputIconName={'user'}
inputTconColor={'blue'}

  label={'Email'}           
  placeholder={'Saad@gmail.com'}
  onchange={text => handleOnChangeLoginEmailText(text)}
  customstyles={styles.emailINPUT}
  selectionColor={appColor.white}
  inputstyle={{color: appColor.white}}            
  // placeholderTextColor={"black"}
/>

{/* {LoginEmailError ? (
<Text style={styles.inputError}>{LoginEmailError}</Text>
) : null} */}

<Text style={styles.inputText}>Password</Text>
<MyTextInput
inputIcon={true}
inputIconType={'feather'}
inputIconName={'lock'}
inputTconColor={'blue'}
  label={'Password'}
  placeholder={'**********'}
  onchange={text => handleOnChangeLoginPasswordText(text)}
  customstyles={styles.emailINPUT}
  selectionColor={appColor.white}
  inputstyle={{color: appColor.white}}
  // showIcon={true}
  // IconName={isShow ? "eye-off-sharp" : "eye"}
  // onPress={() => setIsShow(!isShow)}
  // issecure={isShow}
/>
{/* {passwordError ?  (
<Text style={styles.inputError}>{passwordError}</Text>
) : null} */}

<MyButton customstyles={styles.loginBtn} Title={'LOGIN'}
onPress= {() => props.navigation.navigate("NavApp",{screen:'BottomTab'})} />

<View style= {{flexDirection: 'row', paddingVertical: responsiveHeight(3)}}>
  <View style={{marginHorizontal: responsiveWidth(10), flexDirection: 'row'}}> 
    <Icon
     type={"font-awesome"}
     name={isShow ? 'square-o':'check-square'}
     size={responsiveFontSize(2.8)}
     color={appColor.grey}
     onPress={()=>{setIsShow(!isShow)}}
    />
    <Text style={styles.readme}>Read me</Text>
  </View>
  <Text style={styles.Forget}>Forget Password</Text>
</View> 
         </View>
      </View>
     </ImageBackground> 
    </SafeAreaView>
  );
};
export default LoginScreen;
