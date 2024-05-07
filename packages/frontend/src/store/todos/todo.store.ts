import { create } from 'zustand';
import { TodoStore } from './todo.store.types';

export const useTodoStore = create<TodoStore>((set) => ({
	todos: [],
	todoById: null,
	isLoading: false,
	getTodoById: (id: number): void => {
		set((state) => {
			const oneTodo = state.todos.find((todo) => todo.id === id);
			return { ...state, todoById: oneTodo };
		});
	},
	setTodos: (todos): void => set({ todos: todos }),
	addTodo: (newTodo): void =>
		set((state) => ({ todos: [...state.todos, newTodo] })),
	updateTodo: (updatedTodo): void =>
		set((state) => ({
			todos: state.todos.map((todo) =>
				todo.id === updatedTodo.id ? updatedTodo : todo,
			),
		})),
	destroyTodo: (id: number): void =>
		set((state) => ({
			todos: state.todos.filter((todo) => todo.id !== id),
		})),
}));
