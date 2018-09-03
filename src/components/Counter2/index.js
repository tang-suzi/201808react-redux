import React, { Component } from 'react';
import {INCREASE, DECREASE} from './../actions/index'
import {connect} from 'react-redux'

class Counter extends Component {
    render() {
        return (
            <div>
                <p>{this.props.number}</p>
                <button onClick={this.props.onIncrease}>+</button>
                <button onClick={this.props.onDecrease}>-</button>
            </div>
        );
    }
}

let mapStateToProps = (state)=>({
    number: state.number
})
// 把 dispatch方法映射成UI组件的属性
let mapDispatchToProps = (dispatch) => ({
        onIncrease: ()=>dispatch({type: INCREASE, amount: 2}),
        onDecrease: ()=>dispatch({type: INCREASE, amount: -3})
    })
    
export default connect(mapStateToProps,mapDispatchToProps)(Counter)

// export default Counter;