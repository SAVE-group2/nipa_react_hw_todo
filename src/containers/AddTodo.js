import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import { FormControl, FormGroup, ControlLabel } from 'react-bootstrap';

class AddTodo extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            value: ''
        };
    }

    getValidationState() {
        const length = this.state.value.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
        return null;
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault()
        if (!this.state.value.trim()) {
            return
        }
        this.props.dispatch(addTodo(this.state.value))
        this.setState({value: ''});
    }

    render() {
        return (
            <form onSubmit={e => this.handleSubmit(e)}>
                <FormGroup
                    controlId="formBasicText"
                    validationState={this.getValidationState()}
                >
                    <ControlLabel>Press enter key to insert a todo</ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.value}
                        placeholder="input todo here"
                        onChange={this.handleChange}
                    />
                    <FormControl.Feedback />
                </FormGroup>
            </form>
        );
    }
}

export default AddTodo = connect()(AddTodo);

// render(<FormExample />);