import React, { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Animatable from 'react-native-animatable';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
      return () => {};
    }, [])
  );

  return (
    <SafeAreaView style={styles.container}>
      <Animatable.Image
        animation={'zoomIn'}
        duration={1000}
        source={require('../assets/images/plate2.jpg')}
        style={[styles.image1, styles.imageTopLeft]}
      />
      <Animatable.Image
        animation={'zoomIn'}
        duration={1200}
        source={require('../assets/images/plate4.png')}
        style={[styles.image2, styles.imageTopRight]}
      />
      <Animatable.Image
        animation={'zoomIn'}
        duration={1400}
        source={require('../assets/images/plate2.jpg')}
        style={[styles.image3, styles.imageBottomRight]}
      />

      <Animatable.View
        animation={'fadeInDown'}
        duration={1000}
        style={styles.header}
      >
        <Animatable.Text
          animation={'slideInRight'}
          duration={1500}
          style={styles.title}
        >
          Welcome!
        </Animatable.Text>
        <Animatable.Text
          animation={'fadeInUp'}
          duration={1000}
          style={styles.subtitle}
        >
          In an animation project.
        </Animatable.Text>
      </Animatable.View>

      <Animatable.View animation={'fadeInUp'} duration={1000}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Menu')}
        >
          <Animatable.Text
            animation={'pulse'}
            easing="ease-out"
            iterationCount="infinite"
            style={styles.buttonText}
          >
            Get Started
          </Animatable.Text>
        </TouchableOpacity>
      </Animatable.View>
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  image1: {
    position: 'absolute',
    width: 250,
    height: 250,
  },
  image2: {
    position: 'absolute',
    width: 90,
    height: 90,
  },
  image3: {
    position: 'absolute',
    width: 250,
    height: 250,
  },
  imageTopLeft: {
    top: -30,
    left: -30,
  },
  imageTopRight: {
    right: -20,
    top: 130,
  },
  imageBottomRight: {
    bottom: -30,
    right: -30,
  },
  header: {
    marginBottom: 200,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginTop: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'red',
    paddingVertical: 15,
    paddingHorizontal: 70,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 10,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
