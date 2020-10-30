[@redhat-cloud-services/catalog-client](../README.md) › [Globals](../globals.md) › [PortfolioItemApi](portfolioitemapi.md)

# Class: PortfolioItemApi

PortfolioItemApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **PortfolioItemApi**

## Index

### Constructors

* [constructor](portfolioitemapi.md#constructor)

### Properties

* [axios](portfolioitemapi.md#protected-axios)
* [basePath](portfolioitemapi.md#protected-basepath)
* [configuration](portfolioitemapi.md#protected-configuration)

### Methods

* [addPortfolioItemTag](portfolioitemapi.md#addportfolioitemtag)
* [createPortfolioItem](portfolioitemapi.md#createportfolioitem)
* [destroyPortfolioItem](portfolioitemapi.md#destroyportfolioitem)
* [getPortfolioItemNextName](portfolioitemapi.md#getportfolioitemnextname)
* [listPortfolioItemTags](portfolioitemapi.md#listportfolioitemtags)
* [listPortfolioItems](portfolioitemapi.md#listportfolioitems)
* [listProviderControlParameters](portfolioitemapi.md#listprovidercontrolparameters)
* [listServicePlans](portfolioitemapi.md#listserviceplans)
* [postCopyPortfolioItem](portfolioitemapi.md#postcopyportfolioitem)
* [removePortfolioItemTags](portfolioitemapi.md#removeportfolioitemtags)
* [showPortfolioItem](portfolioitemapi.md#showportfolioitem)
* [showPortfolioItemIcon](portfolioitemapi.md#showportfolioitemicon)
* [unDeletePortfolioItem](portfolioitemapi.md#undeleteportfolioitem)
* [updatePortfolioItem](portfolioitemapi.md#updateportfolioitem)

## Constructors

###  constructor

\+ **new PortfolioItemApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[PortfolioItemApi](portfolioitemapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [packages/catalog/base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/base.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** *[PortfolioItemApi](portfolioitemapi.md)*

## Properties

### `Protected` axios

• **axios**: *AxiosInstance*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#protected-axios)*

*Defined in [packages/catalog/base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/base.ts#L51)*

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

*Defined in [packages/catalog/base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/base.ts#L51)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [packages/catalog/base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/base.ts#L49)*

## Methods

###  addPortfolioItemTag

▸ **addPortfolioItemTag**(`id`: string, `tag`: Array‹[Tag](../interfaces/tag.md)›, `options?`: any): *AxiosPromise‹[Tag](../interfaces/tag.md)[]›*

*Defined in [packages/catalog/api.ts:6621](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L6621)*

Adds a single tag to a Portfolio Item object

**`summary`** Add Tag for Portfolio Item

**`throws`** {RequiredError}

**`memberof`** PortfolioItemApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`tag` | Array‹[Tag](../interfaces/tag.md)› | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[Tag](../interfaces/tag.md)[]›*

___

###  createPortfolioItem

▸ **createPortfolioItem**(`createPortfolioItem`: [CreatePortfolioItem](../interfaces/createportfolioitem.md), `options?`: any): *AxiosPromise‹[PortfolioItem](../interfaces/portfolioitem.md)›*

*Defined in [packages/catalog/api.ts:6633](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L6633)*

Adds a name and description for a portfolio item and returns the newly created portfolio item.

**`summary`** Add a new portfolio item

**`throws`** {RequiredError}

**`memberof`** PortfolioItemApi

**Parameters:**

Name | Type |
------ | ------ |
`createPortfolioItem` | [CreatePortfolioItem](../interfaces/createportfolioitem.md) |
`options?` | any |

**Returns:** *AxiosPromise‹[PortfolioItem](../interfaces/portfolioitem.md)›*

___

###  destroyPortfolioItem

▸ **destroyPortfolioItem**(`id`: string, `options?`: any): *AxiosPromise‹[RestoreKey](../interfaces/restorekey.md)›*

*Defined in [packages/catalog/api.ts:6645](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L6645)*

Deletes the portfolio item based on portfolio item ID passed

**`summary`** Delete an existing portfolio item

**`throws`** {RequiredError}

**`memberof`** PortfolioItemApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *AxiosPromise‹[RestoreKey](../interfaces/restorekey.md)›*

___

###  getPortfolioItemNextName

▸ **getPortfolioItemNextName**(`portfolioItemId`: string, `destinationPortfolioId?`: string, `options?`: any): *AxiosPromise‹[PortfolioItemNextName](../interfaces/portfolioitemnextname.md)›*

*Defined in [packages/catalog/api.ts:6658](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L6658)*

Get the next name for a the Portfolio Item prior to a copy operation

**`summary`** Get the next name for a the Portfolio Item prior to a copy operation

**`throws`** {RequiredError}

**`memberof`** PortfolioItemApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`portfolioItemId` | string | The Portfolio Item ID |
`destinationPortfolioId?` | string | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[PortfolioItemNextName](../interfaces/portfolioitemnextname.md)›*

___

###  listPortfolioItemTags

▸ **listPortfolioItemTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string, `options?`: any): *AxiosPromise‹[TagsCollection](../interfaces/tagscollection.md)›*

*Defined in [packages/catalog/api.ts:6674](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L6674)*

Returns an array of Tag objects

**`summary`** List Tags for Portfolio Items

**`throws`** {RequiredError}

**`memberof`** PortfolioItemApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[TagsCollection](../interfaces/tagscollection.md)›*

___

###  listPortfolioItems

▸ **listPortfolioItems**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string, `options?`: any): *AxiosPromise‹[PortfolioItemsCollection](../interfaces/portfolioitemscollection.md)›*

*Defined in [packages/catalog/api.ts:6689](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L6689)*

Gets a list of portfolio items.

**`summary`** List all portfolio items

**`throws`** {RequiredError}

**`memberof`** PortfolioItemApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`filter?` | object |
`sortBy?` | string |
`options?` | any |

**Returns:** *AxiosPromise‹[PortfolioItemsCollection](../interfaces/portfolioitemscollection.md)›*

___

###  listProviderControlParameters

▸ **listProviderControlParameters**(`portfolioItemId`: string, `options?`: any): *AxiosPromise‹object›*

*Defined in [packages/catalog/api.ts:6701](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L6701)*

Gets the provider control parameters for a portfolio item.

**`summary`** Gets the provider control parameters for this portfolio item; requires control paramaters provided when provisioning the portfolio item.

**`throws`** {RequiredError}

**`memberof`** PortfolioItemApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`portfolioItemId` | string | The Portfolio Item ID |
`options?` | any | - |

**Returns:** *AxiosPromise‹object›*

___

###  listServicePlans

▸ **listServicePlans**(`portfolioItemId`: string, `options?`: any): *AxiosPromise‹[ServicePlan](../interfaces/serviceplan.md)[]›*

*Defined in [packages/catalog/api.ts:6713](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L6713)*

Gets all service plans for a portfolio item.

**`summary`** Gets all service plans for a specific portfolio item; requires a connection to the topology service.

**`throws`** {RequiredError}

**`memberof`** PortfolioItemApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`portfolioItemId` | string | The Portfolio Item ID |
`options?` | any | - |

**Returns:** *AxiosPromise‹[ServicePlan](../interfaces/serviceplan.md)[]›*

___

###  postCopyPortfolioItem

▸ **postCopyPortfolioItem**(`portfolioItemId`: string, `copyPortfolioItem?`: [CopyPortfolioItem](../interfaces/copyportfolioitem.md), `options?`: any): *AxiosPromise‹[PortfolioItem](../interfaces/portfolioitem.md)›*

*Defined in [packages/catalog/api.ts:6726](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L6726)*

Make a copy of the Portfolio Item.

**`summary`** Make a copy of the Portfolio Item

**`throws`** {RequiredError}

**`memberof`** PortfolioItemApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`portfolioItemId` | string | The Portfolio Item ID |
`copyPortfolioItem?` | [CopyPortfolioItem](../interfaces/copyportfolioitem.md) | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[PortfolioItem](../interfaces/portfolioitem.md)›*

___

###  removePortfolioItemTags

▸ **removePortfolioItemTags**(`id`: string, `tag`: Array‹[Tag](../interfaces/tag.md)›, `options?`: any): *AxiosPromise‹void›*

*Defined in [packages/catalog/api.ts:6739](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L6739)*

Remove Tags from Portfolio Item

**`summary`** Remove Tags from Portfolio Item

**`throws`** {RequiredError}

**`memberof`** PortfolioItemApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`tag` | Array‹[Tag](../interfaces/tag.md)› | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹void›*

___

###  showPortfolioItem

▸ **showPortfolioItem**(`id`: string, `showDiscarded?`: boolean, `options?`: any): *AxiosPromise‹[PortfolioItem](../interfaces/portfolioitem.md)›*

*Defined in [packages/catalog/api.ts:6752](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L6752)*

Gets a specific portfolio item based on the portfolio item ID passed

**`summary`** Gets a specific portfolio item

**`throws`** {RequiredError}

**`memberof`** PortfolioItemApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`showDiscarded?` | boolean | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[PortfolioItem](../interfaces/portfolioitem.md)›*

___

###  showPortfolioItemIcon

▸ **showPortfolioItemIcon**(`portfolioItemId`: string, `options?`: any): *AxiosPromise‹any›*

*Defined in [packages/catalog/api.ts:6764](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L6764)*

Fetch the specified portfolio item\'s icon image.

**`summary`** Fetches the specified portfolio item\'s icon image

**`throws`** {RequiredError}

**`memberof`** PortfolioItemApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`portfolioItemId` | string | The Portfolio Item ID |
`options?` | any | - |

**Returns:** *AxiosPromise‹any›*

___

###  unDeletePortfolioItem

▸ **unDeletePortfolioItem**(`portfolioItemId`: string, `restoreKey`: [RestoreKey](../interfaces/restorekey.md), `options?`: any): *AxiosPromise‹[PortfolioItem](../interfaces/portfolioitem.md)›*

*Defined in [packages/catalog/api.ts:6777](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L6777)*

If a record has been discarded, this operation will undelete it so it can be requested normally.

**`summary`** Undelete a specified Portfolio Item

**`throws`** {RequiredError}

**`memberof`** PortfolioItemApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`portfolioItemId` | string | The Portfolio Item ID |
`restoreKey` | [RestoreKey](../interfaces/restorekey.md) | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[PortfolioItem](../interfaces/portfolioitem.md)›*

___

###  updatePortfolioItem

▸ **updatePortfolioItem**(`id`: string, `portfolioItem`: [PortfolioItem](../interfaces/portfolioitem.md), `options?`: any): *AxiosPromise‹[PortfolioItem](../interfaces/portfolioitem.md)›*

*Defined in [packages/catalog/api.ts:6790](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L6790)*

Edits portfolio item specified by the given ID.

**`summary`** Edit an existing portfolio item

**`throws`** {RequiredError}

**`memberof`** PortfolioItemApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`portfolioItem` | [PortfolioItem](../interfaces/portfolioitem.md) | Parameters needed to update a Portfolio Item |
`options?` | any | - |

**Returns:** *AxiosPromise‹[PortfolioItem](../interfaces/portfolioitem.md)›*
