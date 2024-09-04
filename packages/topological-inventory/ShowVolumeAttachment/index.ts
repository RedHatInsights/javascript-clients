// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { ErrorNotFound, VolumeAttachment } from '../types';


export type ShowVolumeAttachmentParams = {
  /**
  * ID of the resource
  * @type { string }
  * @memberof ShowVolumeAttachmentApi
  */
  id: string,
  options?: AxiosRequestConfig
}

const isShowVolumeAttachmentObjectParams = (params: [ShowVolumeAttachmentParams] | unknown[]): params is [ShowVolumeAttachmentParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'id')
}
/**
* Returns a VolumeAttachment object
* @summary Show an existing VolumeAttachment
* @param {ShowVolumeAttachmentParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const showVolumeAttachmentParamCreator = async (...config: ([ShowVolumeAttachmentParams] | [string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isShowVolumeAttachmentObjectParams(config) ? config[0] : ['id', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ShowVolumeAttachmentParams;
    const { id, options = {} } = params;
    const localVarPath = `/volume_attachments/{id}`
        .replace(`{${"id"}}`, encodeURIComponent(String(id)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        auth:[
        {
        // authentication UserSecurity required
        // http basic authentication required
        authType: AuthTypeEnum.Basic,
        }
        ]
    };
}

export default showVolumeAttachmentParamCreator;
