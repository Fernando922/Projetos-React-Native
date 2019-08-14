import { StyleSheet } from 'react-native'
    export default styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#f0f0f0'
        },

        titulo:{
            fontSize:30,
            textAlign:"center",
            marginTop:20,
            fontFamily: 'Calligraffiti'
        },
    
        button: {
            backgroundColor: '#6200ee',
            height:56,
            width: 56,
            fontSize: 90,
            fontFamily:'Roboto',
            borderRadius: 28,
            bottom: 10,
            right: 10,
            position: 'absolute',
            elevation: 6,
        },
    
        textoBotaoAdd: {
            fontSize: 24,
            textAlign: 'center', 
            color: 'white',
            lineHeight: 56,
            fontFamily:'Roboto',
        },
    
        imagem: {
            height:40,
            width: 40,
            position: 'absolute',
            marginLeft:16,
            marginTop:16,
        
        },
     
        nome:{
            left:72,
            top:16,
            position:'absolute',
            fontSize:16,
            color: '#000000de',
            fontFamily:'Roboto',
        },
    
        telefone:{
            left:72,
            bottom:16,
            fontSize:14,
            position: 'absolute',
            fontFamily:'Roboto',
            color: '#00000060'
        },
    
        registro:{
            marginTop:30,
            height:72,
            marginLeft:10,
            marginRight:10,
            backgroundColor:'#ffffff',
        },
    
        tituloModal:{
            position: "relative",
            top:0,
            fontSize:30,
            textAlign:"center",
            marginTop:20,
            fontFamily: 'Calligraffiti'
        },
    
        modal:{
            position:'absolute',
            backgroundColor:'#ffffff',
            width: 300,
            height: 350,
            top: 100,
            right: 20,
            flex:1
        },
    
        formulario:{
            height: 56,
            marginTop: 30,
            backgroundColor: '#f0f0f0',
            borderBottomColor:'#6200ee',
            borderBottomWidth: 2,
            marginLeft:10,
            marginRight:10,
        },
    
        labelInput:{
            position: 'absolute',
            left:12,
            bottom:33,
            fontSize:12,
            fontFamily:'Roboto',
            color: '#6200ee',
        },
    
        input:{
            position: 'absolute',
            fontSize: 16,
            fontFamily: 'Roboto',
            left:8,
            top:12,
            width: '100%'
        },
    
        formButton:{     
            height: 36,
            width:84,
            borderRadius: 5,
            position: 'absolute',
            bottom: 10,
            right: 10,
        },
    
        textoForm: {
            fontSize:14,
            fontFamily:'Roboto',
            textAlign: 'center',
            lineHeight: 36,
            color: 'black',
        },
    
        cancelButton:{      
            height: 36,
            width:64,
            borderRadius: 5,
            position: 'absolute',
            bottom: 10,
            right: 100,        
        },
    });

    

 