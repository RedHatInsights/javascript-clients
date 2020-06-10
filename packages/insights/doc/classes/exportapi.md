[@redhat-cloud-services/insights-client](../README.md) › [Globals](../globals.md) › [ExportApi](exportapi.md)

# Class: ExportApi

ExportApi - object-oriented interface

**`export`** 

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
* [exportListCsv_1](exportapi.md#exportlistcsv_1)
* [exportListJson](exportapi.md#exportlistjson)
* [exportListJson_2](exportapi.md#exportlistjson_2)
* [exportSystemsList](exportapi.md#exportsystemslist)

## Constructors

###  constructor

\+ **new ExportApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[ExportApi](exportapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [packages/insights/base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** *[ExportApi](exportapi.md)*

## Properties

### `Protected` axios

• **axios**: *AxiosInstance*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#protected-axios)*

*Defined in [packages/insights/base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L51)*

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

*Defined in [packages/insights/base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L51)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [packages/insights/base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L49)*

## Methods

###  exportHitsList

▸ **exportHitsList**(`category?`: Array‹1 | 2 | 3 | 4›, `impact?`: Array‹1 | 2 | 3 | 4›, `likelihood?`: Array‹1 | 2 | 3 | 4›, `resRisk?`: Array‹1 | 2 | 3 | 4›, `text?`: string, `totalRisk?`: Array‹1 | 2 | 3 | 4›, `tags?`: Array‹string›, `options?`: any): *AxiosPromise‹[InlineResponse2001](../interfaces/inlineresponse2001.md)[]›*

*Defined in [packages/insights/api.ts:2392](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L2392)*

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

▸ **exportListCsv**(`category?`: Array‹1 | 2 | 3 | 4›, `impact?`: Array‹1 | 2 | 3 | 4›, `likelihood?`: Array‹1 | 2 | 3 | 4›, `resRisk?`: Array‹1 | 2 | 3 | 4›, `text?`: string, `totalRisk?`: Array‹1 | 2 | 3 | 4›, `tags?`: Array‹string›, `options?`: any): *AxiosPromise‹void›*

*Defined in [packages/insights/api.ts:2410](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L2410)*

The accepted content type is not required.

**`summary`** Supply the list output in CSV format.

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

**Returns:** *AxiosPromise‹void›*

___

###  exportListCsv_1

▸ **exportListCsv_1**(`displayName?`: string, `sort?`: "hits" | "last_seen" | "display_name" | "-hits" | "-last_seen" | "-display_name", `options?`: any): *AxiosPromise‹void›*

*Defined in [packages/insights/api.ts:2423](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L2423)*

The accepted content type is not required.

**`summary`** Supply the list output in CSV format.

**`throws`** {RequiredError}

**`memberof`** ExportApi

**Parameters:**

Name | Type |
------ | ------ |
`displayName?` | string |
`sort?` | "hits" &#124; "last_seen" &#124; "display_name" &#124; "-hits" &#124; "-last_seen" &#124; "-display_name" |
`options?` | any |

**Returns:** *AxiosPromise‹void›*

___

###  exportListJson

▸ **exportListJson**(`category?`: Array‹1 | 2 | 3 | 4›, `impact?`: Array‹1 | 2 | 3 | 4›, `likelihood?`: Array‹1 | 2 | 3 | 4›, `resRisk?`: Array‹1 | 2 | 3 | 4›, `text?`: string, `totalRisk?`: Array‹1 | 2 | 3 | 4›, `tags?`: Array‹string›, `options?`: any): *AxiosPromise‹[InlineResponse2001](../interfaces/inlineresponse2001.md)[]›*

*Defined in [packages/insights/api.ts:2441](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L2441)*

The accepted content type is not required.

**`summary`** Supply the list output in JSON format.

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

###  exportListJson_2

▸ **exportListJson_2**(`displayName?`: string, `sort?`: "hits" | "last_seen" | "display_name" | "-hits" | "-last_seen" | "-display_name", `options?`: any): *AxiosPromise‹[System](../interfaces/system.md)[]›*

*Defined in [packages/insights/api.ts:2454](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L2454)*

The accepted content type is not required.

**`summary`** Supply the list output in JSON format.

**`throws`** {RequiredError}

**`memberof`** ExportApi

**Parameters:**

Name | Type |
------ | ------ |
`displayName?` | string |
`sort?` | "hits" &#124; "last_seen" &#124; "display_name" &#124; "-hits" &#124; "-last_seen" &#124; "-display_name" |
`options?` | any |

**Returns:** *AxiosPromise‹[System](../interfaces/system.md)[]›*

___

###  exportSystemsList

▸ **exportSystemsList**(`displayName?`: string, `sort?`: "hits" | "last_seen" | "display_name" | "-hits" | "-last_seen" | "-display_name", `options?`: any): *AxiosPromise‹[System](../interfaces/system.md)[]›*

*Defined in [packages/insights/api.ts:2467](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L2467)*

Systems can be sorted and filtered by display name.

**`summary`** List of systems with details and hit counts.

**`throws`** {RequiredError}

**`memberof`** ExportApi

**Parameters:**

Name | Type |
------ | ------ |
`displayName?` | string |
`sort?` | "hits" &#124; "last_seen" &#124; "display_name" &#124; "-hits" &#124; "-last_seen" &#124; "-display_name" |
`options?` | any |

**Returns:** *AxiosPromise‹[System](../interfaces/system.md)[]›*
