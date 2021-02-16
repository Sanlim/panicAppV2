import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeTabScreen from '../screens/HomeTabScreen';
import RecordScreen from '../screens/RecordScreen';
import RemindScreen from '../screens/RemindScreen';
import RelaxScreen from '../screens/RelaxScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    
    <Tab.Navigator
        initialRouteName= "Home"
        activeColor="#fff"
    //style={{ backgroundColor: 'tomato' }}
    >
        <Tab.Screen
            name="Home"
            component={HomeTabScreen}
            options={{
                tabBarLabel: 'หน้าแรก',
                tabBarColor: '#1abc9c',
                tabBarIcon: ({ color }) => (
                    <Icon name="home" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Record"
            component={RecordScreen}
            options={{
                tabBarLabel: 'บันทึกอาการ',
                tabBarColor: '#1abc9c',
                tabBarIcon: ({ color }) => (
                    <Icon name="clipboard-plus" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Remind"
            component={RemindScreen}
            options={{
                tabBarLabel: 'เตือน',
                tabBarColor: '#1abc9c',
                tabBarIcon: ({ color }) => (
                    <Icon name="clock" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Relax"
            component={RelaxScreen}
            options={{
                tabBarLabel: 'ผ่อนคลาย',
                tabBarColor: '#1abc9c',
                tabBarIcon: ({ color }) => (
                    <Icon name="music" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
                tabBarLabel: 'ข้อมูลส่วนตัว',
                tabBarColor: '#1abc9c',
                tabBarIcon: ({ color }) => (
                    <Icon name="account" color={color} size={26} />
                ),
            }}
        />
    </Tab.Navigator>
    
);

export default MainTabScreen;