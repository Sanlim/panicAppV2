import React, { useContext, useState } from 'react';
import { SafeAreaView, StyleSheet, View, TouchableOpacity, TextInput } from 'react-native';
import { Overlay } from 'react-native-elements';
import { Avatar, Caption, Title, Text, TouchableRipple } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { AuthContext } from '../navigation/AuthProvider';
import { Calendar } from 'react-native-calendars';
import firestore from '@react-native-firebase/firestore'
import moment from 'moment'

const OverlayEditName = Overlay;

const ProfileScreen = () => {
  const { user, logout } = useContext(AuthContext);
  //console.log(user);

  const usersCollectionRef = firestore().collection('Users').doc(user.email).collection('ข้อมูลส่วนตัว');

  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const [visibleEditName, setVisibleEditName] = useState(false);

  const toggleOverlayEditName = () => {
    setVisibleEditName(!visibleEditName);
  };

  const [name, setName] = useState(user.email);
  const [phoneNumber, setPhoneNumber] = useState('+66 ')

  const [birthDate, setBirthDate] = useState('วว/ดด/ปปปป');
  const [gender, setGender] = useState('...');
  const [weight, setWeight] = useState('...');
  const [height, setHeight] = useState('...');
  const [career, setCareer] = useState('...');

  const saveProfile = () => {
    usersCollectionRef.doc(moment().format('ข้อมูลส่วนตัว')).set({
      //dateTime: now,      
      name,
      phoneNumber,
      birthDate,
      gender,
      weight,
      height,
      career
    })
    //console.log(items);
  }

  const twoFunc = () => {
    saveProfile()
    toggleOverlay()
  }


  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: 'row', marginTop: 15 }}>
          <Avatar.Image
            source={require('../assets/profile.png')}
            size={80}
          />

          <View style={{ marginLeft: 20, }}>
            <Title
              style={[styles.title, {
                marginTop: 15,
                marginBottom: 5,
              }]}
            >
              {name}
            </Title>
            <Caption style={styles.caption}>@{user.email}</Caption>

          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>

        <View style={styles.row}>
          <Icon name="phone" color="#777777" size={20} />
          <Text style={{ color: "#000", marginLeft: 20, fontWeight: 'bold' }}>{phoneNumber}</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#777777" size={20} />
          <Text style={{ color: "#000", marginLeft: 20, fontWeight: 'bold' }}>{user.email}</Text>
        </View>
      </View>

      <View style={styles.profileContainer}>

        <TouchableOpacity
          onPress={toggleOverlay}>
          <View style={[styles.profileItem, { backgroundColor: '#8F6DD8' }]}>
            <Icon name="account-edit" color="#FF6347" size={25} />
            <Text style={[styles.profileItemText, { color: '#fff' }]}>แก้ไขข้อมูลส่วนตัว</Text>
          </View>
        </TouchableOpacity>

        <TouchableRipple>
          <View style={styles.profileItem}>
            <Icon name="calendar-today" color="#FF6347" size={25} />
            <Text style={styles.profileItemText}>วันเกิด  </Text>
            <Text style={{ fontSize: 20 }}>   {birthDate}</Text>
          </View>
        </TouchableRipple>

        <TouchableRipple>
          <View style={styles.profileItem}>
            <Icon name="human-male-male" color="#FF6347" size={25} />
            <Text style={styles.profileItemText}>เพศ  </Text>
            <Text style={{ fontSize: 20 }}>   {gender}</Text>
          </View>
        </TouchableRipple>

        <TouchableRipple>
          <View style={styles.profileItem}>
            <Icon name="weight-kilogram" color="#FF6347" size={25} />
            <Text style={styles.profileItemText}>น้ำหนัก </Text>
            <Text style={{ fontSize: 20 }}>   {weight}</Text>
          </View>
        </TouchableRipple>

        <TouchableRipple>
          <View style={styles.profileItem}>
            <Icon name="human-male-height" color="#FF6347" size={25} />
            <Text style={styles.profileItemText}>ส่วนสูง  </Text>
            <Text style={{ fontSize: 20 }}>   {height}</Text>
          </View>
        </TouchableRipple>

        <TouchableRipple>
          <View style={styles.profileItem}>
            <MaterialIcons name="work" color="#FF6347" size={25} />
            <Text style={styles.profileItemText}>อาชีพ </Text>
            <Text style={{ fontSize: 20 }}>   {career}</Text>
          </View>
        </TouchableRipple>

        <TouchableOpacity onPress={() => logout()}>
          <View style={styles.profileItem}>
            <Icon name="logout" color="#FF6347" size={25} />
            <Text style={styles.profileItemText}>ออกจากระบบ</Text>
          </View>
        </TouchableOpacity>
      </View>

      <OverlayEditName isVisible={visible} onBackdropPress={toggleOverlay}>

        <View style={styles.profileContainerOverlay}>

          <View style={styles.editBox}>
            <Icon name="account-edit" color="#FF6347" size={25} />
            <TextInput
              placeholder="ชื่อ"
              placeholderTextColor="#666"
              onChangeText={setName}
              style={styles.input}
            //keyboardType='numeric'
            />
          </View >

          <View style={styles.editBox}>
            <Icon name="phone" color="#FF6347" size={25} />
            <TextInput
              placeholder="เบอร์โทร"
              placeholderTextColor="#666"
              onChangeText={setPhoneNumber}
              keyboardType='numeric'
              style={styles.input}
            >
            </TextInput>
          </View>

          <View style={styles.editBox}>
            <Icon name="calendar-today" color="#FF6347" size={25} />
            <TextInput
              placeholder="วันเกิด"
              placeholderTextColor="#666"
              onChangeText={setBirthDate}
              //keyboardType=''
              style={styles.input}
            >
            </TextInput>
          </View>

          <View style={styles.editBox}>
            <Icon name="human-male-male" color="#FF6347" size={25} />
            <TextInput
              placeholder="เพศ"
              placeholderTextColor="#666"
              onChangeText={setGender}
              style={styles.input}
            >
            </TextInput>
          </View>

          <View style={styles.editBox}>
            <Icon name="weight-kilogram" color="#FF6347" size={25} />
            <TextInput
              placeholder="น้ำหนัก"
              placeholderTextColor="#666"
              onChangeText={setWeight}
              style={styles.input}
              keyboardType='numeric'
            >
            </TextInput>
          </View>

          <View style={styles.editBox}>
            <Icon name="human-male-height" color="#FF6347" size={25} />
            <TextInput
              placeholder="ส่วนสูง"
              placeholderTextColor="#666"
              onChangeText={setHeight}
              style={styles.input}
              keyboardType='numeric'
            >
            </TextInput>
          </View>

          <View style={styles.editBox}>
            <MaterialIcons name="work" color="#FF6347" size={25} />
            <TextInput
              placeholder="อาชีพ"
              placeholderTextColor="#666"
              onChangeText={setCareer}
              style={styles.input}
            >
            </TextInput>
          </View>

          <TouchableOpacity
            onPress={twoFunc}
          >
            <View style={styles.profileItem}>
              <Icon name="content-save-edit-outline" color="#FF6347" size={25} />
              <Text style={styles.profileItemText}>บันทึก</Text>
            </View>
          </TouchableOpacity>
        </View>


      </OverlayEditName>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
    //backgroundColor: Colors.primary
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  profileContainer: {
    marginTop: 10,
  },
  profileContainerOverlay: {
    width: '75%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignItems: 'center'
  },
  profileItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 26,
  },
  editBox: {
    borderColor: "#FF6347",
    flexDirection: "row",
    alignItems: 'center',
    width: "100%",
    borderWidth: 2,
    borderRadius: 7,
    marginVertical: 5,
    //padding: 2
  },
  input: {
    flex: 1,
  }
});

export default ProfileScreen;