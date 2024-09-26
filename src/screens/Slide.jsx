// import { useNavigation } from '@react-navigation/native';
// import React, { useEffect, useRef } from 'react';
// import { Animated, StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';

// const Slide = () => {
//   const translateY = useRef(new Animated.Value(0)).current;
//   const navigation = useNavigation();
//   const screenHeight = Dimensions.get('window').height;

//   useEffect(() => {
//     const startAnimation = () => {
//       Animated.loop(
//         Animated.sequence([
//           Animated.timing(translateY, {
//             toValue: screenHeight - 100,
//             duration:15000,
//             useNativeDriver: true,
//           }),
//           Animated.timing(translateY, {
//             toValue: 0,
//             duration: 15000,
//             useNativeDriver: true,
//           }),
//         ])
//       ).start();
//     };

//     startAnimation();
//   }, [translateY, screenHeight]);

//   const handlePress = () => {
//     navigation.navigate('Splash');
//   };

//   return (
//     <View style={styles.container}>
//       <Animated.View style={[styles.slide, { transform: [{ translateY }] }]}>
//         <TouchableOpacity onPress={handlePress}>
//           <Text style={styles.text}>TAPTAP</Text>
//         </TouchableOpacity>
//       </Animated.View>
//     </View>
//   );
// };

// export default Slide;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems:'center',

//   },
//   slide: {
//     width: 150,
//     height: 55,
//     backgroundColor: 'lightblue',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 10,
//     position: 'absolute',
//     top: 10,
//     bottom:10,
//   },
//   text: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
// });









import React, { useState } from 'react';
import { TouchableHighlight, StyleSheet, Text, TextInput, View, ToastAndroid } from 'react-native';

const Slide = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogined, setIsLogined] = useState(false);

  const inputChangeHandler = (value, name) => {
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const login = () => {
    if (username === 'codemagic' && password === 'nevercode') {
      setIsLogined(true);
    } else {
      setIsLogined(false);
    }
  };

  const fun = () => {
    ToastAndroid.show('A pikachu appeared nearby !', ToastAndroid.CENTER);
  };

  return (
    <View style={LOCAL_STYLES.wrapper} testID="app-root" accessibilityLabel="app-root">
      <InputField
        name="username"
        placeholder="Username"
        value={username}
        onChangeText={inputChangeHandler}
        secureTextEntry={false}
      />
      <InputField
        name="password"
        placeholder="Password"
        value={password}
        onChangeText={inputChangeHandler}
        secureTextEntry={true}
      />
      <Text accessibilityLabel="loginstatus">{isLogined ? "success" : "fail"}</Text>
      <TouchableHighlight
        style={LOCAL_STYLES.buttonContainer}
        accessibilityLabel="login"
        onPress={login}
      >
        <Text style={{ color: 'white' }}>Login</Text>
      </TouchableHighlight>
    </View>
  );
};

const InputField = ({ name, placeholder, value, onChangeText, secureTextEntry }) => {
  return (
    <View style={LOCAL_STYLES.inputContainer}>
      <TextInput
        accessibilityLabel={name}
        placeholder={placeholder}
        placeholderTextColor="white"
        style={LOCAL_STYLES.input}
        secureTextEntry={secureTextEntry}
        onChangeText={(text) => onChangeText(text, name)}
        value={value}  // Ensure this is set correctly
      />
    </View>
  );
};

const LOCAL_STYLES = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  inputContainer: {
    borderBottomColor: '#AFAFAF',
    backgroundColor: 'grey',
    borderBottomWidth: 1,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    borderColor: 'blue',
    borderWidth: 1
  },
  buttonContainer: {
    height: 45,
    width: 250,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 20,
    backgroundColor: "#00b5ec"
  },
  input: {
    color: 'black',
    width: '100%'
  }
});

export default Slide;
