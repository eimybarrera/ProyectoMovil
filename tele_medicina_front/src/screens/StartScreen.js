import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

const StartScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Estoy en el Start</Text>
      <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
        <Text> Ir a registrarme </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
        <Text> Ir a Loguearme </Text>
      </TouchableOpacity>
    </View>
  );
};

export default StartScreen;

