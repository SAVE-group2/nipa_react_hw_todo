import React from "react";
import { connect } from "react-redux";
import { fetchTodos } from "../actions";

class TodoList extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchTodos());
    }

    render() {
        const { error, loading, todos } = this.props;

        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (loading) {
            return <div>Loading...</div>;
        }

        return (
            <ul>
                {todos.map(todo =>
                    <li key={todo._id}>{todo.text}</li>
                )}
            </ul>
        );
    }
}

const mapStateToProps = state => {
    return ({
        todos: state.todos.items,
        loading: state.todos.loading,
        error: state.todos.error,
    })
};

export default connect(mapStateToProps)(TodoList);