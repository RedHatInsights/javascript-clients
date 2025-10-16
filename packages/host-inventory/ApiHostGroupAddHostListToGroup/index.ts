// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { GroupOutWithHostCount } from '../types';


export type ApiHostGroupAddHostListToGroupParams = {
  /**
  * Group ID.
  * @type { string }
  * @memberof ApiHostGroupAddHostListToGroupApi
  */
  groupId: string,
  /**
  * A list of hosts IDs to associate with the provided group.
  * @type { Array<string> | null }
  * @memberof ApiHostGroupAddHostListToGroupApi
  */
  requestBody: Array<string> | null,
  options?: AxiosRequestConfig
}

export type ApiHostGroupAddHostListToGroupReturnType = GroupOutWithHostCount;

const isApiHostGroupAddHostListToGroupObjectParams = (params: [ApiHostGroupAddHostListToGroupParams] | unknown[]): params is [ApiHostGroupAddHostListToGroupParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'groupId') && Object.prototype.hasOwnProperty.call(params[0], 'requestBody')
  }
  return false
}
/**
* Adds the host list in the request body to the provided group. <br /><br /> Required permissions: inventory:groups:write
* @summary Add host IDs to the provided group
* @param {ApiHostGroupAddHostListToGroupParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const apiHostGroupAddHostListToGroupParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([ApiHostGroupAddHostListToGroupParams] | [string, Array<string> | null, AxiosRequestConfig])) => {
    const params = isApiHostGroupAddHostListToGroupObjectParams(config) ? config[0] : ['groupId', 'requestBody', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ApiHostGroupAddHostListToGroupParams;
    const { groupId, requestBody, options = {} } = params;
    const localVarPath = `/groups/{group_id}/hosts`
        .replace(`{${"group_id"}}`, encodeURIComponent(String(groupId)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'POST' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    localVarHeaderParameter['Content-Type'] = 'application/json';

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        serializeData: requestBody,
        auth:[
        {
        // authentication ApiKeyAuth required
        // in header with key required
        authType: AuthTypeEnum.InHeader,
        authKey: "x-rh-identity"
        }
        ]
    };

    return sendRequest<ApiHostGroupAddHostListToGroupReturnType>(Promise.resolve(args));
}

export default apiHostGroupAddHostListToGroupParamCreator;
