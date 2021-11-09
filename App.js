import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

function App(){
  const [img, setImg] = useState(require('./src/screens/biscoito.png'));
  const [textoFrase, setTextoFrase] = useState('"Testando"');

  return(
    <View style={styles.conteiner}>
      <Image
      source={img}
      style={styles.img}
      />
      <Text style={styles.textoFrase}> {textoFrase} </Text>
      <TouchableOpacity style={styles.botao} onPress={() => alert('TESTE')}>
        <View style={styles.bntarea}>
          <Text style={styles.bnttexto}>Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.botao, {marginTop: 10, backgroundColor: '#121212'}]} onPress={() => alert('TESTE')}>
        <View style={styles.bntarea}>
          <Text style={styles.bnttexto}>Reiniciar</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  conteiner:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img:{
    width: 230,
    height: 230,
  },
  textoFrase:{
    fontSize: 22,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao:{
    width: 230,
    height: 50,
    backgroundColor: '#ff8855',
    borderRadius: 30
  },
  bntarea:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bnttexto:{
    padding: 10,
    fontSize: 20,
    color: '#ddd',
    fontWeight: 'bold'
  },
})

export default App;
