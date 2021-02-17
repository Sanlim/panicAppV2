import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Picker } from '@react-native-community/picker';
import firestore from '@react-native-firebase/firestore'
import moment from 'moment'
import { Slider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather'

const Item = Picker.Item;

const RecordScreen = ({ navigation }) => {
    //const [value, setValue] = useState(5)

    const usersCollectionRef = firestore().collection('อาการ');

    const chkData = [
        { damage: 0, name: '1 ใจเต้นเร็วและรัว' },
        { damage: 0, name: '2 เหงื่อแตก' },
        { damage: 0, name: '3 ตัวสั่น' },
        { damage: 0, name: '4 อึดอัดหายใจไม่ออก ' },
        { damage: 0, name: '5 หายใจติดขัดไม่สะดวก' },
        { damage: 0, name: '6 รู้สึกมึนงง วิงเวียนศรีษะเป็นลม' },
        { damage: 0, name: '7 รู้สึกหนาวๆ ร้อนๆ' },
        { damage: 0, name: '8 ตัวชาหรือเป็นเหน็บ' },
        { damage: 0, name: '9 รู้สึกไม่เป็นตัวของตัวเอง' },
        { damage: 0, name: '10 กลัวที่จะเสียสติ' },
        { damage: 0, name: '11 กลัวว่าอาจตายได้' }
    ]

    //Damage
    //const [valueDam, setValueDam] = useState(0);
    const [arrDam, setArrDam] = useState(chkData)
    const onDamageChange = (index, value) => {
        let newArrDam = [...arrDam]
        newArrDam[index].damage = value;
        setArrDam(newArrDam)
    }

    //console.log(arrDam.damage);

    const recordSymps = () => {
        usersCollectionRef.doc(moment().format('MMM Do YYYY h:mm:ss a')).set({
            //dateTime: now,
            "อาการ": arrDam
        })
        //console.log(arrDam);
    }

    return (
        <ScrollView>
            <View style={styles.container}>

                <View style={styles.chBox} >

                    <View style={styles.chBox1}>
                        <Text
                            style={{
                                fontSize: 26,
                                fontWeight: 'bold',
                                padding: 10
                            }}
                        >บันทึกอาการ</Text>

                        {/* <View style={styles.checkBoxContainer}>
                            <Text style={styles.text}>อาการที่เกิดขึ้น</Text>
                            <Text>                                         </Text>
                            <Text style={styles.text}>ความรุนแรง</Text>
                        </View> */}

                        {arrDam.map((chk, index) => (
                            <View
                                key={index.toString()}
                                style={{
                                    flex: 1,
                                    alignItems: 'stretch',
                                    justifyContent: 'center',
                                    width: '90%',
                                    position: 'relative',
                                    left: '3%',
                                    backgroundColor: '#FFDAC1',
                                    borderRadius: 10,
                                    margin: 10,
                                }}>
                                <View style={{ marginTop: 10, alignItems: 'center' }}>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{chk.name}</Text>
                                </View>
                                <View style={{ width: '90%', left: '5%', position: 'relative' }}>
                                    <Slider
                                        value={chk.damage}
                                        onValueChange={(value) => onDamageChange(index, value)}
                                        maximumValue={10}
                                        minimumValue={0}
                                        step={1}
                                        trackStyle={{ height: 10 }}
                                        thumbStyle={{ height: 20, width: 20, backgroundColor: "#000" }}
                                        minimumTrackTintColor="red"
                                        maximumTrackTintColor="green"
                                    />
                                </View>
                                <View
                                    key={index.toString()}
                                    style={{
                                        marginBottom: 10,
                                        alignItems: 'center',
                                        flexDirection: 'row',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <Text style={{ fontSize: 20 }}>ความรุนแรง: </Text>
                                    <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{chk.damage}</Text>
                                </View>
                            </View>
                        ))}

                        {/* ลิสต์อาการ
                        {arrDam.map((chk, index) => (
                            <View key={index.toString()} style={styles.checkBoxContainer}>
                                <View style={styles.textContainer}>
                                    <Text style={styles.text}>{chk.name}</Text>
                                </View>
                                <View style={styles.pickerContainer} >
                                    <Picker
                                        selectedValue={valueDam}
                                        onValueChange={(v) => onDamageChange(index, v)}
                                        mode="dropdown"
                                    >
                                        <Item label="0" value={0} />
                                        <Item label="1" value={1} />
                                        <Item label="2" value={2} />
                                        <Item label="3" value={3} />
                                        <Item label="4" value={4} />
                                        <Item label="5" value={5} />
                                        <Item label="6" value={6} />
                                        <Item label="7" value={7} />
                                        <Item label="8" value={8} />
                                        <Item label="9" value={9} />
                                        <Item label="10" value={10} />
                                    </Picker>
                                </View>
                            </View>
                        ))} */}

                    </View>
                    <TouchableOpacity
                        activeOpacity={0.6}
                        onPress={() => navigation.navigate("Summary", {
                            arrDam: arrDam
                        }, recordSymps())}
                    >
                        <View style={styles.button} >
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>บันทึก</Text>
                        </View>
                    </TouchableOpacity>


                </View>

            </View>
            <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => navigation.navigate("Report")}
            >
                <View style={{ alignItems: 'center', width: '75%', position: 'relative', left: '17%', margin: 10 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', textDecorationLine: 'underline' }}>
                        แสดงกราฟความสัมพันธ์ของอาการและระดับความรุนแรง
                                    </Text>
                </View>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    chBox: {
        flex: 1,
    },
    chBox1: {
        flex: 1,
        margin: 5,
    },
    chBox2: {
        flex: 1,
        padding: 5
    },
    checkBoxContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        margin: 5,
        backgroundColor: '#fff',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#a6e4d0',
        padding: 10,
        width: 150,
        margin: 10,
        borderRadius: 3,
        marginHorizontal: '60%'
    },
    textContainer: {
        width: '65%'
    },
    text: {
        fontSize: 18,
    },
    pickerContainer: {
        flex: 1,
        marginLeft: 45
        //flexDirection:'row'
    }
});

export default RecordScreen;