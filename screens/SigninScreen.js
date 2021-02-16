import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import { AuthContext } from '../navigation/AuthProvider';

const SigninScreen = ({ navigation }) => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const { login } = useContext(AuthContext)

  return (
    <View style={styles.container}>
      <Image
        //source={require('../assets/logo.png')}
        style={styles.logo}
      />
      <Text style={styles.text}>แอปพลิเคชันช่วยผู้ป่วยโรคแพนิค</Text>

      <FormInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="อีเมล"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="รหัสผ่าน"
        iconType="lock"
        secureTextEntry={true}
      />

      <FormButton
        buttonTitle="เข้าสู่ระบบ"
        onPress={() => login(email, password)}
      />
      
      {/*
      <TouchableOpacity style={styles.forgotButton} onPress={() => { }}>
        <Text style={styles.navButtonText}>ลืมรหัสผ่าน?</Text>
      </TouchableOpacity>

      
    <SocialButton
      buttonTitle="เข้าสู่ระบบด้วย Facebook"
      btnType="facebook"
      color="#4867aa"
      backgroundColor="#e6eaf4"
      onPress={() => { }}
    />

    <SocialButton
      buttonTitle="เข้าสู่ระบบด้วย Google"
      btnType="google"
      color="#de4d41"
      backgroundColor="#f5e7ea"
      onPress={() => { }}
    />
    */}

      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.navButtonText}>
          ยังไม่มีบัญชีผู้ใช้? สร้างบัญชีที่นี่
        </Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    height: 200,
    width: 200,
    resizeMode: 'cover',

  },
  text: {
    //fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 22,
    marginBottom: 20,
    color: '#051d5f',
    fontWeight: 'bold'
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    //fontFamily: 'Lato-Regular',
  },
});

export default SigninScreen;