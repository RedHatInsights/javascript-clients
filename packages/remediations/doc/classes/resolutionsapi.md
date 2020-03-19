[@redhat-cloud-services/remediations-client](../README.md) › [Globals](../globals.md) › [ResolutionsApi](resolutionsapi.md)

# Class: ResolutionsApi

ResolutionsApi - object-oriented interface

**`export`** 

**`class`** ResolutionsApi

**`extends`** {BaseAPI}

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **ResolutionsApi**

## Index

### Constructors

* [constructor](resolutionsapi.md#constructor)

### Properties

* [axios](resolutionsapi.md#protected-axios)
* [basePath](resolutionsapi.md#protected-basepath)
* [configuration](resolutionsapi.md#protected-configuration)

### Methods

* [getResolutionsForIssue](resolutionsapi.md#getresolutionsforissue)
* [getResolutionsForIssues](resolutionsapi.md#getresolutionsforissues)

## Constructors

###  constructor

\+ **new ResolutionsApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[ResolutionsApi](resolutionsapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`axios` | AxiosInstance |  globalAxios |

**Returns:** *[ResolutionsApi](resolutionsapi.md)*

## Properties

### `Protected` axios

• **axios**: *AxiosInstance*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#protected-axios)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L51)*

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L51)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L49)*

## Methods

###  getResolutionsForIssue

▸ **getResolutionsForIssue**(`issue`: string, `options?`: any): *AxiosPromise‹[Resolutions](../interfaces/resolutions.md)›*

*Defined in [api.ts:2730](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L2730)*

Provides information about resolutions available for the given issue

**`summary`** Resolution metadata

**`throws`** {RequiredError}

**`memberof`** ResolutionsApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`issue` | string | Issue identifier (e.g. &#x60;advisor:CVE_2017_6074_kernel|KERNEL_CVE_2017_6074&#x60;) |
`options?` | any | - |

**Returns:** *AxiosPromise‹[Resolutions](../interfaces/resolutions.md)›*

___

###  getResolutionsForIssues

▸ **getResolutionsForIssues**(`resolutionsBatchInput`: [ResolutionsBatchInput](../interfaces/resolutionsbatchinput.md), `options?`: any): *AxiosPromise‹object›*

*Defined in [api.ts:2742](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L2742)*

Provides information about resolutions available for the given issues

**`summary`** Resolution metadata (batch)

**`throws`** {RequiredError}

**`memberof`** ResolutionsApi

**Parameters:**

Name | Type |
------ | ------ |
`resolutionsBatchInput` | [ResolutionsBatchInput](../interfaces/resolutionsbatchinput.md) |
`options?` | any |

**Returns:** *AxiosPromise‹object›*
