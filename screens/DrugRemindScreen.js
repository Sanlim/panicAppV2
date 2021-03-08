import React, { useState } from 'react';
import { StyleSheet, Text, Alert, TouchableOpacity, View, Modal, FlatList, TouchableHighlight } from 'react-native';
import { windowHeight, windowWidth } from '../utils/Dimensions';
import ListItem from '../components/ListItem';
import uuid from 'uuid-random';
import DatePicker from 'react-native-date-picker';
import Icons from 'react-native-vector-icons/dist/MaterialIcons'
import AntDesign from 'react-native-vector-icons/dist/AntDesign'
import { Overlay } from 'react-native-elements';
import { TextInput } from 'react-native-paper';


const DrugRemindScreen = () => {
    const [med, setMed] = useState('');
    const [dose, setDose] = useState('0');
    const [modalVisible, setModalVisible] = useState(false);
    const [date, setDate] = useState(new Date());
    const [visible, setVisible] = useState(false);

    const [name, setName] = useState('');

    const medicine = [
        { name: 'Fluoxetine', value: false },
        { name: 'Sertraline', value: false },
        { name: 'Imipramine', value: false },
        { name: 'Clorazepate', value: false },
    ]

    const [arrChk_1, setArrChk_1] = useState(medicine)
    const onChkBoxChange_1 = (index) => {
        let newArrChk = [...arrChk_1]
        newArrChk[index].value = !newArrChk[index].value;
        setArrChk_1(newArrChk)
    }

    const [arrMed, setArrMed] = useState(medicine);
    const addMed = (med) => {
        let newArrMed = [...arrMed];

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
                { text: "OK"}
            ],
                { cancelable: true });
        } else {
            setItems(prevItems => {
                return [{ id: uuid(), med, dose, time }, ...prevItems]
            })
        }
    }

    const toggleOverlay = () => {
        setVisible(!visible)
    };

    const selectionHandler_chk_1 = (ind) => {
        let arr = arrChk_1.map((item, index) => {
            if (ind === index)
                item.isSelected = !item.isSelected;
            setArrChk_1(item)
        })
    }

    const twoFunc_chk_1 = (index) => {
        selectionHandler_chk_1(index);
        onChkBoxChange_1(index);
    }

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>รายละเอียด</Text>

            <View style={{ justifyContent: 'center', marginVertical: 10, alignItems: 'center', backgroundColor: '#' }}>
                {
                    arrMed.map((med, index) => (
                        <TouchableOpacity
                            key={index.toString()}
                            style={{
                                backgroundColor: '#E0BBE4',
                                margin: 7,
                                padding: 10,
                                borderRadius: 5,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                width: 250,
                                height: 50
                            }}
                            onPress={() => twoFunc_chk_1(index)}
                        >
                            <Text style={{ fontSize: 22 }}>
                                {med.name}
                            </Text>
                            {
                                med.isSelected
                                    //เลือก
                                    ? <Icons name="radio-button-checked" size={28} color="green" />
                                    //ไม่เลือก
                                    : <Icons name="radio-button-unchecked" size={28} color="red" />
                            }
                        </TouchableOpacity>
                    ))
                }
            </View>

            <TouchableOpacity
                style={{
                    backgroundColor: "#81C43F",
                    alignItems: 'center',
                    padding: 10,
                    width: '28%',
                    borderRadius: 7,
                }}
                onPress={() => toggleOverlay()}
            >
                <Text style={{ fontSize: 22, marginBottom: 10, fontWeight: 'bold' }}>เพิ่มยา</Text>
                <AntDesign name="pluscircleo" size={28} />
            </TouchableOpacity>

            <Overlay
                isVisible={visible}
                onBackdropPress={toggleOverlay}
                overlayStyle={{ width: '95%', height: '40%', justifyContent: 'center', borderRadius: 10 }}
            >
                <TextInput
                    label="ชื่อยา"
                    value={name}
                    onChangeText={name => setName(name)}
                    style={{ fontSize: 22 }}
                />
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    marginTop: 10
                }}>
                    <TouchableOpacity
                        style={{
                            backgroundColor: 'blue',
                            padding: 7,
                            borderRadius: 7
                        }}
                        onPress={() => addMed(name) }
                    >
                        <Text style={{ fontSize: 20, color: '#fff' }}>ตกลง</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            backgroundColor: 'red',
                            padding: 7,
                            borderRadius: 7
                        }}
                    >
                        <Text style={{ fontSize: 20, color: '#fff' }}>ยกเลิก</Text>
                    </TouchableOpacity>
                </View>
            </Overlay>

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

        </View >
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