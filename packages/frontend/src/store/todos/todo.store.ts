import { create } from 'zustand';
import { TodoStore } from './todo.store.types';

export const useTodoStore = create<TodoStore>((set) => ({
	todos: [],
	todoById: null,
	setTodos: (todos): void => set({ todos: todos }),
	getTodoById: (id: number): void => {
		set((state) => {
			const filteredTodo = state.todos.find((todo) => todo.id === id);
			return { ...state, oneTodo: filteredTodo };
		});
	},
	addTodo: (newTodo): void =>
		set((state) => ({ todos: [...state.todos, newTodo] })),
	destroyTodo: (id: number): void =>
		set((state) => ({
			todos: state.todos.filter((todo) => todo.id !== id),
		})),
	updateTodo: (updatedTodo): void =>
		set((state) => ({
			todos: state.todos.map((todo) =>
				todo.id === updatedTodo.id ? updatedTodo : todo,
			),
		})),
}));
