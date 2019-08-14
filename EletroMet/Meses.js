
import React, { Component } from 'react'
import {ImageBackground, View, Text, TouchableOpacity, ScrollView, Image} from 'react-native'
import styles from './estilos.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { deletaMes } from './eletroActions.js'

class Meses extends Component{
      static navigationOptions = {
            title: 'Meses Anteriores',
            headerStyle: {
                  backgroundColor: '#000000',
            },
            headerTintColor: '#fff',

            headerTitleStyle: {
                  fontWeight: 'bold',
            },
      }
      render(){
            let Meses = this.props.eletroReducer.meses.map((a, i) => {
            return (
                  <View key={i}>
                        <View style={styles.mesesConteudo}>
                              <View>
                                    <Text style={styles.mesesTexto}>{a.mes}/{a.ano} - {a.total} pts</Text> 
                              </View>                       
                              
                              <View>
                                    <TouchableOpacity onPress={() => this.props.deletaMes(i)}>
                                          <Image source={require('./icones/delete.png')}/>
                                    </TouchableOpacity>
                              </View>   
                        </View>
                  </View>
                  )                            
            }) 
            return(
                  <ImageBackground source={require('./imagens/fundo.png')} style={styles.fundo}>
                        <View>
                              <ScrollView>
                                    {Meses}
                              </ScrollView>                              
                        </View> 
                  </ImageBackground>
            )
      } 
}

const mapDispatchToProps = dispatch => bindActionCreators({ deletaMes }, dispatch)
const mapStateToProps = state => ({eletroReducer: state.eletroReducer})
export default connect(mapStateToProps, mapDispatchToProps)(Meses)
