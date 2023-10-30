/* eslint-disable no-console */
import axios, { AxiosRequestConfig } from 'axios';
import { IErrorOptions, IResponse } from './types';

const requestApi = async (
  key: string,
  message: string,
  timeout = 100000,
): Promise<IResponse> => {
  const BASE_URL = process.env.NEXT_PUBLIC_URL ?? 'http://localhost:3000';

  const options: AxiosRequestConfig = {
    method: 'POST',
    url: `${BASE_URL}/api/bot`,
    headers: { 'Content-Type': 'application/json' },
    data: { key, message },
    timeout,
  };

  return axios
    .request(options)
    .then(({ data }) => data)
    .catch((e) => {
      console.log('Error:', e.response?.data);
      if (axios.isCancel(e) || e.response?.data?.error?.code === '504') {
        throw new Error('Error 504: Timeout da solicitação');
      }

      const { status, error }: IErrorOptions = e.response?.data?.error || {};
      throw Error(`Error ${status}: ${error?.message}`);
    });
};

export default requestApi;
