export interface Todo {
	id: number;
	title: string;
	description: string;
	isCompleted: boolean;
	isPublic: boolean;
	userId: number | null;
	updatedAt?: Date | null;
	createdAt?: Date | null;
}

export interface TodoStore {
	todos: Todo[];
	todoById: Todo;
	setTodos: (todos: Todo[]) => void;
	addTodo: (newTodo: Todo) => void;
	destroyTodo: (id: number) => void;
	getTodoById: (id: number) => void;
	updateTodo: (updatedTodo: Todo) => void;
}
