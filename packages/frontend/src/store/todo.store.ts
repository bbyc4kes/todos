import { create } from 'zustand';

export interface Todo {
	id: number;
	title: string;
	description: string;
	isCompleted: boolean;
	isPublic: boolean;
	userId: number;
	updatedAt?: Date | null;
	createdAt?: Date | null;
}

interface TodoStore {
	todos: Todo[];
	addTodo: (todo: Todo) => void;
	removeTodo: (id: number) => void;
	updateTodo: (updatedTodo: Todo) => void;
}
export const useTodoStore = create<TodoStore>((set) => ({
	todos: [],
	addTodo: (todo): void =>
		set((state) => ({ todos: [...state.todos, todo] })),
	removeTodo: (id): void =>
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
