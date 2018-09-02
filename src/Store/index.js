import { createStore } from './../Redux/index'
import counter from './../components/Counter/reducer/index'
import todoApp from './../components/TodoApp/reducer/index'
import combineReducers from './combineReducers/index'
/**
 * {number: 0} {list: []}
 * {counter: {number: 0}, todo: {list: []}}
 */

let reducer = combineReducers({
    counter,
    todoApp
})
let store = createStore(reducer);
//{counter:{number:0},todo:{list:[]}}
export {store}