import React from 'react'
import AddTodo from '../containers/AddTodo'
// import VisibleTodoList from '../containers/VisibleTodoList'
import TodoList from '../containers/TodoList'

// fetch('http://localhost:3001/api/item', {
//     method: 'POST',
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//         text: "test text",
//     })
// })

const App = () => (
    <div>
        <AddTodo />
        {/* <VisibleTodoList /> */}
        <TodoList />        
    </div>
)

export default App
