[@redhat-cloud-services/notifications-client](../README.md) › [Globals](../globals.md) › [EndpointsApi](endpointsapi.md)

# Class: EndpointsApi

EndpointsApi - object-oriented interface

**`export`** 

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

Defined in packages/hooks/base.ts:49

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** *[EndpointsApi](endpointsapi.md)*

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

###  endpointsCreate

▸ **endpointsCreate**(`xRHIDENTITY`: string, `inlineObject1`: [InlineObject1](../interfaces/inlineobject1.md), `options?`: any): *AxiosPromise‹[InlineResponse201](../interfaces/inlineresponse201.md)›*

*Defined in [packages/hooks/api.ts:1655](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L1655)*

Creates an endpoint

**`throws`** {RequiredError}

**`memberof`** EndpointsApi

**Parameters:**

Name | Type |
------ | ------ |
`xRHIDENTITY` | string |
`inlineObject1` | [InlineObject1](../interfaces/inlineobject1.md) |
`options?` | any |

**Returns:** *AxiosPromise‹[InlineResponse201](../interfaces/inlineresponse201.md)›*

___

###  endpointsDestroy

▸ **endpointsDestroy**(`xRHIDENTITY`: string, `id`: number, `options?`: any): *AxiosPromise‹void›*

*Defined in [packages/hooks/api.ts:1667](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L1667)*

**`throws`** {RequiredError}

**`memberof`** EndpointsApi

**Parameters:**

Name | Type |
------ | ------ |
`xRHIDENTITY` | string |
`id` | number |
`options?` | any |

**Returns:** *AxiosPromise‹void›*

___

###  endpointsIndex

▸ **endpointsIndex**(`xRHIDENTITY`: string, `order?`: string, `offset?`: number, `limit?`: number, `options?`: any): *AxiosPromise‹[InlineResponse2003](../interfaces/inlineresponse2003.md)›*

*Defined in [packages/hooks/api.ts:1681](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L1681)*

List all endpoints

**`throws`** {RequiredError}

**`memberof`** EndpointsApi

**Parameters:**

Name | Type |
------ | ------ |
`xRHIDENTITY` | string |
`order?` | string |
`offset?` | number |
`limit?` | number |
`options?` | any |

**Returns:** *AxiosPromise‹[InlineResponse2003](../interfaces/inlineresponse2003.md)›*

___

###  endpointsShow

▸ **endpointsShow**(`xRHIDENTITY`: string, `id`: number, `options?`: any): *AxiosPromise‹[InlineResponse201](../interfaces/inlineresponse201.md)›*

*Defined in [packages/hooks/api.ts:1693](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L1693)*

Shows the requested endpoint

**`throws`** {RequiredError}

**`memberof`** EndpointsApi

**Parameters:**

Name | Type |
------ | ------ |
`xRHIDENTITY` | string |
`id` | number |
`options?` | any |

**Returns:** *AxiosPromise‹[InlineResponse201](../interfaces/inlineresponse201.md)›*

___

###  endpointsTest

▸ **endpointsTest**(`xRHIDENTITY`: string, `id`: number, `options?`: any): *AxiosPromise‹void›*

*Defined in [packages/hooks/api.ts:1705](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L1705)*

Send a test message to the endpoint

**`throws`** {RequiredError}

**`memberof`** EndpointsApi

**Parameters:**

Name | Type |
------ | ------ |
`xRHIDENTITY` | string |
`id` | number |
`options?` | any |

**Returns:** *AxiosPromise‹void›*

___

###  endpointsUpdate

▸ **endpointsUpdate**(`xRHIDENTITY`: string, `id`: number, `inlineObject2`: [InlineObject2](../interfaces/inlineobject2.md), `options?`: any): *AxiosPromise‹[InlineResponse201](../interfaces/inlineresponse201.md)›*

*Defined in [packages/hooks/api.ts:1718](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L1718)*

Updates the requested endpoint

**`throws`** {RequiredError}

**`memberof`** EndpointsApi

**Parameters:**

Name | Type |
------ | ------ |
`xRHIDENTITY` | string |
`id` | number |
`inlineObject2` | [InlineObject2](../interfaces/inlineobject2.md) |
`options?` | any |

**Returns:** *AxiosPromise‹[InlineResponse201](../interfaces/inlineresponse201.md)›*
