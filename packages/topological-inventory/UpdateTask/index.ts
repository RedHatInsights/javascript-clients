// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { ErrorNotFound, Task } from '../types';


export type UpdateTaskParams = {
  /**
  * ID of the resource
  * @type { string }
  * @memberof UpdateTaskApi
  */
  id: string,
  /**
  * Task attributes to update
  * @type { Task }
  * @memberof UpdateTaskApi
  */
  task: Task,
  options?: AxiosRequestConfig
}

const isUpdateTaskObjectParams = (params: [UpdateTaskParams] | unknown[]): params is [UpdateTaskParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'id') && Object.prototype.hasOwnProperty.call(params, 'task')
}
/**
* Updates a Task object
* @summary Update an existing Task
* @param {UpdateTaskParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const updateTaskParamCreator = async (...config: ([UpdateTaskParams] | [string, Task, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isUpdateTaskObjectParams(config) ? config[0] : ['id', 'task', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as UpdateTaskParams;
    const { id, task, options = {} } = params;
    const localVarPath = `/tasks/{id}`
        .replace(`{${"id"}}`, encodeURIComponent(String(id)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'PATCH' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    localVarHeaderParameter['Content-Type'] = 'application/json';

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        serializeData: task,
        auth:[
        {
        // authentication UserSecurity required
        // http basic authentication required
        authType: AuthTypeEnum.Basic,
        }
        ]
    };
}

export default updateTaskParamCreator;
