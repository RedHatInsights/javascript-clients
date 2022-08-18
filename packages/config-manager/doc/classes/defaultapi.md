[@redhat-cloud-services/config-manager-client](../README.md) › [Globals](../globals.md) › [DefaultApi](defaultapi.md)

# Class: DefaultApi

DefaultApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **DefaultApi**

## Index

### Constructors

* [constructor](defaultapi.md#constructor)

### Properties

* [axios](defaultapi.md#protected-axios)
* [basePath](defaultapi.md#protected-basepath)
* [configuration](defaultapi.md#protected-configuration)

### Methods

* [getCurrentState](defaultapi.md#getcurrentstate)
* [getPlaybookById](defaultapi.md#getplaybookbyid)
* [getPlaybookPreview](defaultapi.md#getplaybookpreview)
* [getStateById](defaultapi.md#getstatebyid)
* [getStates](defaultapi.md#getstates)
* [postManage](defaultapi.md#postmanage)
* [updateStates](defaultapi.md#updatestates)

## Constructors

###  constructor

\+ **new DefaultApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[DefaultApi](defaultapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/config-manager/base.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** *[DefaultApi](defaultapi.md)*

## Properties

### `Protected` axios

• **axios**: *AxiosInstance*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#protected-axios)*

*Defined in [base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/config-manager/base.ts#L51)*

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

*Defined in [base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/config-manager/base.ts#L51)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/config-manager/base.ts#L49)*

## Methods

###  getCurrentState

▸ **getCurrentState**(`options?`: any): *Promise‹AxiosResponse‹[AccountState](../interfaces/accountstate.md)››*

*Defined in [api.ts:674](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/config-manager/api.ts#L674)*

**`summary`** Get the current state for requesting account

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[AccountState](../interfaces/accountstate.md)››*

___

###  getPlaybookById

▸ **getPlaybookById**(`id`: string, `options?`: any): *Promise‹AxiosResponse‹string››*

*Defined in [api.ts:686](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/config-manager/api.ts#L686)*

**`summary`** Get ansible playbook for current state configuration

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | state archive identifier |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹string››*

___

###  getPlaybookPreview

▸ **getPlaybookPreview**(`state`: [State](../interfaces/state.md), `options?`: any): *Promise‹AxiosResponse‹string››*

*Defined in [api.ts:698](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/config-manager/api.ts#L698)*

**`summary`** Get a preview of the playbook built from the provided state map

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`state` | [State](../interfaces/state.md) | State map used to generate a preview playbook |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹string››*

___

###  getStateById

▸ **getStateById**(`id`: string, `options?`: any): *Promise‹AxiosResponse‹[StateArchive](../interfaces/statearchive.md)››*

*Defined in [api.ts:710](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/config-manager/api.ts#L710)*

**`summary`** Get single state change for requesting account

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | state archive identifier |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[StateArchive](../interfaces/statearchive.md)››*

___

###  getStates

▸ **getStates**(`limit?`: number, `offset?`: number, `sortBy?`: "created_at" | "created_at:asc" | "created_at:desc", `options?`: any): *Promise‹AxiosResponse‹[StateArchives](../interfaces/statearchives.md)››*

*Defined in [api.ts:724](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/config-manager/api.ts#L724)*

**`summary`** Get archive of state changes for requesting account

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`sortBy?` | "created_at" &#124; "created_at:asc" &#124; "created_at:desc" |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[StateArchives](../interfaces/statearchives.md)››*

___

###  postManage

▸ **postManage**(`body?`: boolean, `options?`: any): *Promise‹AxiosResponse‹void››*

*Defined in [api.ts:736](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/config-manager/api.ts#L736)*

Send an HTTP POST method to this path to enable or disable automatic management of remote hosts. The request body must be set to either `true` or `false`.

**`summary`** Enable or disable automatic state management of remote hosts

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`body?` | boolean |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹void››*

___

###  updateStates

▸ **updateStates**(`state`: [State](../interfaces/state.md), `options?`: any): *Promise‹AxiosResponse‹[AccountState](../interfaces/accountstate.md)››*

*Defined in [api.ts:748](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/config-manager/api.ts#L748)*

**`summary`** Update and roll out configuration state for requesting account

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`state` | [State](../interfaces/state.md) | State map that needs to be updated |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[AccountState](../interfaces/accountstate.md)››*
