[@redhat-cloud-services/insights-client](../README.md) › [Globals](../globals.md) › [KcsApi](kcsapi.md)

# Class: KcsApi

KcsApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **KcsApi**

## Index

### Constructors

* [constructor](kcsapi.md#constructor)

### Properties

* [axios](kcsapi.md#protected-axios)
* [basePath](kcsapi.md#protected-basepath)
* [configuration](kcsapi.md#protected-configuration)

### Methods

* [kcsList](kcsapi.md#kcslist)
* [kcsRead](kcsapi.md#kcsread)

## Constructors

###  constructor

\+ **new KcsApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[KcsApi](kcsapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

Defined in packages/insights/base.ts:49

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** *[KcsApi](kcsapi.md)*

## Properties

### `Protected` axios

• **axios**: *AxiosInstance*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#protected-axios)*

Defined in packages/insights/base.ts:51

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

Defined in packages/insights/base.ts:51

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

Defined in packages/insights/base.ts:49

## Methods

###  kcsList

▸ **kcsList**(`options?`: any): *AxiosPromise‹[Kcs](../interfaces/kcs.md)[]›*

*Defined in [packages/insights/api.ts:2807](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L2807)*

Returns a list of dicts of the C.R.C rule URL and its KCS solution number

**`summary`** Looks for all active rules with KCS solutions

**`throws`** {RequiredError}

**`memberof`** KcsApi

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *AxiosPromise‹[Kcs](../interfaces/kcs.md)[]›*

___

###  kcsRead

▸ **kcsRead**(`nodeId`: string, `options?`: any): *AxiosPromise‹string[]›*

*Defined in [packages/insights/api.ts:2819](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L2819)*

Returns a list of C.R.C rule url(s) for that KCS solution

**`summary`** Gets active rule(s) for a particular KCS solution (node_id)

**`throws`** {RequiredError}

**`memberof`** KcsApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`nodeId` | string | KCS solution number |
`options?` | any | - |

**Returns:** *AxiosPromise‹string[]›*
