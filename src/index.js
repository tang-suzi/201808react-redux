import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Counter from './components/Counter1/index'
import { createStore } from './Redux/index'
import counter from './components/Counter1/index'
import Provider from './Provider/index'

let store = createStore(counter);

ReactDOM.render(
    <Provider store={store}>
        <Counter />
    </Provider>,
    document.getElementById('root')
)