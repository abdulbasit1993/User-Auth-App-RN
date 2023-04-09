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
import {postCall} from '../service/apiService';
import {BASE_URL} from '../constants/apiURL';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../components/Loader';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const Login = props => {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const [loginData, setLoginData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = email => {
    const emailRegex = /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    return emailRegex.test(email);
  };

  const storeToken = async token => {
    try {
      await AsyncStorage.setItem('@token', token);
    } catch (e) {
      // saving error
      console.log('Error: ', e);
    }
  };

  const handleLogin = () => {
    setIsLoading(true);
    if (data.email === '' || data.password === '') {
      ToastAndroid.show('Please enter Email/Password', ToastAndroid.SHORT);
      setIsLoading(false);
      return;
    }

    if (validateEmail(data.email)) {
      postCall(`${BASE_URL}/api/auth/login`, data)
        .then(res => {
          console.log('response data login ===>> ', res);
          storeToken(res?.data?.token);
          setLoginData(res?.data);
          setIsLoading(false);
          props.navigation.reset({
            index: 0,
            routes: [{name: 'Dashboard'}],
          });
        })
        .catch(err => {
          console.log('Error: ', err.response.data);
          setIsLoading(false);
          ToastAndroid.show(err.response.data.message, ToastAndroid.SHORT);
        });
    } else {
      ToastAndroid.show(
        'Please enter a valid Email Address!',
        ToastAndroid.SHORT,
      );
      setIsLoading(false);
      return;
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

          <InputField
            placeholder={'Email'}
            keyboardType={'email-address'}
            onChangeText={text => setData({...data, email: text})}
          />
          <InputField
            placeholder={'Password'}
            secureTextEntry={true}
            onChangeText={text => setData({...data, password: text})}
          />

          <View style={{marginBottom: 200}}></View>

          <CustomButton
            textColor={'#FFF'}
            bgColor={DARKGREEN}
            btnLabel="Login"
            onPress={() => {
              handleLogin();
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

      {isLoading && <Loader />}
    </Background>
  );
};

export default Login;
