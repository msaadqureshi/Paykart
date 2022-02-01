import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { Icon } from "react-native-elements";
import { styles } from "./style";
import { MyButton } from '../../../components/button';
import { cardIcons, categories } from '../../../components/Data';
import { appImages } from "../../../assets/utility";
import { SliderBox } from "react-native-image-slider-box";
import FastImage from 'react-native-fast-image'
import { appColor } from "../../../constants/colors";


const CardComponent = ({props, cardData, onPress, icon, Title}) => {
  return (
    <TouchableOpacity style={styles.CardView}
    onPress={onPress}>
      <FastImage source={icon}
        // {cardData.image} 
      style={styles.CardIcon} />
      <Text style={styles.CardTitle}>{Title}    
      {/* {cardData.title}  */}
      </Text>
    </TouchableOpacity>
  )
}

const FeaturedCard = ({props, cardData, onPress, icon, Title}) => {
    return (
      <TouchableOpacity style={styles.CardView}
      onPress={onPress}>
        <FastImage source={icon}
          // {cardData.image} 
        style={styles.CardIcon} />
        <Text style={styles.CardTitle}>{Title}    
        {/* {cardData.title}  */}
        </Text>
      </TouchableOpacity>
    )
  }



const Menu = () => {
  
  const [SliderData, setSliderData] = useState([
    appImages.Sliderimage1,
    appImages.Sliderimage2,
    appImages.Sliderimage3,
  ]);

  return (
    <View></View>
    // <SafeAreaView style={styles.container} >
      
    //     <Text style={styles.SectionTitle}> Analytics</Text>
    //     <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false} >
    //   <CardComponent
    //   icon={cardIcons[0].image}
    //   Title={cardIcons[0].title}
    //   // onPress={}
    //   />
    //   <CardComponent
    //   icon={cardIcons[1].image}
    //   Title={cardIcons[1].title}
    //   // onPress={}
    //   />
    //   <CardComponent
    //   icon={cardIcons[2].image}
    //   Title={cardIcons[2].title}
    //   onPress={() => props.navigation.navigate("Profile")}
    //   />
    //   <CardComponent
    //   icon={cardIcons[3].image}
    //   Title={cardIcons[3].title}
    //   // onPress={}
    //   />
    //   </ScrollView>
    //     {/* <FlatList
    //         showsHorizontalScrollIndicator={false}
    //         numColumns={1}            
    //         horizontal={true}
    //         data={cardIcons}
    //         renderItem={({item}) =>  
    //         <CardComponent 
    //         // cardData={item}
    //         icon={item.image}
    //         Title={item.title}
    //         />}
    //   /> */}
    //    <Text style={styles.SectionTitle}> Featured </Text>
    //     <FlatList
    //         showsHorizontalScrollIndicator={false}
    //         numColumns={1}            
    //         horizontal={true}
    //         data={cardIcons}
    //         renderItem={({item}) =>  
    //         <FeaturedCard 
    //         // cardData={item}
    //         icon={item.image}
    //         Title={item.title}
    //         />}
    //   />
    //   <View style={{height: responsiveHeight(32)}}/>
    //   <View style={styles.ImageSlider}>
    //       <SliderBox
    //         circleLoop={true}
    //         autoplay={true}
    //         sliderBoxHeight={responsiveHeight(25)}
    //         parentWidth={responsiveWidth(98)}
    //         paginationBoxVerticalPadding={-10}
    //         paginationBoxStyle={{bottom: -15}}
    //         dotColor={appColor.Primary}
    //         inactiveDotColor={appColor.grey}
    //         images={SliderData}
    //         resizeMode={"cover"}

    //         // onCurrentImagePressed={onCurrentImagePressed}
    //         // onCurrentImagePressed={() => props.navigation.navigate("ProductDetail")}
          
    //         // onCurrentImagePressed={(index) => {
    //         //   Alert.alert(
    //         //     "Add to cart? ",
    //         //     "Do you want to add " +
    //         //       dataSourcePromo[index].title +
    //         //       " into cart?",
    //         //     [
    //         //       {
    //         //         text: "Cancel",
    //         //         onPress: () => null,
    //         //         style: "cancel",
    //         //       },
    //         //       {
    //         //         text: "YES",
    //         //         onPress: async () => {
    //         //           let item = dataSourcePromo[index];
    //         //           item.qty = 1;
    //         //           cart.cartItems.push(item);
    //         //           let encript = JSON.stringify(cart.cartItems);
    //         //           await AsyncStorage.setItem("cart", encript);
    //         //           SimpleToast.show("Added in cart");
    //         //           setCartCount(cart.cartItems.length);
    //         //         },
    //         //       },
    //         //     ]
    //         //   );
    //         // }}
    //       />
    //     </View>


    // </SafeAreaView>
  )
}

export default Menu
