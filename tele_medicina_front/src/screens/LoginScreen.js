import React from 'react';
import { Text, View, TouchableOpacity } from "react-native";

const LoginScreen = ({ navigation }) => {
  return (
    <View>
      <Text> Estoy en el login</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Main')}>
        <Text> Iniciar sesión </Text>
      </TouchableOpacity>
    </View>
  );
}

export default LoginScreen;
