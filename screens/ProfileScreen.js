import React, { useContext, useState } from 'react';
import { SafeAreaView, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Avatar, Caption, Title, Text, TouchableRipple } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { AuthContext } from '../navigation/AuthProvider';

const ProfileScreen = ({ navigation }) => {
  const { user, logout } = useContext(AuthContext);
  //console.log(user);

  const [address, setAddress] = useState('')
  const [name, setName] = useState(user.email);
  const [phoneNumber, setPhoneNumber] = useState('+66 ')

  const [birthDate, setBirthDate] = useState();
  const [gender, setGender] = useState();
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [career, setCareer] = useState();
  
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: 'row', marginTop: 15 }}>
          <Avatar.Image
            source={require('../assets/profile.png')}
            size={80}
          />
          <View style={{ marginLeft: 20 }}>
            <Title style={[styles.title, {
              marginTop: 15,
              marginBottom: 5,
            }]}>{name}</Title>
            <Caption style={styles.caption}>@{user.email}</Caption>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>{address}</Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>{phoneNumber}</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>{user.email}</Text>
        </View>
      </View>

      <View style={styles.profileContainer}>

        <TouchableOpacity onPress={() => navigation.navigate("EditProfile")}>
          <View style={styles.profileItem}>
            <Icon name="account-edit" color="#FF6347" size={25} />
            <Text style={styles.profileItemText}>แก้ไขข้อมูลส่วนตัว</Text>
          </View>
        </TouchableOpacity>

        <TouchableRipple onPress={() => { }}>
          <View style={styles.profileItem}>
            <Icon name="calendar-today" color="#FF6347" size={25} />
            <Text style={styles.profileItemText}>วันเกิด {birthDate}</Text>
          </View>
        </TouchableRipple>

        <TouchableRipple onPress={() => { }}>
          <View style={styles.profileItem}>
            <Icon name="human-male-male" color="#FF6347" size={25} />
            <Text style={styles.profileItemText}>เพศ {gender}</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => { }}>
          <View style={styles.profileItem}>
            <Icon name="weight-kilogram" color="#FF6347" size={25} />
            <Text style={styles.profileItemText}>น้ำหนัก {weight}</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => { }}>
          <View style={styles.profileItem}>
            <Icon name="human-male-height" color="#FF6347" size={25} />
            <Text style={styles.profileItemText}>ส่วนสูง {height}</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => { }}>
          <View style={styles.profileItem}>
            <MaterialIcons name="work" color="#FF6347" size={25} />
            <Text style={styles.profileItemText}>อาชีพ {career}</Text>
          </View>
        </TouchableRipple>

        <TouchableOpacity onPress={() => logout()}>
          <View style={styles.profileItem}>
            <Icon name="logout" color="#FF6347" size={25} />
            <Text style={styles.profileItemText}>ออกจากระบบ</Text>
          </View>
        </TouchableOpacity>
      </View>

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
  profileItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  profileItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});

export default ProfileScreen;