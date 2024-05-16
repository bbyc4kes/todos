import { AxiosResponse } from 'axios';
import { toaster } from '~shared/components/toast/toast.component';
import HttpService from '~shared/services/http';
import { User } from '~store/user/user.store.types';

class UserService extends HttpService {
	constructor() {
		super();
	}

	async getAllUsers(): Promise<User[]> {
		const { data }: AxiosResponse<User[]> = await this.get({
			url: 'user',
		});

		return data;
	}

	async getUserById(id: number): Promise<User> {
		const { data } = await this.get(
			{
				url: `user/${id}`,
			},
			true,
		);

		return data;
	}

	async createUser(user: User): Promise<string> {
		const { data }: AxiosResponse<string> = await this.post({
			url: 'user/register',
			data: user,
		});

		console.log('data from axios req createUser: ', data);

		toaster.show({ message: 'You have successfully registered.' });
		return data;
	}

	async logInUser(user: User): Promise<string> {
		const { data }: AxiosResponse<string> = await this.post({
			url: 'user/login',
			data: user,
		});

		toaster.show({ message: 'You have successfully logged in.' });
		return data;
	}

	async logoutUser(user: User): Promise<void> {
		await this.get({
			url: 'user/logout',
			data: user,
		});

		toaster.show({ message: 'You have successfully logged out.' });
	}

	async destroyUser(id: number): Promise<void> {
		await this.delete(
			{
				url: `user/${id}`,
			},
			true,
		);

		toaster.show({ message: 'You have successfully deleted a user.' });
	}
}

const userService = new UserService();

export default userService;
