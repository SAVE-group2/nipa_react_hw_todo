import {
	ADD_TODO_BEGIN,
	ADD_TODO_SUCCESS,
	ADD_TODO_FAILURE,
	FETCH_TODOS_BEGIN,
	FETCH_TODOS_SUCCESS,
	FETCH_TODOS_FAILURE
} from '../actions';
// import update from 'immutability-helper';

const initialState = {
	items: [],
	loading: false,
	error: null
};

export default function todoReducer(state = initialState, action) {
	switch (action.type) {
	case FETCH_TODOS_BEGIN:
		// Mark the state as "loading" so we can show a spinner or something
		// Also, reset any errors. We're starting fresh.
		return {
			...state,
			loading: true,
			items: [],
			error: null,
		};

	case FETCH_TODOS_SUCCESS:
		// All done: set loading "false".
		// Also, replace the items with the ones from the server
		return {
			...state,
			loading: false,
			items: action.payload.todos,
			error: null,
		};

	case FETCH_TODOS_FAILURE:
		// The request failed, but it did stop, so set loading to "false".
		// Save the error, and we can display it somewhere
		// Since it failed, we don't have items to display anymore, so set it empty.
		// This is up to you and your app though: maybe you want to keep the items
		// around! Do whatever seems right.
		return {
			...state,
			loading: false,
			items: [],
			error: action.payload.error,
		};

	case ADD_TODO_BEGIN:
		return {
			...state,
			loading: true,
			items: [],
			error: null,
		};

	case ADD_TODO_SUCCESS:
		// const updatedTodos = update(state.items, { $push: action.payload.todos });
		return { // action.payload.todos 
			...state,
			loading: false,
			items: action.payload.todos,
			error: null,
		};

	case ADD_TODO_FAILURE:
		return {
			...state,
			loading: false,
			items: [],
			error: action.payload.error,
		};

	default:
		// ALWAYS have a default case in a reducer
		return state;
	}
}