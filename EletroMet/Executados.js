
import React, { Component } from 'react'
import {ImageBackground, View, Text, TouchableOpacity, ScrollView, Image} from 'react-native'
import styles from './estilos.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { 
      fechamento,
      remover,
      alterar 
} from './eletroActions'

class Executados extends Component{
      static navigationOptions = {
            title: 'Executados',
            headerStyle: {
                  backgroundColor: '#000000',
            },
            headerTintColor: '#fff',

            headerTitleStyle: {
                  fontWeight: 'bold',
            },
      }
      render(){
            
            let Arr = this.props.eletroReducer.executados.map((a, i) => {
            return (
                  <View key={i}>
                        <View style={styles.executado}>                       
                              <Text style={styles.desc}>{a.servico}</Text>
                              <View style={styles.executadoIcones}>
                                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('Inserir'), this.props.alterar(i)}}>
                                          <Image source={require('./icones/edit.png')}/>
                                    </TouchableOpacity>
                                          
                                    <TouchableOpacity onPress={() => this.props.remover(i)}>
                                          <Image source={require('./icones/delete.png')}/>
                                    </TouchableOpacity>
                              </View>
                        </View>
                  </View>
                  )                            
            }) 
            return(
                  <ImageBackground source={require('./imagens/scroll.jpg')} style={styles.fundo}>
                        <View style={styles.parent}>
                              <View style={styles.inicio}>
                                    <TouchableOpacity style={styles.novoMes} onPress={()=>{this.props.fechamento(0),this.props.navigation.navigate('Menu')}}>
                                          <Image source={require('./icones/date.png')} style={styles.mesImagem}/>
                                          <View style={styles.posTitulo}>
                                                <Text style={styles.mesTitulo}>Iniciar novo mês</Text>
                                          </View>
                                    </TouchableOpacity>
                              </View>
                              <View style={styles.executadosContainer}>
                                    <ScrollView>
                                          {Arr}
                                    </ScrollView>  
                              </View>
                        </View> 
                  </ImageBackground>
            )
      } 
}

const mapDispatchToProps = dispatch => bindActionCreators({ fechamento,remover,alterar }, dispatch)
const mapStateToProps = state => ({eletroReducer: state.eletroReducer})
export default connect(mapStateToProps, mapDispatchToProps)(Executados)