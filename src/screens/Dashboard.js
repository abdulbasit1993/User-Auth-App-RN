import React, {useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import Background from '../components/Background';
import {DARKGREEN} from '../constants/colors';
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const Dashboard = props => {
  const handleLogout = async () => {
    let keys = [];
    try {
      keys = await AsyncStorage.getAllKeys();
    } catch (e) {
      // read key error
    }

    console.log(keys);

    try {
      await AsyncStorage.multiRemove(keys);
      props.navigation.reset({
        index: 0,
        routes: [{name: 'Home'}],
      });
    } catch (e) {
      // remove error
    }
  };

  return (
    <Background>
      <View
        style={{
          alignItems: 'center',
          width: screenWidth * 1.0,
        }}>
        <Text
          style={{
            color: '#FFF',
            fontSize: 58,
            fontWeight: 'bold',
            marginVertical: 10,
          }}>
          Dashboard
        </Text>

        <View
          style={{
            backgroundColor: '#FFF',
            width: screenWidth * 1.0,
            height: screenHeight,
            borderTopLeftRadius: 130,
            paddingTop: 100,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 40, color: DARKGREEN, fontWeight: 'bold'}}>
            Hello User!
          </Text>

          <CustomButton
            textColor={'#FFF'}
            bgColor={DARKGREEN}
            btnLabel="Log Out"
            onPress={() => {
              handleLogout();
            }}
          />
        </View>
      </View>
    </Background>
  );
};

export default Dashboard;
