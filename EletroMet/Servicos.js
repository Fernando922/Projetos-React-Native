import React, { Component } from 'react'
import { View, Text, ImageBackground, Image, ScrollView } from 'react-native'
import styles from './estilos.js'




export default class Servicos extends Component{
      static navigationOptions = {
            title: 'Serviços',
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
                                    <View style={styles.viewServico}>
                                          <View style={styles.viewIcone}>
                                                <Image source={require('./icones/tv.png')} style={styles.servicoIcone}/>
                                                <Image source={require('./icones/internet.png')} style={styles.servicoIcone}/>
                                                <Image source={require('./icones/telefone.png')} style={styles.servicoIcone}/>
                                          </View>

                                          <View style={styles.viewDescricao}>
                                                <Text style={styles.servDescricao}>Combo</Text>
                                                <Text style={styles.servPontos}>5 Pontos</Text>                                  
                                          </View>                           
                                    </View>

                                    <View style={styles.viewServico}>
                                          <View style={styles.viewIcone}>
                                                <Image source={require('./icones/tv2.png')} style={styles.servicoIcone}/>
                                                <Image source={require('./icones/internet.png')} style={styles.servicoIcone}/>
                                                <Image source={require('./icones/telefone.png')} style={styles.servicoIcone}/>
                                          </View>

                                          <View style={styles.viewDescricao}>
                                                <Text style={styles.servDescricao}>Combo Duplo</Text>
                                                <Text style={styles.servPontos}>6 Pontos</Text>                                  
                                          </View>                           
                                    </View>

                                    <View style={styles.viewServico}>
                                          <View style={styles.viewIcone}>
                                                <Image source={require('./icones/tv.png')} style={styles.servicoIcone}/>
                                          </View>

                                          <View style={styles.viewDescricao}>
                                                <Text style={styles.servDescricao}>Tv</Text>
                                                <Text style={styles.servPontos}>4 Pontos</Text>                                  
                                          </View>                           
                                    </View>

                                    <View style={styles.viewServico}>
                                          <View style={styles.viewIcone}>
                                                <Image source={require('./icones/internet.png')} style={styles.servicoIcone}/>
                                          </View>

                                          <View style={styles.viewDescricao}>
                                                <Text style={styles.servDescricao}>Internet</Text>
                                                <Text style={styles.servPontos}>4 Pontos</Text>                                  
                                          </View>                           
                                    </View>


                                    <View style={styles.viewServico}>
                                          <View style={styles.viewIcone}>
                                                <Image source={require('./icones/telefone.png')} style={styles.servicoIcone}/>
                                          </View>

                                          <View style={styles.viewDescricao}>
                                                <Text style={styles.servDescricao}>Telefone</Text>
                                                <Text style={styles.servPontos}>4 Pontos</Text>                                  
                                          </View>                           
                                    </View>

                                    <View style={styles.viewServico}>
                                          <View style={styles.viewIcone}>
                                                <Image source={require('./icones/servico.png')} style={styles.servicoIcone}/>
                                          </View>

                                          <View style={styles.viewDescricao}>
                                                <Text style={styles.servDescricao}>Serviços</Text>
                                                <Text style={styles.servPontos}>4 Pontos</Text>                                  
                                          </View>                           
                                    </View>

                                    <View style={styles.viewServico}>
                                          <View style={styles.viewIcone}>
                                                <Image source={require('./icones/reinstalacao.png')} style={styles.servicoIcone}/>
                                          </View>

                                          <View style={styles.viewDescricao}>
                                                <Text style={styles.servDescricao}>Reinstalação</Text>
                                                <Text style={styles.servPontos}>5 Pontos</Text>                                  
                                          </View>                           
                                    </View>
                              </View>   
                        </ScrollView>    
                  </ImageBackground>
            )
      }
}