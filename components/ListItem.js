//ลิสต์รายชื่อยา
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ListItem = ({ item, deleteItem }) => {
    return (
        <TouchableOpacity style={styles.listItem}>
            <View style={styles.listItemView}>
                <Text style={styles.listItemText}>ชื่อยา {item.med}</Text>
                <Text style={styles.listItemText}>จำนวน {item.dose} เม็ด</Text>
                <Text style={styles.listItemText}>เวลา {item.time} น.</Text>
            </View>
            <Icon name="remove" size={20} color="firebrick"
                onPress={() => deleteItem(item.id)} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    listItem: {
        padding: 15,
        backgroundColor: "#f8f8f8",
        borderBottomWidth: 1,
        borderColor: "#eee",
        flexDirection: 'row',
        alignItems: 'center'
    },
    listItemView: {
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    listItemText: {
        fontSize: 18
    }
});

export default ListItem;