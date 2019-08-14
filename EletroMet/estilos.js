import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
      fundo:{
            width: '100%',
            height: '100%',
            flex: 1,
            
      },

      superior:{
            width: '100%',
            height: '10%',
            backgroundColor: '#212121',       
            justifyContent: 'center'
      },

      iconeMenu:{
            height: 30,
            width: 30, 
            left: 10    
      },

      
      //Tabelas
      tabelasContainer:{
            flex:1,
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
      },
      tabelasIcone:{
            width:100,
            height:100,
      },

      //Metas
      metaContainer:{
            padding: 20,
            flex:4,
            flexDirection: 'row',
            justifyContent: 'space-between',
            
      },
      
      tituloMeta:{
            fontWeight: 'bold',
            color: '#100452',
            fontSize: 30   
      },

      textoPontos:{
            fontWeight: 'bold',
            fontSize: 30,
            color: '#100452'
      },

      textoValores:{
            fontWeight: 'bold',
            fontSize: 30,
            color: '#084E05'
      },

      //Serviços
      servicoContainer:{
            flex:1,
            flexDirection: 'column',
            alignItems: 'center',
            marginLeft: 40,
            marginBottom: 20,
      },

      viewServico:{
            marginTop:40,
            flexDirection: 'row',
            justifyContent: 'flex-end'
      },
      
      viewIcone:{
            flex:1,
            flexDirection: 'row',
            alignItems: 'center'
      },


      servicoIcone:{
            width:40,
            height:40
      },


      viewDescricao:{
            flex:1,
            flexDirection: 'column'
      },

      servDescricao:{
            color: '#100452',
            fontWeight: 'bold',
            fontSize: 20
      },

      servPontos:{
            fontWeight: 'bold',
            color: '#084E05',
            fontSize: 20
      },

      //Status
      statusContainer:{
            flex:1,
            alignItems: 'center',
            justifyContent: 'space-around'
      },

      statusView:{
            alignItems: 'center'
      },

      statusDesc:{
            fontWeight: 'bold',
            fontSize: 30,
            color: '#100452'
      },

      statusValor:{
            fontWeight: 'bold',
            fontSize: 30,
            color: '#084E05'
      },

      //Executados

      parent:{
            flex:1
      },

      inicio:{
            flex:1,
            justifyContent: 'center',
            marginLeft: 10
      },

      mesImagem:{
            width: 80,
            height: 80
      },

      posTitulo:{
            justifyContent:'center'
      },

      mesTitulo:{
            fontSize:20,
            color: '#F80808',
            fontWeight: 'bold'
      },

      novoMes:{
            flexDirection: 'row'
      },

      executadosContainer:{
            flex: 4,
            flexDirection: 'column'
      },

      desc:{
            fontSize:20,
            fontWeight:'bold',
            color:'#100452'
      },

      executado:{
            flexDirection: 'row',
            alignItems:'flex-end',
            justifyContent:'space-between',
            padding: 20
      },

      executadoIcones:{
            flexDirection:'row'
      },

      //Meses
      mesesConteudo:{
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            padding: 10
      },
      
      mesesTexto:{
            fontSize: 20,
            color: '#100452',
            fontWeight: 'bold'
      },

      //inserir Serviço
      viewNomeServico:{
            flex:1,
            flexDirection: 'column',
            justifyContent: 'flex-end'
      },


      //Confirma serviços
      confirmaContainer:{
            flex:1,
            justifyContent: 'space-around',
            alignItems:'center'
      },

      textoConfirma:{
            color: '#100452',
            fontSize: 30,
            fontWeight: 'bold'
      },

      linhaConfirma:{
            flexDirection:'row'
      },

      confirmaTotal:{
            alignItems:'center'
      },

      iconesConfirma:{
            width: 60,
            height: 60
      },
      
      botoes:{
            width: 80,
            height: 80,
            margin: 40
      },

      confirma:{
            flexDirection: 'row',
            justifyContent: 'space-between'
      },

      //meio que global hein, uma view centralizada para titulos!
      centro:{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
      },


      //Principal (vai dar trampo pra lá hein!?)
      principalContainer:{
          flex:1,
          flexDirection: 'column',
          alignItems: 'center',
          
      },

      principalLinhaUm:{
            flex:1,
            flexDirection: 'row',
            alignItems: 'center',
      },

      principalLinhaUmItemUm:{
            flex:1,
            alignItems:'center',
            justifyContent:'center'
      },


      principalLinhaUmItemDois:{
            flex:1,
            alignItems:'center',
            justifyContent:'center'
      },

      principalLinhaDois:{
            flex:1,
            flexDirection: 'row',
            alignItems: 'center',
      },

      principalLinhaDoisItemUm:{
            flex:1,
            alignItems:'center',
            justifyContent:'center'
      },


      principalLinhaDoisItemDois:{
            flex:1,
            alignItems:'center',
            justifyContent:'center'
      },

      menuIcone:{      
            height: 100,
            width: 100,       
      },

      labelIcone:{
            color:'#100452',
            fontSize: 20,
            fontWeight: 'bold'
      },
})