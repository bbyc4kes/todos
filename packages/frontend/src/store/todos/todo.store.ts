import { create } from 'zustand';
import { Todo, TodoStore } from './todo.store.types';
import todoService from '~modules/todos/services/http';

export const useTodoStore = create<TodoStore>((set) => ({
	todos: [],
	todoById: null,
	isLoading: false,
	getTodoById: async (id: number): Promise<Todo> => {
		set({ isLoading: true });

		const oneTodo = await todoService.getTodoById(id);

		set({
			todoById: oneTodo,
			isLoading: false,
		});

		return oneTodo;
	},
	setTodos: async (): Promise<void> => {
		set({ isLoading: true });

		const fetchedTodos = await todoService.getAllTodos();

		set({ todos: fetchedTodos });
		set({ isLoading: false });
	},
	createTodo: async (newTodo): Promise<void> => {
		set({ isLoading: true });

		const createdTodo = await todoService.createTodo(newTodo);

		set((state) => ({ todos: [...state.todos, createdTodo] }));
		set({ isLoading: false });
	},

	updateTodo: async (id: number, updatedTodo: Todo): Promise<void> => {
		set({ isLoading: true });

		const editedTodo = await todoService.editTodo(id, updatedTodo);
		set((state) => ({
			todos: state.todos.map((todo) =>
				todo.id === updatedTodo.id ? { ...todo, ...editedTodo } : todo,
			),
		}));

		set({ isLoading: false });
	},

	updateCompleteness: async (
		id: number,
		todo: { isCompleted: boolean },
	): Promise<void> => {
		set({ isLoading: true });

		const editedTodo = await todoService.editCompleteness(id, todo);

		set((state) => {
			return {
				todos: state.todos.map((todo) =>
					todo.id === id ? editedTodo : todo,
				),
			};
		});

		set({ isLoading: false });
	},

	updatePublicity: async (
		id: number,
		todo: { isPublic: boolean },
	): Promise<void> => {
		set({ isLoading: true });

		const editedTodo = await todoService.editPublicity(id, todo);

		set((state) => {
			return {
				todos: state.todos.map((todo) =>
					todo.id === id ? editedTodo : todo,
				),
			};
		});
		set({ isLoading: false });
	},

	destroyTodo: async (id: number): Promise<void> => {
		set({ isLoading: true });

		await todoService.destroyTodo(id);
		set((state) => ({
			todos: state.todos.filter((todo) => todo.id !== id),
		}));

		set({ isLoading: false });
	},
}));
