import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeTabScreen = ({ navigation }) => {
  return (

    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={{ fontSize: 22, fontWeight: 'bold' }}>หน้าแรก</Text>
      </View>

      <View style={styles.box}>
        <View style={styles.inner}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.navigate('Record')}
          >
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>บันทึกอาการ</Text>
            <View style={styles.iconButton}>
              <Icon name="clipboard-plus" color='#000' size={70} />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.box}>
        <View style={styles.inner}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.navigate('Remind')}
          >
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>การเตือน</Text>
            <View style={styles.iconButton} >
              <Icon name="clock" color='#000' size={70} />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.box}>
        <View style={styles.inner}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.navigate('Relax')}
          >
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>ผ่อนคลาย</Text>
            <View style={styles.iconButton} >
              <Icon name="music" color='#000' size={70} />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.box}>
        <View style={styles.inner}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.navigate('Profile')}
          >
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>ข้อมูลส่วนตัว</Text>
            <View style={styles.iconButton} >
              <Icon name="account" color='#000' size={70} />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.box}>
        <View style={styles.inner}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.navigate('Summary')}
          >
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>สรุปอาการ</Text>
            <View style={styles.iconButton} >
              <Icon name="view-list-outline" color='#000' size={70} />
            </View>
          </TouchableOpacity>
        </View>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: 25,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#fff'
  },
  box: {
    width: '50%',
    height: '30%',
    padding: 15,
  },
  inner: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    padding: 5
  },
  header: {
    width: '100%',
    height: '10%',
    alignItems: 'stretch'
  },
  iconButton: {
    flex: 1,
    marginTop: 60,
    marginLeft: 50

  }
});

export default HomeTabScreen;