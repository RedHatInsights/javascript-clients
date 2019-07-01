[@redhat-cloud-services/approval-client](../README.md) > [TemplateApi](../classes/templateapi.md)

# Class: TemplateApi

TemplateApi - object-oriented interface

*__export__*: 

*__class__*: TemplateApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ TemplateApi**

## Index

### Constructors

* [constructor](templateapi.md#constructor)

### Properties

* [axios](templateapi.md#axios)
* [basePath](templateapi.md#basepath)
* [configuration](templateapi.md#configuration)

### Methods

* [listTemplates](templateapi.md#listtemplates)
* [showTemplate](templateapi.md#showtemplate)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new TemplateApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): [TemplateApi](templateapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L49)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` axios | `AxiosInstance` |  globalAxios |

**Returns:** [TemplateApi](templateapi.md)

___

## Properties

<a id="axios"></a>

### `<Protected>` axios

**● axios**: *`AxiosInstance`*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#axios)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L51)*

___
<a id="basepath"></a>

### `<Protected>` basePath

**● basePath**: *`string`*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#basepath)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L51)*

___
<a id="configuration"></a>

### `<Protected>` configuration

**● configuration**: *[Configuration](configuration.md) \| `undefined`*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#configuration)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L49)*

___

## Methods

<a id="listtemplates"></a>

###  listTemplates

▸ **listTemplates**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[TemplateOutCollection](../interfaces/templateoutcollection.md)>

*Defined in [api.ts:1789](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1789)*

Return all templates

*__summary__*: Return all templates

*__throws__*: {RequiredError}

*__memberof__*: TemplateApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[TemplateOutCollection](../interfaces/templateoutcollection.md)>

___
<a id="showtemplate"></a>

###  showTemplate

▸ **showTemplate**(id: *`string`*, options?: *`any`*): `AxiosPromise`<[TemplateOut](../interfaces/templateout.md)>

*Defined in [api.ts:1801](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1801)*

Return a template by given id

*__summary__*: Return a template by given id

*__throws__*: {RequiredError}

*__memberof__*: TemplateApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  Query by id |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[TemplateOut](../interfaces/templateout.md)>

___

