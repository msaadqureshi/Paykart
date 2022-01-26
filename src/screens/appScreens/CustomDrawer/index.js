import React, {useEffect} from 'react';
import {View, Text, Touchable, Image, TouchableOpacity} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Icon} from 'react-native-elements';
import FastImage from 'react-native-fast-image';
import {styles} from './style';
import {appImages} from '../../../assets/utility';
import {appColor, COLORS, MyStyles} from '../../../constants/colors';

const CustomDrawer = props => {
  const {navigation} = props;
  useEffect (() => {
    const unsubscribe = navigation.addListener ('tabPress', (e) => {
      navigation.openDrawer()
    });
    return unsubscribe;
  }, [navigation]);
  return (
    <DrawerContentScrollView {...props}
    style={styles.container}>
      {/* <DrawerItemList {...props} /> */}
      <View style={styles.headerview}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: responsiveWidth(5),
            margin: responsiveWidth(2),
            paddingRight: responsiveWidth(10),
            justifyContent: 'space-between',
          }}>
            <TouchableOpacity
            onPress={() => props.navigation.closeDrawer()}>
            <Icon
             type={"feather"}
             name={'x'}
             size={responsiveFontSize(3.5)}
             color={appColor.white}
             />
             </TouchableOpacity>

             <View style={{alignItems: 'center'}}>             
             <TouchableOpacity>
          <Image
            source={
              // userData.image === "" ? 
              appImages.Profile
                // : { uri: userData.image }
            }
            style={styles.profilepic}
          ></Image>
        </TouchableOpacity>
        <Text style={styles.prfilename}>Noah Jensen</Text>
        <Text style={styles.blueText}>Member since '19</Text>
             </View>
          </View>
      </View>

      <View style={styles.headerview}>
      <Text style={styles.greyText}>User</Text>
      <Text style={{...styles.whiteText, color: '#2164a8'}}>Profile</Text>
      <Text style={styles.whiteText}>Payments Methods</Text>
      <Text style={styles.whiteText}>Invite friends</Text>
      </View>
      <View style={styles.headerview}>
      <Text style={styles.greyText}>Application</Text>
      <Text style={styles.whiteText}>Transactions</Text>
      <Text style={styles.whiteText}>Notifications</Text>
      <Text style={styles.whiteText}>Prmotions</Text>
      <Text style={styles.whiteText}>Settings</Text>
      <Text style={styles.whiteText}>Klarna</Text>
      </View>
      <View style={styles.headerview}>
      <Text style={styles.greyText}>About</Text>
      <Text style={styles.whiteText}>Contact Us</Text>
      <Text style={styles.whiteText}>About and Legal</Text>
      <Text style={styles.whiteText}>Term and Conditions</Text>
      <Text style={styles.whiteText}>Support Center</Text>

      <TouchableOpacity style={styles.logoutbtn}>
        <Text style={styles.prfilename}>Logout</Text>
      </TouchableOpacity>
      </View>
    
      {/* <DrawerItem
          label="Close drawer"
          onPress={() => props.navigation.closeDrawer()}
          /> */}

    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
