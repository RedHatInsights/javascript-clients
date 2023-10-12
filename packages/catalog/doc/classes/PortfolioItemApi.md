[@redhat-cloud-services/catalog-client](../README.md) / [Exports](../modules.md) / PortfolioItemApi

# Class: PortfolioItemApi

PortfolioItemApi - object-oriented interface

**`Export`**

## Hierarchy

- `BaseAPI`

  ↳ **`PortfolioItemApi`**

## Table of contents

### Constructors

- [constructor](PortfolioItemApi.md#constructor)

### Properties

- [axios](PortfolioItemApi.md#axios)
- [basePath](PortfolioItemApi.md#basepath)
- [configuration](PortfolioItemApi.md#configuration)

### Methods

- [addPortfolioItemTag](PortfolioItemApi.md#addportfolioitemtag)
- [createPortfolioItem](PortfolioItemApi.md#createportfolioitem)
- [destroyPortfolioItem](PortfolioItemApi.md#destroyportfolioitem)
- [getPortfolioItemNextName](PortfolioItemApi.md#getportfolioitemnextname)
- [listPortfolioItemTags](PortfolioItemApi.md#listportfolioitemtags)
- [listPortfolioItems](PortfolioItemApi.md#listportfolioitems)
- [listServicePlans](PortfolioItemApi.md#listserviceplans)
- [postCopyPortfolioItem](PortfolioItemApi.md#postcopyportfolioitem)
- [removePortfolioItemTags](PortfolioItemApi.md#removeportfolioitemtags)
- [showPortfolioItem](PortfolioItemApi.md#showportfolioitem)
- [showPortfolioItemIcon](PortfolioItemApi.md#showportfolioitemicon)
- [unDeletePortfolioItem](PortfolioItemApi.md#undeleteportfolioitem)
- [updatePortfolioItem](PortfolioItemApi.md#updateportfolioitem)

## Constructors

### constructor

• **new PortfolioItemApi**(`configuration?`, `basePath?`, `axios?`)

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

### addPortfolioItemTag

▸ **addPortfolioItemTag**(`id`, `tag`, `options?`): `Promise`<`AxiosResponse`<[`Tag`](../interfaces/Tag.md)[]\>\>

Adds a single tag to a Portfolio Item object

**`Summary`**

Add Tag for Portfolio Item

**`Throws`**

**`Memberof`**

PortfolioItemApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `tag` | [`Tag`](../interfaces/Tag.md)[] |  |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`Tag`](../interfaces/Tag.md)[]\>\>

#### Defined in

[api.ts:6931](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L6931)

___

### createPortfolioItem

▸ **createPortfolioItem**(`createPortfolioItem`, `options?`): `Promise`<`AxiosResponse`<[`PortfolioItem`](../interfaces/PortfolioItem.md)\>\>

Adds a name and description for a portfolio item and returns the newly created portfolio item.

**`Summary`**

Add a new portfolio item

**`Throws`**

**`Memberof`**

PortfolioItemApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `createPortfolioItem` | [`CreatePortfolioItem`](../interfaces/CreatePortfolioItem.md) |  |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`PortfolioItem`](../interfaces/PortfolioItem.md)\>\>

#### Defined in

[api.ts:6943](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L6943)

___

### destroyPortfolioItem

▸ **destroyPortfolioItem**(`id`, `options?`): `Promise`<`AxiosResponse`<[`RestoreKey`](../interfaces/RestoreKey.md)\>\>

Deletes the portfolio item based on portfolio item ID passed

**`Summary`**

Delete an existing portfolio item

**`Throws`**

**`Memberof`**

PortfolioItemApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`RestoreKey`](../interfaces/RestoreKey.md)\>\>

#### Defined in

[api.ts:6955](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L6955)

___

### getPortfolioItemNextName

▸ **getPortfolioItemNextName**(`portfolioItemId`, `destinationPortfolioId?`, `options?`): `Promise`<`AxiosResponse`<[`PortfolioItemNextName`](../interfaces/PortfolioItemNextName.md)\>\>

Get the next name for a the Portfolio Item prior to a copy operation

**`Summary`**

Get the next name for a the Portfolio Item prior to a copy operation

**`Throws`**

**`Memberof`**

PortfolioItemApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `portfolioItemId` | `string` | The Portfolio Item ID |
| `destinationPortfolioId?` | `string` | The destination portfolio to compare names against |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`PortfolioItemNextName`](../interfaces/PortfolioItemNextName.md)\>\>

#### Defined in

[api.ts:6968](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L6968)

___

### listPortfolioItemTags

▸ **listPortfolioItemTags**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`TagsCollection`](../interfaces/TagsCollection.md)\>\>

Returns an array of Tag objects

**`Summary`**

List Tags for Portfolio Items

**`Throws`**

**`Memberof`**

PortfolioItemApi

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

`Promise`<`AxiosResponse`<[`TagsCollection`](../interfaces/TagsCollection.md)\>\>

#### Defined in

[api.ts:6984](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L6984)

___

### listPortfolioItems

▸ **listPortfolioItems**(`limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`PortfolioItemsCollection`](../interfaces/PortfolioItemsCollection.md)\>\>

Gets a list of portfolio items.

**`Summary`**

List all portfolio items

**`Throws`**

**`Memberof`**

PortfolioItemApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` | Field to sort collection by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`PortfolioItemsCollection`](../interfaces/PortfolioItemsCollection.md)\>\>

#### Defined in

[api.ts:6999](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L6999)

___

### listServicePlans

▸ **listServicePlans**(`portfolioItemId`, `options?`): `Promise`<`AxiosResponse`<[`ServicePlan`](../interfaces/ServicePlan.md)[]\>\>

Gets all service plans for a portfolio item.

**`Summary`**

Gets all service plans for a specific portfolio item; requires a connection to the catalog inventory service.

**`Throws`**

**`Memberof`**

PortfolioItemApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `portfolioItemId` | `string` | The Portfolio Item ID |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ServicePlan`](../interfaces/ServicePlan.md)[]\>\>

#### Defined in

[api.ts:7011](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L7011)

___

### postCopyPortfolioItem

▸ **postCopyPortfolioItem**(`portfolioItemId`, `copyPortfolioItem?`, `options?`): `Promise`<`AxiosResponse`<[`PortfolioItem`](../interfaces/PortfolioItem.md)\>\>

Make a copy of the Portfolio Item.

**`Summary`**

Make a copy of the Portfolio Item

**`Throws`**

**`Memberof`**

PortfolioItemApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `portfolioItemId` | `string` | The Portfolio Item ID |
| `copyPortfolioItem?` | [`CopyPortfolioItem`](../interfaces/CopyPortfolioItem.md) |  |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`PortfolioItem`](../interfaces/PortfolioItem.md)\>\>

#### Defined in

[api.ts:7024](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L7024)

___

### removePortfolioItemTags

▸ **removePortfolioItemTags**(`id`, `tag`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

Remove Tags from Portfolio Item

**`Summary`**

Remove Tags from Portfolio Item

**`Throws`**

**`Memberof`**

PortfolioItemApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `tag` | [`Tag`](../interfaces/Tag.md)[] |  |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[api.ts:7037](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L7037)

___

### showPortfolioItem

▸ **showPortfolioItem**(`id`, `showDiscarded?`, `options?`): `Promise`<`AxiosResponse`<[`PortfolioItem`](../interfaces/PortfolioItem.md)\>\>

Gets a specific portfolio item based on the portfolio item ID passed

**`Summary`**

Gets a specific portfolio item

**`Throws`**

**`Memberof`**

PortfolioItemApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `showDiscarded?` | `boolean` | Whether or not to display the discarded result. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`PortfolioItem`](../interfaces/PortfolioItem.md)\>\>

#### Defined in

[api.ts:7050](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L7050)

___

### showPortfolioItemIcon

▸ **showPortfolioItemIcon**(`portfolioItemId`, `options?`): `Promise`<`AxiosResponse`<`any`\>\>

Fetch the specified portfolio item\'s icon image.

**`Summary`**

Fetches the specified portfolio item\'s icon image

**`Throws`**

**`Memberof`**

PortfolioItemApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `portfolioItemId` | `string` | The Portfolio Item ID |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`any`\>\>

#### Defined in

[api.ts:7062](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L7062)

___

### unDeletePortfolioItem

▸ **unDeletePortfolioItem**(`portfolioItemId`, `restoreKey`, `options?`): `Promise`<`AxiosResponse`<[`PortfolioItem`](../interfaces/PortfolioItem.md)\>\>

If a record has been discarded, this operation will undelete it so it can be requested normally.

**`Summary`**

Undelete a specified Portfolio Item

**`Throws`**

**`Memberof`**

PortfolioItemApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `portfolioItemId` | `string` | The Portfolio Item ID |
| `restoreKey` | [`RestoreKey`](../interfaces/RestoreKey.md) |  |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`PortfolioItem`](../interfaces/PortfolioItem.md)\>\>

#### Defined in

[api.ts:7075](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L7075)

___

### updatePortfolioItem

▸ **updatePortfolioItem**(`id`, `portfolioItem`, `options?`): `Promise`<`AxiosResponse`<[`PortfolioItem`](../interfaces/PortfolioItem.md)\>\>

Edits portfolio item specified by the given ID.

**`Summary`**

Edit an existing portfolio item

**`Throws`**

**`Memberof`**

PortfolioItemApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `portfolioItem` | [`PortfolioItem`](../interfaces/PortfolioItem.md) | Parameters needed to update a Portfolio Item |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`PortfolioItem`](../interfaces/PortfolioItem.md)\>\>

#### Defined in

[api.ts:7088](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L7088)
