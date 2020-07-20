[@redhat-cloud-services/rbac-client](../README.md) › [Globals](../globals.md) › [StatusApi](statusapi.md)

# Class: StatusApi

StatusApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **StatusApi**

## Index

### Constructors

* [constructor](statusapi.md#constructor)

### Properties

* [axios](statusapi.md#protected-axios)
* [basePath](statusapi.md#protected-basepath)
* [configuration](statusapi.md#protected-configuration)

### Methods

* [getStatus](statusapi.md#getstatus)

## Constructors

###  constructor

\+ **new StatusApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[StatusApi](statusapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [packages/rbac/base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/base.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** *[StatusApi](statusapi.md)*

## Properties

### `Protected` axios

• **axios**: *AxiosInstance*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#protected-axios)*

*Defined in [packages/rbac/base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/base.ts#L51)*

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

*Defined in [packages/rbac/base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/base.ts#L51)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [packages/rbac/base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/base.ts#L49)*

## Methods

###  getStatus

▸ **getStatus**(`options?`: any): *AxiosPromise‹[Status](../interfaces/status.md)›*

*Defined in [packages/rbac/api.ts:3809](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L3809)*

**`summary`** Obtain server status

**`throws`** {RequiredError}

**`memberof`** StatusApi

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *AxiosPromise‹[Status](../interfaces/status.md)›*
