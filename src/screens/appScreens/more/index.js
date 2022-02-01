import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, SafeAreaView, StatusBar, Linking, Share, Alert,} from 'react-native'
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import {  Icon } from "react-native-elements";
import FastImage from 'react-native-fast-image';
import { styles } from "./style";
import {Header, HeaderIcon } from '../../../components/Headers';
import { appColor, COLORS } from '../../../constants/colors';
import { appImages } from '../../../assets/utility';

const OptionsComponent =({
  onPress,
  optiontitle,
  optionicon,
  optionicontype,
  optioniconsize,
  Forwordicon,
  Forwordicontype,
  }) => {
  return (
      <TouchableOpacity
        style={[styles.btnstyle]}
        activeOpacity={0.7}
        onPress={onPress}
      >
        <View style={styles.iconRow}>
          <Icon 
          name={optionicon ? optionicon : null} 
          type={optionicontype ? optionicontype : null} 
          size={optioniconsize ? optioniconsize : responsiveFontSize(3) }
          color={appColor.Primary} />
          <Text style={styles.txtstyle}>
              {optiontitle= optiontitle ? optiontitle : "optionName"}
          </Text>
        </View>
        <Icon 
          name={Forwordicon ? Forwordicon : "chevron-small-right"} 
          type={Forwordicontype ? Forwordicontype : "entypo"}
          size={responsiveFontSize(3)}
          color={appColor.Primary}
        />
      </TouchableOpacity>
  )
};

const More = (props) => {
  
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    image: "",
    // phone: "",
  });
  
  const [isLogin, setIsLogin] = useState(false);
  
  const onShare = async () => {
    try {
      const result = await Share.share({
        title: "Home ors Club ",
        message: 
          "Home ors Club | The best way to find your or or  student. \n https://revealsmedia.com/ "
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (  
    <SafeAreaView style= {styles.container}>
      <StatusBar
        backgroundColor={appColor.Primary}
        translucent={false}
        barStyle={"dark-content"}
      />
       {/* <Header onPress={() => props.navigation.goBack()}/>
      <View style={styles.headerView}>
       <View style={styles.ProfileTitleView}> 
         <Text style={{fontSize: responsiveFontSize(3), color: appColor.white}}>Welcome</Text>
         <Text style={styles.userName}>User Name</Text>
       </View>
       <View>
       <FastImage source={ userData.image === "" ? appImages.userlogo : { uri: userData.image } } 
          style={styles.profilepic}/>
         <TouchableOpacity style={styles.editIcon}         
         onPress={() => props.navigation.navigate("Profile")}>
         <Icon  
          name= { "pencil-alt"} 
          type={ "font-awesome-5"} 
          size={responsiveFontSize(1.8)}
          color={appColor.black}
        />
         </TouchableOpacity>              
       </View>
      </View>
      
      <View style={styles.wrapper}>
      <Text style={styles.OptionsComponentTitle}>Options Title</Text>
        <OptionsComponent
              optionicon={"shopping-outline"}
              optionicontype={"material-community"}
              optiontitle={"Portfolio"}
              onPress={() => props.navigation.navigate("HomeScreen")}
              />
        <OptionsComponent
              optionicon={"shopping-outline"}
              optionicontype={"material-community"}
              optiontitle={"History"}
              onPress={() => props.navigation.navigate("HomeScreen")}
              />
      <Text style={styles.OptionsComponentTitle}>Other</Text>
        <OptionsComponent
              optionicon={"info-outline"}
              optionicontype={"MaterialIcons"}
              optiontitle={"About us"}
              // onPress={() => props.navigation.navigate("About")}
              onPress={() => Linking.openURL("https://revealsmedia.com/contact.html")}/>

        <OptionsComponent
              optionicon={"star-outline"}
              optionicontype={"MaterialIcons"}
              optiontitle={"Rate us"}
              // onPress={() => props.navigation.navigate("About")}
              onPress={() => Linking.openURL("https://revealsmedia.com/")}/>

        <OptionsComponent
              optionicon={"share"}
              optionicontype={"MaterialIcons"}
              optiontitle={"share with friend"}
              // onPress={() => props.navigation.navigate("About")}
              onPress={onShare}
              />
              
        <OptionsComponent
              optionicon={"shield"}
              optionicontype={"foundation"}
              optiontitle={"Terms & conditions "}              
              // onPress={() => props.navigation.navigate("About")}
              onPress={() => Linking.openURL("https://revealsmedia.com/contact.html")}
              />
      
          <OptionsComponent
              // style={[styles.btnstyle, { marginBottom: responsiveHeight(3) }]}
              optionicon={!isLogin ? "login" : "logout"}
              optionicontype={"MaterialIcons"}
              optiontitle={!isLogin ? "Login" : "Logout"}
              // activeOpacity={0.7}
              // onPress={async() => {
              //   if(isLogin){
              //     await AsyncStorage.removeItem("Token");
              //     await AsyncStorage.removeItem("cart");
              //     props.navigation.navigate("Auth", { screen: "Main" })
              //     setIsLogin(false);
              //   }
              //   else{
              //     props.navigation.navigate("Auth", { screen: "Dashboard" })
              //   }
              //   } }
            /> 

      </View>*/}
      
    </SafeAreaView>
  )
}



export default More
