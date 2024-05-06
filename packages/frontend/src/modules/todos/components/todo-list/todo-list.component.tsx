import React, { useEffect } from 'react';
import todoService from '~modules/todos/services/http';
import { listStyles, todosContainerStyles } from './todo-list.styles';
import { useTodoStore } from '~store/todos/todo.store';
import TodoDetails from '../todo-details/todo-details.component';
import SectionDivider from '~shared/components/section-divider/section-divider.component';
import TodoAddSection from '../todo-add-section/todo-add-section.component';

const TodoList = (): React.ReactNode => {
	const todos = useTodoStore((state) => state.todos);
	useEffect(() => {
		todoService.getAllTodos();
	}, []);

	return (
		<>
			<TodoAddSection>
				<SectionDivider />
				<section className={todosContainerStyles}>
					<div className={listStyles}>
						{todos?.map((todo) => (
							<div key={todo.id}>
								<TodoDetails {...todo} />
							</div>
						))}
					</div>
				</section>
			</TodoAddSection>
		</>
	);
};

export default TodoList;
