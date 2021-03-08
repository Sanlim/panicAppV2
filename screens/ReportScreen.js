import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { LineChart } from "react-native-chart-kit";

const data = [
    { symtomp: 1, level: 5 },
    { symtomp: 2, level: 7 },
    { symtomp: 3, level: 2 },
    { symtomp: 4, level: 3 },
    { symtomp: 5, level: 9 },
    { symtomp: 6, level: 0 },
    { symtomp: 7, level: 1 },
    { symtomp: 8, level: 8 },
    { symtomp: 9, level: 6 },
    { symtomp: 10, level: 4 },
    { symtomp: 11, level: 4 }
];

const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
};

const Daily = () => {

    const day = [
        '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17'
    ];
    const dataDay = [
        0, 0, 0, 0, 3, 0, 2, 3, 4, 0, 0, 0
    ];

    const night = [
        '18', '19', '20', '21', '22', '23', '00', '01', '02', '03', '04', '05',
    ];
    const dataNight = [
        1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0,
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
                    backgroundColor: "#e26a00",
                    backgroundGradientFrom: "#FFDFD3",
                    backgroundGradientTo: "#FFDFD3",
                    decimalPlaces: 0, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    style: {
                        borderRadius: 16
                    },
                    propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "#ffa726"
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

            <View style={{ flex: 1, width: 300, height: 300, alignItems: 'center' }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>ความถี่</Text>
                <View
                    style={{ width: '100%', height: '90%', backgroundColor: 'lightgreen', borderRadius: 10 }}
                >
                    <Text style={{ textAlign: 'left', fontSize: 18, marginTop: 10, marginLeft: 10 }}>ใน 1 วัน</Text>
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
                    backgroundColor: "#e26a00",
                    backgroundGradientFrom: "#FFDFD3",
                    backgroundGradientTo: "#FFDFD3",
                    decimalPlaces: 0, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    style: {
                        borderRadius: 16
                    },
                    propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "#ffa726"
                    }
                }}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 20
                }}
            />
            <View style={{ flex: 1, width: 300, height: 300, alignItems: 'center' }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>ความถี่</Text>
                <View
                    style={{ width: '100%', height: '90%', backgroundColor: 'lightgreen', borderRadius: 10 }}
                >
                    <Text style={{ textAlign: 'left', fontSize: 18, marginTop: 10, marginLeft: 10 }}>ใน 1 สัปดาห์</Text>
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
                    backgroundColor: "#e26a00",
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
                        stroke: "#ffa726"
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
    const chkData = [
        { damage: 0, name: '1 ใจเต้นเร็วและรัว' },
        { damage: 0, name: '2 เหงื่อแตก' },
        { damage: 0, name: '3 ตัวสั่น' },
        { damage: 0, name: '4 อึดอัดหายใจไม่ออก ' },
        { damage: 0, name: '5 หายใจติดขัดไม่สะดวก' },
        { damage: 0, name: '6 รู้สึกมึนงง วิงเวียนศรีษะเป็นลม' },
        { damage: 0, name: '7 รู้สึกหนาวๆ ร้อนๆ' },
        { damage: 0, name: '8 ตัวชาหรือเป็นเหน็บ' },
        { damage: 0, name: '9 รู้สึกไม่เป็นตัวของตัวเอง' },
        { damage: 0, name: '10 กลัวที่จะเสียสติ' },
        { damage: 0, name: '11 กลัวว่าอาจตายได้' }
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
        <ScrollView style={{ marginTop: 20 }}>
            <View style={styles.container}>

                <View
                    style={{
                        flex: 1,
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
                                backgroundColor: isSelectedDay ? 'lightblue' : '#eee'
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
                                //borderRadius: 5,
                                backgroundColor: isSelectedWeek ? 'lightblue' : '#eee'
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
                        backgroundColor: '#B5985A',
                        //margin: 5,
                        borderRadius: 7,
                        //flexDirection: 'row'
                        borderWidth: 2,
                        elevation: 0,
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
                                elevation: 1
                            }}
                        >
                            <TouchableOpacity
                                activeOpacity={0.6}
                            >
                                <View style={{
                                    backgroundColor: '#FFF0F3',
                                    alignItems: 'center',
                                    borderRadius: 10,
                                    padding: 7,
                                    flexDirection: 'row',
                                    elevation: 2
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
                                    borderRadius: 7
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
                        marginTop: 15,
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
        backgroundColor: '#FEC8D8',
        borderRadius: 10,
        margin: 15,
        padding: 15
    },
    btnColor: {
        backgroundColor: '#a6e4d0'
    }

});

export default ReportScreen;