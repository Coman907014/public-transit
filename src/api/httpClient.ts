import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig, AxiosError } from 'axios';

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

const httpClient = {

  get<T extends any>(url: string, params?: any, config?: AxiosRequestConfig ): Promise<AxiosResponse<T>> {
    return axiosInstance.get(url, { params, ...config })
      .catch((error) => this.handleError(error, 'get', url));
  },

  post<T extends any>(url: string, data: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return axiosInstance.post(url, data, config)
      .catch((error) => this.handleError(error, 'post', url));
  },

  patch<T extends any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return axiosInstance.patch(url, data, config)
      .catch((error) => this.handleError(error, 'patch', url));
  },

  handleError(error: AxiosError, method: string, url: string): Promise<AxiosResponse> {
    console.error(`Request failed on ${method} ${url}.`);

    throw error;
  },

};

export default httpClient;