import { Todo } from '~store/todos/todo.store.types';

export interface User {
	id?: number;
	name: string;
	email: string;
	password: string;
	todos?: Todo[];
}

export interface UserStore {
	users: User[];
	userById: User;
	isLoading: boolean;
	token: string;

	getUserById: (id: number) => Promise<User>;
	setUsers: (users: User[]) => Promise<void>;
	createUser: (newUser: User) => Promise<void>;
	logInUser: (user: User) => Promise<void>;
	logoutUser: (user: User) => Promise<void>;
	destroyUser: (id: number) => Promise<void>;
}
