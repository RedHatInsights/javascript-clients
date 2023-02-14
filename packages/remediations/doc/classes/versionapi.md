[@redhat-cloud-services/remediations-client](../README.md) › [Globals](../globals.md) › [VersionApi](versionapi.md)

# Class: VersionApi

VersionApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **VersionApi**

## Index

### Constructors

* [constructor](versionapi.md#constructor)

### Properties

* [axios](versionapi.md#protected-axios)
* [basePath](versionapi.md#protected-basepath)
* [configuration](versionapi.md#protected-configuration)

### Methods

* [getVersion](versionapi.md#getversion)

## Constructors

###  constructor

\+ **new VersionApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[VersionApi](versionapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/base.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** *[VersionApi](versionapi.md)*

## Properties

### `Protected` axios

• **axios**: *AxiosInstance*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#protected-axios)*

*Defined in [base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/base.ts#L51)*

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

*Defined in [base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/base.ts#L51)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/base.ts#L49)*

## Methods

###  getVersion

▸ **getVersion**(`options?`: any): *Promise‹AxiosResponse‹[InlineResponse200](../interfaces/inlineresponse200.md)››*

*Defined in [api.ts:3492](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L3492)*

Provides information about the version of the service

**`summary`** Get service version

**`throws`** {RequiredError}

**`memberof`** VersionApi

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[InlineResponse200](../interfaces/inlineresponse200.md)››*
