import React, { Component } from 'react' 
import { View, Text, ImageBackground } from 'react-native'
import styles from './estilos.js'

export default class Metas extends Component{
      static navigationOptions = {
            title: 'Inserir Serviço',
            headerStyle: {
                  backgroundColor: '#000000',
            },
            headerTintColor: '#fff',

            headerTitleStyle: {
                  fontWeight: 'bold',
            },
      }
      render(){
            return(
                  <ImageBackground source={require('./imagens/fundo.png')} style={styles.fundo}>
                        <View style={styles.centro}>
                              <Text style={styles.tituloMeta}>Valores por ponto</Text>
                        </View>
                        
                        <View style={styles.metaContainer}>
                              <View>
                                    <Text style={styles.textoPontos}>0-400</Text>
                                    <Text style={styles.textoPontos}>401-450</Text>
                                    <Text style={styles.textoPontos}>451-500</Text>
                                    <Text style={styles.textoPontos}>501-551</Text>
                                    <Text style={styles.textoPontos}>551+</Text> 
                              </View>    

                              <View>
                                    <Text style={styles.textoValores}>R$ 2,00</Text>
                                    <Text style={styles.textoValores}>R$ 2,30</Text>
                                    <Text style={styles.textoValores}>R$ 2,60</Text>
                                    <Text style={styles.textoValores}>R$ 2,70</Text>
                                    <Text style={styles.textoValores}>R$ 3,00</Text> 
                              </View>
                        </View>  
                  </ImageBackground>
            )
      }
}
