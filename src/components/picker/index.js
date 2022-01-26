import React, {useEffect, useState, useCallback} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
// import MonthPicker from 'react-native-month-year-picker';
import DatePicker from 'react-native-date-picker';
import {
  responsiveHeight,
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import moment from 'moment';
import { appColor } from '../../constants/colors';

export const CityPicker = ({Textsytle, customstyles, DateLable}) => {
  const [selectedValue, setSelectedValue] = useState(false);

  const [pakcity, setPakCity] = useState([
    {label: 'City', value: 'City'},
    {label: 'Other', value: 'Other'},
    {label: 'Abbottabad', value: 'Abbottabad'},
    {label: 'Adezai', value: 'Adezai'},
    {label: 'Ali Bandar', value: 'Ali Bandar'},
    {label: 'Amir Chah', value: 'Amir Chah'},
    {label: 'Attock', value: 'Attock'},
    {label: 'Ayubia', value: 'Ayubia'},
    {label: 'Bahawalpur', value: 'Bahawalpur'},
    {label: 'Baden', value: 'Baden'},
    {label: 'Bagh', value: 'Bagh'},
    {label: 'Bahawalnagar', value: 'Bahawalnagar'},
    {label: 'Burewala', value: 'Burewala'},
    {label: 'Banda Daud Shah', value: 'Banda Daud Shah'},
    {label: 'Bannu district|Bannu', value: 'Bannu district|Bannu'},
    {label: 'Batagram', value: 'Batagram'},
    {label: 'Bazdar', value: 'Bazdar'},
    {label: 'Bela', value: 'Bela'},
    {label: 'Bellpat', value: 'Bellpat'},
    {label: 'Bhag', value: 'Bhag'},
    {label: 'Bhakkar', value: 'Bhakkar'},
    {label: 'Bhalwal', value: 'Bhalwal'},
    {label: 'Bhimber', value: 'Bhimber'},
    {label: 'Birote', value: 'Birote'},
    {label: 'Buner', value: 'Buner'},
    {label: 'Burj', value: 'Burj'},
    {label: 'Chiniot', value: 'Chiniot'},
    {label: 'Chachro', value: 'Chachro'},
    {label: 'Chagai', value: 'Chagai'},
    {label: 'Chah Sandan', value: 'Chah Sandan'},
    {label: 'Chailianwala', value: 'Chailianwala'},
    {label: 'Chakdara', value: 'Chakdara'},
    {label: 'Chakku', value: 'Chakku'},
    {label: 'Chakwal', value: 'Chakwal'},
    {label: 'Chaman', value: 'Chaman'},
    {label: 'Charsadda', value: 'Charsadda'},
    {label: 'Chhatr', value: 'Chhatr'},
    {label: 'Chichawatni', value: 'Chichawatni'},
    {label: 'Chitral', value: 'Chitral'},
    {label: 'Dadu', value: 'Dadu'},
    {label: 'Dera Ghazi Khan', value: 'Dera Ghazi Khan'},
    {label: 'Dera Ismail Khan', value: 'Dera Ismail Khan'},
    {label: 'Dalbandin', value: 'Dalbandin'},
    {label: 'Dargai', value: 'Dargai'},
    {label: 'Darya Khan', value: 'Darya Khan'},
    {label: 'Daska', value: 'Daska'},
    {label: 'Dera Bugti', value: 'Dera Bugti'},
    {label: 'Dhana Sar', value: 'Dhana Sar'},
    {label: 'Digri', value: 'Digri'},
    {label: 'Dina City|Dina', value: 'Dina City|Dina'},
    {label: 'Dinga', value: 'Dinga'},
    {label: ', Pakistan|Diplo', value: ', Pakistan|Diplo'},
    {label: 'Diwana', value: 'Diwana'},
    {label: 'Dokri', value: 'Dokri'},
    {label: 'Drosh', value: 'Drosh'},
    {label: 'Duki', value: 'Duki'},
    {label: 'Dushi', value: 'Dushi'},
    {label: 'Duzab', value: 'Duzab'},
    {label: 'Faisalabad', value: 'Faisalabad'},
    {label: 'Fateh Jang', value: 'Fateh Jang'},
    {label: 'Ghotki', value: 'Ghotki'},
    {label: 'Gwadar', value: 'Gwadar'},
    {label: 'Gujranwala', value: 'Gujranwala'},
    {label: 'Gujrat', value: 'Gujrat'},
    {label: 'Gadra', value: 'Gadra'},
    {label: 'Gajar', value: 'Gajar'},
    {label: 'Gandava', value: 'Gandava'},
    {label: 'Garhi Khairo', value: 'Garhi Khairo'},
    {label: 'Garruck', value: 'Garruck'},
    {label: 'Ghakhar Mandi', value: 'Ghakhar Mandi'},
    {label: 'Ghanian', value: 'Ghanian'},
    {label: 'Ghauspur', value: 'Ghauspur'},
    {label: 'Ghazluna', value: 'Ghazluna'},
    {label: 'Girdan', value: 'Girdan'},
    {label: 'Gulistan', value: 'Gulistan'},
    {label: 'Gwash', value: 'Gwash'},
    {label: 'Hyderabad', value: 'Hyderabad'},
    {label: 'Hala', value: 'Hala'},
    {label: 'Haripur', value: 'Haripur'},
    {label: 'Hab Chauki', value: 'Hab Chauki'},
    {label: 'Hafizabad', value: 'Hafizabad'},
    {label: 'Hameedabad', value: 'Hameedabad'},
    {label: 'Hangu', value: 'Hangu'},
    {label: 'Harnai', value: 'Harnai'},
    {label: 'Hasilpur', value: 'Hasilpur'},
    {label: 'Haveli Lakha', value: 'Haveli Lakha'},
    {label: 'Hinglaj', value: 'Hinglaj'},
    {label: 'Hoshab', value: 'Hoshab'},
    {label: 'Islamabad', value: 'Islamabad'},
    {label: 'Islamkot', value: 'Islamkot'},
    {label: 'Ispikan', value: 'Ispikan'},
    {label: 'Jacobabad', value: 'Jacobabad'},
    {label: 'Jamshoro', value: 'Jamshoro'},
    {label: 'Jhang', value: 'Jhang'},
    {label: 'Jhelum', value: 'Jhelum'},
    {label: 'Jamesabad', value: 'Jamesabad'},
    {label: 'Jampur', value: 'Jampur'},
    {label: 'Janghar', value: 'Janghar'},
    {label: 'Jati(Mughalbhin)', value: 'Jati(Mughalbhin)'},
    {label: 'Jauharabad', value: 'Jauharabad'},
    {label: 'Jhal', value: 'Jhal'},
    {label: 'Jhal Jhao', value: 'Jhal Jhao'},
    {label: 'Jhatpat', value: 'Jhatpat'},
    {label: 'Jhudo', value: 'Jhudo'},
    {label: 'Jiwani', value: 'Jiwani'},
    {label: 'Jungshahi', value: 'Jungshahi'},
    {label: 'Karachi', value: 'Karachi'},
    {label: 'Kotri', value: 'Kotri'},
    {label: 'Kalam', value: 'Kalam'},
    {label: 'Kalandi', value: 'Kalandi'},
    {label: 'Kalat', value: 'Kalat'},
    {label: 'Kamalia', value: 'Kamalia'},
    {label: 'Kamararod', value: 'Kamararod'},
    {label: 'Kamber', value: 'Kamber'},
    {label: 'Kamokey', value: 'Kamokey'},
    {label: 'Kanak', value: 'Kanak'},
    {label: 'Kandi', value: 'Kandi'},
    {label: 'Kandiaro', value: 'Kandiaro'},
    {label: 'Kanpur', value: 'Kanpur'},
    {label: 'Kapip', value: 'Kapip'},
    {label: 'Kappar', value: 'Kappar'},
    {label: 'Karak City', value: 'Karak City'},
    {label: 'Karodi', value: 'Karodi'},
    {label: 'Kashmor', value: 'Kashmor'},
    {label: 'Kasur', value: 'Kasur'},
    {label: 'Katuri', value: 'Katuri'},
    {label: 'Keti Bandar', value: 'Keti Bandar'},
    {label: 'Khairpur', value: 'Khairpur'},
    {label: 'Khanaspur', value: 'Khanaspur'},
    {label: 'Khanewal', value: 'Khanewal'},
    {label: 'Kharan', value: 'Kharan'},
    {label: 'kharian', value: 'kharian'},
    {label: 'Khokhropur', value: 'Khokhropur'},
    {label: 'Khora', value: 'Khora'},
    {label: 'Khushab', value: 'Khushab'},
    {label: 'Khuzdar', value: 'Khuzdar'},
    {label: 'Kikki', value: 'Kikki'},
    {label: 'Klupro', value: 'Klupro'},
    {label: 'Kohan', value: 'Kohan'},
    {label: 'Kohat', value: 'Kohat'},
    {label: 'Kohistan', value: 'Kohistan'},
    {label: 'Kohlu', value: 'Kohlu'},
    {label: 'Korak', value: 'Korak'},
    {label: 'Korangi', value: 'Korangi'},
    {label: 'Kot Sarae', value: 'Kot Sarae'},
    {label: 'Kotli', value: 'Kotli'},
    {label: 'Lahore', value: 'Lahore'},
    {label: 'Larkana', value: 'Larkana'},
    {label: 'Lahri', value: 'Lahri'},
    {label: 'Lakki Marwat', value: 'Lakki Marwat'},
    {label: 'Lasbela', value: 'Lasbela'},
    {label: 'Latamber', value: 'Latamber'},
    {label: 'Layyah', value: 'Layyah'},
    {label: 'Leiah', value: 'Leiah'},
    {label: 'Liari', value: 'Liari'},
    {label: 'Lodhran', value: 'Lodhran'},
    {label: 'Loralai', value: 'Loralai'},
    {label: 'Lower Dir', value: 'Lower Dir'},
    {label: 'Shadan Lund', value: 'Shadan Lund'},
    {label: 'Multan', value: 'Multan'},
    {label: 'Mandi Bahauddin', value: 'Mandi Bahauddin'},
    {label: 'Mansehra', value: 'Mansehra'},
    {label: 'Mian Chanu', value: 'Mian Chanu'},
    {label: 'Mirpur', value: 'Mirpur'},
    {label: 'Pakistan Moro', value: 'Pakistan Moro'},
    {label: 'Mardan', value: 'Mardan'},
    {label: 'Mach', value: 'Mach'},
    {label: 'Madyan', value: 'Madyan'},
    {label: 'Malakand', value: 'Malakand'},
    {label: 'Mand', value: 'Mand'},
    {label: 'Manguchar', value: 'Manguchar'},
    {label: 'Mashki Chah', value: 'Mashki Chah'},
    {label: 'Maslti', value: 'Maslti'},
    {label: 'Mastuj', value: 'Mastuj'},
    {label: 'Mastung', value: 'Mastung'},
    {label: 'Mathi', value: 'Mathi'},
    {label: 'Matiari', value: 'Matiari'},
    {label: 'Mehar', value: 'Mehar'},
    {label: 'Mekhtar', value: 'Mekhtar'},
    {label: 'Merui', value: 'Merui'},
    {label: 'Mianwali', value: 'Mianwali'},
    {label: 'Mianez', value: 'Mianez'},
    {label: 'Mirpur Batoro', value: 'Mirpur Batoro'},
    {label: 'Mirpur Khas', value: 'Mirpur Khas'},
    {label: 'Mirpur Sakro', value: 'Mirpur Sakro'},
    {label: 'Mithi', value: 'Mithi'},
    {label: 'Mongora', value: 'Mongora'},
    {label: 'Murgha Kibzai', value: 'Murgha Kibzai'},
    {label: 'Muridke', value: 'Muridke'},
    {label: 'Musa Khel Bazar', value: 'Musa Khel Bazar'},
    {label: 'Muzaffar Garh', value: 'Muzaffar Garh'},
    {label: 'Muzaffarabad', value: 'Muzaffarabad'},
    {label: 'Nawabshah', value: 'Nawabshah'},
    {label: 'Nazimabad', value: 'Nazimabad'},
    {label: 'Nowshera', value: 'Nowshera'},
    {label: 'Nagar Parkar', value: 'Nagar Parkar'},
    {label: 'Nagha Kalat', value: 'Nagha Kalat'},
    {label: 'Nal', value: 'Nal'},
    {label: 'Naokot', value: 'Naokot'},
    {label: 'Nasirabad', value: 'Nasirabad'},
    {label: 'Nauroz Kalat', value: 'Nauroz Kalat'},
    {label: 'Naushara', value: 'Naushara'},
    {label: 'Nur Gamma', value: 'Nur Gamma'},
    {label: 'Nushki', value: 'Nushki'},
    {label: 'Nuttal', value: 'Nuttal'},
    {label: 'Okara', value: 'Okara'},
    {label: 'Ormara', value: 'Ormara'},
    {label: 'Peshawar', value: 'Peshawar'},
    {label: 'Panjgur', value: 'Panjgur'},
    {label: 'Pasni City', value: 'Pasni City'},
    {label: 'Paharpur', value: 'Paharpur'},
    {label: 'Palantuk', value: 'Palantuk'},
    {label: 'Pendoo', value: 'Pendoo'},
    {label: 'Piharak', value: 'Piharak'},
    {label: 'Pirmahal', value: 'Pirmahal'},
    {label: 'Pishin', value: 'Pishin'},
    {label: 'Plandri', value: 'Plandri'},
    {label: 'Pokran', value: 'Pokran'},
    {label: 'Pounch', value: 'Pounch'},
    {label: 'Quetta', value: 'Quetta'},
    {label: 'Qambar', value: 'Qambar'},
    {label: 'Qamruddin Karez', value: 'Qamruddin Karez'},
    {label: 'Qazi Ahmad', value: 'Qazi Ahmad'},
    {label: 'Qila Abdullah', value: 'Qila Abdullah'},
    {label: 'Qila Ladgasht', value: 'Qila Ladgasht'},
    {label: 'Qila Safed', value: 'Qila Safed'},
    {label: 'Qila Saifullah', value: 'Qila Saifullah'},
    {label: 'Rawalpindi', value: 'Rawalpindi'},
    {label: 'Rabwah', value: 'Rabwah'},
    {label: 'Rahim Yar Khan', value: 'Rahim Yar Khan'},
    {label: 'Rajan Pur', value: 'Rajan Pur'},
    {label: 'Rakhni', value: 'Rakhni'},
    {label: 'Ranipur', value: 'Ranipur'},
    {label: 'Ratodero', value: 'Ratodero'},
    {label: 'Rawalakot', value: 'Rawalakot'},
    {label: 'Renala Khurd', value: 'Renala Khurd'},
    {label: 'Robat Thana', value: 'Robat Thana'},
    {label: 'Rodkhan', value: 'Rodkhan'},
    {label: 'Rohri', value: 'Rohri'},
    {label: 'Sialkot', value: 'Sialkot'},
    {label: 'Sadiqabad', value: 'Sadiqabad'},
    {
      label: 'Safdar Abad- (Dhaban Singh)',
      value: 'Safdar Abad- (Dhaban Singh)',
    },
    {label: 'Sahiwal', value: 'Sahiwal'},
    {label: 'Saidu Sharif', value: 'Saidu Sharif'},
    {label: 'Saindak', value: 'Saindak'},
    {label: 'Sakrand', value: 'Sakrand'},
    {label: 'Sanjawi', value: 'Sanjawi'},
    {label: 'Sargodha', value: 'Sargodha'},
    {label: 'Saruna', value: 'Saruna'},
    {label: 'Shabaz Kalat', value: 'Shabaz Kalat'},
    {label: 'Shadadkhot', value: 'Shadadkhot'},
    {label: 'Shahbandar', value: 'Shahbandar'},
    {label: 'Shahpur', value: 'Shahpur'},
    {label: 'Shahpur Chakar', value: 'Shahpur Chakar'},
    {label: 'Shakargarh', value: 'Shakargarh'},
    {label: 'Shangla', value: 'Shangla'},
    {label: 'Sharam Jogizai', value: 'Sharam Jogizai'},
    {label: 'Sheikhupura', value: 'Sheikhupura'},
    {label: 'Shikarpur', value: 'Shikarpur'},
    {label: 'Shingar', value: 'Shingar'},
    {label: 'Shorap', value: 'Shorap'},
    {label: 'Sibi', value: 'Sibi'},
    {label: 'Sohawa', value: 'Sohawa'},
    {label: 'Sonmiani', value: 'Sonmiani'},
    {label: 'Sooianwala', value: 'Sooianwala'},
    {label: 'Spezand', value: 'Spezand'},
    {label: 'Spintangi', value: 'Spintangi'},
    {label: 'Sui', value: 'Sui'},
    {label: 'Sujawal', value: 'Sujawal'},
    {label: 'Sukkur', value: 'Sukkur'},
    {label: 'Suntsar', value: 'Suntsar'},
    {label: 'Surab', value: 'Surab'},
    {label: 'Swabi', value: 'Swabi'},
    {label: 'Swat', value: 'Swat'},
    {label: 'Tando Adam', value: 'Tando Adam'},
    {label: 'Tando Bago', value: 'Tando Bago'},
    {label: 'Tangi', value: 'Tangi'},
    {label: 'Tank City', value: 'Tank City'},
    {label: 'Tar Ahamd Rind', value: 'Tar Ahamd Rind'},
    {label: 'Thalo', value: 'Thalo'},
    {label: 'Thatta', value: 'Thatta'},
    {label: 'Toba Tek Singh', value: 'Toba Tek Singh'},
    {label: 'Tordher', value: 'Tordher'},
    {label: 'Tujal', value: 'Tujal'},
    {label: 'Tump', value: 'Tump'},
    {label: 'Turbat', value: 'Turbat'},
    {label: 'Umarao', value: 'Umarao'},
    {label: 'Umarkot', value: 'Umarkot'},
    {label: 'Upper Dir', value: 'Upper Dir'},
    {label: 'Uthal', value: 'Uthal'},
    {label: 'Vehari', value: 'Vehari'},
    {label: 'Veirwaro', value: 'Veirwaro'},
    {label: 'Vitakri', value: 'Vitakri'},
    {label: 'Wadh', value: 'Wadh'},
    {label: 'Wah Cantt', value: 'Wah Cantt'},
    {label: 'Warah', value: 'Warah'},
    {label: 'Washap', value: 'Washap'},
    {label: 'Wasjuk', value: 'Wasjuk'},
    {label: 'Wazirabad', value: 'Wazirabad'},
    {label: 'Yakmach', value: 'Yakmach'},
    {label: 'Zhob', value: 'Zhob'},
  ]);
  const [city, setCity] = useState([
    'Other',
    'Abbottabad',
    'Adezai',
    'Ali Bandar',
    'Amir Chah',
    'Attock',
    'Ayubia',
    'Bahawalpur',
    'Baden',
    'Bagh',
    'Bahawalnagar',
    'Burewala',
    'Banda Daud Shah',
    'Bannu district|Bannu',
    'Batagram',
    'Bazdar',
    'Bela',
    'Bellpat',
    'Bhag',
    'Bhakkar',
    'Bhalwal',
    'Bhimber',
    'Birote',
    'Buner',
    'Burj',
    'Chiniot',
    'Chachro',
    'Chagai',
    'Chah Sandan',
    'Chailianwala',
    'Chakdara',
    'Chakku',
    'Chakwal',
    'Chaman',
    'Charsadda',
    'Chhatr',
    'Chichawatni',
    'Chitral',
    'Dadu',
    'Dera Ghazi Khan',
    'Dera Ismail Khan',
    'Dalbandin',
    'Dargai',
    'Darya Khan',
    'Daska',
    'Dera Bugti',
    'Dhana Sar',
    'Digri',
    'Dina City|Dina',
    'Dinga',
    ', Pakistan|Diplo',
    'Diwana',
    'Dokri',
    'Drosh',
    'Duki',
    'Dushi',
    'Duzab',
    'Faisalabad',
    'Fateh Jang',
    'Ghotki',
    'Gwadar',
    'Gujranwala',
    'Gujrat',
    'Gadra',
    'Gajar',
    'Gandava',
    'Garhi Khairo',
    'Garruck',
    'Ghakhar Mandi',
    'Ghanian',
    'Ghauspur',
    'Ghazluna',
    'Girdan',
    'Gulistan',
    'Gwash',
    'Hyderabad',
    'Hala',
    'Haripur',
    'Hab Chauki',
    'Hafizabad',
    'Hameedabad',
    'Hangu',
    'Harnai',
    'Hasilpur',
    'Haveli Lakha',
    'Hinglaj',
    'Hoshab',
    'Islamabad',
    'Islamkot',
    'Ispikan',
    'Jacobabad',
    'Jamshoro',
    'Jhang',
    'Jhelum',
    'Jamesabad',
    'Jampur',
    'Janghar',
    'Jati(Mughalbhin)',
    'Jauharabad',
    'Jhal',
    'Jhal Jhao',
    'Jhatpat',
    'Jhudo',
    'Jiwani',
    'Jungshahi',
    'Karachi',
    'Kotri',
    'Kalam',
    'Kalandi',
    'Kalat',
    'Kamalia',
    'Kamararod',
    'Kamber',
    'Kamokey',
    'Kanak',
    'Kandi',
    'Kandiaro',
    'Kanpur',
    'Kapip',
    'Kappar',
    'Karak City',
    'Karodi',
    'Kashmor',
    'Kasur',
    'Katuri',
    'Keti Bandar',
    'Khairpur',
    'Khanaspur',
    'Khanewal',
    'Kharan',
    'kharian',
    'Khokhropur',
    'Khora',
    'Khushab',
    'Khuzdar',
    'Kikki',
    'Klupro',
    'Kohan',
    'Kohat',
    'Kohistan',
    'Kohlu',
    'Korak',
    'Korangi',
    'Kot Sarae',
    'Kotli',
    'Lahore',
    'Larkana',
    'Lahri',
    'Lakki Marwat',
    'Lasbela',
    'Latamber',
    'Layyah',
    'Leiah',
    'Liari',
    'Lodhran',
    'Loralai',
    'Lower Dir',
    'Shadan Lund',
    'Multan',
    'Mandi Bahauddin',
    'Mansehra',
    'Mian Chanu',
    'Mirpur',
    ', Pakistan|Moro',
    'Mardan',
    'Mach',
    'Madyan',
    'Malakand',
    'Mand',
    'Manguchar',
    'Mashki Chah',
    'Maslti',
    'Mastuj',
    'Mastung',
    'Mathi',
    'Matiari',
    'Mehar',
    'Mekhtar',
    'Merui',
    'Mianwali',
    'Mianez',
    'Mirpur Batoro',
    'Mirpur Khas',
    'Mirpur Sakro',
    'Mithi',
    'Mongora',
    'Murgha Kibzai',
    'Muridke',
    'Musa Khel Bazar',
    'Muzaffar Garh',
    'Muzaffarabad',
    'Nawabshah',
    'Nazimabad',
    'Nowshera',
    'Nagar Parkar',
    'Nagha Kalat',
    'Nal',
    'Naokot',
    'Nasirabad',
    'Nauroz Kalat',
    'Naushara',
    'Nur Gamma',
    'Nushki',
    'Nuttal',
    'Okara',
    'Ormara',
    'Peshawar',
    'Panjgur',
    'Pasni City',
    'Paharpur',
    'Palantuk',
    'Pendoo',
    'Piharak',
    'Pirmahal',
    'Pishin',
    'Plandri',
    'Pokran',
    'Pounch',
    'Quetta',
    'Qambar',
    'Qamruddin Karez',
    'Qazi Ahmad',
    'Qila Abdullah',
    'Qila Ladgasht',
    'Qila Safed',
    'Qila Saifullah',
    'Rawalpindi',
    'Rabwah',
    'Rahim Yar Khan',
    'Rajan Pur',
    'Rakhni',
    'Ranipur',
    'Ratodero',
    'Rawalakot',
    'Renala Khurd',
    'Robat Thana',
    'Rodkhan',
    'Rohri',
    'Sialkot',
    'Sadiqabad',
    'Safdar Abad- (Dhaban Singh)',
    'Sahiwal',
    'Saidu Sharif',
    'Saindak',
    'Sakrand',
    'Sanjawi',
    'Sargodha',
    'Saruna',
    'Shabaz Kalat',
    'Shadadkhot',
    'Shahbandar',
    'Shahpur',
    'Shahpur Chakar',
    'Shakargarh',
    'Shangla',
    'Sharam Jogizai',
    'Sheikhupura',
    'Shikarpur',
    'Shingar',
    'Shorap',
    'Sibi',
    'Sohawa',
    'Sonmiani',
    'Sooianwala',
    'Spezand',
    'Spintangi',
    'Sui',
    'Sujawal',
    'Sukkur',
    'Suntsar',
    'Surab',
    'Swabi',
    'Swat',
    'Tando Adam',
    'Tando Bago',
    'Tangi',
    'Tank City',
    'Tar Ahamd Rind',
    'Thalo',
    'Thatta',
    'Toba Tek Singh',
    'Tordher',
    'Tujal',
    'Tump',
    'Turbat',
    'Umarao',
    'Umarkot',
    'Upper Dir',
    'Uthal',
    'Vehari',
    'Veirwaro',
    'Vitakri',
    'Wadh',
    'Wah Cantt',
    'Warah',
    'Washap',
    'Wasjuk',
    'Wazirabad',
    'Yakmach',
    'Zhob',
  ]);
  return (
    <View>
      {/* <Picker style= {styles.picker}
    // style={{your_style}}
    mode="dialog"
    selectedValue={options}
    onValueChange={(itemValue, itemIndex)=>{setPakCity(itemValue)}}>  
    {pakcity.map((item, index) => {
        return (<Picker.Item label={item} value={index} key={index}/>) 
    })}

    </Picker> */}

      <Picker style={[styles.pickerStyle, customstyles]}
      
        mode="dialog"
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        {pakcity.map((item, index) => {
          return (
            <Picker.Item label={item.label} value={item.value} key={index} />
          );
        })}
      </Picker>
      {/* <Text>Your conuntry: {selectedValue}</Text> */}
    </View>
  );
};

// export const MounthYear = ({Textsytle, customstyles, DateLable}) => {
//   const [date, setDate] = useState(new Date());
//   const [show, setShow] = useState(false);

//   const showPicker = useCallback(value => setShow(value), []);

//   const onValueChange = useCallback(
//     (event, newDate) => {
//       // const selectedDate = newDate || date;

//       showPicker(false);
//       setDate(newDate);
//       // setDate(selectedDate);
//     },
//     [date, showPicker],
//   );

//   return (
//     <View>
//       <TouchableOpacity style={[styles.pickerStyle, customstyles]}
//       onPress={() => showPicker(true)}>
//         <Text>{moment(date).format('MMM - YYYY')}</Text>        
//         {/* <Text style={Textsytle}>{DateLable ? DateLable : 'Date'}</Text> */}
//       </TouchableOpacity>
//       {show && (
//         <MonthPicker
//           onChange={onValueChange}
//           value={date}
//           minimumDate={new Date(1950, 1)}
//           maximumDate={new Date(2050, 1)}
//           // outputFormat="M-YY"
//         />
//       )}
//     </View>
//   );
// };

export const FullDate = ({Textsytle, customstyles, DateLable}) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  return (
    <View>
      <TouchableOpacity
        style={[styles.pickerStyle, customstyles]}
        onPress={() => setOpen(true)}>
        {/* <Text style={Textsytle}>{DateLable ? DateLable : 'Date'}</Text> */}
        <Text>{moment(date).format('DD MMM YYYY')}</Text>
      </TouchableOpacity>
      <DatePicker
        modal
        mode="date"
        open={open}
        date={date}
        onDateChange={setDate}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </View>
  );
};

