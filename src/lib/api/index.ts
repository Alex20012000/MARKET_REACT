import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface RequestParams<T = any> {
    path: string,
    params?: T
}

const baseURL = 'https://www.googleapis.com';

export const request = {
    get: <T, U>({path, params}: RequestParams<T>): Promise <AxiosResponse<U>> => axios.get(`${baseURL}/${path}`, {params})
};
