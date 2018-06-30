import React from "react";
import { connect } from "react-redux";
import { fetchTodos } from "../actions";
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const listColorOrder = ["success", "info"];

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.colorOrder = 0;
    }

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
            <ListGroup>
                {todos.map(todo =>
                    // <li key={todo._id}>{todo.text}</li>
                    <ListGroupItem key={todo._id} bsStyle={listColorOrder[this.colorOrder++ % 2]}>{todo.text.replace(/['"]+/g, '')}</ListGroupItem>
                )}                
            </ListGroup>
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