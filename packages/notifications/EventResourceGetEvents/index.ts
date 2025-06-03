// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { PageEventLogEntry } from '../types';


export type EventResourceGetEventsParams = {
  /**
  *
  * @type { any }
  * @memberof EventResourceGetEventsApi
  */
  appIds?: any,
  /**
  *
  * @type { any }
  * @memberof EventResourceGetEventsApi
  */
  bundleIds?: any,
  /**
  *
  * @type { any }
  * @memberof EventResourceGetEventsApi
  */
  endDate?: any,
  /**
  *
  * @type { any }
  * @memberof EventResourceGetEventsApi
  */
  endpointTypes?: any,
  /**
  *
  * @type { any }
  * @memberof EventResourceGetEventsApi
  */
  eventTypeDisplayName?: any,
  /**
  *
  * @type { any }
  * @memberof EventResourceGetEventsApi
  */
  includeActions?: any,
  /**
  *
  * @type { any }
  * @memberof EventResourceGetEventsApi
  */
  includeDetails?: any,
  /**
  *
  * @type { any }
  * @memberof EventResourceGetEventsApi
  */
  includePayload?: any,
  /**
  *
  * @type { any }
  * @memberof EventResourceGetEventsApi
  */
  invocationResults?: any,
  /**
  *
  * @type { any }
  * @memberof EventResourceGetEventsApi
  */
  limit?: any,
  /**
  *
  * @type { any }
  * @memberof EventResourceGetEventsApi
  */
  offset?: any,
  /**
  *
  * @type { any }
  * @memberof EventResourceGetEventsApi
  */
  pageNumber?: any,
  /**
  *
  * @type { any }
  * @memberof EventResourceGetEventsApi
  */
  sortBy?: any,
  /**
  *
  * @type { any }
  * @memberof EventResourceGetEventsApi
  */
  sortBy2?: any,
  /**
  *
  * @type { any }
  * @memberof EventResourceGetEventsApi
  */
  startDate?: any,
  /**
  *
  * @type { any }
  * @memberof EventResourceGetEventsApi
  */
  status?: any,
  options?: AxiosRequestConfig
}

export type EventResourceGetEventsReturnType = AxiosPromise<PageEventLogEntry>;

const isEventResourceGetEventsObjectParams = (params: [EventResourceGetEventsParams] | unknown[]): params is [EventResourceGetEventsParams] => {
  return params.length === 1 && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true
}
/**
* Retrieves the event log entries. Use this endpoint to review a full history of the events related to the tenant. You can sort by the bundle, application, event, and created fields. You can specify the sort order by appending :asc or :desc to the field, for example bundle:desc. Sorting defaults to desc for the created field and to asc for all other fields.
* @summary Retrieve the event log entries
* @param {EventResourceGetEventsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const eventResourceGetEventsParamCreator = async (...config: ([EventResourceGetEventsParams] | [any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isEventResourceGetEventsObjectParams(config) ? config[0] : ['appIds', 'bundleIds', 'endDate', 'endpointTypes', 'eventTypeDisplayName', 'includeActions', 'includeDetails', 'includePayload', 'invocationResults', 'limit', 'offset', 'pageNumber', 'sortBy', 'sortBy2', 'startDate', 'status', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as EventResourceGetEventsParams;
    const { appIds, bundleIds, endDate, endpointTypes, eventTypeDisplayName, includeActions, includeDetails, includePayload, invocationResults, limit, offset, pageNumber, sortBy, sortBy2, startDate, status, options = {} } = params;
    const localVarPath = `/notifications/events`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (appIds !== undefined) {
        localVarQueryParameter['appIds'] = appIds;
    }

    if (bundleIds !== undefined) {
        localVarQueryParameter['bundleIds'] = bundleIds;
    }

    if (endDate !== undefined) {
        localVarQueryParameter['endDate'] = endDate;
    }

    if (endpointTypes !== undefined) {
        localVarQueryParameter['endpointTypes'] = endpointTypes;
    }

    if (eventTypeDisplayName !== undefined) {
        localVarQueryParameter['eventTypeDisplayName'] = eventTypeDisplayName;
    }

    if (includeActions !== undefined) {
        localVarQueryParameter['includeActions'] = includeActions;
    }

    if (includeDetails !== undefined) {
        localVarQueryParameter['includeDetails'] = includeDetails;
    }

    if (includePayload !== undefined) {
        localVarQueryParameter['includePayload'] = includePayload;
    }

    if (invocationResults !== undefined) {
        localVarQueryParameter['invocationResults'] = invocationResults;
    }

    if (limit !== undefined) {
        localVarQueryParameter['limit'] = limit;
    }

    if (offset !== undefined) {
        localVarQueryParameter['offset'] = offset;
    }

    if (pageNumber !== undefined) {
        localVarQueryParameter['pageNumber'] = pageNumber;
    }

    if (sortBy !== undefined) {
        localVarQueryParameter['sortBy'] = sortBy;
    }

    if (sortBy2 !== undefined) {
        localVarQueryParameter['sort_by'] = sortBy2;
    }

    if (startDate !== undefined) {
        localVarQueryParameter['startDate'] = startDate;
    }

    if (status !== undefined) {
        localVarQueryParameter['status'] = status;
    }



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };
}

export default eventResourceGetEventsParamCreator;
