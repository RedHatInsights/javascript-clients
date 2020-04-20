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

▸ **checkAvailabilitySource**(`id`: string, `options?`: any): *AxiosPromise‹void›*

*Defined in [packages/sources/api.ts:3410](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3410)*

Checks Availability of a Source

**`summary`** Checks Availability of a Source

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *AxiosPromise‹void›*

___

###  createApplication

▸ **createApplication**(`application`: [Application](../interfaces/application.md), `options?`: any): *AxiosPromise‹[Application](../interfaces/application.md)›*

*Defined in [packages/sources/api.ts:3422](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3422)*

Creates a Application object

**`summary`** Create a new Application

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`application` | [Application](../interfaces/application.md) | Application attributes to create |
`options?` | any | - |

**Returns:** *AxiosPromise‹[Application](../interfaces/application.md)›*

___

###  createAuthentication

▸ **createAuthentication**(`authentication`: [Authentication](../interfaces/authentication.md), `options?`: any): *AxiosPromise‹[Authentication](../interfaces/authentication.md)›*

*Defined in [packages/sources/api.ts:3434](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3434)*

Creates a Authentication object

**`summary`** Create a new Authentication

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`authentication` | [Authentication](../interfaces/authentication.md) | Authentication attributes to create |
`options?` | any | - |

**Returns:** *AxiosPromise‹[Authentication](../interfaces/authentication.md)›*

___

###  createEndpoint

▸ **createEndpoint**(`endpoint`: [Endpoint](../interfaces/endpoint.md), `options?`: any): *AxiosPromise‹[Endpoint](../interfaces/endpoint.md)›*

*Defined in [packages/sources/api.ts:3446](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3446)*

Creates a Endpoint object

**`summary`** Create a new Endpoint

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`endpoint` | [Endpoint](../interfaces/endpoint.md) | Endpoint attributes to create |
`options?` | any | - |

**Returns:** *AxiosPromise‹[Endpoint](../interfaces/endpoint.md)›*

___

###  createSource

▸ **createSource**(`source`: [Source](../interfaces/source.md), `options?`: any): *AxiosPromise‹[Source](../interfaces/source.md)›*

*Defined in [packages/sources/api.ts:3458](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3458)*

Creates a Source object

**`summary`** Create a new Source

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`source` | [Source](../interfaces/source.md) | Source attributes to create |
`options?` | any | - |

**Returns:** *AxiosPromise‹[Source](../interfaces/source.md)›*

___

###  createSourceType

▸ **createSourceType**(`sourceType`: [SourceType](../interfaces/sourcetype.md), `options?`: any): *AxiosPromise‹[SourceType](../interfaces/sourcetype.md)›*

*Defined in [packages/sources/api.ts:3470](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3470)*

Creates a SourceType object

**`summary`** Create a new SourceType

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`sourceType` | [SourceType](../interfaces/sourcetype.md) | SourceType attributes to create |
`options?` | any | - |

**Returns:** *AxiosPromise‹[SourceType](../interfaces/sourcetype.md)›*

___

###  deleteApplication

▸ **deleteApplication**(`id`: string, `options?`: any): *AxiosPromise‹void›*

*Defined in [packages/sources/api.ts:3482](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3482)*

Deletes a Application object

**`summary`** Delete an existing Application

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *AxiosPromise‹void›*

___

###  deleteAuthentication

▸ **deleteAuthentication**(`id`: string, `options?`: any): *AxiosPromise‹void›*

*Defined in [packages/sources/api.ts:3494](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3494)*

Deletes a Authentication object

**`summary`** Delete an existing Authentication

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *AxiosPromise‹void›*

___

###  deleteEndpoint

▸ **deleteEndpoint**(`id`: string, `options?`: any): *AxiosPromise‹void›*

*Defined in [packages/sources/api.ts:3506](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3506)*

Deletes a Endpoint object

**`summary`** Delete an existing Endpoint

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *AxiosPromise‹void›*

___

###  deleteSource

▸ **deleteSource**(`id`: string, `options?`: any): *AxiosPromise‹void›*

*Defined in [packages/sources/api.ts:3518](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3518)*

Deletes a Source object

**`summary`** Delete an existing Source

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *AxiosPromise‹void›*

___

###  getDocumentation

