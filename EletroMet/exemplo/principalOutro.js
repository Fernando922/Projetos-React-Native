import React, {Component} from 'react';
import Modal from 'react-native-modal';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { 
    adicionar,
    handleModal,
    mudaNome,
    mudaTel,
    handleConfirmacao,
    remove
} from './listaActions'
import styles from './estilos.js'
import {
  Text, 
  TextInput, 
  View, 
  TouchableOpacity,  
  Image, 
  ScrollView,
} from 'react-native';



class Corpo extends Component{

   
    render(){
        let Arr = this.props.listaReducer.myArr.map((a, i) => {
            return (
                    <View key={i}>
                    <TouchableOpacity onLongPress={() => this.props.remove(i)} key={i} style={styles.registro}>  
                            <Image source = {require('./imagem/contato.png')} style={styles.imagem}/>                  
                            <Text style={styles.nome}>{ a.nome }</Text>
                            <Text style={styles.telefone}>{ a.telefone }</Text>
                    </TouchableOpacity>
                    </View>
                    )                            
        }) 
        return (
            
            <View style={styles.container}>
                <ScrollView>
                    <Text style={styles.titulo}>Meus Contatos</Text>
                    {Arr}
                </ScrollView>


                <TouchableOpacity style={styles.button}><Text style={styles.textoBotaoAdd} onPress={() => this.props.handleModal(true) }>+</Text></TouchableOpacity>
                
                 <Modal 
                    
                    onBackdropPress={() => this.props.handleModal(false)}
                    isVisible = {this.props.listaReducer.open}
                >
                    <View style={styles.modal}>
                        <Text style={styles.tituloModal}>Cadastrar Novo</Text>

                        <View style={styles.formulario}>
                        <Text style={styles.labelInput}>Nome</Text>
                        <TextInput style={styles.input} placeholder='Nome' placeholderTextColor='#000000de'onChangeText={(text) => this.props.mudaNome(text)}/>
                        </View> 


                        <View style={styles.formulario}> 
                        <Text style={styles.labelInput}>Telefone</Text>
                        <TextInput style={styles.input} placeholder='Telefone' placeholderTextColor='#000000de' keyboardType='number-pad' maxLength={12} onChangeText={(text) => this.props.mudaTel(text)}/>
                        </View> 

                        <TouchableOpacity style={styles.cancelButton}><Text style={styles.textoForm} onPress={() => this.props.handleModal(false)}>VOLTAR</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.formButton}><Text style={styles.textoForm} onPress={this.props.adicionar}>CONFIRMAR</Text></TouchableOpacity>
                    
                    </View>
                </Modal> 
            </View>    

        );
    }
}


const mapStateToProps = state => ({listaReducer: state.listaReducer})

const mapDispatchToProps = dispatch => bindActionCreators({ adicionar, handleModal, mudaNome, mudaTel, handleConfirmacao, remove }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps )(Corpo)




