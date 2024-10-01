import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
} from "react-native";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Por favor, ingresa email y contraseña.");
      return;
    }
    try {
     
      const response = await fetch(
        `http://localhost:8080/api/movil/pacientes/${email}/${password}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = await response.json();

      if (response.ok) {
        navigation.navigate("Main");
      } else {
        Alert.alert("Error", result.message || "Credenciales incorrectas.");
      }
    } catch (error) {
      Alert.alert("Error", "No se pudo conectar con el servidor.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> Hi, Welcome Back!</Text>
      <Text style={styles.subTitulo}> Hope you're doing fine</Text>
      <TextInput
        placeholder="Your Email"
        style={styles.imput}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Password"
        style={styles.imput}
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <TouchableOpacity onPress={handleLogin} style={styles.touch}>
        <Text style={styles.text}> Sign In</Text>
      </TouchableOpacity>
      <Text>Dont have an account yet?</Text>
      <TouchableOpacity onPress={() => navigation.navigate("RegisterScreen")}>
        <Text> Ir a registrarme </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titulo: {
    fontSize: 40,
    color: "#34435D",
    fontWeight: "bold",
  },
  subTitulo: {
    fontSize: 20,
    color: "gray",
  },
  imput: {
    padding: 10,
    paddingStart: 30,
    width: "80%",
    height: 50,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
  },
  touch: {
    padding: 10,
    paddingStart: 30,
    width: "80%",
    height: 50,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: "#1C2A3A",
    justifyContent: "center",
    borderRadius: 30,
  },
  text: {
    color: "#FFFFFF",
  },
});
export default LoginScreen;
