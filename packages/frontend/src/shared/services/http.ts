import axios, { AxiosInstance, AxiosResponse } from 'axios';

class HttpService {
	baseUrl: string;
	fetchingService: AxiosInstance;
	apiVersion: string;

	constructor(baseUrl = process.env.BASE_URL, apiVersion = 'api') {
		this.baseUrl = baseUrl;
		this.fetchingService = axios;
		this.apiVersion = apiVersion;
	}

	private extractUrlAndDataFromConfig({
		// pass data,
		// pass url,
		...configWithoutDataAndUrl
	}): object {
		return configWithoutDataAndUrl;
	}

	private getFullApiUrl(url: string): string {
		return `${this.baseUrl}/${this.apiVersion}/${url}`;
	}

	private populateTokenToConfig(): object {
		return {
			auth: localStorage.getItem('token'),
		};
	}

	public async get(config, loggedIn = true): Promise<AxiosResponse> {
		try {
			if (loggedIn) {
				config.headers = {
					...config.headers,
					...this.populateTokenToConfig(),
				};
			}
			const res = await this.fetchingService.get(
				this.getFullApiUrl(config.url),
				this.extractUrlAndDataFromConfig(config),
			);

			return res;
		} catch (e) {
			throw new Error(
				`We caught an error sending GET request. Error: ${e}`,
			);
		}
	}

	public async post(config, loggedIn = true): Promise<AxiosResponse> {
		try {
			if (loggedIn) {
				config.headers = {
					...config.headers,
					...this.populateTokenToConfig(),
				};
			}

			const res = await this.fetchingService.post(
				this.getFullApiUrl(config.url),
				config.data,
				this.extractUrlAndDataFromConfig(config),
			);

			return res;
		} catch (e) {
			throw new Error(
				`We caught an error sending POST request. Error: ${e}`,
			);
		}
	}

	public async put(config, loggedIn = true): Promise<AxiosResponse> {
		try {
			if (loggedIn) {
				config.headers = {
					...config.headers,
					...this.populateTokenToConfig(),
				};
			}

			const res = await this.fetchingService.put(
				this.getFullApiUrl(config.url),
				config.data,
				this.extractUrlAndDataFromConfig(config),
			);

			return res;
		} catch (e) {
			throw new Error(
				`We caught an error sending PUT request. Error: ${e}`,
			);
		}
	}

	public async patch(config, loggedIn = true): Promise<AxiosResponse> {
		try {
			if (loggedIn) {
				config.headers = {
					...config.headers,
					...this.populateTokenToConfig(),
				};
			}

			const res = await this.fetchingService.patch(
				this.getFullApiUrl(config.url),
				config.data,
				this.extractUrlAndDataFromConfig(config),
			);

			return res;
		} catch (e) {
			throw new Error(
				`We caught an error sending PATCH request. Error: ${e}`,
			);
		}
	}

	public async delete(config, loggedIn = true): Promise<AxiosResponse> {
		try {
			if (loggedIn) {
				config.headers = {
					...config.headers,
					...this.populateTokenToConfig(),
				};
			}

			const res = await this.fetchingService.delete(
				this.getFullApiUrl(config.url),
				this.extractUrlAndDataFromConfig(config),
			);

			return res;
		} catch (e) {
			throw new Error(
				`We caught an error sending DELETE request. Error: ${e}`,
			);
		}
	}
}

export default HttpService;
