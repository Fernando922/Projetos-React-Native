import React, { Component } from 'react'
import {ImageBackground, View, Text, Image, TouchableOpacity} from 'react-native'
import styles from './estilos.js'

export default class Opcoes extends Component{
      static navigationOptions = {
            title: 'Ver Tabelas',
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
                        <View style={styles.tabelasContainer}>    
                              <View>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Metas')}>
                                          <Image source={require('./icones/metas.png')} style={styles.tabelasIcone}/>
                                    </TouchableOpacity>
                              </View>

                              <View>
                                    <Text style={styles.labelIcone}>Metas</Text>
                              </View>
                              
                              <View>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Servicos')}>
                                          <Image source={require('./icones/servicos.png')} style={styles.tabelasIcone}/>
                                    </TouchableOpacity>
                              </View>

                              <View>
                                    <Text style={styles.labelIcone}>Serviços</Text>
                              </View>

                              <View>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Meses')}>
                                          <Image source={require('./icones/meses.png')} style={styles.tabelasIcone}/>
                                    </TouchableOpacity>
                              </View>

                              <View>
                                    <Text style={styles.labelIcone}>Meses Anteriores</Text>
                              </View>
                        </View>       
                  </ImageBackground>     
            )
      } 
}



