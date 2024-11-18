import { AxiosRequestConfig } from 'axios';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/configuration';

export async function updateConfig(config: Configuration, basePath: string) {
  config.basePath = basePath;
  config.baseOptions = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  };
  return config;
}

// translates the normal Configuration object into AxiosRequestConfig
export const convertConfig: (config: Configuration) => Promise<AxiosRequestConfig<any>> = async (config: Configuration) => {
  const axiosRequestConfig: AxiosRequestConfig = {
    baseURL: config.basePath,
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: false,
  };
  return axiosRequestConfig;
};
