[@redhat-cloud-services/approval-client](../README.md) › [Globals](../globals.md) › [ActionApi](actionapi.md)

# Class: ActionApi

ActionApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **ActionApi**

## Index

### Constructors

* [constructor](actionapi.md#constructor)

### Properties

* [axios](actionapi.md#protected-axios)
* [basePath](actionapi.md#protected-basepath)
* [configuration](actionapi.md#protected-configuration)

### Methods

* [createAction](actionapi.md#createaction)
* [listActionsByRequest](actionapi.md#listactionsbyrequest)
* [showAction](actionapi.md#showaction)

## Constructors

###  constructor

\+ **new ActionApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[ActionApi](actionapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

Defined in packages/approval/base.ts:49

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** *[ActionApi](actionapi.md)*

## Properties

### `Protected` axios

• **axios**: *AxiosInstance*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#protected-axios)*

Defined in packages/approval/base.ts:51

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

Defined in packages/approval/base.ts:51

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

Defined in packages/approval/base.ts:49

## Methods

###  createAction

▸ **createAction**(`requestId`: string, `action`: [Action](../interfaces/action.md), `options?`: any): *AxiosPromise‹[Action](../interfaces/action.md)›*

*Defined in [packages/approval/api.ts:822](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L822)*

Add an action to a given request. Admin can do approve, deny, memo, and cancel operations; approver can do approve, deny and memo operations; while requester can do only cancel operation.

**`summary`** Add an action to a given request

**`throws`** {RequiredError}

**`memberof`** ActionApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`requestId` | string | Id of request |
`action` | [Action](../interfaces/action.md) | Action object that will be added |
`options?` | any | - |

**Returns:** *AxiosPromise‹[Action](../interfaces/action.md)›*

___

###  listActionsByRequest

▸ **listActionsByRequest**(`requestId`: string, `options?`: any): *AxiosPromise‹[ActionCollection](../interfaces/actioncollection.md)›*

*Defined in [packages/approval/api.ts:834](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L834)*

Return actions in a given request, available for admin/approver

**`summary`** List all actions of a request

**`throws`** {RequiredError}

**`memberof`** ActionApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`requestId` | string | Id of request |
`options?` | any | - |

**Returns:** *AxiosPromise‹[ActionCollection](../interfaces/actioncollection.md)›*

___

###  showAction

▸ **showAction**(`id`: string, `options?`: any): *AxiosPromise‹[Action](../interfaces/action.md)›*

*Defined in [packages/approval/api.ts:846](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L846)*

Return an user action by id, available to all

**`summary`** Return an user action by id

**`throws`** {RequiredError}

**`memberof`** ActionApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | Query by id |
`options?` | any | - |

**Returns:** *AxiosPromise‹[Action](../interfaces/action.md)›*
