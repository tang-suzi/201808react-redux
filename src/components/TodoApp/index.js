import React, {Component} from 'react'
import {store} from './../../Store/index'
import {ADD_TODO, DELETE_TODO} from './../actions/index'

class TodoApp extends Component {
    constructor(props){
        super(props);
        this.state = {list: store.getState().todo.list};
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
                list: store.getState().todo.list
                // Error: 数据获取到了  但是list显示undefined
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