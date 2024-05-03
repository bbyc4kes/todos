import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useModal } from '~shared/hooks/use-modal';
import { Form } from 'react-final-form';
import { useTodoStore } from '~store/todos/todo.store';
import todoService from '../services/http';
import Modal from '~shared/components/modal/modal.component';
import AddTodoForm from '../components/todo-form/todo-form.component';

const TodoDetailsPage = (): React.ReactNode => {
	const { id } = useParams();

	const parsedId = parseInt(id);
	const todo = useTodoStore((state) => state.todoById);
	const { isOpen, openModal, closeModal } = useModal();

	useEffect(() => {
		todoService.getAllTodos();
		todoService.getTodoById(parsedId);
	}, [id]);

	const handleEditTodoText = async (data): Promise<void> => {
		const isPublic = data.isPublic === 'true';
		const isCompleted = data.isCompleted === 'true';

		const todoData = {
			...data,
			isPublic,
			isCompleted,
		};

		await todoService.editTodo(parsedId, todoData);
		await todoService.getAllTodos();
		await todoService.getTodoById(parsedId);
	};

	return (
		<div>
			<h2>{todo?.title}</h2>
			<p>{todo?.description}</p>
			<button onClick={openModal}>Edit todo</button>
			{isOpen && (
				<Modal closeModal={closeModal}>
					<Form
						onSubmit={handleEditTodoText}
						component={AddTodoForm}
					/>
				</Modal>
			)}
		</div>
	);
};

export default TodoDetailsPage;
