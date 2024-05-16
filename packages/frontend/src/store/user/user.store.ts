import { create } from 'zustand';
import { User, UserStore } from './user.store.types';
import userService from '~modules/user/services/http';

export const useUserStore = create<UserStore>((set) => ({
	users: [],
	userById: null,
	isLoading: false,
	token: '',

	getUserById: async (id: number): Promise<User> => {
		set({ isLoading: true });

		const oneUser = await userService.getUserById(id);

		set({
			userById: oneUser,
			isLoading: false,
		});

		return oneUser;
	},
	setUsers: async (): Promise<void> => {
		set({ isLoading: true });

		const fetchedUsers = await userService.getAllUsers();

		set({ users: fetchedUsers });
		set({ isLoading: false });
	},
	createUser: async (newUser: User): Promise<void> => {
		set({ isLoading: true });

		const token = await userService.createUser(newUser);

		set({ token });

		set({ isLoading: false });
	},
	logInUser: async (user: User): Promise<void> => {
		set({ isLoading: true });

		const token = await userService.logInUser(user);

		set({ token });

		set({ isLoading: false });
	},
	logoutUser: async (user: User): Promise<void> => {
		set({ isLoading: true });

		await userService.logoutUser(user);

		set({ token: '' });

		set({ isLoading: false });
	},

	destroyUser: async (id: number): Promise<void> => {
		set({ isLoading: true });

		await userService.destroyUser(id);
		set((state) => ({
			users: state.users.filter((user) => user.id !== id),
		}));

		set({ isLoading: false });
	},
}));
