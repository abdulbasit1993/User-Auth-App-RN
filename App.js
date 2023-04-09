import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import Home from './src/screens/Home';
import Dashboard from './src/screens/Dashboard';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

function App() {
  const [token, setToken] = useState(null);
  const [isSignedIn, setIsSignedIn] = useState(false);

  console.log('isSignedIn ==>> ', isSignedIn);

  const getToken = async () => {
    try {
      return await AsyncStorage.getItem('@token');
    } catch (e) {
      // read error
    }
  };

  useEffect(() => {
    getToken()
      .then(value => {
        console.log('token is ===>> ', value);
        if (value === null) {
          console.log('No token!');
          setIsSignedIn(false);
        } else {
          console.log('token is there!');
          setIsSignedIn(true);
        }
        setToken(value);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isSignedIn ? (
          <>
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="Home" component={Home} />
          </>
        ) : (
          <>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Dashboard" component={Dashboard} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
