import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  const [number] = React.useState('código');
  return (


    <SafeAreaView style={styles.container}>
        <AssetExample />
<View style = {styles.estilo}>

  <View style = {styles.linha2}> 
  </View>

     <TextInput
        style={styles.input}
        onChangeText={Number}
        value={number}
        placeholder="Password"
        keyboardType="numeric"
          />

    <TouchableOpacity
    
          style={styles.botao}
          onPress={ () => {this.click()}}
          >
          <Text style={styles.botaoText}>Ativar</Text>
          </TouchableOpacity>
          </View>
          <View style ={styles.linha}>  
</View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    
  },

estilo:{
  marginTop: -590,
  justifyContent: 'center',
    alignItems: 'center',
},

botao: {
    width: 250,
    height: 40,
    margintop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5aa2d0',
  
  },
  botaoText: {
    fontsize: 16,
    fontWeight: 'bold',
    color: '#000',
  },

input:{
  height: 40,
  borderWidth: 8,
  padding: 20,
  backgroundColor: 'black',
  width: 300,
  color: 'white',
  
},

linha:{
  width: 250,
  marginTop: -50,
  marginBottom: -200,
  border: '1.5px solid #5aa2d0',
},

linha2: {
  width: 320,
  marginTop: -120,
  marginBottom: 200,
  border: '1.5px solid #5aa2d0',
},
  
});
