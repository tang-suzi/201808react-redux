import React, { Component } from 'react';
import { createStore } from './../../Redux/index'

const ADD_TODO = 'ADD_TODO'
const DELETE_TODO = 'DELETE_TODO'
let reducer = (state={list:[]},action) => {
    if(action === undefined) return state;
    switch (action.type){
        case ADD_TODO:
            return {list:[...state.list, action.text]};
        case DELETE_TODO:
            let list = state.list;
            list.splice(action.index,1);
            // 状态具有不变性 每次都要返回一个新的对象
            return {list:[...list]};
        default:
            return state;
    }
}
let store = createStore(reducer);
class TodoApp extends Component {
    constructor(props){
        super(props);
        this.state = {list: store.getState().list};
    }
    handleKeyUp = (e) => {
        if(e.keyCode === 13 && e.target.value) {
            store.dispatch({
                type: ADD_TODO,
                text: e.target.value
            })
            e.target.value = ''
        }
    }
    deleteTodo = (index) => {
        store.dispatch({
            type: DELETE_TODO,
            index
        })
    }
    componentWillMount () {
        this.unSubscribe = store.subscribe(()=>{
            this.setState({
                list:store.getState().list
            })
        })
    }
    componentWillUnmount () {
        this.unSubscribe();
    }
    render() {
        return (
            <div>
                <input type="text" onKeyUp={this.handleKeyUp} />
                <ul>
                    {
                        this.state.list.map((todo,index)=>(
                            <li key={index}>
                                {todo}
                                <button onClick={()=>this.deleteTodo(index)}>删除</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default TodoApp;