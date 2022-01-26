import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Linking,
  Share,
  Alert,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Icon} from 'react-native-elements';
import FastImage from 'react-native-fast-image';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {styles} from "./style";
import {Header, HeaderIcon} from '../../../components/Headers';
import {appColor, COLORS, MyStyles} from '../../../constants/colors';
import {appImages} from '../../../assets/utility';
import {MyIconButton, MySaveCancelButton} from '../../../components/button';
import {MyTextInput} from '../../../components/TextInput';
import moment from 'moment';


const SectionTitle = ({ title}) => {
  return (
    <View style={styles.underLine}>
      <Text style={styles.SectionHeader}>{title}</Text>
    
    </View>
  );
};

const BioComponent = ({
  onPress,
  BioText,
  icon,
  icontype,
  iconsize,
  RightText,
  Forwordicon,
  Forwordicontype,
}) => {
  return (
    <View style={styles.RowContent}>
      <Icon style={{ marginRight: responsiveWidth(2)}}
        name={icon ? icon : null}
        type={icontype ? icontype : null}
        size={iconsize ? iconsize : responsiveFontSize(2)}
        color={appColor.Primary}
      />
      <Text style={styles.txtstyle}>
        {(BioText = BioText ? BioText : 'optionName')}
      </Text>
      {/* <TouchableOpacity
         activeOpacity={0.7}
         onPress={onPress}
         >
        <Icon 
          name={Forwordicon ? Forwordicon : null} 
          type={Forwordicontype ? Forwordicontype : null}
          size={responsiveFontSize(2)}
          color={appColor.Primary}
        />
      </TouchableOpacity> */}
      <Text  >{RightText}</Text>
    </View>
  );
};

const proposalDetail = props => {

//   const [NewImage, setNewImage] = useState('');
//   const [Name, setName] = useState('');
//   const [Headline, setHeadline] = useState('');
//   const [Email, setEmail] = useState('');
//   const [Phone, setPhone] = useState('');
//   const [Location, setLocation] = useState('');
//   const [Link, setLink] = useState('');
//   const [Summary, setSummary] = useState('');

//   const [JobTitle, setJobTitle] = useState('');
//   const [Company, setCompany] = useState('');
//   const [WorkCity, setWorkCity] = useState('');
//   const [workDate, setworkDate] = useState('');
//   const [WorkDetail, setWorkDetail] = useState('');

//   const [EduClass, setEduClass] = useState('');
//   const [EduDepart, setEduDepart] = useState('');
//   const [Instie, setInstie] = useState('');
//   const [EduCity, setEduCity] = useState('');
//   const [EduDate, setEduDate] = useState('');
//   const [EduSpeciality, setEduSpeciality] = useState('');

//   const [EditInfo, setEditInfo] = useState(false);
//   const [EditWork, setEditWork] = useState(false);
//   const [EditEdu, setEditEdu] = useState(false);
//   const [EditSkill, setEditSkill] = useState(false);
//   const [EditOther, setEditOther] = useState(false);

  const [isLogin, setIsLogin] = useState(false);
  const [ModalVisble, setModalVisble] = useState(false);

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    image: '',
    // phone: "",
  });

  const [currentDate, setCurrentDate] = useState('');
  const [currentDatemoment, setCurrentDatemoment] = useState('');

  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    setCurrentDate(
      date + '/' + month + '/' + year 
      + ' ' + hours + ':' + min + ':' + sec
    )

    var date = moment()
    .utcOffset('+05:00')
    .format('DD-MMM-YYYY hh:mm: a');
    setCurrentDatemoment(date)
  }, []);

 

  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar
        backgroundColor={appColor.Primary}
        translucent={false}
        barStyle={'dark-content'}
      /> */}
      <Header onPress={() => props.navigation.goBack()} />
      <View style={styles.headerView}>
      <View>
          <FastImage
            source={
              userData.image === '' ? appImages.userlogo : {uri: userData.image}
            }
            style={styles.profilepic}
          />
        </View>  
      <View style={styles.ProfileTitleView}>
          <Text
            style={{fontSize: responsiveFontSize(3), color: appColor.white}}>
            User Name
          </Text>
          <TouchableOpacity onPress={() => props.navigation.navigate("ProfilePreview")}>
          <Text style={styles.ProfilePreview}>View Profile</Text></TouchableOpacity>
        </View>
        </View>
       
      <ScrollView >
        
        <View style={styles.biostyle}>
        <View style={MyStyles.Row}>
        <Text style={styles.nametext}>My Perposal Title</Text>
        <TouchableOpacity  style={{justifyContent: 'flex-end'}}>
         <Icon 
          name={"hearto" ? "heart" : "hearto"}
          type={"antdesign"}
          size={responsiveHeight(2.5)}
          color={appColor.red}
          /> 
          </TouchableOpacity>
          </View>
          <View style={MyStyles.Row}>
            <BioComponent 
            icon={'location-outline'}
            icontype={'ionicon'}
            BioText={'Location'}
            RightText= {currentDatemoment}
            // {moment(date).format('MMMM Do YYYY, h:mm:ss a')}
            />
        </View>
        </View>
        <View style={styles.biostyle}>
        <Text style={styles.nametext}>Detail</Text>
        <Text style={styles.Headlinetext}>Subject: </Text>
        <Text style={styles.Headlinetext}>Class / Depart: </Text>       
        <Text style={styles.Headlinetext}>packege Demand: </Text>            
        <Text style={styles.Headlinetext}>Available Time: </Text>     
        <Text style={styles.Headlinetext}>offer Type : online , home based, Group Based</Text>   
        </View>
        <View style={styles.biostyle}>     
        <Text style={styles.nametext}>Description</Text>
        <Text style={styles.Headlinetext}>I Will teah You</Text> 
        
        </View>
      </ScrollView>

      <View style={{alignSelf: 'center', ...MyStyles.Row}}>
        <MyIconButton 
        Title={"Call"}
        customstyles={{ width: responsiveWidth(30)}}
        iconName={'phone'}
        iconType= {'font-awesome'}
            // onPress= {() => props.navigation.navigate("Signup")}
            />
        <MyIconButton 
        Title={"Chat"}
        customstyles={{ width: responsiveWidth(30)}}
        iconName={'android-messages'}
        iconType= {'material-community'}
            // onPress= {() => props.navigation.navigate("Signup")}
            />
        <MyIconButton
        Title={"Call"}
        customstyles={{ width: responsiveWidth(30)}}
        iconName={'whatsapp'}
        iconType= {'font-awesome'}
            // onPress= {() => props.navigation.navigate("Signup")}
            />
      </View>

    </SafeAreaView>
  );
};

export default proposalDetail;
