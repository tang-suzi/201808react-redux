let combineReducers = (reducers) => (state={}, action) => {
    let newState = {};
    for (const key in reducers) {
        newState[key] = reducers[key](state[key],action);
    }
    // {counter: {number: 0}, todo: {list: []}}
    return newState;
}

export default combineReducers