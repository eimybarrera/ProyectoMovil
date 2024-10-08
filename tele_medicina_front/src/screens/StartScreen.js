import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const StartScreen = ({ navigation }) => {
  return (
    <View style={styles.container}> 
      <View style={styles.containerbutton}>
      <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')} style={styles.touch}>
        <Text style={styles.text}> Ir a registrarme </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}  style={styles.touch}>
        <Text style={styles.text}> Ir a Loguearme </Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    
  },
  containerbutton:{
    justifyContent: "center",
    flexDirection:"row",
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

  touch: {
    padding: 10,
    paddingStart: 30,
    width: "70%",
    height: 50,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: "#1C2A3A",
    alignItems:'center',
    borderRadius: 10,
  },
  text: {
    color: "#FFFFFF",
  },
 
});
export default StartScreen;

