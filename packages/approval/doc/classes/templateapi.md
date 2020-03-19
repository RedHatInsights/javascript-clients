[@redhat-cloud-services/approval-client](../README.md) › [Globals](../globals.md) › [TemplateApi](templateapi.md)

# Class: TemplateApi

TemplateApi - object-oriented interface

**`export`** 

**`class`** TemplateApi

**`extends`** {BaseAPI}

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **TemplateApi**

## Index

### Constructors

* [constructor](templateapi.md#constructor)

### Properties

* [axios](templateapi.md#protected-axios)
* [basePath](templateapi.md#protected-basepath)
* [configuration](templateapi.md#protected-configuration)

### Methods

* [listTemplates](templateapi.md#listtemplates)
* [showTemplate](templateapi.md#showtemplate)

## Constructors

###  constructor

\+ **new TemplateApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[TemplateApi](templateapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`axios` | AxiosInstance |  globalAxios |

**Returns:** *[TemplateApi](templateapi.md)*

## Properties

### `Protected` axios

• **axios**: *AxiosInstance*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#protected-axios)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L51)*

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L51)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L49)*

## Methods

###  listTemplates

▸ **listTemplates**(`limit?`: number, `offset?`: number, `filter?`: any, `options?`: any): *AxiosPromise‹[TemplateCollection](../interfaces/templatecollection.md)›*

*Defined in [api.ts:1661](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1661)*

Return all templates

**`summary`** Return all templates, only available for admin

**`throws`** {RequiredError}

**`memberof`** TemplateApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`filter?` | any |
`options?` | any |

**Returns:** *AxiosPromise‹[TemplateCollection](../interfaces/templatecollection.md)›*

___

###  showTemplate

▸ **showTemplate**(`id`: string, `options?`: any): *AxiosPromise‹[Template](../interfaces/template.md)›*

*Defined in [api.ts:1673](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1673)*

Return a template by given id

**`summary`** Return a template by given id, only available for admin

**`throws`** {RequiredError}

**`memberof`** TemplateApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | Query by id |
`options?` | any | - |

**Returns:** *AxiosPromise‹[Template](../interfaces/template.md)›*
