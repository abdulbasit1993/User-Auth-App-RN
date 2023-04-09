import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const CustomButton = ({bgColor, btnLabel, textColor, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: bgColor,
        borderRadius: 100,
        alignItems: 'center',
        width: 350,
        paddingVertical: 5,
        marginVertical: 10,
      }}>
      <Text style={{color: textColor, fontSize: 25, fontWeight: 'bold'}}>
        {btnLabel}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
