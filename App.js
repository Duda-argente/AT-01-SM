import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/Entypo';

Icon.loadFont()


export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.views , styles.child1,]}> 
      <Icon name="person" size={30} color="black"></Icon>
        <Text>Perfil</Text>
      </View>
      <View style={[styles.views , styles.child2]}>
      <Icon name="local-see" size={30} color="black"></Icon>
        <Text>Câmera</Text>
      </View>
      <View style={[styles.views , styles.child3]}>
      <Icon2 name="log-out" size={30} color="black"></Icon2>
        <Text>Sair</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEDEDE',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  views:{
    width:290,
    height:190,
    margin:20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  child1:{
    backgroundColor: '#FAFAFA',
    shadowColor: '#DEDEDE',
    shadowOffset: {width:20, height:10},
    shadowOpacity:10,
    shadowRadius:20,
    elevation:1
  }, 
  child2: {
    backgroundColor: '#FAFAFA',
    shadowColor: '#DEDEDE',
    shadowOffset: {width:20, height:10},
    shadowOpacity:10,
    shadowRadius:5,
    elevation:1
  },
  child3: {
    backgroundColor: '#FAFAFA',
    shadowColor: '#DEDEDE',
    shadowOffset: {width:20, height:10},
    shadowOpacity:10,
    shadowRadius:5,
    elevation:1
  }
});
