//ลิสต์รายชื่อยา
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ListItem = ({ item, deleteItem }) => {
    return (
        <TouchableOpacity
            style={styles.listItem}
        >

            <View style={styles.listItemView}>
                <Text style={styles.listItemText}>ชื่อยา {item.med}</Text>
                <Text style={styles.listItemText}>จำนวน {item.dose} เม็ด</Text>
                <Text style={styles.listItemText}>เวลา {item.time} น.</Text>
            </View>
            <Icon name="remove" size={32} color="firebrick"
                onPress={() => deleteItem(item.id)}
                style={{ margin: 10 }}
            />

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        backgroundColor: "#FEE1E6",
        //borderBottomWidth: 1,
        borderColor: "#aaa",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 10,
        margin: 10
    },
    listItemView: {
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    listItemText: {
        fontSize: 20
    }
});

export default ListItem;