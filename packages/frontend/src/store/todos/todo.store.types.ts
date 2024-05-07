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
	setTodos: (todos: Todo[]) => void;
	addTodo: (newTodo: Todo) => void;
	destroyTodo: (id: number) => void;
	getTodoById: (id: number) => void;
	updateTodo: (updatedTodo: Todo) => void;
}
