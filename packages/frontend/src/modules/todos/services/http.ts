import { AxiosResponse } from 'axios';
import { toaster } from '~shared/components/toast/toast.component';
import HttpService from '~shared/services/http';
import { Todo } from '~store/todos/todo.store.types';

class TodoService extends HttpService {
	constructor() {
		super();
	}
	async getAllTodos(): Promise<Todo[]> {
		const { data }: AxiosResponse<Todo[]> = await this.get({
			url: 'todos',
		});

		return data;
	}

	async getTodoById(id: number): Promise<Todo> {
		const { data } = await this.get(
			{
				url: `todos/${id}`,
			},
			true,
		);

		return data;
	}

	async createTodo(todo: Todo): Promise<Todo> {
		const { data }: AxiosResponse<Todo> = await this.post({
			url: 'todos',
			data: todo,
		});

		toaster.show({ message: 'You have successfully created a todo.' });
		return data;
	}

	async editTodo(id: number, todo: Todo): Promise<Todo> {
		const { data }: AxiosResponse<Todo> = await this.put(
			{
				url: `todos/${id}`,
				data: { ...todo },
			},
			true,
		);

		toaster.show({ message: 'You have successfully edited a todo.' });
		return data;
	}

	async editPublicity(
		id: number,
		todo: { isPublic: boolean },
	): Promise<Todo> {
		const { data }: AxiosResponse<Todo> = await this.patch(
			{
				url: `todos/${id}/privacy`,
				params: todo,
			},
			true,
		);

		return data;
	}

	async editCompleteness(
		id: number,
		todo: { isCompleted: boolean },
	): Promise<Todo> {
		const { data }: AxiosResponse<Todo> = await this.patch(
			{
				url: `todos/${id}`,
				params: { ...todo },
			},
			true,
		);

		return data;
	}

	async destroyTodo(id: number): Promise<void> {
		await this.delete(
			{
				url: `todos/${id}`,
			},
			true,
		);

		toaster.show({ message: 'You have successfully deleted a todo.' });
	}
}

const todoService = new TodoService();

export default todoService;
