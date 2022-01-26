import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native'
import { responsiveFontSize, responsiveWidth ,responsiveHeight} from 'react-native-responsive-dimensions'
import { appImages } from '../../assets/utility'
import { appColor } from '../../constants/colors'

export const MyHeader = () => {
    return(
        <View style={styles.container}>
            <Image source={appImages.WhiteLogo} style={styles.image}/>
            <Text style={styles.txt}>Safeit</Text>
        </View>
    )
}
export const Logoheader = () => {
    return(
        <View style={styles.topCard}>
                <Image source={appImages.Logo} style={styles.logo} />
                <Text style={styles.welcometxt}>
                    Welcome to safeit!
                </Text>
                <Text style={styles.greytxt}>
                    Keep your data safe
                </Text>
                <View style={styles.loginbar}>
                    <View style={[styles.switchbtn, { borderBottomWidth: responsiveWidth(1) ,borderColor: appColor.Primary }]}>
                        <Text style={{ fontWeight:'bold' , fontSize: responsiveFontSize(1.7), color: appColor.Secondary  }}>
                            Please fill the form below
                        </Text>
                    </View>
                </View>
            </View>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:appColor.Primary,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        paddingVertical:responsiveWidth(2)
    },
    image:{
        height:responsiveWidth(10),
        width:responsiveWidth(10),
    },
    txt:{
        fontSize:responsiveFontSize(2.5),
        color:appColor.white,
        marginLeft:responsiveWidth(2)
    },
    logo:{
        height:responsiveWidth(20),
        width:responsiveWidth(20)
    },
    topCard:{
        backgroundColor:appColor.white,
        alignItems:'center',
        paddingTop:responsiveHeight(2),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    welcometxt:{
        fontSize:responsiveFontSize(2.5),
        marginTop:responsiveHeight(2),
        fontWeight:'bold',
    },
    greytxt:{
        fontSize:responsiveFontSize(1.5),
        color:appColor.grey,
        marginTop:responsiveHeight(1),
    },
    loginbar:{
        flexDirection:"row",
        alignItems:"center"
    },
    switchbtn:{
        width:'60%',
        alignItems:"center",
        justifyContent:"center",
        marginTop:responsiveHeight(4),
        paddingBottom:responsiveHeight(2)
    },
})