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


export type EventResourceV1GetEventsParams = {
  /**
  *
  * @type { any }
  * @memberof EventResourceV1GetEventsApi
  */
  appIds?: any,
  /**
  *
  * @type { any }
  * @memberof EventResourceV1GetEventsApi
  */
  bundleIds?: any,
  /**
  *
  * @type { any }
  * @memberof EventResourceV1GetEventsApi
  */
  endDate?: any,
  /**
  *
  * @type { any }
  * @memberof EventResourceV1GetEventsApi
  */
  endpointTypes?: any,
  /**
  *
  * @type { any }
  * @memberof EventResourceV1GetEventsApi
  */
  eventTypeDisplayName?: any,
  /**
  *
  * @type { any }
  * @memberof EventResourceV1GetEventsApi
  */
  includeActions?: any,
  /**
  *
  * @type { any }
  * @memberof EventResourceV1GetEventsApi
  */
  includeDetails?: any,
  /**
  *
  * @type { any }
  * @memberof EventResourceV1GetEventsApi
  */
  includePayload?: any,
  /**
  *
  * @type { any }
  * @memberof EventResourceV1GetEventsApi
  */
  invocationResults?: any,
  /**
  * Number of items per page, if not specified 20 is used.
  * @type { any }
  * @memberof EventResourceV1GetEventsApi
  */
  limit?: any,
  /**
  *
  * @type { any }
  * @memberof EventResourceV1GetEventsApi
  */
  offset?: any,
  /**
  *
  * @type { any }
  * @memberof EventResourceV1GetEventsApi
  */
  pageNumber?: any,
  /**
  *
  * @type { any }
  * @memberof EventResourceV1GetEventsApi
  */
  sortBy?: any,
  /**
  *
  * @type { any }
  * @memberof EventResourceV1GetEventsApi
  */
  sortBy2?: any,
  /**
  *
  * @type { any }
  * @memberof EventResourceV1GetEventsApi
  */
  startDate?: any,
  /**
  *
  * @type { any }
  * @memberof EventResourceV1GetEventsApi
  */
  status?: any,
  options?: AxiosRequestConfig
}

export type EventResourceV1GetEventsReturnType = PageEventLogEntry;

const isEventResourceV1GetEventsObjectParams = (params: [EventResourceV1GetEventsParams] | unknown[]): params is [EventResourceV1GetEventsParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true
  }
  return false
}
/**
* Retrieves the event log entries. Use this endpoint to review a full history of the events related to the tenant. You can sort by the bundle, application, event, and created fields. You can specify the sort order by appending :asc or :desc to the field, for example bundle:desc. Sorting defaults to desc for the created field and to asc for all other fields.
* @summary Retrieve the event log entries
* @param {EventResourceV1GetEventsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const eventResourceV1GetEventsParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([EventResourceV1GetEventsParams] | [any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, AxiosRequestConfig])) => {
    const params = isEventResourceV1GetEventsObjectParams(config) ? config[0] : ['appIds', 'bundleIds', 'endDate', 'endpointTypes', 'eventTypeDisplayName', 'includeActions', 'includeDetails', 'includePayload', 'invocationResults', 'limit', 'offset', 'pageNumber', 'sortBy', 'sortBy2', 'startDate', 'status', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as EventResourceV1GetEventsParams;
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

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };

    return sendRequest<EventResourceV1GetEventsReturnType>(Promise.resolve(args));
}

export default eventResourceV1GetEventsParamCreator;
