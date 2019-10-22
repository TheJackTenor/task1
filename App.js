import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';



export default class App extends React.Component {
  render() {
    let dataDiri = {
      nama: 'Citra Putri',
      batch : '#9'
    };
    let foto = {
      uri: 'http://lh3.googleusercontent.com/-6f6paMaVF64/AAAAAAAAAAI/AAAAAAAAAiA/czvGPXSoju4/s128-c0x00000000-cc-rp-mo/photo.jpg'
    };
    return (
      <View style={styles.container}>
        <Text>Nama: </Text>
        <Text style={styles.content}>{dataDiri.nama}</Text>
        <Image source={foto} style={{height:'30%',width:'55%'}}/>
        <Text>Batch:</Text>
        <Text style={styles.content}>{dataDiri.batch}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    fontSize:20,
    fontWeight:'bold'
  }
});
