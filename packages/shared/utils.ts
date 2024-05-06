import { BaseAPI } from './base';
import { ActionType, ApiConfig, RequestArgs } from './common';
import globalAxios from 'axios';

function isAxiosConfigObject(arg: any): arg is ApiConfig {
  return arg && typeof arg === 'object' && 'axios' in arg;
}

function isActionConfigObject(arg: any): arg is Record<string, ActionType> {
  return arg && typeof arg === 'object';
}

export function APIFactory<T extends Record<string, ActionType>>(basePath: string, actions: T, config?: ApiConfig): BaseAPI & T;
export function APIFactory<T extends Record<string, ActionType>>(actions: T, config?: ApiConfig): BaseAPI & T;
export function APIFactory<T extends Record<string, ActionType>>(...args: unknown[]) {
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

  return api as BaseAPI & T;
}
