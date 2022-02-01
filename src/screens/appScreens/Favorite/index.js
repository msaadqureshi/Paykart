import React from 'react'
import { View, Text, TouchableOpacity, } from 'react-native'
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { Icon } from "react-native-elements";
import { styles } from "./style";
import { MyButton, MyPostButton } from '../../../components/button';
import { HeaderIcon } from '../../../components/Headers';
import { MyStyles } from '../../../constants/colors';

const Favorite = (props) => {
  return (
    <View style={styles.container}>
      <View style={MyStyles.MainHeader }>
        <Text style={styles.ListCardTitle}>Scan</Text>
     
      {/* <HeaderIcon iconName={"bell"}/> */}
     
      </View>
      {/* <MyButton Title={'Move to Plan Screen'}
      onPress= {() => props.navigation.navigate("HomeScreen" )}  />
     
      <MyButton Title={'Move to Auth'}
      onPress= {() => props.navigation.navigate("Login")}     /> */}

    </View>
  
  )
}

export default Favorite


// import React, { Fragment, useEffect, useState } from "react";
// import {
//   View,
//   TouchableOpacity,
//   Text,
//   ScrollView,
//   Image,
//   FlatList,
//   Modal,
//   SafeAreaView,
// } from "react-native";
// import {
//   responsiveFontSize,
//   responsiveHeight,
//   responsiveWidth,
// } from "react-native-responsive-dimensions";
// import { appImages } from "../../../assets/utility";
// import { styles } from "./style";
// import FastImage from "react-native-fast-image";
// import { MyButton, MyPostButton } from '../../../components/button';
// import { HeaderIcon } from '../../../components/Headers';
// import { MyStyles, appColor } from '../../../constants/colors';
// // import { Icon } from "react-native-elements/dist/icons/Icon";
// import { Icon, Tab } from "react-native-elements";
// import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
// import moment from "moment";
// import * as Animatable from 'react-native-animatable';

 
 
// const SavedProposals = (props) => {
//   return(
//     <View style={styles.container}>
   
//     <MyButton Title={'Move to Plan Screen'}
//     onPress= {() => props.navigation.navigate("HomeScreen" )}  />
   
//     <MyButton Title={'Move to Auth'}
//     onPress= {() => props.navigation.navigate("Login")}     />

  

//   </View>

// )};

// const SavedProfiles = (props) => {
//   return(
//   // <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
//   <View>   
//   <TouchableOpacity> 
//     <Text>SavedProfiles</Text>
//     </TouchableOpacity>
//   </View>
// )};
  


//   const renderScene = SceneMap({
    
//     first: SavedProposals,
//     second: SavedProfiles,
//   });

//   const renderTabBar = (props) => (
//     <TabBar
//       {...props}
     
//       indicatorStyle={{ backgroundColor: appColor.Primary }}
//       style={{ backgroundColor: appColor.white }}
//       // activeColor={appColor.Primary}
//       // inactiveColor={appColor.grey}
      
//       renderLabel={({ route, focused, color }) => (
        
//         <Text style={{ 
//           color: focused ?  appColor.Primary : appColor.grey,
//           fontWeight: focused ? "bold" : null,
//           }}>
//           {route.title}
//         </Text>
//       )}
//     />
//   );

//   const Favorite = (props) => {    
//     const [index, setIndex] = useState(0);
//     const [routes] = useState([
//       { key: 'first', title: "SAVED_PROPOSALS " },
//       { key: 'second', title: "SAVED_PROFILES " },
//     ]);  
  
//     return (
//       <>
//       <View style={MyStyles.MainHeader }>
//       <Text style={styles.ListCardTitle}>Fovorites</Text>   
//     <HeaderIcon iconName={"bell"}/>   
//       </View>
//       <TabView    
//         renderTabBar={renderTabBar}
//         navigationState={{ index, routes }}
//         renderScene={renderScene}
//         onIndexChange={setIndex}
//         // initialLayout={initialLayout}
//         style={styles.container}
//       />
      
//       </>
 
//     );
//   }
  

// export default Favorite;

