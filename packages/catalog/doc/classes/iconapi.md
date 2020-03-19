[@redhat-cloud-services/catalog-client](../README.md) › [Globals](../globals.md) › [IconApi](iconapi.md)

# Class: IconApi

IconApi - object-oriented interface

**`export`** 

**`class`** IconApi

**`extends`** {BaseAPI}

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **IconApi**

## Index

### Constructors

* [constructor](iconapi.md#constructor)

### Properties

* [axios](iconapi.md#protected-axios)
* [basePath](iconapi.md#protected-basepath)
* [configuration](iconapi.md#protected-configuration)

### Methods

* [createIcon](iconapi.md#createicon)
* [destroyIcon](iconapi.md#destroyicon)
* [getIcon](iconapi.md#geticon)
* [showIconData](iconapi.md#showicondata)
* [updateIcon](iconapi.md#updateicon)

## Constructors

###  constructor

\+ **new IconApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[IconApi](iconapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`axios` | AxiosInstance |  globalAxios |

**Returns:** *[IconApi](iconapi.md)*

## Properties

### `Protected` axios

• **axios**: *AxiosInstance*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#protected-axios)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L51)*

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L51)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L49)*

## Methods

###  createIcon

▸ **createIcon**(`content?`: any, `portfolioId?`: string, `portfolioItemId?`: string, `options?`: any): *AxiosPromise‹[Icon](../interfaces/icon.md)›*

*Defined in [api.ts:1798](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1798)*

Creates an Icon from the specified parameters

**`summary`** Create an Icon

**`throws`** {RequiredError}

**`memberof`** IconApi

**Parameters:**

Name | Type |
------ | ------ |
`content?` | any |
`portfolioId?` | string |
`portfolioItemId?` | string |
`options?` | any |

**Returns:** *AxiosPromise‹[Icon](../interfaces/icon.md)›*

___

###  destroyIcon

▸ **destroyIcon**(`id`: string, `options?`: any): *AxiosPromise‹Response›*

*Defined in [api.ts:1810](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1810)*

Deletes the icon based on the icon ID passed

**`summary`** Delete an existing Icon

**`throws`** {RequiredError}

**`memberof`** IconApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *AxiosPromise‹Response›*

___

###  getIcon

▸ **getIcon**(`id`: string, `options?`: any): *AxiosPromise‹[Icon](../interfaces/icon.md)›*

*Defined in [api.ts:1822](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1822)*

Fetch an Icon by ID

**`summary`** Fetch an Icon by ID

**`throws`** {RequiredError}

**`memberof`** IconApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *AxiosPromise‹[Icon](../interfaces/icon.md)›*

___

###  showIconData

▸ **showIconData**(`id`: string, `options?`: any): *AxiosPromise‹any›*

*Defined in [api.ts:1834](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1834)*

Fetch the specified portfolio item's icon image.

**`summary`** Fetches the specified icon's image

**`throws`** {RequiredError}

**`memberof`** IconApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *AxiosPromise‹any›*

___

###  updateIcon

▸ **updateIcon**(`id`: string, `icon`: [Icon](../interfaces/icon.md), `options?`: any): *AxiosPromise‹[Icon](../interfaces/icon.md)›*

*Defined in [api.ts:1847](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1847)*

Edits Icon specified by the given ID.

**`summary`** Edit an existing Icon

**`throws`** {RequiredError}

**`memberof`** IconApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`icon` | [Icon](../interfaces/icon.md) | Parameters needed to update an Icon |
`options?` | any | - |

**Returns:** *AxiosPromise‹[Icon](../interfaces/icon.md)›*
