const INITIAL_STATE = {
    myArr: [
        {nome: 'Fernando' ,     telefone: '994153565'},
        {nome: 'Márcia' ,       telefone: '37217669'},
        {nome: 'Dona Silvia' ,  telefone: '34778901'},
    ],
    open: false,
    nome: '',
    telefone:'',
} 

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {

    case 'adicionar':
        return {
            ...state, myArr: action.payload
    }


    case 'atualizar':
        return {
            ...state, myArr: action.payload
        }

    case 'mostrar':
        return {
        ...state, open: action.payload.value
    }
    
    case 'mudaNome':
        return {
            ...state, nome: action.payload.value
    }


    case 'mudaTel':
        return {
            ...state, telefone: action.payload.value
    }

    default:
        return state 
    } 
}
            
 