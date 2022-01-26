import React, { useEffect } from "react";
import { View, TouchableOpacity, Text, Image, ScrollView, Linking } from "react-native";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { appImages } from "../../../assets/utility";
import { appColor } from "../../../constants/colors";
import {MyButton, GradientButton} from "../../../components/button";
import { styles } from "./style";
import { Icon } from "react-native-elements/dist/icons/Icon";
// import auth from '@react-native-firebase/auth';
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { Settings, LoginButton, AccessToken, LoginManager, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';
// import {
//   GoogleSignin,
//   GoogleSigninButton,
//   statusCodes,
// } from '@react-native-google-signin/google-signin';
// import { saveData } from "../../Backend/utility";
// import SimpleToast from "react-native-simple-toast";
const Dashboard = (props) => {

  return (
    <ScrollView style={styles.container}>
      <Image source={appImages.Logo} style={styles.Logo} />

                     
        {/* <View style={styles.iconView}>
          <TouchableOpacity>
            <Image source={appImages.Facebook} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={appImages.google} style={styles.icon} />
          </TouchableOpacity>
        </View> */}
        
      
      <TouchableOpacity
        style={styles.LoginButton}
        onPress={() => props.navigation.navigate("STDApp",{screen:'STDHomeScreen'})}
      >
        <Text style={styles.StudentText}>Admin</Text>
      </TouchableOpacity>

      <Text style={styles.dontHaveAccountText}>--- or ---</Text>

      <TouchableOpacity
        style={[styles.LoginButton, { backgroundColor: appColor.Primary }]}
        onPress={() => props.navigation.navigate("Login")}
      >
        <Text style={styles.orText}>User</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity
        style={[styles.LoginButton, { backgroundColor: appColor.white }]}
        onPress={() => props.navigation.navigate("App",{screen:'Profile'})}
      >
        <Text style={styles.StudentText}>Direct Screen</Text>
      </TouchableOpacity> */}
      

      {/* <TouchableOpacity style={styles.forgetbtn} onPress={() => props.navigation.navigate("Forgetpassword")}>
        <Text style={styles.forgetText}>Forget password</Text>
      </TouchableOpacity> */}

      <Text style={styles.agreeText}>
        By creating an account, you are agreeing to our
      </Text>
      <View style={styles.privacyView}>
        <TouchableOpacity
        onPress={() => Linking.openURL("https://revealsmedia.com/contact.html")}>
          <Text style={styles.privacyText}>privacy_policy </Text>
        </TouchableOpacity>
        <Text> and </Text>
        <TouchableOpacity
        onPress={() => Linking.openURL("https://revealsmedia.com/contact.html")}>
          <Text style={styles.privacyText}> terms of use</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default Dashboard;
