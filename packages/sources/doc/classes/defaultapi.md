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
* [listApplicationTypes](defaultapi.md#listapplicationtypes)
* [listApplications](defaultapi.md#listapplications)
* [listAuthentications](defaultapi.md#listauthentications)
* [listEndpointAuthentications](defaultapi.md#listendpointauthentications)
* [listEndpoints](defaultapi.md#listendpoints)
* [listSourceApplications](defaultapi.md#listsourceapplications)
* [listSourceEndpoints](defaultapi.md#listsourceendpoints)
* [listSourceTypeSources](defaultapi.md#listsourcetypesources)
* [listSourceTypes](defaultapi.md#listsourcetypes)
* [listSources](defaultapi.md#listsources)
* [showApplication](defaultapi.md#showapplication)
* [showApplicationType](defaultapi.md#showapplicationtype)
* [showAuthentication](defaultapi.md#showauthentication)
* [showEndpoint](defaultapi.md#showendpoint)
* [showSource](defaultapi.md#showsource)
* [showSourceType](defaultapi.md#showsourcetype)
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

<a id="createapplication"></a>

###  createApplication

▸ **createApplication**(application: *[Application](../interfaces/application.md)*, options?: *`any`*): `AxiosPromise`<[Application](../interfaces/application.md)[]>

*Defined in [api.ts:2754](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L2754)*

Creates a Application object

*__summary__*: Create a new Application

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| application | [Application](../interfaces/application.md) |  Application attributes to create |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[Application](../interfaces/application.md)[]>

___
<a id="createauthentication"></a>

###  createAuthentication

▸ **createAuthentication**(authentication: *[Authentication](../interfaces/authentication.md)*, options?: *`any`*): `AxiosPromise`<[Authentication](../interfaces/authentication.md)[]>

*Defined in [api.ts:2766](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L2766)*

Creates a Authentication object

*__summary__*: Create a new Authentication

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| authentication | [Authentication](../interfaces/authentication.md) |  Authentication attributes to create |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[Authentication](../interfaces/authentication.md)[]>

___
<a id="createendpoint"></a>

###  createEndpoint

▸ **createEndpoint**(endpoint: *[Endpoint](../interfaces/endpoint.md)*, options?: *`any`*): `AxiosPromise`<[Endpoint](../interfaces/endpoint.md)[]>

*Defined in [api.ts:2778](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L2778)*

Creates a Endpoint object

*__summary__*: Create a new Endpoint

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| endpoint | [Endpoint](../interfaces/endpoint.md) |  Endpoint attributes to create |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[Endpoint](../interfaces/endpoint.md)[]>

___
<a id="createsource"></a>

###  createSource

▸ **createSource**(source: *[Source](../interfaces/source.md)*, options?: *`any`*): `AxiosPromise`<[Source](../interfaces/source.md)[]>

*Defined in [api.ts:2790](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L2790)*

Creates a Source object

*__summary__*: Create a new Source

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| source | [Source](../interfaces/source.md) |  Source attributes to create |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[Source](../interfaces/source.md)[]>

___
<a id="createsourcetype"></a>

###  createSourceType

▸ **createSourceType**(sourceType: *[SourceType](../interfaces/sourcetype.md)*, options?: *`any`*): `AxiosPromise`<[SourceType](../interfaces/sourcetype.md)[]>

*Defined in [api.ts:2802](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L2802)*

Creates a SourceType object

*__summary__*: Create a new SourceType

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| sourceType | [SourceType](../interfaces/sourcetype.md) |  SourceType attributes to create |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[SourceType](../interfaces/sourcetype.md)[]>

___
<a id="deleteapplication"></a>

###  deleteApplication

▸ **deleteApplication**(id: *`string`*, options?: *`any`*): `AxiosPromise`<`Response`>

*Defined in [api.ts:2814](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L2814)*

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

*Defined in [api.ts:2826](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L2826)*

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

*Defined in [api.ts:2838](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L2838)*

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

*Defined in [api.ts:2850](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L2850)*

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

▸ **getDocumentation**(options?: *`any`*): `AxiosPromise`<`Response`>

*Defined in [api.ts:2861](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L2861)*

*__summary__*: Return this API document in JSON format

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<`Response`>

___
<a id="listapplicationtypes"></a>

###  listApplicationTypes

▸ **listApplicationTypes**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[ApplicationTypesCollection](../interfaces/applicationtypescollection.md)>

*Defined in [api.ts:2875](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L2875)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ApplicationTypesCollection](../interfaces/applicationtypescollection.md)>

___
<a id="listapplications"></a>

###  listApplications

▸ **listApplications**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[ApplicationsCollection](../interfaces/applicationscollection.md)>

*Defined in [api.ts:2889](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L2889)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ApplicationsCollection](../interfaces/applicationscollection.md)>

___
<a id="listauthentications"></a>

###  listAuthentications

▸ **listAuthentications**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[AuthenticationsCollection](../interfaces/authenticationscollection.md)>

*Defined in [api.ts:2903](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L2903)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[AuthenticationsCollection](../interfaces/authenticationscollection.md)>

___
<a id="listendpointauthentications"></a>

###  listEndpointAuthentications

▸ **listEndpointAuthentications**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[AuthenticationsCollection](../interfaces/authenticationscollection.md)>

*Defined in [api.ts:2918](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L2918)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[AuthenticationsCollection](../interfaces/authenticationscollection.md)>

___
<a id="listendpoints"></a>

###  listEndpoints

▸ **listEndpoints**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[EndpointsCollection](../interfaces/endpointscollection.md)>

*Defined in [api.ts:2932](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L2932)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[EndpointsCollection](../interfaces/endpointscollection.md)>

___
<a id="listsourceapplications"></a>

###  listSourceApplications

▸ **listSourceApplications**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[ApplicationsCollection](../interfaces/applicationscollection.md)>

*Defined in [api.ts:2947](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L2947)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ApplicationsCollection](../interfaces/applicationscollection.md)>

___
<a id="listsourceendpoints"></a>

###  listSourceEndpoints

▸ **listSourceEndpoints**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[EndpointsCollection](../interfaces/endpointscollection.md)>

*Defined in [api.ts:2962](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L2962)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[EndpointsCollection](../interfaces/endpointscollection.md)>

___
<a id="listsourcetypesources"></a>

###  listSourceTypeSources

▸ **listSourceTypeSources**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[SourcesCollection](../interfaces/sourcescollection.md)>

*Defined in [api.ts:2977](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L2977)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[SourcesCollection](../interfaces/sourcescollection.md)>

___
<a id="listsourcetypes"></a>

###  listSourceTypes

▸ **listSourceTypes**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[SourceTypesCollection](../interfaces/sourcetypescollection.md)>

*Defined in [api.ts:2991](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L2991)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[SourceTypesCollection](../interfaces/sourcetypescollection.md)>

___
<a id="listsources"></a>

###  listSources

▸ **listSources**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[SourcesCollection](../interfaces/sourcescollection.md)>

*Defined in [api.ts:3005](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3005)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[SourcesCollection](../interfaces/sourcescollection.md)>

___
<a id="showapplication"></a>

###  showApplication

▸ **showApplication**(id: *`string`*, options?: *`any`*): `AxiosPromise`<[Application](../interfaces/application.md)>

*Defined in [api.ts:3017](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3017)*

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

*Defined in [api.ts:3029](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3029)*

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

*Defined in [api.ts:3041](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3041)*

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

*Defined in [api.ts:3053](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3053)*

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

*Defined in [api.ts:3065](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3065)*

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

*Defined in [api.ts:3077](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3077)*

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
<a id="updateauthentication"></a>

###  updateAuthentication

▸ **updateAuthentication**(id: *`string`*, authentication: *[Authentication](../interfaces/authentication.md)*, options?: *`any`*): `AxiosPromise`<`Response`>

*Defined in [api.ts:3090](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3090)*

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

*Defined in [api.ts:3103](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3103)*

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

*Defined in [api.ts:3116](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3116)*

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

