import React, { Component } from 'react'
import {ImageBackground, View, Text} from 'react-native'
import styles from './estilos.js'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
      handleAdicionar
} from './eletroActions'

class Status extends Component{
      static navigationOptions = {
            title: 'Ver Status',
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
                        <View style={styles.statusContainer}>
                              <View style={styles.statusView}>
                                    <Text style={styles.statusDesc}>Pontos Acumulados</Text>
                                    <Text style={styles.statusValor}>{this.props.eletroReducer.acumulado}</Text>
                              </View>
                              <View style={styles.statusView}>
                                    <Text style={styles.statusDesc}>Meta Atual</Text>
                                    <Text style={styles.statusValor}>{this.props.eletroReducer.meta}</Text>
                              </View>
                              <View style={styles.statusView}>
                                    <Text style={styles.statusDesc}>Pontos para a</Text>
                                    <Text style={styles.statusDesc}>próxima meta</Text>
                                    <Text style={styles.statusValor}>{this.props.eletroReducer.restantes}</Text>
                              </View>
                              <View style={styles.statusView}>
                                    <Text style={styles.statusDesc}>Total a receber</Text>
                                    <Text style={styles.statusValor}>R$ {this.props.eletroReducer.valor}</Text>
                              </View>
                        </View>  
                  </ImageBackground>     
            )
      } 
}

const mapStateToProps = state => ({eletroReducer: state.eletroReducer})
const mapDispatchToProps = dispatch => bindActionCreators({ handleAdicionar }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps )(Status)
