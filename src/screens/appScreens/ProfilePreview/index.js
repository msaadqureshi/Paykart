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
import {appColor, COLORS} from '../../../constants/colors';
import {appImages} from '../../../assets/utility';
import {MySaveCancelButton} from '../../../components/button';
import {MyTextInput} from '../../../components/TextInput';

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
    </View>
  );
};

const ProfilePreview = props => {

  const [NewImage, setNewImage] = useState('');
  const [Name, setName] = useState('');
  const [Headline, setHeadline] = useState('');
  const [Email, setEmail] = useState('');
  const [Phone, setPhone] = useState('');
  const [Location, setLocation] = useState('');
  const [Link, setLink] = useState('');
  const [Summary, setSummary] = useState('');

  const [JobTitle, setJobTitle] = useState('');
  const [Company, setCompany] = useState('');
  const [WorkCity, setWorkCity] = useState('');
  const [workDate, setworkDate] = useState('');
  const [WorkDetail, setWorkDetail] = useState('');

  const [EduClass, setEduClass] = useState('');
  const [EduDepart, setEduDepart] = useState('');
  const [Instie, setInstie] = useState('');
  const [EduCity, setEduCity] = useState('');
  const [EduDate, setEduDate] = useState('');
  const [EduSpeciality, setEduSpeciality] = useState('');

  const [EditInfo, setEditInfo] = useState(false);
  const [EditWork, setEditWork] = useState(false);
  const [EditEdu, setEditEdu] = useState(false);
  const [EditSkill, setEditSkill] = useState(false);
  const [EditOther, setEditOther] = useState(false);

  const [isLogin, setIsLogin] = useState(false);
  const [ModalVisble, setModalVisble] = useState(false);

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    image: '',
    // phone: "",
  });


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={appColor.Primary}
        translucent={false}
        barStyle={'dark-content'}
      />
      <Header onPress={() => props.navigation.goBack()} />
      <View style={styles.headerView}>
        <View style={styles.ProfileTitleView}>
          <Text
            style={{fontSize: responsiveFontSize(3), color: appColor.white}}>
            Welcome
          </Text>
          <Text style={styles.userName}>User Name</Text>
        </View>
        <View>
          <FastImage
            source={
              userData.image === '' ? appImages.userlogo : {uri: userData.image}
            }
            style={styles.profilepic}
          />
        </View>
      </View>

      <ScrollView >
        
        <View style={styles.biostyle}>
        <SectionTitle title={"Personal Information"}/>
              <Text style={styles.nametext}>My Name</Text>
              <Text style={styles.Headlinetext}>Major Subject</Text>

              <BioComponent
                icon={'email-outline'}
                icontype={'material-community'}
                BioText={'email'}
              />
              <BioComponent
                icon={'phone-outline'}
                icontype={'material-community'}
                BioText={'phone'}
              />
              <BioComponent
                icon={'location-outline'}
                icontype={'ionicon'}
                BioText={'Location'}
              />
              <BioComponent
                icon={'web'}
                icontype={'material-community'}
                BioText={'Link'}
              />
              <Text style={styles.Headlinetext}>About Summary</Text>
              <BioComponent BioText={'About Summary'} />
      
      
            <SectionTitle title={"Work Experience"}/>
              <Text style={styles.Headlinetext}>Job Title</Text>
              <BioComponent  BioText={'Company' + ' - ' + 'City'}    />
              <BioComponent  BioText={'From' + ' to ' + 'To'}    />
              <BioComponent  BioText={'Description'}    />
            
      

            <SectionTitle title={"Education"}/>
              <Text style={styles.Headlinetext}>{"Level of Education"  + ' - ' + "Depart"}</Text>
              <BioComponent  BioText={'Instie' + ' - ' + 'City'}    />
              <BioComponent  BioText={'From' + ' to ' + 'To'}    />
              <BioComponent  BioText={'Speciality'}    />
             
        </View>
      </ScrollView>

    </SafeAreaView>
  );
};

export default ProfilePreview;
