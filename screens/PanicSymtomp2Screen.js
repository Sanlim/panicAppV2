import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

const PanicSymtomp2Screen = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.box} >
                    <View style={styles.inner} >
                        <Text style={styles.text} >

                            <Text style={{ fontWeight: 'bold' }}>การป้องกันโรคแพนิค</Text> {'\n'}

                            {'\t'}{'\t'}โรคแพนิคเป็นปัญหาสุขภาพทางจิตที่ป้องกันให้เกิดขึ้นได้ยาก อย่างไรก็ตามผู้ที่เกิดอาการแพนิคหรือป่วยเป็นโรคนี้สามารถดูแลตัวเองเพื่อไม่ให ้เกิดความเครียดมากขึ้น และเกิดอาการแพนิค น้อยลงได้ ดังนี้ {'\n'}
                            {'\n'}{'\t'}-งดหรือลดดื่มเครืองดื่มแอลกอฮอล์และเครื่องดื่มที่ผสมคาเฟอีน เช่น กาแฟ ชา โคล่า หรือช็อกโกแลต
                            {'\n'}{'\t'}-ปรึกษาแพทย์หรือเภสัชกรก่อนรับประทานยาหรือสมุนไพรรักษาอาการป่วยต่าง ๆ เนื่องจากผลิตภัณฑ์ดังกล่าวอาจมีส่วนประกอบที่กระตุ้นให้เกิดอาการแพนิคได้
                            {'\n'}{'\t'}-ออกกำลังกายอย่างสม่ำเสมอ รวมทั้งรับประทานอาหารที่มีประโยชน์ให้ครบถ้วน
                            {'\n'}{'\t'}-นอนหลับพักผ่อนให้เพียงพอ  เพื่อลดอาการ ง่วงเซื่องซึมระหว่างวัน
                            {'\n'}{'\t'}-เข้ารับการรักษาจากแพทย์อย่างต่อเนื่อง รวมทั้งฝึกรับมือกับความเครียด เช่น ฝึกหายใจลึก ๆ หรือเล่นโยคะ เพื่อให้รู้สึก ผ่อนคลายขึ้น
                            {'\n'}{'\t'}-ฝึกคิดหรือมองโลกในแง่บวก ลองนึกถึง สถานที่หรือเหตุการณ์ที่ทำให้จิตใจสงบหรือผ่อนคลายและเพ่งความสนใจไปที่ความคิดดังกล่าว วิธีนี้จะช่วยลดความฟุ้งซ่านและอาการวิตกกังวลต่าง ๆ ของผู้ป่วยรวมทั้งช่วยปรับความคิดของ ผู้ป่วยที่มีต่อตนเองและสิ่งรอบข้างให้ดีขึ้น
                            {'\n'}{'\t'}-ควรยอมรับว่าตัวเองรับมือกับอาการแพนิคได้ยาก เนื่องจากการกดดันตัวเองและพยายามระงับอาการแพนิคนั้นจะทำให้รู้สึกแย่กว่าเดิม ทั้งนี้ ควรทำความเข้าใจว่าอาการแพนิคไม่ได้ ร้ายแรงถึงชีวิต แต่เป็นอาการที่สามารถเกิดขึ้น และหายไปได้
                            {'\n'}{'\t'}-เผชิญหน้ากับความวิตกกังวลที่เกิดขึ้น โดยลองหาสาเหตุที่ทำให้เกิดอาการดังกล่าว
                            {'\n'}{'\t'}-เมื่อเกิดอาการแพนิคขึ้นมา ควรพยายาม ตั้งสติ พุ่งความสนใจไปยังสิ่งที่ทำให้รู้สึก ผ่อนคลายรวมทั้งหายใจให้ช้าลง โดยนับหนึ่งถึง สามเมื่อหายใจเข้าหรือออกแต่ละครั้ง เนื่องจาก การหายใจเร็วจะทำให้อาการแพนิคกำเริบมากขึ้น
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

export default PanicSymtomp2Screen;