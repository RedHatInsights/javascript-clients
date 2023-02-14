[@redhat-cloud-services/host-inventory-client](../README.md) › [Globals](../globals.md) › [UnleashApi](unleashapi.md)

# Class: UnleashApi

UnleashApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **UnleashApi**

## Index

### Constructors

* [constructor](unleashapi.md#constructor)

### Properties

* [axios](unleashapi.md#protected-axios)
* [basePath](unleashapi.md#protected-basepath)
* [configuration](unleashapi.md#protected-configuration)

### Methods

* [apiUnleashGetInventoryGroupsToggle](unleashapi.md#apiunleashgetinventorygroupstoggle)

## Constructors

###  constructor

\+ **new UnleashApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[UnleashApi](unleashapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/base.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** *[UnleashApi](unleashapi.md)*

## Properties

### `Protected` axios

• **axios**: *AxiosInstance*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#protected-axios)*

*Defined in [base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/base.ts#L51)*

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

*Defined in [base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/base.ts#L51)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/base.ts#L49)*

## Methods

###  apiUnleashGetInventoryGroupsToggle

▸ **apiUnleashGetInventoryGroupsToggle**(`options?`: any): *Promise‹AxiosResponse‹[UnleashToggleOut](../interfaces/unleashtoggleout.md)››*

*Defined in [api.ts:5340](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L5340)*

Returns the value of the hbi.api.inventory-groups toggle, if able to be retrieved.

**`summary`** Check whether the Groups feature is enabled

**`throws`** {RequiredError}

**`memberof`** UnleashApi

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[UnleashToggleOut](../interfaces/unleashtoggleout.md)››*
