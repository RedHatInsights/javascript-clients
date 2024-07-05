[@redhat-cloud-services/insights-client](../README.md) / [Exports](../modules.md) / AckApi

# Class: AckApi

AckApi - object-oriented interface

**`Export`**

AckApi

## Hierarchy

- `BaseAPI`

  ↳ **`AckApi`**

## Table of contents

### Constructors

- [constructor](AckApi.md#constructor)

### Properties

- [axios](AckApi.md#axios)
- [basePath](AckApi.md#basepath)
- [configuration](AckApi.md#configuration)

### Methods

- [ackAllList](AckApi.md#ackalllist)
- [ackCreate](AckApi.md#ackcreate)
- [ackDestroy](AckApi.md#ackdestroy)
- [ackList](AckApi.md#acklist)
- [ackRetrieve](AckApi.md#ackretrieve)
- [ackUpdate](AckApi.md#ackupdate)

## Constructors

### constructor

• **new AckApi**(`configuration?`, `basePath?`, `axios?`): [`AckApi`](AckApi.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Returns

[`AckApi`](AckApi.md)

#### Inherited from

BaseAPI.constructor

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/base.ts#L51)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

BaseAPI.axios

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/base.ts#L51)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

BaseAPI.basePath

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/base.ts#L51)

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/base.ts#L49)

## Methods

### ackAllList

▸ **ackAllList**(`options?`): `Promise`\<`AxiosResponse`\<[`AllAck`](../interfaces/AllAck.md)[], `any`\>\>

List acks from all accounts, with org_id.  Has no pagination.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`AllAck`](../interfaces/AllAck.md)[], `any`\>\>

**`Throws`**

**`Memberof`**

AckApi

#### Defined in

[api.ts:3032](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L3032)

___

### ackCreate

▸ **ackCreate**(`ackInput`, `options?`): `Promise`\<`AxiosResponse`\<[`Ack`](../interfaces/Ack.md), `any`\>\>

Add an acknowledgement for a rule, by rule ID.  If there\'s already an acknowledgement of this rule by this accounts org_id, then return that.  Otherwise, a new ack is created.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ackInput` | [`AckInput`](../interfaces/AckInput.md) |  |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Ack`](../interfaces/Ack.md), `any`\>\>

**`Throws`**

**`Memberof`**

AckApi

#### Defined in

[api.ts:3043](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L3043)

___

### ackDestroy

▸ **ackDestroy**(`ruleId`, `options?`): `Promise`\<`AxiosResponse`\<`string`, `any`\>\>

Delete an acknowledgement for a rule, by its rule ID.  If the ack existed, it is deleted and a 204 is returned.  Otherwise, a 404 is returned.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ruleId` | `string` |  |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`string`, `any`\>\>

**`Throws`**

**`Memberof`**

AckApi

#### Defined in

[api.ts:3054](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L3054)

___

### ackList

▸ **ackList**(`limit?`, `offset?`, `options?`): `Promise`\<`AxiosResponse`\<[`PaginatedAckList`](../interfaces/PaginatedAckList.md), `any`\>\>

List acks from this account by org_id where the rule is active  Will return an empty list if this account has no acks.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit?` | `number` | Number of results to return per page. |
| `offset?` | `number` | The initial index from which to return the results. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`PaginatedAckList`](../interfaces/PaginatedAckList.md), `any`\>\>

**`Throws`**

**`Memberof`**

AckApi

#### Defined in

[api.ts:3066](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L3066)

___

### ackRetrieve

▸ **ackRetrieve**(`ruleId`, `options?`): `Promise`\<`AxiosResponse`\<[`Ack`](../interfaces/Ack.md), `any`\>\>

Acks acknowledge (and therefore hide) a rule from view in an account.  This view handles listing, retrieving, creating and deleting acks.  Acks are created and deleted by Insights rule ID, not by their own ack ID.  param: rule_id: Rule ID defined by Insights ruleset

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ruleId` | `string` |  |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Ack`](../interfaces/Ack.md), `any`\>\>

**`Throws`**

**`Memberof`**

AckApi

#### Defined in

[api.ts:3077](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L3077)

___

### ackUpdate

▸ **ackUpdate**(`ruleId`, `ackJustification?`, `options?`): `Promise`\<`AxiosResponse`\<[`Ack`](../interfaces/Ack.md), `any`\>\>

Update an acknowledgement for a rule, by rule ID.  A new justification can be supplied.  The username is taken from the authenticated request.  The updated ack is returned.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ruleId` | `string` |  |
| `ackJustification?` | [`AckJustification`](../interfaces/AckJustification.md) |  |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Ack`](../interfaces/Ack.md), `any`\>\>

**`Throws`**

**`Memberof`**

AckApi

#### Defined in

[api.ts:3089](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L3089)
