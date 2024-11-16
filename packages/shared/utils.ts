import { BaseAPI } from './base';
import { ActionType, ApiConfig, RequestArgs } from './common';
import globalAxios from 'axios';

function isAxiosConfigObject(arg: any): arg is ApiConfig {
  return arg && typeof arg === 'object' && 'axios' in arg;
}

function isActionConfigObject(arg: any): arg is Record<string, ActionType> {
  return arg && typeof arg === 'object';
}

export type APIFactoryResponse<J extends Record<string, ActionType>, L extends { [K in keyof J]: unknown }> = {
  [K in keyof J]: (...args: J[K] extends (...args: infer A) => any ? A : never) => L[K];
};

export function APIFactory<T extends Record<string, ActionType>, S extends { [K in keyof T]: unknown }>(
  basePath: string,
  actions: T,
  config?: ApiConfig,
): BaseAPI & APIFactoryResponse<T, S>;
export function APIFactory<T extends Record<string, ActionType>, S extends { [K in keyof T]: unknown }>(
  actions: T,
  config?: ApiConfig,
): BaseAPI & APIFactoryResponse<T, S>;
export function APIFactory<T extends Record<string, ActionType>, S extends { [K in keyof T]: unknown }>(...args: unknown[]) {
  const [a, b, c] = args;
  let basePath: string | undefined = undefined;
  let actions: Record<string, ActionType> = {};
  let config: ApiConfig = { axios: globalAxios };
  if (typeof a === 'string' && isActionConfigObject(b)) {
    basePath = a;
    actions = b;
    if (isAxiosConfigObject(c)) {
      config = c;
    }
  } else if (isActionConfigObject(a)) {
    actions = a;
    if (isAxiosConfigObject(b)) {
      config = b;
    }
  } else {
    throw new Error('Invalid API Factory arguments');
  }

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

  return api as BaseAPI & APIFactoryResponse<T, S>;
}
