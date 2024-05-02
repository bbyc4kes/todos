import axios from 'axios';
import { Todo, useTodoStore } from '~store/todo.store';

//re-write everything on classes

export const fetchAllTodos = async (): Promise<void> => {
	try {
		const response = await axios.get('http://localhost:3030/api/todos');
		const todos = response.data;
		console.log('all todos:', todos);
		useTodoStore.setState({ todos });
	} catch (error) {
		console.error('Error fetching todos:', error);
	}
};

export const createNewTodo = async (data: Todo): Promise<void> => {
	try {
		const response = await axios.post('http://localhost:3030/api/todos/', {
			data,
		});
		const newTodo = response.data;
		console.log('Successfully created todo:', newTodo);
	} catch (error) {
		console.error('Error creating new todo:', error);
	}
};

export const fetchTodoById = async (id: number): Promise<void> => {
	try {
		const response = await axios.get(
			`http://localhost:3030/api/todos/${id}`,
		);
		const todo = response.data;
		console.log('todo by id:', todo);
	} catch (error) {
		console.error('Error fetching todo:', error);
	}
};

export const updateTodo = async ({
	id,
	data,
}: {
	id: number;
	data: Todo;
}): Promise<void> => {
	try {
		const response = await axios.put(
			`http://localhost:3030/api/todos/${id}`,
			data,
		);
		const updatedTodo = response.data;
		console.log('Updated todo:', updatedTodo);
	} catch (error) {
		console.error('Error updating todo:', error);
	}
};

export const destroyTodo = async (id: number): Promise<void> => {
	try {
		const response = await axios.delete(
			`http://localhost:3030/api/todos/${id}`,
		);
		const deletedTodo = response.data;
		console.log('Deleted todo:', deletedTodo);
	} catch (error) {
		console.error('Error deleting todo:', error);
	}
};

export const updateTodoPublicity = async (): Promise<void> => {
	try {
		const response = await axios.patch('http://localhost:3030/api/todos');
		const todos = response.data;
		console.log(todos);
		useTodoStore.setState({ todos });
	} catch (error) {
		console.error('Error fetching todos:', error);
	}
};

export const updateTodoCompletness = async (): Promise<void> => {
	try {
		const response = await axios.patch('http://localhost:3030/api/todos');
		const todos = response.data;
		console.log(todos);
		useTodoStore.setState({ todos });
	} catch (error) {
		console.error('Error fetching todos:', error);
	}
};
