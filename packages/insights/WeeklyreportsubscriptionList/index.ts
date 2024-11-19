// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { WeeklyReportSubscription } from '../types';


export type WeeklyreportsubscriptionListParams = {
  options?: AxiosRequestConfig
}

export type WeeklyreportsubscriptionListReturnType = AxiosPromise<Array<WeeklyReportSubscription>>;

const isWeeklyreportsubscriptionListObjectParams = (params: [WeeklyreportsubscriptionListParams] | unknown[]): params is [WeeklyreportsubscriptionListParams] => {
  return params.length === 1
}
/**
* Show the user\'s current subscription status.  This shows the presence of a weekly report subscription by the user in this account.
* @param {WeeklyreportsubscriptionListParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const weeklyreportsubscriptionListParamCreator = async (...config: ([WeeklyreportsubscriptionListParams] | [AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isWeeklyreportsubscriptionListObjectParams(config) ? config[0] : ['options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as WeeklyreportsubscriptionListParams;
    const { options = {} } = params;
    const localVarPath = `/api/insights/v1/weeklyreportsubscription/`;
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

export default weeklyreportsubscriptionListParamCreator;
