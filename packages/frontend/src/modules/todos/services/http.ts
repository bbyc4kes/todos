import { AxiosResponse } from 'axios';
import HttpService from '~shared/services/http';
import { useTodoStore } from '~store/todos/todo.store';
import { Todo } from '~store/todos/todo.store.types';

class TodoService extends HttpService {
	constructor() {
		super();
	}
	async getAllTodos(): Promise<void> {
		const { data }: AxiosResponse<Todo[]> = await this.get({
			url: 'todos',
		});

		useTodoStore.getState().setTodos(data);
	}

	async getTodoById(id: number): Promise<void> {
		const { data } = await this.get(
			{
				url: `todos/${id}`,
			},
			true,
		);

		useTodoStore.getState().getTodoById(data.id);
		return data;
	}

	async createTodo(todo: Todo): Promise<void> {
		const { data }: AxiosResponse<Todo> = await this.post({
			url: 'todos',
			data: todo,
		});

		console.log(data);
		useTodoStore.getState().addTodo(data);
	}

	async editTodo(id: number, todo: Todo): Promise<void> {
		const { data }: AxiosResponse<Todo> = await this.put(
			{
				url: `todos/${id}`,
				data: { ...todo },
			},
			true,
		);

		useTodoStore.getState().updateTodo(data);
	}

	async editPrivacy(id: number, todo: { isPublic: boolean }): Promise<void> {
		const { data }: AxiosResponse<Todo> = await this.patch(
			{
				url: `todos/${id}`,
				params: todo,
			},
			true,
		);

		useTodoStore.getState().updateTodo(data);
	}

	async editCompleteness(
		id: number,
		todo: { isCompleted: boolean },
	): Promise<void> {
		const { data }: AxiosResponse<Todo> = await this.patch(
			{
				url: `todos/${id}`,
				params: { ...todo },
			},
			true,
		);

		useTodoStore.getState().updateTodo(data);
	}

	async destroyTodo(id: number): Promise<void> {
		await this.delete(
			{
				url: `todos/${id}`,
			},
			true,
		);

		useTodoStore.getState().destroyTodo(id);
	}
}

const todoService = new TodoService();
export default todoService;
