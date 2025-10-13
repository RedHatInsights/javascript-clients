// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { ControllersTemplateSystemsUpdateRequest, UtilsErrorResponse } from '../types';


export type UpdateTemplateSystemsParams = {
  /**
  * Template ID
  * @type { string }
  * @memberof UpdateTemplateSystemsApi
  */
  templateId: string,
  /**
  * Request body
  * @type { ControllersTemplateSystemsUpdateRequest }
  * @memberof UpdateTemplateSystemsApi
  */
  body: ControllersTemplateSystemsUpdateRequest,
  options?: AxiosRequestConfig
}

export type UpdateTemplateSystemsReturnType = AxiosPromise<void>;

const isUpdateTemplateSystemsObjectParams = (params: [UpdateTemplateSystemsParams] | unknown[]): params is [UpdateTemplateSystemsParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true  && Object.prototype.hasOwnProperty.call(params[0], 'templateId') && Object.prototype.hasOwnProperty.call(params[0], 'body')
  }
  return false
}
/**
* Add systems to a template
* @summary Add systems to a template
* @param {UpdateTemplateSystemsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const updateTemplateSystemsParamCreator = async (...config: ([UpdateTemplateSystemsParams] | [string, ControllersTemplateSystemsUpdateRequest, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isUpdateTemplateSystemsObjectParams(config) ? config[0] : ['templateId', 'body', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as UpdateTemplateSystemsParams;
    const { templateId, body, options = {} } = params;
    const localVarPath = `/templates/{template_id}/systems`
        .replace(`{${"template_id"}}`, encodeURIComponent(String(templateId)));
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
        serializeData: body,
        auth:[
        {
        // authentication RhIdentity required
        // in header with key required
        authType: AuthTypeEnum.InHeader,
        authKey: "x-rh-identity"
        }
        ]
    };
}

export default updateTemplateSystemsParamCreator;
