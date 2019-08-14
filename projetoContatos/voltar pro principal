import React , { Component } from 'react'
import Corpo from './principal.js'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import listaReducer from './listaReducer'
import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'


const reducers = combineReducers({
  listaReducer: listaReducer
})

const store = applyMiddleware(promise, multi, thunk)(createStore)(reducers)
export default class Contatos extends Component{
  render(){
    return(   
      <Provider store={store}>
        <Corpo/>
      </Provider>
          
    )
  }
}