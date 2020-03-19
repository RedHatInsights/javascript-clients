[@redhat-cloud-services/cost-management-client](../README.md) > [SourcesApi](../classes/sourcesapi.md)

# Class: SourcesApi

SourcesApi - object-oriented interface

*__export__*: 

*__class__*: SourcesApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ SourcesApi**

## Index

### Constructors

* [constructor](sourcesapi.md#constructor)

### Properties

* [axios](sourcesapi.md#axios)
* [basePath](sourcesapi.md#basepath)
* [configuration](sourcesapi.md#configuration)

### Methods

* [getSource](sourcesapi.md#getsource)
* [getSourceStats](sourcesapi.md#getsourcestats)
* [listSources](sourcesapi.md#listsources)
* [updateSource](sourcesapi.md#updatesource)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new SourcesApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): [SourcesApi](sourcesapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L49)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` axios | `AxiosInstance` |  globalAxios |

**Returns:** [SourcesApi](sourcesapi.md)

___

## Properties

<a id="axios"></a>

### `<Protected>` axios

**● axios**: *`AxiosInstance`*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#axios)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L51)*

___
<a id="basepath"></a>

### `<Protected>` basePath

**● basePath**: *`string`*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#basepath)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L51)*

___
<a id="configuration"></a>

### `<Protected>` configuration

**● configuration**: *[Configuration](configuration.md) \| `undefined`*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#configuration)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L49)*

___

## Methods

<a id="getsource"></a>

###  getSource

▸ **getSource**(sourceId: *`number`*, options?: *`any`*): `AxiosPromise`<[SourceOut](../interfaces/sourceout.md)>

*Defined in [api.ts:6106](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L6106)*

*__summary__*: Get a source

*__throws__*: {RequiredError}

*__memberof__*: SourcesApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| sourceId | `number` |  ID of source to get |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[SourceOut](../interfaces/sourceout.md)>

___
<a id="getsourcestats"></a>

###  getSourceStats

▸ **getSourceStats**(sourceId: *`number`*, options?: *`any`*): `AxiosPromise`<`any`>

*Defined in [api.ts:6118](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L6118)*

*__summary__*: Get a source statistics

*__throws__*: {RequiredError}

*__memberof__*: SourcesApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| sourceId | `number` |  ID of source to get |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<`any`>

___
<a id="listsources"></a>

###  listSources

▸ **listSources**(type?: *`string`*, name?: *`string`*, offset?: *`number`*, limit?: *`number`*, options?: *`any`*): `AxiosPromise`<[SourcePagination](../interfaces/sourcepagination.md)>

*Defined in [api.ts:6133](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L6133)*

*__summary__*: List the sources

*__throws__*: {RequiredError}

*__memberof__*: SourcesApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` type | `string` |
| `Optional` name | `string` |
| `Optional` offset | `number` |
| `Optional` limit | `number` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[SourcePagination](../interfaces/sourcepagination.md)>

___
<a id="updatesource"></a>

###  updateSource

▸ **updateSource**(sourceId: *`number`*, sourceIn: *[SourceIn](../interfaces/sourcein.md)*, options?: *`any`*): `AxiosPromise`<[SourceOut](../interfaces/sourceout.md)>

*Defined in [api.ts:6146](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L6146)*

*__summary__*: Update a source

*__throws__*: {RequiredError}

*__memberof__*: SourcesApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| sourceId | `number` |  ID of source to update |
| sourceIn | [SourceIn](../interfaces/sourcein.md) |  \- |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[SourceOut](../interfaces/sourceout.md)>

___

