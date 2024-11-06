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


export type ApiGroupPatchGroupByIdParams = {
  /**
  * Group ID.
  * @type { string }
  * @memberof ApiGroupPatchGroupByIdApi
  */
  groupId: string,
  /**
  * A dictionary with new information to merge with the original group.
  * @type { GroupIn }
  * @memberof ApiGroupPatchGroupByIdApi
  */
  groupIn: GroupIn,
  options?: AxiosRequestConfig
}

const isApiGroupPatchGroupByIdObjectParams = (params: [ApiGroupPatchGroupByIdParams] | unknown[]): params is [ApiGroupPatchGroupByIdParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'groupId') && Object.prototype.hasOwnProperty.call(params, 'groupIn')
}
/**
* Merge group information. <br /><br /> Required permissions: inventory:groups:write
* @summary Merge group information
* @param {ApiGroupPatchGroupByIdParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const apiGroupPatchGroupByIdParamCreator = async (...config: ([ApiGroupPatchGroupByIdParams] | [string, GroupIn, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isApiGroupPatchGroupByIdObjectParams(config) ? config[0] : ['groupId', 'groupIn', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ApiGroupPatchGroupByIdParams;
    const { groupId, groupIn, options = {} } = params;
    const localVarPath = `/groups/{group_id}`
        .replace(`{${"group_id"}}`, encodeURIComponent(String(groupId)));
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
        serializeData: groupIn,
        auth:[
        {
        // authentication ApiKeyAuth required
        // in header with key required
        authType: AuthTypeEnum.InHeader,
        authKey: "x-rh-identity"
        }
        ]
    };
}

export default apiGroupPatchGroupByIdParamCreator;
