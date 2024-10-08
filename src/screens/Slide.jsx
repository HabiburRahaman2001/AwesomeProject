import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, TextInput, View, ToastAndroid } from 'react-native';

const Slide = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogined, setIsLogined] = useState(false);
  const [isLoginAttempted, setIsLoginAttempted] = useState(false);

  const inputChangeHandler = (value, name) => {
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const login = () => {
    setIsLoginAttempted(true);
    if (username === 'code' && password === 'code') {
      setIsLogined(true);
    } else {
      setIsLogined(false);
    }
  };



  return (
    <View style={styles.wrapper} testID="app-root" accessibilityLabel="app-root">
      <Text style={styles.header}>Login</Text>
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
      {isLoginAttempted && (
        <Text style={[styles.loginStatus,
        { color: isLogined ? '#27ae60' : '#e74c3c' }
        ]} accessibilityLabel="loginstatus">
          {isLogined ? "Login Successful!" : "Login Failed"}
        </Text>
      )}
      <TouchableOpacity
        style={styles.buttonContainer}
        accessibilityLabel="login"
        onPress={login}
      >
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

const InputField = ({ name, placeholder, value, onChangeText, secureTextEntry }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        accessibilityLabel={name}
        placeholder={placeholder}
        placeholderTextColor="#bbb"
        style={styles.input}
        secureTextEntry={secureTextEntry}
        onChangeText={(text) => onChangeText(text, name)}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#2c3e50',
  },
  inputContainer: {
    borderBottomColor: '#dfe6e9',
    backgroundColor: '#ffffff',
    borderRadius: 25,
    marginBottom: 20,
    paddingHorizontal: 15,
    paddingVertical: 5,
    width: '95%',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  input: {
    height: 50,
    fontSize: 16,
    color: '#2c3e50',
    width: '90%'
  },
  loginStatus: {
    marginVertical: 15,
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    backgroundColor: '#2980b9',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 30,
    elevation: 3,
    marginTop: 10,
    shadowColor: '#2c3e50',
    shadowOpacity: 0.4,
    shadowRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
});

export default Slide;
