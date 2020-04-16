[@redhat-cloud-services/notifications-client](../README.md) › [Globals](../globals.md) › [AppsApi](appsapi.md)

# Class: AppsApi

AppsApi - object-oriented interface

**`export`** 

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

Defined in packages/hooks/base.ts:49

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** *[AppsApi](appsapi.md)*

## Properties

### `Protected` axios

• **axios**: *AxiosInstance*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#protected-axios)*

Defined in packages/hooks/base.ts:51

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

Defined in packages/hooks/base.ts:51

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

Defined in packages/hooks/base.ts:49

## Methods

###  appsIndex

▸ **appsIndex**(`xRHIDENTITY`: string, `options?`: any): *AxiosPromise‹[InlineResponse200](../interfaces/inlineresponse200.md)›*

*Defined in [packages/hooks/api.ts:1159](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L1159)*

Lists all apps requested

**`throws`** {RequiredError}

**`memberof`** AppsApi

**Parameters:**

Name | Type |
------ | ------ |
`xRHIDENTITY` | string |
`options?` | any |

**Returns:** *AxiosPromise‹[InlineResponse200](../interfaces/inlineresponse200.md)›*

___

###  appsShow

▸ **appsShow**(`xRHIDENTITY`: string, `id`: number, `options?`: any): *AxiosPromise‹[InlineResponse2002](../interfaces/inlineresponse2002.md)›*

*Defined in [packages/hooks/api.ts:1171](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L1171)*

Shows the requested app

**`throws`** {RequiredError}

**`memberof`** AppsApi

**Parameters:**

Name | Type |
------ | ------ |
`xRHIDENTITY` | string |
`id` | number |
`options?` | any |

**Returns:** *AxiosPromise‹[InlineResponse2002](../interfaces/inlineresponse2002.md)›*
