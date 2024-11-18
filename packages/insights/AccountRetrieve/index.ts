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


export type AccountRetrieveParams = {
  /**
  *
  * @type { string }
  * @memberof AccountRetrieveApi
  */
  orgId: string,
  options?: AxiosRequestConfig
}

export type AccountRetrieveReturnType = AxiosPromise<OrgId>;

const isAccountRetrieveObjectParams = (params: [AccountRetrieveParams] | unknown[]): params is [AccountRetrieveParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'orgId')
}
/**
* List information relating to other accounts.  This allows us to collect data that requires the user to specify an org_id number, such as number of systems currently registered to that org.  param: org_id: Org ID number of a Red Hat customer.
* @param {AccountRetrieveParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const accountRetrieveParamCreator = async (...config: ([AccountRetrieveParams] | [string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isAccountRetrieveObjectParams(config) ? config[0] : ['orgId', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as AccountRetrieveParams;
    const { orgId, options = {} } = params;
    const localVarPath = `/api/insights/v1/account/{org_id}/`
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

export default accountRetrieveParamCreator;
