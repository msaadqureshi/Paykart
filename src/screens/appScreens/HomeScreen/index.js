import React, {useEffect, useState, useCallback } from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, Button } from 'react-native'
import { MyButton } from '../../../components/button';
import { styles } from "./style";
import { CityPicker, DateTime, DropdownPickerModal, FullDate, MounthYear } from "../../../components/picker";
import { Picker } from '@react-native-picker/picker';

const HomeScreen = (props) => {

const [selectedValue, setSelectedValue] = useState(false)
  return (
    <SafeAreaView style={styles.container}>
      <View>
      <Text>Plan Test Screen</Text>
      <MyButton Title={'Move to Bottom Tabs'}
      onPress= {() => props.navigation.navigate("MainTab" )}  />
     
      <MyButton Title={'Move to Auth'}
      onPress= {() => props.navigation.navigate("Login")}     />

      <MyButton Title={'Move to Profile'}
      onPress= {() => props.navigation.navigate("Profile")}   />

   
     
      {/* <TouchableOpacity>
       <Text>Move Screen</Text>
      </TouchableOpacity> */}

      

      <FullDate/>
      {/* <MounthYear/> */}
      <DateTime/>

      
      <CityPicker/>
      
      

      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 250 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>

      
      <DropdownPickerModal/>

    </View>
    </SafeAreaView>
  
  )
}

export default HomeScreen

