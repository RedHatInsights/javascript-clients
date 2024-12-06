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


export type EventResourceV2GetEventsParams = {
  /**
  *
  * @type { any }
  * @memberof EventResourceV2GetEventsApi
  */
  appIds?: any,
  /**
  *
  * @type { any }
  * @memberof EventResourceV2GetEventsApi
  */
  bundleIds?: any,
  /**
  *
  * @type { any }
  * @memberof EventResourceV2GetEventsApi
  */
  endDate?: any,
  /**
  *
  * @type { any }
  * @memberof EventResourceV2GetEventsApi
  */
  endpointTypes?: any,
  /**
  *
  * @type { any }
  * @memberof EventResourceV2GetEventsApi
  */
  eventTypeDisplayName?: any,
  /**
  *
  * @type { any }
  * @memberof EventResourceV2GetEventsApi
  */
  includeActions?: any,
  /**
  *
  * @type { any }
  * @memberof EventResourceV2GetEventsApi
  */
  includeDetails?: any,
  /**
  *
  * @type { any }
  * @memberof EventResourceV2GetEventsApi
  */
  includePayload?: any,
  /**
  *
  * @type { any }
  * @memberof EventResourceV2GetEventsApi
  */
  invocationResults?: any,
  /**
  *
  * @type { any }
  * @memberof EventResourceV2GetEventsApi
  */
  limit?: any,
  /**
  *
  * @type { any }
  * @memberof EventResourceV2GetEventsApi
  */
  offset?: any,
  /**
  *
  * @type { any }
  * @memberof EventResourceV2GetEventsApi
  */
  pageNumber?: any,
  /**
  *
  * @type { any }
  * @memberof EventResourceV2GetEventsApi
  */
  sortBy?: any,
  /**
  *
  * @type { any }
  * @memberof EventResourceV2GetEventsApi
  */
  sortBy2?: any,
  /**
  *
  * @type { any }
  * @memberof EventResourceV2GetEventsApi
  */
  startDate?: any,
  /**
  *
  * @type { any }
  * @memberof EventResourceV2GetEventsApi
  */
  status?: any,
  options?: AxiosRequestConfig
}

export type EventResourceV2GetEventsReturnType = AxiosPromise<PageEventLogEntry>;

const isEventResourceV2GetEventsObjectParams = (params: [EventResourceV2GetEventsParams] | unknown[]): params is [EventResourceV2GetEventsParams] => {
  return params.length === 1 && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true
}
/**
* Retrieves the event log entries. Use this endpoint to review a full history of the events related to the tenant. You can sort by the bundle, application, event, and created fields. You can specify the sort order by appending :asc or :desc to the field, for example bundle:desc. Sorting defaults to desc for the created field and to asc for all other fields.
* @summary Retrieve the event log entries
* @param {EventResourceV2GetEventsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const eventResourceV2GetEventsParamCreator = async (...config: ([EventResourceV2GetEventsParams] | [any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isEventResourceV2GetEventsObjectParams(config) ? config[0] : ['appIds', 'bundleIds', 'endDate', 'endpointTypes', 'eventTypeDisplayName', 'includeActions', 'includeDetails', 'includePayload', 'invocationResults', 'limit', 'offset', 'pageNumber', 'sortBy', 'sortBy2', 'startDate', 'status', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as EventResourceV2GetEventsParams;
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

export default eventResourceV2GetEventsParamCreator;
