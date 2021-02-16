//อาการ
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

const PanicSymtomp1Screen = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.box} >
                    <View style={styles.inner} >
                        <Text style={styles.text} >

                            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>อาการของโรคแพนิค</Text> {'\n'}

                            {'\t'}{'\t'}
                            ผู้ป่วยโรคแพนิคจะรู้สึกหวาดกลัวหรือตื่นตระหนกอย่างไม่มีสาเหตุ ซึ่งเรียกว่า อาการแพนิค โดยอาการนี้จะเกิดขึ้นกะทันหัน รวมทั้งเกิดขึ้นได้ตลอดเวลา แพนิคเป็นอาการที่รุนแรงกว่าความรู้สึกเครียดทั่วไป มักเกิดขึ้นเป็นเวลา 10-20 นาที บางรายอาจเกิดอาการแพนิคนานเป็นชั่วโมง โดยผู้ป่วยโรคแพนิคจะเกิดอาการ ดังนี้ {'\n'}
                            {'\n'}{'\t'}- หัวใจเต้นเร็ว
                            {'\n'}{'\t'}- หายใจไม่ออก รู้สึกเหมือนขาดอากาศ
                            {'\n'}{'\t'}- หวาดกลัวอย่างรุนแรงจนร่างกายขยับไม่ได้
                            {'\n'}{'\t'}- เวียนศีรษะหรือรู้สึกคลื่นไส้
                            {'\n'}{'\t'}- เหงื่อออกและมือเท้าสั่น
                            {'\n'}{'\t'}- รู้สึกหอบและเจ็บหน้าอก
                            {'\n'}{'\t'}- รู้สึกร้อนวูบวาบ หรือหนาวขึ้นมาอย่างกะทันหัน
                            {'\n'}{'\t'}- เกิดอาการเหน็บคล้ายเข็มทิ่มที่นิ้วมือหรือเท้า
                            {'\n'}{'\t'}- วิตกกังวลหรือหวาดกลัวว่าจะตายรวมทั้งรู้สึกว่าไม่สามารถควบคุมสิ่งต่าง ๆ ในชีวิตได้
                            {'\n'}{'\t'}- กังวลว่าจะมีเหตุการณ์อันตรายเกิดขึ้นในอนาคต
                            {'\n'}{'\t'}- หวาดกลัวและพยายามหลีกเลี่ยงสถานที่หรือสถานการณ์อันตรายที่ทำให้รู้สึกหวาดกลัวในอดีต

                            {'\n'}{'\n'}{'\t'}{'\t'}ทั้งนี้ ผู้ที่เกิดอาการแพนิคควรพบแพทย์ทันที เนื่องจากอาการแพนิคถือว่าเป็นปัญหาสุขภาพที่ร้ายแรง ผู้ที่เกิดอาการดังกล่าวจะจัดการ ตัวเองได้ยาก ทั้งนี้ หากไม่ได้รับการรักษาให้หาย อาการแพนิคจะแย่ลงเรื่อย ๆ
                    </Text>
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.6}
                        onPress={() => navigation.navigate("PanicSymtomp")}
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

export default PanicSymtomp1Screen;