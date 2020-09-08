import React from 'react';
import { View , Text , Image, StyleSheet} from 'react-native';

export function Profile(){
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={styles.container}></View>
            <Image style={{ width: 150, height: 150, borderRadius:500}} source={require('../pages/dudabonita.jpg')}/>
            <Text></Text>
            <Text style={{color: '#FAFAFA',fontSize: 20}}>Eduarda</Text>          
            <Text style={{color: '#DEDEDE',fontSize: 20}}>18</Text> 
            <Text style={{color: '#DEDEDE',fontSize: 20}}>Futura dona de Empresa</Text> 

          <View style={[styles.views, styles.Quadrado]}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color:'#696969'}}>Minhas Empresas</Text>
          <Text style={{fontSize: 12, color:'#DEDEDE'}}>Doceria, Restaurante, Boate, Livros Encantados</Text>

          <Text style={{fontSize: 18, fontWeight: 'bold', color:'#696969'}}>Utensílios que usamos</Text>
          <Text style={{fontSize: 12, color:'#DEDEDE'}}>Formas, bicos para confeitar, tigelas, medidores, balança...</Text>

          <Text style={{fontSize: 18, fontWeight: 'bold', color:'#696969'}}>Eu gostaria de trabalhar com:</Text>
          <Text style={{fontSize: 12, color:'#DEDEDE'}}>Eu gostaria de ser uma super chefe de cozinha, uma doceira e ter a minha própria empresa.</Text>
      </View>
      </View>
    )
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
      width:240,
      height:350,
      margin:20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    Quadrado:{
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        backgroundColor: '#FFF',
        shadowColor: '#DEDEDE',
        shadowOffset: {widht: 5, height: 5},
        shadowOpacity: 0.8,
        shadowRadius: 3,
        borderRadius: 5,
    },
});

