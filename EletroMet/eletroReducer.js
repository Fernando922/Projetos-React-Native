const INITIAL_STATE = {
      executados:[],
      acumulado: 0,
      meta: '0-400',
      alterar: -1,
      restantes: 401,
      valor: 0,
      numMes: 10,
      meses: [
            {mes: 'Junho',    ano: 2018, total: 415},
            {mes: 'Julho',    ano: 2018, total: 398},
            {mes: 'Agosto',   ano: 2018, total: 400},
            {mes: 'Setembro', ano: 2018, total: 530},
            {mes: 'Outubro',  ano: 2018, total: 502},
      ]
}

export default function(state = INITIAL_STATE, action) {
      switch(action.type) {
            case 'adicionar':
                  return {
                        ...state, acumulado: action.payload
                  }

            case 'alterar':
                  return {
                        ...state, alterar: action.payload
                  }
            case 'novaPontuacao':
                  return {
                        ...state, acumulado: action.payload
                  }
            case 'zerar':
                  return {
                        ...state, acumulado: action.payload
                  }
            case 'meta':
                  return {
                        ...state, meta: action.payload
                  } 
            case 'restantes':
                  return {
                        ...state, restantes: action.payload
                  }
            case 'valor':
                  return {
                        ...state, valor: action.payload
                  } 
            case 'executados':
                  return {
                        ...state, executados: action.payload
                  } 
                  
            case 'fechamento':
                  return {
                        ...state, executados: action.payload
                  }

            case 'meses':
                  return {
                        ...state, meses: action.payload
                  }

            case 'numMes':
                  return {
                        ...state, numMes: action.payload
                  }
            
            default:
                  return state
      }
}