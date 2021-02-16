import React, { useState } from 'react';
import { View, Button, Platform, Text, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import { windowHeight, windowWidth } from '../utils/Dimensions';

const CustomDatePicker = (props) => {
    const { textStyle } = props;
    const today = new Date();
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (e, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    return (
        <View>
            <View
                style={{
                    backgroundColor: '#FFFFFF',
                    overflow: 'hidden',
                    padding: 10,
                    marginTop: 5,
                    marginBottom: 10,
                    width: windowWidth / 3.5,
                    height: windowHeight / 20,
                    fontSize: 16,
                    borderRadius: 8,
                    borderWidth: 1,
                   alignItems: 'center',
                    justifyContent: 'center'
                }}>
                <TouchableOpacity onPress={showTimepicker} activeOpacity={0.2}>
                    <View>
                        <Text style={{ textStyle, fontSize: 18 }}>เลือกเวลา</Text>
                    </View>
                </TouchableOpacity>

            </View>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}
            <View>
                <Text>{today.getTime()}</Text>
            </View>
        </View>
    );
};

CustomDatePicker.defaultProps = {
    textStyle: {},
};

export default CustomDatePicker;