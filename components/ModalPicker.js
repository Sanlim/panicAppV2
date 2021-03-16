import React from 'react'
import {
    StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView
} from 'react-native'

const OPTIONS = [
    'Fluoxetine', 'Sertraline', 'Imipramine', 'Clorazepate'
]
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const ModalPicker = (props) => {

    const onPressItem = (option) => {
        props.changeModalVisibility(false);
        props.setData(option)
    }

    const option = OPTIONS.map((item, index) => {
        return (
            <TouchableOpacity
                style={styles.option}
                key={index}
                onPress = {() => onPressItem(item)}
            >
                <Text
                    style={styles.text}
                >
                    {item}
                </Text>
            </TouchableOpacity>
        )
    })

    return (
        <TouchableOpacity
            onPress={() => props.changeModalVisibility(false)}
            style={styles.container}
        >
            <View
                style={[styles.modalPicker, {width: WIDTH - 20}]}
            >
                <ScrollView>
                    {option}
                </ScrollView>
            </View>
        </TouchableOpacity>
    )
}

export default ModalPicker

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    
    },
    modalPicker: {
        borderRadius: 7,
    },
    option: {
        alignItems: 'stretch',
        borderWidth: 1,
        borderRadius: 7,
        backgroundColor: 'lightblue',
        
    },
    text: {
        margin: 20,
        fontSize: 20,
        fontWeight: 'bold',
    }
})
