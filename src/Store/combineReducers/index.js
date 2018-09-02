let combineReducers = (reducers) => (state={counter: {number: 0}, todo: {list: []}}, action) => {
    let newState = {};
    if(action === undefined) return state;
    for (const key in reducers) {
        newState[key] = reducers[key](state[key],action);
    }
    // {counter: {number: 0}, todo: {list: []}}
    return newState;
}

export default combineReducers