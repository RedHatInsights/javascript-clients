[@redhat-cloud-services/cost-management-client](../README.md) › [Globals](../globals.md) › [SourcesApi](sourcesapi.md)

# Class: SourcesApi

SourcesApi - object-oriented interface

**`export`** 

**`class`** SourcesApi

**`extends`** {BaseAPI}

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **SourcesApi**

## Index

### Constructors

* [constructor](sourcesapi.md#constructor)

### Properties

* [axios](sourcesapi.md#protected-axios)
* [basePath](sourcesapi.md#protected-basepath)
* [configuration](sourcesapi.md#protected-configuration)

### Methods

* [getSource](sourcesapi.md#getsource)
* [getSourceStats](sourcesapi.md#getsourcestats)
* [listSources](sourcesapi.md#listsources)
* [updateSource](sourcesapi.md#updatesource)

## Constructors

###  constructor

\+ **new SourcesApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[SourcesApi](sourcesapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`axios` | AxiosInstance |  globalAxios |

**Returns:** *[SourcesApi](sourcesapi.md)*

## Properties

### `Protected` axios

• **axios**: *AxiosInstance*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#protected-axios)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L51)*

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L51)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L49)*

## Methods

###  getSource

▸ **getSource**(`sourceId`: number, `options?`: any): *AxiosPromise‹[SourceOut](../interfaces/sourceout.md)›*

*Defined in [api.ts:6106](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L6106)*

**`summary`** Get a source

**`throws`** {RequiredError}

**`memberof`** SourcesApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`sourceId` | number | ID of source to get |
`options?` | any | - |

**Returns:** *AxiosPromise‹[SourceOut](../interfaces/sourceout.md)›*

___

###  getSourceStats

▸ **getSourceStats**(`sourceId`: number, `options?`: any): *AxiosPromise‹any›*

*Defined in [api.ts:6118](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L6118)*

**`summary`** Get a source statistics

**`throws`** {RequiredError}

**`memberof`** SourcesApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`sourceId` | number | ID of source to get |
`options?` | any | - |

**Returns:** *AxiosPromise‹any›*

___

###  listSources

▸ **listSources**(`type?`: string, `name?`: string, `offset?`: number, `limit?`: number, `options?`: any): *AxiosPromise‹[SourcePagination](../interfaces/sourcepagination.md)›*

*Defined in [api.ts:6133](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L6133)*

**`summary`** List the sources

**`throws`** {RequiredError}

**`memberof`** SourcesApi

**Parameters:**

Name | Type |
------ | ------ |
`type?` | string |
`name?` | string |
`offset?` | number |
`limit?` | number |
`options?` | any |

**Returns:** *AxiosPromise‹[SourcePagination](../interfaces/sourcepagination.md)›*

___

###  updateSource

▸ **updateSource**(`sourceId`: number, `sourceIn`: [SourceIn](../interfaces/sourcein.md), `options?`: any): *AxiosPromise‹[SourceOut](../interfaces/sourceout.md)›*

*Defined in [api.ts:6146](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L6146)*

**`summary`** Update a source

**`throws`** {RequiredError}

**`memberof`** SourcesApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`sourceId` | number | ID of source to update |
`sourceIn` | [SourceIn](../interfaces/sourcein.md) | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[SourceOut](../interfaces/sourceout.md)›*
