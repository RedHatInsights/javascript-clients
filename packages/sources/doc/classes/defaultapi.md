[@redhat-cloud-services/sources-client](../README.md) > [DefaultApi](../classes/defaultapi.md)

# Class: DefaultApi

DefaultApi - object-oriented interface

*__export__*: 

*__class__*: DefaultApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ DefaultApi**

## Index

### Constructors

* [constructor](defaultapi.md#constructor)

### Properties

* [axios](defaultapi.md#axios)
* [basePath](defaultapi.md#basepath)
* [configuration](defaultapi.md#configuration)

### Methods

* [checkAvailabilitySource](defaultapi.md#checkavailabilitysource)
* [createApplication](defaultapi.md#createapplication)
* [createAuthentication](defaultapi.md#createauthentication)
* [createEndpoint](defaultapi.md#createendpoint)
* [createSource](defaultapi.md#createsource)
* [createSourceType](defaultapi.md#createsourcetype)
* [deleteApplication](defaultapi.md#deleteapplication)
* [deleteAuthentication](defaultapi.md#deleteauthentication)
* [deleteEndpoint](defaultapi.md#deleteendpoint)
* [deleteSource](defaultapi.md#deletesource)
* [getDocumentation](defaultapi.md#getdocumentation)
* [listApplicationTypeSources](defaultapi.md#listapplicationtypesources)
* [listApplicationTypes](defaultapi.md#listapplicationtypes)
* [listApplications](defaultapi.md#listapplications)
* [listAuthentications](defaultapi.md#listauthentications)
* [listEndpointAuthentications](defaultapi.md#listendpointauthentications)
* [listEndpoints](defaultapi.md#listendpoints)
* [listSourceApplicationTypes](defaultapi.md#listsourceapplicationtypes)
* [listSourceApplications](defaultapi.md#listsourceapplications)
* [listSourceEndpoints](defaultapi.md#listsourceendpoints)
* [listSourceTypeSources](defaultapi.md#listsourcetypesources)
* [listSourceTypes](defaultapi.md#listsourcetypes)
* [listSources](defaultapi.md#listsources)
* [postGraphQL](defaultapi.md#postgraphql)
* [showApplication](defaultapi.md#showapplication)
* [showApplicationType](defaultapi.md#showapplicationtype)
* [showAuthentication](defaultapi.md#showauthentication)
* [showEndpoint](defaultapi.md#showendpoint)
* [showSource](defaultapi.md#showsource)
* [showSourceType](defaultapi.md#showsourcetype)
* [updateApplication](defaultapi.md#updateapplication)
* [updateAuthentication](defaultapi.md#updateauthentication)
* [updateEndpoint](defaultapi.md#updateendpoint)
* [updateSource](defaultapi.md#updatesource)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new DefaultApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): [DefaultApi](defaultapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L49)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` axios | `AxiosInstance` |  globalAxios |

**Returns:** [DefaultApi](defaultapi.md)

___

## Properties

<a id="axios"></a>

### `<Protected>` axios

**● axios**: *`AxiosInstance`*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#axios)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L51)*

___
<a id="basepath"></a>

### `<Protected>` basePath

**● basePath**: *`string`*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#basepath)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L51)*

___
<a id="configuration"></a>

### `<Protected>` configuration

**● configuration**: *[Configuration](configuration.md) \| `undefined`*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#configuration)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L49)*

___

## Methods

<a id="checkavailabilitysource"></a>

###  checkAvailabilitySource

▸ **checkAvailabilitySource**(id: *`string`*, options?: *`any`*): `AxiosPromise`<`Response`>

*Defined in [api.ts:3385](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3385)*

Checks Availability of a Source

*__summary__*: Checks Availability of a Source

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<`Response`>

___
<a id="createapplication"></a>

###  createApplication

▸ **createApplication**(application: *[Application](../interfaces/application.md)*, options?: *`any`*): `AxiosPromise`<[Application](../interfaces/application.md)>

*Defined in [api.ts:3397](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3397)*

Creates a Application object

*__summary__*: Create a new Application

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| application | [Application](../interfaces/application.md) |  Application attributes to create |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[Application](../interfaces/application.md)>

___
<a id="createauthentication"></a>

###  createAuthentication

▸ **createAuthentication**(authentication: *[Authentication](../interfaces/authentication.md)*, options?: *`any`*): `AxiosPromise`<[Authentication](../interfaces/authentication.md)>

*Defined in [api.ts:3409](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3409)*

Creates a Authentication object

*__summary__*: Create a new Authentication

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| authentication | [Authentication](../interfaces/authentication.md) |  Authentication attributes to create |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[Authentication](../interfaces/authentication.md)>

___
<a id="createendpoint"></a>

###  createEndpoint

▸ **createEndpoint**(endpoint: *[Endpoint](../interfaces/endpoint.md)*, options?: *`any`*): `AxiosPromise`<[Endpoint](../interfaces/endpoint.md)>

*Defined in [api.ts:3421](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3421)*

Creates a Endpoint object

*__summary__*: Create a new Endpoint

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| endpoint | [Endpoint](../interfaces/endpoint.md) |  Endpoint attributes to create |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[Endpoint](../interfaces/endpoint.md)>

___
<a id="createsource"></a>

###  createSource

▸ **createSource**(source: *[Source](../interfaces/source.md)*, options?: *`any`*): `AxiosPromise`<[Source](../interfaces/source.md)>

*Defined in [api.ts:3433](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3433)*

Creates a Source object

*__summary__*: Create a new Source

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| source | [Source](../interfaces/source.md) |  Source attributes to create |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[Source](../interfaces/source.md)>

___
<a id="createsourcetype"></a>

###  createSourceType

▸ **createSourceType**(sourceType: *[SourceType](../interfaces/sourcetype.md)*, options?: *`any`*): `AxiosPromise`<[SourceType](../interfaces/sourcetype.md)>

*Defined in [api.ts:3445](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3445)*

Creates a SourceType object

*__summary__*: Create a new SourceType

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| sourceType | [SourceType](../interfaces/sourcetype.md) |  SourceType attributes to create |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[SourceType](../interfaces/sourcetype.md)>

___
<a id="deleteapplication"></a>

###  deleteApplication

▸ **deleteApplication**(id: *`string`*, options?: *`any`*): `AxiosPromise`<`Response`>

*Defined in [api.ts:3457](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3457)*

Deletes a Application object

*__summary__*: Delete an existing Application

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<`Response`>

___
<a id="deleteauthentication"></a>

###  deleteAuthentication

▸ **deleteAuthentication**(id: *`string`*, options?: *`any`*): `AxiosPromise`<`Response`>

*Defined in [api.ts:3469](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3469)*

Deletes a Authentication object

*__summary__*: Delete an existing Authentication

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<`Response`>

___
<a id="deleteendpoint"></a>

###  deleteEndpoint

▸ **deleteEndpoint**(id: *`string`*, options?: *`any`*): `AxiosPromise`<`Response`>

*Defined in [api.ts:3481](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3481)*

Deletes a Endpoint object

*__summary__*: Delete an existing Endpoint

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<`Response`>

___
<a id="deletesource"></a>

###  deleteSource

▸ **deleteSource**(id: *`string`*, options?: *`any`*): `AxiosPromise`<`Response`>

*Defined in [api.ts:3493](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3493)*

Deletes a Source object

*__summary__*: Delete an existing Source

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<`Response`>

___
<a id="getdocumentation"></a>

###  getDocumentation

▸ **getDocumentation**(options?: *`any`*): `AxiosPromise`<`any`>

*Defined in [api.ts:3504](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3504)*

*__summary__*: Return this API document in JSON format

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<`any`>

___
<a id="listapplicationtypesources"></a>

###  listApplicationTypeSources

▸ **listApplicationTypeSources**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[SourcesCollection](../interfaces/sourcescollection.md)>

*Defined in [api.ts:3520](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3520)*

Returns an array of Source objects

*__summary__*: List Sources for ApplicationType

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[SourcesCollection](../interfaces/sourcescollection.md)>

___
<a id="listapplicationtypes"></a>

###  listApplicationTypes

▸ **listApplicationTypes**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[ApplicationTypesCollection](../interfaces/applicationtypescollection.md)>

*Defined in [api.ts:3535](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3535)*

Returns an array of ApplicationType objects

*__summary__*: List ApplicationTypes

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ApplicationTypesCollection](../interfaces/applicationtypescollection.md)>

___
<a id="listapplications"></a>

###  listApplications

▸ **listApplications**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[ApplicationsCollection](../interfaces/applicationscollection.md)>

*Defined in [api.ts:3550](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3550)*

Returns an array of Application objects

*__summary__*: List Applications

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ApplicationsCollection](../interfaces/applicationscollection.md)>

___
<a id="listauthentications"></a>

###  listAuthentications

▸ **listAuthentications**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[AuthenticationsCollection](../interfaces/authenticationscollection.md)>

*Defined in [api.ts:3565](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3565)*

Returns an array of Authentication objects

*__summary__*: List Authentications

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[AuthenticationsCollection](../interfaces/authenticationscollection.md)>

___
<a id="listendpointauthentications"></a>

###  listEndpointAuthentications

▸ **listEndpointAuthentications**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[AuthenticationsCollection](../interfaces/authenticationscollection.md)>

*Defined in [api.ts:3581](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3581)*

Returns an array of Authentication objects

*__summary__*: List Authentications for Endpoint

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[AuthenticationsCollection](../interfaces/authenticationscollection.md)>

___
<a id="listendpoints"></a>

###  listEndpoints

▸ **listEndpoints**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[EndpointsCollection](../interfaces/endpointscollection.md)>

*Defined in [api.ts:3596](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3596)*

Returns an array of Endpoint objects

*__summary__*: List Endpoints

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[EndpointsCollection](../interfaces/endpointscollection.md)>

___
<a id="listsourceapplicationtypes"></a>

###  listSourceApplicationTypes

▸ **listSourceApplicationTypes**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[ApplicationTypesCollection](../interfaces/applicationtypescollection.md)>

*Defined in [api.ts:3612](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3612)*

Returns an array of ApplicationType objects

*__summary__*: List ApplicationTypes for Source

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ApplicationTypesCollection](../interfaces/applicationtypescollection.md)>

___
<a id="listsourceapplications"></a>

###  listSourceApplications

▸ **listSourceApplications**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[ApplicationsCollection](../interfaces/applicationscollection.md)>

*Defined in [api.ts:3628](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3628)*

Returns an array of Application objects

*__summary__*: List Applications for Source

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ApplicationsCollection](../interfaces/applicationscollection.md)>

___
<a id="listsourceendpoints"></a>

###  listSourceEndpoints

▸ **listSourceEndpoints**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[EndpointsCollection](../interfaces/endpointscollection.md)>

*Defined in [api.ts:3644](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3644)*

Returns an array of Endpoint objects

*__summary__*: List Endpoints for Source

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[EndpointsCollection](../interfaces/endpointscollection.md)>

___
<a id="listsourcetypesources"></a>

###  listSourceTypeSources

▸ **listSourceTypeSources**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[SourcesCollection](../interfaces/sourcescollection.md)>

*Defined in [api.ts:3660](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3660)*

Returns an array of Source objects

*__summary__*: List Sources for SourceType

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[SourcesCollection](../interfaces/sourcescollection.md)>

___
<a id="listsourcetypes"></a>

###  listSourceTypes

▸ **listSourceTypes**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[SourceTypesCollection](../interfaces/sourcetypescollection.md)>

*Defined in [api.ts:3675](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3675)*

Returns an array of SourceType objects

*__summary__*: List SourceTypes

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[SourceTypesCollection](../interfaces/sourcetypescollection.md)>

___
<a id="listsources"></a>

###  listSources

▸ **listSources**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[SourcesCollection](../interfaces/sourcescollection.md)>

*Defined in [api.ts:3690](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3690)*

Returns an array of Source objects

*__summary__*: List Sources

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[SourcesCollection](../interfaces/sourcescollection.md)>

___
<a id="postgraphql"></a>

###  postGraphQL

▸ **postGraphQL**(graphQLRequest: *[GraphQLRequest](../interfaces/graphqlrequest.md)*, options?: *`any`*): `AxiosPromise`<[GraphQLResponse](../interfaces/graphqlresponse.md)>

*Defined in [api.ts:3702](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3702)*

Performs a GraphQL Query

*__summary__*: Perform a GraphQL Query

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| graphQLRequest | [GraphQLRequest](../interfaces/graphqlrequest.md) |  GraphQL Query Request |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[GraphQLResponse](../interfaces/graphqlresponse.md)>

___
<a id="showapplication"></a>

###  showApplication

▸ **showApplication**(id: *`string`*, options?: *`any`*): `AxiosPromise`<[Application](../interfaces/application.md)>

*Defined in [api.ts:3714](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3714)*

Returns a Application object

*__summary__*: Show an existing Application

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[Application](../interfaces/application.md)>

___
<a id="showapplicationtype"></a>

###  showApplicationType

▸ **showApplicationType**(id: *`string`*, options?: *`any`*): `AxiosPromise`<[ApplicationType](../interfaces/applicationtype.md)>

*Defined in [api.ts:3726](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3726)*

Returns a ApplicationType object

*__summary__*: Show an existing ApplicationType

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ApplicationType](../interfaces/applicationtype.md)>

___
<a id="showauthentication"></a>

###  showAuthentication

▸ **showAuthentication**(id: *`string`*, options?: *`any`*): `AxiosPromise`<[Authentication](../interfaces/authentication.md)>

*Defined in [api.ts:3738](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3738)*

Returns a Authentication object

*__summary__*: Show an existing Authentication

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[Authentication](../interfaces/authentication.md)>

___
<a id="showendpoint"></a>

###  showEndpoint

▸ **showEndpoint**(id: *`string`*, options?: *`any`*): `AxiosPromise`<[Endpoint](../interfaces/endpoint.md)>

*Defined in [api.ts:3750](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3750)*

Returns a Endpoint object

*__summary__*: Show an existing Endpoint

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[Endpoint](../interfaces/endpoint.md)>

___
<a id="showsource"></a>

###  showSource

▸ **showSource**(id: *`string`*, options?: *`any`*): `AxiosPromise`<[Source](../interfaces/source.md)>

*Defined in [api.ts:3762](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3762)*

Returns a Source object

*__summary__*: Show an existing Source

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[Source](../interfaces/source.md)>

___
<a id="showsourcetype"></a>

###  showSourceType

▸ **showSourceType**(id: *`string`*, options?: *`any`*): `AxiosPromise`<[SourceType](../interfaces/sourcetype.md)>

*Defined in [api.ts:3774](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3774)*

Returns a SourceType object

*__summary__*: Show an existing SourceType

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[SourceType](../interfaces/sourcetype.md)>

___
<a id="updateapplication"></a>

###  updateApplication

▸ **updateApplication**(id: *`string`*, application: *[Application](../interfaces/application.md)*, options?: *`any`*): `AxiosPromise`<`Response`>

*Defined in [api.ts:3787](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3787)*

Updates a Application object

*__summary__*: Update an existing Application

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| application | [Application](../interfaces/application.md) |  Application attributes to update |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<`Response`>

___
<a id="updateauthentication"></a>

###  updateAuthentication

▸ **updateAuthentication**(id: *`string`*, authentication: *[Authentication](../interfaces/authentication.md)*, options?: *`any`*): `AxiosPromise`<`Response`>

*Defined in [api.ts:3800](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3800)*

Updates a Authentication object

*__summary__*: Update an existing Authentication

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| authentication | [Authentication](../interfaces/authentication.md) |  Authentication attributes to update |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<`Response`>

___
<a id="updateendpoint"></a>

###  updateEndpoint

▸ **updateEndpoint**(id: *`string`*, endpoint: *[Endpoint](../interfaces/endpoint.md)*, options?: *`any`*): `AxiosPromise`<`Response`>

*Defined in [api.ts:3813](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3813)*

Updates a Endpoint object

*__summary__*: Update an existing Endpoint

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| endpoint | [Endpoint](../interfaces/endpoint.md) |  Endpoint attributes to update |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<`Response`>

___
<a id="updatesource"></a>

###  updateSource

▸ **updateSource**(id: *`string`*, source: *[Source](../interfaces/source.md)*, options?: *`any`*): `AxiosPromise`<`Response`>

*Defined in [api.ts:3826](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3826)*

Updates a Source object

*__summary__*: Update an existing Source

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| source | [Source](../interfaces/source.md) |  Source attributes to update |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<`Response`>

___

