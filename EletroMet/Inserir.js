import React, { Component } from 'react'
import { View, Text, ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native'
import styles from './estilos.js'

export default class Inserir extends Component{
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
                  <ImageBackground source={require('./imagens/scroll.jpg')} style={styles.fundo}> 
                        <ScrollView>
                              <View style={styles.servicoContainer}>
                                    
                                    <TouchableOpacity style={styles.viewServico} onPress={() => this.props.navigation.navigate('Combo')}>
                                          <View style={styles.viewIcone}>
                                                <Image source={require('./icones/tv.png')} style={styles.servicoIcone}/>
                                                <Image source={require('./icones/internet.png')} style={styles.servicoIcone}/>
                                                <Image source={require('./icones/telefone.png')} style={styles.servicoIcone}/>
                                          </View>

                                          <View style={styles.viewNomeServico}>
                                                <Text style={styles.servDescricao}>Combo</Text>                                
                                          </View>                           
                                    </TouchableOpacity>
                                    

                                    <TouchableOpacity style={styles.viewServico} onPress={() => this.props.navigation.navigate('Combo2')}>
                                          <View style={styles.viewIcone}>
                                                <Image source={require('./icones/tv2.png')} style={styles.servicoIcone}/>
                                                <Image source={require('./icones/internet.png')} style={styles.servicoIcone}/>
                                                <Image source={require('./icones/telefone.png')} style={styles.servicoIcone}/>
                                          </View>

                                          <View style={styles.viewNomeServico}>
                                                <Text style={styles.servDescricao}>Combo Duplo</Text>                                
                                          </View>                           
                                    </TouchableOpacity>

                                    <TouchableOpacity style={styles.viewServico} onPress={() => this.props.navigation.navigate('Tv')}>
                                          <View style={styles.viewIcone}>
                                                <Image source={require('./icones/tv.png')} style={styles.servicoIcone}/>
                                          </View>

                                          <View style={styles.viewNomeServico}>
                                                <Text style={styles.servDescricao}>Tv</Text>                                 
                                          </View>                           
                                    </TouchableOpacity>

                                    <TouchableOpacity style={styles.viewServico} onPress={() => this.props.navigation.navigate('Internet')}>
                                          <View style={styles.viewIcone}>
                                                <Image source={require('./icones/internet.png')} style={styles.servicoIcone}/>
                                          </View>

                                          <View style={styles.viewNomeServico}>
                                                <Text style={styles.servDescricao}>Internet</Text>                                 
                                          </View>                           
                                    </TouchableOpacity>


                                    <TouchableOpacity style={styles.viewServico} onPress={() => this.props.navigation.navigate('Telefone')}>
                                          <View style={styles.viewIcone}>
                                                <Image source={require('./icones/telefone.png')} style={styles.servicoIcone}/>
                                          </View>

                                          <View style={styles.viewNomeServico}>
                                                <Text style={styles.servDescricao}>Telefone</Text>                                
                                          </View>                           
                                    </TouchableOpacity>

                                    <TouchableOpacity style={styles.viewServico} onPress={() => this.props.navigation.navigate('CServicos')}>
                                          <View style={styles.viewIcone}>
                                                <Image source={require('./icones/servico.png')} style={styles.servicoIcone}/>
                                          </View>

                                          <View style={styles.viewNomeServico}>
                                                <Text style={styles.servDescricao}>Serviços</Text>                                
                                          </View>                           
                                    </TouchableOpacity>

                                    <TouchableOpacity style={styles.viewServico} onPress={() => this.props.navigation.navigate('Reinstalacao')}>
                                          <View style={styles.viewIcone}>
                                                <Image source={require('./icones/reinstalacao.png')} style={styles.servicoIcone}/>
                                          </View>

                                          <View style={styles.viewNomeServico}>
                                                <Text style={styles.servDescricao}>Reinstalação</Text>                                
                                          </View>                           
                                    </TouchableOpacity>
                              </View>  
                        </ScrollView>     
                  </ImageBackground>
            )
      }
}

