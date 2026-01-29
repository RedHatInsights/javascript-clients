// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { ProblemsProblem403, ProblemsProblem404, RoleBindingsCreate401Response, RoleBindingsCreate500Response, RolesRole } from '../types';


export type RolesReadParams = {
  /**
  *
  * @type { string }
  * @memberof RolesReadApi
  */
  id: string,
  /**
  * Control which fields are included in the response to optimize payload size.
  * @type { string }
  * @memberof RolesReadApi
  */
  fields?: string,
  options?: AxiosRequestConfig
}

export type RolesReadReturnType = RolesRole;

const isRolesReadObjectParams = (params: [RolesReadParams] | unknown[]): params is [RolesReadParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'id')
  }
  return false
}
/**
*
* @param {RolesReadParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const rolesReadParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([RolesReadParams] | [string, string, AxiosRequestConfig])) => {
    const params = isRolesReadObjectParams(config) ? config[0] : ['id', 'fields', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as RolesReadParams;
    const { id, fields, options = {} } = params;
    const localVarPath = `/roles/{id}/`
        .replace(`{${"id"}}`, encodeURIComponent(String(id)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (fields !== undefined) {
        localVarQueryParameter['fields'] = fields;
    }



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };

    return sendRequest<RolesReadReturnType>(Promise.resolve(args));
}

export default rolesReadParamCreator;
