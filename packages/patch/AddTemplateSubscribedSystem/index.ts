// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { UtilsErrorResponse } from '../types';


export type AddTemplateSubscribedSystemParams = {
  /**
  * Template ID
  * @type { string }
  * @memberof AddTemplateSubscribedSystemApi
  */
  templateId: string,
  options?: AxiosRequestConfig
}

export type AddTemplateSubscribedSystemReturnType = void;

const isAddTemplateSubscribedSystemObjectParams = (params: [AddTemplateSubscribedSystemParams] | unknown[]): params is [AddTemplateSubscribedSystemParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'templateId')
  }
  return false
}
/**
* Add a system authenticated by  its client identity certificate to a template
* @summary Add a system to a template
* @param {AddTemplateSubscribedSystemParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const addTemplateSubscribedSystemParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([AddTemplateSubscribedSystemParams] | [string, AxiosRequestConfig])) => {
    const params = isAddTemplateSubscribedSystemObjectParams(config) ? config[0] : ['templateId', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as AddTemplateSubscribedSystemParams;
    const { templateId, options = {} } = params;
    const localVarPath = `/templates/{template_id}/subscribed-systems`
        .replace(`{${"template_id"}}`, encodeURIComponent(String(templateId)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'PATCH' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        auth:[
        {
        // authentication RhIdentity required
        // in header with key required
        authType: AuthTypeEnum.InHeader,
        authKey: "x-rh-identity"
        }
        ]
    };

    return sendRequest<AddTemplateSubscribedSystemReturnType>(Promise.resolve(args));
}

export default addTemplateSubscribedSystemParamCreator;
