[@redhat-cloud-services/catalog-client](../README.md) › [Globals](../globals.md) › [PortfolioApi](portfolioapi.md)

# Class: PortfolioApi

PortfolioApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **PortfolioApi**

## Index

### Constructors

* [constructor](portfolioapi.md#constructor)

### Properties

* [axios](portfolioapi.md#protected-axios)
* [basePath](portfolioapi.md#protected-basepath)
* [configuration](portfolioapi.md#protected-configuration)

### Methods

* [addPortfolioTag](portfolioapi.md#addportfoliotag)
* [createPortfolio](portfolioapi.md#createportfolio)
* [destroyPortfolio](portfolioapi.md#destroyportfolio)
* [fetchPortfolioItemsWithPortfolio](portfolioapi.md#fetchportfolioitemswithportfolio)
* [listPortfolioTags](portfolioapi.md#listportfoliotags)
* [listPortfolios](portfolioapi.md#listportfolios)
* [postCopyPortfolio](portfolioapi.md#postcopyportfolio)
* [removePortfolioTags](portfolioapi.md#removeportfoliotags)
* [shareInfo](portfolioapi.md#shareinfo)
* [sharePortfolio](portfolioapi.md#shareportfolio)
* [showPortfolio](portfolioapi.md#showportfolio)
* [showPortfolioIcon](portfolioapi.md#showportfolioicon)
* [unDeletePortfolio](portfolioapi.md#undeleteportfolio)
* [unsharePortfolio](portfolioapi.md#unshareportfolio)
* [updatePortfolio](portfolioapi.md#updateportfolio)

## Constructors

###  constructor

\+ **new PortfolioApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[PortfolioApi](portfolioapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/base.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** *[PortfolioApi](portfolioapi.md)*

## Properties

### `Protected` axios

• **axios**: *AxiosInstance*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#protected-axios)*

*Defined in [base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/base.ts#L51)*

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

*Defined in [base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/base.ts#L51)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/base.ts#L49)*

## Methods

###  addPortfolioTag

▸ **addPortfolioTag**(`id`: string, `tag`: Array‹[Tag](../interfaces/tag.md)›, `options?`: any): *Promise‹AxiosResponse‹[Tag](../interfaces/tag.md)[]››*

*Defined in [api.ts:5722](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L5722)*

Adds a single tag to Portfolio object

**`summary`** Add Tag for Portfolio

**`throws`** {RequiredError}

**`memberof`** PortfolioApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`tag` | Array‹[Tag](../interfaces/tag.md)› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[Tag](../interfaces/tag.md)[]››*

___

###  createPortfolio

▸ **createPortfolio**(`portfolio`: [Portfolio](../interfaces/portfolio.md), `options?`: any): *Promise‹AxiosResponse‹[Portfolio](../interfaces/portfolio.md)››*

*Defined in [api.ts:5734](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L5734)*

Adds a portfolio.

**`summary`** Add a new portfolio

**`throws`** {RequiredError}

**`memberof`** PortfolioApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`portfolio` | [Portfolio](../interfaces/portfolio.md) | Parameters needed to add a Portfolio |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[Portfolio](../interfaces/portfolio.md)››*

___

###  destroyPortfolio

▸ **destroyPortfolio**(`id`: string, `options?`: any): *Promise‹AxiosResponse‹[RestoreKey](../interfaces/restorekey.md)››*

*Defined in [api.ts:5746](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L5746)*

Deletes the portfolio specified by the ID.

**`summary`** Delete an existing portfolio

**`throws`** {RequiredError}

**`memberof`** PortfolioApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[RestoreKey](../interfaces/restorekey.md)››*

___

###  fetchPortfolioItemsWithPortfolio

▸ **fetchPortfolioItemsWithPortfolio**(`portfolioId`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string, `options?`: any): *Promise‹AxiosResponse‹[PortfolioItemsCollection](../interfaces/portfolioitemscollection.md)››*

*Defined in [api.ts:5762](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L5762)*

Gets all portfilio items in the portfolio specified by the given ID.

**`summary`** Get all portfolio items from a specific portfolio

**`throws`** {RequiredError}

**`memberof`** PortfolioApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`portfolioId` | string | The Portfolio ID |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[PortfolioItemsCollection](../interfaces/portfolioitemscollection.md)››*

___

###  listPortfolioTags

▸ **listPortfolioTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string, `options?`: any): *Promise‹AxiosResponse‹[TagsCollection](../interfaces/tagscollection.md)››*

*Defined in [api.ts:5778](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L5778)*

Returns an array of Tag objects

**`summary`** List Tags for Portfolio

**`throws`** {RequiredError}

**`memberof`** PortfolioApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[TagsCollection](../interfaces/tagscollection.md)››*

___

###  listPortfolios

▸ **listPortfolios**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string, `options?`: any): *Promise‹AxiosResponse‹[PortfoliosCollection](../interfaces/portfolioscollection.md)››*

*Defined in [api.ts:5793](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L5793)*

Gets a list of portfolios.

**`summary`** List portfolios

**`throws`** {RequiredError}

**`memberof`** PortfolioApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`filter?` | object |
`sortBy?` | string |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[PortfoliosCollection](../interfaces/portfolioscollection.md)››*

___

###  postCopyPortfolio

▸ **postCopyPortfolio**(`portfolioId`: string, `options?`: any): *Promise‹AxiosResponse‹[Portfolio](../interfaces/portfolio.md)››*

*Defined in [api.ts:5805](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L5805)*

Make a copy of the Portfolio.

**`summary`** Make a copy of the Portfolio

**`throws`** {RequiredError}

**`memberof`** PortfolioApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`portfolioId` | string | The Portfolio ID |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[Portfolio](../interfaces/portfolio.md)››*

___

###  removePortfolioTags

▸ **removePortfolioTags**(`id`: string, `tag`: Array‹[Tag](../interfaces/tag.md)›, `options?`: any): *Promise‹AxiosResponse‹void››*

*Defined in [api.ts:5818](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L5818)*

Remove Tags from Portfolio

**`summary`** Remove Tags from Portfolio

**`throws`** {RequiredError}

**`memberof`** PortfolioApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`tag` | Array‹[Tag](../interfaces/tag.md)› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹void››*

___

###  shareInfo

▸ **shareInfo**(`portfolioId`: string, `options?`: any): *Promise‹AxiosResponse‹[ShareInfo](../interfaces/shareinfo.md)[]››*

*Defined in [api.ts:5830](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L5830)*

Fetch share information about a portfolio

**`summary`** Fetch share information about this portfolio, the response would include a collection of groups and permissions with each group

**`throws`** {RequiredError}

**`memberof`** PortfolioApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`portfolioId` | string | The Portfolio ID |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ShareInfo](../interfaces/shareinfo.md)[]››*

___

###  sharePortfolio

▸ **sharePortfolio**(`portfolioId`: string, `sharePolicy`: [SharePolicy](../interfaces/sharepolicy.md), `options?`: any): *Promise‹AxiosResponse‹void››*

*Defined in [api.ts:5843](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L5843)*

Share a Portfolio with one or more groups with specific permissions

**`summary`** Share a portfolio with one or more groups with specific permission

**`throws`** {RequiredError}

**`memberof`** PortfolioApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`portfolioId` | string | The Portfolio ID |
`sharePolicy` | [SharePolicy](../interfaces/sharepolicy.md) | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹void››*

___

###  showPortfolio

▸ **showPortfolio**(`id`: string, `options?`: any): *Promise‹AxiosResponse‹[Portfolio](../interfaces/portfolio.md)››*

*Defined in [api.ts:5855](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L5855)*

Gets the portfolio specified by the portfolio ID.

**`summary`** Get a specific portfolio

**`throws`** {RequiredError}

**`memberof`** PortfolioApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[Portfolio](../interfaces/portfolio.md)››*

___

###  showPortfolioIcon

▸ **showPortfolioIcon**(`portfolioId`: string, `cacheId?`: string, `options?`: any): *Promise‹AxiosResponse‹any››*

*Defined in [api.ts:5868](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L5868)*

Fetch the specified portfolio\'s icon image.

**`summary`** Fetches the specified portfolio\'s icon image

**`throws`** {RequiredError}

**`memberof`** PortfolioApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`portfolioId` | string | The Portfolio ID |
`cacheId?` | string | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹any››*

___

###  unDeletePortfolio

▸ **unDeletePortfolio**(`id`: string, `restoreKey`: [RestoreKey](../interfaces/restorekey.md), `options?`: any): *Promise‹AxiosResponse‹[Portfolio](../interfaces/portfolio.md)››*

*Defined in [api.ts:5881](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L5881)*

Undeletes the portfolio specified by the portfolio ID.

**`summary`** Undelete specific portfolio

**`throws`** {RequiredError}

**`memberof`** PortfolioApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`restoreKey` | [RestoreKey](../interfaces/restorekey.md) | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[Portfolio](../interfaces/portfolio.md)››*

___

###  unsharePortfolio

▸ **unsharePortfolio**(`portfolioId`: string, `unsharePolicy`: [UnsharePolicy](../interfaces/unsharepolicy.md), `options?`: any): *Promise‹AxiosResponse‹void››*

*Defined in [api.ts:5894](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L5894)*

Unshare a Portfolio with one or more groups with specific permissions

**`summary`** Unshare a portfolio from one or more groups with specific permission

**`throws`** {RequiredError}

**`memberof`** PortfolioApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`portfolioId` | string | The Portfolio ID |
`unsharePolicy` | [UnsharePolicy](../interfaces/unsharepolicy.md) | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹void››*

___

###  updatePortfolio

▸ **updatePortfolio**(`id`: string, `portfolio`: [Portfolio](../interfaces/portfolio.md), `options?`: any): *Promise‹AxiosResponse‹[Portfolio](../interfaces/portfolio.md)››*

*Defined in [api.ts:5907](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L5907)*

Returns the edited portfolio.

**`summary`** Edit an existing portfolio

**`throws`** {RequiredError}

**`memberof`** PortfolioApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`portfolio` | [Portfolio](../interfaces/portfolio.md) | Parameters needed to update a Portfolio |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[Portfolio](../interfaces/portfolio.md)››*
