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

* [destroyIcon](iconapi.md#destroyicon)
* [iconsIdGet](iconapi.md#iconsidget)
* [iconsPost](iconapi.md#iconspost)
* [overrideIcon](iconapi.md#overrideicon)
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

<a id="destroyicon"></a>

###  destroyIcon

▸ **destroyIcon**(id: *`string`*, options?: *`any`*): `AxiosPromise`<`Response`>

*Defined in [api.ts:1689](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1689)*

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
<a id="iconsidget"></a>

###  iconsIdGet

▸ **iconsIdGet**(id: *`string`*, options?: *`any`*): `AxiosPromise`<[Icon](../interfaces/icon.md)>

*Defined in [api.ts:1701](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1701)*

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
<a id="iconspost"></a>

###  iconsPost

▸ **iconsPost**(icon?: *[Icon](../interfaces/icon.md)*, options?: *`any`*): `AxiosPromise`<[Icon](../interfaces/icon.md)>

*Defined in [api.ts:1713](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1713)*

Creates an Icon from the specified parameters

*__summary__*: Create an Icon

*__throws__*: {RequiredError}

*__memberof__*: IconApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` icon | [Icon](../interfaces/icon.md) |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[Icon](../interfaces/icon.md)>

___
<a id="overrideicon"></a>

###  overrideIcon

▸ **overrideIcon**(id: *`string`*, overrideIcon?: *[OverrideIcon](../interfaces/overrideicon.md)*, options?: *`any`*): `AxiosPromise`<[Icon](../interfaces/icon.md)>

*Defined in [api.ts:1726](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1726)*

Override the specified Portfolio Item's Icon

*__summary__*: Override the specified Portfolio Item's Icon

*__throws__*: {RequiredError}

*__memberof__*: IconApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` overrideIcon | [OverrideIcon](../interfaces/overrideicon.md) |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[Icon](../interfaces/icon.md)>

___
<a id="showicondata"></a>

###  showIconData

▸ **showIconData**(id: *`string`*, options?: *`any`*): `AxiosPromise`<`Response`>

*Defined in [api.ts:1738](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1738)*

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

*Defined in [api.ts:1751](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1751)*

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

