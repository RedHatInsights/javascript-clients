// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { OrgId } from '../types';


export type AccountHostsRetrieveParams = {
  /**
  *
  * @type { string }
  * @memberof AccountHostsRetrieveApi
  */
  orgId: string,
  options?: AxiosRequestConfig
}

export type AccountHostsRetrieveReturnType = AxiosPromise<OrgId>;

const isAccountHostsRetrieveObjectParams = (params: [AccountHostsRetrieveParams] | unknown[]): params is [AccountHostsRetrieveParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'orgId')
}
/**
* List details about the number of hosts in this account by org_id.  As well as the total number of hosts, we report on the number of hosts in various states of staleness:   * fresh: hosts that have updated in the last 26 hours   * stale: hosts not updated in the last 26 hours - we display the     results for these hosts but a warning is shown to say they are     not updating   * warn: hosts not updated in the last week - these are not shown     in any queries  This may have other aggregate data added in the future.
* @param {AccountHostsRetrieveParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const accountHostsRetrieveParamCreator = async (...config: ([AccountHostsRetrieveParams] | [string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isAccountHostsRetrieveObjectParams(config) ? config[0] : ['orgId', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as AccountHostsRetrieveParams;
    const { orgId, options = {} } = params;
    const localVarPath = `/api/insights/v1/account/{org_id}/hosts/`
        .replace(`{${"org_id"}}`, encodeURIComponent(String(orgId)));
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
        // authentication x-rh-identity required
        // in header with key required
        authType: AuthTypeEnum.InHeader,
        authKey: "x-rh-identity"
        }
        ]
    };
}

export default accountHostsRetrieveParamCreator;
