import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
      </Text>


      <Image style={styles.logo_picos} source={require('../assets/picos.jpg')} />      
      <Image style={styles.logo_cameras} source={require('../assets/cameras.jpg')} /> 
          <Text style={styles.labelStyles}>{'\n'} Picos </Text>

      <Image style={styles.logo_favoritos} source={require('../assets/favoritos.jpg')} />
          <Text style={styles.labelStyles1}>{'\n'} Multi {'\n'} Câmeras </Text>

      <Image style={styles.logo_usuario} source={require('../assets/usuario.jpg')} />
            <Text style={styles.labelStyles2}>{'\n'} Favoritas </Text>
            <Text style={styles.labelStyles3}>{'\n'} Meu plano </Text>

    </View>
  );
}

const styles = StyleSheet.create({

labelStyles:{
  marginLeft: -260,
  marginTop: 150,
  color: '#ffff',
},

labelStyles1:{
  marginLeft: 160,
  marginTop: 170,
  color: '#ffff',
},

labelStyles2:{
  marginLeft: -260,
  marginTop: 450,
  color: '#ffff',
},

labelStyles3:{
 marginLeft: 15,
 marginRight: 50,
  marginTop: 450,
  color: '#ffff',
},

///////
  container: {
    alignItems: 'center',
    justifyContent: "space-between",
    flexDirection: "row",
  },
  paragraph: {
    margin: -300,
    fontWeight: 'bold',
    textAlign: 'center',
  },

//////////

  logo_picos: {
    marginTop: 70, 
    marginLeft: 640,
    height: 55,
    width: 90,
    alignSelf: 'center',
  },
  logo_cameras: {  
    marginLeft: 20,
    marginTop: 70,  
    height: 60,
    width: 70,
    alignSelf: 'center',
  },

  logo_favoritos:{
    marginTop: 370, 
    marginLeft: -120,
    marginRight: -110,
    height: 60,
    width: 90,
    alignSelf: 'center',
  },

  logo_usuario:{
    marginTop: 370, 
    marginLeft: -180, 
    height: 70,
    width: 85,
    alignSelf: 'center',
  },





});
