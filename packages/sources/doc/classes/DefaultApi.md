[@redhat-cloud-services/sources-client](../README.md) / [Exports](../modules.md) / DefaultApi

# Class: DefaultApi

DefaultApi - object-oriented interface

**`Export`**

## Hierarchy

- `BaseAPI`

  ↳ **`DefaultApi`**

## Table of contents

### Constructors

- [constructor](DefaultApi.md#constructor)

### Properties

- [axios](DefaultApi.md#axios)
- [basePath](DefaultApi.md#basepath)
- [configuration](DefaultApi.md#configuration)

### Methods

- [checkAvailabilitySource](DefaultApi.md#checkavailabilitysource)
- [createApplication](DefaultApi.md#createapplication)
- [createAuthentication](DefaultApi.md#createauthentication)
- [createEndpoint](DefaultApi.md#createendpoint)
- [createSource](DefaultApi.md#createsource)
- [deleteApplication](DefaultApi.md#deleteapplication)
- [deleteAuthentication](DefaultApi.md#deleteauthentication)
- [deleteEndpoint](DefaultApi.md#deleteendpoint)
- [deleteSource](DefaultApi.md#deletesource)
- [getDocumentation](DefaultApi.md#getdocumentation)
- [listApplicationTypeSources](DefaultApi.md#listapplicationtypesources)
- [listApplicationTypes](DefaultApi.md#listapplicationtypes)
- [listApplications](DefaultApi.md#listapplications)
- [listAuthentications](DefaultApi.md#listauthentications)
- [listEndpointAuthentications](DefaultApi.md#listendpointauthentications)
- [listEndpoints](DefaultApi.md#listendpoints)
- [listSourceApplicationTypes](DefaultApi.md#listsourceapplicationtypes)
- [listSourceApplications](DefaultApi.md#listsourceapplications)
- [listSourceAuthentications](DefaultApi.md#listsourceauthentications)
- [listSourceEndpoints](DefaultApi.md#listsourceendpoints)
- [listSourceTypeSources](DefaultApi.md#listsourcetypesources)
- [listSourceTypes](DefaultApi.md#listsourcetypes)
- [listSources](DefaultApi.md#listsources)
- [postGraphQL](DefaultApi.md#postgraphql)
- [showApplication](DefaultApi.md#showapplication)
- [showApplicationType](DefaultApi.md#showapplicationtype)
- [showAuthentication](DefaultApi.md#showauthentication)
- [showEndpoint](DefaultApi.md#showendpoint)
- [showSource](DefaultApi.md#showsource)
- [showSourceType](DefaultApi.md#showsourcetype)
- [updateApplication](DefaultApi.md#updateapplication)
- [updateAuthentication](DefaultApi.md#updateauthentication)
- [updateEndpoint](DefaultApi.md#updateendpoint)
- [updateSource](DefaultApi.md#updatesource)

## Constructors

### constructor

• **new DefaultApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/base.ts#L51)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

BaseAPI.axios

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/base.ts#L51)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

BaseAPI.basePath

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/base.ts#L51)

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/base.ts#L49)

## Methods

### checkAvailabilitySource

▸ **checkAvailabilitySource**(`id`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

Checks Availability of a Source

**`Summary`**

Checks Availability of a Source

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[api.ts:3435](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3435)

___

### createApplication

▸ **createApplication**(`application`, `options?`): `Promise`<`AxiosResponse`<[`Application`](../interfaces/Application.md), `any`\>\>

Creates a Application object

**`Summary`**

Create a new Application

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `application` | [`Application`](../interfaces/Application.md) | Application attributes to create |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`Application`](../interfaces/Application.md), `any`\>\>

#### Defined in

[api.ts:3447](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3447)

___

### createAuthentication

▸ **createAuthentication**(`authentication`, `options?`): `Promise`<`AxiosResponse`<[`Authentication`](../interfaces/Authentication.md), `any`\>\>

Creates a Authentication object

**`Summary`**

Create a new Authentication

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `authentication` | [`Authentication`](../interfaces/Authentication.md) | Authentication attributes to create |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`Authentication`](../interfaces/Authentication.md), `any`\>\>

#### Defined in

[api.ts:3459](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3459)

___

### createEndpoint

▸ **createEndpoint**(`endpoint`, `options?`): `Promise`<`AxiosResponse`<[`Endpoint`](../interfaces/Endpoint.md), `any`\>\>

Creates a Endpoint object

**`Summary`**

Create a new Endpoint

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `endpoint` | [`Endpoint`](../interfaces/Endpoint.md) | Endpoint attributes to create |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`Endpoint`](../interfaces/Endpoint.md), `any`\>\>

#### Defined in

[api.ts:3471](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3471)

___

### createSource

▸ **createSource**(`source`, `options?`): `Promise`<`AxiosResponse`<[`Source`](../interfaces/Source.md), `any`\>\>

Creates a Source object

**`Summary`**

Create a new Source

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | [`Source`](../interfaces/Source.md) | Source attributes to create |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`Source`](../interfaces/Source.md), `any`\>\>

#### Defined in

[api.ts:3483](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3483)

___

### deleteApplication

▸ **deleteApplication**(`id`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

Deletes a Application object

**`Summary`**

Delete an existing Application

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[api.ts:3495](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3495)

___

### deleteAuthentication

▸ **deleteAuthentication**(`id`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

Deletes a Authentication object

**`Summary`**

Delete an existing Authentication

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[api.ts:3507](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3507)

___

### deleteEndpoint

▸ **deleteEndpoint**(`id`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

Deletes a Endpoint object

**`Summary`**

Delete an existing Endpoint

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[api.ts:3519](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3519)

___

### deleteSource

▸ **deleteSource**(`id`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

Deletes a Source object

**`Summary`**

Delete an existing Source

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[api.ts:3531](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3531)

___

### getDocumentation

▸ **getDocumentation**(`options?`): `Promise`<`AxiosResponse`<`object`, `any`\>\>

**`Summary`**

Return this API document in JSON format

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`object`, `any`\>\>

#### Defined in

[api.ts:3542](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3542)

___

### listApplicationTypeSources

▸ **listApplicationTypeSources**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`SourcesCollection`](../interfaces/SourcesCollection.md), `any`\>\>

Returns an array of Source objects

**`Summary`**

List Sources for ApplicationType

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`SourcesCollection`](../interfaces/SourcesCollection.md), `any`\>\>

#### Defined in

[api.ts:3558](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3558)

___

### listApplicationTypes

▸ **listApplicationTypes**(`limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`ApplicationTypesCollection`](../interfaces/ApplicationTypesCollection.md), `any`\>\>

Returns an array of ApplicationType objects

**`Summary`**

List ApplicationTypes

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ApplicationTypesCollection`](../interfaces/ApplicationTypesCollection.md), `any`\>\>

#### Defined in

[api.ts:3573](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3573)

___

### listApplications

▸ **listApplications**(`limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`ApplicationsCollection`](../interfaces/ApplicationsCollection.md), `any`\>\>

Returns an array of Application objects

**`Summary`**

List Applications

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ApplicationsCollection`](../interfaces/ApplicationsCollection.md), `any`\>\>

#### Defined in

[api.ts:3588](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3588)

___

### listAuthentications

▸ **listAuthentications**(`limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`AuthenticationsCollection`](../interfaces/AuthenticationsCollection.md), `any`\>\>

Returns an array of Authentication objects

**`Summary`**

List Authentications

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`AuthenticationsCollection`](../interfaces/AuthenticationsCollection.md), `any`\>\>

#### Defined in

[api.ts:3603](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3603)

___

### listEndpointAuthentications

▸ **listEndpointAuthentications**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`AuthenticationsCollection`](../interfaces/AuthenticationsCollection.md), `any`\>\>

Returns an array of Authentication objects

**`Summary`**

List Authentications for Endpoint

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`AuthenticationsCollection`](../interfaces/AuthenticationsCollection.md), `any`\>\>

#### Defined in

[api.ts:3619](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3619)

___

### listEndpoints

▸ **listEndpoints**(`limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`EndpointsCollection`](../interfaces/EndpointsCollection.md), `any`\>\>

Returns an array of Endpoint objects

**`Summary`**

List Endpoints

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`EndpointsCollection`](../interfaces/EndpointsCollection.md), `any`\>\>

#### Defined in

[api.ts:3634](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3634)

___

### listSourceApplicationTypes

▸ **listSourceApplicationTypes**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`ApplicationTypesCollection`](../interfaces/ApplicationTypesCollection.md), `any`\>\>

Returns an array of ApplicationType objects

**`Summary`**

List ApplicationTypes for Source

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ApplicationTypesCollection`](../interfaces/ApplicationTypesCollection.md), `any`\>\>

#### Defined in

[api.ts:3650](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3650)

___

### listSourceApplications

▸ **listSourceApplications**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`ApplicationsCollection`](../interfaces/ApplicationsCollection.md), `any`\>\>

Returns an array of Application objects

**`Summary`**

List Applications for Source

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ApplicationsCollection`](../interfaces/ApplicationsCollection.md), `any`\>\>

#### Defined in

[api.ts:3666](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3666)

___

### listSourceAuthentications

▸ **listSourceAuthentications**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`AuthenticationsCollection`](../interfaces/AuthenticationsCollection.md), `any`\>\>

Returns an array of Authentication objects

**`Summary`**

List Authentications for Source

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`AuthenticationsCollection`](../interfaces/AuthenticationsCollection.md), `any`\>\>

#### Defined in

[api.ts:3682](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3682)

___

### listSourceEndpoints

▸ **listSourceEndpoints**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`EndpointsCollection`](../interfaces/EndpointsCollection.md), `any`\>\>

Returns an array of Endpoint objects

**`Summary`**

List Endpoints for Source

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`EndpointsCollection`](../interfaces/EndpointsCollection.md), `any`\>\>

#### Defined in

[api.ts:3698](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3698)

___

### listSourceTypeSources

▸ **listSourceTypeSources**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`SourcesCollection`](../interfaces/SourcesCollection.md), `any`\>\>

Returns an array of Source objects

**`Summary`**

List Sources for SourceType

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`SourcesCollection`](../interfaces/SourcesCollection.md), `any`\>\>

#### Defined in

[api.ts:3714](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3714)

___

### listSourceTypes

▸ **listSourceTypes**(`limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`SourceTypesCollection`](../interfaces/SourceTypesCollection.md), `any`\>\>

Returns an array of SourceType objects

**`Summary`**

List SourceTypes

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`SourceTypesCollection`](../interfaces/SourceTypesCollection.md), `any`\>\>

#### Defined in

[api.ts:3729](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3729)

___

### listSources

▸ **listSources**(`limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`SourcesCollection`](../interfaces/SourcesCollection.md), `any`\>\>

Returns an array of Source objects

**`Summary`**

List Sources

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`SourcesCollection`](../interfaces/SourcesCollection.md), `any`\>\>

#### Defined in

[api.ts:3744](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3744)

___

### postGraphQL

▸ **postGraphQL**(`graphQLRequest`, `options?`): `Promise`<`AxiosResponse`<[`GraphQLResponse`](../interfaces/GraphQLResponse.md), `any`\>\>

Performs a GraphQL Query

**`Summary`**

Perform a GraphQL Query

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `graphQLRequest` | [`GraphQLRequest`](../interfaces/GraphQLRequest.md) | GraphQL Query Request |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`GraphQLResponse`](../interfaces/GraphQLResponse.md), `any`\>\>

#### Defined in

[api.ts:3756](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3756)

___

### showApplication

▸ **showApplication**(`id`, `options?`): `Promise`<`AxiosResponse`<[`Application`](../interfaces/Application.md), `any`\>\>

Returns a Application object

**`Summary`**

Show an existing Application

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`Application`](../interfaces/Application.md), `any`\>\>

#### Defined in

[api.ts:3768](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3768)

___

### showApplicationType

▸ **showApplicationType**(`id`, `options?`): `Promise`<`AxiosResponse`<[`ApplicationType`](../interfaces/ApplicationType.md), `any`\>\>

Returns a ApplicationType object

**`Summary`**

Show an existing ApplicationType

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ApplicationType`](../interfaces/ApplicationType.md), `any`\>\>

#### Defined in

[api.ts:3780](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3780)

___

### showAuthentication

▸ **showAuthentication**(`id`, `options?`): `Promise`<`AxiosResponse`<[`Authentication`](../interfaces/Authentication.md), `any`\>\>

Returns a Authentication object

**`Summary`**

Show an existing Authentication

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`Authentication`](../interfaces/Authentication.md), `any`\>\>

#### Defined in

[api.ts:3792](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3792)

___

### showEndpoint

▸ **showEndpoint**(`id`, `options?`): `Promise`<`AxiosResponse`<[`Endpoint`](../interfaces/Endpoint.md), `any`\>\>

Returns a Endpoint object

**`Summary`**

Show an existing Endpoint

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`Endpoint`](../interfaces/Endpoint.md), `any`\>\>

#### Defined in

[api.ts:3804](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3804)

___

### showSource

▸ **showSource**(`id`, `options?`): `Promise`<`AxiosResponse`<[`Source`](../interfaces/Source.md), `any`\>\>

Returns a Source object

**`Summary`**

Show an existing Source

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`Source`](../interfaces/Source.md), `any`\>\>

#### Defined in

[api.ts:3816](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3816)

___

### showSourceType

▸ **showSourceType**(`id`, `options?`): `Promise`<`AxiosResponse`<[`SourceType`](../interfaces/SourceType.md), `any`\>\>

Returns a SourceType object

**`Summary`**

Show an existing SourceType

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`SourceType`](../interfaces/SourceType.md), `any`\>\>

#### Defined in

[api.ts:3828](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3828)

___

### updateApplication

▸ **updateApplication**(`id`, `application`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

Updates a Application object

**`Summary`**

Update an existing Application

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `application` | [`Application`](../interfaces/Application.md) | Application attributes to update |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[api.ts:3841](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3841)

___

### updateAuthentication

▸ **updateAuthentication**(`id`, `authentication`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

Updates a Authentication object

**`Summary`**

Update an existing Authentication

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `authentication` | [`Authentication`](../interfaces/Authentication.md) | Authentication attributes to update |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[api.ts:3854](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3854)

___

### updateEndpoint

▸ **updateEndpoint**(`id`, `endpoint`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

Updates a Endpoint object

**`Summary`**

Update an existing Endpoint

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `endpoint` | [`Endpoint`](../interfaces/Endpoint.md) | Endpoint attributes to update |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[api.ts:3867](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3867)

___

### updateSource

▸ **updateSource**(`id`, `source`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

Updates a Source object

**`Summary`**

Update an existing Source

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `source` | [`Source`](../interfaces/Source.md) | Source attributes to update |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[api.ts:3880](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3880)
