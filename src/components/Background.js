import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';

const Background = ({children}) => {
  return (
    <View>
      <ImageBackground
        source={require('../assets/images/leaves.png')}
        style={{height: '100%'}}
      />
      <View style={styles.overlay}></View>

      <View style={{position: 'absolute'}}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
});
export default Background;
