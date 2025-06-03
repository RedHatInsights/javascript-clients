// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { RequestError } from '../types';


export type BulkGetRemediationPlaybookParams = {
  /**
  * Remediation identifier
  * @type { string }
  * @memberof BulkGetRemediationPlaybookApi
  */
  id: string,
  /**
  * Array of system inventory identifiers.
  * @type { Array<string> }
  * @memberof BulkGetRemediationPlaybookApi
  */
  requestBody: Array<string>,
  /**
  * Organization ID passed by satellite
  * @type { string }
  * @memberof BulkGetRemediationPlaybookApi
  */
  satOrg?: string,
  /**
  * Flag for localhost playbook generation
  * @type { boolean }
  * @memberof BulkGetRemediationPlaybookApi
  */
  localhost?: boolean,
  options?: AxiosRequestConfig
}

export type BulkGetRemediationPlaybookReturnType = AxiosPromise<string>;

const isBulkGetRemediationPlaybookObjectParams = (params: [BulkGetRemediationPlaybookParams] | unknown[]): params is [BulkGetRemediationPlaybookParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params[0], 'id') && Object.prototype.hasOwnProperty.call(params[0], 'requestBody') && true && true
}
/**
* Fetch Ansible Playbook - for use with large list of target systems, RBAC permission {remediations:remediation:read}
* @summary Fetch Remediation Plan Playbook
* @param {BulkGetRemediationPlaybookParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const bulkGetRemediationPlaybookParamCreator = async (...config: ([BulkGetRemediationPlaybookParams] | [string, Array<string>, string, boolean, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isBulkGetRemediationPlaybookObjectParams(config) ? config[0] : ['id', 'requestBody', 'satOrg', 'localhost', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as BulkGetRemediationPlaybookParams;
    const { id, requestBody, satOrg, localhost, options = {} } = params;
    const localVarPath = `/remediations/{id}/playbook`
        .replace(`{${"id"}}`, encodeURIComponent(String(id)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'POST' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (satOrg !== undefined) {
        localVarQueryParameter['sat_org'] = satOrg;
    }

    if (localhost !== undefined) {
        localVarQueryParameter['localhost'] = localhost;
    }



    localVarHeaderParameter['Content-Type'] = 'application/json';

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        serializeData: requestBody,
    };
}

export default bulkGetRemediationPlaybookParamCreator;
