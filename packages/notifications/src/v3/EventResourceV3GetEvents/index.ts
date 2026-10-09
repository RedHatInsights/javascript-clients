import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/common';
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/configuration';

import type {  } from '../types';


export type EventResourceV3GetEventsParams = {
  /**
  * Number of items per page, if not specified 20 is used.
  * @type { any }
  * @memberof EventResourceV3GetEventsApi
  */
  limit?: any,
  /**
  * Start of the date range filter. Accepts date-time (yyyy-MM-dd\'T\'HH:mm:ss).
  * @type { any }
  * @memberof EventResourceV3GetEventsApi
  */
  startDateTime?: any,
  /**
  * End of the date range filter. Accepts date-time (yyyy-MM-dd\'T\'HH:mm:ss).
  * @type { any }
  * @memberof EventResourceV3GetEventsApi
  */
  endDateTime?: any,
  /**
  * Set of application IDs to filter by
  * @type { any }
  * @memberof EventResourceV3GetEventsApi
  */
  appIds?: any,
  /**
  * Set of bundle IDs to filter by
  * @type { any }
  * @memberof EventResourceV3GetEventsApi
  */
  bundleIds?: any,
  /**
  * Set of endpoint types to filter by
  * @type { any }
  * @memberof EventResourceV3GetEventsApi
  */
  endpointTypes?: any,
  /**
  * Filter by event type display name (partial match)
  * @type { any }
  * @memberof EventResourceV3GetEventsApi
  */
  eventTypeDisplayName?: any,
  /**
  * Include actions in the response
  * @type { any }
  * @memberof EventResourceV3GetEventsApi
  */
  includeActions?: any,
  /**
  * Include action details in the response
  * @type { any }
  * @memberof EventResourceV3GetEventsApi
  */
  includeDetails?: any,
  /**
  * Include the event payload in the response
  * @type { any }
  * @memberof EventResourceV3GetEventsApi
  */
  includePayload?: any,
  /**
  * Filter by invocation results
  * @type { any }
  * @memberof EventResourceV3GetEventsApi
  */
  invocationResults?: any,
  /**
  *
  * @type { any }
  * @memberof EventResourceV3GetEventsApi
  */
  offset?: any,
  /**
  *
  * @type { any }
  * @memberof EventResourceV3GetEventsApi
  */
  pageNumber?: any,
  /**
  * Filter by event severities
  * @type { any }
  * @memberof EventResourceV3GetEventsApi
  */
  severities?: any,
  /**
  *
  * @type { any }
  * @memberof EventResourceV3GetEventsApi
  */
  sortBy?: any,
  /**
  *
  * @type { any }
  * @memberof EventResourceV3GetEventsApi
  */
  sortBy2?: any,
  /**
  * Filter by action status
  * @type { any }
  * @memberof EventResourceV3GetEventsApi
  */
  status?: any,
  options?: AxiosRequestConfig
}

export type EventResourceV3GetEventsReturnType = void;

const isEventResourceV3GetEventsObjectParams = (params: [EventResourceV3GetEventsParams] | unknown[]): params is [EventResourceV3GetEventsParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true
  }
  return false
}
/**
* Retrieves the event log entries. Use this endpoint to review a full history of the events related to the tenant. You can sort by the bundle, application, event, and created fields. You can specify the sort order by appending :asc or :desc to the field, for example bundle:desc. Sorting defaults to desc for the created field and to asc for all other fields.
* @summary Retrieve the event log entries
* @param {EventResourceV3GetEventsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const eventResourceV3GetEventsParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([EventResourceV3GetEventsParams] | [any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, AxiosRequestConfig])) => {
    const params = isEventResourceV3GetEventsObjectParams(config) ? config[0] : ['limit', 'startDateTime', 'endDateTime', 'appIds', 'bundleIds', 'endpointTypes', 'eventTypeDisplayName', 'includeActions', 'includeDetails', 'includePayload', 'invocationResults', 'offset', 'pageNumber', 'severities', 'sortBy', 'sortBy2', 'status', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as EventResourceV3GetEventsParams;
    const { limit, startDateTime, endDateTime, appIds, bundleIds, endpointTypes, eventTypeDisplayName, includeActions, includeDetails, includePayload, invocationResults, offset, pageNumber, severities, sortBy, sortBy2, status, options = {} } = params;
    const localVarPath = `/notifications/events`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (limit !== undefined) {
        localVarQueryParameter['limit'] = limit;
    }

    if (startDateTime !== undefined) {
        localVarQueryParameter['startDateTime'] = startDateTime;
    }

    if (endDateTime !== undefined) {
        localVarQueryParameter['endDateTime'] = endDateTime;
    }

    if (appIds !== undefined) {
        localVarQueryParameter['appIds'] = appIds;
    }

    if (bundleIds !== undefined) {
        localVarQueryParameter['bundleIds'] = bundleIds;
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

    if (offset !== undefined) {
        localVarQueryParameter['offset'] = offset;
    }

    if (pageNumber !== undefined) {
        localVarQueryParameter['pageNumber'] = pageNumber;
    }

    if (severities !== undefined) {
        localVarQueryParameter['severities'] = severities;
    }

    if (sortBy !== undefined) {
        localVarQueryParameter['sortBy'] = sortBy;
    }

    if (sortBy2 !== undefined) {
        localVarQueryParameter['sort_by'] = sortBy2;
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

    return sendRequest<EventResourceV3GetEventsReturnType>(Promise.resolve(args));
}

export default eventResourceV3GetEventsParamCreator;
