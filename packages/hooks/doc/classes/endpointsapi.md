[@redhat-cloud-services/notifications-client](../README.md) › [Globals](../globals.md) › [EndpointsApi](endpointsapi.md)

# Class: EndpointsApi

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **EndpointsApi**

## Index

### Constructors

* [constructor](endpointsapi.md#constructor)

### Properties

* [axios](endpointsapi.md#protected-axios)
* [basePath](endpointsapi.md#protected-basepath)
* [configuration](endpointsapi.md#protected-configuration)

### Methods

* [endpointsCreate](endpointsapi.md#endpointscreate)
* [endpointsDestroy](endpointsapi.md#endpointsdestroy)
* [endpointsIndex](endpointsapi.md#endpointsindex)
* [endpointsShow](endpointsapi.md#endpointsshow)
* [endpointsTest](endpointsapi.md#endpointstest)
* [endpointsUpdate](endpointsapi.md#endpointsupdate)

## Constructors

###  constructor

\+ **new EndpointsApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[EndpointsApi](endpointsapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`axios` | AxiosInstance |  globalAxios |

**Returns:** *[EndpointsApi](endpointsapi.md)*

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

###  endpointsCreate

▸ **endpointsCreate**(`X_RH_IDENTITY`: string, `inlineObject1`: [InlineObject1](../interfaces/inlineobject1.md), `options?`: any): *AxiosPromise‹[InlineResponse201](../interfaces/inlineresponse201.md)›*

*Defined in [api.ts:1742](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L1742)*

**Parameters:**

Name | Type |
------ | ------ |
`X_RH_IDENTITY` | string |
`inlineObject1` | [InlineObject1](../interfaces/inlineobject1.md) |
`options?` | any |

**Returns:** *AxiosPromise‹[InlineResponse201](../interfaces/inlineresponse201.md)›*

___

###  endpointsDestroy

▸ **endpointsDestroy**(`X_RH_IDENTITY`: string, `id`: number, `options?`: any): *AxiosPromise‹Response›*

*Defined in [api.ts:1754](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L1754)*

**Parameters:**

Name | Type |
------ | ------ |
`X_RH_IDENTITY` | string |
`id` | number |
`options?` | any |

**Returns:** *AxiosPromise‹Response›*

___

###  endpointsIndex

▸ **endpointsIndex**(`X_RH_IDENTITY`: string, `order?`: string, `offset?`: number, `limit?`: number, `options?`: any): *AxiosPromise‹[InlineResponse2003](../interfaces/inlineresponse2003.md)›*

*Defined in [api.ts:1768](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L1768)*

**Parameters:**

Name | Type |
------ | ------ |
`X_RH_IDENTITY` | string |
`order?` | string |
`offset?` | number |
`limit?` | number |
`options?` | any |

**Returns:** *AxiosPromise‹[InlineResponse2003](../interfaces/inlineresponse2003.md)›*

___

###  endpointsShow

▸ **endpointsShow**(`X_RH_IDENTITY`: string, `id`: number, `options?`: any): *AxiosPromise‹[InlineResponse201](../interfaces/inlineresponse201.md)›*

*Defined in [api.ts:1780](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L1780)*

**Parameters:**

Name | Type |
------ | ------ |
`X_RH_IDENTITY` | string |
`id` | number |
`options?` | any |

**Returns:** *AxiosPromise‹[InlineResponse201](../interfaces/inlineresponse201.md)›*

___

###  endpointsTest

▸ **endpointsTest**(`X_RH_IDENTITY`: string, `id`: number, `options?`: any): *AxiosPromise‹Response›*

*Defined in [api.ts:1792](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L1792)*

**Parameters:**

Name | Type |
------ | ------ |
`X_RH_IDENTITY` | string |
`id` | number |
`options?` | any |

**Returns:** *AxiosPromise‹Response›*

___

###  endpointsUpdate

▸ **endpointsUpdate**(`X_RH_IDENTITY`: string, `id`: number, `inlineObject2`: [InlineObject2](../interfaces/inlineobject2.md), `options?`: any): *AxiosPromise‹[InlineResponse201](../interfaces/inlineresponse201.md)›*

*Defined in [api.ts:1805](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L1805)*

**Parameters:**

Name | Type |
------ | ------ |
`X_RH_IDENTITY` | string |
`id` | number |
`inlineObject2` | [InlineObject2](../interfaces/inlineobject2.md) |
`options?` | any |

**Returns:** *AxiosPromise‹[InlineResponse201](../interfaces/inlineresponse201.md)›*
