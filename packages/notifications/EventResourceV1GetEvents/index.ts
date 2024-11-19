// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { EventLogEntryActionStatus, PageEventLogEntry } from '../types';


export type EventResourceV1GetEventsParams = {
  /**
  *
  * @type { Set<string> }
  * @memberof EventResourceV1GetEventsApi
  */
  appIds?: Set<string>,
  /**
  *
  * @type { Set<string> }
  * @memberof EventResourceV1GetEventsApi
  */
  bundleIds?: Set<string>,
  /**
  *
  * @type { string }
  * @memberof EventResourceV1GetEventsApi
  */
  endDate?: string,
  /**
  *
  * @type { Set<string> }
  * @memberof EventResourceV1GetEventsApi
  */
  endpointTypes?: Set<string>,
  /**
  *
  * @type { string }
  * @memberof EventResourceV1GetEventsApi
  */
  eventTypeDisplayName?: string,
  /**
  *
  * @type { boolean }
  * @memberof EventResourceV1GetEventsApi
  */
  includeActions?: boolean,
  /**
  *
  * @type { boolean }
  * @memberof EventResourceV1GetEventsApi
  */
  includeDetails?: boolean,
  /**
  *
  * @type { boolean }
  * @memberof EventResourceV1GetEventsApi
  */
  includePayload?: boolean,
  /**
  *
  * @type { Set<boolean> }
  * @memberof EventResourceV1GetEventsApi
  */
  invocationResults?: Set<boolean>,
  /**
  *
  * @type { number }
  * @memberof EventResourceV1GetEventsApi
  */
  limit?: number,
  /**
  *
  * @type { number }
  * @memberof EventResourceV1GetEventsApi
  */
  offset?: number,
  /**
  *
  * @type { number }
  * @memberof EventResourceV1GetEventsApi
  */
  pageNumber?: number,
  /**
  *
  * @type { string }
  * @memberof EventResourceV1GetEventsApi
  */
  sortBy?: string,
  /**
  *
  * @type { string }
  * @memberof EventResourceV1GetEventsApi
  */
  sortBy2?: string,
  /**
  *
  * @type { string }
  * @memberof EventResourceV1GetEventsApi
  */
  startDate?: string,
  /**
  *
  * @type { Set<EventLogEntryActionStatus> }
  * @memberof EventResourceV1GetEventsApi
  */
  status?: Set<EventLogEntryActionStatus>,
  options?: AxiosRequestConfig
}

export type EventResourceV1GetEventsReturnType = AxiosPromise<PageEventLogEntry>;

const isEventResourceV1GetEventsObjectParams = (params: [EventResourceV1GetEventsParams] | unknown[]): params is [EventResourceV1GetEventsParams] => {
  return params.length === 1 && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true
}
/**
* Retrieves the event log entries. Use this endpoint to review a full history of the events related to the tenant. You can sort by the bundle, application, event, and created fields. You can specify the sort order by appending :asc or :desc to the field, for example bundle:desc. Sorting defaults to desc for the created field and to asc for all other fields.
* @summary Retrieve the event log entries
* @param {EventResourceV1GetEventsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const eventResourceV1GetEventsParamCreator = async (...config: ([EventResourceV1GetEventsParams] | [Set<string>, Set<string>, string, Set<string>, string, boolean, boolean, boolean, Set<boolean>, number, number, number, string, string, string, Set<EventLogEntryActionStatus>, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isEventResourceV1GetEventsObjectParams(config) ? config[0] : ['appIds', 'bundleIds', 'endDate', 'endpointTypes', 'eventTypeDisplayName', 'includeActions', 'includeDetails', 'includePayload', 'invocationResults', 'limit', 'offset', 'pageNumber', 'sortBy', 'sortBy2', 'startDate', 'status', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as EventResourceV1GetEventsParams;
    const { appIds, bundleIds, endDate, endpointTypes, eventTypeDisplayName, includeActions, includeDetails, includePayload, invocationResults, limit, offset, pageNumber, sortBy, sortBy2, startDate, status, options = {} } = params;
    const localVarPath = `/notifications/events`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (appIds) {
        localVarQueryParameter['appIds'] = Array.from(appIds);
    }

    if (bundleIds) {
        localVarQueryParameter['bundleIds'] = Array.from(bundleIds);
    }

    if (endDate !== undefined) {
        localVarQueryParameter['endDate'] = (endDate as any instanceof Date) ?
            (endDate as any).toISOString().substr(0,10) :
            endDate;
    }

    if (endpointTypes) {
        localVarQueryParameter['endpointTypes'] = Array.from(endpointTypes);
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

    if (invocationResults) {
        localVarQueryParameter['invocationResults'] = Array.from(invocationResults);
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
        localVarQueryParameter['startDate'] = (startDate as any instanceof Date) ?
            (startDate as any).toISOString().substr(0,10) :
            startDate;
    }

    if (status) {
        localVarQueryParameter['status'] = Array.from(status);
    }



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };
}

export default eventResourceV1GetEventsParamCreator;
