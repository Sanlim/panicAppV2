import React, { useState, useCallback } from 'react';
import { Checkbox } from 'react-native-paper';
import { useFocusEffect } from '@react-navigation/native';

const Checkboxes = () => {
  const [checked, setChecked] = useState(false);

  useFocusEffect(
    useCallback(() => {
      return () => {
        setChecked(false);
      };
    }, [])
  );

  return (
    <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked)
      }}
    />
  );
};

export default Checkboxes;