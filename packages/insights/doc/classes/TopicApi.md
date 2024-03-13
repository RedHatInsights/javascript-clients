[@redhat-cloud-services/insights-client](../README.md) / [Exports](../modules.md) / TopicApi

# Class: TopicApi

TopicApi - object-oriented interface

**`Export`**

## Hierarchy

- `BaseAPI`

  ↳ **`TopicApi`**

## Table of contents

### Constructors

- [constructor](TopicApi.md#constructor)

### Properties

- [axios](TopicApi.md#axios)
- [basePath](TopicApi.md#basepath)
- [configuration](TopicApi.md#configuration)

### Methods

- [topicCreate](TopicApi.md#topiccreate)
- [topicDestroy](TopicApi.md#topicdestroy)
- [topicList](TopicApi.md#topiclist)
- [topicPartialUpdate](TopicApi.md#topicpartialupdate)
- [topicRetrieve](TopicApi.md#topicretrieve)
- [topicRulesWithTagList](TopicApi.md#topicruleswithtaglist)
- [topicSystemsRetrieve](TopicApi.md#topicsystemsretrieve)
- [topicUpdate](TopicApi.md#topicupdate)

## Constructors

### constructor

• **new TopicApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[base.ts:51](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/insights/base.ts#L51)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

BaseAPI.axios

#### Defined in

[base.ts:51](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/insights/base.ts#L51)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

BaseAPI.basePath

#### Defined in

[base.ts:51](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/insights/base.ts#L51)

___

### configuration

• `Protected` **configuration**: [`Configuration`](Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[base.ts:49](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/insights/base.ts#L49)

## Methods

### topicCreate

▸ **topicCreate**(`topicEdit`, `options?`): `Promise`<`AxiosResponse`<[`TopicEdit`](../interfaces/TopicEdit.md), `any`\>\>

Create a new rule topic, along with its association to a rule tag

**`Summary`**

Create a new rule topic

**`Throws`**

**`Memberof`**

TopicApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `topicEdit` | [`TopicEdit`](../interfaces/TopicEdit.md) |  |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`TopicEdit`](../interfaces/TopicEdit.md), `any`\>\>

#### Defined in

[api.ts:9552](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/insights/api.ts#L9552)

___

### topicDestroy

▸ **topicDestroy**(`slug`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

Delete a rule topic.  Rules associated with the tag of this topic will be unaffected

**`Summary`**

Delete a rule topic

**`Throws`**

**`Memberof`**

TopicApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `slug` | `string` |  |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[api.ts:9564](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/insights/api.ts#L9564)

___

### topicList

▸ **topicList**(`filterSystemProfileSapSidsContains?`, `filterSystemProfileSapSystem?`, `groups?`, `showDisabled?`, `tags?`, `options?`): `Promise`<`AxiosResponse`<[`Topic`](../interfaces/Topic.md)[], `any`\>\>

List the rule topics and their impacted systems counts.  Normally this only shows enabled topics, but if the \'show_disabled\' parameter is set to True then this will show disabled topics as well.

**`Throws`**

**`Memberof`**

TopicApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filterSystemProfileSapSidsContains?` | `string`[] | Are there systems which contain these SAP SIDs? |
| `filterSystemProfileSapSystem?` | `boolean` | Is this a SAP system? |
| `groups?` | `string`[] | List of Inventory host group names |
| `showDisabled?` | `boolean` | Display topics that are disabled as well as enabled |
| `tags?` | `string`[] | Tags have a namespace, key and value in the form namespace/key&#x3D;value |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`Topic`](../interfaces/Topic.md)[], `any`\>\>

#### Defined in

[api.ts:9579](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/insights/api.ts#L9579)

___

### topicPartialUpdate

▸ **topicPartialUpdate**(`slug`, `patchedTopicEdit?`, `options?`): `Promise`<`AxiosResponse`<[`TopicEdit`](../interfaces/TopicEdit.md), `any`\>\>

Update an existing rule topic.  Only the fields being changed need to be supplied

**`Summary`**

Partially update a rule topic

**`Throws`**

**`Memberof`**

TopicApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `slug` | `string` |  |
| `patchedTopicEdit?` | [`PatchedTopicEdit`](../interfaces/PatchedTopicEdit.md) |  |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`TopicEdit`](../interfaces/TopicEdit.md), `any`\>\>

#### Defined in

[api.ts:9592](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/insights/api.ts#L9592)

___

### topicRetrieve

▸ **topicRetrieve**(`slug`, `options?`): `Promise`<`AxiosResponse`<[`Topic`](../interfaces/Topic.md), `any`\>\>

Retrieve a single topic by slug.  This also lists the topic\'s impacted systems count.

**`Throws`**

**`Memberof`**

TopicApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `slug` | `string` |  |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`Topic`](../interfaces/Topic.md), `any`\>\>

#### Defined in

[api.ts:9603](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/insights/api.ts#L9603)

___

### topicRulesWithTagList

▸ **topicRulesWithTagList**(`slug`, `options?`): `Promise`<`AxiosResponse`<[`Rule`](../interfaces/Rule.md)[], `any`\>\>

Lists the available rules that have this tag.  This shows the rule information for rules with this tag.

**`Throws`**

**`Memberof`**

TopicApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `slug` | `string` |  |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`Rule`](../interfaces/Rule.md)[], `any`\>\>

#### Defined in

[api.ts:9614](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/insights/api.ts#L9614)

___

### topicSystemsRetrieve

▸ **topicSystemsRetrieve**(`slug`, `filterSystemProfileSapSidsContains?`, `filterSystemProfileSapSystem?`, `groups?`, `sort?`, `tags?`, `options?`): `Promise`<`AxiosResponse`<[`SystemsForRule`](../interfaces/SystemsForRule.md), `any`\>\>

List all systems affected by this rule topic.  Systems are just listed by their UUID.

**`Throws`**

**`Memberof`**

TopicApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `slug` | `string` |  |
| `filterSystemProfileSapSidsContains?` | `string`[] | Are there systems which contain these SAP SIDs? |
| `filterSystemProfileSapSystem?` | `boolean` | Is this a SAP system? |
| `groups?` | `string`[] | List of Inventory host group names |
| `sort?` | (``"-display_name"`` \| ``"-last_seen"`` \| ``"display_name"`` \| ``"last_seen"`` \| ``"-stale_at"`` \| ``"-system_uuid"`` \| ``"-updated"`` \| ``"stale_at"`` \| ``"system_uuid"`` \| ``"updated"``)[] | Order by this field |
| `tags?` | `string`[] | Tags have a namespace, key and value in the form namespace/key&#x3D;value |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`SystemsForRule`](../interfaces/SystemsForRule.md), `any`\>\>

#### Defined in

[api.ts:9630](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/insights/api.ts#L9630)

___

### topicUpdate

▸ **topicUpdate**(`slug`, `topicEdit`, `options?`): `Promise`<`AxiosResponse`<[`TopicEdit`](../interfaces/TopicEdit.md), `any`\>\>

Update an existing rule topic.  All fields need to be supplied

**`Summary`**

Update a rule topic

**`Throws`**

**`Memberof`**

TopicApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `slug` | `string` |  |
| `topicEdit` | [`TopicEdit`](../interfaces/TopicEdit.md) |  |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`TopicEdit`](../interfaces/TopicEdit.md), `any`\>\>

#### Defined in

[api.ts:9643](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/insights/api.ts#L9643)
