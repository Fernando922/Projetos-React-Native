import React, { Component } from 'react'
import { Text, Image, TouchableOpacity, View, ImageBackground} from 'react-native'
import styles from '../estilos'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
      adicionar,
} from '../eletroActions'

class Tv extends Component{
      static navigationOptions = {
            title: 'Tv',
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
                  <ImageBackground source={require('../imagens/scroll.jpg')} style={styles.fundo}>
                        <View style={styles.confirmaContainer}>
                            
                              <Text style={styles.textoConfirma}>Tv</Text>
                              
                              <View style={styles.linhaConfirma}>
                                    <Image source={require('../icones/tv.png')} style={styles.iconesConfirma}/>
                              </View>
                              
                              <View style={styles.confirmaTotal}>
                                    <Text style={styles.textoConfirma}>Total de Pontos:</Text>
                                    <Text style={styles.textoConfirma}>4 pontos</Text>
                              </View>
                              
                              <View style={styles.confirma}>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Menu')}>
                                          <Image source={require('../icones/cancelar.png')} style={styles.botoes}/>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() => {this.props.adicionar(4,'Tv'),this.props.navigation.navigate('Menu')}}>
                                          <Image source={require('../icones/confirmar.png')} style={styles.botoes}/>
                                    </TouchableOpacity>     
                              </View>
                        </View>                           
                  </ImageBackground>
            )
      }   
}

const mapStateToProps = state => ({eletroReducer: state.eletroReducer})
const mapDispatchToProps = dispatch => bindActionCreators({ adicionar }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps )(Tv)
