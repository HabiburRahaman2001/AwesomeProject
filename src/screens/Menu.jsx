import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  Image,
  PanResponder,
  Animated,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Animatable from 'react-native-animatable';

const foodList = [
  { id: '1', name: 'Pizza', image: require('../assets/images/pizza.jpg') },
  { id: '2', name: 'Biryani', image: require('../assets/images/biryani.jpg') },
  { id: '3', name: 'Momo', image: require('../assets/images/momo.jpg') },
  { id: '4', name: 'Nun', image: require('../assets/images/nun.jpg') },
  { id: '5', name: 'Chawmin', image: require('../assets/images/chawmin.jpg') },
  { id: '6', name: 'Butter Chicken', image: require('../assets/images/butterchicken.jpg') },
  { id: '7', name: 'Pizza', image: require('../assets/images/pizza.jpg') },
  { id: '8', name: 'Biryani', image: require('../assets/images/biryani.jpg') },
  { id: '9', name: 'Momo', image: require('../assets/images/momo.jpg') },
  { id: '10', name: 'Nun', image: require('../assets/images/nun.jpg') },
  { id: '11', name: 'Chawmin', image: require('../assets/images/chawmin.jpg') },
  { id: '12', name: 'Butter Chicken', image: require('../assets/images/butterchicken.jpg') },
];

const Menu = () => {
  const [positions, setPositions] = useState(
    foodList.map(() => new Animated.ValueXY())
  );

  const panResponderRefs = useRef(
    foodList.map((_, index) =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (event, gesture) => {
          positions[index].setValue({
            x: gesture.dx,
            y: gesture.dy,
          });
        },
        onPanResponderRelease: () => {
          Animated.spring(positions[index], {
            toValue: { x: 0, y: 0 },
            useNativeDriver: false,
          }).start();
        },
      })
    )
  ).current;

  const renderItem = ({ item, index }) => (
    <Animated.View
    animation="slideInUp"
    duration={1000}
    delay={item.id * 100}
      {...panResponderRefs[index].panHandlers}
      style={[
        styles.itemContainer,
        {
          transform: positions[index].getTranslateTransform(),
        },
      ]}
    >
      <Animatable.Image
        animation="zoomIn"
        duration={1500}
        source={item.image}
        style={styles.image}
      />
      <Animatable.Text animation="bounceInRight" delay={500} style={styles.text}>
        {item.name}
      </Animatable.Text>
    </Animated.View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <Animatable.Text animation="slideInDown" duration={1000} style={styles.headerText}>
        Menu List
      </Animatable.Text>
      <FlatList
        data={foodList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
        contentContainerStyle={styles.container}
      />
    </SafeAreaView>
  );
};

export default Menu;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  container: {
    padding: 10,
  },
  itemContainer: {
    flex: 1,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
    borderRadius: 15,
    backgroundColor: '#fff',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  image: {
    width: Dimensions.get('window').width / 3 - 20,
    height: Dimensions.get('window').width / 3 - 20,
    borderRadius: 10,
  },
  text: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  headerText: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '900',
    color: 'red',
    marginVertical: 15,
  },
});
