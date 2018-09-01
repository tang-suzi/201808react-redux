// import React from 'react'
// import ReactDOM from 'react-dom'
// import {
//     createStore
// } from './Redux/index';
// const INCREASE = 'INCREASE';
// const DECREASE = 'DECREASE';

// let reducer = (state = {
//     number: 0
// }, action) => {
//     if (action === undefined) return state
//     switch (action.type) {
//         case INCREASE:
//             return {
//                 number: state.number + action.amount
//             };
//         case DECREASE:
//             return {
//                 number: state.number - action.amount
//             };
//         default:
//             return state;
//     }
// }
// let store = createStore(reducer);

// class Counter extends React.Component {
//     render() {
//         return (
//             <div>
//                 <p>{store.getState().number}</p>
//                 <button onClick={()=>store.dispatch({type: INCREASE,amount:3})}>+</button>
//                 <button onClick={()=>store.dispatch({type: DECREASE,amount:2})}>-</button>
//             </div>
//         )
//     }
// }
// let render = () => {
//     ReactDOM.render(
//         <Counter />,
//         document.getElementById('root')
//     )
// }
// render()
// store.subscribe(render)

import React from 'react'
import ReactDOM from 'react-dom'
// import Counter from './components/Counter/index'
import TodoApp from './components/TodoApp/index'

ReactDOM.render(
    // <Counter />,
    <TodoApp />,
    document.getElementById('root')
)