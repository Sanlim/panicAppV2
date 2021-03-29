import React, { useState, useEffect } from 'react'
import { Platform, UIManager } from 'react-native'
import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    LayoutAnimation
} from 'react-native'
import Icons from 'react-native-vector-icons/dist/Entypo'
import Colors from '../constants/Colors'


const Data = [
    {
        isExpandable: false,
        category_name: 'อาการของโรคแพนิค',
        subcategory: [
            {
                id: 100,
                val: '\t\tผู้ป่วยโรคแพนิคจะรู้สึกหวาดกลัวหรือตื่นตระหนกอย่างไม่มีสาเหตุ ซึ่งเรียกว่า อาการแพนิค โดยอาการนี้จะเกิดขึ้นกะทันหัน รวมทั้งเกิดขึ้นได้ตลอดเวลา แพนิคเป็นอาการที่รุนแรงกว่าความรู้สึกเครียดทั่วไป มักเกิดขึ้นเป็นเวลา 10-20 นาที บางรายอาจเกิดอาการแพนิคนานเป็นชั่วโมง โดยผู้ป่วยโรคแพนิคจะเกิดอาการ ดังนี้ \n',
                data: [
                    '- หัวใจเต้นเร็ว\n\n',
                    '- หายใจไม่ออก รู้สึกเหมือนขาดอากาศ\n\n',
                    '- หวาดกลัวอย่างรุนแรงจนร่างกายขยับไม่ได้\n\n',
                    '- เวียนศีรษะหรือรู้สึกคลื่นไส้\n\n',
                    '- เหงื่อออกและมือเท้าสั่น\n\n',
                    '- รู้สึกหอบและเจ็บหน้าอก\n\n',
                    '- รู้สึกร้อนวูบวาบ หรือหนาวขึ้นมาอย่างกะทันหัน\n\n',
                    '- เกิดอาการเหน็บคล้ายเข็มทิ่มที่นิ้วมือหรือเท้า\n\n',
                    '- วิตกกังวลหรือหวาดกลัวว่าจะตายรวมทั้งรู้สึกว่าไม่สามารถควบคุมสิ่งต่าง ๆ ในชีวิตได้\n\n',
                    '- กังวลว่าจะมีเหตุการณ์อันตรายเกิดขึ้นในอนาคต\n\n',
                    '- หวาดกลัวและพยายามหลีกเลี่ยงสถานที่หรือสถานการณ์อันตรายที่ทำให้รู้สึกหวาดกลัวในอดีต',
                    '\n \n \t \tทั้งนี้ ผู้ที่เกิดอาการแพนิคควรพบแพทย์ทันที เนื่องจากอาการแพนิคถือว่าเป็นปัญหาทางสุขภาพ ผู้ที่เกิดอาการดังกล่าวจะจัดการ ตัวเองได้ยาก ทั้งนี้ หากไม่ได้รับการรักษาให้หาย อาการแพนิคจะรุนแรงขึ้น'
                ]
            }
        ]
    },
    {
        isExpandable: false,
        category_name: 'การป้องกันโรคแพนิค',
        subcategory: [
            {   //จัดกลุ่ม อาการ
                //รับประทานยาให้สม่ำเสมอตามคำสั่งของแพทย์
                //
                id: 200,
                val: '\t\tโรคแพนิคเป็นปัญหาสุขภาพทางจิตที่สามารถป้องกันได้ อย่างไรก็ตามผู้ที่เกิดอาการแพนิคหรือป่วยเป็นโรคนี้สามารถดูแลตัวเองเพื่อไม่ให ้เกิดความเครียดมากขึ้น และเกิดอาการแพนิค น้อยลงได้ ดังนี้\n\n',
                data: [
                    '- รับประทานยาให้สม่ำเสมอตามคำสั่งของแพทย์\n\n',
                    '- งดหรือลดดื่มเครืองดื่มแอลกอฮอล์และเครื่องดื่มที่ผสมคาเฟอีน เช่น กาแฟ ชา โคล่า หรือช็อกโกแลต\n\n',
                    '- ปรึกษาแพทย์หรือเภสัชกรก่อนรับประทานยาหรือสมุนไพรรักษาอาการป่วยต่าง ๆ เนื่องจากผลิตภัณฑ์ดังกล่าวอาจมีส่วนประกอบที่กระตุ้นให้เกิดอาการแพนิคได้\n\n',
                    '- ออกกำลังกายอย่างสม่ำเสมอ รวมทั้งรับประทานอาหารที่มีประโยชน์ให้ครบถ้วน\n\n',
                    '- นอนหลับพักผ่อนให้เพียงพอ\n\n',
                    '- ฝึกรับมือกับความเครียด เช่น ฝึกหายใจลึก ๆ หรือเล่นโยคะ เพื่อให้รู้สึก ผ่อนคลายขึ้น\n\n',
                    '- ฝึกคิดหรือมองโลกในแง่บวก นึกถึงสถานที่หรือเหตุการณ์ที่ทำให้จิตใจสงบหรือผ่อนคลายและเพ่งความสนใจไปที่ความคิดดังกล่าว วิธีนี้จะช่วยลดความฟุ้งซ่านและอาการวิตกกังวลต่าง ๆ ของผู้ป่วยรวมทั้งช่วยปรับความคิดของ ผู้ป่วยที่มีต่อตนเองและสิ่งรอบข้างให้ดีขึ้น\n\n',
                    '- ควรยอมรับว่าตัวเองเป็นโรคแพนิคที่มีอาการไม่ร้ายแรงถึงขั้นเสียชีวิต แต่เป็นอาการที่สามารถเกิดขึ้นและหายได้\n\n',
                    '- เมื่อเกิดอาการแพนิคขึ้นมา ควรพยายามตั้งสติ พุ่งความสนใจไปยังสิ่งที่ทำให้รู้สึก ผ่อนคลายรวมทั้งหายใจให้ช้าลง โดยนับหนึ่งถึง สามเมื่อหายใจเข้าหรือออกแต่ละครั้ง เนื่องจาก การหายใจเร็วจะทำให้อาการแพนิคกำเริบมากขึ้น\n'
                ]
            }
        ]
    }
]

