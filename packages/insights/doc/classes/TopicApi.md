[@redhat-cloud-services/insights-client](../README.md) / [Exports](../modules.md) / TopicApi

# Class: TopicApi

TopicApi - object-oriented interface

**`Export`**

TopicApi

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

• **new TopicApi**(`configuration?`, `basePath?`, `axios?`): [`TopicApi`](TopicApi.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Returns

[`TopicApi`](TopicApi.md)

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

### topicCreate

▸ **topicCreate**(`topicEdit`, `options?`): `Promise`\<`AxiosResponse`\<[`TopicEdit`](../interfaces/TopicEdit.md), `any`\>\>

Create a new rule topic, along with its association to a rule tag

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `topicEdit` | [`TopicEdit`](../interfaces/TopicEdit.md) |  |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`TopicEdit`](../interfaces/TopicEdit.md), `any`\>\>

**`Summary`**

Create a new rule topic

**`Throws`**

**`Memberof`**

TopicApi

#### Defined in

[api.ts:9944](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L9944)

___

### topicDestroy

▸ **topicDestroy**(`slug`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Delete a rule topic.  Rules associated with the tag of this topic will be unaffected

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `slug` | `string` |  |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Delete a rule topic

**`Throws`**

**`Memberof`**

TopicApi

#### Defined in

[api.ts:9956](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L9956)

___

### topicList

▸ **topicList**(`filterSystemProfileSapSidsContains?`, `filterSystemProfileSapSystem?`, `groups?`, `showDisabled?`, `tags?`, `updateMethod?`, `options?`): `Promise`\<`AxiosResponse`\<[`Topic`](../interfaces/Topic.md)[], `any`\>\>

List the rule topics and their impacted systems counts.  Normally this only shows enabled topics, but if the \'show_disabled\' parameter is set to True then this will show disabled topics as well.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filterSystemProfileSapSidsContains?` | `string`[] | Are there systems which contain these SAP SIDs? |
| `filterSystemProfileSapSystem?` | `boolean` | Is this a SAP system? |
| `groups?` | `string`[] | List of Inventory host group names |
| `showDisabled?` | `boolean` | Display topics that are disabled as well as enabled |
| `tags?` | `string`[] | Tags have a namespace, key and value in the form namespace/key&#x3D;value |
| `updateMethod?` | (``"dnfyum"`` \| ``"ostree"``)[] | Search for systems with this updater type |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Topic`](../interfaces/Topic.md)[], `any`\>\>

**`Throws`**

**`Memberof`**

TopicApi

#### Defined in

[api.ts:9972](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L9972)

___

### topicPartialUpdate

▸ **topicPartialUpdate**(`slug`, `patchedTopicEdit?`, `options?`): `Promise`\<`AxiosResponse`\<[`TopicEdit`](../interfaces/TopicEdit.md), `any`\>\>

Update an existing rule topic.  Only the fields being changed need to be supplied

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `slug` | `string` |  |
| `patchedTopicEdit?` | [`PatchedTopicEdit`](../interfaces/PatchedTopicEdit.md) |  |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`TopicEdit`](../interfaces/TopicEdit.md), `any`\>\>

**`Summary`**

Partially update a rule topic

**`Throws`**

**`Memberof`**

TopicApi

#### Defined in

[api.ts:9985](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L9985)

___

### topicRetrieve

▸ **topicRetrieve**(`slug`, `options?`): `Promise`\<`AxiosResponse`\<[`Topic`](../interfaces/Topic.md), `any`\>\>

Retrieve a single topic by slug.  This also lists the topic\'s impacted systems count.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `slug` | `string` |  |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Topic`](../interfaces/Topic.md), `any`\>\>

**`Throws`**

**`Memberof`**

TopicApi

#### Defined in

[api.ts:9996](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L9996)

___

### topicRulesWithTagList

▸ **topicRulesWithTagList**(`slug`, `options?`): `Promise`\<`AxiosResponse`\<[`Rule`](../interfaces/Rule.md)[], `any`\>\>

Lists the available rules that have this tag.  This shows the rule information for rules with this tag.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `slug` | `string` |  |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Rule`](../interfaces/Rule.md)[], `any`\>\>

**`Throws`**

**`Memberof`**

TopicApi

#### Defined in

[api.ts:10007](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L10007)

___

### topicSystemsRetrieve

▸ **topicSystemsRetrieve**(`slug`, `filterSystemProfileSapSidsContains?`, `filterSystemProfileSapSystem?`, `groups?`, `sort?`, `tags?`, `updateMethod?`, `options?`): `Promise`\<`AxiosResponse`\<[`SystemsForRule`](../interfaces/SystemsForRule.md), `any`\>\>

List all systems affected by this rule topic.  Systems are just listed by their UUID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `slug` | `string` |  |
| `filterSystemProfileSapSidsContains?` | `string`[] | Are there systems which contain these SAP SIDs? |
| `filterSystemProfileSapSystem?` | `boolean` | Is this a SAP system? |
| `groups?` | `string`[] | List of Inventory host group names |
| `sort?` | (``"-display_name"`` \| ``"-last_seen"`` \| ``"display_name"`` \| ``"last_seen"`` \| ``"-stale_at"`` \| ``"-system_uuid"`` \| ``"-updated"`` \| ``"stale_at"`` \| ``"system_uuid"`` \| ``"updated"``)[] | Order by this field |
| `tags?` | `string`[] | Tags have a namespace, key and value in the form namespace/key&#x3D;value |
| `updateMethod?` | (``"dnfyum"`` \| ``"ostree"``)[] | Search for systems with this updater type |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`SystemsForRule`](../interfaces/SystemsForRule.md), `any`\>\>

**`Throws`**

**`Memberof`**

TopicApi

#### Defined in

[api.ts:10024](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L10024)

___

### topicUpdate

▸ **topicUpdate**(`slug`, `topicEdit`, `options?`): `Promise`\<`AxiosResponse`\<[`TopicEdit`](../interfaces/TopicEdit.md), `any`\>\>

Update an existing rule topic.  All fields need to be supplied

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `slug` | `string` |  |
| `topicEdit` | [`TopicEdit`](../interfaces/TopicEdit.md) |  |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`TopicEdit`](../interfaces/TopicEdit.md), `any`\>\>

**`Summary`**

Update a rule topic

**`Throws`**

**`Memberof`**

TopicApi

#### Defined in

[api.ts:10037](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L10037)
