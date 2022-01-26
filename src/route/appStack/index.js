/** @format */

import React, { useEffect } from 'react';
import {Text, Image, View} from 'react-native';
import {
  Home,
  More,
  Menu,
  Profile,
  ProfilePreview,
  proposalDetail,
  SendProposal,
  Favorite,
  CustomDrawer,
  HomeScreen,
} from '../../screens';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

import {Icon} from 'react-native-elements';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import {appColor, COLORS} from '../../constants/colors';
import {appImages} from '../../assets/utility';
import { TouchableOpacity } from 'react-native-gesture-handler';

const tabBarHeight = responsiveHeight(6);

const HomeStack = createNativeStackNavigator();
const MenuStack = createNativeStackNavigator(); //Notification
const MoreStack = createNativeStackNavigator(); //Member
const ContactStack = createNativeStackNavigator();

const MainTab = createBottomTabNavigator();
const DrawerTab = createDrawerNavigator();

const MainApp = createNativeStackNavigator();

// console.disableYellowBox;
const HomeStackScreens = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{headerShown: false, animationEnabled: false}}
      initialRouteName={'Home'}>
      <HomeStack.Screen name={'Home'} component={Home} />
    </HomeStack.Navigator>
  );
};
const MenuStackScreens = () => {
  return (
    <MenuStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'Menu'}>
      <MenuStack.Screen name={'Menu'} component={Menu} />
    </MenuStack.Navigator>
  );
};
const ContactStackScreens = () => {
  return (
    <ContactStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'Favorite'}>
      <MenuStack.Screen name={'Favorite'} component={Favorite} />
    </ContactStack.Navigator>
  );
};

const MoreStackScreen = () => {
  return (
    <MoreStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'More'}>
      <MoreStack.Screen name={'More'} component={More} />
    </MoreStack.Navigator>
  );
};
// const MoreStackScreen = () => {
//   return (
//     <MoreStack.Navigator
//       screenOptions={{ headerShown: false }}
//       initialRouteName={"More"}
//     >
//       <MoreStack.Screen
//       name={"More"}
//       component={More}
//       listeners={({ navigation }) => ({
//         tabPress: e => {
//           e.preventDefault();
//           navigation.openDrawer();
//         }
//       })} />
//     </MoreStack.Navigator>
//   );
// };

