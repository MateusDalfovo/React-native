import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/imagem_camera.jpg')} />
      <Image style={styles.logo} source={require('../assets/logo_3_pontinhos.jpg')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf:'flex-end',
    flexDirection:'row',
    padding:6,
    marginLeft:250,
    marginBottom: 100,
  },
  
  logo: {
    height: 60,
    width: 70,
  }
});
