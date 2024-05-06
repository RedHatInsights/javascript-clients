import { AxiosInstance, AxiosResponse } from "axios";
import { Configuration } from "./configuration";
import { ApiConfig, RequestArgs, AuthTypeEnum, setApiKeyToObject, setSearchParams, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, serializeDataIfNeeded, toPathString } from "./common";
import globalAxios from 'axios';

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
  constructor(protected basePath?: string, config: ApiConfig = { axios: globalAxios }) {
      this.axios = config.axios;
      if (config.configuration) {
          this.configuration = config.configuration;
          this.basePath = config.configuration.basePath || this.basePath;
      }
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
};
