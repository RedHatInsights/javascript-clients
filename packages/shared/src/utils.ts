import { BaseAPI } from './base';
import { ActionType, ApiConfig, RequestArgs } from './common';
import globalAxios from 'axios';

export const APIFactory = <T extends Record<string, ActionType>>(basePath: string, config: ApiConfig = { axios: globalAxios }, actions: T) => {
  const api = new BaseAPI(basePath, config);
  for (const key of Object.keys(actions)) {
    const method = actions[key];
    Object.assign(api, {
      [key]: (...args: unknown[]) => {
        const request: Promise<RequestArgs> = method(...(args as any));
        return api.sendRequest(request);
      },
    });
  }

  return api as BaseAPI & T;
};

export default APIFactory;
