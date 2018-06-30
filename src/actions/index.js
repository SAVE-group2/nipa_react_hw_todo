export const FETCH_TODOS_BEGIN = 'FETCH_TODOS_BEGIN';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE';
export const ADD_TODO_BEGIN = 'ADD_TODO_BEGIN';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const ADD_TODO_FAILURE = 'ADD_TODO_FAILURE';

const ADD_TODO_URL = 'http://localhost:3001/api/item';
const FETCH_TODOS_URL = 'http://localhost:3001/api/list';


// export const addTodo = (text) => {
//     return ({
//         type: ADD_TODO,
//         text: text,
//     })
// }

export function fetchTodos() {
    return function action(dispatch) {
        dispatch(fetchTodosBegin());

        return fetch(FETCH_TODOS_URL)
            .then(handleErrors)
            .then(res => res.json())
            .then(json => {
                dispatch(fetchTodosSuccess(json));
            })
            .catch(error => dispatch(fetchTodosFailure(error)));
    };
}

export function addTodo(text) {
    return function action(dispatch) {
        dispatch(addTodoBegin());

        fetch(ADD_TODO_URL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                text: text,
            })
        })            
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
            // console.log(`add fetch returned: ${JSON.stringify(json)}`); // tbd
            dispatch(addTodoSuccess(json));            
        })
        .catch(error => dispatch(addTodoFailure(error)));
    };
}

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

export const fetchTodosBegin = () => ({
    type: FETCH_TODOS_BEGIN
});

export const fetchTodosSuccess = todos => ({
    type: FETCH_TODOS_SUCCESS,
    payload: { todos }
});

export const fetchTodosFailure = error => ({
    type: FETCH_TODOS_FAILURE,
    payload: { error }
});


export const addTodoBegin = () => ({
    type: ADD_TODO_BEGIN
});

export const addTodoSuccess = todos => ({
    type: ADD_TODO_SUCCESS,
    payload: { todos }
});

export const addTodoFailure = error => ({
    type: ADD_TODO_FAILURE,
    payload: { error }
});