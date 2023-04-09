import React from 'react';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import Background from '../components/Background';
import {DARKGREEN} from '../constants/colors';
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const Signup = props => {
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
            marginTop: 10,
          }}>
          Register
        </Text>

        <Text
          style={{
            color: '#FFF',
            fontSize: 19,
            fontWeight: 'bold',
            marginBottom: 20,
          }}>
          Create a new account
        </Text>
        <View
          style={{
            backgroundColor: '#FFF',
            width: screenWidth * 1.0,
            height: screenHeight,
            borderTopLeftRadius: 130,
            paddingTop: 50,
            alignItems: 'center',
          }}>
          <InputField placeholder={'Username'} />
          <InputField placeholder={'Email'} keyboardType={'email-address'} />
          <InputField placeholder={'Password'} secureTextEntry={true} />
          <InputField placeholder={'Confirm Password'} secureTextEntry={true} />

          <View style={{marginBottom: 200}}></View>

          <CustomButton
            textColor={'#FFF'}
            bgColor={DARKGREEN}
            btnLabel="Signup"
            onPress={() => {
              alert('Signup to app');
            }}
          />

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              Already have an account ?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Login')}>
              <Text
                style={{color: DARKGREEN, fontWeight: 'bold', fontSize: 16}}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Signup;
