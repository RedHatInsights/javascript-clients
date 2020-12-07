[@redhat-cloud-services/sources-client](README.md) › [Globals](globals.md)

# @redhat-cloud-services/sources-client

## Index

### Classes

* [BaseAPI](classes/baseapi.md)
* [Configuration](classes/configuration.md)
* [DefaultApi](classes/defaultapi.md)
* [RequiredError](classes/requirederror.md)

### Interfaces

* [Application](interfaces/application.md)
* [ApplicationType](interfaces/applicationtype.md)
* [ApplicationTypesCollection](interfaces/applicationtypescollection.md)
* [ApplicationsCollection](interfaces/applicationscollection.md)
* [Authentication](interfaces/authentication.md)
* [AuthenticationExtra](interfaces/authenticationextra.md)
* [AuthenticationExtraAzure](interfaces/authenticationextraazure.md)
* [AuthenticationsCollection](interfaces/authenticationscollection.md)
* [CollectionLinks](interfaces/collectionlinks.md)
* [CollectionMetadata](interfaces/collectionmetadata.md)
* [ConfigurationParameters](interfaces/configurationparameters.md)
* [Endpoint](interfaces/endpoint.md)
* [EndpointsCollection](interfaces/endpointscollection.md)
* [ErrorNotFound](interfaces/errornotfound.md)
* [ErrorNotFoundErrors](interfaces/errornotfounderrors.md)
* [GraphQLRequest](interfaces/graphqlrequest.md)
* [GraphQLResponse](interfaces/graphqlresponse.md)
* [RequestArgs](interfaces/requestargs.md)
* [Source](interfaces/source.md)
* [SourceType](interfaces/sourcetype.md)
* [SourceTypesCollection](interfaces/sourcetypescollection.md)
* [SourcesCollection](interfaces/sourcescollection.md)
* [Tenant](interfaces/tenant.md)

### Variables