export const DateTime = ({Textsytle, customstyles, DateLable}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState(new Date());

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    // console.warn("A date has been picked: ", date);
    setDate(date);
    hideDatePicker();
  };

  return (
    <View>
      <TouchableOpacity 
      style={[styles.pickerStyle, customstyles]}
      onPress={showDatePicker}>
        {/* <Text>Show Date Picker</Text> */}
        <Text style={Textsytle}>{moment(date).format('DD MMM YYYY')}</Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

export const inputPicker = () => {
  return (
    <TextInput
    style={[styles.pickerStyle, customstyles]}
      label="City"
      mode="outlined"
      value={this.state.city}
      render={props => (
        <Picker
          selectedValue={this.state.city}
          onValueChange={(itemValue, itemIndex) => {
            this.setState({city: itemValue});
          }}
          style={{height: 54, marginTop: 10}}>
          {this.renderCityItems()}
        </Picker>
      )}
    />
  );
};


export const DropdownPickerModal = ({containerStyle, disableBorderRadius}) => {
  const [openTimeSlot, setOpenTimeSlot] = useState(false);
  const [valueTimeSlot, setValueTimeSlot] = useState('08:00 AM - 12:00 PM');

  const [itemsTimeSlot, setItemsTimeSlot] = useState([
    // {label: '08:00 AM - 09:00 PM', value: '08:00 AM - 09:00 PM', selected: true},
    {label: '08:00 AM - 09:00 PM', value: '08:00 AM - 09:00 PM'},
    {label: '09:00 AM - 10:00 AM', value: '09:00 AM - 10:00 AM'},
    {label: '10:00 AM - 11:00 AM', value: '10:00 AM - 11:00 AM'},
    {label: '11:00 AM - 12:00 PM', value: '11:00 AM - 12:00 PM'},
    {label: '12:00 PM - 01:00 PM', value: '12:00 PM - 01:00 PM'},
    {label: '01:00 PM - 02:00 PM', value: '01:00 PM - 02:00 PM'},
    {label: '02:00 PM - 03:00 PM', value: '02:00 PM - 03:00 PM'},
    {label: '03:00 PM - 04:00 PM', value: '03:00 PM - 04:00 PM'},
    {label: '04:00 PM - 05:00 PM', value: '04:00 PM - 05:00 PM'},
    {label: '05:00 PM - 06:00 PM', value: '05:00 PM - 06:00 PM'},
  ]);

  return (
    <DropDownPicker
      open={openTimeSlot}
      value={valueTimeSlot}
      items={itemsTimeSlot}
      setOpen={setOpenTimeSlot}
      setValue={setValueTimeSlot}
      setItems={setItemsTimeSlot}
      // defaultIndex={0}
      // defaultValue= '08:00 AM - 09:00 PM'

      placeholder="Select Time"
      // style={{
      //   backgroundColor: "crimson"
      // }}
      disabledStyle={{
        opacity: 0.5
      }}
      // containerStyle={
      //   containerStyle
      //     ? containerStyle
      //     : styles.pickerStyle
      // }
      stickyHeader={true}
      disableBorderRadius={true}   
      // searchable={true}
      zIndex={1000}
      zIndexInverse={3000}
      
      // disableBorderRadius={disableBorderRadius}
      // searchable={searchable}
      // zIndex={zIndex}
      // zIndexInverse={zIndexInverse}
    />
  );
};


const styles = StyleSheet.create({
  pickerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: responsiveWidth(90),
    height: responsiveHeight(6),
    paddingHorizontal: responsiveWidth(3),
    marginTop: responsiveHeight(3),
    borderRadius: responsiveWidth(2),
    backgroundColor: appColor.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  // screen: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: 'yellow',
  // },
  // text: {
  //   fontSize: 24,
  // },
  // picker: {
  //   // marginVertical: 30,
  //   width: 300,
  //   padding: 10,
  //   borderWidth: 1,
  //   borderColor: '#666',
  // },
});

// gender Picker

// const genderData = (['Male', 'Female']);

//   class GenderPicker extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedItemGender: 0,
//       selectedItem: 2,
//     };
//   }

//    onPickerSelectGender(index) {
//     this.setState({
//       selectedItemGender: index,
//       Gender: genderData[index],
//     });
//   }

//   render() {
//     const {navigation} = this.props;
//     const {navigate} = navigation;
//     const {
//       selectedItemGender,
//     } = this.state;
//   return (
//     <Picker
//     style={{width: 150, height: 180}}
//     selectedValue={selectedItemGender}
//     itemStyle={{color: 'white', fontSize: 26}}
//     onValueChange={index =>
//       this.onPickerSelectGender(index)
//     }>
//     {genderData.map((value, i) => (
//       <PickerItem label={value} value={i} key={value} />
//     ))}
//   </Picker>
//   )
//   }
// }

//   var options ={
//     "1": "Home",
//     "2": "Food",
//     "3": "Car",
//     "4": "Bank",
// };

// <Picker
//     style={{your_style}}
//     mode="dropdown"
//     selectedValue={this.state.selected}
//     onValueChange={()=>{}}>
//     {Object.keys(options).map((key) => {
//         return (<Picker.Item label={this.props.options[key]} value={key} key={key}/>) //if you have a bunch of keys value pair
//     })}
// </Picker>

var options = ['Home', 'Savings', 'Car', 'GirlFriend'];

// <Picker
//     style={{your_style}}
//     mode="dropdown"
//     selectedValue={this.state.selected}
//     onValueChange={()=>{}}> //add your function to handle picker state change
//     {options.map((item, index) => {
//         return (<Picker.Item label={item} value={index} key={index}/>)
//     })}
// </Picker>

