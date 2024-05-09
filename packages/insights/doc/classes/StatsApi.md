[@redhat-cloud-services/insights-client](../README.md) / [Exports](../modules.md) / StatsApi

# Class: StatsApi

StatsApi - object-oriented interface

**`Export`**

StatsApi

## Hierarchy

- `BaseAPI`

  ↳ **`StatsApi`**

## Table of contents

### Constructors

- [constructor](StatsApi.md#constructor)

### Properties

- [axios](StatsApi.md#axios)
- [basePath](StatsApi.md#basepath)
- [configuration](StatsApi.md#configuration)

### Methods

- [statsList](StatsApi.md#statslist)
- [statsOverviewRetrieve](StatsApi.md#statsoverviewretrieve)
- [statsReportsRetrieve](StatsApi.md#statsreportsretrieve)
- [statsRulesRetrieve](StatsApi.md#statsrulesretrieve)
- [statsSystemsRetrieve](StatsApi.md#statssystemsretrieve)

## Constructors

### constructor

• **new StatsApi**(`configuration?`, `basePath?`, `axios?`): [`StatsApi`](StatsApi.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Returns

[`StatsApi`](StatsApi.md)

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

### statsList

▸ **statsList**(`options?`): `Promise`\<`AxiosResponse`\<`string`[][], `any`\>\>

Provide a simple list of URLs contained here.  A list of statistics views.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`string`[][], `any`\>\>

**`Throws`**

**`Memberof`**

StatsApi

#### Defined in

[api.ts:8283](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L8283)

___

### statsOverviewRetrieve

▸ **statsOverviewRetrieve**(`tags?`, `groups?`, `filterSystemProfileSapSystem?`, `filterSystemProfileSapSidsContains?`, `options?`): `Promise`\<`AxiosResponse`\<[`Stats`](../interfaces/Stats.md), `any`\>\>

Show overview statistics for this user  This gives the number of pathways, and incident, critical and important recommendations, affecting systems that the user can see.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tags?` | `string`[] | Tags have a namespace, key and value in the form namespace/key&#x3D;value |
| `groups?` | `string`[] | List of Inventory host group names |
| `filterSystemProfileSapSystem?` | `boolean` | Is this a SAP system? |
| `filterSystemProfileSapSidsContains?` | `string`[] | Are there systems which contain these SAP SIDs? |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Stats`](../interfaces/Stats.md), `any`\>\>

**`Throws`**

**`Memberof`**

StatsApi

#### Defined in

[api.ts:8297](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L8297)

___

### statsReportsRetrieve

▸ **statsReportsRetrieve**(`tags?`, `groups?`, `filterSystemProfileSapSystem?`, `filterSystemProfileSapSidsContains?`, `options?`): `Promise`\<`AxiosResponse`\<[`Stats`](../interfaces/Stats.md), `any`\>\>

Show statistics of reports impacting across categories and risks.  Only current reports are considered.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tags?` | `string`[] | Tags have a namespace, key and value in the form namespace/key&#x3D;value |
| `groups?` | `string`[] | List of Inventory host group names |
| `filterSystemProfileSapSystem?` | `boolean` | Is this a SAP system? |
| `filterSystemProfileSapSidsContains?` | `string`[] | Are there systems which contain these SAP SIDs? |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Stats`](../interfaces/Stats.md), `any`\>\>

**`Throws`**

**`Memberof`**

StatsApi

#### Defined in

[api.ts:8311](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L8311)

___

### statsRulesRetrieve

▸ **statsRulesRetrieve**(`tags?`, `groups?`, `filterSystemProfileSapSystem?`, `filterSystemProfileSapSidsContains?`, `options?`): `Promise`\<`AxiosResponse`\<[`Stats`](../interfaces/Stats.md), `any`\>\>

Show statistics of rule usage across categories and risks.  Only current reports are considered.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tags?` | `string`[] | Tags have a namespace, key and value in the form namespace/key&#x3D;value |
| `groups?` | `string`[] | List of Inventory host group names |
| `filterSystemProfileSapSystem?` | `boolean` | Is this a SAP system? |
| `filterSystemProfileSapSidsContains?` | `string`[] | Are there systems which contain these SAP SIDs? |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Stats`](../interfaces/Stats.md), `any`\>\>

**`Throws`**

**`Memberof`**

StatsApi

#### Defined in

[api.ts:8325](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L8325)

___

### statsSystemsRetrieve

▸ **statsSystemsRetrieve**(`tags?`, `groups?`, `filterSystemProfileSapSystem?`, `filterSystemProfileSapSidsContains?`, `options?`): `Promise`\<`AxiosResponse`\<[`Stats`](../interfaces/Stats.md), `any`\>\>

Show statistics of systems being impacted across categories and risks.  Only current reports are considered.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tags?` | `string`[] | Tags have a namespace, key and value in the form namespace/key&#x3D;value |
| `groups?` | `string`[] | List of Inventory host group names |
| `filterSystemProfileSapSystem?` | `boolean` | Is this a SAP system? |
| `filterSystemProfileSapSidsContains?` | `string`[] | Are there systems which contain these SAP SIDs? |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Stats`](../interfaces/Stats.md), `any`\>\>

**`Throws`**

**`Memberof`**

StatsApi

#### Defined in

[api.ts:8339](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L8339)
