import { combineReducers } from 'redux'
// import todos from './todos'
import todos from './todoReducer'

const todoApp = combineReducers({
    todos
})

export default todoApp
