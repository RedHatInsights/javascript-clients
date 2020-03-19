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

• **BASE_PATH**: *string* =  "https://cloud.redhat.com//api/sources/v1.0".replace(/\/+$/, "")

*Defined in [api.ts:20](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L20)*

## Functions

### `Const` DefaultApiAxiosParamCreator

▸ **DefaultApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:857](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L857)*

DefaultApi - axios parameter creator

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **checkAvailabilitySource**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **createApplication**(`application`: [Application](interfaces/application.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **createAuthentication**(`authentication`: [Authentication](interfaces/authentication.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **createEndpoint**(`endpoint`: [Endpoint](interfaces/endpoint.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **createSource**(`source`: [Source](interfaces/source.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **createSourceType**(`sourceType`: [SourceType](interfaces/sourcetype.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **deleteApplication**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **deleteAuthentication**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **deleteEndpoint**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **deleteSource**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **getDocumentation**(`options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listApplicationTypeSources**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listApplicationTypes**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listApplications**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listAuthentications**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listEndpointAuthentications**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listEndpoints**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listSourceApplicationTypes**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listSourceApplications**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listSourceEndpoints**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listSourceTypeSources**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listSourceTypes**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listSources**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **postGraphQL**(`graphQLRequest`: [GraphQLRequest](interfaces/graphqlrequest.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **showApplication**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **showApplicationType**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **showAuthentication**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **showEndpoint**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **showSource**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **showSourceType**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **updateApplication**(`id`: string, `application`: [Application](interfaces/application.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **updateAuthentication**(`id`: string, `authentication`: [Authentication](interfaces/authentication.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **updateEndpoint**(`id`: string, `endpoint`: [Endpoint](interfaces/endpoint.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **updateSource**(`id`: string, `source`: [Source](interfaces/source.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

___

### `Const` DefaultApiFactory

▸ **DefaultApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [api.ts:2974](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L2974)*

DefaultApi - factory interface

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`basePath?` | string |
`axios?` | AxiosInstance |

**Returns:** *object*

* **checkAvailabilitySource**(`id`: string, `options?`: any): *AxiosPromise‹Response›*

* **createApplication**(`application`: [Application](interfaces/application.md), `options?`: any): *AxiosPromise‹[Application](interfaces/application.md)›*

* **createAuthentication**(`authentication`: [Authentication](interfaces/authentication.md), `options?`: any): *AxiosPromise‹[Authentication](interfaces/authentication.md)›*

* **createEndpoint**(`endpoint`: [Endpoint](interfaces/endpoint.md), `options?`: any): *AxiosPromise‹[Endpoint](interfaces/endpoint.md)›*

* **createSource**(`source`: [Source](interfaces/source.md), `options?`: any): *AxiosPromise‹[Source](interfaces/source.md)›*

* **createSourceType**(`sourceType`: [SourceType](interfaces/sourcetype.md), `options?`: any): *AxiosPromise‹[SourceType](interfaces/sourcetype.md)›*

* **deleteApplication**(`id`: string, `options?`: any): *AxiosPromise‹Response›*

* **deleteAuthentication**(`id`: string, `options?`: any): *AxiosPromise‹Response›*

* **deleteEndpoint**(`id`: string, `options?`: any): *AxiosPromise‹Response›*

* **deleteSource**(`id`: string, `options?`: any): *AxiosPromise‹Response›*

* **getDocumentation**(`options?`: any): *AxiosPromise‹any›*

* **listApplicationTypeSources**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[SourcesCollection](interfaces/sourcescollection.md)›*

* **listApplicationTypes**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ApplicationTypesCollection](interfaces/applicationtypescollection.md)›*

* **listApplications**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ApplicationsCollection](interfaces/applicationscollection.md)›*

* **listAuthentications**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[AuthenticationsCollection](interfaces/authenticationscollection.md)›*

* **listEndpointAuthentications**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[AuthenticationsCollection](interfaces/authenticationscollection.md)›*

* **listEndpoints**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[EndpointsCollection](interfaces/endpointscollection.md)›*

* **listSourceApplicationTypes**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ApplicationTypesCollection](interfaces/applicationtypescollection.md)›*

* **listSourceApplications**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ApplicationsCollection](interfaces/applicationscollection.md)›*

* **listSourceEndpoints**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[EndpointsCollection](interfaces/endpointscollection.md)›*

* **listSourceTypeSources**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[SourcesCollection](interfaces/sourcescollection.md)›*

* **listSourceTypes**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[SourceTypesCollection](interfaces/sourcetypescollection.md)›*

* **listSources**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[SourcesCollection](interfaces/sourcescollection.md)›*

* **postGraphQL**(`graphQLRequest`: [GraphQLRequest](interfaces/graphqlrequest.md), `options?`: any): *AxiosPromise‹[GraphQLResponse](interfaces/graphqlresponse.md)›*

* **showApplication**(`id`: string, `options?`: any): *AxiosPromise‹[Application](interfaces/application.md)›*

* **showApplicationType**(`id`: string, `options?`: any): *AxiosPromise‹[ApplicationType](interfaces/applicationtype.md)›*

* **showAuthentication**(`id`: string, `options?`: any): *AxiosPromise‹[Authentication](interfaces/authentication.md)›*

* **showEndpoint**(`id`: string, `options?`: any): *AxiosPromise‹[Endpoint](interfaces/endpoint.md)›*

* **showSource**(`id`: string, `options?`: any): *AxiosPromise‹[Source](interfaces/source.md)›*

* **showSourceType**(`id`: string, `options?`: any): *AxiosPromise‹[SourceType](interfaces/sourcetype.md)›*

* **updateApplication**(`id`: string, `application`: [Application](interfaces/application.md), `options?`: any): *AxiosPromise‹Response›*

* **updateAuthentication**(`id`: string, `authentication`: [Authentication](interfaces/authentication.md), `options?`: any): *AxiosPromise‹Response›*

* **updateEndpoint**(`id`: string, `endpoint`: [Endpoint](interfaces/endpoint.md), `options?`: any): *AxiosPromise‹Response›*

* **updateSource**(`id`: string, `source`: [Source](interfaces/source.md), `options?`: any): *AxiosPromise‹Response›*

___

### `Const` DefaultApiFp

▸ **DefaultApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:2444](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L2444)*

DefaultApi - functional programming interface

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **checkAvailabilitySource**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹Response›*

* **createApplication**(`application`: [Application](interfaces/application.md), `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[Application](interfaces/application.md)›*

* **createAuthentication**(`authentication`: [Authentication](interfaces/authentication.md), `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[Authentication](interfaces/authentication.md)›*

* **createEndpoint**(`endpoint`: [Endpoint](interfaces/endpoint.md), `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[Endpoint](interfaces/endpoint.md)›*

* **createSource**(`source`: [Source](interfaces/source.md), `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[Source](interfaces/source.md)›*

* **createSourceType**(`sourceType`: [SourceType](interfaces/sourcetype.md), `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[SourceType](interfaces/sourcetype.md)›*

* **deleteApplication**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹Response›*

* **deleteAuthentication**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹Response›*

* **deleteEndpoint**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹Response›*

* **deleteSource**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹Response›*

* **getDocumentation**(`options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹any›*

* **listApplicationTypeSources**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[SourcesCollection](interfaces/sourcescollection.md)›*

* **listApplicationTypes**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ApplicationTypesCollection](interfaces/applicationtypescollection.md)›*

* **listApplications**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ApplicationsCollection](interfaces/applicationscollection.md)›*

* **listAuthentications**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[AuthenticationsCollection](interfaces/authenticationscollection.md)›*

* **listEndpointAuthentications**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[AuthenticationsCollection](interfaces/authenticationscollection.md)›*

* **listEndpoints**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[EndpointsCollection](interfaces/endpointscollection.md)›*

* **listSourceApplicationTypes**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ApplicationTypesCollection](interfaces/applicationtypescollection.md)›*

* **listSourceApplications**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ApplicationsCollection](interfaces/applicationscollection.md)›*

* **listSourceEndpoints**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[EndpointsCollection](interfaces/endpointscollection.md)›*

* **listSourceTypeSources**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[SourcesCollection](interfaces/sourcescollection.md)›*

* **listSourceTypes**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[SourceTypesCollection](interfaces/sourcetypescollection.md)›*

* **listSources**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[SourcesCollection](interfaces/sourcescollection.md)›*

* **postGraphQL**(`graphQLRequest`: [GraphQLRequest](interfaces/graphqlrequest.md), `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[GraphQLResponse](interfaces/graphqlresponse.md)›*

* **showApplication**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[Application](interfaces/application.md)›*

* **showApplicationType**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ApplicationType](interfaces/applicationtype.md)›*

* **showAuthentication**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[Authentication](interfaces/authentication.md)›*

* **showEndpoint**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[Endpoint](interfaces/endpoint.md)›*

* **showSource**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[Source](interfaces/source.md)›*

* **showSourceType**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[SourceType](interfaces/sourcetype.md)›*

* **updateApplication**(`id`: string, `application`: [Application](interfaces/application.md), `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹Response›*

* **updateAuthentication**(`id`: string, `authentication`: [Authentication](interfaces/authentication.md), `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹Response›*

* **updateEndpoint**(`id`: string, `endpoint`: [Endpoint](interfaces/endpoint.md), `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹Response›*

* **updateSource**(`id`: string, `source`: [Source](interfaces/source.md), `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹Response›*

## Object literals

### `Const` COLLECTION_FORMATS

### ▪ **COLLECTION_FORMATS**: *object*

*Defined in [api.ts:26](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L26)*

**`export`** 

###  csv

• **csv**: *string* = ","

*Defined in [api.ts:27](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L27)*

###  pipes

• **pipes**: *string* = "|"

*Defined in [api.ts:30](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L30)*

###  ssv

• **ssv**: *string* = " "

*Defined in [api.ts:28](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L28)*

###  tsv

• **tsv**: *string* = "	"

*Defined in [api.ts:29](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L29)*
