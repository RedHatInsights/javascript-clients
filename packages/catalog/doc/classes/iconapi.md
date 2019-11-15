[@redhat-cloud-services/catalog-client](../README.md) > [IconApi](../classes/iconapi.md)

# Class: IconApi

IconApi - object-oriented interface

*__export__*: 

*__class__*: IconApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ IconApi**

## Index

### Constructors

* [constructor](iconapi.md#constructor)

### Properties

* [axios](iconapi.md#axios)
* [basePath](iconapi.md#basepath)
* [configuration](iconapi.md#configuration)

### Methods

* [createIcon](iconapi.md#createicon)
* [destroyIcon](iconapi.md#destroyicon)
* [getIcon](iconapi.md#geticon)
* [showIconData](iconapi.md#showicondata)
* [updateIcon](iconapi.md#updateicon)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new IconApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): [IconApi](iconapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L49)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` axios | `AxiosInstance` |  globalAxios |

**Returns:** [IconApi](iconapi.md)

___

## Properties

<a id="axios"></a>

### `<Protected>` axios

**● axios**: *`AxiosInstance`*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#axios)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L51)*

___
<a id="basepath"></a>

### `<Protected>` basePath

**● basePath**: *`string`*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#basepath)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L51)*

___
<a id="configuration"></a>

### `<Protected>` configuration

**● configuration**: *[Configuration](configuration.md) \| `undefined`*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#configuration)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L49)*

___

## Methods

<a id="createicon"></a>

###  createIcon

▸ **createIcon**(content?: *`any`*, portfolioId?: *`string`*, portfolioItemId?: *`string`*, options?: *`any`*): `AxiosPromise`<[Icon](../interfaces/icon.md)>

*Defined in [api.ts:1874](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1874)*

Creates an Icon from the specified parameters

*__summary__*: Create an Icon

*__throws__*: {RequiredError}

*__memberof__*: IconApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` content | `any` |
| `Optional` portfolioId | `string` |
| `Optional` portfolioItemId | `string` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[Icon](../interfaces/icon.md)>

___
<a id="destroyicon"></a>

###  destroyIcon

▸ **destroyIcon**(id: *`string`*, options?: *`any`*): `AxiosPromise`<`Response`>

*Defined in [api.ts:1886](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1886)*

Deletes the icon based on the icon ID passed

*__summary__*: Delete an existing Icon

*__throws__*: {RequiredError}

*__memberof__*: IconApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<`Response`>

___
<a id="geticon"></a>

###  getIcon

▸ **getIcon**(id: *`string`*, options?: *`any`*): `AxiosPromise`<[Icon](../interfaces/icon.md)>

*Defined in [api.ts:1898](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1898)*

Fetch an Icon by ID

*__summary__*: Fetch an Icon by ID

*__throws__*: {RequiredError}

*__memberof__*: IconApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[Icon](../interfaces/icon.md)>

___
<a id="showicondata"></a>

###  showIconData

▸ **showIconData**(id: *`string`*, options?: *`any`*): `AxiosPromise`<`Response`>

*Defined in [api.ts:1910](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1910)*

Fetch the specified portfolio item's icon image.

*__summary__*: Fetches the specified icon's image

*__throws__*: {RequiredError}

*__memberof__*: IconApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<`Response`>

___
<a id="updateicon"></a>

###  updateIcon

▸ **updateIcon**(id: *`string`*, icon: *[Icon](../interfaces/icon.md)*, options?: *`any`*): `AxiosPromise`<[Icon](../interfaces/icon.md)>

*Defined in [api.ts:1923](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1923)*

Edits Icon specified by the given ID.

*__summary__*: Edit an existing Icon

*__throws__*: {RequiredError}

*__memberof__*: IconApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| icon | [Icon](../interfaces/icon.md) |  Parameters needed to update an Icon |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[Icon](../interfaces/icon.md)>

___

