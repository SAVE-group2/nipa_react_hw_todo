const todos = (state = [], action) => {
    fetch(`http://localhost:3001/api/list`)
        .then(result => {
            console.log(`result in 1then :${JSON.stringify(result)}`)
            return result.json();
        }).then(data => {
            console.log(`result in 2then :${JSON.stringify(data)}`)
            state = data;
        }).catch(error => {
            console.log(`promise catch: ${error}`);
        });;

    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        default:
            return state
    }
}

export default todos
