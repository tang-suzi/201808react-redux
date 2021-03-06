import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Counter from './components/Counter1/index'
import store from './Store2/index'
import {Provider} from 'react-redux'

ReactDOM.render(
    <Provider store={store}>
        <Counter />
    </Provider>,
    document.getElementById('root')
)