import React, {useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import {styles} from './style';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {appImages} from '../../../assets/utility';
import {appColor, MyStyles} from '../../../constants/colors';
import {MyTextInput, MyPhoneInput} from '../../../components/TextInput';
import {MyButton, GradientButton} from '../../../components/button';
import {Icon} from 'react-native-elements/dist/icons/Icon';
import ImageResizer from 'react-native-image-resizer';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { signUp } from "../../Backend/auth";

// import storage from "@react-native-firebase/storage";
// import { signUp } from "../../Backend/auth";
// import { uploadImage } from "../../Backend/utility";
// import { Settings, LoginButton, AccessToken, LoginManager, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';
// import {
//   GoogleSignin,
//   GoogleSigninButton,
//   statusCodes,
// } from '@react-native-google-signin/google-signin';
// import { saveData } from "../../Backend/utility";
// import SimpleToast from "react-native-simple-toast";

const Signup = props => {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  // const [ReEmail, setReEmail] = useState("");
  const [Number, setNumber] = useState('');
  const [Cnic, setCnic] = useState('');
  const [BOB, setDOB] = useState('');
  const [Password, setPassword] = useState('');
  const [RePassword, setRePassword] = useState('');
  const [NewImage, setNewImage] = useState('');
  const [UploadImage, setUploadImage] = useState('');
  const [ImageResponse, setImageResponse] = useState(null);
  const [ModalVisble, setModalVisble] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const [isShow, setIsShow] = useState(true);

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [cnicError, setCnicError] = useState('');
  const [DOBError, setDOBError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [repasswordError, setRePasswordError] = useState('');

  //Signup validation
  const handleOnChangenameText = name => {
    const re = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
    !name
      ? setEmailError('')
      : !re.test(name)
      ? setNameError('')
      : name.length < 2
      ? setNameError('Min 2 characters')
      : setNameError('');
    setName(name);
  };
  const handleOnChangeLoginEmailText = LoginEmail => {
    const re =
      /^\s*(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))\s*$/;
    !LoginEmail
      ? setEmailError('')
      : !re.test(LoginEmail)
      ? setEmailError('Email format is invalid')
      : setEmailError('');
    setEmail(LoginEmail);
  };
  const handleOnChangeLoginPasswordText = password => {
    !password
      ? setPasswordError('')
      : password.length < 8
      ? setPasswordError('Min 8 characters')
      : setPasswordError('');
    setPassword(password);
  };
  const handleOnChangeLoginRePasswordText = repassword => {
      !repassword 
      ? setPasswordError('')
      : repassword != Password
      ? setRePasswordError('confirm password not match')
      : setRePasswordError('')
    setRePassword(repassword);
  };
  
  
  const handleOnChangePhoneText = phone => {
    console.log(phone.length);
    !phone
      ? setPhoneError('')
      : phone.length < 11 || phone.length > 11
      ? setPhoneError('Phone Number must 11 digit')
      : setPhoneError('');
    setNumber(phone);
  };
  const handleOnChangeDOBText = DOB => {
    !DOB
      ? setDOBError('Select Date of Birth')
      : setDOBError('');
    setDOB(DOB);
  }
  const handleOnChangeCnicText = cnic => {
    console.log(cnic.length);
    !cnic
      ? setCnicError('')
      : cnic.length < 13 || cnic.length > 13
      ? setCnicError('CNIC Number must 13 digit')
      : setCnicError('');
    setCnic(cnic);
  };
  const Loginvalidations = () => {
    const re =
      /^\s*(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))\s*$/;

    let valid = true;
    if (Name == '') {
      setNameError('Enter your name');
      valid = false;
    }
    if (Name.length < 2) {
      setNameError('Min 2 characters');
      valid = false;
    }
    if (Email === '') {
      setEmailError('Please Enter Email');
      valid = false;
    }
    if (!re.test(Email)) {
      setEmailError('Email format is invalid');
      valid = false;
    }
    if (Password === '') {
      setPasswordError('Enter your Password');
      valid = false;
    }
    if (Password.length < 8) {
      setPasswordError('Min 8 characters');
      valid = false;
    }
    if (RePassword === !Password) {
      setRePasswordError('confirm password not match');
      valid = false;
    }

    if (Number === '') {
      setPhoneError('Enter phone number');
      valid = false;
    }
    if (Number.length < 11 || Number.length > 11) {
      setPhoneError('Phone Number must 11 digit');
      valid = false;
    }
    if (DOB === '') {
      setDOBError('Select Date of Birth');
      valid = false;
    }
    if (Cnic === '') {
      setCnicError('Enter CNIC');
      valid = false;
    }
    if (Cnic.length < 13 || Cnic.length > 13) {
      setCnicError('CNIC Number must 13 digit');
      valid = false;
    }

    return valid;
  };

  const Camera = () => {
    var options = {
      title: 'Profile Picture',

      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
      mediaType: 'image',
    };

    launchCamera(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else {
        setNewImage(response.assets[0].uri);
        setImageResponse(response.assets[0]);
        // ImageUpload(response);
      }
    });
  };
  const Gallery = () => {
    var options = {
      title: 'Profile Photo',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        //setFilePath(response);
        console.log('>>>>>>>>>>>>', response.assets);
        setNewImage(response.assets[0].uri);
        // ImageUpload(response.assets[0]);
        setImageResponse(response.assets[0]);
      }
    });
  };



  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.form}>
          <TouchableOpacity onPress={() => setModalVisble(!ModalVisble)}>
            <Image
              source={NewImage === '' ? appImages.userlogo : {uri: NewImage}}
              style={styles.imageContainer}
            />
          </TouchableOpacity>
          <Text style={styles.CreateTextText}>Create Your Account</Text>
          <MyTextInput
            placeholder={'Enter your name'}
            customstyles={styles.emailINPUT}
            // placeholderTextColor={"black"}
            onchange={text => handleOnChangenameText(text)}
          />
          {nameError ? (
            <Text style={styles.inputError}>{nameError}</Text>
          ) : null}

          {/* <MyTextInput
            placeholder={"Phone"}
            customstyles={styles.emailINPUT}
            // placeholderTextColor={"black"}
            onchange={(text) => setEmail(text)}
          />   */}
          <MyPhoneInput
            placeholder={'Phone'}
            customstyles={styles.emailINPUT}
            onchange={text => handleOnChangePhoneText(text)}
          />
          {phoneError ? (
            <Text style={styles.inputError}>{phoneError}</Text>
          ) : null}
          <MyTextInput
            placeholder={'Enter Date of Birth'}
            customstyles={styles.emailINPUT}
            // placeholderTextColor={"black"}
            // onchange={text => setEmail(text)}
          />
          <MyTextInput
            placeholder={'Enter DOB'}
            customstyles={styles.emailINPUT}
            // placeholderTextColor={"black"}
            onchange={text => handleOnChangeDOBText(text)}
          />          
          <MyTextInput
            type={'email-address'}
            placeholder={'Enter Email'}
            customstyles={styles.emailINPUT}
            // placeholderTextColor={"black"}
            onchange={text => handleOnChangeLoginEmailText(text)}
          />
          {emailError ? (
            <Text style={styles.inputError}>{emailError}</Text>
          ) : null}
          <MyTextInput
            customstyles={styles.emailINPUT}
            placeholder={'Enter password'}
            // placeholderTextColor={"black"}
            onchange={text => handleOnChangeLoginPasswordText(text)}
            showIcon={true}
            // IconName={isShow ? "eye-off-sharp" : "eye"}
            onPress={() => setIsShow(!isShow)}
            issecure={isShow}
          />
          {passwordError ? (
            <Text style={styles.inputError}>{passwordError}</Text>
          ) : null}
          <MyTextInput
            customstyles={styles.emailINPUT}
            placeholder={'Re-enter password'}
            // placeholderTextColor={"black"}
            onchange={text => handleOnChangeLoginRePasswordText(text)}
            showIcon={true}
            // IconName={isShow ? "eye-off-sharp" : "eye"}
            onPress={() => setIsShow(!isShow)}
            issecure={isShow}
          />
          {repasswordError ? (
            <Text style={styles.inputError}>{repasswordError}</Text>
          ) : null}
          
          <MyButton
            Title={'Next'}
            activity={isLoading}
            onPress={() => props.navigation.navigate('UploadDoc')}
            // onPress={async () => {
            //   if (!isLoading) {
            //     setIsloading(!isLoading);
            //     if (ImageResponse !== null) {
            //       await ImageUpload(ImageResponse);
            //     } else {
            //       await signUp(Email, Password, Name, UploadImage).then(
            //         (Success) => {
            //           console.log("Check 1",Success);
            //           if (Success == true) {
            //             setIsloading(false);
            //             props.navigation.navigate("Login")
            //           } else {
            //             setIsloading(false);
            //           }
            //         }
            //       );
            //     }
            //   }

            //   // props.navigation.navigate("App")
            // }}
          />
          {/*                 
          <View style={styles.iconView}>
            <TouchableOpacity
            onPress={()=> {faceBookLogin()}}
             style={styles.fbView}>
              //  <Image source={appImages.Facebook} style={styles.icon} /> 
              <Icon
                type={"font-awesome"}
                name={"facebook"}
                color={"darkblue"}
                size={responsiveFontSize(4.2)}
              />
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={()=> {signIn()}}
            style={styles.googleView}>
              <Image source={appImages.google} style={styles.icon} />
            </TouchableOpacity>
          </View> */}
        </View>
      </ScrollView>
      <Modal
        animationType="fade"
        transparent={true}
        visible={ModalVisble}
        onRequestClose={() => {
          setModalVisble(!ModalVisble);
        }}>
        <TouchableOpacity
          style={styles.modalContainer}
          activeOpacity={1}
          onPress={() => setModalVisble(false)}>
          <TouchableWithoutFeedback>
            <View style={styles.ModalView}>
              <TouchableOpacity
                onPress={() => {
                  Camera(), setModalVisble(false);
                }}
                style={styles.ModalTouchable}>
                <Icon
                  type={'feather'}
                  name="camera"
                  color="black"
                  size={responsiveFontSize(5)}
                />
                <Text style={styles.ModalText}>Camera</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  Gallery(), setModalVisble(false);
                }}
                style={styles.ModalTouchable}>
                <Icon
                  type={'feather'}
                  name="image"
                  color="black"
                  size={responsiveFontSize(5)}
                />
                <Text style={styles.ModalText}>Gallery</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};
export default Signup;
