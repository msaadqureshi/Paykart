/** @format */

import React from "react";
import { StatusBar } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createStackNavigator } from "@react-navigation/stack";
import { Splash, Login, Signup, Dashboard, HomeScreen, UploadDoc, Forgetpassword } from "../../screens";
import { appColor } from "../../constants/colors";

const AuthStack = createNativeStackNavigator();
const AuthApp = () => {
  return (
    <>
      <StatusBar
        backgroundColor={appColor.white}
        translucent={false}
        barStyle={"dark-content"}
      />
      <AuthStack.Navigator
        screenOptions={{ headerShown: false }}
        // initialRouteName={"Dashboard"}
      >
        {/* <AuthStack.Screen name={"App"} component={App} /> */}
        <AuthStack.Screen name={"Splash"} component={Splash} />
        <AuthStack.Screen name={"Login"} component={Login} />
        <AuthStack.Screen name={"Signup"} component={Signup} />
        <AuthStack.Screen name={"UploadDoc"} component={UploadDoc} />
        <AuthStack.Screen name={"Dashboard"} component={Dashboard} />
        <AuthStack.Screen name={"Forgetpassword"} component={Forgetpassword} />

      </AuthStack.Navigator>
    </>
  );
};

export default AuthApp;
