import React, {useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
  Modal,
} from 'react-native';
import {styles} from './style';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {appImages} from '../../../assets/utility';
import {appColor, COLORS} from '../../../constants/colors';
import MyTextInput from '../../../components/TextInput';
import {MyButton, GradientButton} from '../../../components/button';
import {Icon} from 'react-native-elements';
// import { Icon } from "react-native-elements/dist/icons/Icon";
import ImageResizer from 'react-native-image-resizer';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import DocumentPicker from 'react-native-document-picker';
import {TouchableWithoutFeedback} from 'react-native';
import { MyModel } from '../../../components/Model';

export const ImageComponent = ({imageStyle, PicUri}) => {
  return (
    <View>
      <Image
        style={imageStyle}
        source={PicUri === '' ? appImages.addressbook : {uri: PicUri}}
      />
    </View>
  );
};

// const filepicker = () => {

// OpenDocumentFile = async () => {

//   try {
//     const res = await DocumentPicker.pick({
//       type: [
//         DocumentPicker.types.images,
//         DocumentPicker.types.pdf,
//         DocumentPicker.types.plainText,
//         DocumentPicker.types.doc,
//         DocumentPicker.types.docx],
//     })
//     console.log(
//       res.uri,
//       res.type, // mime type
//       res.name,
//       res.size,
//     )
//   } catch (err) {
//     if (DocumentPicker.isCancel(err)) {
//       // User cancelled the picker, exit any dialogs or menus and move on
//     } else {
//       throw err
//     }
//   }
//  }
//   return(
//     <MyButton
//     Title={"File Picker"}
//     onPress={() => OpenDocumentFile()}/>
//   )
// }

const DocCard = props => {
  const {
    Title,
    onPress,
    customstyles,
    docStep,
    docTitle,
    Docicon,
    Docicontype,
    Dociconsize,
    ImageUriStyles,
    Forwordicon,
    Forwordicontype,
  } = props;

  const [ImageUri, setImageUri] = useState('');
  const [UploadImage, setUploadImage] = useState('');
  const [ModalVisble, setModalVisble] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const [isShow, setIsShow] = useState(true);
  const [ImageResponse, setImageResponse] = useState(null);

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
        setImageUri(response.assets[0].uri);
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
        setImageUri(response.assets[0].uri);
        // ImageUpload(response.assets[0]);
        setImageResponse(response.assets[0]);
      }
    });
  };
  return (
    <>
      <TouchableOpacity
        onPress={() => setModalVisble(!ModalVisble)}
        // onPress={onPress}
        style={[customstyles, styles.DocCardView]}>
        <View style={styles.cardItem}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <ImageComponent imageStyle={ImageUriStyles} PicUri={ImageUri} />
            {/* <Image
        source={NewImage === "" ? appImages.userlogo : { uri: NewImage }}
        style={styles.iconView}
      /> */}
            <View>
              <Text style={styles.uploadtext}>{docStep}</Text>
              <Text
                style={{fontSize: responsiveFontSize(2), fontWeight: 'bold'}}>
                {docTitle}
              </Text>
            </View>
          </View>
          <Icon
            style={{marginHorizontal: responsiveWidth(2)}}
            name={Docicon ? Docicon : null}
            type={Docicontype ? Docicontype : null}
            size={Dociconsize ? Dociconsize : responsiveFontSize(3)}
            color={appColor.Primary}
          />
        </View>
      </TouchableOpacity>
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
          <View
            style={{
              backgroundColor: appColor.white,
              borderRadius: responsiveWidth(1.5),
            }}>
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
              <Text style={styles.ModalText}>Take a Photo</Text>
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
              <Text style={styles.ModalText}> Choose from Gallery</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </>
  );
};

const UploadDoc = props => {
  const [ModalVisble2, setModalVisble2] = useState(false);
  const [UploadImage, setUploadImage] = useState('');

  OpenDocumentFile = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [
          DocumentPicker.types.images,
          DocumentPicker.types.pdf,
          DocumentPicker.types.plainText,
          DocumentPicker.types.doc,
          DocumentPicker.types.docx,
        ],
      });
      console.log(res);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.form}>
        <TouchableOpacity
          style={styles.imageContainer}
          onPress={() => setModalVisble(!ModalVisble)}>
          <Image source={appImages.dealer} style={styles.imageContainer} />
        </TouchableOpacity>
        {/* <Text style={styles.uploadtext}>Upload Picture</Text> */}
        <Text style={styles.CreateTextText}>Upload Your Docments</Text>

        <View>
          <DocCard
            docStep={'Step 1'}
            docTitle={'CNIC Front Pic'}
            Docicon={UploadImage ? 'check-circle' : 'file-upload'}
            Docicontype={'material'}
            ImageUriStyles={styles.iconView}
            onPress={() => setModalVisble(!ModalVisble)}
          />
          <DocCard
            docStep={'Step 3'}
            docTitle={'CNIC Back Pic'}
            Docicon={UploadImage ? 'check-circle' : 'file-upload'}
            Docicontype={'material'}
            ImageUriStyles={styles.iconView}
            onPress={() => setModalVisble(!ModalVisble)}
          />
          <DocCard
            docStep={'Step 4'}
            docTitle={'Previous Education Certificate'}
            Docicon={UploadImage ? 'check-circle' : 'file-upload'}
            Docicontype={'material'}
            ImageUriStyles={styles.iconView}
            onPress={() => setModalVisble(!ModalVisble)}
          />
          <DocCard
            docStep={'Step 2'}
            docTitle={'Other Experience'}
            Docicon={UploadImage ? 'check-circle' : 'file-upload'}
            Docicontype={'material'}
            ImageUriStyles={styles.iconView}
            onPress={() => setModalVisble(!ModalVisble)}
          />
        </View>

        <MyButton
          Title={'Register'}
          onPress={() => setModalVisble2(!ModalVisble2)}
          // onPress={async () => {
          //   if (!isLoading) {
          //     setIsloading(!isLoading);
          //     if (ImageResponse !== null) {
          //       await ImageUpload(ImageResponse);
          //     } else {
          //       await signUp(Email, Password, Name, UploadImage).then(
          //         (Success) => {
          //           console.log("Check 1",Success);
          //           if (Success == true) {
          //             setIsloading(false);
          //             props.navigation.navigate("Login")
          //           } else {
          //             setIsloading(false);
          //           }
          //         }
          //       );
          //     }
          //   }

          //   // props.navigation.navigate("App")
          // }}
          // activity={isLoading}
        />
        {/* <MyButton Title={'File Picker'} onPress={() => OpenDocumentFile()} /> */}
        {/* <MyModel/> */}
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={ModalVisble2}
        onRequestClose={() => {
          setModalVisble2(!ModalVisble2);
        }}>
        <TouchableOpacity
          style={styles.modalContainer}
          activeOpacity={1}
          onPress={() => setModalVisble2(false)}>
          <TouchableWithoutFeedback>
            <View
              style={{
                backgroundColor: appColor.white,
                borderRadius: responsiveWidth(1.5),
                height: responsiveHeight(20),
                width: responsiveWidth(80),
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{textAlign: 'center', ...styles.ModalText}}>
                We are currently reviewing your profile, you can login once your
                profile is approved.{' '}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
    </ScrollView>
  );
};
export default UploadDoc;
