[@redhat-cloud-services/approval-client](../README.md) > [ActionApi](../classes/actionapi.md)

# Class: ActionApi

ActionApi - object-oriented interface

*__export__*: 

*__class__*: ActionApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ ActionApi**

## Index

### Constructors

* [constructor](actionapi.md#constructor)

### Properties

* [axios](actionapi.md#axios)
* [basePath](actionapi.md#basepath)
* [configuration](actionapi.md#configuration)

### Methods

* [createAction](actionapi.md#createaction)
* [listActionsByStage](actionapi.md#listactionsbystage)
* [showAction](actionapi.md#showaction)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ActionApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): [ActionApi](actionapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L49)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` axios | `AxiosInstance` |  globalAxios |

**Returns:** [ActionApi](actionapi.md)

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

<a id="createaction"></a>

###  createAction

▸ **createAction**(stageId: *`number`*, actionIn: *[ActionIn](../modules/actionin.md)*, options?: *`any`*): `AxiosPromise`<[ActionOut](../modules/actionout.md)>

*Defined in [api.ts:878](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L878)*

Add an action to a given stage

*__summary__*: Add an action to a given stage

*__throws__*: {RequiredError}

*__memberof__*: ActionApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| stageId | `number` |  Id of stage |
| actionIn | [ActionIn](../modules/actionin.md) |  Action object that will be added |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ActionOut](../modules/actionout.md)>

___
<a id="listactionsbystage"></a>

###  listActionsByStage

▸ **listActionsByStage**(stageId: *`number`*, options?: *`any`*): `AxiosPromise`<[ActionOutCollection](../interfaces/actionoutcollection.md)>

*Defined in [api.ts:890](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L890)*

List all actions of a stage

*__summary__*: Return actions in a given stage

*__throws__*: {RequiredError}

*__memberof__*: ActionApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| stageId | `number` |  Id of stage |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ActionOutCollection](../interfaces/actionoutcollection.md)>

___
<a id="showaction"></a>

###  showAction

▸ **showAction**(id: *`number`*, options?: *`any`*): `AxiosPromise`<[ActionOut](../modules/actionout.md)>

*Defined in [api.ts:902](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L902)*

Return an user action by id

*__summary__*: Return an user action by id

*__throws__*: {RequiredError}

*__memberof__*: ActionApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `number` |  Query by id |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ActionOut](../modules/actionout.md)>

___

