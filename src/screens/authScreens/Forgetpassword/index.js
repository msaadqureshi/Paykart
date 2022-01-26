import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
  Modal,
} from "react-native";
import { styles } from "./style";
import { appImages } from "../../../assets/utility";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { appColor } from "../../../constants/colors";
import MyTextInput from "../../../components/TextInput";
import { Icon } from "react-native-elements";
import { MyButton } from "../../../components/button";

const Signup = (props) => {

  const [ModalVisble, setModalVisble] = useState(false);
  const [isLoading, setIsloading] = useState("");
  const [isShow, setIsShow] = useState(true);


  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.form}>
     
          <MyTextInput
            placeholder={"Current password"}
            customstyles={styles.emailINPUT}
            // placeholderTextColor={"black"}
            onchange={(text) => setPassword(text)}
            IconName={isShow ? "eye-off-sharp" : "eye"}

            // onPress={() => setIsShow(!isShow)}
            // issecure={isShow}
          />
              <MyTextInput
            placeholder={"New password"}
            customstyles={styles.emailINPUT}
            // placeholderTextColor={"black"}
            onchange={(text) => setPassword(text)}
            IconName={isShow ? "eye-off-sharp" : "eye"}

            // onPress={() => setIsShow(!isShow)}
            // issecure={isShow}
          />
              <MyTextInput
            placeholder={"Repeat password"}
            customstyles={styles.emailINPUT}
            // placeholderTextColor={"black"}
            onchange={(text) => setPassword(text)}
            IconName={isShow ? "eye-off-sharp" : "eye"}

            // onPress={() => setIsShow(!isShow)}
            // issecure={isShow}
          />

          <MyButton
            Title={"Update Password"}
            onpress={() => props.navigation.navigate("App")}
            activity={isLoading}
          />
     
     
        </View>
      </ScrollView>
      
    </View>
  );
};
export default Signup;
