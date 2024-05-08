[@redhat-cloud-services/sources-client](README.md) / Exports

# @redhat-cloud-services/sources-client

## Table of contents

### Classes

- [Configuration](classes/Configuration.md)
- [DefaultApi](classes/DefaultApi.md)

### Interfaces

- [Application](interfaces/Application.md)
- [ApplicationType](interfaces/ApplicationType.md)
- [ApplicationTypesCollection](interfaces/ApplicationTypesCollection.md)
- [ApplicationsCollection](interfaces/ApplicationsCollection.md)
- [Authentication](interfaces/Authentication.md)
- [AuthenticationExtra](interfaces/AuthenticationExtra.md)
- [AuthenticationExtraAzure](interfaces/AuthenticationExtraAzure.md)
- [AuthenticationsCollection](interfaces/AuthenticationsCollection.md)
- [CollectionLinks](interfaces/CollectionLinks.md)
- [CollectionMetadata](interfaces/CollectionMetadata.md)
- [ConfigurationParameters](interfaces/ConfigurationParameters.md)
- [Endpoint](interfaces/Endpoint.md)
- [EndpointsCollection](interfaces/EndpointsCollection.md)
- [ErrorNotFound](interfaces/ErrorNotFound.md)
- [ErrorNotFoundErrors](interfaces/ErrorNotFoundErrors.md)
- [GraphQLRequest](interfaces/GraphQLRequest.md)
- [GraphQLResponse](interfaces/GraphQLResponse.md)
- [Source](interfaces/Source.md)
- [SourceType](interfaces/SourceType.md)
- [SourceTypesCollection](interfaces/SourceTypesCollection.md)
- [SourcesCollection](interfaces/SourcesCollection.md)
- [Tenant](interfaces/Tenant.md)

### Functions

