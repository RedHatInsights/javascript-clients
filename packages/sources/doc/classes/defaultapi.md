[@redhat-cloud-services/sources-client](../README.md) › [Globals](../globals.md) › [DefaultApi](defaultapi.md)

# Class: DefaultApi

DefaultApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **DefaultApi**

## Index

### Constructors

* [constructor](defaultapi.md#constructor)

### Properties

* [axios](defaultapi.md#protected-axios)
* [basePath](defaultapi.md#protected-basepath)
* [configuration](defaultapi.md#protected-configuration)

### Methods

* [checkAvailabilitySource](defaultapi.md#checkavailabilitysource)
* [createApplication](defaultapi.md#createapplication)
* [createAuthentication](defaultapi.md#createauthentication)
* [createEndpoint](defaultapi.md#createendpoint)
* [createSource](defaultapi.md#createsource)
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

## Constructors

###  constructor

\+ **new DefaultApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[DefaultApi](defaultapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [packages/sources/base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/base.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** *[DefaultApi](defaultapi.md)*

## Properties

### `Protected` axios

• **axios**: *AxiosInstance*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#protected-axios)*

*Defined in [packages/sources/base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/base.ts#L51)*

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

*Defined in [packages/sources/base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/base.ts#L51)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [packages/sources/base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/base.ts#L49)*

## Methods

###  checkAvailabilitySource

▸ **checkAvailabilitySource**(`id`: string, `options?`: any): *Promise‹AxiosResponse‹void››*

*Defined in [packages/sources/api.ts:3341](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3341)*

Checks Availability of a Source

**`summary`** Checks Availability of a Source

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹void››*

___

###  createApplication

▸ **createApplication**(`application`: [Application](../interfaces/application.md), `options?`: any): *Promise‹AxiosResponse‹[Application](../interfaces/application.md)››*

*Defined in [packages/sources/api.ts:3353](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3353)*

Creates a Application object

**`summary`** Create a new Application

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`application` | [Application](../interfaces/application.md) | Application attributes to create |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[Application](../interfaces/application.md)››*

___

###  createAuthentication

▸ **createAuthentication**(`authentication`: [Authentication](../interfaces/authentication.md), `options?`: any): *Promise‹AxiosResponse‹[Authentication](../interfaces/authentication.md)››*

*Defined in [packages/sources/api.ts:3365](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3365)*

Creates a Authentication object

**`summary`** Create a new Authentication

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`authentication` | [Authentication](../interfaces/authentication.md) | Authentication attributes to create |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[Authentication](../interfaces/authentication.md)››*

___

###  createEndpoint

▸ **createEndpoint**(`endpoint`: [Endpoint](../interfaces/endpoint.md), `options?`: any): *Promise‹AxiosResponse‹[Endpoint](../interfaces/endpoint.md)››*

*Defined in [packages/sources/api.ts:3377](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3377)*

Creates a Endpoint object

**`summary`** Create a new Endpoint

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`endpoint` | [Endpoint](../interfaces/endpoint.md) | Endpoint attributes to create |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[Endpoint](../interfaces/endpoint.md)››*

___

###  createSource

▸ **createSource**(`source`: [Source](../interfaces/source.md), `options?`: any): *Promise‹AxiosResponse‹[Source](../interfaces/source.md)››*

*Defined in [packages/sources/api.ts:3389](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3389)*

Creates a Source object

**`summary`** Create a new Source

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`source` | [Source](../interfaces/source.md) | Source attributes to create |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[Source](../interfaces/source.md)››*

___

###  deleteApplication

▸ **deleteApplication**(`id`: string, `options?`: any): *Promise‹AxiosResponse‹void››*

*Defined in [packages/sources/api.ts:3401](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3401)*

Deletes a Application object

**`summary`** Delete an existing Application

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹void››*

___

###  deleteAuthentication

▸ **deleteAuthentication**(`id`: string, `options?`: any): *Promise‹AxiosResponse‹void››*

*Defined in [packages/sources/api.ts:3413](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3413)*

Deletes a Authentication object

**`summary`** Delete an existing Authentication

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹void››*

___

###  deleteEndpoint

▸ **deleteEndpoint**(`id`: string, `options?`: any): *Promise‹AxiosResponse‹void››*

*Defined in [packages/sources/api.ts:3425](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3425)*

Deletes a Endpoint object

**`summary`** Delete an existing Endpoint

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹void››*

___

###  deleteSource

▸ **deleteSource**(`id`: string, `options?`: any): *Promise‹AxiosResponse‹void››*

*Defined in [packages/sources/api.ts:3437](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3437)*

Deletes a Source object

**`summary`** Delete an existing Source

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹void››*

___

###  getDocumentation

▸ **getDocumentation**(`options?`: any): *Promise‹AxiosResponse‹object››*

*Defined in [packages/sources/api.ts:3448](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3448)*

**`summary`** Return this API document in JSON format

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹object››*

___

###  listApplicationTypeSources

▸ **listApplicationTypeSources**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[SourcesCollection](../interfaces/sourcescollection.md)››*

*Defined in [packages/sources/api.ts:3464](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3464)*

Returns an array of Source objects

**`summary`** List Sources for ApplicationType

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[SourcesCollection](../interfaces/sourcescollection.md)››*

___

###  listApplicationTypes

▸ **listApplicationTypes**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[ApplicationTypesCollection](../interfaces/applicationtypescollection.md)››*

*Defined in [packages/sources/api.ts:3479](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3479)*

Returns an array of ApplicationType objects

**`summary`** List ApplicationTypes

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`filter?` | object |
`sortBy?` | string &#124; Array‹string› |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[ApplicationTypesCollection](../interfaces/applicationtypescollection.md)››*

___

###  listApplications

▸ **listApplications**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[ApplicationsCollection](../interfaces/applicationscollection.md)››*

*Defined in [packages/sources/api.ts:3494](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3494)*

Returns an array of Application objects

**`summary`** List Applications

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`filter?` | object |
`sortBy?` | string &#124; Array‹string› |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[ApplicationsCollection](../interfaces/applicationscollection.md)››*

___

###  listAuthentications

▸ **listAuthentications**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[AuthenticationsCollection](../interfaces/authenticationscollection.md)››*

*Defined in [packages/sources/api.ts:3509](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3509)*

Returns an array of Authentication objects

**`summary`** List Authentications

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`filter?` | object |
`sortBy?` | string &#124; Array‹string› |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[AuthenticationsCollection](../interfaces/authenticationscollection.md)››*

___

###  listEndpointAuthentications

▸ **listEndpointAuthentications**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[AuthenticationsCollection](../interfaces/authenticationscollection.md)››*

*Defined in [packages/sources/api.ts:3525](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3525)*

Returns an array of Authentication objects

**`summary`** List Authentications for Endpoint

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[AuthenticationsCollection](../interfaces/authenticationscollection.md)››*

___

###  listEndpoints

▸ **listEndpoints**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[EndpointsCollection](../interfaces/endpointscollection.md)››*

*Defined in [packages/sources/api.ts:3540](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3540)*

Returns an array of Endpoint objects

**`summary`** List Endpoints

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`filter?` | object |
`sortBy?` | string &#124; Array‹string› |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[EndpointsCollection](../interfaces/endpointscollection.md)››*

___

###  listSourceApplicationTypes

▸ **listSourceApplicationTypes**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[ApplicationTypesCollection](../interfaces/applicationtypescollection.md)››*

*Defined in [packages/sources/api.ts:3556](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3556)*

Returns an array of ApplicationType objects

**`summary`** List ApplicationTypes for Source

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ApplicationTypesCollection](../interfaces/applicationtypescollection.md)››*

___

###  listSourceApplications

▸ **listSourceApplications**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[ApplicationsCollection](../interfaces/applicationscollection.md)››*

*Defined in [packages/sources/api.ts:3572](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3572)*

Returns an array of Application objects

**`summary`** List Applications for Source

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ApplicationsCollection](../interfaces/applicationscollection.md)››*

___

###  listSourceEndpoints

▸ **listSourceEndpoints**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[EndpointsCollection](../interfaces/endpointscollection.md)››*

*Defined in [packages/sources/api.ts:3588](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3588)*

Returns an array of Endpoint objects

**`summary`** List Endpoints for Source

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[EndpointsCollection](../interfaces/endpointscollection.md)››*

___

###  listSourceTypeSources

▸ **listSourceTypeSources**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[SourcesCollection](../interfaces/sourcescollection.md)››*

*Defined in [packages/sources/api.ts:3604](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3604)*

Returns an array of Source objects

**`summary`** List Sources for SourceType

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[SourcesCollection](../interfaces/sourcescollection.md)››*

___

###  listSourceTypes

▸ **listSourceTypes**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[SourceTypesCollection](../interfaces/sourcetypescollection.md)››*

*Defined in [packages/sources/api.ts:3619](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3619)*

Returns an array of SourceType objects

**`summary`** List SourceTypes

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`filter?` | object |
`sortBy?` | string &#124; Array‹string› |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[SourceTypesCollection](../interfaces/sourcetypescollection.md)››*

___

###  listSources

▸ **listSources**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[SourcesCollection](../interfaces/sourcescollection.md)››*

*Defined in [packages/sources/api.ts:3634](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3634)*

Returns an array of Source objects

**`summary`** List Sources

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`filter?` | object |
`sortBy?` | string &#124; Array‹string› |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[SourcesCollection](../interfaces/sourcescollection.md)››*

___

###  postGraphQL

▸ **postGraphQL**(`graphQLRequest`: [GraphQLRequest](../interfaces/graphqlrequest.md), `options?`: any): *Promise‹AxiosResponse‹[GraphQLResponse](../interfaces/graphqlresponse.md)››*

*Defined in [packages/sources/api.ts:3646](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3646)*

Performs a GraphQL Query

**`summary`** Perform a GraphQL Query

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`graphQLRequest` | [GraphQLRequest](../interfaces/graphqlrequest.md) | GraphQL Query Request |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[GraphQLResponse](../interfaces/graphqlresponse.md)››*

___

###  showApplication

▸ **showApplication**(`id`: string, `options?`: any): *Promise‹AxiosResponse‹[Application](../interfaces/application.md)››*

*Defined in [packages/sources/api.ts:3658](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3658)*

Returns a Application object

**`summary`** Show an existing Application

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[Application](../interfaces/application.md)››*

___

###  showApplicationType

▸ **showApplicationType**(`id`: string, `options?`: any): *Promise‹AxiosResponse‹[ApplicationType](../interfaces/applicationtype.md)››*

*Defined in [packages/sources/api.ts:3670](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3670)*

Returns a ApplicationType object

**`summary`** Show an existing ApplicationType

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ApplicationType](../interfaces/applicationtype.md)››*

___

###  showAuthentication

▸ **showAuthentication**(`id`: string, `options?`: any): *Promise‹AxiosResponse‹[Authentication](../interfaces/authentication.md)››*

*Defined in [packages/sources/api.ts:3682](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3682)*

Returns a Authentication object

**`summary`** Show an existing Authentication

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[Authentication](../interfaces/authentication.md)››*

___

###  showEndpoint

▸ **showEndpoint**(`id`: string, `options?`: any): *Promise‹AxiosResponse‹[Endpoint](../interfaces/endpoint.md)››*

*Defined in [packages/sources/api.ts:3694](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3694)*

Returns a Endpoint object

**`summary`** Show an existing Endpoint

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[Endpoint](../interfaces/endpoint.md)››*

___

###  showSource

▸ **showSource**(`id`: string, `options?`: any): *Promise‹AxiosResponse‹[Source](../interfaces/source.md)››*

*Defined in [packages/sources/api.ts:3706](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3706)*

Returns a Source object

**`summary`** Show an existing Source

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[Source](../interfaces/source.md)››*

___

###  showSourceType

▸ **showSourceType**(`id`: string, `options?`: any): *Promise‹AxiosResponse‹[SourceType](../interfaces/sourcetype.md)››*

*Defined in [packages/sources/api.ts:3718](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3718)*

Returns a SourceType object

**`summary`** Show an existing SourceType

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[SourceType](../interfaces/sourcetype.md)››*

___

###  updateApplication

▸ **updateApplication**(`id`: string, `application`: [Application](../interfaces/application.md), `options?`: any): *Promise‹AxiosResponse‹void››*

*Defined in [packages/sources/api.ts:3731](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3731)*

Updates a Application object

**`summary`** Update an existing Application

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`application` | [Application](../interfaces/application.md) | Application attributes to update |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹void››*

___

###  updateAuthentication

▸ **updateAuthentication**(`id`: string, `authentication`: [Authentication](../interfaces/authentication.md), `options?`: any): *Promise‹AxiosResponse‹void››*

*Defined in [packages/sources/api.ts:3744](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3744)*

Updates a Authentication object

**`summary`** Update an existing Authentication

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`authentication` | [Authentication](../interfaces/authentication.md) | Authentication attributes to update |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹void››*

___

###  updateEndpoint

▸ **updateEndpoint**(`id`: string, `endpoint`: [Endpoint](../interfaces/endpoint.md), `options?`: any): *Promise‹AxiosResponse‹void››*

*Defined in [packages/sources/api.ts:3757](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3757)*

Updates a Endpoint object

**`summary`** Update an existing Endpoint

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`endpoint` | [Endpoint](../interfaces/endpoint.md) | Endpoint attributes to update |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹void››*

___

###  updateSource

▸ **updateSource**(`id`: string, `source`: [Source](../interfaces/source.md), `options?`: any): *Promise‹AxiosResponse‹void››*

*Defined in [packages/sources/api.ts:3770](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3770)*

Updates a Source object

**`summary`** Update an existing Source

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`source` | [Source](../interfaces/source.md) | Source attributes to update |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹void››*
