[@redhat-cloud-services/sources-client](README.md) / Exports

# @redhat-cloud-services/sources-client

## Table of contents

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
- [Endpoint](interfaces/Endpoint.md)
- [EndpointsCollection](interfaces/EndpointsCollection.md)
- [ErrorNotFound](interfaces/ErrorNotFound.md)
- [ErrorNotFoundErrorsInner](interfaces/ErrorNotFoundErrorsInner.md)
- [GraphQLRequest](interfaces/GraphQLRequest.md)
- [GraphQLResponse](interfaces/GraphQLResponse.md)
- [Source](interfaces/Source.md)
- [SourceType](interfaces/SourceType.md)
- [SourceTypesCollection](interfaces/SourceTypesCollection.md)
- [SourcesCollection](interfaces/SourcesCollection.md)
- [Tenant](interfaces/Tenant.md)

### Type Aliases

- [ListApplicationTypesSortByParameter](modules.md#listapplicationtypessortbyparameter)

### Functions

- [checkAvailabilitySource](modules.md#checkavailabilitysource)
- [createApplication](modules.md#createapplication)
- [createAuthentication](modules.md#createauthentication)
- [createEndpoint](modules.md#createendpoint)
- [createSource](modules.md#createsource)
- [deleteApplication](modules.md#deleteapplication)
- [deleteAuthentication](modules.md#deleteauthentication)
- [deleteEndpoint](modules.md#deleteendpoint)
- [deleteSource](modules.md#deletesource)
- [getDocumentation](modules.md#getdocumentation)
- [listApplicationTypeSources](modules.md#listapplicationtypesources)
- [listApplicationTypes](modules.md#listapplicationtypes)
- [listApplications](modules.md#listapplications)
- [listAuthentications](modules.md#listauthentications)
- [listEndpointAuthentications](modules.md#listendpointauthentications)
- [listEndpoints](modules.md#listendpoints)
- [listSourceApplicationTypes](modules.md#listsourceapplicationtypes)
- [listSourceApplications](modules.md#listsourceapplications)
- [listSourceAuthentications](modules.md#listsourceauthentications)
- [listSourceEndpoints](modules.md#listsourceendpoints)
- [listSourceTypeSources](modules.md#listsourcetypesources)
- [listSourceTypes](modules.md#listsourcetypes)
- [listSources](modules.md#listsources)
- [postGraphQL](modules.md#postgraphql)
- [showApplication](modules.md#showapplication)
- [showApplicationType](modules.md#showapplicationtype)
- [showAuthentication](modules.md#showauthentication)
- [showEndpoint](modules.md#showendpoint)
- [showSource](modules.md#showsource)
- [showSourceType](modules.md#showsourcetype)
- [updateApplication](modules.md#updateapplication)
- [updateAuthentication](modules.md#updateauthentication)
- [updateEndpoint](modules.md#updateendpoint)
- [updateSource](modules.md#updatesource)

## Type Aliases

### ListApplicationTypesSortByParameter

Ƭ **ListApplicationTypesSortByParameter**: `string`[] \| `string`

**`Export`**

#### Defined in

types/index.ts:561

## Functions

### checkAvailabilitySource

▸ **checkAvailabilitySource**(`...config`): `Promise`\<`RequestArgs`\>

Checks Availability of a Source

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`CheckAvailabilitySourceParams`] \| [`string`, `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Checks Availability of a Source

**`Throws`**

#### Defined in

CheckAvailabilitySource/index.ts:34

___

### createApplication

▸ **createApplication**(`...config`): `Promise`\<`RequestArgs`\>

Creates a Application object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`CreateApplicationParams`] \| [[`Application`](interfaces/Application.md), `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Create a new Application

**`Throws`**

#### Defined in

CreateApplication/index.ts:34

___

### createAuthentication

▸ **createAuthentication**(`...config`): `Promise`\<`RequestArgs`\>

Creates a Authentication object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`CreateAuthenticationParams`] \| [[`Authentication`](interfaces/Authentication.md), `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Create a new Authentication

**`Throws`**

#### Defined in

CreateAuthentication/index.ts:34

___

### createEndpoint

▸ **createEndpoint**(`...config`): `Promise`\<`RequestArgs`\>

Creates a Endpoint object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`CreateEndpointParams`] \| [[`Endpoint`](interfaces/Endpoint.md), `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Create a new Endpoint

**`Throws`**

#### Defined in

CreateEndpoint/index.ts:34

___

### createSource

▸ **createSource**(`...config`): `Promise`\<`RequestArgs`\>

Creates a Source object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`CreateSourceParams`] \| [[`Source`](interfaces/Source.md), `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Create a new Source

**`Throws`**

#### Defined in

CreateSource/index.ts:34

___

### deleteApplication

▸ **deleteApplication**(`...config`): `Promise`\<`RequestArgs`\>

Deletes a Application object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`string`, `AxiosRequestConfig`\<`any`\>] \| [`DeleteApplicationParams`] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Delete an existing Application

**`Throws`**

#### Defined in

DeleteApplication/index.ts:34

___

### deleteAuthentication

▸ **deleteAuthentication**(`...config`): `Promise`\<`RequestArgs`\>

Deletes a Authentication object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`string`, `AxiosRequestConfig`\<`any`\>] \| [`DeleteAuthenticationParams`] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Delete an existing Authentication

**`Throws`**

#### Defined in

DeleteAuthentication/index.ts:34

___

### deleteEndpoint

▸ **deleteEndpoint**(`...config`): `Promise`\<`RequestArgs`\>

Deletes a Endpoint object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`string`, `AxiosRequestConfig`\<`any`\>] \| [`DeleteEndpointParams`] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Delete an existing Endpoint

**`Throws`**

#### Defined in

DeleteEndpoint/index.ts:34

___

### deleteSource

▸ **deleteSource**(`...config`): `Promise`\<`RequestArgs`\>

Deletes a Source object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`string`, `AxiosRequestConfig`\<`any`\>] \| [`DeleteSourceParams`] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Delete an existing Source

**`Throws`**

#### Defined in

DeleteSource/index.ts:34

___

### getDocumentation

▸ **getDocumentation**(`...config`): `Promise`\<`RequestArgs`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`GetDocumentationParams`] \| [`AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Return this API document in JSON format

**`Throws`**

#### Defined in

GetDocumentation/index.ts:28

___

### listApplicationTypeSources

▸ **listApplicationTypeSources**(`...config`): `Promise`\<`RequestArgs`\>

Returns an array of Source objects

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`ListApplicationTypeSourcesParams`] \| [`string`, `number`, `number`, `object`, [`ListApplicationTypesSortByParameter`](modules.md#listapplicationtypessortbyparameter), `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

List Sources for ApplicationType

**`Throws`**

#### Defined in

ListApplicationTypeSources/index.ts:58

___

### listApplicationTypes

▸ **listApplicationTypes**(`...config`): `Promise`\<`RequestArgs`\>

Returns an array of ApplicationType objects

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`ListApplicationTypesParams`] \| [`number`, `number`, `object`, [`ListApplicationTypesSortByParameter`](modules.md#listapplicationtypessortbyparameter), `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

List ApplicationTypes

**`Throws`**

#### Defined in

ListApplicationTypes/index.ts:52

___

### listApplications

▸ **listApplications**(`...config`): `Promise`\<`RequestArgs`\>

Returns an array of Application objects

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`number`, `number`, `object`, [`ListApplicationTypesSortByParameter`](modules.md#listapplicationtypessortbyparameter), `AxiosRequestConfig`\<`any`\>] \| [`ListApplicationsParams`] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

List Applications

**`Throws`**

#### Defined in

ListApplications/index.ts:52

___

### listAuthentications

▸ **listAuthentications**(`...config`): `Promise`\<`RequestArgs`\>

Returns an array of Authentication objects

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`number`, `number`, `object`, [`ListApplicationTypesSortByParameter`](modules.md#listapplicationtypessortbyparameter), `AxiosRequestConfig`\<`any`\>] \| [`ListAuthenticationsParams`] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

List Authentications

**`Throws`**

#### Defined in

ListAuthentications/index.ts:52

___

### listEndpointAuthentications

▸ **listEndpointAuthentications**(`...config`): `Promise`\<`RequestArgs`\>

Returns an array of Authentication objects

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`string`, `number`, `number`, `object`, [`ListApplicationTypesSortByParameter`](modules.md#listapplicationtypessortbyparameter), `AxiosRequestConfig`\<`any`\>] \| [`ListEndpointAuthenticationsParams`] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

List Authentications for Endpoint

**`Throws`**

#### Defined in

ListEndpointAuthentications/index.ts:58

___

### listEndpoints

▸ **listEndpoints**(`...config`): `Promise`\<`RequestArgs`\>

Returns an array of Endpoint objects

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`number`, `number`, `object`, [`ListApplicationTypesSortByParameter`](modules.md#listapplicationtypessortbyparameter), `AxiosRequestConfig`\<`any`\>] \| [`ListEndpointsParams`] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

List Endpoints

**`Throws`**

#### Defined in

ListEndpoints/index.ts:52

___

### listSourceApplicationTypes

▸ **listSourceApplicationTypes**(`...config`): `Promise`\<`RequestArgs`\>

Returns an array of ApplicationType objects

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`string`, `number`, `number`, `object`, [`ListApplicationTypesSortByParameter`](modules.md#listapplicationtypessortbyparameter), `AxiosRequestConfig`\<`any`\>] \| [`ListSourceApplicationTypesParams`] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

List ApplicationTypes for Source

**`Throws`**

#### Defined in

ListSourceApplicationTypes/index.ts:58

___

### listSourceApplications

▸ **listSourceApplications**(`...config`): `Promise`\<`RequestArgs`\>

Returns an array of Application objects

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`string`, `number`, `number`, `object`, [`ListApplicationTypesSortByParameter`](modules.md#listapplicationtypessortbyparameter), `AxiosRequestConfig`\<`any`\>] \| [`ListSourceApplicationsParams`] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

List Applications for Source

**`Throws`**

#### Defined in

ListSourceApplications/index.ts:58

___

### listSourceAuthentications

▸ **listSourceAuthentications**(`...config`): `Promise`\<`RequestArgs`\>

Returns an array of Authentication objects

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`string`, `number`, `number`, `object`, [`ListApplicationTypesSortByParameter`](modules.md#listapplicationtypessortbyparameter), `AxiosRequestConfig`\<`any`\>] \| [`ListSourceAuthenticationsParams`] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

List Authentications for Source

**`Throws`**

#### Defined in

ListSourceAuthentications/index.ts:58

___

### listSourceEndpoints

▸ **listSourceEndpoints**(`...config`): `Promise`\<`RequestArgs`\>

Returns an array of Endpoint objects

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`string`, `number`, `number`, `object`, [`ListApplicationTypesSortByParameter`](modules.md#listapplicationtypessortbyparameter), `AxiosRequestConfig`\<`any`\>] \| [`ListSourceEndpointsParams`] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

List Endpoints for Source

**`Throws`**

#### Defined in

ListSourceEndpoints/index.ts:58

___

### listSourceTypeSources

▸ **listSourceTypeSources**(`...config`): `Promise`\<`RequestArgs`\>

Returns an array of Source objects

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`string`, `number`, `number`, `object`, [`ListApplicationTypesSortByParameter`](modules.md#listapplicationtypessortbyparameter), `AxiosRequestConfig`\<`any`\>] \| [`ListSourceTypeSourcesParams`] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

List Sources for SourceType

**`Throws`**

#### Defined in

ListSourceTypeSources/index.ts:58

___

### listSourceTypes

▸ **listSourceTypes**(`...config`): `Promise`\<`RequestArgs`\>

Returns an array of SourceType objects

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`number`, `number`, `object`, [`ListApplicationTypesSortByParameter`](modules.md#listapplicationtypessortbyparameter), `AxiosRequestConfig`\<`any`\>] \| [`ListSourceTypesParams`] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

List SourceTypes

**`Throws`**

#### Defined in

ListSourceTypes/index.ts:52

___

### listSources

▸ **listSources**(`...config`): `Promise`\<`RequestArgs`\>

Returns an array of Source objects

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`number`, `number`, `object`, [`ListApplicationTypesSortByParameter`](modules.md#listapplicationtypessortbyparameter), `AxiosRequestConfig`\<`any`\>] \| [`ListSourcesParams`] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

List Sources

**`Throws`**

#### Defined in

ListSources/index.ts:52

___

### postGraphQL

▸ **postGraphQL**(`...config`): `Promise`\<`RequestArgs`\>

Performs a GraphQL Query

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`PostGraphQLParams`] \| [[`GraphQLRequest`](interfaces/GraphQLRequest.md), `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Perform a GraphQL Query

**`Throws`**

#### Defined in

PostGraphQL/index.ts:34

___

### showApplication

▸ **showApplication**(`...config`): `Promise`\<`RequestArgs`\>

Returns a Application object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`string`, `AxiosRequestConfig`\<`any`\>] \| [`ShowApplicationParams`] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Show an existing Application

**`Throws`**

#### Defined in

ShowApplication/index.ts:34

___

### showApplicationType

▸ **showApplicationType**(`...config`): `Promise`\<`RequestArgs`\>

Returns a ApplicationType object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`string`, `AxiosRequestConfig`\<`any`\>] \| [`ShowApplicationTypeParams`] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Show an existing ApplicationType

**`Throws`**

#### Defined in

ShowApplicationType/index.ts:34

___

### showAuthentication

▸ **showAuthentication**(`...config`): `Promise`\<`RequestArgs`\>

Returns a Authentication object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`string`, `AxiosRequestConfig`\<`any`\>] \| [`ShowAuthenticationParams`] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Show an existing Authentication

**`Throws`**

#### Defined in

ShowAuthentication/index.ts:34

___

### showEndpoint

▸ **showEndpoint**(`...config`): `Promise`\<`RequestArgs`\>

Returns a Endpoint object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`string`, `AxiosRequestConfig`\<`any`\>] \| [`ShowEndpointParams`] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Show an existing Endpoint

**`Throws`**

#### Defined in

ShowEndpoint/index.ts:34

___

### showSource

▸ **showSource**(`...config`): `Promise`\<`RequestArgs`\>

Returns a Source object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`string`, `AxiosRequestConfig`\<`any`\>] \| [`ShowSourceParams`] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Show an existing Source

**`Throws`**

#### Defined in

ShowSource/index.ts:34

___

### showSourceType

▸ **showSourceType**(`...config`): `Promise`\<`RequestArgs`\>

Returns a SourceType object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`string`, `AxiosRequestConfig`\<`any`\>] \| [`ShowSourceTypeParams`] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Show an existing SourceType

**`Throws`**

#### Defined in

ShowSourceType/index.ts:34

___

### updateApplication

▸ **updateApplication**(`...config`): `Promise`\<`RequestArgs`\>

Updates a Application object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`UpdateApplicationParams`] \| [`string`, [`Application`](interfaces/Application.md), `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Update an existing Application

**`Throws`**

#### Defined in

UpdateApplication/index.ts:40

___

### updateAuthentication

▸ **updateAuthentication**(`...config`): `Promise`\<`RequestArgs`\>

Updates a Authentication object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`UpdateAuthenticationParams`] \| [`string`, [`Authentication`](interfaces/Authentication.md), `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Update an existing Authentication

**`Throws`**

#### Defined in

UpdateAuthentication/index.ts:40

___

### updateEndpoint

▸ **updateEndpoint**(`...config`): `Promise`\<`RequestArgs`\>

Updates a Endpoint object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`UpdateEndpointParams`] \| [`string`, [`Endpoint`](interfaces/Endpoint.md), `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Update an existing Endpoint

**`Throws`**

#### Defined in

UpdateEndpoint/index.ts:40

___

### updateSource

▸ **updateSource**(`...config`): `Promise`\<`RequestArgs`\>

Updates a Source object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`UpdateSourceParams`] \| [`string`, [`Source`](interfaces/Source.md), `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Update an existing Source

**`Throws`**

#### Defined in

UpdateSource/index.ts:40
