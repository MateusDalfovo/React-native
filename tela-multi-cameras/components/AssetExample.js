import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      
      <Image style={styles.logo} source={require('../assets/logosurf.png')} />
      <View style = {styles.linha}> </View>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  
linha:{
  width: 320,
  marginTop: -50,
  marginBottom: 200,
  border: '1.5px solid #5aa2d0',
},

  logo: {
    marginTop: -30,
    height: 128,
    width: 128,
  }
});
