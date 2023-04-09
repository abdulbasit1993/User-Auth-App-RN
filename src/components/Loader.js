import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';

const Loader = () => {
  return (
    <View style={styles.loader}>
      <ActivityIndicator size="large" style={{color: '#FFF'}} />
      <Text style={{color: '#FFF', fontSize: 20, fontWeight: 'bold'}}>
        Loading...
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loading: {
    width: '100%',
    height: 100,
    backgroundColor: 'black',
  },
});

export default Loader;
