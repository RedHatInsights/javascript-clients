[@redhat-cloud-services/insights-client](../README.md) / [Exports](../modules.md) / HostackApi

# Class: HostackApi

HostackApi - object-oriented interface

**`Export`**

## Hierarchy

- `BaseAPI`

  ↳ **`HostackApi`**

## Table of contents

### Constructors

- [constructor](HostackApi.md#constructor)

### Properties

- [axios](HostackApi.md#axios)
- [basePath](HostackApi.md#basepath)
- [configuration](HostackApi.md#configuration)

### Methods

- [hostackCreate](HostackApi.md#hostackcreate)
- [hostackDestroy](HostackApi.md#hostackdestroy)
- [hostackList](HostackApi.md#hostacklist)
- [hostackRetrieve](HostackApi.md#hostackretrieve)
- [hostackUpdate](HostackApi.md#hostackupdate)

## Constructors

### constructor

• **new HostackApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L51)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

BaseAPI.axios

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L51)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

BaseAPI.basePath

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L51)

___

### configuration

• `Protected` **configuration**: [`Configuration`](Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L49)

## Methods

### hostackCreate

▸ **hostackCreate**(`hostAckInput`, `options?`): `Promise`<`AxiosResponse`<[`HostAck`](../interfaces/HostAck.md)\>\>

Add an acknowledgement for a rule, by rule ID, system, and account.  Return the new hostack.  If there\'s already an acknowledgement of this rule by this account for a system, then return that.  This does not take an \'id\' number.

**`Throws`**

**`Memberof`**

HostackApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hostAckInput` | [`HostAckInput`](../interfaces/HostAckInput.md) |  |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`HostAck`](../interfaces/HostAck.md)\>\>

#### Defined in

[api.ts:4757](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L4757)

___

### hostackDestroy

▸ **hostackDestroy**(`id`, `options?`): `Promise`<`AxiosResponse`<`string`\>\>

Delete an acknowledgement for a rule, for a system, for an account, by its ID.  Takes the hostack ID (given in the hostack list) as an identifier.

**`Throws`**

**`Memberof`**

HostackApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | A unique integer value identifying this host ack. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`string`\>\>

#### Defined in

[api.ts:4768](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L4768)

___

### hostackList

▸ **hostackList**(`filterSystemProfileSapSidsContains?`, `filterSystemProfileSapSystem?`, `groups?`, `limit?`, `offset?`, `ruleId?`, `tags?`, `options?`): `Promise`<`AxiosResponse`<[`PaginatedHostAckList`](../interfaces/PaginatedHostAckList.md)\>\>

List host acks from this account for a system where the rule is active.  Hostacks are retrieved, edited and deleted by the \'id\' field.

**`Throws`**

**`Memberof`**

HostackApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filterSystemProfileSapSidsContains?` | `string`[] | Are there systems which contain these SAP SIDs? |
| `filterSystemProfileSapSystem?` | `boolean` | Is this a SAP system? |
| `groups?` | `string`[] | List of Inventory host group names |
| `limit?` | `number` | Number of results to return per page. |
| `offset?` | `number` | The initial index from which to return the results. |
| `ruleId?` | `string`[] | Display host acknowledgement of this/these rules |
| `tags?` | `string`[] | Tags have a namespace, key and value in the form namespace/key&#x3D;value |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`PaginatedHostAckList`](../interfaces/PaginatedHostAckList.md)\>\>

#### Defined in

[api.ts:4785](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L4785)

___

### hostackRetrieve

▸ **hostackRetrieve**(`id`, `options?`): `Promise`<`AxiosResponse`<[`HostAck`](../interfaces/HostAck.md)\>\>

HostAcks acknowledge (and therefore hide) a rule from view in an account for a specific system.  This view handles listing, retrieving, creating and deleting hostacks.

**`Throws`**

**`Memberof`**

HostackApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | A unique integer value identifying this host ack. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`HostAck`](../interfaces/HostAck.md)\>\>

#### Defined in

[api.ts:4796](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L4796)

___

### hostackUpdate

▸ **hostackUpdate**(`id`, `hostAckJustification?`, `options?`): `Promise`<`AxiosResponse`<[`HostAckJustification`](../interfaces/HostAckJustification.md)\>\>

Update the justification for this host acknowledgement.  The justification is taken from the request body.  The created_by field is taken from the username in the x-rh-identity field, and the updated_at field is set to the current time.

**`Throws`**

**`Memberof`**

HostackApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | A unique integer value identifying this host ack. |
| `hostAckJustification?` | [`HostAckJustification`](../interfaces/HostAckJustification.md) |  |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`HostAckJustification`](../interfaces/HostAckJustification.md)\>\>

#### Defined in

[api.ts:4808](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L4808)
