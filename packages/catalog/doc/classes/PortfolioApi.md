[@redhat-cloud-services/catalog-client](../README.md) / [Exports](../modules.md) / PortfolioApi

# Class: PortfolioApi

PortfolioApi - object-oriented interface

**`Export`**

## Hierarchy

- `BaseAPI`

  ↳ **`PortfolioApi`**

## Table of contents

### Constructors

- [constructor](PortfolioApi.md#constructor)

### Properties

- [axios](PortfolioApi.md#axios)
- [basePath](PortfolioApi.md#basepath)
- [configuration](PortfolioApi.md#configuration)

### Methods

- [addPortfolioTag](PortfolioApi.md#addportfoliotag)
- [createPortfolio](PortfolioApi.md#createportfolio)
- [destroyPortfolio](PortfolioApi.md#destroyportfolio)
- [fetchPortfolioItemsWithPortfolio](PortfolioApi.md#fetchportfolioitemswithportfolio)
- [listPortfolioTags](PortfolioApi.md#listportfoliotags)
- [listPortfolios](PortfolioApi.md#listportfolios)
- [postCopyPortfolio](PortfolioApi.md#postcopyportfolio)
- [removePortfolioTags](PortfolioApi.md#removeportfoliotags)
- [shareInfo](PortfolioApi.md#shareinfo)
- [sharePortfolio](PortfolioApi.md#shareportfolio)
- [showPortfolio](PortfolioApi.md#showportfolio)
- [showPortfolioIcon](PortfolioApi.md#showportfolioicon)
- [unDeletePortfolio](PortfolioApi.md#undeleteportfolio)
- [unsharePortfolio](PortfolioApi.md#unshareportfolio)
- [updatePortfolio](PortfolioApi.md#updateportfolio)

## Constructors

### constructor

• **new PortfolioApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/base.ts#L51)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

BaseAPI.axios

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/base.ts#L51)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

BaseAPI.basePath

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/base.ts#L51)

___

### configuration

• `Protected` **configuration**: [`Configuration`](Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/base.ts#L49)

## Methods

### addPortfolioTag

▸ **addPortfolioTag**(`id`, `tag`, `options?`): `Promise`<`AxiosResponse`<[`Tag`](../interfaces/Tag.md)[], `any`\>\>

Adds a single tag to Portfolio object

**`Summary`**

Add Tag for Portfolio

**`Throws`**

**`Memberof`**

PortfolioApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `tag` | [`Tag`](../interfaces/Tag.md)[] |  |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`Tag`](../interfaces/Tag.md)[], `any`\>\>

#### Defined in

[api.ts:5722](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L5722)

___

### createPortfolio

▸ **createPortfolio**(`portfolio`, `options?`): `Promise`<`AxiosResponse`<[`Portfolio`](../interfaces/Portfolio.md), `any`\>\>

Adds a portfolio.

**`Summary`**

Add a new portfolio

**`Throws`**

**`Memberof`**

PortfolioApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `portfolio` | [`Portfolio`](../interfaces/Portfolio.md) | Parameters needed to add a Portfolio |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`Portfolio`](../interfaces/Portfolio.md), `any`\>\>

#### Defined in

[api.ts:5734](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L5734)

___

### destroyPortfolio

▸ **destroyPortfolio**(`id`, `options?`): `Promise`<`AxiosResponse`<[`RestoreKey`](../interfaces/RestoreKey.md), `any`\>\>

Deletes the portfolio specified by the ID.

**`Summary`**

Delete an existing portfolio

**`Throws`**

**`Memberof`**

PortfolioApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`RestoreKey`](../interfaces/RestoreKey.md), `any`\>\>

#### Defined in

[api.ts:5746](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L5746)

___

### fetchPortfolioItemsWithPortfolio

▸ **fetchPortfolioItemsWithPortfolio**(`portfolioId`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`PortfolioItemsCollection`](../interfaces/PortfolioItemsCollection.md), `any`\>\>

Gets all portfilio items in the portfolio specified by the given ID.

**`Summary`**

Get all portfolio items from a specific portfolio

**`Throws`**

**`Memberof`**

PortfolioApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `portfolioId` | `string` | The Portfolio ID |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` | Field to sort collection by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`PortfolioItemsCollection`](../interfaces/PortfolioItemsCollection.md), `any`\>\>

#### Defined in

[api.ts:5762](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L5762)

___

### listPortfolioTags

▸ **listPortfolioTags**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`TagsCollection`](../interfaces/TagsCollection.md), `any`\>\>

Returns an array of Tag objects

**`Summary`**

List Tags for Portfolio

**`Throws`**

**`Memberof`**

PortfolioApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` | Field to sort collection by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`TagsCollection`](../interfaces/TagsCollection.md), `any`\>\>

#### Defined in

[api.ts:5778](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L5778)

___

### listPortfolios

▸ **listPortfolios**(`limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`PortfoliosCollection`](../interfaces/PortfoliosCollection.md), `any`\>\>

Gets a list of portfolios.

**`Summary`**

List portfolios

**`Throws`**

**`Memberof`**

PortfolioApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` | Field to sort collection by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`PortfoliosCollection`](../interfaces/PortfoliosCollection.md), `any`\>\>

#### Defined in

[api.ts:5793](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L5793)

___

### postCopyPortfolio

▸ **postCopyPortfolio**(`portfolioId`, `options?`): `Promise`<`AxiosResponse`<[`Portfolio`](../interfaces/Portfolio.md), `any`\>\>

Make a copy of the Portfolio.

**`Summary`**

Make a copy of the Portfolio

**`Throws`**

**`Memberof`**

PortfolioApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `portfolioId` | `string` | The Portfolio ID |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`Portfolio`](../interfaces/Portfolio.md), `any`\>\>

#### Defined in

[api.ts:5805](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L5805)

___

### removePortfolioTags

▸ **removePortfolioTags**(`id`, `tag`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

Remove Tags from Portfolio

**`Summary`**

Remove Tags from Portfolio

**`Throws`**

**`Memberof`**

PortfolioApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `tag` | [`Tag`](../interfaces/Tag.md)[] |  |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[api.ts:5818](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L5818)

___

### shareInfo

▸ **shareInfo**(`portfolioId`, `options?`): `Promise`<`AxiosResponse`<[`ShareInfo`](../interfaces/ShareInfo.md)[], `any`\>\>

Fetch share information about a portfolio

**`Summary`**

Fetch share information about this portfolio, the response would include a collection of groups and permissions with each group

**`Throws`**

**`Memberof`**

PortfolioApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `portfolioId` | `string` | The Portfolio ID |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ShareInfo`](../interfaces/ShareInfo.md)[], `any`\>\>

#### Defined in

[api.ts:5830](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L5830)

___

### sharePortfolio

▸ **sharePortfolio**(`portfolioId`, `sharePolicy`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

Share a Portfolio with one or more groups with specific permissions

**`Summary`**

Share a portfolio with one or more groups with specific permission

**`Throws`**

**`Memberof`**

PortfolioApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `portfolioId` | `string` | The Portfolio ID |
| `sharePolicy` | [`SharePolicy`](../interfaces/SharePolicy.md) |  |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[api.ts:5843](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L5843)

___

### showPortfolio

▸ **showPortfolio**(`id`, `options?`): `Promise`<`AxiosResponse`<[`Portfolio`](../interfaces/Portfolio.md), `any`\>\>

Gets the portfolio specified by the portfolio ID.

**`Summary`**

Get a specific portfolio

**`Throws`**

**`Memberof`**

PortfolioApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`Portfolio`](../interfaces/Portfolio.md), `any`\>\>

#### Defined in

[api.ts:5855](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L5855)

___

### showPortfolioIcon

▸ **showPortfolioIcon**(`portfolioId`, `cacheId?`, `options?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

Fetch the specified portfolio\'s icon image.

**`Summary`**

Fetches the specified portfolio\'s icon image

**`Throws`**

**`Memberof`**

PortfolioApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `portfolioId` | `string` | The Portfolio ID |
| `cacheId?` | `string` | Artificial string to help avoid falsey browser cache. This can occur after changing static resources like images. The browser will return an outdated cached response. Appending different query will result in a new async call, instead of retrieving the resource from the browser cache. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[api.ts:5868](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L5868)

___

### unDeletePortfolio

▸ **unDeletePortfolio**(`id`, `restoreKey`, `options?`): `Promise`<`AxiosResponse`<[`Portfolio`](../interfaces/Portfolio.md), `any`\>\>

Undeletes the portfolio specified by the portfolio ID.

**`Summary`**

Undelete specific portfolio

**`Throws`**

**`Memberof`**

PortfolioApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `restoreKey` | [`RestoreKey`](../interfaces/RestoreKey.md) |  |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`Portfolio`](../interfaces/Portfolio.md), `any`\>\>

#### Defined in

[api.ts:5881](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L5881)

___

### unsharePortfolio

▸ **unsharePortfolio**(`portfolioId`, `unsharePolicy`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

Unshare a Portfolio with one or more groups with specific permissions

**`Summary`**

Unshare a portfolio from one or more groups with specific permission

**`Throws`**

**`Memberof`**

PortfolioApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `portfolioId` | `string` | The Portfolio ID |
| `unsharePolicy` | [`UnsharePolicy`](../interfaces/UnsharePolicy.md) |  |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[api.ts:5894](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L5894)

___

### updatePortfolio

▸ **updatePortfolio**(`id`, `portfolio`, `options?`): `Promise`<`AxiosResponse`<[`Portfolio`](../interfaces/Portfolio.md), `any`\>\>

Returns the edited portfolio.

**`Summary`**

Edit an existing portfolio

**`Throws`**

**`Memberof`**

PortfolioApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `portfolio` | [`Portfolio`](../interfaces/Portfolio.md) | Parameters needed to update a Portfolio |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`Portfolio`](../interfaces/Portfolio.md), `any`\>\>

#### Defined in

[api.ts:5907](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L5907)
