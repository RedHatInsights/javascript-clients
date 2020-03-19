[@redhat-cloud-services/notifications-client](../README.md) › [Globals](../globals.md) › [AppsApi](appsapi.md)

# Class: AppsApi

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **AppsApi**

## Index

### Constructors

* [constructor](appsapi.md#constructor)

### Properties

* [axios](appsapi.md#protected-axios)
* [basePath](appsapi.md#protected-basepath)
* [configuration](appsapi.md#protected-configuration)

### Methods

* [appsIndex](appsapi.md#appsindex)
* [appsShow](appsapi.md#appsshow)

## Constructors

###  constructor

\+ **new AppsApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[AppsApi](appsapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`axios` | AxiosInstance |  globalAxios |

**Returns:** *[AppsApi](appsapi.md)*

## Properties

### `Protected` axios

• **axios**: *AxiosInstance*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#protected-axios)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L51)*

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L51)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L49)*

## Methods

###  appsIndex

▸ **appsIndex**(`X_RH_IDENTITY`: string, `options?`: any): *AxiosPromise‹[InlineResponse200](../interfaces/inlineresponse200.md)›*

*Defined in [api.ts:1265](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L1265)*

**Parameters:**

Name | Type |
------ | ------ |
`X_RH_IDENTITY` | string |
`options?` | any |

**Returns:** *AxiosPromise‹[InlineResponse200](../interfaces/inlineresponse200.md)›*

___

###  appsShow

▸ **appsShow**(`X_RH_IDENTITY`: string, `id`: number, `options?`: any): *AxiosPromise‹[InlineResponse2002](../interfaces/inlineresponse2002.md)›*

*Defined in [api.ts:1277](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L1277)*

**Parameters:**

Name | Type |
------ | ------ |
`X_RH_IDENTITY` | string |
`id` | number |
`options?` | any |

**Returns:** *AxiosPromise‹[InlineResponse2002](../interfaces/inlineresponse2002.md)›*
