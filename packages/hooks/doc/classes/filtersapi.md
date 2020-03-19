[@redhat-cloud-services/notifications-client](../README.md) › [Globals](../globals.md) › [FiltersApi](filtersapi.md)

# Class: FiltersApi

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

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`axios` | AxiosInstance |  globalAxios |

**Returns:** *[FiltersApi](filtersapi.md)*

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

###  filtersShow

▸ **filtersShow**(`X_RH_IDENTITY`: string, `endpointId`: number, `options?`: any): *AxiosPromise‹[InlineResponse2004](../interfaces/inlineresponse2004.md)›*

*Defined in [api.ts:1918](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L1918)*

**Parameters:**

Name | Type |
------ | ------ |
`X_RH_IDENTITY` | string |
`endpointId` | number |
`options?` | any |

**Returns:** *AxiosPromise‹[InlineResponse2004](../interfaces/inlineresponse2004.md)›*