const BottomTabScreens = (props) => {
  return (
    <MainTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        allowFontScaling: true,
        tabBarActiveTintColor: appColor.black,
        tabBarInactiveTintColor: appColor.grey,
        tabBarStyle: {
          backgroundColor: appColor.white,
          // marginTop : responsiveHeight(2),
          // elevation: 2,
          // borderTopLeftRadius: 15,
          // borderTopRightRadius: 15,
          height: tabBarHeight,
        },
      }}
      initialRouteName={'home'}>
      <MainTab.Screen
        name={'home'}
        component={HomeStackScreens}
        options={() => ({
          tabBarIcon: ({focused, color, size}) => {
            return (
              <View
                style={{
                  alignItems: 'center',
                  // width: responsiveWidth(20),
                  //  backgroundColor: "#fff",
                }}>
                <Icon
                  name="retweet"
                  type="antdesign"
                  size={responsiveFontSize(2.8)}
                  color={focused ? appColor.Primary : appColor.grey}
                />

                <Text
                  style={{
                    fontSize: responsiveFontSize(1.5),
                    fontWeight: '500',
                    color: focused ? appColor.Primary : appColor.grey,
                    alignSelf: 'center',
                  }}>
                  Overview
                </Text>
              </View>
            );
          },
        })}
      />
      <MainTab.Screen
        name={'menu'}
        component={MenuStackScreens}
        options={props => ({
          tabBarIcon: ({focused, color, size}) => {
            return (
              <View style={{alignItems: 'center'}}>
                <Icon
                  // name= "megaphone-outline"
                  // type= "ionicon"
                  name="search"
                  type="ionicon"
                  size={responsiveFontSize(2.8)}
                  color={focused ? appColor.Primary : appColor.grey}
                />
                <Text
                  style={{
                    fontSize: responsiveFontSize(1.5),
                    fontWeight: '500',
                    color: focused ? appColor.Primary : appColor.grey,
                    alignSelf: 'center',
                  }}>
                  Explore
                </Text>
              </View>
            );
          },
        })}
      />
      <MainTab.Screen
        name={'favourite'}
        component={ContactStackScreens}
        options={props => ({
          tabBarIcon: ({focused, color, size}) => {
            return (
              <View style={{alignItems: 'center'}}>
                <Icon
                  name="scan-helper"
                  type="material-community"
                  size={responsiveFontSize(2.8)}
                  color={focused ? appColor.Primary : appColor.grey}
                />
                <Text
                  style={{
                    fontSize: responsiveFontSize(1.5),
                    fontWeight: '500',
                    color: focused ? appColor.Primary : appColor.grey,
                    alignSelf: 'center',
                  }}>
                  Scan
                </Text>
              </View>
            );
          },
        })}
      />
      <MainTab.Screen
        name={'more'}
        component={MoreStackScreen}
        // listeners={({ navigation }) => ({
        //     tabPress: e => {
        //       e.preventDefault();
        //       navigation.openDrawer();
        //     }
        //   })}
        options={props => ({
          tabBarIcon: ({focused, color, size}) => {
            return (
              // <View
              //   style={{
              //     alignItems: "center",
              //     height: tabBarHeight,
              //     width: responsiveWidth(17),
              //     justifyContent: "center",
              //   }}
              // >
              //    <Image source = {appImages.more}
              //   style={{ height:responsiveHeight(2.7),width:responsiveWidth(6) ,
              //     tintColor: focused ? COLORS.primary : COLORS.black }}
              //   ></Image>

              <View style={{alignItems: 'center'}}>
                <Icon
                  name="wallet-outline"
                  type="ionicon"
                  size={responsiveFontSize(2.8)}
                  color={focused ? appColor.Primary : appColor.grey}
                />

                <Text
                  style={{
                    fontSize: responsiveFontSize(1.5),
                    fontWeight: '500',
                    color: focused ? appColor.Primary : appColor.grey,
                    alignSelf: 'center',
                    // marginRight: responsiveWidth(0.5),
                    // marginTop:responsiveHeight(-1),
                  }}>
                  Waylet
                </Text>
              </View>
            );
          },
        })}
      />

      <MainTab.Screen
        name={'CustomDrawer'}
        component={Drawer}
        // listeners={({ navigation }) => ({
        //       tabPress: e => {
        //         e.preventDefault();
        //         navigation.openDrawer();
        //       }
        //     })}
        // listeners={{
        //   tabPress: (e) => {
        //     e.preventDefault();
        //   },
        // }}
        options={props => ({
          tabBarIcon: ({focused, color, size}) => {
            return (
              // <View
              //   style={{
              //     alignItems: "center",
              //     height: tabBarHeight,
              //     width: responsiveWidth(17),
              //     justifyContent: "center",
              //   }}
              // >
              //    <Image source = {appImages.more}
              //   style={{ height:responsiveHeight(2.7),width:responsiveWidth(6) ,
              //     tintColor: focused ? COLORS.primary : COLORS.black }}
              //   ></Image>

              <View 
              // onPress={() => props.navigation.openDrawer()}
              style={{alignItems: 'center'}}>
                <Icon
                  name="reorder-four-outline"
                  type="ionicon"
                  size={responsiveFontSize(2.8)}
                  color={focused ? appColor.Primary : appColor.grey}
                />

                <Text
                  style={{
                    fontSize: responsiveFontSize(1.5),
                    fontWeight: '500',
                    color: focused ? appColor.Primary : appColor.grey,
                    alignSelf: 'center',
                    // marginRight: responsiveWidth(0.5),
                    // marginTop:responsiveHeight(-1),
                  }}>
                  More
                </Text>
              </View>
            );
          },
        })}
      />
    </MainTab.Navigator>
  );
};

const Drawer = (props) => {
  // useEffect (() => {
  //   const unsubscribe = navigator.addListener ('tabPress', (e) => {
  //     navigation.openDrawer()
  //   });
  //   return unsubscribe;
  // }, [navigation]);
  return (
    <DrawerTab.Navigator
      screenOptions={{
        headerShown: false,
        drawerPosition: "right",
      }}
      drawerContent={props => <CustomDrawer {...props} />}
      >
       <DrawerTab.Screen name={'CustomDrawer'}  component={CustomDrawer} />
      {/* <DrawerTab.Screen name={'home'}  component={HomeStackScreens} />
      <DrawerTab.Screen name={'menu'}  component={MenuStackScreens} />
      <DrawerTab.Screen name={'favourite'}  component={ContactStackScreens} />
      <DrawerTab.Screen name={'more'}  component={MoreStackScreen} /> */}
    </DrawerTab.Navigator>
  );
};

const NavApp = () => {
  
  return (
    <MainApp.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'MainTab'}>
      {/* <MainApp.Screen name={"Drawer"}  component={Drawer}  
   listeners={({ navigation }) => ({
    tabPress: e => {
      e.preventDefault();
      navigation.openDrawer();
    }
  })} 
  /> */}

      <MainApp.Screen name={'MainTab'} component={BottomTabScreens} />
      <MainApp.Screen name={'HomeScreen'} component={HomeScreen} />
      <MainApp.Screen name={'Profile'} component={Profile} />
      <MainApp.Screen name={'ProfilePreview'} component={ProfilePreview} />
      <MainApp.Screen name={'proposalDetail'} component={proposalDetail} />
      <MainApp.Screen name={'SendProposal'} component={SendProposal} />
    </MainApp.Navigator>
  );
};

export default NavApp;
