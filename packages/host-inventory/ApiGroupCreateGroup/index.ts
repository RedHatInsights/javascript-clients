// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { GroupIn, GroupOutWithHostCount } from '../types';


export type ApiGroupCreateGroupParams = {
  /**
  * Data required to create a record for a group.
  * @type { GroupIn }
  * @memberof ApiGroupCreateGroupApi
  */
  groupIn: GroupIn,
  options?: AxiosRequestConfig
}

const isApiGroupCreateGroupObjectParams = (params: [ApiGroupCreateGroupParams] | unknown[]): params is [ApiGroupCreateGroupParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'groupIn')
}
/**
* Creates a new group containing the hosts associated with the host IDs provided. <br /><br /> Required permissions: inventory:groups:write
* @summary Create a new group matching the provided name and list of hosts IDs
* @param {ApiGroupCreateGroupParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const apiGroupCreateGroupParamCreator = async (...config: ([ApiGroupCreateGroupParams] | [GroupIn, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isApiGroupCreateGroupObjectParams(config) ? config[0] : ['groupIn', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ApiGroupCreateGroupParams;
    const { groupIn, options = {} } = params;
    const localVarPath = `/groups`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'POST' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    localVarHeaderParameter['Content-Type'] = 'application/json';

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        serializeData: groupIn,
        auth:[
        {
        // authentication ApiKeyAuth required
        // in header with key required
        authType: AuthTypeEnum.InHeader,
        authKey: "x-rh-identity"
        },
        {
        // authentication BearerAuth required
        // bearer auth required
        authType: AuthTypeEnum.Bearer,
        }
        ]
    };
}

export default apiGroupCreateGroupParamCreator;
