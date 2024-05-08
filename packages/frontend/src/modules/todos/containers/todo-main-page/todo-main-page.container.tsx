import React, { useEffect } from 'react';
import TodoList from '../../components/todo-list/todo-list.component';
import TodoTable from '../../components/todo-table/todo-table.component';
import TodoSlider from '../../components/todo-slider/todo-slider.component';
import { useTodoStore } from '~store/todos/todo.store';
import {
	containerStyles,
	mainContentContainerStyles,
} from './todo-main-page.styles';
import useBreakpoints from '~shared/hooks/use-breakpoints/use-breakpoints.hook';

const TodoMainPage = (): React.ReactNode => {
	const { isDesktop, isMobile, isTablet } = useBreakpoints();

	useEffect(() => {
		useTodoStore.getState().setTodos(todos);
	}, []);

	const todos = useTodoStore((state) => state.todos);
	return (
		<div className={containerStyles}>
			<div className={mainContentContainerStyles}>
				{isDesktop && <TodoTable todos={todos} />}
				{isTablet && <TodoSlider todos={todos} />}
				{isMobile && <TodoList />}
			</div>
		</div>
	);
};

export default TodoMainPage;
