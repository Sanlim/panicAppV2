import React, { useContext } from 'react';
import { SafeAreaView, TextInput, Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const EditProfile = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.profileContainer}>

                <View style={{
                    borderColor: "#ccc",
                    flexDirection: "row",
                    alignItems: 'center',
                    marginLeft: 30,
                    width: "100%",
                }}>
                    <Icon name="calendar-today" color="#FF6347" size={25} />
                    <TextInput
                        placeholder="วันเกิด"
                        placeholderTextColor="#666"
                    >
                    </TextInput>
                </View>

                <View style={{
                    borderColor: "#ccc",
                    flexDirection: "row",
                    alignItems: 'center',
                    marginLeft: 30,
                    width: "100%",
                }}>
                    <Icon name="human-male-male" color="#FF6347" size={25} />
                    <TextInput
                        placeholder="เพศ"
                        placeholderTextColor="#666"
                    >
                    </TextInput>
                </View>

                <View style={{
                    borderColor: "#ccc",
                    flexDirection: "row",
                    alignItems: 'center',
                    marginLeft: 30,
                    width: "100%",
                }}>
                    <Icon name="weight-kilogram" color="#FF6347" size={25} />
                    <TextInput
                        placeholder="น้ำหนัก"
                        placeholderTextColor="#666"
                    >
                    </TextInput>
                </View>
                
                <View style={{
                    borderColor: "#ccc",
                    flexDirection: "row",
                    alignItems: 'center',
                    marginLeft: 30,
                    width: "100%",
                }}>
                    <Icon name="human-male-height" color="#FF6347" size={25} />
                    <TextInput
                        placeholder="ส่วนสูง"
                        placeholderTextColor="#666"
                    >
                    </TextInput>
                </View>

                <View style={{
                    borderColor: "#ccc",
                    flexDirection: "row",
                    alignItems: 'center',
                    marginLeft: 30,
                    width: "100%",
                }}>
                    <MaterialIcons name="work" color="#FF6347" size={25} />
                    <TextInput
                        placeholder="อาชีพ"
                        placeholderTextColor="#666"
                    >
                    </TextInput>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                    <View style={styles.profileItem}>
                        <Icon name="logout" color="#FF6347" size={25} />
                        <Text style={styles.profileItemText}>บันทึก</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
        //backgroundColor: Colors.primary
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    profileContainer: {
        marginTop: 10,
    },
    profileItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
        justifyContent: 'center'
    },
    profileItemText: {
        color: '#777777',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
    },
});

export default EditProfile;