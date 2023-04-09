import React from 'react';
import {TextInput} from 'react-native';
import {DARKGREEN} from '../constants/colors';

const InputField = props => {
  return (
    <TextInput
      {...props}
      style={{
        borderRadius: 100,
        color: DARKGREEN,
        paddingHorizontal: 10,
        width: '80%',
        backgroundColor: 'rgb(220, 220, 220)',
        marginVertical: 10,
      }}
      placeholderTextColor={DARKGREEN}
    />
  );
};

export default InputField;
