import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import SignupScreen from '../screens/SignupScreen';
import SigninScreen from '../screens/SigninScreen';
import PreviewScreen from '../screens/PreviewScreen';
import PanicSymtompScreen from '../screens/PanicSymtompScreen';
import PanicTestScreen from '../screens/PanicTestScreen';
import GeneralUserScreen from '../screens/GeneralUserScreen';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import AsyncStorage from '@react-native-community/async-storage';

const Stack = createStackNavigator();

const AuthStack = () => {

    const [isFirstLaunch, setIsFirstLaunch] = useState(null);
    let routeName;

    useEffect(() => {
        AsyncStorage.getItem('alreadyLaunched').then((value) => {
            if (value == null) {
                AsyncStorage.setItem('alreadyLaunched', 'true'); // No need to wait for `setItem` to finish, although you might want to handle errors
                setIsFirstLaunch(true);
            } else {
                setIsFirstLaunch(false);
            }
        }); // Add some error handling, also you can simply do setIsFirstLaunch(null)
    }, []);

    if (isFirstLaunch === null) {
        return null; // This is the 'tricky' part: The query to AsyncStorage is not finished, but we have to present something to the user. Null will just render nothing, so you can also put a placeholder of some sort, but effectively the interval between the first mount and AsyncStorage retrieving your data won't be noticeable to the user. But if you want to display anything then you can use a LOADER here
    } else if (isFirstLaunch == true) {
        routeName = 'Preview';
    } else {
        routeName = 'GeneralUser';
    }

    return (

        <Stack.Navigator initialRouteName={routeName}>
            <Stack.Screen
                name="Preview"
                component={PreviewScreen}
                options={{ header: () => null }}
            />
            <Stack.Screen
                name="GeneralUser"
                component={GeneralUserScreen}
                options={{ header: () => null }}
            />
            <Stack.Screen
                name="PanicSymtomp"
                component={PanicSymtompScreen}
                options={({ navigation }) => ({
                    title: 'โรคแพนิค',
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
                                onPress={() => navigation.navigate('GeneralUser')}
                            />
                        </View>
                    ),
                })}
            />
            <Stack.Screen
                name="PanicTest"
                component={PanicTestScreen}
                options={({ navigation }) => ({
                    title: 'แบบประเมินอาการแพนิค',
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
                                onPress={() => navigation.navigate('GeneralUser')}
                            />
                        </View>
                    ),
                })}
            />
            <Stack.Screen
                name="Signup"
                component={SignupScreen}
                options={({ navigation }) => ({
                    title: '',
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
                name="Signin"
                component={SigninScreen}
                options={{ header: () => null }}
            />
        </Stack.Navigator>

    );
};

export default AuthStack;