import React, { Fragment, useEffect, useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  Image,
  FlatList,
  Modal,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FastImage from "react-native-fast-image";
import { SliderBox } from "react-native-image-slider-box";
import { appColor, cart, COLORS } from "../constants/colors";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Icon } from "react-native-elements";
import { styles } from "./style";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

import Cart from "react-native-vector-icons/FontAwesome";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { totalSize } from "react-native-dimension";

export const showCart = (
  modalVisible,
  setModalVisible,
  currentItem,
  flag,
  setFlag,
  Total,
  setCartTotal,
  cartOption,
  setCartOption,
  fetchDataOptions
) => {
  // const [AddedOptionList, setAddedOptionList] = useState([]);

  // const AddInOptionList = (obj)=>{
  //   AddedOptionList.push(obj);
  //   setAddedOptionList([...AddedOptionList]);
  // }

  // const RemoveOptionList = (obj) =>{
  //    AddedOptionList = array.filter((element) => {
  //     return element.Id !== obj.Id;
  //   });
  //   setAddedOptionList([...AddedOptionList]);
  // }
  // console.log("cartOption: ", cartOption.Shakes[0]);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={true}
      onRequestClose={() => {
        fetchDataOptions();
        setModalVisible(!modalVisible);
      }}
    >
      <TouchableOpacity
        activeOpacity={1}
        style={styles.centeredView}
        onPress={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalView}>
          <TouchableOpacity
            style={styles.crossbutton} 
            onPress={(event) => { if (event.target == event.currentTarget) { 
              setModalVisible(false);
              fetchDataOptions();
             } }} 
            // onPress={() => {
            //   fetchDataOptions();
            //   setModalVisible(false);
            // }}
          >
            <Icon
              type={"feather"}
              name={"x"}
              color={"white"}
              size={responsiveFontSize(2.5)}
            />
          </TouchableOpacity>
          <Text style={styles.modalText}>{currentItem.title}</Text>
          <View style={styles.sizeView}>
            {currentItem.Size.length > 0 && (
              <>
                {currentItem.Size.map((item2, index) => {
                  return (
                    <TouchableOpacity
                      style={{
                        borderWidth:
                          flag == index ? responsiveWidth(0.5) : null,
                        paddingHorizontal: responsiveWidth(1),
                        borderColor: appColor.Textred,
                      }}
                      onPress={() => {
                        setFlag(index);
                        setCartTotal(item2.price);
                        // if (index == 0) {
                        //   setFlag1(false);
                        //   setFlag(true);
                        //   setFlag2(false);
                        // }else if (index == 0) {
                        //   setFlag1(true);
                        //   setFlag(false);
                        //   setFlag2(false);
                        // }else{
                        //   setFlag1(false);
                        //   setFlag(false);
                        //   setFlag2(true);
                        // }
                      }}
                    >
                      <Text style={{ color: appColor.Textred }}>
                        {item2.name}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </>
            )}
          </View>

          {/* <View style={styles.priceContainer}>
            <Text style={styles.btntxt}>
              Rs{" "}
              {currentItem.Size.length > 0
                ? currentItem.Size[flag].price
                : currentItem.Price}
            </Text>
          </View> */}

          <ScrollView>
            <>
              {currentItem.Options.Dips == true ? (
                <>
                  <View>
                    <Text style={styles.listHeadertxt}>Dips</Text>
                  </View>
                  <View>
                    <FlatList
                      data={cartOption.Dips}
                      horizontal={true}
                      renderItem={({ index, item }) => {
                        return (
                          <View>
                            <TouchableOpacity
                              // onPress={() => {
                              //   props.navigation.navigate("ItemDetails", {
                              //     item: item,
                              //   });
                              // }}
                              style={styles.CardView}
                            >
                              <Image
                                style={styles.FlatListImages}
                                source={{ uri: item.image }}
                                resizeMode={FastImage.resizeMode.contain}
                              />
                              <View style={styles.descriptionView}>
                                <Text style={styles.TitleText}>
                                  {item.title}
                                </Text>
                                {/* <Text numberOfLines={5} style={styles.descriptionTxt}>
                          {item.description}
                        </Text> */}
                              </View>
                              <View>
                                {/* Favorite btn here */}
                                <View
                                  style={{
                                    alignItems: "flex-end",
                                    marginRight: responsiveWidth(3),
                                  }}
                                >
                                  <Icon
                                    onPress={() => {
                                      console.log("Click");
                                      // addToFav(item.id, index);
                                      if (!item.isCheck) {
                                        setCartTotal(Total + item.Price);
                                        // AddInOptionList(item);
                                        if(currentItem.optionList == undefined){
                                          currentItem.optionList=[item];
                                        }else{
                                          currentItem.optionList.push(item);
                                        }
                                        
                                      } else {
                                        setCartTotal(Total - item.Price);
                                        currentItem.optionList = currentItem.optionList.filter(
                                          (element) => {
                                            return element.Id !== item.Id;
                                          }
                                        );
                                        // RemoveOptionList(item);
                                      }
                                      item.isCheck = !item.isCheck;
                                      cartOption.Dips[index] = item;

                                      setCartOption({ ...cartOption });
                                      // setCartTotal(Total + item.Price);
                                    }}
                                    name={
                                      item.isCheck == true
                                        ? "check-square"
                                        : "square"
                                    }
                                    type={"feather"}
                                    size={15}
                                    color={appColor.lgSecondary}
                                  />
                                </View>

                                {/* <View style={styles.PriceView}> */}
                                <Text
                                  style={{
                                    fontSize: responsiveFontSize(1.6),
                                    color: appColor.black,
                                    fontWeight: "500",
                                    marginVertical: responsiveHeight(0.6),
                                    marginHorizontal: responsiveWidth(0.5),
                                  }}
                                >
                                  Rs +{item.Price}
                                </Text>
                                {/* </View> */}
                                {/* <TouchableOpacity
                          style={styles.OrderNowView}
                          onPress={() => {
                            setCurrentItem(item);
                            setCartTotal(item.Price);
                            setModalVisible(!modalVisible);
                          }}
                        >
                          <Text style={styles.OrderText}>Add to cart</Text>
                        </TouchableOpacity> */}
                              </View>
                            </TouchableOpacity>
                          </View>
                        );
                      }}
                    />
                  </View>
                </>
              ) : null}
            </>
            <>
              {currentItem.Options.SidesSnack == true ? (
                <>
                  <View>
                    <Text style={styles.listHeadertxt}>Sides Snack</Text>
                  </View>
                  <View>
                    <FlatList
                      data={cartOption.Snakes}
                      horizontal={true}
                      renderItem={({ index, item }) => {
                        return (
                          <View>
                            <TouchableOpacity
                              // onPress={() => {
                              //   props.navigation.navigate("ItemDetails", {
                              //     item: item,
                              //   });
                              // }}
                              style={styles.CardView}
                            >
                              <Image
                                style={styles.FlatListImages}
                                source={{ uri: item.image }}
                                resizeMode={FastImage.resizeMode.contain}
                              />
                              <View style={styles.descriptionView}>
                                <Text style={styles.TitleText}>
                                  {item.title}
                                </Text>
                                {/* <Text numberOfLines={5} style={styles.descriptionTxt}>
                          {item.description}
                        </Text> */}
                              </View>
                              <View>
                                {/* Favorite btn here */}
                                <View
                                  style={{
                                    alignItems: "flex-end",
                                    marginRight: responsiveWidth(3),
                                  }}
                                >
                                  <Icon
                                    onPress={() => {
                                      console.log("Click");
                                      // addToFav(item.id, index);
                                      if (!item.isCheck) {
                                        setCartTotal(Total + item.Price);
                                        // AddInOptionList(item);
                                        if(currentItem.optionList == undefined){
                                          currentItem.optionList=[item];
                                        }else{
                                          currentItem.optionList.push(item);
                                        }
                                        
                                      } else {
                                        setCartTotal(Total - item.Price);
                                        currentItem.optionList = currentItem.optionList.filter(
                                          (element) => {
                                            return element.Id !== item.Id;
                                          }
                                        );
                                        // RemoveOptionList(item);
                                      }
                                      item.isCheck = !item.isCheck;
                                      cartOption.Snakes[index] = item;
                                      setCartOption({ ...cartOption });
                                      // setCartTotal(Total + item.Price);
                                    }}
                                    name={
                                      item.isCheck == true
                                        ? "check-square"
                                        : "square"
                                    }
                                    type={"feather"}
                                    size={15}
                                    color={appColor.lgSecondary}
                                  />
                                </View>

                                {/* <View style={styles.PriceView}> */}
                                <Text
                                  style={{
                                    fontSize: responsiveFontSize(1.6),
                                    color: appColor.black,
                                    fontWeight: "500",
                                    marginVertical: responsiveHeight(0.6),
                                    marginHorizontal: responsiveWidth(0.5),
                                  }}
                                >
                                  Rs +{item.Price}
                                </Text>
                                {/* </View> */}
                                {/* <TouchableOpacity
                          style={styles.OrderNowView}
                          onPress={() => {
                            setCurrentItem(item);
                            setCartTotal(item.Price);
                            setModalVisible(!modalVisible);
                          }}
                        >
                          <Text style={styles.OrderText}>Add to cart</Text>
                        </TouchableOpacity> */}
                              </View>
                            </TouchableOpacity>
                          </View>
                        );
                      }}
                    />
                  </View>
                </>
              ) : null}
            </>

            <>
              {currentItem.Options.SoftDrinks == true ? (
                <>
                  <View>
                    <Text style={styles.listHeadertxt}>Beverage</Text>
                  </View>
                  <View>
                    <FlatList
                      data={cartOption.SoftDrinks}
                      horizontal={true}
                      renderItem={({ index, item }) => {
                        return (
                          <View>
                            <TouchableOpacity
                              // onPress={() => {
                              //   props.navigation.navigate("ItemDetails", {
                              //     item: item,
                              //   });
                              // }}
                              style={styles.CardView}
                            >
                              <Image
                                style={styles.FlatListImages}
                                source={{ uri: item.image }}
                                resizeMode={FastImage.resizeMode.contain}
                              />
                              <View style={styles.descriptionView}>
                                <Text style={styles.TitleText}>
                                  {item.title}
                                </Text>
                                {/* <Text numberOfLines={5} style={styles.descriptionTxt}>
                          {item.description}
                        </Text> */}
                              </View>
                              <View>
                                {/* Favorite btn here */}
                                <View
                                  style={{
                                    alignItems: "flex-end",
                                    marginRight: responsiveWidth(3),
                                  }}
                                >
                                  <Icon
                                    onPress={() => {
                                      console.log("Click");
                                      // addToFav(item.id, index);
                                      if (!item.isCheck) {
                                        setCartTotal(Total + item.Price);
                                        // AddInOptionList(item);
                                        if(currentItem.optionList == undefined){
                                          currentItem.optionList=[item];
                                        }else{
                                          currentItem.optionList.push(item);
                                        }
                                        
                                      } else {
                                        setCartTotal(Total - item.Price);
                                        currentItem.optionList = currentItem.optionList.filter(
                                          (element) => {
                                            return element.Id !== item.Id;
                                          }
                                        );
                                        // RemoveOptionList(item);
                                      }

                                      item.isCheck = !item.isCheck;
                                      cartOption.SoftDrinks[index] = item;
                                      setCartOption({ ...cartOption });
                                    }}
                                    name={
                                      item.isCheck == true
                                        ? "check-square"
                                        : "square"
                                    }
                                    type={"feather"}
                                    size={15}
                                    color={appColor.lgSecondary}
                                  />
                                </View>

                                {/* <View style={styles.PriceView}> */}
                                <Text
                                  style={{
                                    fontSize: responsiveFontSize(1.6),
                                    color: appColor.black,
                                    fontWeight: "500",
                                    marginVertical: responsiveHeight(0.6),
                                    marginHorizontal: responsiveWidth(0.5),
                                  }}
                                >
                                  Rs +{item.Price}
                                </Text>
                                {/* </View> */}
                                {/* <TouchableOpacity
                          style={styles.OrderNowView}
                          onPress={() => {
                            setCurrentItem(item);
                            setCartTotal(item.Price);
                            setModalVisible(!modalVisible);
                          }}
                        >
                          <Text style={styles.OrderText}>Add to cart</Text>
                        </TouchableOpacity> */}
                              </View>
                            </TouchableOpacity>
                          </View>
                        );
                      }}
                    />
                  </View>
                </>
              ) : null}
            </>
          </ScrollView>
          <View>
            <Text style={styles.subtxt}>Subtotal= Rs. {Total}</Text>
          </View>
          <TouchableOpacity
            style={styles.modalbtn}
            onPress={async () => {
              fetchDataOptions();

              currentItem.qty = 1;
              currentItem.Price = Total;
              // currentItem.optionList = AddInOptionList;
              // setAddedOptionList([]);
              cart.cartItems.push(currentItem);
              let encript = JSON.stringify(cart.cartItems);
              await AsyncStorage.setItem("cart", encript);
              setModalVisible(false);
            }}
          >
            <Text style={styles.btntxt}>Add to basket</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export const showCartIcon = (count, navigation) => {
  return (
    <View
      style={{
        position: "absolute",
        zIndex: 5,
        top: responsiveHeight(1),
        right: responsiveWidth(1.5),
        height: responsiveHeight(4),
        width: responsiveWidth(8),
        backgroundColor: COLORS.iconbg,
        // backgroundColor: COLORS.white,
        justifyContent: "center",
        alignItems: "center",
        // marginBottom: responsiveHeight(3),
        borderRadius: responsiveWidth(10),
      }}
    >
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Cart");
        }}
        style={{
          height: responsiveHeight(5),
          width: responsiveWidth(14),
          justifyContent: "center",
          alignItems: "center",
          // backgroundColor: "#400040",
        }}
        // onPress={() => setModalVisible(false)}
      >
        {count > 0 ? (
          <View
            style={{
              position: "absolute",
              backgroundColor: appColor.black,
              zIndex: 5,
              width: 16,
              height: 16,
              borderRadius: 15 / 2,
              right: 10,
              top: 3,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: 10,
              }}
            >
              {count}
            </Text>
          </View>
        ) : null}
        <Icon name={"cart-outline"} type={"material-community"} size={responsiveFontSize(2.5)} color={"red"}/>
        {/* <Icon name={"shopping-cart"} type={"feather"} size={responsiveFontSize(2.3)} color={"red"}/> */}
        {/* <Cart name={"shopping-cart"} size={responsiveFontSize(2.5)} color={"red"}></Cart> */}
      </TouchableOpacity>
    </View>
  );
};