- [DefaultApiAxiosParamCreator](modules.md#defaultapiaxiosparamcreator)
- [DefaultApiFactory](modules.md#defaultapifactory)
- [DefaultApiFp](modules.md#defaultapifp)

## Functions

### DefaultApiAxiosParamCreator

▸ **DefaultApiAxiosParamCreator**(`configuration?`): `Object`

DefaultApi - axios parameter creator

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type | Description |
| :------ | :------ | :------ |
| `checkAvailabilitySource` | (`id`: `string`, `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `createApplication` | (`application`: [`Application`](interfaces/Application.md), `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `createAuthentication` | (`authentication`: [`Authentication`](interfaces/Authentication.md), `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `createEndpoint` | (`endpoint`: [`Endpoint`](interfaces/Endpoint.md), `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `createSource` | (`source`: [`Source`](interfaces/Source.md), `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `deleteApplication` | (`id`: `string`, `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `deleteAuthentication` | (`id`: `string`, `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `deleteEndpoint` | (`id`: `string`, `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `deleteSource` | (`id`: `string`, `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `getDocumentation` | (`options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `listApplicationTypeSources` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `listApplicationTypes` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `listApplications` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `listAuthentications` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `listEndpointAuthentications` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `listEndpoints` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `listSourceApplicationTypes` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `listSourceApplications` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `listSourceAuthentications` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `listSourceEndpoints` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `listSourceTypeSources` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `listSourceTypes` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `listSources` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `postGraphQL` | (`graphQLRequest`: [`GraphQLRequest`](interfaces/GraphQLRequest.md), `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `showApplication` | (`id`: `string`, `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `showApplicationType` | (`id`: `string`, `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `showAuthentication` | (`id`: `string`, `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `showEndpoint` | (`id`: `string`, `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `showSource` | (`id`: `string`, `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `showSourceType` | (`id`: `string`, `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `updateApplication` | (`id`: `string`, `application`: [`Application`](interfaces/Application.md), `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `updateAuthentication` | (`id`: `string`, `authentication`: [`Authentication`](interfaces/Authentication.md), `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `updateEndpoint` | (`id`: `string`, `endpoint`: [`Endpoint`](interfaces/Endpoint.md), `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `updateSource` | (`id`: `string`, `source`: [`Source`](interfaces/Source.md), `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |

**`Export`**

#### Defined in

[api.ts:786](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/sources/api.ts#L786)

___

### DefaultApiFactory

▸ **DefaultApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

DefaultApi - factory interface

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |
| `basePath?` | `string` |
| `axios?` | `AxiosInstance` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `checkAvailabilitySource` | (`id`: `string`, `options?`: `any`) => `AxiosPromise`\<`void`\> |
| `createApplication` | (`application`: [`Application`](interfaces/Application.md), `options?`: `any`) => `AxiosPromise`\<[`Application`](interfaces/Application.md)\> |
| `createAuthentication` | (`authentication`: [`Authentication`](interfaces/Authentication.md), `options?`: `any`) => `AxiosPromise`\<[`Authentication`](interfaces/Authentication.md)\> |
| `createEndpoint` | (`endpoint`: [`Endpoint`](interfaces/Endpoint.md), `options?`: `any`) => `AxiosPromise`\<[`Endpoint`](interfaces/Endpoint.md)\> |
| `createSource` | (`source`: [`Source`](interfaces/Source.md), `options?`: `any`) => `AxiosPromise`\<[`Source`](interfaces/Source.md)\> |
| `deleteApplication` | (`id`: `string`, `options?`: `any`) => `AxiosPromise`\<`void`\> |
| `deleteAuthentication` | (`id`: `string`, `options?`: `any`) => `AxiosPromise`\<`void`\> |
| `deleteEndpoint` | (`id`: `string`, `options?`: `any`) => `AxiosPromise`\<`void`\> |
| `deleteSource` | (`id`: `string`, `options?`: `any`) => `AxiosPromise`\<`void`\> |
| `getDocumentation` | (`options?`: `any`) => `AxiosPromise`\<`object`\> |
| `listApplicationTypeSources` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`\<[`SourcesCollection`](interfaces/SourcesCollection.md)\> |
| `listApplicationTypes` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`\<[`ApplicationTypesCollection`](interfaces/ApplicationTypesCollection.md)\> |
| `listApplications` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`\<[`ApplicationsCollection`](interfaces/ApplicationsCollection.md)\> |
| `listAuthentications` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`\<[`AuthenticationsCollection`](interfaces/AuthenticationsCollection.md)\> |
| `listEndpointAuthentications` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`\<[`AuthenticationsCollection`](interfaces/AuthenticationsCollection.md)\> |
| `listEndpoints` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`\<[`EndpointsCollection`](interfaces/EndpointsCollection.md)\> |
| `listSourceApplicationTypes` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`\<[`ApplicationTypesCollection`](interfaces/ApplicationTypesCollection.md)\> |
| `listSourceApplications` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`\<[`ApplicationsCollection`](interfaces/ApplicationsCollection.md)\> |
| `listSourceAuthentications` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`\<[`AuthenticationsCollection`](interfaces/AuthenticationsCollection.md)\> |
| `listSourceEndpoints` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`\<[`EndpointsCollection`](interfaces/EndpointsCollection.md)\> |
| `listSourceTypeSources` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`\<[`SourcesCollection`](interfaces/SourcesCollection.md)\> |
| `listSourceTypes` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`\<[`SourceTypesCollection`](interfaces/SourceTypesCollection.md)\> |
| `listSources` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`\<[`SourcesCollection`](interfaces/SourcesCollection.md)\> |
| `postGraphQL` | (`graphQLRequest`: [`GraphQLRequest`](interfaces/GraphQLRequest.md), `options?`: `any`) => `AxiosPromise`\<[`GraphQLResponse`](interfaces/GraphQLResponse.md)\> |
| `showApplication` | (`id`: `string`, `options?`: `any`) => `AxiosPromise`\<[`Application`](interfaces/Application.md)\> |
| `showApplicationType` | (`id`: `string`, `options?`: `any`) => `AxiosPromise`\<[`ApplicationType`](interfaces/ApplicationType.md)\> |
| `showAuthentication` | (`id`: `string`, `options?`: `any`) => `AxiosPromise`\<[`Authentication`](interfaces/Authentication.md)\> |
| `showEndpoint` | (`id`: `string`, `options?`: `any`) => `AxiosPromise`\<[`Endpoint`](interfaces/Endpoint.md)\> |
| `showSource` | (`id`: `string`, `options?`: `any`) => `AxiosPromise`\<[`Source`](interfaces/Source.md)\> |
| `showSourceType` | (`id`: `string`, `options?`: `any`) => `AxiosPromise`\<[`SourceType`](interfaces/SourceType.md)\> |
| `updateApplication` | (`id`: `string`, `application`: [`Application`](interfaces/Application.md), `options?`: `any`) => `AxiosPromise`\<`void`\> |
| `updateAuthentication` | (`id`: `string`, `authentication`: [`Authentication`](interfaces/Authentication.md), `options?`: `any`) => `AxiosPromise`\<`void`\> |
| `updateEndpoint` | (`id`: `string`, `endpoint`: [`Endpoint`](interfaces/Endpoint.md), `options?`: `any`) => `AxiosPromise`\<`void`\> |
| `updateSource` | (`id`: `string`, `source`: [`Source`](interfaces/Source.md), `options?`: `any`) => `AxiosPromise`\<`void`\> |

**`Export`**

#### Defined in

[api.ts:3026](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/sources/api.ts#L3026)

___

### DefaultApiFp

▸ **DefaultApiFp**(`configuration?`): `Object`

DefaultApi - functional programming interface

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `checkAvailabilitySource` | (`id`: `string`, `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<`void`\>\> |
| `createApplication` | (`application`: [`Application`](interfaces/Application.md), `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`Application`](interfaces/Application.md)\>\> |
| `createAuthentication` | (`authentication`: [`Authentication`](interfaces/Authentication.md), `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`Authentication`](interfaces/Authentication.md)\>\> |
| `createEndpoint` | (`endpoint`: [`Endpoint`](interfaces/Endpoint.md), `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`Endpoint`](interfaces/Endpoint.md)\>\> |
| `createSource` | (`source`: [`Source`](interfaces/Source.md), `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`Source`](interfaces/Source.md)\>\> |
| `deleteApplication` | (`id`: `string`, `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<`void`\>\> |
| `deleteAuthentication` | (`id`: `string`, `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<`void`\>\> |
| `deleteEndpoint` | (`id`: `string`, `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<`void`\>\> |
| `deleteSource` | (`id`: `string`, `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<`void`\>\> |
| `getDocumentation` | (`options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<`object`\>\> |
| `listApplicationTypeSources` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`SourcesCollection`](interfaces/SourcesCollection.md)\>\> |
| `listApplicationTypes` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`ApplicationTypesCollection`](interfaces/ApplicationTypesCollection.md)\>\> |
| `listApplications` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`ApplicationsCollection`](interfaces/ApplicationsCollection.md)\>\> |
| `listAuthentications` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`AuthenticationsCollection`](interfaces/AuthenticationsCollection.md)\>\> |
| `listEndpointAuthentications` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`AuthenticationsCollection`](interfaces/AuthenticationsCollection.md)\>\> |
| `listEndpoints` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`EndpointsCollection`](interfaces/EndpointsCollection.md)\>\> |
| `listSourceApplicationTypes` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`ApplicationTypesCollection`](interfaces/ApplicationTypesCollection.md)\>\> |
| `listSourceApplications` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`ApplicationsCollection`](interfaces/ApplicationsCollection.md)\>\> |
| `listSourceAuthentications` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`AuthenticationsCollection`](interfaces/AuthenticationsCollection.md)\>\> |
| `listSourceEndpoints` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`EndpointsCollection`](interfaces/EndpointsCollection.md)\>\> |
| `listSourceTypeSources` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`SourcesCollection`](interfaces/SourcesCollection.md)\>\> |
| `listSourceTypes` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`SourceTypesCollection`](interfaces/SourceTypesCollection.md)\>\> |
| `listSources` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`SourcesCollection`](interfaces/SourcesCollection.md)\>\> |
| `postGraphQL` | (`graphQLRequest`: [`GraphQLRequest`](interfaces/GraphQLRequest.md), `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`GraphQLResponse`](interfaces/GraphQLResponse.md)\>\> |
| `showApplication` | (`id`: `string`, `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`Application`](interfaces/Application.md)\>\> |
| `showApplicationType` | (`id`: `string`, `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`ApplicationType`](interfaces/ApplicationType.md)\>\> |
| `showAuthentication` | (`id`: `string`, `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`Authentication`](interfaces/Authentication.md)\>\> |
| `showEndpoint` | (`id`: `string`, `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`Endpoint`](interfaces/Endpoint.md)\>\> |
| `showSource` | (`id`: `string`, `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`Source`](interfaces/Source.md)\>\> |
| `showSourceType` | (`id`: `string`, `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`SourceType`](interfaces/SourceType.md)\>\> |
| `updateApplication` | (`id`: `string`, `application`: [`Application`](interfaces/Application.md), `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<`void`\>\> |
| `updateAuthentication` | (`id`: `string`, `authentication`: [`Authentication`](interfaces/Authentication.md), `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<`void`\>\> |
| `updateEndpoint` | (`id`: `string`, `endpoint`: [`Endpoint`](interfaces/Endpoint.md), `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<`void`\>\> |
| `updateSource` | (`id`: `string`, `source`: [`Source`](interfaces/Source.md), `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<`void`\>\> |

**`Export`**

#### Defined in

[api.ts:2492](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/sources/api.ts#L2492)
