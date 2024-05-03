import React, { useEffect } from 'react';
import { Form } from 'react-final-form';
import todoService from '~modules/todos/services/http';
import { useTodoStore } from '~store/todos/todo.store';
import AddTodoForm from '../todo-form/todo-form.component';
import TodoDetails from '../todo-details/todo-details.component';
import {
	containerStyles,
	headingStyles,
	listStyles,
	formStyles,
} from './todo-list.styles';

const TodoList = (): React.ReactNode => {
	const todos = useTodoStore((state) => state.todos);

	useEffect(() => {
		todoService.getAllTodos();
	}, []);

	const onSubmit = async (data): Promise<void> => {
		const isCompleted = data.isCompleted === 'true';
		const isPublic = data.isPublic === 'true';

		const todoData = {
			...data,
			isCompleted,
			isPublic,
		};

		await todoService.createTodo(todoData);
	};

	return (
		<div className={containerStyles}>
			<h2 className={headingStyles}>TODO LIST</h2>
			<ul className={listStyles}>
				{todos?.map((todo) => (
					<li key={todo.id}>
						<TodoDetails {...todo} />
					</li>
				))}
			</ul>
			<Form
				onSubmit={onSubmit}
				render={AddTodoForm}
				className={formStyles}
			/>
		</div>
	);
};

export default TodoList;
