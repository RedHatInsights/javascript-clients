/* tslint:disable */
/* eslint-disable */

import type { Configuration } from './configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import type { AxiosPromise, AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
// @ts-ignore
import { serializeDataIfNeeded, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, toPathString } from './common';
import globalAxios from 'axios';

export const BASE_PATH = "https://console.redhat.com//api/integrations/v1.0".replace(/\/+$/, "");

/**
 *
 * @export
 */
export const COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|",
};

/**
 *
 * @export
 * @interface RequestArgs
 */
export interface RequestArgs {
    urlObj: URL;
    options: AxiosRequestConfig;
    auth?: {
      authType: AuthTypeEnum;
      authKey?: string | [ string, string[] ];
    }[],
    serializeData?: unknown
}

export interface ApiConfig {
  axios: AxiosInstance;
  configuration?: Configuration;
}

export const AuthTypeEnum = {
  Basic: 'basic',
  Bearer: 'bearer',
  Oauth: 'oath',
  InHeader: 'inHeader',
  InQuery: 'inQuery'
} as const;

export type AuthTypeEnum = typeof AuthTypeEnum[keyof typeof AuthTypeEnum];

export type ActionType = (...config: any) => Promise<RequestArgs>;

/**
 * Base API to store config, basepath and axios instance.
 * @export
 * @class BaseAPI
 */
export class BaseAPI {
    protected configuration: Configuration | undefined;
    protected axios: AxiosInstance;
  /**
   * Constructor to create baseAPI.
   * @param { string } basePath basePath of api requests.
   * @param { { axios: AxiosInstance, configuration: Configuration } } config to be passed down to axios.
   */
    constructor(protected basePath: string = BASE_PATH, config: ApiConfig = { axios: globalAxios }) {
        this.axios = config.axios;
        if (config.configuration) {
            this.configuration = config.configuration;
            this.basePath = config.configuration.basePath || this.basePath;
        }
        // Object.entries(actions).forEach((entry: [string, ActionType]) => {
        //   Object.assign(this, {
        //     [entry[0]]: entry[1]
        //   })
        // })
    }

    private async authConfig({ authType, urlObj, options, authKey }: Omit<RequestArgs, 'authType' | 'authKey'> & { authKey?: string | [ string, string[] ], authType: AuthTypeEnum }) {
      if (authType === AuthTypeEnum.InQuery && typeof authKey === 'string') {
        const localVarQueryParameter = {};
        await setApiKeyToObject(localVarQueryParameter, authKey, this.configuration);
        setSearchParams(urlObj, localVarQueryParameter);
      } else if (authType === AuthTypeEnum.InHeader && typeof authKey === 'string') {
        const localVarHeaderParameter = {};
        await setApiKeyToObject(localVarHeaderParameter, authKey, this.configuration)
        options.headers = { ...options.headers, ...localVarHeaderParameter };
      } else if (authType === AuthTypeEnum.Basic) {
        setBasicAuthToObject(options, this.configuration)
      } else if (authType === AuthTypeEnum.Bearer) {
        const localVarHeaderParameter = {};
        await setBearerAuthToObject(localVarHeaderParameter, this.configuration);
        options.headers = { ...options.headers, ...localVarHeaderParameter };
      } else if (authType === AuthTypeEnum.Oauth) {
        const localVarHeaderParameter = {};
        await setOAuthToObject(localVarHeaderParameter, (authKey as [string, string[]])[0], (authKey as [string, string[]])[1], this.configuration);
        options.headers = { ...options.headers, ...localVarHeaderParameter };
      }
    }

   /**
   * Send axios request
   * @param {Promise<RequestArgs>} request to be send trough axios.
   * @param {AxiosInstance} axios optional axios instance.
   * @returns {Promise<AxiosResponse<T>>} promisable axios response.
   */
    public async sendRequest<T>(request: Promise<RequestArgs>, axios?: AxiosInstance, basePath?: string): Promise<AxiosResponse<T>> {
      const {auth, urlObj, options, serializeData} = await request;
      auth?.forEach(async ({ authType, authKey }) => {
        await this.authConfig({ authType, urlObj, options, authKey });
      })

      if (serializeData) {
        options.data = serializeDataIfNeeded(serializeData, options, this.configuration)
      }
      const axiosRequestArgs = { ...options, url: (this.basePath || basePath) + toPathString(urlObj) };
      return (axios || this.axios).request<T>(axiosRequestArgs);
    }

    // /**
    //  * Method to register new action.
    //  * @param { ActionType } toRegister object with new actions to register
    //  */
    // public register(toRegister: Record<string, ActionType>): void {
    //   Object.entries(toRegister).forEach((entry: [string, ActionType]) => {
    //     Object.assign(this, {
    //       [entry[0]]: entry[1]
    //     })
    //   })
    // }
};

/**
 *
 * Factory for creating API with option to add enpoints to the API.
 * @param basePath basePath of api requests.
 * @param { { axios: AxiosInstance, configuration: Configuration } } config to be passed down to axios.
 * @param actions object with actions to send with axios.
 * @returns created base API.
 */
export const APIFactory = <T extends Record<string, ActionType>>(basePath: string = BASE_PATH, config: ApiConfig = { axios: globalAxios }, actions: T) => {
  const api = new BaseAPI(basePath, config);
  for (const key of Object.keys(actions)) {
    const method = actions[key];
    Object.assign(api, { [key]: (...args: unknown[]) => {
      const request: Promise<RequestArgs> = method(...args as any);
      return api.sendRequest(request);
    } });
  }

  return api as BaseAPI & T;
}

export default APIFactory;

/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
    constructor(public field: string, msg?: string) {
        super(msg);
        this.name = "RequiredError"
    }
}
