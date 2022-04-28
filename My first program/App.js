import React, {useState} from 'react';
import Constants from 'expo-constants';
import AssetExample from './components/AssetExample';
import { Card } from 'react-native-paper';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';


export default function App() {

  const [nome, setNome] = useState('');
  
    function enviaInfo(){
      const nomeAtrib = nome;
        alert ('Salve '+nomeAtrib+', seja bem vindo!');

}

  return (

    <View style={styles.container}>

      <Text style={styles.titulo}>

        My first Program

      </Text>

      <TextInput style = {styles.campo} value = {nome} placeholder = 'Digite seu nome' onChangeText = {(nome) => setNome (nome)}/>

        <TouchableOpacity style = {styles.botao} onPress = {enviaInfo}>

        <Text style = {styles.textobotao}> Mostrar </Text>

      </TouchableOpacity>

     
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },

  titulo: {
    margin: 24,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  campo: {
    backgroundColor: '#000',
    borderRadius: 10,
    fontSize: 20,
    color: '#fff',
    margin: 10,
    padding: 10
  },

  botao: {
    justifyContent: "center",
    alignItems: 'center',
    margin: 15,
    borderRadius: 10,
    backgroundColor: '#FFC222',
    padding:8
  },

  textobotao: {
    justifyContent: "center",
    fontSize: 15,
    color: '#000',
    
  }

});

