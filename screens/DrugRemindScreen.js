import React, { useState } from 'react';
import { StyleSheet, Text, Alert, TouchableOpacity, View, Modal, FlatList, TouchableHighlight } from 'react-native';
import { windowHeight, windowWidth } from '../utils/Dimensions';
import ListItem from '../components/ListItem';
import uuid from 'uuid-random';
import { Picker } from '@react-native-community/picker';
import DatePicker from 'react-native-date-picker';

const Item = Picker.Item;

const DrugRemindScreen = () => {
    const [med, setMed] = useState('');
    const [dose, setDose] = useState('0');
    const [modalVisible, setModalVisible] = useState(false);
    const [date, setDate] = useState(new Date());

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
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
                { cancelable: true });
        } else {
            setItems(prevItems => {
                return [{ id: uuid(), med, dose, time }, ...prevItems]
            })
        }
    }

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>รายละเอียด</Text>


            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={med}
                    onValueChange={(v) => setMed(v)}
                    mode="dropdown"
                >
                    <Item label="Fluoxetine" value="Fluoxetine" />
                    <Item label="Sertraline" value="Sertraline" />
                    <Item label="Paroxetine" value="Paroxetine" />
                </Picker>
            {/* </View>

            <View style={styles.pickerContainer}> */}
                <Picker
                    selectedValue={dose}
                    onValueChange={(v) => setDose(v)}
                    mode="dropdown"
                >
                    <Item label="1" value="1" />
                    <Item label="2" value="2" />
                    <Item label="3" value="3" />
                    <Item label="4" value="4" />
                </Picker>
            </View>


            <View style={{ 
                alignItems: 'center',
                backgroundColor: "#B5EAD7",
                margin: 15,
                width: '50%',
                height: '7%',
                justifyContent: 'center',
                borderRadius: 10
            }}>
                <Text style={{ fontSize: 24 }}>
                    เวลา {time} น.
                </Text>
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    //Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}
            //onDismiss={}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>เลือกวันและเวลา</Text>
                        <DatePicker locale="th-TH" date={date} onDateChange={setDate} mode="time" />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', left: '-7.5%' }}>
                            <TouchableHighlight
                                style={{ ...styles.confirmButton, backgroundColor: '#2196F3' }}
                                onPress={() => {
                                    setModalVisible(!modalVisible);
                                }}>
                                <Text style={styles.textStyle}>ตกลง</Text>
                            </TouchableHighlight>
                            <TouchableHighlight
                                style={{ ...styles.confirmButton, backgroundColor: '#ED1616' }}
                                onPress={() => {
                                    setModalVisible(!modalVisible);
                                }}>
                                <Text style={styles.textStyle}>ยกเลิก</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            </Modal>

            <TouchableHighlight
                style={styles.openButton}
                onPress={() => {
                    setModalVisible(true);
                }}>
                <Text style={styles.textStyle}>เลือกวันและเวลา</Text>
            </TouchableHighlight>

            <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => addItem(med, dose, time)}
            >
                <View style={styles.button} >
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>บันทึก</Text>
                </View>
            </TouchableOpacity>

            <FlatList
                data={items}
                renderItem={({ item }) => (
                    <ListItem item={item} deleteItem={deleteItem} />
                )}
            />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
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
    input: {
        padding: 10,
        //flex: 1,
        fontSize: 16,
        //fontFamily:'Lato-Regular',
        color: '#333',
        justifyContent: 'center',
        alignItems: 'center',

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
        backgroundColor: '#FFFFFF'
    },
    pickerContainer: {
        padding: 10,
        width: '50%',
        marginVertical: 8,
        borderColor: '#fff',
        backgroundColor: '#B5EAD7',
        borderRadius: 10
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        //alignItems: "center",
        //marginTop: 50,
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
        borderRadius: 10,
        padding: 10,
        width: 200,
        marginHorizontal: '25%',
        //elevation: 2,
    },
    confirmButton: {
        backgroundColor: '#F194FF',
        borderRadius: 15,
        padding: 10,
        width: 100,
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
});

export default DrugRemindScreen;