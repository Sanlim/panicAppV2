import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { LineChart } from "react-native-chart-kit";

import firestore from '@react-native-firebase/firestore'

const Daily = () => {

    const day = [
        '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17'
    ];
    const dataDay = [
        0, 0, 0, 0, 0, 0, 2, 0, 4, 0, 0, 0
    ];

    const night = [
        '18', '19', '20', '21', '22', '23', '00', '01', '02', '03', '04', '05',
    ];
    const dataNight = [
        0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ];

    const [period, setPeriod] = useState(day)
    const [dataPeriod, setDataPeriod] = useState(dataDay)
    const [dayPeriod, setDayPeriod] = useState(true);
    const [nightPeriod, setNightPeriod] = useState()

    const selectPeriod = (pr, dpr, num) => {
        setPeriod(pr)
        setDataPeriod(dpr)
        if (num === 1) {
            setDayPeriod(true)
            setNightPeriod(false)
        }
        else if (num === 2) {
            setNightPeriod(true)
            setDayPeriod(false)
        }
    }

    return (
        <View style={{ width: '80%', justifyContent: 'center', alignItems: 'center', padding: 10 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }} >วัน</Text>
            <LineChart
                data={{
                    labels: period,
                    datasets: [{ data: dataPeriod }],
                }}
                width={Dimensions.get("window").width / 1.15} // from react-native
                height={220}
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                    //backgroundColor: "#e26a00",
                    backgroundGradientFrom: "#cbfaf2",
                    backgroundGradientTo: "#a7f7e9",
                    decimalPlaces: 0, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    style: {
                        borderRadius: 16
                    },
                    propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "#61efd9"
                    }
                }}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 20
                }}
            />
            <View
                style={{
                    flexDirection: 'row',
                }}
            >

                <TouchableOpacity
                    onPress={() => selectPeriod(day, dataDay, 1)}
                    activeOpacity={0.6}
                    style={{
                        backgroundColor: dayPeriod ? 'lightblue' : '#fff',
                        padding: 5,
                        borderRadius: 7,
                        borderColor: '#000',
                        borderWidth: 1.5,
                        marginRight: 7
                    }}
                >
                    <Text
                        style={{
                            fontSize: 20,
                            color: 'navy'
                        }}
                    >
                        กลางวัน
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => selectPeriod(night, dataNight, 2)}
                    activeOpacity={0.6}
                    style={{
                        backgroundColor: nightPeriod ? 'lightblue' : '#fff',
                        padding: 5,
                        borderRadius: 7,
                        borderColor: '#000',
                        borderWidth: 1.5,
                        marginLeft: 7
                    }}
                >
                    <Text
                        style={{
                            fontSize: 20,
                            color: 'navy'
                        }}
                    >
                        กลางคืน
                    </Text>
                </TouchableOpacity>

            </View>

            <View style={{ alignItems: 'center', marginVertical: 10 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>ความถี่</Text>
                <View
                    style={{ backgroundColor: '#E6F7F1', borderRadius: 10, justifyContent: 'center' }}
                >
                    <Text style={{ textAlign: 'left', fontSize: 18, padding: 15 }}>ใน 1 วัน มีอาการ 3 ครั้ง</Text>
                </View>
            </View>
        </View>
    )
}

const Weekly = () => {
    const week = [
        'อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์'
    ];
    const dataWeek = [
        1, 2, 3, 4, 0, 2, 3,
    ];
    return (
        <View style={{ width: '80%', justifyContent: 'center', alignItems: 'center', padding: 10 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }} >สัปดาห์</Text>
            <LineChart
                data={{
                    labels: week,
                    datasets: [{ data: dataWeek }],
                }}
                width={Dimensions.get("window").width / 1.15} // from react-native
                height={250}
                // yAxisLabel="$"
                // yAxisSuffix="k"
                yAxisInterval={1} // optional, defaults to 1
                verticalLabelRotation={-20}
                xLabelsOffset={3}
                withInnerLines={true}
                chartConfig={{
                    //backgroundColor: "blue",
                    backgroundGradientFrom: "#cbfaf2",
                    backgroundGradientTo: "#a7f7e9",
                    decimalPlaces: 0, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    style: {
                        borderRadius: 16
                    },
                    propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "#61efd9"
                    }
                }}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 20
                }}
            />
            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginVertical: 10 }}>ความถี่</Text>
                <View
                    style={{ backgroundColor: '#E6F7F1', borderRadius: 10 }}
                >
                    <Text style={{ textAlign: 'left', fontSize: 18, padding: 8 }}>ใน 1 สัปดาห์ มีอาการ 10 ครั้ง </Text>
                </View>
            </View>
        </View>
    )
}

