[@redhat-cloud-services/approval-client](../README.md) > [StageApi](../classes/stageapi.md)

# Class: StageApi

StageApi - object-oriented interface

*__export__*: 

*__class__*: StageApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ StageApi**

## Index

### Constructors

* [constructor](stageapi.md#constructor)

### Properties

* [axios](stageapi.md#axios)
* [basePath](stageapi.md#basepath)
* [configuration](stageapi.md#configuration)

### Methods

* [listStagesByRequest](stageapi.md#liststagesbyrequest)
* [showStage](stageapi.md#showstage)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new StageApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): [StageApi](stageapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L49)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` axios | `AxiosInstance` |  globalAxios |

**Returns:** [StageApi](stageapi.md)

___

## Properties

<a id="axios"></a>

### `<Protected>` axios

**● axios**: *`AxiosInstance`*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#axios)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L51)*

___
<a id="basepath"></a>

### `<Protected>` basePath

**● basePath**: *`string`*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#basepath)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L51)*

___
<a id="configuration"></a>

### `<Protected>` configuration

**● configuration**: *[Configuration](configuration.md) \| `undefined`*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#configuration)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L49)*

___

## Methods

<a id="liststagesbyrequest"></a>

###  listStagesByRequest

▸ **listStagesByRequest**(requestId: *`string`*, options?: *`any`*): `AxiosPromise`<[StageOutCollection](../interfaces/stageoutcollection.md)>

*Defined in [api.ts:1495](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1495)*

Return an array of stages by given request id

*__summary__*: Return an array of stages by given request id

*__throws__*: {RequiredError}

*__memberof__*: StageApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| requestId | `string` |  Id of request |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[StageOutCollection](../interfaces/stageoutcollection.md)>

___
<a id="showstage"></a>

###  showStage

▸ **showStage**(id: *`string`*, options?: *`any`*): `AxiosPromise`<[StageOut](../modules/stageout.md)>

*Defined in [api.ts:1507](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1507)*

Return an approval stage by given id

*__summary__*: Return an approval stage by given id

*__throws__*: {RequiredError}

*__memberof__*: StageApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  Query by id |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[StageOut](../modules/stageout.md)>

___

