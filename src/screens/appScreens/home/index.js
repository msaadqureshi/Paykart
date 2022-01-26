import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Switch,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Icon} from 'react-native-elements';
import {SliderBox} from 'react-native-image-slider-box';
import FastImage from 'react-native-fast-image';
import {styles} from './style';
import {MyButton, MyPostButton} from '../../../components/button';
import {cardIcons, categories} from '../../../components/Data';
import {appImages} from '../../../assets/utility';
import {appColor, COLORS, MyStyles} from '../../../constants/colors';
import {Header, HeaderIcon} from '../../../components/Headers';

const Notification = props => {
  return (
    <View
      style={{
        height: responsiveHeight(4),
        width: responsiveWidth(8),
        // backgroundColor: COLORS.iconbg,
        justifyContent: 'center',
        alignItems: 'center',
        // marginBottom: responsiveHeight(3),
        borderRadius: responsiveWidth(10),
      }}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Cart');
        }}
        style={{
          height: responsiveHeight(5),
          width: responsiveWidth(14),
          justifyContent: 'center',
          alignItems: 'center',
          // backgroundColor: "#400040",
        }}
        // onPress={() => setModalVisible(false)}
      >
        <View
          style={{
            position: 'absolute',
            backgroundColor: 'red',
            zIndex: 5,
            width: 16,
            height: 16,
            borderRadius: 15 / 2,
            right: 10,
            top: 3,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: 10,
            }}>
            {0}
          </Text>
        </View>
        <Icon
          name={'bell'}
          type={'font-awesome'}
          size={responsiveFontSize(2.5)}
          color={appColor.white}
        />
        {/* <Icon name={"shopping-cart"} type={"feather"} size={responsiveFontSize(2.3)} color={"red"}/> */}
        {/* <Cart name={"shopping-cart"} size={responsiveFontSize(2.5)} color={"red"}></Cart> */}
      </TouchableOpacity>
    </View>
  );
};
const Datacomp = props => {
  const [itemData, setitemData] = useState([
    {
      id: '1',
      title: 'Rivan Supermarket',
      Price: '3,476.00',
      time: 'in 2 days ago',
      image: appImages.brandicon,
    },
    {
      id: '2',
      title: 'MidCity Departmental Store',
      Price: '3,476.00',
      time: 'in 5 days ago',
      image: appImages.brandicon2,
    },
    {
      id: '3',
      title: 'Rivan Supermarket',
      Price: '3,476.00',
      time: 'in 15 days ago',
      image: appImages.brandicon3,
    },
  ]);

  return (
    <FlatList
      data={itemData}
      numColumns={1}
      horizontal={false}
      showsHorizontalScrollIndicator={false}
      renderItem={({index, item}) => {
        return (
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: responsiveHeight(0.5),  
              borderLeftColor: appColor.Primary,
              borderLeftWidth: responsiveHeight(1),
              borderBottomColor: appColor.grey,
              borderBottomWidth: responsiveHeight(0.1),
            }}>
            <Image style={{...styles.datacompimage}} source={item.image} />
            <View style={{flex: 1}}>
              <Text style={styles.datacompTitle}>{item.title}</Text>
              <Text>{item.time}</Text>
            </View>
            <Text style={styles.datacompPrice}>{'-' + item.Price}</Text>
            <Icon
              style={{Top: -5, marginHorizontal: responsiveWidth(0.5)}}
              name={'more-vertical'}
                type={'feather'}
              size={responsiveFontSize(2)}
              color={'black'}
            />
          </View>
        );
      }}
    />
  );
};
const Home = props => {
  const [SliderData, setSliderData] = useState([
    appImages.Imageslide,
    appImages.Imageslide,
    appImages.Imageslide,
    appImages.Imageslide,
  ]);

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        style={{
          height: responsiveHeight(25),
          width: responsiveWidth(100),
          resizeMode: 'contain',
        }}
        source={appImages.Splashbg}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: responsiveWidth(2),
          }}>
          <Image source={appImages.scan} style={styles.logo} />
          <Text style={styles.HeaderText}>Overview</Text>
          <Notification />
        </View>

        <Text style={styles.nameText}>Hi Nosh,</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: responsiveWidth(2),
            alignItems: 'flex-end',
          }}>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.Totalamount}>3,350</Text>
              <Text style={{...styles.Textcroncy}}>₤</Text>
            </View>
            <Text style={styles.amountText}>TOTAL SPAND</Text>
          </View>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.otheramount}>3,350</Text>
              <Icon
                style={{Top: -5}}
                name={'info-outline'}
                type={'material'}
                size={responsiveFontSize(2)}
                color={'blue'}
              />
            </View>
            <Text style={styles.amountText}>TOTAL SPAND</Text>
          </View>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.otheramount}>3,350</Text>
              <Icon
                style={{Top: -5}}
                name={'info-outline'}
                type={'material'}
                size={responsiveFontSize(2)}
                color={'blue'}
              />
            </View>
            <Text style={styles.amountText}>TOTAL SPAND</Text>
          </View>
        </View>
        {/* <View style={styles.compnentview}>
  <Image style={{...styles.graphimage, }} source={appImages.Group}/>
      </View> */}
      </ImageBackground>

      <Image style={{...styles.graphimage}} source={appImages.Group} />

      <View style={styles.compnentview}>
        <View style={styles.compnentheadingRow}>
          <Text style={styles.compnentheadingText}>UPCOMING TRANSACTIONS</Text>
          <TouchableOpacity>
            <Text style={{...styles.compnentBlueText}}>View More</Text>
          </TouchableOpacity>
        </View>
        <Datacomp />
      </View>

      <View style={{flexDirection: 'row'}}></View>

      <View style={styles.compnentview}>
        <View style={styles.compnentheadingRow}>
          <Text style={styles.compnentheadingText}>RECENT TRANSACTIONS</Text>
          <TouchableOpacity>
            <Text style={{...styles.compnentBlueText}}>View More</Text>
          </TouchableOpacity>
        </View>
        
        <Datacomp />
      </View>

      <View style={styles.featuredview}>
        <View style={styles.compnentheadingRow}>
          <Text style={{...styles.compnentBlueText , fontWeight: '800'}}>Featured</Text>
          <TouchableOpacity>
            <Text style={{...styles.compnentBlueText,}}>View All</Text>
          </TouchableOpacity>
        </View>
        <SliderBox
            circleLoop={true}
            autoplay={true}
            sliderBoxHeight={responsiveHeight(12)}
            parentWidth={responsiveWidth(90)}
            paginationBoxVerticalPadding={-10}
            paginationBoxStyle={{bottom: -15}}
            dotColor={appColor.Primary}
            inactiveDotColor={appColor.grey}
            images={SliderData}
            resizeMode={"stretch"}
            />
      </View>
     
    </ScrollView>
  );
};

export default Home;
