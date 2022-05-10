import {createStore, combineReducers} from 'redux';


const stackReducer = (stack=[], action) => {

  switch (action.type) {
    case 'ADD_BYTE':
      return [...stack, [{value: false, position: 7}, {value: false, position: 6}, {value: false, position: 5}, {value: false, position: 4}, {value: false, position: 3}, {value: false, position: 2}, {value: false, position: 1}, {value: false, position: 0}]]
    case 'REMOVE_BYTE':
      if (stack.length){
        stack.pop()
      }
      return [...stack]
    case 'SWITCH_BIT':
      const byte = [...stack[action.i]];
      byte[action.j].value = !byte[action.j].value
      return [
        ...stack.slice(0, action.i),
        byte,
        ...stack.slice(action.i + 1)
      ]
  }
  return stack;
}

const rootReducer = combineReducers({stack: stackReducer})

const store = createStore(rootReducer);

export default store;