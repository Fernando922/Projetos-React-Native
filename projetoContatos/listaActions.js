//action creators
import  { Alert, Vibration } from 'react-native'
import axios from 'axios'

export const getDados = () => (dispatch) =>{
    axios.get('https://facebook.github.io/react-native/movies.json').then((response) =>{
        dispatch(handleLista(response.data.movies))
    })
}


export const handleLista = (lista) =>{
    return{
        type:'nova_lista',
        payload: lista
    }
}
 
export const handleModal = (value) => {
    Vibration.vibrate(100)
    return {
        type: 'mostrar',
        payload: {
            value: value
        }
    }
}


export const mudaNome = (value) => {
    Vibration.vibrate(10)
    return {
        type: 'mudaNome',
        payload: {
            value: value
        }
    }
}


export const mudaTel = (value) => {
    Vibration.vibrate(10)
    return {
        type: 'mudaTel',
        payload: {
            value: value
        }
    }
}

const capitalize = (nome) => {
    return nome[0].toUpperCase() + nome.slice(1);
}


export const adicionar = () => (dispatch, getState) => {
    const { listaReducer } = getState()
    const { nome, telefone, myArr } = listaReducer
    
    //se os campos não forem preenchidos o array não será preenchido com dados vazios

    if(nome && telefone !== ''){
        let temp =  nome
        let temp2 = telefone

        temp =  capitalize(temp.toLowerCase()) //para padronizar os nomes ex: 'Fernando' e não 'fERnanDO'
        let proximo = {nome: temp, telefone: temp2}
        myArr.push(proximo)
        var novoArr = myArr
        
        dispatch([
            handleAdicionar(novoArr), 
            handleModal(false),
            mudaNome(''),
            mudaTel('')
        ])

    }
    
}

export const handleAdicionar = (value) =>{
    return{
        type: 'adicionar',
        payload: value
    }
}

export const remove = (indice) => (dispatch, getState) =>{
    Vibration.vibrate(100)
    const { listaReducer } = getState()
    const { myArr } = listaReducer

    Alert.alert(
        'Remover registro',
        'Deseja remover contato selecionado?',
        [

            {text: 'sim', onPress: () => {
                Vibration.vibrate(100)
                alert('Contato excluído')
                let a = myArr.splice(indice,1)
                var novoArr = myArr
                Vibration.vibrate(1000)

                dispatch([
                    handleAtualizar(novoArr),    
                ])
                }
            },
            {text: 'não', onPress: () => {
                Vibration.vibrate(100)
            }},
        ]
    )
}

export const  handleAtualizar = (value) =>{
    return { 
        type: 'atualizar',
        payload: value
    }
 }




