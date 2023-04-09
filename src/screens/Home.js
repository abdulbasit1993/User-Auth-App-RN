import React from 'react';
import {View, Text} from 'react-native';
import Background from '../components/Background';
import CustomButton from '../components/CustomButton';
import {GREEN, DARKGREEN} from '../constants/colors';

const Home = props => {
  return (
    <Background>
      <View style={{marginHorizontal: 40, marginVertical: 100}}>
        <Text style={{color: '#FFF', fontSize: 58}}>Welcome to</Text>
        <Text style={{color: '#FFF', fontSize: 58, marginBottom: 40}}>
          User Auth!
        </Text>

        <CustomButton
          bgColor={GREEN}
          textColor="#FFF"
          btnLabel="Login"
          onPress={() => props.navigation.navigate('Login')}
        />
        <CustomButton
          bgColor={'#FFF'}
          textColor={DARKGREEN}
          btnLabel="Register"
          onPress={() => props.navigation.navigate('Signup')}
        />
      </View>
    </Background>
  );
};

export default Home;
