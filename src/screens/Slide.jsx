import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';

const Slide = () => {
  const translateY = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();
  const screenHeight = Dimensions.get('window').height;

  useEffect(() => {
    const startAnimation = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(translateY, {
            toValue: screenHeight - 100,
            duration:15000,
            useNativeDriver: true,
          }),
          Animated.timing(translateY, {
            toValue: 0,
            duration: 15000,
            useNativeDriver: true,
          }),
        ])
      ).start();
    };

    startAnimation();
  }, [translateY, screenHeight]);

  const handlePress = () => {
    navigation.navigate('Splash');
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slide, { transform: [{ translateY }] }]}>
        <TouchableOpacity onPress={handlePress}>
          <Text style={styles.text}>START</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default Slide;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',

  },
  slide: {
    width: 150,
    height: 55,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    position: 'absolute',
    top: 10,
    bottom:10,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});
