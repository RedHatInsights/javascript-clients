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

*Defined in [packages/approval/base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/base.ts#L49)*

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

*Defined in [packages/approval/base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/base.ts#L51)*

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

*Defined in [packages/approval/base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/base.ts#L51)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [packages/approval/base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/base.ts#L49)*

## Methods

###  createAction

▸ **createAction**(`requestId`: string, `action`: [Action](../interfaces/action.md), `options?`: any): *AxiosPromise‹[Action](../interfaces/action.md)›*

*Defined in [packages/approval/api.ts:905](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L905)*

Create an action under a request identified by its id. Admin can create approve, deny, memo, and cancel operations; approver can create approve, deny, and memo operations; while requester can create only cancel operation.

**`summary`** Create an action under the request

**`throws`** {RequiredError}

**`memberof`** ActionApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`requestId` | string | ID of a request |
`action` | [Action](../interfaces/action.md) | Action object that needs to be added |
`options?` | any | - |

**Returns:** *AxiosPromise‹[Action](../interfaces/action.md)›*

___

###  listActionsByRequest

▸ **listActionsByRequest**(`requestId`: string, `options?`: any): *AxiosPromise‹[ActionCollection](../interfaces/actioncollection.md)›*

*Defined in [packages/approval/api.ts:917](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L917)*

Find actions of a request identified by its id, available to everyone

**`summary`** List all actions of a request

**`throws`** {RequiredError}

**`memberof`** ActionApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`requestId` | string | ID of a request |
`options?` | any | - |

**Returns:** *AxiosPromise‹[ActionCollection](../interfaces/actioncollection.md)›*

___

###  showAction

▸ **showAction**(`id`: string, `options?`: any): *AxiosPromise‹[Action](../interfaces/action.md)›*

*Defined in [packages/approval/api.ts:929](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L929)*

Find an action by its id, available to everyone

**`summary`** Return an action

**`throws`** {RequiredError}

**`memberof`** ActionApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID used to select a resource |
`options?` | any | - |

**Returns:** *AxiosPromise‹[Action](../interfaces/action.md)›*
