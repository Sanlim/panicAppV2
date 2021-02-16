import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MainTabScreen from './MainTabScreen';
import DrugRemindScreen from '../screens/DrugRemindScreen';
import AppointmentScreen from '../screens/AppointmentScreen';
import ReportScreen from '../screens/ReportScreen';
import SummarySymtompsScreen from '../screens/SummarySymtompsScreen';
import EditProfile from '../screens/EditProfile';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { View } from 'react-native';

const Stack = createStackNavigator();

const HomeStackScreen = () => {
    return (
        
            <Stack.Navigator>
                <Stack.Screen
                    name="MainTab"
                    component={MainTabScreen}
                    options={{ header: () => null }}
                />
                <Stack.Screen
                    name="DrugRemind"
                    component={DrugRemindScreen}
                    options={({ navigation }) => ({
                        title: 'เตือนกินยา',
                        headerTitleAlign: 'center',
                        headerTitleStyle: {
                            fontSize: 22,
                            fontWeight: 'bold'
                        },
                        headerStyle: {
                            backgroundColor: '#f9fafd',
                            shadowColor: '#f9fafd',
                            elevation: 0,
                        },
                        headerLeft: () => (
                            <View style={{ marginLeft: 10 }}>
                                <FontAwesome.Button
                                    name="long-arrow-left"
                                    size={25}
                                    backgroundColor="#f9fafd"
                                    color="#333"
                                    onPress={() => navigation.goBack()}
                                />
                            </View>
                        ),
                    })}
                />
                <Stack.Screen
                    name="Appointment"
                    component={AppointmentScreen}
                    options={({ navigation }) => ({
                        title: 'เตือนนัดพบแพทย์',
                        headerTitleAlign: 'center',
                        headerTitleStyle: {
                            fontSize: 22,
                            fontWeight: 'bold'
                        },
                        headerStyle: {
                            backgroundColor: '#f9fafd',
                            shadowColor: '#f9fafd',
                            elevation: 0,
                        },
                        headerLeft: () => (
                            <View style={{ marginLeft: 10 }}>
                                <FontAwesome.Button
                                    name="long-arrow-left"
                                    size={25}
                                    backgroundColor="#f9fafd"
                                    color="#333"
                                    onPress={() => navigation.goBack()}
                                />
                            </View>
                        ),
                    })}
                />
                <Stack.Screen
                    name="Report"
                    component={ReportScreen}
                    options={{ header: () => null }}
                />
                <Stack.Screen
                    name="Summary"
                    component={SummarySymtompsScreen}
                    options={{ header: () => null }}
                />
                <Stack.Screen
                    name="EditProfile"
                    component={EditProfile}
                    options={({ navigation }) => ({
                        title: 'แก้ไขข้อมูล',
                        headerTitleAlign: 'center',
                        headerTitleStyle: {
                            fontSize: 22,
                            fontWeight: 'bold'
                        },
                        headerStyle: {
                            backgroundColor: '#f9fafd',
                            shadowColor: '#f9fafd',
                            elevation: 0,
                        },
                        headerLeft: () => (
                            <View style={{ marginLeft: 10 }}>
                                <FontAwesome.Button
                                    name="long-arrow-left"
                                    size={25}
                                    backgroundColor="#f9fafd"
                                    color="#333"
                                    onPress={() => navigation.goBack()}
                                />
                            </View>
                        ),
                    })}
                />
            </Stack.Navigator>
        
    );
}

export default HomeStackScreen;