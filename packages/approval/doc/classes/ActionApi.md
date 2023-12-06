[@redhat-cloud-services/approval-client](../README.md) / [Exports](../modules.md) / ActionApi

# Class: ActionApi

ActionApi - object-oriented interface

**`Export`**

## Hierarchy

- `BaseAPI`

  ↳ **`ActionApi`**

## Table of contents

### Constructors

- [constructor](ActionApi.md#constructor)

### Properties

- [axios](ActionApi.md#axios)
- [basePath](ActionApi.md#basepath)
- [configuration](ActionApi.md#configuration)

### Methods

- [createAction](ActionApi.md#createaction)
- [listActionsByRequest](ActionApi.md#listactionsbyrequest)
- [showAction](ActionApi.md#showaction)

## Constructors

### constructor

• **new ActionApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[base.ts:51](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/approval/base.ts#L51)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

BaseAPI.axios

#### Defined in

[base.ts:51](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/approval/base.ts#L51)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

BaseAPI.basePath

#### Defined in

[base.ts:51](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/approval/base.ts#L51)

___

### configuration

• `Protected` **configuration**: [`Configuration`](Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[base.ts:49](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/approval/base.ts#L49)

## Methods

### createAction

▸ **createAction**(`requestId`, `action`, `options?`): `Promise`<`AxiosResponse`<[`Action`](../interfaces/Action.md), `any`\>\>

Create an action under a request identified by its id. Admin can create approve, deny, memo, and cancel operations; approver can create approve, deny, and memo operations; while requester can create only cancel operation.

**`Summary`**

Create an action under the request

**`Throws`**

**`Memberof`**

ActionApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestId` | `string` | ID of a request |
| `action` | [`Action`](../interfaces/Action.md) | Action object that needs to be added |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`Action`](../interfaces/Action.md), `any`\>\>

#### Defined in

[api.ts:899](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/approval/api.ts#L899)

___

### listActionsByRequest

▸ **listActionsByRequest**(`requestId`, `options?`): `Promise`<`AxiosResponse`<[`ActionCollection`](../interfaces/ActionCollection.md), `any`\>\>

Find actions of a request identified by its id, available to everyone

**`Summary`**

List all actions of a request

**`Throws`**

**`Memberof`**

ActionApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestId` | `string` | ID of a request |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ActionCollection`](../interfaces/ActionCollection.md), `any`\>\>

#### Defined in

[api.ts:911](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/approval/api.ts#L911)

___

### showAction

▸ **showAction**(`id`, `options?`): `Promise`<`AxiosResponse`<[`Action`](../interfaces/Action.md), `any`\>\>

Find an action by its id, available to everyone

**`Summary`**

Return an action

**`Throws`**

**`Memberof`**

ActionApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID used to select a resource |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`Action`](../interfaces/Action.md), `any`\>\>

#### Defined in

[api.ts:923](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/approval/api.ts#L923)
