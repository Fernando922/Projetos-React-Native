const INITIAL_STATE = {
    myArr: [],
    open: false,
    nome: '',
    telefone:'',
} 
export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
    
    case 'nova_lista':
        return {
            ...state, myArr: action.payload
        }
    
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
            
 