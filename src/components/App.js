import React from 'react';
import AddTodo from '../containers/AddItem';
import TodoList from '../containers/GetItems';

const App = () => (
	<div>
		<AddItem />
		<GetItems />        
	</div>
);

export default App;
