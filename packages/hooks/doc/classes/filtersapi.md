[@redhat-cloud-services/notifications-client](../README.md) › [Globals](../globals.md) › [FiltersApi](filtersapi.md)

# Class: FiltersApi

FiltersApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **FiltersApi**

## Index

### Constructors

* [constructor](filtersapi.md#constructor)

### Properties

* [axios](filtersapi.md#protected-axios)
* [basePath](filtersapi.md#protected-basepath)
* [configuration](filtersapi.md#protected-configuration)

### Methods

* [filtersShow](filtersapi.md#filtersshow)

## Constructors

###  constructor

\+ **new FiltersApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[FiltersApi](filtersapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

Defined in packages/hooks/base.ts:49

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** *[FiltersApi](filtersapi.md)*

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

###  filtersShow

▸ **filtersShow**(`xRHIDENTITY`: string, `endpointId`: number, `options?`: any): *AxiosPromise‹[InlineResponse2004](../interfaces/inlineresponse2004.md)›*

*Defined in [packages/hooks/api.ts:1835](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L1835)*

Show the filter of the endpoint

**`throws`** {RequiredError}

**`memberof`** FiltersApi

**Parameters:**

Name | Type |
------ | ------ |
`xRHIDENTITY` | string |
`endpointId` | number |
`options?` | any |

**Returns:** *AxiosPromise‹[InlineResponse2004](../interfaces/inlineresponse2004.md)›*
