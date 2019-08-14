import React,  { Component } from 'react'
import { Text, View, TouchableOpacity, ImageBackground, Image } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Inserir from './Inserir.js'
import Status from './Status.js'
import Executados from './Executados.js'
import Tabelas from './Tabelas.js'
import Metas from './Metas.js'
import Servicos from './Servicos.js'
import Meses from './Meses.js'
import Combo from './ConfirmaInserir/Combo.js'
import Combo2 from './ConfirmaInserir/Combo2.js'
import Internet from './ConfirmaInserir/Internet.js'
import Reinstalacao from './ConfirmaInserir/Reinstalacao.js'
import CServicos from './ConfirmaInserir/CServicos.js'
import Telefone from './ConfirmaInserir/Telefone.js'
import Tv from './ConfirmaInserir/Tv.js'
import styles from './estilos.js'

class Menu extends Component{
      static navigationOptions = {
            title: 'Menu Principal',
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
                        <View style={styles.principalContainer}>
                              <View style={styles.principalLinhaUm}>
                                    <View style={styles.principalLinhaUmItemUm}>
                                          <TouchableOpacity onPress={() => this.props.navigation.navigate('Inserir')}>
                                                <Image source={require('./icones/inserir.png')}  style={styles.menuIcone} />
                                                <Text style={styles.labelIcone}>Inserir Serviço</Text>
                                          </TouchableOpacity>      
                                    </View> 

                                    <View style={styles.principalLinhaUmItemDois}>
                                          <TouchableOpacity onPress={() => this.props.navigation.navigate('Status')}>                            
                                                <Image source={require('./icones/status.png')}  style={styles.menuIcone}/>
                                                <Text style={styles.labelIcone}>Ver Status</Text>
                                          </TouchableOpacity>      
                                    </View> 
                              </View>

                              <View style={styles.principalLinhaDois}>
                                    <View style={styles.principalLinhaDoisItemUm}>
                                          <TouchableOpacity onPress={() => this.props.navigation.navigate('Executados')}>
                                                <Image source={require('./icones/executados.png')}  style={styles.menuIcone}/>
                                                <Text style={styles.labelIcone}>Executados</Text>
                                          </TouchableOpacity>      
                                    </View> 

                                    <View style={styles.principalLinhaDoisItemDois}>
                                          <TouchableOpacity onPress={() => this.props.navigation.navigate('Tabelas')}>
                                                <Image source={require('./icones/tabelas.png')}  style={styles.menuIcone}/>
                                                <Text style={styles.labelIcone}>Ver Tabelas</Text>
                                          </TouchableOpacity>      
                                    </View> 
                              </View>
                        </View>
                  </ImageBackground>     
            )
      }  
}

const RootStack = createStackNavigator(
      {
            Menu: Menu,
            Inserir: Inserir,
            Status: Status,
            Executados: Executados,
            Tabelas: Tabelas,
            Metas: Metas,
            Servicos: Servicos,
            Meses: Meses,
            Combo: Combo,
            Combo2: Combo2,
            Internet:Internet,
            Reinstalacao:Reinstalacao,
            CServicos:CServicos,
            Telefone:Telefone,
            Tv:Tv
      },
      
      {
            initialRouteName: 'Menu'
      }

)

const AppContainer = createAppContainer(RootStack)

export default class Principal extends Component{
      render(){
            return <AppContainer/>
      }
}






