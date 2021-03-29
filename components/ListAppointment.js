//ลิสต์รายชื่อยา
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ListAppointment = ({ item, deleteItem }) => {
    return (
        <TouchableOpacity style={styles.listItem}>
            <View style={styles.listItemView}>
                <Text style={styles.listItemText}>วันที่ {item.date}</Text>
                <Text style={styles.listItemText}>เวลา {item.time} น.</Text>
                <Text style={styles.listItemText}>สถานที่ {item.place}</Text>

            </View>
            <Icon name="remove" size={32} color="firebrick"
                onPress={() => deleteItem(item.id)} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        backgroundColor: "#b9f8ee",
        borderColor: "#aaa",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius: 10,
        margin: 10
    },
    listItemView: {
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    listItemText: {
        fontSize: 18
    }
});

export default ListAppointment;