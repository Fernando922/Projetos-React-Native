import React, { Component } from "react";
import Principal from './Principal.js'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import eletroReducer from './eletroReducer'
import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

const reducers = combineReducers({
      eletroReducer: eletroReducer
    })
    
const store = applyMiddleware(promise, multi, thunk)(createStore)(reducers)
export default class App extends Component {
      render() {
            return (
                  <Provider store={store}>
                        <Principal />
                  </Provider>
            )
      }
}