export interface Todo {
	id: number;
	title: string;
	description: string;
	isCompleted: boolean;
	isPublic: boolean;
	userId: number | null;
	updatedAt: Date;
	createdAt: Date;
}

export interface TodoStore {
	todos: Todo[];
	todoById: Todo;
	isLoading: boolean;
	setTodos: (todos: Todo[]) => Promise<void>;
	createTodo: (newTodo: Todo) => Promise<void>;
	destroyTodo: (id: number) => Promise<void>;
	getTodoById: (id: number) => Promise<Todo>;
	updatePublicity: (id: number, todo: { isPublic: boolean }) => Promise<void>;
	updateCompleteness: (
		id: number,
		todo: { isCompleted: boolean },
	) => Promise<void>;
	updateTodo: (id: number, updatedTodo: Todo) => Promise<void>;
}
