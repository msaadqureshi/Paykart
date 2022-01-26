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
  Button,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Icon} from 'react-native-elements';
import FastImage from 'react-native-fast-image';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {styles} from './style';
import {Header, HeaderIcon} from '../../../components/Headers';
import {appColor, COLORS} from '../../../constants/colors';
import {appImages} from '../../../assets/utility';
import {MySaveCancelButton} from '../../../components/button';
import {MyInputParagrph, MyTextInput} from '../../../components/TextInput';

import {Picker} from '@react-native-picker/picker';

const EditTitle = ({onPress, title, iconname, icontype, iconsize}) => {
  return (
    <View style={styles.editTitlestyle}>
      <Text style={styles.editTitle}>{title}</Text>
      <TouchableOpacity
        style={{padding: responsiveWidth(2)}}
        activeOpacity={0.7}
        onPress={onPress}>
        <Icon
          name={iconname ? iconname : 'pencil-alt'}
          type={icontype ? icontype : 'font-awesome-5'}
          size={iconsize ? iconsize : responsiveFontSize(2)}
          color={appColor.Primary}
        />
        
      </TouchableOpacity>
    </View>
  );
};
const EditDelBtn = ({onEditPress, onDelPress}) => {
  return(
    <View style={[styles.EditDelBtn, styles.underLine]}>
     <TouchableOpacity
        style={{padding: responsiveWidth(2)}}
        activeOpacity={0.7}  onPress={onEditPress}>
      <Icon 
        name={'pencil-alt'}  
        type={'font-awesome-5'}
        size={responsiveFontSize(1.8)} 
        color={appColor.Primary}
      /> 
      </TouchableOpacity>
     <TouchableOpacity
        style={{padding: responsiveWidth(2)}}
        activeOpacity={0.7}  onPress={onDelPress}>
      <Icon 
        name={'trash'}  
        type={'font-awesome-5'}
        size={responsiveFontSize(1.8)} 
        color={appColor.Primary}
      /> 
      </TouchableOpacity>
        </View>
  )
}
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
      <Icon
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

