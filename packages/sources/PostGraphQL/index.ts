// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { GraphQLRequest, GraphQLResponse } from '../types';


export type PostGraphQLParams = {
  /**
  * GraphQL Query Request
  * @type { GraphQLRequest }
  * @memberof PostGraphQLApi
  */
  graphQLRequest: GraphQLRequest,
  options?: AxiosRequestConfig
}

export type PostGraphQLReturnType = GraphQLResponse;

const isPostGraphQLObjectParams = (params: [PostGraphQLParams] | unknown[]): params is [PostGraphQLParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'graphQLRequest')
  }
  return false
}
/**
* Performs a GraphQL Query
* @summary Perform a GraphQL Query
* @param {PostGraphQLParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const postGraphQLParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([PostGraphQLParams] | [GraphQLRequest, AxiosRequestConfig])) => {
    const params = isPostGraphQLObjectParams(config) ? config[0] : ['graphQLRequest', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as PostGraphQLParams;
    const { graphQLRequest, options = {} } = params;
    const localVarPath = `/graphql`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'POST' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    localVarHeaderParameter['Content-Type'] = 'application/json';

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        serializeData: graphQLRequest,
        auth:[
        {
        // authentication UserSecurity required
        // http basic authentication required
        authType: AuthTypeEnum.Basic,
        }
        ]
    };

    return sendRequest<PostGraphQLReturnType>(Promise.resolve(args));
}

export default postGraphQLParamCreator;
