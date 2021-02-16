import React, { useState } from 'react';
import { StyleSheet, Text, Alert, TouchableOpacity, View, Modal, FlatList, TouchableHighlight } from 'react-native';
import { windowHeight, windowWidth } from '../utils/Dimensions';
import ListAppointment from '../components/ListAppointment';
import uuid from 'uuid-random';
import DatePicker from 'react-native-date-picker';
import { Picker } from '@react-native-community/picker';

const Item = Picker.Item;

const AppointmentScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [date, setDate] = useState(new Date());

    const [place, setPlace] = useState();

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

    console.log(dateSelect, time, place);

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

    console.log(items);

    return (
        <View style={styles.centeredView}>
            <View style={{ alignItems: 'center', borderRadius: 20 }}>
                <Text style={{ fontSize: 30 }}>
                    วัน {dateSelect}
                    {'\n'}
                    เวลา {time} น.
                </Text>
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
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
                                setModalVisible(!modalVisible)
                            }}>
                            <Text style={styles.textStyle}>ตกลง</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>

            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={place}
                    onValueChange={(v) => setPlace(v)}
                    mode="dropdown"
                >
                    <Item label="รพ.ม.อ." value="รพ.ม.อ." />
                    <Item label="รพ.หาดใหญ่" value="รพ.หาดใหญ่" />
                </Picker>
            </View>

            <TouchableHighlight
                style={styles.openButton}
                onPress={() => {
                    setModalVisible(true);
                }}>
                <Text style={styles.textStyle}>เลือกวันและเวลา</Text>
            </TouchableHighlight>

            <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => addItem(dateSelect, time, place)}>
                <View style={styles.button}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>บันทึก</Text>
                </View>
            </TouchableOpacity>

            <View style={{ alignItems: 'center', flex: 1, width: 400 }}>
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
        marginTop: 50,
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
        elevation: 5,
        zIndex: 0,
      },
      openButton: {
        backgroundColor: '#F194FF',
        borderRadius: 20,
        padding: 10,
        width: 200,
        marginHorizontal: '25%',
        //elevation: 2,
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
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
        margin: 10,
        borderRadius: 20,
        marginHorizontal: '30%',
      },
      inputField: {
        padding: 10,
        marginTop: 5,
        marginBottom: 10,
        width: windowWidth / 1.5,
        height: windowHeight / 15,
        fontSize: 16,
        borderRadius: 8,
        borderWidth: 1,
        backgroundColor: '#FFFFFF',
      },
      pickerContainer: {
        padding: 10,
        width: '50%',
        marginLeft: '25%',
        borderColor: '#fff'
      },
});

export default AppointmentScreen;