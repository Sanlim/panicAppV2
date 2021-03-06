import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { LineChart } from "react-native-chart-kit";
import { set } from 'react-native-reanimated';

const data = [
    { symtomp: "1", level: 5 },
    { symtomp: "2", level: 7 },
    { symtomp: "3", level: 2 },
    { symtomp: "4", level: 3 },
    { symtomp: "5", level: 9 },
    { symtomp: "6", level: 0 },
    { symtomp: "7", level: 1 },
    { symtomp: "8", level: 8 },
    { symtomp: "9", level: 6 },
    { symtomp: "10", level: 4 },
    { symtomp: "11", level: 4 }
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

    const selectPeriod = (pr, dpr) => {
        setPeriod(pr)
        setDataPeriod(dpr)
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
                // yAxisLabel="$"
                // yAxisSuffix="k"
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
                    onPress={() => selectPeriod(day, dataDay)}
                    activeOpacity={0.6}
                    style={{
                        backgroundColor: '#fff',
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
                    onPress={() => selectPeriod(night, dataNight)}
                    activeOpacity={0.6}
                    style={{
                        backgroundColor: 'navy',
                        padding: 5,
                        borderRadius: 7,
                        borderColor: '#fff',
                        borderWidth: 1.5,
                        marginLeft: 7
                    }}
                >
                    <Text
                        style={{ fontSize: 20, color: '#fff' }}
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
    const [timeChart, setTimeChart] = useState();

    const [isSelectedDay, setIsSelectedDay] = useState()
    const [isSelectedWeek, setIsSelectedWeek] = useState()

    const timeSelected = (int) => {
        if (int === 0) {
            setTimeChart(false)
            setIsSelectedDay(true)
            setIsSelectedWeek(false)
            //console.log('day: ', isSelectedDay);
        }
        else if (int === 1) {
            setTimeChart(true)
            setIsSelectedDay(false)
            setIsSelectedWeek(true)
            //console.log('week: ', isSelectedWeek);
        }
    }

    return (
        <ScrollView style={{ marginTop: 20 }}>
            <View style={styles.container}>
                {/* <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                    แกน x: รายชื่ออาการที่เกิด{'\n'}
                    แกน y: ความรุนแรงแต่ละอาการ
                </Text> */}

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
                                backgroundColor: '#eee',
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
                                backgroundColor: '#eee',
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

                {
                    timeChart
                        ? <Weekly />
                        : <Daily />
                }

                <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={() => navigation.navigate("Home")}
                >
                    <View style={styles.button} >
                        <Text style={{ fontSize: 20, fontWeight: 'bold', textDecorationLine: 'underline' }}>กลับหน้าแรก</Text>
                    </View>
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

});

export default ReportScreen;