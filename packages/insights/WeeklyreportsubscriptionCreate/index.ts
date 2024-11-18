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


export type WeeklyreportsubscriptionCreateParams = {
  /**
  *
  * @type { WeeklyReportSubscription }
  * @memberof WeeklyreportsubscriptionCreateApi
  */
  weeklyReportSubscription: WeeklyReportSubscription,
  options?: AxiosRequestConfig
}

export type WeeklyreportsubscriptionCreateReturnType = AxiosPromise<WeeklyReportSubscription>;

const isWeeklyreportsubscriptionCreateObjectParams = (params: [WeeklyreportsubscriptionCreateParams] | unknown[]): params is [WeeklyreportsubscriptionCreateParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'weeklyReportSubscription')
}
/**
* Set the subscription status of the current user to the supplied `is_subscribed` value.  If \'is_subscribed\' is true, a subscription is added if it doesn\'t already exist.  If it is false, the subscription is removed if it exists.
* @param {WeeklyreportsubscriptionCreateParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const weeklyreportsubscriptionCreateParamCreator = async (...config: ([WeeklyreportsubscriptionCreateParams] | [WeeklyReportSubscription, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isWeeklyreportsubscriptionCreateObjectParams(config) ? config[0] : ['weeklyReportSubscription', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as WeeklyreportsubscriptionCreateParams;
    const { weeklyReportSubscription, options = {} } = params;
    const localVarPath = `/api/insights/v1/weeklyreportsubscription/`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'POST' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    localVarHeaderParameter['Content-Type'] = 'application/json';

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        serializeData: weeklyReportSubscription,
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

export default weeklyreportsubscriptionCreateParamCreator;
