import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const RemindScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <View style={styles.box}>
                <View style={styles.inner}>
                    <TouchableOpacity
                        activeOpacity={0.6}
                        onPress={() => navigation.navigate('DrugRemind')}
                    >
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>เตือนรับประทานยา</Text>
                        <View style={styles.iconButton} >
                            <Icon name="pill" color='#000' size={70} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.box}>
                <View style={styles.inner}>
                    <TouchableOpacity
                        activeOpacity={0.6}
                        onPress={() => navigation.navigate('Appointment')}
                    >
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>นัดพบจิตแพทย์</Text>
                        <View style={styles.iconButton} >
                            <Icon name="calendar-check" color='#000' size={70} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        padding: 25,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#fff'
    },
    box: {
        width: '50%',
        height: '35%',
        padding: 15,
    },
    inner: {
        flex: 1,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        padding: 5
    },
    iconButton: {
        flex: 1,
        marginTop: 60,
        marginLeft: 50

    }
});

export default RemindScreen;