import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Overlay } from 'react-native-elements';
import Icons from 'react-native-vector-icons/dist/MaterialIcons'

const PanicTestScreen = () => {

    const [visible, setVisible] = useState(false);
    const [res, setRes] = useState();

    const chkData_1 = [
        { name: '1 ใจเต้นเร็วและรัว', value: false },
        { name: '2 เหงื่อแตก', value: false },
        { name: '3 ตัวสั่น', value: false },
        { name: '4 อึดอัดหายใจไม่ออก ', value: false },
        { name: '5 หายใจติดขัดไม่สะดวก', value: false },
        { name: '6 รู้สึกมึนงง วิงเวียนศรีษะ', value: false },
        { name: '7 รู้สึกหนาวๆ ร้อนๆ', value: false },
        { name: '8 ตัวชาหรือเป็นเหน็บ', value: false },
        { name: '9 รู้สึกไม่เป็นตัวของตัวเอง', value: false },
        { name: '10 กลัวที่จะเสียสติ', value: false },
        { name: '11 กลัวว่าอาจตายได้', value: false }
    ]

    const chkData_2 = [
        {
            name: 'ยังคงรู้สึกวิตกกังวลเกี่ยวกับอาการแพนิคที่เกิดขึ้นไปแล้วหรือกังวลถึงผลที่เกิดขึ้นตามมา เช่นการเสียการควบคุมตนเอง อาการเสียสติ อาการหัวใจวาย', value: false
        },
        {
            name: 'มีพฤติกรรมที่เปลี่ยนไปอย่างเห็นได้ชัด เช่น หลีกเลี่ยงสถานการณ์ที่จะทำให้เกิดอาการแพนิคไม่ออกกำลังกายเลี่ยงสถานการณ์ที่ไม่คุ้นเคย เป็นต้น', value: false
        }
    ]
    const [chkTrueCount, setChkTrueCount] = useState(0)
    const [chkTrueCount_2, setChkTrueCount_2] = useState(0)

    const [arrChk_1, setArrChk_1] = useState(chkData_1)
    const onChkBoxChange_1 = (index) => {
        let newArrChk = [...arrChk_1]
        newArrChk[index].value = !newArrChk[index].value;
        setArrChk_1(newArrChk)
        let chkTrue = arrChk_1.filter((chk) => chk.value)
        setChkTrueCount(chkTrue.length)
    }

    const [arrChk_2, setArrChk_2] = useState(chkData_2)
    const onChkBoxChange_2 = (index) => {
        let newArrChk = [...arrChk_2]
        newArrChk[index].value = !newArrChk[index].value;
        setArrChk_2(newArrChk)
        let chkTrue = arrChk_2.filter((chk) => chk.value)
        setChkTrueCount_2(chkTrue.length)
    }

    const selectionHandler_chk_1 = (ind) => {
        let arr = arrChk_1.map((item, index) => {
            if (ind === index)
                item.isSelected = !item.isSelected;
            return { ...item }
        })
        setArrChk_1(arr)
    }

    const selectionHandler_chk_2 = (ind) => {
        let arr = arrChk_2.map((item, index) => {
            if (ind === index)
                item.isSelected = !item.isSelected;
            return { ...item }
        })
        setArrChk_2(arr)
    }

    const twoFunc_chk_1 = (index) => {
        selectionHandler_chk_1(index);
        onChkBoxChange_1(index);
    }

    const twoFunc_chk_2 = (index) => {
        selectionHandler_chk_2(index);
        onChkBoxChange_2(index);
    }

    const toggleOverlay = () => {
        setVisible(!visible)
        setArrChk_1(chkData_1)
        setArrChk_2(chkData_2)
        setChkTrueCount(0)
        setChkTrueCount_2(0)
    };

    const result = () => {
        if (chkTrueCount_2 == 0) {
            if (chkTrueCount == 0) {
                setRes('ไม่สามารถประเมินผลได้ กรุณากรอกข้อมูล')
            }
            else {
                setRes('ท่านไม่มีความเสี่ยงในการเป็นโรคแพนิค')
            }
        }
        else if (chkTrueCount_2 >= 1) {
            if (chkTrueCount >= 4) {
                setRes('ท่านมีความเสี่ยงในการเป็นโรคแพนิค ควรปรึกษาแพทย์')
            }
            else {
                setRes('ท่านไม่มีความเสี่ยงในการเป็นโรคแพนิค')
            }
        }
    }

    const twoFunc = () => {
        toggleOverlay();
        result();
    }

    return (
        <ScrollView>
            <View style={styles.container}>

                <View style={styles.chBox} >

                    <View style={styles.chBox1}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 10 }}>
                            ส่วนที่ 1
                        </Text>
                        <Text style={{ fontSize: 17, padding: 5, margin: 5 }}>
                            {'\t'}{'\t'}โรคแพนิคเป็นอาการที่เกิดขึ้นแบบจู่โจม รู้สึกกลัวหรือตื่นตระหนกอย่างฉับพลันภายในไม่กี่นาที
                            โดยระหว่างที่ท่านมีอาการแพนิค ท่านมีอาการต่างๆเหล่านี้ร่วมด้วยอย่างน้อย 4 อย่างหรือไม่
                        </Text>

                        <View style={{ backgroundColor: '#B5985A', margin: 5, borderRadius: 15 }}>
                            {arrChk_1.map((chk, index) => (
                                <View key={index.toString()} style={{ margin: 10, }}>
                                    <TouchableOpacity
                                        activeOpacity={0.6}
                                        onPress={() => twoFunc_chk_1(index)}
                                    >
                                        <View style={{
                                            backgroundColor: '#FFF0F3',
                                            width: '100%',
                                            height: 55,
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            borderRadius: 20,
                                            padding: '2%',
                                            flexDirection: 'row'
                                        }}>
                                            <Text style={{ fontSize: 20, color: 'black' }}>{chk.name}</Text>
                                            {
                                                chk.isSelected
                                                    //เลือก
                                                    ? <Icons name="radio-button-checked" color="green" size={30} />
                                                    //ไม่เลือก
                                                    : <Icons name="radio-button-unchecked" color="red" size={30} />
                                            }
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            ))}
                        </View>
                    </View>

                    <View style={styles.chBox1}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 10 }}>
                            ส่วนที่ 2
                        </Text>
                        <Text style={{ fontSize: 17, padding: 5, margin: 5 }}>
                            {'\t'}{'\t'}เมื่อท่านมีอาการแพนิคท่านเคยมีอาการตามข้อด้านล่างนี้
                            ไม่ว่าจะข้อใดข้อหนึ่งหรือทั้งสองข้อเป็นระยะเวลา 1 เดือนหรือมากกว่าบ้างไหม
                        </Text>
                        <View style={{ backgroundColor: '#B5985A', margin: 5, borderRadius: 15 }}>
                            {arrChk_2.map((chk, index) => (
                                <View key={index.toString()} style={{ margin: 10, }}>
                                    <TouchableOpacity
                                        activeOpacity={0.6}
                                        onPress={() => twoFunc_chk_2(index)}
                                    >
                                        <View style={{
                                            backgroundColor: '#FFF0F3',
                                            width: '100%',
                                            height: 150,
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            borderRadius: 20,
                                            padding: '2%',
                                        }}>
                                            <Text style={{ fontSize: 18, color: 'black' }}>{chk.name}</Text>
                                            {
                                                chk.isSelected
                                                    //เลือก
                                                    ? <Icons name="radio-button-checked" size={30} color="green" />
                                                    //ไม่เลือก
                                                    : <Icons name="radio-button-unchecked" size={30} color="red" />
                                            }
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            ))}
                        </View>
                    </View>

                    <TouchableOpacity
                        activeOpacity={0.6}
                        onPress={() => twoFunc()}
                    >
                        <View style={styles.button} >
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>ประเมินผล</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <Overlay
                isVisible={visible}
                onBackdropPress={toggleOverlay}
                overlayStyle={{ width: '95%', height: '15%', justifyContent: 'center' }}
            >
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{res}</Text>
            </Overlay>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    chBox: {
        flex: 1,
    },
    chBox1: {
        flex: 1,
        margin: 5
    },
    chBox2: {
        flex: 1,
        padding: 5
    },
    checkBoxContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        margin: 5
    },
    checkBoxContainer2: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        margin: 5,
        marginRight: 30
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#a6e4d0',
        padding: 10,
        width: 150,
        margin: 10,
        marginBottom: 30,
        borderRadius: 3,
        marginHorizontal: '60%'
    },
    text: {
        fontSize: 16,
    }
});

export default PanicTestScreen;