import React from 'react';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import Background from '../components/Background';
import {DARKGREEN} from '../constants/colors';
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const Login = props => {
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
          Login
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
            Welcome Back
          </Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 19,
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
            Login to your account
          </Text>

          <InputField placeholder={'Email'} keyboardType={'email-address'} />
          <InputField placeholder={'Password'} secureTextEntry={true} />

          <View style={{marginBottom: 200}}></View>

          <CustomButton
            textColor={'#FFF'}
            bgColor={DARKGREEN}
            btnLabel="Login"
            onPress={() => {
              alert('Login to app');
            }}
          />

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              Don't have an account ?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Signup')}>
              <Text
                style={{color: DARKGREEN, fontWeight: 'bold', fontSize: 16}}>
                Signup
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Login;
