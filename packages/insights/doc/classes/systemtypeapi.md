[@redhat-cloud-services/insights-client](../README.md) › [Globals](../globals.md) › [SystemtypeApi](systemtypeapi.md)

# Class: SystemtypeApi

SystemtypeApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **SystemtypeApi**

## Index

### Constructors

* [constructor](systemtypeapi.md#constructor)

### Properties

* [axios](systemtypeapi.md#protected-axios)
* [basePath](systemtypeapi.md#protected-basepath)
* [configuration](systemtypeapi.md#protected-configuration)

### Methods

* [systemtypeList](systemtypeapi.md#systemtypelist)
* [systemtypeRead](systemtypeapi.md#systemtyperead)

## Constructors

###  constructor

\+ **new SystemtypeApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[SystemtypeApi](systemtypeapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** *[SystemtypeApi](systemtypeapi.md)*

## Properties

### `Protected` axios

• **axios**: *AxiosInstance*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#protected-axios)*

*Defined in [base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L51)*

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

*Defined in [base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L51)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L49)*

## Methods

###  systemtypeList

▸ **systemtypeList**(`options?`: any): *Promise‹AxiosResponse‹[SystemType](../interfaces/systemtype.md)[]››*

*Defined in [api.ts:860](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L860)*

List all system types by role and product code

**`summary`** List all system types

**`throws`** {RequiredError}

**`memberof`** SystemtypeApi

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[SystemType](../interfaces/systemtype.md)[]››*

___

###  systemtypeRead

▸ **systemtypeRead**(`id`: number, `options?`: any): *Promise‹AxiosResponse‹[SystemType](../interfaces/systemtype.md)››*

*Defined in [api.ts:872](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L872)*

Retrieve details of a single system type

**`summary`** Retrieve a system type

**`throws`** {RequiredError}

**`memberof`** SystemtypeApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | number | A unique integer value identifying this system type. |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[SystemType](../interfaces/systemtype.md)››*
