import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryLabel } from "victory-native";

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

const ReportScreen = ({ navigation }) => {
    return (

        <View style={styles.container}>
            <Text style={{ fontSize: 18, fontWeight: 'bold'}}>
                แกน x: รายชื่ออาการที่เกิด{'\n'}
                แกน y: ความรุนแรงแต่ละอาการ
            </Text>
            <VictoryChart
                width={400}
                theme={VictoryTheme.material}
                domainPadding={5}
            >
                <VictoryBar
                    data={data}
                    x="symtomp"
                    y="level"
                />
            </VictoryChart>

            <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => navigation.navigate("Home")}
            >
                <View style={styles.button} >
                    <Text style={{ fontSize: 20, fontWeight: 'bold', textDecorationLine: 'underline' }}>กลับหน้าแรก</Text>
                </View>
            </TouchableOpacity>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5fcff',
    },

});

export default ReportScreen;