const ExpandableComponent = ({ item, onClickFunction }) => {
    const [layoutHeight, setLayoutHeight] = useState(0)

    useEffect(() => {
        if (item.isExpandable) {
            setLayoutHeight(null)
        } else {
            setLayoutHeight(0)
        }
    }, [item.isExpandable])

    return (
        <View>
            <TouchableOpacity
                style={styles.item}
                onPress={onClickFunction}
            >
                <Text style={styles.itemText}>
                    {item.category_name}
                </Text>
            </TouchableOpacity>
            <View
                style={{
                    height: layoutHeight,
                    overflow: 'hidden'
                }}
            >
                {
                    item.subcategory.map((item, key) => (
                        <View
                            key={key}
                            style={styles.content}
                        >   
                            <Text style={styles.text}>
                                {item.val}{'\n'}
                                {item.data}
                            </Text>
                            <View stylt={styles.separator} />
                        </View>
                    ))
                }
            </View>
        </View>
    )
}

const PanicSymtompScreen = ({ navigation }) => {

    const [multiSelect, setMultiSelect] = useState(true)
    const [listDataSource, setListDataSource] = useState(Data)

    if (Platform.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental(true)
    }

    const updateLayout = (index) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        const array = [...listDataSource];
        array[index]['isExpandable'] = !array[index]['isExpandable'];
        setListDataSource(array);
    }

    return (

        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text
                            style={{
                                fontSize: 22,
                                fontWeight: 'bold',
                                marginBottom: 10
                            }}
                        >โรคแพนิคคืออะไร</Text>
                        <Text
                            style={{
                                fontSize: 20,
                                letterSpacing: 0.6,
                                lineHeight: 40
                            }}
                        >
                            {'\t'}{'\t'}ภาวะตื่นตระหนกต่อสิ่งใดสิ่งหนึ่งโดยไม่มีเหตุผลหรือหาสาเหตุไม่ได้ ซึ่งโรคนี้แตกต่างจากอาการหวาดกลัวหรือกังวลทั่วไป เนื่องจากผู้ป่วยจะเกิดอาการแพนิค (panic attacks) หรือหวาดกลัวอย่างรุนแรงทั้งที่ตัวเองไม่ได้เผชิญหน้าหรือตกอยู่ในสถานการณ์อันตราย อาการแพนิคเกิดขึ้นได้ตลอดเวลา ส่งผลให้ผู้ป่วยโรคแพนิครู้สึกกลัวและละอาย เนื่องจากไม่สามารถควบคุมตัวเองหรือดำเนินชีวิตประจำวันได้ตามปกติ
                        </Text>
                    </View>

                    {
                        listDataSource.map((item, key) => (
                            <ExpandableComponent
                                key={item.category_name}
                                item={item}
                                onClickFunction={() => {
                                    updateLayout(key)
                                }}
                            />
                        ))
                    }

                    <TouchableOpacity
                        activeOpacity={0.6}
                        onPress={() => navigation.navigate("GeneralUser")}
                    >
                        <View style={styles.button} >
                            <Text style={{
                                fontSize: 22,
                                fontWeight: 'bold'
                            }}
                            >
                                กลับ
                             </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1
    },
    header: {
        padding: 15,
    },
    titleText: {
        flex: 1,
        fontSize: 22,
        fontWeight: 'bold'
    },
    headerButton: {
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 22
    },
    item: {
        backgroundColor: Colors.primary,
        padding: 20,
        borderRadius: 7.2,
        margin: 10
    },
    itemText: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    content: {
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#fff'
    },
    text: {
        fontSize: 20,
        padding: 10,
        letterSpacing: 0.6,
        lineHeight: 35
    },
    separator: {
        height: 0.5,
        backgroundColor: '#c8c8c8',
        width: '100%'
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#15d8ba',
        padding: 10,
        width: 100,
        margin: 10,
        borderRadius: 7,
        marginHorizontal: '70%'
    }
});

export default PanicSymtompScreen;