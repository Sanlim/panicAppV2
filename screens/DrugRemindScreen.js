import React, { useEffect, useState, useContext } from 'react';
import {
    StyleSheet,
    Text,
    Alert,
    TouchableOpacity,
    View,
    Modal,
    FlatList,
    TouchableHighlight,
    SafeAreaView
} from 'react-native';
import ListItem from '../components/ListItem';
import uuid from 'uuid-random';
import DatePicker from 'react-native-date-picker';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import ModalPicker from '../components/ModalPicker';

import { AuthContext } from '../navigation/AuthProvider';
import firestore from '@react-native-firebase/firestore'
import moment from 'moment'

const DrugRemindScreen = () => {
    const [dose, setDose] = useState(0);
    const [selectData, setSelectData] = useState('เลือกยา...');
    const [isModalTimeVisible, setIsModalTimeVisible] = useState(false);
    const [isModalMedVisible, setIsModalMedVisible] = useState(false);
    const [date, setDate] = useState(new Date());

    const { user } = useContext(AuthContext);
    const usersCollectionRef = firestore().collection('Users').doc(user.email).collection('เตือนกินยา');


    const changeModalVisibility = (bool) => {
        setIsModalMedVisible(bool)
    }

    const setData = (option) => {
        setSelectData(option)
        console.log(selectData);
    }

    //rebuild time string
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let time;

    if (minutes < 10) {
        time = hours + ':0' + minutes;
    } else {
        time = hours + ':' + minutes;
    }

    const [items, setItems] = useState([]);

    const deleteItem = (id) => {
        setItems(prevItems => {
            return prevItems.filter(items => items.id != id)
        })
    }

    const addItem = (med, dose, time) => {
        if (!(med && dose && time)) {
            Alert.alert('Error', 'กรุณาใส่ข้อมูล', [
                { text: "OK" }
            ],
                { cancelable: true });
        } else {
            setItems(prevItems => {
                return [{ id: uuid(), med, dose, time }, ...prevItems]
            })
        }
    }

    const remindDrug = () => {
        usersCollectionRef.doc(moment().format('MMM Do YYYY h:mm:ss a')).set({
            //dateTime: now,
            "เวลาเตือน": items
        })
    }

    useEffect(() => {
        setDose(0)
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginVertical: 10 }}>รายละเอียด</Text>

            <TouchableOpacity
                style={styles.selectBtn}
                onPress={() => changeModalVisibility(true)}
            >
                <Text
                    style={styles.text}
                >
                    {selectData}
                </Text>
            </TouchableOpacity>

            <Modal
                transparent={true}
                animationType="slide"
                visible={isModalMedVisible}
                onRequestClose={() => changeModalVisibility(false)}
            >
                <ModalPicker
                    changeModalVisibility={changeModalVisibility}
                    setData={setData}
                />
            </Modal>

            <View
                style={{
                    backgroundColor: 'lightgreen',
                    padding: 10,
                    marginBottom: 15,
                    borderRadius: 7,
                    flexDirection: 'row',
                    marginVertical: 10
                }}
            >
                <Text
                    style={{
                        fontSize: 22,
                        fontWeight: '200'
                    }}
                >
                    จำนวน {dose} เม็ด
                </Text>
            </View>

            <View
                style={{
                    flexDirection: 'row',
                }}
            >
                <TouchableOpacity
                    style={{
                        backgroundColor: "#81C43F",
                        alignItems: 'center',
                        padding: 5,
                        borderRadius: 7,
                        marginRight: 20
                    }}
                    onPress={() => setDose(prevDose => prevDose - 1)}
                >
                    <AntDesign name="minus" size={30} />
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        backgroundColor: "#81C43F",
                        alignItems: 'center',
                        padding: 5,
                        borderRadius: 7,
                        marginLeft: 20
                    }}
                    onPress={() => setDose(prevDose => prevDose + 1)}
                >
                    <AntDesign name="plus" size={30} />
                </TouchableOpacity>
            </View>


            <View style={{
                alignItems: 'center',
                backgroundColor: "#B5EAD7",
                margin: 15,
                width: '40%',
                height: '7%',
                justifyContent: 'center',
                borderRadius: 10
            }}>
                <Text style={{ fontSize: 22 }}>
                    เวลา {time} น.
                </Text>
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalTimeVisible}
                onRequestClose={() => {
                    setIsModalTimeVisible(!isModalTimeVisible);
                }}
            //onDismiss={}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>เลือกวันและเวลา</Text>
                        <DatePicker locale="th-TH" date={date} onDateChange={setDate} mode="time" />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', left: '-7.5%' }}>
                            <TouchableOpacity
                                style={styles.confirmButton}
                                onPress={() => {
                                    setIsModalTimeVisible(!isModalTimeVisible);
                                }}>
                                <Text style={[styles.textStyle, { color: 'blue' }]}>ตกลง</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.confirmButton}
                                onPress={() => {
                                    setIsModalTimeVisible(!isModalTimeVisible);
                                }}>
                                <Text style={[styles.textStyle, { color: 'red' }]}>ยกเลิก</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

            <TouchableHighlight
                style={styles.openButton}
                onPress={() => {
                    setIsModalTimeVisible(true);
                }}>
                <Text style={styles.textStyle}>เลือกวันและเวลา</Text>
            </TouchableHighlight>



            <TouchableOpacity
                style={{
                    backgroundColor: '#F1C27D',
                    marginTop: 10,
                    marginBottom: 10,
                    borderRadius: 7
                }}
                onPress={() => [addItem(selectData, dose, time), remindDrug()]}
            >
                <Text
                    style={{
                        fontSize: 20,
                        padding: 10
                    }}
                >
                    บันทึก
                </Text>
            </TouchableOpacity>

            <View style={{ flex: 0.98, width: '70%', borderRadius: 7 }}>
                <FlatList
                    data={items}
                    renderItem={({ item }) => (
                        <ListItem item={item} deleteItem={deleteItem} />
                    )}
                />
            </View>
        </SafeAreaView >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#a6e4d0',
        padding: 10,
        width: 150,
        margin: 10,
        borderRadius: 10,
        marginHorizontal: '60%'
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center'
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    openButton: {
        backgroundColor: '#F194FF',
        borderRadius: 10,
        padding: 10,
        width: 200,
        marginHorizontal: '25%',
    },
    confirmButton: {
        backgroundColor: '#ddd',
        borderRadius: 15,
        padding: 10,
        width: 100,
        marginHorizontal: '25%',
    },
    textStyle: {
        color: '#000',
        textAlign: 'center',
        fontSize: 20,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 20,
    },
    text: {
        marginVertical: 15,
        fontSize: 22
    },
    selectBtn: {
        backgroundColor: '#F1C27D',
        alignSelf: 'stretch',
        paddingHorizontal: 25,
        borderRadius: 7,
        marginHorizontal: 15
    }
});

export default DrugRemindScreen;