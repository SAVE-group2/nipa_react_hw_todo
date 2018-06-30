let nextTodoId = 0
export const addTodo = (text) => {
    return ({
        type: 'ADD_TODO',
        id: nextTodoId++,
        text: text,
    })
}

export function fetchTodos() {
    return function action(dispatch) {
        dispatch(fetchTodosBegin());

        return fetch("http://localhost:3001/api/list")
            .then(handleErrors)
            .then(res => res.json())
            .then(json => {
                dispatch(fetchTodosSuccess(json));
            })
            .catch(error => dispatch(fetchTodosFailure(error)));
    };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

export const FETCH_TODOS_BEGIN = 'FETCH_TODOS_BEGIN';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE';

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