// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { Ack, AckJustification } from '../types';


export type AckUpdateParams = {
  /**
  *
  * @type { string }
  * @memberof AckUpdateApi
  */
  ruleId: string,
  /**
  *
  * @type { AckJustification }
  * @memberof AckUpdateApi
  */
  ackJustification?: AckJustification,
  options?: AxiosRequestConfig
}

export type AckUpdateReturnType = Ack;

const isAckUpdateObjectParams = (params: [AckUpdateParams] | unknown[]): params is [AckUpdateParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'ruleId')
  }
  return false
}
/**
* Update an acknowledgement for a rule, by rule ID.  A new justification can be supplied.  The username is taken from the authenticated request.  The updated ack is returned.
* @param {AckUpdateParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const ackUpdateParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([AckUpdateParams] | [string, AckJustification, AxiosRequestConfig])) => {
    const params = isAckUpdateObjectParams(config) ? config[0] : ['ruleId', 'ackJustification', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as AckUpdateParams;
    const { ruleId, ackJustification, options = {} } = params;
    const localVarPath = `/api/insights/v1/ack/{rule_id}/`
        .replace(`{${"rule_id"}}`, encodeURIComponent(String(ruleId)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'PUT' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    localVarHeaderParameter['Content-Type'] = 'application/json';

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        serializeData: ackJustification,
        auth:[
        {
        // authentication x-rh-identity required
        // in header with key required
        authType: AuthTypeEnum.InHeader,
        authKey: "x-rh-identity"
        }
        ]
    };

    return sendRequest<AckUpdateReturnType>(Promise.resolve(args));
}

export default ackUpdateParamCreator;
