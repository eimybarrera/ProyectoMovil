import React, { useState } from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,Image, Alert
} from "react-native";
const RegisterScreen = ({ navigation }) => {

  const [nombre,setNombre]= useState('')
  const [email,setEmail]= useState('')
  const [contrasenia,setContrasenia]= useState('')
  const [fecha_nacimiento,setFecha_nacimiento]= useState('')
  const [direccion,setDireccion]= useState('')
  const [genero,setgenero]= useState('')

  const handleRegistrer= async()=>{
    const userData={
      nombre,
      email,
      contrasenia,
      fecha_nacimiento,
      direccion,
      genero,
    }
    console.log('Datos enviados:', userData);
    try{
      const response =await fetch('http://localhost:8080/api/movil/pacientes',{
        method:'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })
      //const result = await response.text(); si mi backen retorna un string 
      const result = await response.json(); //si mi backen retorna un json 
      if (response.ok) {
       // console.log('Respuesta del servidor:', result) si quiero mostrar en pantalla el texto que retorna mi backen
        navigation.navigate("Main");
      }else{
        Alert.alert('Error', result.message || 'Hubo un problema con el registro.');
      }
    } catch (error) {
      Alert.alert('Error', 'No se pudo conectar con el servidor.');
    }
    }
  
  
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
      <Image 
        source={require('../../assets/profile.png')}
        style={styles.image}
        resizeMode="cover" 
      />
      </View>
      <Text style={styles.titulo}>Create Account</Text>
      <Text style={styles.subTitulo}> We are here to help you!</Text>
      <TextInput placeholder="nombre" style={styles.imput} value={nombre}  onChangeText={setNombre}  />
      <TextInput placeholder="email" style={styles.imput} value={email} onChangeText={setEmail} />
      <TextInput placeholder="contrasenia" style={styles.imput} value={contrasenia} onChangeText={setContrasenia} />
      <TextInput placeholder="fecha_nacimiento" style={styles.imput} value={fecha_nacimiento} onChangeText={setFecha_nacimiento} />
      <TextInput placeholder="direccion" style={styles.imput} value={direccion} onChangeText={setDireccion}/>
      <TextInput placeholder="genero" style={styles.imput} value={genero} onChangeText={setgenero}/>
      <TouchableOpacity
        onPress={handleRegistrer}
        style={styles.touch}
      >
        <Text style={styles.text}> Sign In</Text>
      </TouchableOpacity>
    </View>
  )
}
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
  image: {
    width: '100%', 
    height: '100%', 
  },
  imageContainer: {
    width: 150,  
    height: 150, 
    marginBottom: 20,
  },
});
export default RegisterScreen