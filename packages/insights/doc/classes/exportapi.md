[@redhat-cloud-services/insights-client](../README.md) › [Globals](../globals.md) › [ExportApi](exportapi.md)

# Class: ExportApi

ExportApi - object-oriented interface

**`export`** 

**`class`** ExportApi

**`extends`** {BaseAPI}

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **ExportApi**

## Index

### Constructors

* [constructor](exportapi.md#constructor)

### Properties

* [axios](exportapi.md#protected-axios)
* [basePath](exportapi.md#protected-basepath)
* [configuration](exportapi.md#protected-configuration)

### Methods

* [exportHitsList](exportapi.md#exporthitslist)
* [exportListCsv](exportapi.md#exportlistcsv)
* [exportListJson](exportapi.md#exportlistjson)

## Constructors

###  constructor

\+ **new ExportApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[ExportApi](exportapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`axios` | AxiosInstance |  globalAxios |

**Returns:** *[ExportApi](exportapi.md)*

## Properties

### `Protected` axios

• **axios**: *AxiosInstance*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#protected-axios)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L51)*

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L51)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L49)*

## Methods

###  exportHitsList

▸ **exportHitsList**(`category?`: Array‹1 | 2 | 3 | 4›, `impact?`: Array‹1 | 2 | 3 | 4›, `likelihood?`: Array‹1 | 2 | 3 | 4›, `resRisk?`: Array‹1 | 2 | 3 | 4›, `text?`: string, `totalRisk?`: Array‹1 | 2 | 3 | 4›, `tags?`: Array‹string›, `options?`: any): *AxiosPromise‹[InlineResponse2001](../interfaces/inlineresponse2001.md)[]›*

*Defined in [api.ts:2232](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L2232)*

We also only present active, non-acked (on an account AND host level) rules.  Inventory data may be requested if Advisor has not seen all the hosts. The accepted content type supplied in the request headers is used to determine the supplied content type.

**`summary`** Get each host and all rules currently affecting it.

**`throws`** {RequiredError}

**`memberof`** ExportApi

**Parameters:**

Name | Type |
------ | ------ |
`category?` | Array‹1 &#124; 2 &#124; 3 &#124; 4› |
`impact?` | Array‹1 &#124; 2 &#124; 3 &#124; 4› |
`likelihood?` | Array‹1 &#124; 2 &#124; 3 &#124; 4› |
`resRisk?` | Array‹1 &#124; 2 &#124; 3 &#124; 4› |
`text?` | string |
`totalRisk?` | Array‹1 &#124; 2 &#124; 3 &#124; 4› |
`tags?` | Array‹string› |
`options?` | any |

**Returns:** *AxiosPromise‹[InlineResponse2001](../interfaces/inlineresponse2001.md)[]›*

___

###  exportListCsv

▸ **exportListCsv**(`category?`: Array‹1 | 2 | 3 | 4›, `impact?`: Array‹1 | 2 | 3 | 4›, `likelihood?`: Array‹1 | 2 | 3 | 4›, `resRisk?`: Array‹1 | 2 | 3 | 4›, `text?`: string, `totalRisk?`: Array‹1 | 2 | 3 | 4›, `tags?`: Array‹string›, `options?`: any): *AxiosPromise‹Response›*

*Defined in [api.ts:2250](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L2250)*

The accepted content type is not required.

**`summary`** Supply the hits list in CSV format.

**`throws`** {RequiredError}

**`memberof`** ExportApi

**Parameters:**

Name | Type |
------ | ------ |
`category?` | Array‹1 &#124; 2 &#124; 3 &#124; 4› |
`impact?` | Array‹1 &#124; 2 &#124; 3 &#124; 4› |
`likelihood?` | Array‹1 &#124; 2 &#124; 3 &#124; 4› |
`resRisk?` | Array‹1 &#124; 2 &#124; 3 &#124; 4› |
`text?` | string |
`totalRisk?` | Array‹1 &#124; 2 &#124; 3 &#124; 4› |
`tags?` | Array‹string› |
`options?` | any |

**Returns:** *AxiosPromise‹Response›*

___

###  exportListJson

▸ **exportListJson**(`category?`: Array‹1 | 2 | 3 | 4›, `impact?`: Array‹1 | 2 | 3 | 4›, `likelihood?`: Array‹1 | 2 | 3 | 4›, `resRisk?`: Array‹1 | 2 | 3 | 4›, `text?`: string, `totalRisk?`: Array‹1 | 2 | 3 | 4›, `tags?`: Array‹string›, `options?`: any): *AxiosPromise‹[InlineResponse2001](../interfaces/inlineresponse2001.md)[]›*

*Defined in [api.ts:2268](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L2268)*

The accepted content type is not required.

**`summary`** Supply the hits list in JSON format.

**`throws`** {RequiredError}

**`memberof`** ExportApi

**Parameters:**

Name | Type |
------ | ------ |
`category?` | Array‹1 &#124; 2 &#124; 3 &#124; 4› |
`impact?` | Array‹1 &#124; 2 &#124; 3 &#124; 4› |
`likelihood?` | Array‹1 &#124; 2 &#124; 3 &#124; 4› |
`resRisk?` | Array‹1 &#124; 2 &#124; 3 &#124; 4› |
`text?` | string |
`totalRisk?` | Array‹1 &#124; 2 &#124; 3 &#124; 4› |
`tags?` | Array‹string› |
`options?` | any |

**Returns:** *AxiosPromise‹[InlineResponse2001](../interfaces/inlineresponse2001.md)[]›*
