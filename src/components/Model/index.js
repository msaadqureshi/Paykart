import React, {useEffect, useState} from 'react';
import { View, Text, Modal, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import { appColor, COLORS } from '../../constants/colors';
import {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth,
  } from 'react-native-responsive-dimensions';
import { MyButton } from '../button';

export const MyModel = () => {
    
  const [ModalVisble, setModalVisble] = useState(false);

    return (
        <>
        <MyButton
        Title={"Model Button"}
        onPress={() => setModalVisble(!ModalVisble)}/>
        <Modal
        animationType="fade"
        transparent={true}
        visible={ModalVisble}
        onRequestClose={() => {
          setModalVisble(!ModalVisble);
        }}
        >
        <TouchableOpacity
          style={{ backgroundColor: appColor.Modalbg,
            height: responsiveHeight(100),  width: responsiveWidth(100),
            justifyContent: "center",
            alignItems: "center",
        }}
          activeOpacity={0.5}
          onPress={() => setModalVisble(false)}
          >
          <TouchableWithoutFeedback>
            <View
              style={{
                backgroundColor: appColor.white,
                borderRadius: responsiveWidth(1.5),
                height: responsiveHeight(20),  width: responsiveWidth(80),
                justifyContent: 'center',  alignItems: 'center',
              }}>
              <Text >     Model         </Text>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
        </Modal>
        </>
    )
}

