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
  TextInput,
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
import {MyButton, MyIconButton, MySaveCancelButton} from '../../../components/button';
import {MyInputParagrph, MyTextInput} from '../../../components/TextInput';
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

const SendProposal = (props) => {

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
    <ScrollView style={styles.container}>
      {/* <StatusBar
        backgroundColor={appColor.Primary}
        translucent={false}
        barStyle={'dark-content'}
      /> */}
      <Header onPress={() => props.navigation.goBack()} />
      <View style={styles.headerView}>
          <FastImage
            source={ appImages.PorposalTUT}
            style={styles.HeaderImage}
          />
        </View>


        <View style={styles.biostyle}>
        <Text style={styles.nametext}>Proposal Details</Text>
        <Text style={styles.editInputTitle}>Title</Text>
              <MyTextInput
                placeholder={'Title'}
                customstyles={{marginTop: responsiveHeight(1)}}
                // placeholderTextColor={"black"}
                onchange={text => setJobTitle(text)}
              />
              <Text style={styles.editInputTitle}>Subjects</Text>
              <MyTextInput
                placeholder={'Computer'}
                customstyles={{marginTop: responsiveHeight(1)}}
                // placeholderTextColor={"black"}
                onchange={text => setCompany(text)}
              />
              <Text style={styles.editInputTitle}>Class / Depart</Text>
              <MyTextInput
                placeholder={'10th'}
                customstyles={{marginTop: responsiveHeight(1)}}
                // placeholderTextColor={"black"}
                onchange={text => setWorkCity(text)}
              />
              <Text style={styles.editInputTitle}>Packege / Demand</Text>
              <MyTextInput
                placeholder={'Price'}
                customstyles={{marginTop: responsiveHeight(1)}}
                // placeholderTextColor={"black"}
                onchange={text => setworkDate(text)}
              />
              <Text style={styles.editInputTitle}>Avalable Time</Text>
              <MyTextInput
                placeholder={'Time'}
                customstyles={{marginTop: responsiveHeight(1)}}
                // placeholderTextColor={"black"}
                onchange={text => setworkDate(text)}
              />
               <Text style={styles.editInputTitle}>Location</Text>
              <MyTextInput
                placeholder={'Date'}
                customstyles={{marginTop: responsiveHeight(1)}}
                // placeholderTextColor={"black"}
                onchange={text => setworkDate(text)}
              />
              <Text style={styles.editInputTitle}>Description</Text>
             
              <MyInputParagrph 
                maxLength={500}
                placeholder={'Description'}
                customstyles={{marginTop: responsiveHeight(1)}}
                // placeholderTextColor={"black"}
                // onchange={text => setWorkDetail(text)}
              />    

       
        </View>

        <MyButton
        Title={"Post"}
        onPress={() => props.navigation.navigate("proposalDetail")}
        />

      </ScrollView>
  );
};

export default SendProposal;