▸ **getDocumentation**(`options?`: any): *AxiosPromise‹object›*

*Defined in [packages/sources/api.ts:3529](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3529)*

**`summary`** Return this API document in JSON format

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *AxiosPromise‹object›*

___

###  listApplicationTypeSources

▸ **listApplicationTypeSources**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *AxiosPromise‹[SourcesCollection](../interfaces/sourcescollection.md)›*

*Defined in [packages/sources/api.ts:3545](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3545)*

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

**Returns:** *AxiosPromise‹[SourcesCollection](../interfaces/sourcescollection.md)›*

___

###  listApplicationTypes

▸ **listApplicationTypes**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *AxiosPromise‹[ApplicationTypesCollection](../interfaces/applicationtypescollection.md)›*

*Defined in [packages/sources/api.ts:3560](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3560)*

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

**Returns:** *AxiosPromise‹[ApplicationTypesCollection](../interfaces/applicationtypescollection.md)›*

___

###  listApplications

▸ **listApplications**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *AxiosPromise‹[ApplicationsCollection](../interfaces/applicationscollection.md)›*

*Defined in [packages/sources/api.ts:3575](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3575)*

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

**Returns:** *AxiosPromise‹[ApplicationsCollection](../interfaces/applicationscollection.md)›*

___

###  listAuthentications

▸ **listAuthentications**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *AxiosPromise‹[AuthenticationsCollection](../interfaces/authenticationscollection.md)›*

*Defined in [packages/sources/api.ts:3590](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3590)*

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

**Returns:** *AxiosPromise‹[AuthenticationsCollection](../interfaces/authenticationscollection.md)›*

___

###  listEndpointAuthentications

▸ **listEndpointAuthentications**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *AxiosPromise‹[AuthenticationsCollection](../interfaces/authenticationscollection.md)›*

*Defined in [packages/sources/api.ts:3606](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3606)*

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

**Returns:** *AxiosPromise‹[AuthenticationsCollection](../interfaces/authenticationscollection.md)›*

___

###  listEndpoints

▸ **listEndpoints**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *AxiosPromise‹[EndpointsCollection](../interfaces/endpointscollection.md)›*

*Defined in [packages/sources/api.ts:3621](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3621)*

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

**Returns:** *AxiosPromise‹[EndpointsCollection](../interfaces/endpointscollection.md)›*

___

###  listSourceApplicationTypes

▸ **listSourceApplicationTypes**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *AxiosPromise‹[ApplicationTypesCollection](../interfaces/applicationtypescollection.md)›*

*Defined in [packages/sources/api.ts:3637](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3637)*

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

**Returns:** *AxiosPromise‹[ApplicationTypesCollection](../interfaces/applicationtypescollection.md)›*

___

###  listSourceApplications

▸ **listSourceApplications**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *AxiosPromise‹[ApplicationsCollection](../interfaces/applicationscollection.md)›*

*Defined in [packages/sources/api.ts:3653](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3653)*

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

**Returns:** *AxiosPromise‹[ApplicationsCollection](../interfaces/applicationscollection.md)›*

___

###  listSourceEndpoints

▸ **listSourceEndpoints**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *AxiosPromise‹[EndpointsCollection](../interfaces/endpointscollection.md)›*

*Defined in [packages/sources/api.ts:3669](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3669)*

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

**Returns:** *AxiosPromise‹[EndpointsCollection](../interfaces/endpointscollection.md)›*

___

###  listSourceTypeSources

▸ **listSourceTypeSources**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *AxiosPromise‹[SourcesCollection](../interfaces/sourcescollection.md)›*

*Defined in [packages/sources/api.ts:3685](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3685)*

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

**Returns:** *AxiosPromise‹[SourcesCollection](../interfaces/sourcescollection.md)›*

___

###  listSourceTypes

▸ **listSourceTypes**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *AxiosPromise‹[SourceTypesCollection](../interfaces/sourcetypescollection.md)›*

*Defined in [packages/sources/api.ts:3700](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3700)*

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

**Returns:** *AxiosPromise‹[SourceTypesCollection](../interfaces/sourcetypescollection.md)›*

___

###  listSources

▸ **listSources**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *AxiosPromise‹[SourcesCollection](../interfaces/sourcescollection.md)›*

