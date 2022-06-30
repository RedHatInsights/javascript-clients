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
* [listSourceAuthentications](defaultapi.md#listsourceauthentications)
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

*Defined in [base.ts:49](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/sources/base.ts#L49)*

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

*Defined in [base.ts:51](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/sources/base.ts#L51)*

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

*Defined in [base.ts:51](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/sources/base.ts#L51)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [base.ts:49](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/sources/base.ts#L49)*

## Methods

###  checkAvailabilitySource

▸ **checkAvailabilitySource**(`id`: string, `options?`: any): *Promise‹AxiosResponse‹void››*

*Defined in [api.ts:3435](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/sources/api.ts#L3435)*

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

*Defined in [api.ts:3447](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/sources/api.ts#L3447)*

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

*Defined in [api.ts:3459](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/sources/api.ts#L3459)*

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

*Defined in [api.ts:3471](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/sources/api.ts#L3471)*

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

*Defined in [api.ts:3483](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/sources/api.ts#L3483)*

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

*Defined in [api.ts:3495](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/sources/api.ts#L3495)*

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

*Defined in [api.ts:3507](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/sources/api.ts#L3507)*

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

*Defined in [api.ts:3519](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/sources/api.ts#L3519)*

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

*Defined in [api.ts:3531](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/sources/api.ts#L3531)*

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

*Defined in [api.ts:3542](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/sources/api.ts#L3542)*

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

*Defined in [api.ts:3558](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/sources/api.ts#L3558)*

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

*Defined in [api.ts:3573](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/sources/api.ts#L3573)*

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

*Defined in [api.ts:3588](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/sources/api.ts#L3588)*

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

*Defined in [api.ts:3603](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/sources/api.ts#L3603)*

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

*Defined in [api.ts:3619](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/sources/api.ts#L3619)*

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

*Defined in [api.ts:3634](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/sources/api.ts#L3634)*

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

*Defined in [api.ts:3650](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/sources/api.ts#L3650)*

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

*Defined in [api.ts:3666](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/sources/api.ts#L3666)*

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

###  listSourceAuthentications

▸ **listSourceAuthentications**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[AuthenticationsCollection](../interfaces/authenticationscollection.md)››*

*Defined in [api.ts:3682](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/sources/api.ts#L3682)*

Returns an array of Authentication objects

**`summary`** List Authentications for Source

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

###  listSourceEndpoints

▸ **listSourceEndpoints**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[EndpointsCollection](../interfaces/endpointscollection.md)››*

*Defined in [api.ts:3698](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/sources/api.ts#L3698)*

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

*Defined in [api.ts:3714](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/sources/api.ts#L3714)*

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

*Defined in [api.ts:3729](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/sources/api.ts#L3729)*

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

*Defined in [api.ts:3744](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/sources/api.ts#L3744)*

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

*Defined in [api.ts:3756](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/sources/api.ts#L3756)*

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

*Defined in [api.ts:3768](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/sources/api.ts#L3768)*

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

*Defined in [api.ts:3780](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/sources/api.ts#L3780)*

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

*Defined in [api.ts:3792](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/sources/api.ts#L3792)*

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

*Defined in [api.ts:3804](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/sources/api.ts#L3804)*

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

*Defined in [api.ts:3816](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/sources/api.ts#L3816)*

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

*Defined in [api.ts:3828](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/sources/api.ts#L3828)*

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

*Defined in [api.ts:3841](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/sources/api.ts#L3841)*

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

*Defined in [api.ts:3854](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/sources/api.ts#L3854)*

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

*Defined in [api.ts:3867](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/sources/api.ts#L3867)*

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

*Defined in [api.ts:3880](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/sources/api.ts#L3880)*

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
