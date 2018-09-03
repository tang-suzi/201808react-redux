import { createStore } from 'react-redux'
import counter from './components/Counter1/index'

let store = createStore(counter);

export default store