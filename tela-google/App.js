import * as React from 'react';
import { Text, View, StyleSheet,Image,Input } from 'react-native';
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
      <Image style={styles.google} source={require('./assets/google_logo.png')} />
      <input style={styles.input} title="input" placeholder="Search or type URL..."/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.7,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
  
  input:{
    height:30,
    width:280,
    alignSelf: 'center',
    borderRadius: 4,
  },

google:{
  width:198,
  height:67,
  alignSelf:'center',
  margin:40,
},
  
});
