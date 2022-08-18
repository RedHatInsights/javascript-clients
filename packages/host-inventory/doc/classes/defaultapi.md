[@redhat-cloud-services/host-inventory-client](../README.md) › [Globals](../globals.md) › [DefaultApi](defaultapi.md)

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

* [apiSystemProfileValidateSchema](defaultapi.md#apisystemprofilevalidateschema)

## Constructors

###  constructor

\+ **new DefaultApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[DefaultApi](defaultapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/base.ts#L49)*

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

###  apiSystemProfileValidateSchema

▸ **apiSystemProfileValidateSchema**(`repoBranch`: string, `repoFork?`: string, `days?`: number, `maxMessages?`: number, `options?`: any): *Promise‹AxiosResponse‹void››*

*Defined in [api.ts:2157](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2157)*

Validates System Profile data from recent Kafka messages against a given spec, and compares it with the current one. Only HBI Admins can access this endpoint.

**`summary`** validate system profile schema

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`repoBranch` | string | The branch of the inventory-schemas repo to use |
`repoFork?` | string | - |
`days?` | number | - |
`maxMessages?` | number | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹void››*
