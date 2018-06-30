import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

const mapStateToProps = (state) => {
    // todos: state.todos
    if (state.todos.length > 0) {
        console.log(`state is not empty`);
        return {
            todos: state.todos,
        }
    } else {
        console.log(`state is empty`);
        return {};
    }
}

const VisibleTodoList = connect(
    mapStateToProps
)(TodoList)


export default VisibleTodoList

/*
    mapStateToProps(state)
    <TodoList props={}>

*/