* [BASE_PATH](globals.md#const-base_path)

### Functions

* [DefaultApiAxiosParamCreator](globals.md#const-defaultapiaxiosparamcreator)
* [DefaultApiFactory](globals.md#const-defaultapifactory)
* [DefaultApiFp](globals.md#const-defaultapifp)

### Object literals

* [COLLECTION_FORMATS](globals.md#const-collection_formats)

## Variables

### `Const` BASE_PATH

• **BASE_PATH**: *string* = "https://cloud.redhat.com//api/sources/v1.0".replace(/\/+$/, "")

*Defined in [packages/sources/base.ts:20](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/base.ts#L20)*

## Functions

### `Const` DefaultApiAxiosParamCreator

▸ **DefaultApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/sources/api.ts:786](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L786)*

DefaultApi - axios parameter creator

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **checkAvailabilitySource**(`id`: string, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **createApplication**(`application`: [Application](interfaces/application.md), `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **createAuthentication**(`authentication`: [Authentication](interfaces/authentication.md), `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **createEndpoint**(`endpoint`: [Endpoint](interfaces/endpoint.md), `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **createSource**(`source`: [Source](interfaces/source.md), `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **deleteApplication**(`id`: string, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **deleteAuthentication**(`id`: string, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **deleteEndpoint**(`id`: string, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **deleteSource**(`id`: string, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **getDocumentation**(`options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **listApplicationTypeSources**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **listApplicationTypes**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **listApplications**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **listAuthentications**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **listEndpointAuthentications**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **listEndpoints**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **listSourceApplicationTypes**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **listSourceApplications**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **listSourceEndpoints**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **listSourceTypeSources**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **listSourceTypes**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **listSources**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **postGraphQL**(`graphQLRequest`: [GraphQLRequest](interfaces/graphqlrequest.md), `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **showApplication**(`id`: string, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **showApplicationType**(`id`: string, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **showAuthentication**(`id`: string, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **showEndpoint**(`id`: string, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **showSource**(`id`: string, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **showSourceType**(`id`: string, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **updateApplication**(`id`: string, `application`: [Application](interfaces/application.md), `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **updateAuthentication**(`id`: string, `authentication`: [Authentication](interfaces/authentication.md), `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **updateEndpoint**(`id`: string, `endpoint`: [Endpoint](interfaces/endpoint.md), `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **updateSource**(`id`: string, `source`: [Source](interfaces/source.md), `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

___

### `Const` DefaultApiFactory

▸ **DefaultApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [packages/sources/api.ts:2946](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L2946)*

DefaultApi - factory interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`basePath?` | string |
`axios?` | AxiosInstance |

**Returns:** *object*

* **checkAvailabilitySource**(`id`: string, `options?`: any): *AxiosPromise‹void›*

* **createApplication**(`application`: [Application](interfaces/application.md), `options?`: any): *AxiosPromise‹[Application](interfaces/application.md)›*

* **createAuthentication**(`authentication`: [Authentication](interfaces/authentication.md), `options?`: any): *AxiosPromise‹[Authentication](interfaces/authentication.md)›*

* **createEndpoint**(`endpoint`: [Endpoint](interfaces/endpoint.md), `options?`: any): *AxiosPromise‹[Endpoint](interfaces/endpoint.md)›*

* **createSource**(`source`: [Source](interfaces/source.md), `options?`: any): *AxiosPromise‹[Source](interfaces/source.md)›*

* **deleteApplication**(`id`: string, `options?`: any): *AxiosPromise‹void›*

* **deleteAuthentication**(`id`: string, `options?`: any): *AxiosPromise‹void›*

* **deleteEndpoint**(`id`: string, `options?`: any): *AxiosPromise‹void›*

* **deleteSource**(`id`: string, `options?`: any): *AxiosPromise‹void›*

* **getDocumentation**(`options?`: any): *AxiosPromise‹object›*

* **listApplicationTypeSources**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *AxiosPromise‹[SourcesCollection](interfaces/sourcescollection.md)›*

* **listApplicationTypes**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *AxiosPromise‹[ApplicationTypesCollection](interfaces/applicationtypescollection.md)›*

* **listApplications**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *AxiosPromise‹[ApplicationsCollection](interfaces/applicationscollection.md)›*

* **listAuthentications**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *AxiosPromise‹[AuthenticationsCollection](interfaces/authenticationscollection.md)›*

* **listEndpointAuthentications**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *AxiosPromise‹[AuthenticationsCollection](interfaces/authenticationscollection.md)›*

* **listEndpoints**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *AxiosPromise‹[EndpointsCollection](interfaces/endpointscollection.md)›*

* **listSourceApplicationTypes**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *AxiosPromise‹[ApplicationTypesCollection](interfaces/applicationtypescollection.md)›*

* **listSourceApplications**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *AxiosPromise‹[ApplicationsCollection](interfaces/applicationscollection.md)›*

* **listSourceEndpoints**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *AxiosPromise‹[EndpointsCollection](interfaces/endpointscollection.md)›*

* **listSourceTypeSources**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *AxiosPromise‹[SourcesCollection](interfaces/sourcescollection.md)›*

* **listSourceTypes**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *AxiosPromise‹[SourceTypesCollection](interfaces/sourcetypescollection.md)›*

* **listSources**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *AxiosPromise‹[SourcesCollection](interfaces/sourcescollection.md)›*

* **postGraphQL**(`graphQLRequest`: [GraphQLRequest](interfaces/graphqlrequest.md), `options?`: any): *AxiosPromise‹[GraphQLResponse](interfaces/graphqlresponse.md)›*

* **showApplication**(`id`: string, `options?`: any): *AxiosPromise‹[Application](interfaces/application.md)›*

* **showApplicationType**(`id`: string, `options?`: any): *AxiosPromise‹[ApplicationType](interfaces/applicationtype.md)›*

* **showAuthentication**(`id`: string, `options?`: any): *AxiosPromise‹[Authentication](interfaces/authentication.md)›*

* **showEndpoint**(`id`: string, `options?`: any): *AxiosPromise‹[Endpoint](interfaces/endpoint.md)›*

* **showSource**(`id`: string, `options?`: any): *AxiosPromise‹[Source](interfaces/source.md)›*

* **showSourceType**(`id`: string, `options?`: any): *AxiosPromise‹[SourceType](interfaces/sourcetype.md)›*

* **updateApplication**(`id`: string, `application`: [Application](interfaces/application.md), `options?`: any): *AxiosPromise‹void›*

* **updateAuthentication**(`id`: string, `authentication`: [Authentication](interfaces/authentication.md), `options?`: any): *AxiosPromise‹void›*

* **updateEndpoint**(`id`: string, `endpoint`: [Endpoint](interfaces/endpoint.md), `options?`: any): *AxiosPromise‹void›*

* **updateSource**(`id`: string, `source`: [Source](interfaces/source.md), `options?`: any): *AxiosPromise‹void›*

___

### `Const` DefaultApiFp

▸ **DefaultApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/sources/api.ts:2430](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L2430)*

DefaultApi - functional programming interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **checkAvailabilitySource**(`id`: string, `options?`: any): *Promise‹function›*

* **createApplication**(`application`: [Application](interfaces/application.md), `options?`: any): *Promise‹function›*

* **createAuthentication**(`authentication`: [Authentication](interfaces/authentication.md), `options?`: any): *Promise‹function›*

* **createEndpoint**(`endpoint`: [Endpoint](interfaces/endpoint.md), `options?`: any): *Promise‹function›*

* **createSource**(`source`: [Source](interfaces/source.md), `options?`: any): *Promise‹function›*

* **deleteApplication**(`id`: string, `options?`: any): *Promise‹function›*

* **deleteAuthentication**(`id`: string, `options?`: any): *Promise‹function›*

* **deleteEndpoint**(`id`: string, `options?`: any): *Promise‹function›*

* **deleteSource**(`id`: string, `options?`: any): *Promise‹function›*

* **getDocumentation**(`options?`: any): *Promise‹function›*

* **listApplicationTypeSources**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹function›*

* **listApplicationTypes**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹function›*

* **listApplications**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹function›*

* **listAuthentications**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹function›*

* **listEndpointAuthentications**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹function›*

* **listEndpoints**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹function›*

* **listSourceApplicationTypes**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹function›*

* **listSourceApplications**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹function›*

* **listSourceEndpoints**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹function›*

* **listSourceTypeSources**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹function›*

* **listSourceTypes**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹function›*

* **listSources**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹function›*

* **postGraphQL**(`graphQLRequest`: [GraphQLRequest](interfaces/graphqlrequest.md), `options?`: any): *Promise‹function›*

* **showApplication**(`id`: string, `options?`: any): *Promise‹function›*

* **showApplicationType**(`id`: string, `options?`: any): *Promise‹function›*

* **showAuthentication**(`id`: string, `options?`: any): *Promise‹function›*

* **showEndpoint**(`id`: string, `options?`: any): *Promise‹function›*

* **showSource**(`id`: string, `options?`: any): *Promise‹function›*

* **showSourceType**(`id`: string, `options?`: any): *Promise‹function›*

* **updateApplication**(`id`: string, `application`: [Application](interfaces/application.md), `options?`: any): *Promise‹function›*

* **updateAuthentication**(`id`: string, `authentication`: [Authentication](interfaces/authentication.md), `options?`: any): *Promise‹function›*

* **updateEndpoint**(`id`: string, `endpoint`: [Endpoint](interfaces/endpoint.md), `options?`: any): *Promise‹function›*

* **updateSource**(`id`: string, `source`: [Source](interfaces/source.md), `options?`: any): *Promise‹function›*

## Object literals

### `Const` COLLECTION_FORMATS

### ▪ **COLLECTION_FORMATS**: *object*

*Defined in [packages/sources/base.ts:26](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/base.ts#L26)*

**`export`** 

###  csv

• **csv**: *string* = ","

*Defined in [packages/sources/base.ts:27](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/base.ts#L27)*

###  pipes

• **pipes**: *string* = "|"

*Defined in [packages/sources/base.ts:30](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/base.ts#L30)*

###  ssv

• **ssv**: *string* = " "

*Defined in [packages/sources/base.ts:28](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/base.ts#L28)*

###  tsv

• **tsv**: *string* = "	"

*Defined in [packages/sources/base.ts:29](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/base.ts#L29)*
