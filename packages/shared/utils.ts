import { BaseAPI } from './base';
import { ActionType, ApiConfig, RequestArgs } from './common';
import globalAxios from 'axios';

function isAxiosConfigObject(arg: any): arg is ApiConfig {
  return arg && typeof arg === 'object' && 'axios' in arg;
}

export type APIFactoryResponse<J extends Record<string, (...args: any[]) => any>, L extends { [K in keyof J]: unknown }> = {
  [K in keyof J]: (...args: J[K] extends (first: any, ...args: infer A) => any ? A : never) => L[K];
};

export function APIFactory<T extends Record<string, (...args: any[]) => any>>(
  basePath: string,
  actions: T,
  config?: ApiConfig,
): BaseAPI & APIFactoryResponse<T, { [K in keyof T]: ReturnType<T[K]> }>;
export function APIFactory<T extends Record<string, (...args: any[]) => any>>(
  actions: T,
  config?: ApiConfig,
): BaseAPI & APIFactoryResponse<T, { [K in keyof T]: ReturnType<T[K]> }>;
export function APIFactory<T extends Record<string, (...args: any[]) => any>>(
  basePathOrActions: string | T,
  actionsOrConfig?: T | ApiConfig,
  config?: ApiConfig,
): BaseAPI & APIFactoryResponse<T, { [K in keyof T]: ReturnType<T[K]> }> {
  let basePath: string | undefined = undefined;
  let actions: T;
  let apiConfig: ApiConfig = { axios: globalAxios };

  if (typeof basePathOrActions === 'string') {
    basePath = basePathOrActions;
    actions = actionsOrConfig as T;
    if (config) {
      apiConfig = config;
    }
  } else {
    actions = basePathOrActions;
    if (actionsOrConfig && isAxiosConfigObject(actionsOrConfig)) {
      apiConfig = actionsOrConfig;
    }
  }

  const api = new BaseAPI(basePath, apiConfig);
  for (const key of Object.keys(actions)) {
    const method = actions[key];
    Object.assign(api, {
      [key]: (...args: unknown[]) => {
        return method(api.sendRequest.bind(api), ...(args as any));
      },
    });
  }

  return api as BaseAPI & APIFactoryResponse<T, { [K in keyof T]: ReturnType<T[K]> }>;
}
