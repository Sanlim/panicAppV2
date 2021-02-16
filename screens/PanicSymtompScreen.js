import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';



const PanicSymtompScreen = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.box} >
                    <View style={styles.inner} >
                        <Text style={styles.text} >

                            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>โรคแพนิค</Text> {'\n'}

                            {'\n'}{'\t'}{'\t'}ภาวะตื่นตระหนกต่อสิ่งใดสิ่งหนึ่งโดยไม่มีเหตุผลหรือหาสาเหตุไม่ได้ ซึ่งโรคนี้แตกต่างจากอาการหวาดกลัวหรือกังวลทั่วไป เนื่องจากผู้ป่วยจะเกิดอาการแพนิค (Panic Attacks) หรือหวาดกลัวอย่างรุนแรงทั้งที่ตัวเองไม่ได้เผชิญหน้าหรือตกอยู่ในสถานการณ์อันตราย อาการแพนิคเกิดขึ้นได้ตลอดเวลา ส่งผลให้ผู้ป่วยโรคแพนิครู้สึกกลัวและละอาย เนื่องจากไม่สามารถควบคุมตัวเองหรือดำเนินชีวิตประจำวันได้ตามปกติ{'\n'}{'\n'}

                            <TouchableOpacity
                                activeOpacity={0.6}
                                onPress={() => navigation.navigate("PanicSymtomp1")}
                            >
                                <View>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold',textDecorationLine: 'underline' }}>
                                        อาการของโรคแพนิค
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={0.6}
                                onPress={() => navigation.navigate("PanicSymtomp2")}
                            >
                                <View>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold',textDecorationLine: 'underline' }}>
                                        การป้องกันโรคแพนิค
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </Text>
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.6}
                        onPress={() => navigation.navigate("GeneralUser")}
                    >
                        <View style={styles.button} >
                            <Text style={{
                                fontSize: 20,
                                fontWeight: 'bold'
                            }}
                            >
                                กลับ
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '85%',
        padding: 10,
        flexDirection: 'column',
        flexWrap: 'wrap',
        backgroundColor: '#f9fafd'
    },
    box: {
        width: '100%',
        height: '100%',
        padding: 5,
    },
    inner: {
        flex: 1,
        //backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#a6e4d0',
        padding: 10,
        width: 100,
        margin: 10,
        borderRadius: 3,
        marginHorizontal: '70%'
    },
    text: {
        fontSize: 16,
        lineHeight: 27,
        letterSpacing: 1
    }
});

export default PanicSymtompScreen;