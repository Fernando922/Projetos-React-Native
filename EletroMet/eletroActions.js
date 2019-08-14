import { Alert, Vibration } from 'react-native'

export const handleAdicionar = (value) => {
      return {
            type: 'adicionar',
            payload: value
      }
}

export const handleNovaPontuacao = (value) => {
      return {
            type: 'novaPontuacao',
            payload: value
      }
}

export const cleanAcumulados = (value) => {
      return {
            type: 'zerar',
            payload: value
      }
}
export const handleMeta = (value) => {
      return {
            type: 'meta',
            payload: value
      }
}

export const handleRestantes = (value) => {
      return {
            type: 'restantes',
            payload: value
      }
}


export const handleValor = (value) => {
      return {
            type: 'valor',
            payload: value
      }
}

export const handleExecutados = (value) => {
      return {
            type: 'executados',
            payload: value
      }
}

export const handleMeses = (value) => {
      return {
            type: 'meses',
            payload: value
      }
} 

export const handleNumMes = (value) => {
      return {
            type: 'numMes',
            payload: value
      }
}

export const alterar = (value) => {
      return {
            type: 'alterar',
            payload: value
      }
} 

export const executados = (value,pontos) => (dispatch, getState) => {
     const { eletroReducer } = getState()
     const { executados } = eletroReducer

      let servico =  value  
      let pts = pontos 
      let proximo = {servico: servico, pontos: pts}
      executados.push(proximo)
      var novoExec = executados  //mudar var -> let

      dispatch([
            handleExecutados(novoExec), 
      ])
}

export const remover = (indice) => (dispatch, getState) => {
      const { eletroReducer } = getState()
      const { executados,acumulado,restantes,valor,meta } = eletroReducer
      if (indice>=0){

            Alert.alert(
                  'Remover serviço',
                  'Deseja realmente remover este serviço?',
                  [
                        {text: 'sim', onPress: () => {
                              Alert.alert(
                                    'Exclusão',
                                    'Registro removido com sucesso!'
                              )
                              Vibration.vibrate(1000)
                              var rest = restantes   
                              var paraRemover = executados[indice].pontos
                              let descarte = executados.splice(indice,1)
                              var novaPontuacao = acumulado-paraRemover
                              var novoExec = executados

                              let metaAtual = verificaMeta(novaPontuacao)
                              let metaAtualizada = metaAtual.meta
                              let restAtualizado = metaAtual.rest
                              let valorAtualizado = metaAtual.valor
                              
                              dispatch([
                              handleExecutados(novoExec),
                              handleNovaPontuacao(novaPontuacao),
                              handleMeta(metaAtualizada),
                              handleRestantes(restAtualizado),
                              handleValor(valorAtualizado),
                              alterar(-1)
                              ])
                              }
                        },
                        {text: 'não', onPress: () => {
                              Vibration.vibrate(100)
                        }},
                  ]
            )     
      }
}

export const editar = (indice) => (dispatch, getState) => {

      if (indice>=0){
            Vibration.vibrate(100)
            const { eletroReducer } = getState()
            const { executados,acumulado,restantes,valor,meta } = eletroReducer

            var rest = restantes   
            var paraRemover = executados[indice].pontos
            let descarte = executados.splice(indice,1)
            var novaPontuacao = acumulado-paraRemover
            var novoExec = executados

            let metaAtual = verificaMeta(novaPontuacao)
            let metaAtualizada = metaAtual.meta
            let restAtualizado = metaAtual.rest
            let valorAtualizado = metaAtual.valor
            
            dispatch([
            handleExecutados(novoExec),
            handleNovaPontuacao(novaPontuacao),
            handleMeta(metaAtualizada),
            handleRestantes(restAtualizado),
            handleValor(valorAtualizado),
            alterar(-1)
            ]) 
            Alert.alert(
                  'Alterar serviço executado',
                  'Alterações executadas com sucesso'
            )        
      }
}


export const deletaMes = (indice) => (dispatch, getState) => {
      const { eletroReducer } = getState()
      const { meses } = eletroReducer

      Alert.alert(
            'Remover Mês',
            'Deseja realmente remover o mês selecionado?',
            [
                  {text: 'sim', onPress: () => {
                        Alert.alert(
                              'Remover mês',
                              'Mês removido com sucesso!'
                        )
                        let descarte = meses.splice(indice,1)
                        var novaLista = meses
                        Vibration.vibrate(1000)

                        dispatch([
                              handleMeses(novaLista)
                        ])
                        }
                  },
                  {text:'não', onPress: () => {
                        Vibration.vibrate(100)
                  }},
            ]
      )
}

export const verificaMeta = (value) => {
      if (value < 401 ){
            retorno = {meta: '0-400', rest: 401-value, valor: value*2}
      }else if (value < 451 ){
            retorno = {meta: '401-451', rest: 451-value, valor: value*2.3}
      }else if (value < 501 ){
            retorno = {meta: '451-501', rest: 501-value, valor: value*2.6}
      }else if (value < 551 ){
            retorno = {meta: '501-551', rest: 551-value, valor: value*2.7}
      }else{
            retorno = {meta: '551+', rest: 0, valor: value*3}
      }
      return retorno
}

export const adicionar = (value, servico) => (dispatch, getState) => {
      Vibration.vibrate(100)
      const { eletroReducer } = getState()
      const { acumulado, alterar } = eletroReducer

      let pontos = acumulado+value
      let metaAtual = verificaMeta(pontos)
      let meta = metaAtual.meta
      let rest = metaAtual.rest
      let valor = metaAtual.valor 

      dispatch([
           handleMeta(meta),
           handleAdicionar(pontos),
           handleRestantes(rest),
           handleValor(valor.toFixed(2).replace('.',',')),
           executados(servico,value),
           editar(alterar)
      ])
}

export const fechamento = (value) => (dispatch, getState) => {
      const { eletroReducer } = getState()
      const { acumulado, meses, executados,numMes } = eletroReducer
      let exec = executados
      
      if (exec.length>=1){
            Alert.alert(
                  'ATENÇÃO',
                  'TODOS os serviços registrados serão deletados! Deseja prosseguir?',
                  [
                        {text: 'sim', onPress: () => {
                              Alert.alert(
                                    'Fechamento mensal',
                                    'Mês finalizado com sucesso!'    
                              )
                              Vibration.vibrate(1000) 
                              var listaMeses = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho',
                                                'Agosto','Setembro','Outubro','Novembro','Dezembro']
                              //montando o objeto mes atual após o fechamento
                              var myDate = new Date()
                              var totalAtual = acumulado
                              var anoAtual = myDate.getFullYear()
                              var mesAtual = listaMeses[numMes]
                              let proximo = {mes: mesAtual, ano: anoAtual, total: totalAtual}
                              meses.push(proximo)
                              var novoMes = meses 
                              var meta = '0-400'
                              var executados = []
                              var mes = numMes
                              mes++
                              dispatch([
                                    cleanAcumulados(value),
                                    handleMeta(meta),
                                    handleRestantes(value),
                                    handleValor(value),
                                    handleExecutados(executados),
                                    handleMeses(novoMes),
                                    handleNumMes(mes)
                              ])
                              }
                        },
                        {text: 'não', onPress: () => {
                              Vibration.vibrate(100)
                        }}  
                  ]    
            )   
      }
}



