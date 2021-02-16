import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { windowHeight, windowWidth } from '../utils/Dimensions';

const GeneralUserScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>แอปพลิเคชันช่วยผู้ป่วยโรคแพนิค</Text>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('PanicSymtomp')}
      >
        <Text style={styles.buttonText}>โรคแพนิคคืออะไร</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('PanicTest')}
      >
        <Text style={styles.buttonText}>แบบประเมินอาการแพนิค</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      style={styles.buttonSignup} 
      onPress={() => navigation.navigate('Signup')}
      >
        <Text style={styles.buttonText}>ลงทะเบียน</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      style={styles.buttonSignin} 
      onPress={() => navigation.navigate('Signin')}
      >
        <Text style={styles.buttonText}>เข้าสู่ระบบ</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  title: {
    marginBottom: 20,
    fontSize: 22,
    fontWeight: 'bold'
  },
  buttonContainer: {
    marginTop: 30,
    width: '100%',
    height: windowHeight / 15,
    backgroundColor: '#fff',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    //fontFamily: 'Lato-Regular',
  },
  buttonSignup: {
    marginTop: 60,
    width: '100%',
    height: windowHeight / 15,
    backgroundColor: '#a6e4d0',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
  buttonSignin: {
    marginTop: 30,
    width: '100%',
    height: windowHeight / 15,
    backgroundColor: '#a6e4d0',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  }
});

export default GeneralUserScreen;