const Monthly = () => {
    return (
        <View style={{ width: '80%', justifyContent: 'center', alignItems: 'center', padding: 10 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }} >เดือน</Text>
            <LineChart
                data={{
                    labels: ["January", "February", "March", "April", "May", "June"],
                    datasets: [
                        {
                            data: [
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100
                            ]
                        }
                    ]
                }}
                width={Dimensions.get("window").width / 1.15} // from react-native
                height={220}
                yAxisLabel="$"
                yAxisSuffix="k"
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                    backgroundColor: "#18e9c8",
                    backgroundGradientFrom: "#FFDFD3",
                    backgroundGradientTo: "#FFDFD3",
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    style: {
                        borderRadius: 16
                    },
                    propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "#61efd9"
                    }
                }}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 20
                }}
            />
            <View style={{ flex: 1 }}>
                <Text>ความถี่</Text>
            </View>
        </View>
    )
}

const ReportScreen = ({ navigation }) => {

    const checkSwitch = (label) => {
        switch (label) {
            case '1':
                //ONE();
                console.log("one is select");
                break;

            case '2':
                //TWO();
                console.log("two is select");
                break;

            case '3':
                //THREE();
                console.log("three is select");
                break;

            case '4':
                //FOUR();
                console.log("four is select");
                break;

            case '5':
                //FIVE();
                console.log("five is select");
                break;

            case '6':
                //SIX();
                console.log("six is select");
                break;

            case '7':
                //SEVEN();
                console.log("seven is select");
                break;

            case '8':
                //EIGHT();
                console.log("eight is select");
                break;

            case '9':
                //NINE();
                console.log("nine is select");
                break;

            case '10':
                //TEN();
                console.log("ten is select");
                break;

            case '11':
                //ELEVEN();
                console.log("eleven is select");
                break;

            default:
                Alert.alert("NUMBER NOT FOUND");

        }
    }

    const chkData = [
        { damage: 0, name: '1 ใจเต้นเร็วและรัว', label: '1' },
        { damage: 0, name: '2 เหงื่อแตก', label: '2' },
        { damage: 0, name: '3 ตัวสั่น', label: '3' },
        { damage: 0, name: '4 อึดอัดหายใจไม่ออก ', label: '4' },
        { damage: 0, name: '5 หายใจติดขัดไม่สะดวก', label: '5' },
        { damage: 0, name: '6 รู้สึกมึนงง วิงเวียนศรีษะเป็นลม', label: '6' },
        { damage: 0, name: '7 รู้สึกหนาวๆ ร้อนๆ', label: '7' },
        { damage: 0, name: '8 ตัวชาหรือเป็นเหน็บ', label: '8' },
        { damage: 0, name: '9 รู้สึกไม่เป็นตัวของตัวเอง', label: '9' },
        { damage: 0, name: '10 กลัวที่จะเสียสติ', label: '10' },
        { damage: 0, name: '11 กลัวว่าอาจตายได้', label: '11' }
    ]

    const [timeChart, setTimeChart] = useState(true);

    const [isSelectedDay, setIsSelectedDay] = useState(true)
    const [isSelectedWeek, setIsSelectedWeek] = useState()

    const [arrSyms, setArrSym] = useState(chkData)

    const timeSelected = (int) => {
        if (int === 0) {
            setTimeChart(true)
            setIsSelectedDay(true)
            setIsSelectedWeek(false)
        }
        else if (int === 1) {
            setTimeChart(false)
            setIsSelectedDay(false)
            setIsSelectedWeek(true)
        }
    }

    return (
        <ScrollView style={{ margin: 10, borderRadius: 7 }}>
            <View style={styles.container}>

                <View
                    style={{
                        //flex: 1,
                        flexDirection: 'row',
                        margin: 5
                    }}
                >
                    <TouchableOpacity
                        activeOpacity={0.6}
                        onPress={() => timeSelected(0)}
                    >
                        <View
                            style={{
                                //backgroundColor: '#eee',
                                width: 110,
                                height: 40,
                                //margin: 5,
                                justifyContent: 'center',
                                alignItems: 'center',
                                //borderRadius: 5
                                borderBottomLeftRadius: 5,
                                borderTopLeftRadius: 5,
                                borderBottomLeftRadius: 5,
                                backgroundColor: isSelectedDay ? '#95f5e5' : '#eee'
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 18,
                                    fontWeight: 'bold'
                                }}
                            >
                                Daily
                            </Text>

                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity
                        activeOpacity={0.6}
                        onPress={() => timeSelected(1)}
                    >
                        <View
                            style={{
                                //backgroundColor: '#eee',
                                width: 110,
                                height: 40,
                                //margin: 5,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderBottomRightRadius: 5,
                                borderTopRightRadius: 5,
                                borderBottomRightRadius: 5,
                                backgroundColor: isSelectedWeek ? '#95f5e5' : '#eee'
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 18,
                                    fontWeight: 'bold'
                                }}
                            >
                                Weekly
                            </Text>
                        </View>
                    </TouchableOpacity>

                    {/* <TouchableOpacity
                        activeOpacity={0.6}
                        onPress={() => {} }
                    >
                        <View
                            style={{
                                backgroundColor: '#eee',
                                width: 110,
                                height: 40,
                                //margin: 5,
                                justifyContent: 'center',
                                alignItems: 'center',
                                //borderRadius: 5,
                                borderBottomRightRadius: 5,
                                borderTopRightRadius: 5,
                                borderBottomRightRadius: 5,
                                // backgroundColor: monthSelected ? 'lightblue' : '#eee'
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 18,
                                    fontWeight: 'bold'
                                }}
                            >
                                Monthly
                            </Text>
                        </View>
                    </TouchableOpacity> */}

                </View>

                <ScrollView
                    style={{
                        backgroundColor: '#84f3e0',
                        //margin: 5,
                        borderRadius: 7,
                        //flexDirection: 'row'
                        borderWidth: 2,
                        elevation: 5,
                        marginTop: 15
                    }}
                    horizontal={true}
                >
                    {arrSyms.map((chk, index) => (
                        <View
                            key={index.toString()}
                            style={{
                                marginHorizontal: 7,
                                marginVertical: 7,
                                elevation: 2
                            }}
                        >
                            <TouchableOpacity
                                activeOpacity={0.6}
                                onPress={() => checkSwitch(chk.label)}
                            >
                                <View style={{
                                    backgroundColor: '#ddfcf7',
                                    alignItems: 'center',
                                    borderRadius: 10,
                                    padding: 7,
                                    flexDirection: 'row',
                                    elevation: 1
                                }}>
                                    <Text style={{ fontSize: 20, color: 'black' }}>{chk.name}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>


                <ScrollView
                    horizontal={true}
                    style={{
                        flexDirection: 'row',
                    }}
                >
                    {
                        arrSyms.map((sym, index) => {
                            <TouchableOpacity
                                key={index.toString()}
                                style={{
                                    //width: 50,
                                    //height: 20,
                                    backgroundColor: 'white',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    padding: 5,
                                    borderRadius: 7,
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: 20
                                    }}
                                >
                                    {sym.name}
                                </Text>
                            </TouchableOpacity>
                        })
                    }
                </ScrollView>

                {
                    timeChart
                        ? <Daily />
                        : <Weekly />
                }

                <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={() => navigation.navigate("Home")}
                    style={{
                        //backgroundColor: '#a6e4d0',
                        ...styles.btnColor,
                        padding: 5,
                        borderRadius: 7,
                    }}
                >
                    <Text
                        style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            //textDecorationLine: 'underline'
                        }}
                    >
                        กลับหน้าแรก
                        </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#15d8ba',
        borderRadius: 7,
        margin: 10,
        padding: 15
    },
    btnColor: {
        backgroundColor: '#a7f7e9'
    }

});

export default ReportScreen;