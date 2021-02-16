import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { DataTable } from 'react-native-paper';

const SummarySymtompsScreen = ({ route, navigation }) => {
    
    const { arrDam } = route.params; 

    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>สรุปอาการ</Text>

            </View>

            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>อาการ</DataTable.Title>
                    <DataTable.Title numeric>ระดับความรุนแรง</DataTable.Title>
                </DataTable.Header>

                {arrDam.map((dam, index) =>
                    <DataTable.Row key={index.toString()} >
                        <DataTable.Cell >{dam.name}</DataTable.Cell>
                        <DataTable.Cell numeric>{dam.damage}</DataTable.Cell>
                    </DataTable.Row>
                )}

            </DataTable>

            <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => navigation.goBack()}
            >
                <View style={styles.button} >
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>กลับ</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //alignItems: 'center',
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
});

export default SummarySymtompsScreen;