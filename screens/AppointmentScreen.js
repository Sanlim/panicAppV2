import React, { useState } from 'react';
import { StyleSheet, Text, Alert, TouchableOpacity, View, Modal, FlatList, TouchableHighlight } from 'react-native';
import { windowHeight, windowWidth } from '../utils/Dimensions';
import ListAppointment from '../components/ListAppointment';
import uuid from 'uuid-random';
import DatePicker from 'react-native-date-picker';
import AppointmentMPK from '../components/AppointmentMPK';


const AppointmentScreen = () => {
    const [selectData, setSelectData] = useState('เลือกสถานที่...');
    const [isModalTimeVisible, setIsModalTimeVisible] = useState(false);
    const [isModalPlaceVisible, setIsModalPlaceVisible] = useState(false);
    const [date, setDate] = useState(new Date());

    const changeModalVisibility = (bool) => {
        setIsModalPlaceVisible(bool)
    }

    const setData = (option) => {
        setSelectData(option)
        console.log(selectData);
    }

    //rebuild time string
    let dateSelect = date.toLocaleDateString();
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
        setItems((prevItems) => {
            return prevItems.filter((items) => items.id != id);
        });
    };


    const addItem = (date, time, place) => {
        if (!(date && time && place)) {
            Alert.alert(
                'Error',
                'กรุณาใส่ข้อมูล',
                [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
                { cancelable: true },
            );
        } else {
            setItems((prevItems) => {
                return [{ id: uuid(), date, time, place }, ...prevItems];
            });
        }
    };


    return (
        <View style={styles.centeredView}>

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
                visible={isModalPlaceVisible}
                onRequestClose={() => changeModalVisibility(false)}
            >
                <AppointmentMPK
                    changeModalVisibility={changeModalVisibility}
                    setData={setData}
                />
            </Modal>

            <View
                style={{
                    alignItems: 'center',
                    borderRadius: 7,
                    backgroundColor: 'lightblue',
                    width: '80%',
                    left: '11%',
                    padding: 5
                }}
            >
                <Text style={{ fontSize: 30 }}>
                    วัน {dateSelect}
                    {'\n'}
                    เวลา {time} น.
                </Text>
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalTimeVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>เลือกวันและเวลา</Text>
                        <DatePicker locale="th-TH" date={date} onDateChange={setDate} />
                        <TouchableHighlight
                            style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
                            onPress={() => {
                                setIsModalTimeVisible(!isModalTimeVisible)
                            }}>
                            <Text style={styles.textStyle}>ตกลง</Text>
                        </TouchableHighlight>
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
                activeOpacity={0.6}
                onPress={() => addItem(dateSelect, time, selectData)}>
                <View style={styles.button}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>บันทึก</Text>
                </View>
            </TouchableOpacity>

            <View style={{ flex: 0.98, width: '70%', borderRadius: 7, left: '13%' }}>
                <FlatList
                    data={items}
                    renderItem={({ item }) => (
                        <ListAppointment item={item} deleteItem={deleteItem} />
                    )}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        //alignItems: "center",
        marginTop: 15,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 7,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        zIndex: 0,
    },
    openButton: {
        backgroundColor: '#F194FF',
        borderRadius: 7,
        padding: 10,
        width: 200,
        marginHorizontal: '25%',
        //elevation: 2,
        marginVertical: 15
    },
    textStyle: {
        color: '#000',
        textAlign: 'center',
        fontSize: 20,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 25,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#a6e4d0',
        padding: 10,
        width: 150,
        marginBottom: 10,
        borderRadius: 7,
        marginHorizontal: '30%',
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
        marginHorizontal: 15,
        marginBottom: 15
    }
});

export default AppointmentScreen;