// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { HostAckJustification } from '../types';


export type HostackUpdateParams = {
  /**
  * A unique integer value identifying this host ack.
  * @type { number }
  * @memberof HostackUpdateApi
  */
  id: number,
  /**
  *
  * @type { HostAckJustification }
  * @memberof HostackUpdateApi
  */
  hostAckJustification?: HostAckJustification,
  options?: AxiosRequestConfig
}

export type HostackUpdateReturnType = AxiosPromise<HostAckJustification>;

const isHostackUpdateObjectParams = (params: [HostackUpdateParams] | unknown[]): params is [HostackUpdateParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'id')
  }
  return false
}
/**
* Update the justification for this host acknowledgement.  The justification is taken from the request body.  The created_by field is taken from the username in the x-rh-identity field, and the updated_at field is set to the current time.
* @param {HostackUpdateParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const hostackUpdateParamCreator = async (...config: ([HostackUpdateParams] | [number, HostAckJustification, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isHostackUpdateObjectParams(config) ? config[0] : ['id', 'hostAckJustification', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as HostackUpdateParams;
    const { id, hostAckJustification, options = {} } = params;
    const localVarPath = `/api/insights/v1/hostack/{id}/`
        .replace(`{${"id"}}`, encodeURIComponent(String(id)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'PUT' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    localVarHeaderParameter['Content-Type'] = 'application/json';

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        serializeData: hostAckJustification,
        auth:[
        {
        // authentication x-rh-identity required
        // in header with key required
        authType: AuthTypeEnum.InHeader,
        authKey: "x-rh-identity"
        }
        ]
    };
}

export default hostackUpdateParamCreator;
