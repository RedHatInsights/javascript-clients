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
* [listActionsByRequest](actionapi.md#listactionsbyrequest)
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

▸ **createAction**(requestId: *`string`*, action: *[Action](../modules/action.md)*, options?: *`any`*): `AxiosPromise`<[Action](../modules/action.md)>

*Defined in [api.ts:900](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L900)*

Add an action to a given request, available for admin/approver/requester

*__summary__*: Add an action to a given request

*__throws__*: {RequiredError}

*__memberof__*: ActionApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| requestId | `string` |  Id of request |
| action | [Action](../modules/action.md) |  Action object that will be added |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[Action](../modules/action.md)>

___
<a id="listactionsbyrequest"></a>

###  listActionsByRequest

▸ **listActionsByRequest**(requestId: *`string`*, options?: *`any`*): `AxiosPromise`<[ActionCollection](../interfaces/actioncollection.md)>

*Defined in [api.ts:912](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L912)*

Return actions in a given request, available for admin/approver

*__summary__*: List all actions of a request

*__throws__*: {RequiredError}

*__memberof__*: ActionApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| requestId | `string` |  Id of request |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ActionCollection](../interfaces/actioncollection.md)>

___
<a id="showaction"></a>

###  showAction

▸ **showAction**(id: *`string`*, options?: *`any`*): `AxiosPromise`<[Action](../modules/action.md)>

*Defined in [api.ts:924](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L924)*

Return an user action by id, available to all

*__summary__*: Return an user action by id

*__throws__*: {RequiredError}

*__memberof__*: ActionApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  Query by id |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[Action](../modules/action.md)>

___