*Defined in [packages/sources/api.ts:3715](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3715)*

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

**Returns:** *AxiosPromise‹[SourcesCollection](../interfaces/sourcescollection.md)›*

___

###  postGraphQL

▸ **postGraphQL**(`graphQLRequest`: [GraphQLRequest](../interfaces/graphqlrequest.md), `options?`: any): *AxiosPromise‹[GraphQLResponse](../interfaces/graphqlresponse.md)›*

*Defined in [packages/sources/api.ts:3727](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3727)*

Performs a GraphQL Query

**`summary`** Perform a GraphQL Query

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`graphQLRequest` | [GraphQLRequest](../interfaces/graphqlrequest.md) | GraphQL Query Request |
`options?` | any | - |

**Returns:** *AxiosPromise‹[GraphQLResponse](../interfaces/graphqlresponse.md)›*

___

###  showApplication

▸ **showApplication**(`id`: string, `options?`: any): *AxiosPromise‹[Application](../interfaces/application.md)›*

*Defined in [packages/sources/api.ts:3739](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3739)*

Returns a Application object

**`summary`** Show an existing Application

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *AxiosPromise‹[Application](../interfaces/application.md)›*

___

###  showApplicationType

▸ **showApplicationType**(`id`: string, `options?`: any): *AxiosPromise‹[ApplicationType](../interfaces/applicationtype.md)›*

*Defined in [packages/sources/api.ts:3751](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3751)*

Returns a ApplicationType object

**`summary`** Show an existing ApplicationType

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *AxiosPromise‹[ApplicationType](../interfaces/applicationtype.md)›*

___

###  showAuthentication

▸ **showAuthentication**(`id`: string, `options?`: any): *AxiosPromise‹[Authentication](../interfaces/authentication.md)›*

*Defined in [packages/sources/api.ts:3763](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3763)*

Returns a Authentication object

**`summary`** Show an existing Authentication

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *AxiosPromise‹[Authentication](../interfaces/authentication.md)›*

___

###  showEndpoint

▸ **showEndpoint**(`id`: string, `options?`: any): *AxiosPromise‹[Endpoint](../interfaces/endpoint.md)›*

*Defined in [packages/sources/api.ts:3775](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3775)*

Returns a Endpoint object

**`summary`** Show an existing Endpoint

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *AxiosPromise‹[Endpoint](../interfaces/endpoint.md)›*

___

###  showSource

▸ **showSource**(`id`: string, `options?`: any): *AxiosPromise‹[Source](../interfaces/source.md)›*

*Defined in [packages/sources/api.ts:3787](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3787)*

Returns a Source object

**`summary`** Show an existing Source

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *AxiosPromise‹[Source](../interfaces/source.md)›*

___

###  showSourceType

▸ **showSourceType**(`id`: string, `options?`: any): *AxiosPromise‹[SourceType](../interfaces/sourcetype.md)›*

*Defined in [packages/sources/api.ts:3799](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3799)*

Returns a SourceType object

**`summary`** Show an existing SourceType

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *AxiosPromise‹[SourceType](../interfaces/sourcetype.md)›*

___

###  updateApplication

▸ **updateApplication**(`id`: string, `application`: [Application](../interfaces/application.md), `options?`: any): *AxiosPromise‹void›*

*Defined in [packages/sources/api.ts:3812](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3812)*

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

**Returns:** *AxiosPromise‹void›*

___

###  updateAuthentication

▸ **updateAuthentication**(`id`: string, `authentication`: [Authentication](../interfaces/authentication.md), `options?`: any): *AxiosPromise‹void›*

*Defined in [packages/sources/api.ts:3825](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3825)*

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

**Returns:** *AxiosPromise‹void›*

___

###  updateEndpoint

▸ **updateEndpoint**(`id`: string, `endpoint`: [Endpoint](../interfaces/endpoint.md), `options?`: any): *AxiosPromise‹void›*

*Defined in [packages/sources/api.ts:3838](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3838)*

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

**Returns:** *AxiosPromise‹void›*

___

###  updateSource

▸ **updateSource**(`id`: string, `source`: [Source](../interfaces/source.md), `options?`: any): *AxiosPromise‹void›*

*Defined in [packages/sources/api.ts:3851](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L3851)*

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

**Returns:** *AxiosPromise‹void›*
