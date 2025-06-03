// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { AutoSubscribe, AutoSubscribeInput } from '../types';


export type WeeklyreportautosubscribeCreateParams = {
  /**
  *
  * @type { AutoSubscribeInput }
  * @memberof WeeklyreportautosubscribeCreateApi
  */
  autoSubscribeInput: AutoSubscribeInput,
  options?: AxiosRequestConfig
}

export type WeeklyreportautosubscribeCreateReturnType = AxiosPromise<AutoSubscribe>;

const isWeeklyreportautosubscribeCreateObjectParams = (params: [WeeklyreportautosubscribeCreateParams] | unknown[]): params is [WeeklyreportautosubscribeCreateParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params[0], 'autoSubscribeInput')
}
/**
* Set the auto-subscription status of the current user to the supplied `is_auto_subscribed` value.  If \'is_auto_subscribed\' is true, an auto-subscription is added if it doesn\'t already exist.  If it is false, the auto-subscription is removed if it exists.  Check if ENABLE_AUTOSUB enviroment variable is set to allow the method.
* @param {WeeklyreportautosubscribeCreateParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const weeklyreportautosubscribeCreateParamCreator = async (...config: ([WeeklyreportautosubscribeCreateParams] | [AutoSubscribeInput, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isWeeklyreportautosubscribeCreateObjectParams(config) ? config[0] : ['autoSubscribeInput', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as WeeklyreportautosubscribeCreateParams;
    const { autoSubscribeInput, options = {} } = params;
    const localVarPath = `/api/insights/v1/weeklyreportautosubscribe/`;
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
        serializeData: autoSubscribeInput,
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

export default weeklyreportautosubscribeCreateParamCreator;
