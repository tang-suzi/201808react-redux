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

import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {PropTypes} from 'prop-types'

class Container extends Component {
    getChildContext(){
        return {color: '#909'}
    }
    render(){
        return (
            <MessageList messages={this.props.messages} />
        )
    }
}
Container.childContextTypes ={
    color: PropTypes.string
}
class MessageList extends Component {
    render(){
        return (
            <ul>
                {
                    this.props.messages.map((message,index)=><Message key={index} message={message} />)
                }
            </ul>
        )
    }
}
class Message extends Component {
    render(){
        return (
            <li style={{color: this.context.color}}>{this.props.message}</li>
        )
    }
}
Message.contextTypes = {
    color: PropTypes.string
}

let messages = [1,2,3];

ReactDOM.render(
    <div>
        <Container messages = {messages}>
        </Container>
    </div>,
    document.getElementById('root')
)