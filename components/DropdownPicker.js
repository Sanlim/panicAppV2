import React, { useCallback, useState } from 'react';
import { Picker } from '@react-native-community/picker';
import { useFocusEffect } from '@react-navigation/native';

const Item = Picker.Item;

const DropdownPicker = () => {
    const [value, setValue] = useState('key0');

    useFocusEffect(
        useCallback(() => {
            return () => {
                setValue('key0');
            };
        }, [])
    );

    return (

        <Picker
            selectedValue={value}
            onValueChange={(v) => setValue(v)}
            mode="dropdown"
        >
            <Item label="0" value="key0" />
            <Item label="1" value="key1" />
            <Item label="2" value="key2" />
            <Item label="3" value="key3" />
            <Item label="4" value="key4" />
            <Item label="5" value="key5" />
            <Item label="6" value="key6" />
            <Item label="7" value="key7" />
            <Item label="8" value="key8" />
            <Item label="9" value="key9" />
            <Item label="10" value="key10" />
        </Picker>
    );
}

export default DropdownPicker;