[@redhat-cloud-services/quickstarts-client](README.md) / Exports

# @redhat-cloud-services/quickstarts-client

## Table of contents

### Interfaces

- [BadRequest](interfaces/BadRequest.md)
- [FavoritesGet200Response](interfaces/FavoritesGet200Response.md)
- [HelptopicsGet200Response](interfaces/HelptopicsGet200Response.md)
- [HelptopicsNameGet200Response](interfaces/HelptopicsNameGet200Response.md)
- [NotFound](interfaces/NotFound.md)
- [QuickstartsGet200Response](interfaces/QuickstartsGet200Response.md)
- [V1FavoriteQuickstart](interfaces/V1FavoriteQuickstart.md)
- [V1HelpTopic](interfaces/V1HelpTopic.md)
- [V1HelpTopicTagsInner](interfaces/V1HelpTopicTagsInner.md)
- [V1Quickstart](interfaces/V1Quickstart.md)
- [V1QuickstartFavoriteQuickstartInner](interfaces/V1QuickstartFavoriteQuickstartInner.md)
- [V1QuickstartProgress](interfaces/V1QuickstartProgress.md)

### Functions

- [favoritesGet](modules.md#favoritesget)
- [favoritesPost](modules.md#favoritespost)
- [helptopicsGet](modules.md#helptopicsget)
- [helptopicsNameGet](modules.md#helptopicsnameget)
- [quickstartsGet](modules.md#quickstartsget)
- [quickstartsIdGet](modules.md#quickstartsidget)

## Functions

### favoritesGet

▸ **favoritesGet**(`...config`): `Promise`\<`RequestArgs`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`FavoritesGetParams`] \| [`AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Returns list of all favorites

**`Throws`**

#### Defined in

FavoritesGet/index.ts:28

___

### favoritesPost

▸ **favoritesPost**(`...config`): `Promise`\<`RequestArgs`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`FavoritesPostParams`] \| [[`V1FavoriteQuickstart`](interfaces/V1FavoriteQuickstart.md), `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Add a favorite

**`Throws`**

#### Defined in

FavoritesPost/index.ts:34

___

### helptopicsGet

▸ **helptopicsGet**(`...config`): `Promise`\<`RequestArgs`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`AxiosRequestConfig`\<`any`\>] \| [`HelptopicsGetParams`] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Returns list of all help topics

**`Throws`**

#### Defined in

HelptopicsGet/index.ts:28

___

### helptopicsNameGet

▸ **helptopicsNameGet**(`...config`): `Promise`\<`RequestArgs`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`AxiosRequestConfig`\<`any`\>] \| [`HelptopicsNameGetParams`] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Return a help topics set by topic name

**`Throws`**

#### Defined in

HelptopicsNameGet/index.ts:28

___

### quickstartsGet

▸ **quickstartsGet**(`...config`): `Promise`\<`RequestArgs`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`AxiosRequestConfig`\<`any`\>] \| [`QuickstartsGetParams`] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Returns list of all quickstarts

**`Throws`**

#### Defined in

QuickstartsGet/index.ts:28

___

### quickstartsIdGet

▸ **quickstartsIdGet**(`...config`): `Promise`\<`RequestArgs`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`AxiosRequestConfig`\<`any`\>] \| [`QuickstartsIdGetParams`] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Return a quickstarts by ID

**`Throws`**

#### Defined in

QuickstartsIdGet/index.ts:28
