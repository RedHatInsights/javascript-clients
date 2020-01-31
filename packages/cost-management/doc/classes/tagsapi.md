[@redhat-cloud-services/cost-management-client](../README.md) > [TagsApi](../classes/tagsapi.md)

# Class: TagsApi

TagsApi - object-oriented interface

*__export__*: 

*__class__*: TagsApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ TagsApi**

## Index

### Constructors

* [constructor](tagsapi.md#constructor)

### Properties

* [axios](tagsapi.md#axios)
* [basePath](tagsapi.md#basepath)
* [configuration](tagsapi.md#configuration)

### Methods

* [getAWSTagData](tagsapi.md#getawstagdata)
* [getAzureTagData](tagsapi.md#getazuretagdata)
* [getOpenShiftAWSTagData](tagsapi.md#getopenshiftawstagdata)
* [getOpenShiftAzureTagData](tagsapi.md#getopenshiftazuretagdata)
* [getOpenShiftTagData](tagsapi.md#getopenshifttagdata)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new TagsApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): [TagsApi](tagsapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L49)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` axios | `AxiosInstance` |  globalAxios |

**Returns:** [TagsApi](tagsapi.md)

___

## Properties

<a id="axios"></a>

### `<Protected>` axios

**● axios**: *`AxiosInstance`*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#axios)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L51)*

___
<a id="basepath"></a>

### `<Protected>` basePath

**● basePath**: *`string`*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#basepath)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L51)*

___
<a id="configuration"></a>

### `<Protected>` configuration

**● configuration**: *[Configuration](configuration.md) \| `undefined`*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#configuration)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L49)*

___

## Methods

<a id="getawstagdata"></a>

###  getAWSTagData

▸ **getAWSTagData**(filter?: *`any`*, keyOnly?: *`boolean`*, offset?: *`number`*, limit?: *`number`*, options?: *`any`*): `AxiosPromise`<[Tags](../interfaces/tags.md)>

*Defined in [api.ts:7225](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L7225)*

*__summary__*: Query to obtain AWS tags

*__throws__*: {RequiredError}

*__memberof__*: TagsApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` filter | `any` |
| `Optional` keyOnly | `boolean` |
| `Optional` offset | `number` |
| `Optional` limit | `number` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[Tags](../interfaces/tags.md)>

___
<a id="getazuretagdata"></a>

###  getAzureTagData

▸ **getAzureTagData**(filter?: *`any`*, keyOnly?: *`boolean`*, offset?: *`number`*, limit?: *`number`*, options?: *`any`*): `AxiosPromise`<[Tags](../interfaces/tags.md)>

*Defined in [api.ts:7240](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L7240)*

*__summary__*: Query to obtain AWS tags

*__throws__*: {RequiredError}

*__memberof__*: TagsApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` filter | `any` |
| `Optional` keyOnly | `boolean` |
| `Optional` offset | `number` |
| `Optional` limit | `number` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[Tags](../interfaces/tags.md)>

___
<a id="getopenshiftawstagdata"></a>

###  getOpenShiftAWSTagData

▸ **getOpenShiftAWSTagData**(filter?: *`any`*, keyOnly?: *`boolean`*, offset?: *`number`*, limit?: *`number`*, options?: *`any`*): `AxiosPromise`<[Tags](../interfaces/tags.md)>

*Defined in [api.ts:7255](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L7255)*

*__summary__*: Query to obtain OpenShift-on-AWS tags

*__throws__*: {RequiredError}

*__memberof__*: TagsApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` filter | `any` |
| `Optional` keyOnly | `boolean` |
| `Optional` offset | `number` |
| `Optional` limit | `number` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[Tags](../interfaces/tags.md)>

___
<a id="getopenshiftazuretagdata"></a>

###  getOpenShiftAzureTagData

▸ **getOpenShiftAzureTagData**(filter?: *`any`*, keyOnly?: *`boolean`*, offset?: *`number`*, limit?: *`number`*, options?: *`any`*): `AxiosPromise`<[Tags](../interfaces/tags.md)>

*Defined in [api.ts:7270](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L7270)*

*__summary__*: Query to obtain OpenShift-on-Azure tags

*__throws__*: {RequiredError}

*__memberof__*: TagsApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` filter | `any` |
| `Optional` keyOnly | `boolean` |
| `Optional` offset | `number` |
| `Optional` limit | `number` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[Tags](../interfaces/tags.md)>

___
<a id="getopenshifttagdata"></a>

###  getOpenShiftTagData

▸ **getOpenShiftTagData**(filter?: *`any`*, keyOnly?: *`boolean`*, offset?: *`number`*, limit?: *`number`*, options?: *`any`*): `AxiosPromise`<[Tags](../interfaces/tags.md)>

*Defined in [api.ts:7285](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L7285)*

*__summary__*: Query to obtain OpenShift tags

*__throws__*: {RequiredError}

*__memberof__*: TagsApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` filter | `any` |
| `Optional` keyOnly | `boolean` |
| `Optional` offset | `number` |
| `Optional` limit | `number` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[Tags](../interfaces/tags.md)>

___

