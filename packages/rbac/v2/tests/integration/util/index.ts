import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/configuration';
import { AxiosRequestConfig } from 'axios';

export async function updateConfig(config: Configuration, basePath: string): Promise<Configuration> {
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
export const convertConfig = async (config: Configuration): Promise<AxiosRequestConfig> => {
  const axiosRequestConfig: AxiosRequestConfig = {
    baseURL: config.basePath,
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: false,
  };
  return axiosRequestConfig;
};
