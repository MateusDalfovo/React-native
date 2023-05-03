import * as React from 'react';
import { Text, View, StyleSheet , Button} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
    <Card>
        <AssetExample />
      </Card>
      
      <button style={styles.botao1}> Assinar novo plano </button>
      <button style={styles.botao2}> Redefinir dispositivos </button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#000',
    
  },

  botao1:{
    height: 30, 
    width: 200,
    backgroundColor: '#5aa2d0',
    color: 'white',
    borderRadius: 5,
    marginBottom: 5,
    marginTop: -80,
    zIndex: 2,
  },
  
  botao2:{
  
  height: 30,
  width: 200,
  backgroundColor: '#5aa2d0',
  color: 'white',
  borderRadius: 5,
  marginBottom: 600,
  zIndex: 2,
  },
});