const Profile = props => {
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

  const Camera = () => {
    var options = {
      title: 'Profile Picture',

      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
      mediaType: 'image',
    };

    launchCamera(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else {
        setNewImage(response.assets[0].uri);
        setImageResponse(response.assets[0]);
        // ImageUpload(response);
      }
    });
  };
  const Gallery = () => {
    var options = {
      title: 'Profile Photo',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        //setFilePath(response);
        console.log('>>>>>>>>>>>>', response.assets);
        setNewImage(response.assets[0].uri);
        // ImageUpload(response.assets[0]);
        setImageResponse(response.assets[0]);
      }
    });
  };
  const [selectedValue, setSelectedValue] = useState("java");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={appColor.Primary}
        translucent={false}
        barStyle={'dark-content'}
      />
      <Header onPress={() => props.navigation.goBack()} />
      <View style={styles.headerView}>
        {/* <Button title={"Profile Preview"}
        onPress={() => props.navigation.navigate("ProfilePreview")}/> */}
        <View style={styles.ProfileTitleView}>
          <Text
            style={{fontSize: responsiveFontSize(3), color: appColor.white}}>
            Welcome
          </Text>
          <Text style={styles.userName}>User Name</Text>

          <TouchableOpacity onPress={() => props.navigation.navigate("ProfilePreview")}>
          <Text style={styles.ProfilePreview}>View Profile</Text></TouchableOpacity>
        
        </View>
        <View>
          <FastImage
            source={
              userData.image === '' ? appImages.userlogo : {uri: userData.image}
            }
            style={styles.profilepic}
          />
          <TouchableOpacity
            style={styles.editIcon}
            onPress={() => setModalVisble(!ModalVisble)}>
            <Icon
              name={'camera'}
              type={'font-awesome-5'}
              size={responsiveFontSize(1.8)}
              color={appColor.black}
              // onPress={onPress}
            />
          </TouchableOpacity>
        </View>
        
      </View>

    
      <ScrollView style={styles.wrapper}>
        <EditTitle
          title={'Personal Information'}
          onPress={() => {
            setEditInfo(true);
          }}
        />
        <View style={styles.biostyle}>
          {!EditInfo ? (
            <View > 
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
              </View>
          ) : (
            <>
              <Text style={styles.editInputTitle}>Your Name</Text>
              <MyTextInput
                placeholder={'Enter your name'}
                customstyles={{marginTop: responsiveHeight(1)}}
                // placeholderTextColor={"black"}
                onchange={text => setName(text)}
              />
              <Text style={styles.editInputTitle}>HeadLine</Text>
              <MyTextInput
                placeholder={'Experties Or Main Subject'}
                customstyles={{marginTop: responsiveHeight(1)}}
                // placeholderTextColor={"black"}
                onchange={text => setHeadline(text)}
              />
              <Text style={styles.editInputTitle}>Email</Text>
              <MyTextInput
                placeholder={'Email'}
                customstyles={{marginTop: responsiveHeight(1)}}
                // placeholderTextColor={"black"}
                onchange={text => setEmail(text)}
              />
              <Text style={styles.editInputTitle}>Phone</Text>
              <MyTextInput
                placeholder={'Phone'}
                customstyles={{marginTop: responsiveHeight(1)}}
                // placeholderTextColor={"black"}
                onchange={text => setPhone(text)}
              />
              <Text style={styles.editInputTitle}>Location</Text>
              <MyTextInput
                placeholder={'Location'}
                customstyles={{marginTop: responsiveHeight(1)}}
                // placeholderTextColor={"black"}
                onchange={text => setLocation(text)}
              />
              <Text style={styles.editInputTitle}>
                Social Media or Web Link
              </Text>
              <MyTextInput
                placeholder={'Linkedin or FaceBook'}
                customstyles={{marginTop: responsiveHeight(1)}}
                // placeholderTextColor={"black"}
                onchange={text => setLink(text)}
              />
              <Text style={styles.editInputTitle}>About Summary</Text>
              <MyInputParagrph
                maxLength={500}
                placeholder={'About Summary'}
                customstyles={{marginTop: responsiveHeight(1)}}
                // placeholderTextColor={"black"}
                onchange={text => setSummary(text)}
              />

              <MySaveCancelButton
                onSavePress={() => {
                  setEditInfo(false);
                }}
                onCancelPress={() => {
                  setEditInfo(false);
                }}
              />
            </>
          )}
        </View>

        <EditTitle
          iconname={'plus-circle'}
          title={'Work Experience '}
          onPress={() => {
            setEditWork(true);
          }}
        />
        <View style={styles.biostyle}>
          {!EditWork ? (
            <View > 
              <Text style={styles.Headlinetext}>Job Title</Text>
              <BioComponent  BioText={'Company' + ' - ' + 'City'}    />
              <BioComponent  BioText={'From' + ' to ' + 'To'}    />
              <BioComponent  BioText={'Description'}    />
              <EditDelBtn/>
            </View>
            
          ) : (
            <>
              <Text style={styles.editInputTitle}>Title</Text>
              <MyTextInput
                placeholder={'Job Title'}
                customstyles={{marginTop: responsiveHeight(1)}}
                // placeholderTextColor={"black"}
                onchange={text => setJobTitle(text)}
              />
              <Text style={styles.editInputTitle}>Email</Text>
              <MyTextInput
                placeholder={'Company'}
                customstyles={{marginTop: responsiveHeight(1)}}
                // placeholderTextColor={"black"}
                onchange={text => setCompany(text)}
              />
              <Text style={styles.editInputTitle}>Phone</Text>
              <MyTextInput
                placeholder={'City'}
                customstyles={{marginTop: responsiveHeight(1)}}
                // placeholderTextColor={"black"}
                onchange={text => setWorkCity(text)}
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
                onchange={text => setWorkDetail(text)}
              />    

              <MySaveCancelButton
                onSavePress={() => {
                  setEditWork(false);
                }}
                onCancelPress={() => {
                  setEditWork(false);
                }}
              />
            </>
          )}
        </View>

        <EditTitle
          iconname={'plus-circle'}
          title={'Education'}
          onPress={() => {
            setEditEdu(true);
          }}
        />
        <View style={styles.biostyle}>
          {!EditEdu ? (
            <View >   
              <Text style={styles.Headlinetext}>{"Level of Education"  + ' - ' + "Depart"}</Text>
              <BioComponent  BioText={'Instie' + ' - ' + 'City'}    />
              <BioComponent  BioText={'From' + ' to ' + 'To'}    />
              <BioComponent  BioText={'Speciality'}    />
             
            </View>
          ) : (
            <>
              <Text style={styles.editInputTitle}>Level of Education</Text>
              <MyTextInput
                placeholder={'Job Title'}
                customstyles={{marginTop: responsiveHeight(1)}}
                // placeholderTextColor={"black"}
                onchange={text => setEduClass(text)}
              />
              <Text style={styles.editInputTitle}>Filed of Study</Text>
              <MyTextInput
                placeholder={'Job Title'}
                customstyles={{marginTop: responsiveHeight(1)}}
                // placeholderTextColor={"black"}
                onchange={text => setEduDepart(text)}
              />
              <Text style={styles.editInputTitle}>Scjool or Instie</Text>
              <MyTextInput
                placeholder={'Company'}
                customstyles={{marginTop: responsiveHeight(1)}}
                // placeholderTextColor={"black"}
                onchange={text => setInstie(text)}
              />
              <Text style={styles.editInputTitle}>City</Text>
              <MyTextInput
                placeholder={'City'}
                customstyles={{marginTop: responsiveHeight(1)}}
                // placeholderTextColor={"black"}
                onchange={text => setEduCity(text)}
              />
              <Text style={styles.editInputTitle}>Location</Text>
              <MyTextInput
                placeholder={'Date'}
                customstyles={{marginTop: responsiveHeight(1)}}
                // placeholderTextColor={"black"}
                onchange={text => setEduDate(text)}
              />
               <Text style={styles.editInputTitle}>Speciality</Text>
              <MyTextInput
                placeholder={'Speciality (Not Required)'}
                customstyles={{marginTop: responsiveHeight(1)}}
                // placeholderTextColor={"black"}
                onchange={text => setEduSpeciality(text)}
              />

              <MySaveCancelButton
                onSavePress={() => {
                  setEditEdu(false);
                }}
                onCancelPress={() => {
                  setEditEdu(false);
                }}
              />
            </>
          )}
        </View>
      </ScrollView>

      {/* Image Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={ModalVisble}
        onRequestClose={() => {
          setModalVisble(!ModalVisble);
        }}>
        <TouchableOpacity
          style={styles.modalContainer}
          activeOpacity={1}
          onPress={() => setModalVisble(false)}>
          <TouchableWithoutFeedback>
            <View style={styles.ModalView}>
              <TouchableOpacity
                onPress={() => {
                  Camera(), setModalVisble(false);
                }}
                style={styles.ModalTouchable}>
                <Icon
                  type={'feather'}
                  name="camera"
                  color="black"
                  size={responsiveFontSize(5)}
                />
                <Text style={styles.ModalText}>Camera</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  Gallery(), setModalVisble(false);
                }}
                style={styles.ModalTouchable}>
                <Icon
                  type={'feather'}
                  name="image"
                  color="black"
                  size={responsiveFontSize(5)}
                />
                <Text style={styles.ModalText}>Gallery</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
};

export default Profile;
