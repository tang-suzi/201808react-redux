import React, {Component} from 'react'
import {store} from './../../Store/index'
import {INCREASE, DECREASE} from './../actions/index'


let increase = (amount) => (
    {type: INCREASE, amount}
)
let decrease = (amount) => (
    {type: DECREASE, amount}
)
class Counter extends Component {
    constructor() {
        super()
        this.state = {
            number: store.getState().counter.number
        }
    }
    componentWillMount() {
        this.unsubscribe = store.subscribe(() => {
            this.setState({
                number: store.getState().counter.number
            })
        })
    }
    componentWillUnmount(){
        this.unsubscribe()
    }
    render() {
        return ( <div>
            <p> { this.state.number } </p>
                <button onClick = {() => store.dispatch(increase(3))}> + </button>
                <button onClick = {() => store.dispatch(decrease(2))}> - </button> 
        </div>
        )
    }
}

export default Counter