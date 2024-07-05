[@redhat-cloud-services/insights-client](../README.md) / [Exports](../modules.md) / KcsApi

# Class: KcsApi

KcsApi - object-oriented interface

**`Export`**

KcsApi

## Hierarchy

- `BaseAPI`

  ↳ **`KcsApi`**

## Table of contents

### Constructors

- [constructor](KcsApi.md#constructor)

### Properties

- [axios](KcsApi.md#axios)
- [basePath](KcsApi.md#basepath)
- [configuration](KcsApi.md#configuration)

### Methods

- [kcsList](KcsApi.md#kcslist)
- [kcsRetrieve](KcsApi.md#kcsretrieve)

## Constructors

### constructor

• **new KcsApi**(`configuration?`, `basePath?`, `axios?`): [`KcsApi`](KcsApi.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Returns

[`KcsApi`](KcsApi.md)

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

### kcsList

▸ **kcsList**(`nodeIds?`, `options?`): `Promise`\<`AxiosResponse`\<[`Kcs`](../interfaces/Kcs.md)[], `any`\>\>

Looks for all active rules with KCS solutions  Returns a list of dicts of the C.R.C rule URL and its KCS solution number

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `nodeIds?` | `string`[] | Display the rule urls for the given list of comma separated KCS solution node_ids |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Kcs`](../interfaces/Kcs.md)[], `any`\>\>

**`Throws`**

**`Memberof`**

KcsApi

#### Defined in

[api.ts:5001](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L5001)

___

### kcsRetrieve

▸ **kcsRetrieve**(`nodeId`, `options?`): `Promise`\<`AxiosResponse`\<`string`[], `any`\>\>

Gets active rule(s) for a particular KCS solution (node_id)  Returns a list of C.R.C rule url(s) for that KCS solution

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `nodeId` | `string` |  |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`string`[], `any`\>\>

**`Throws`**

**`Memberof`**

KcsApi

#### Defined in

[api.ts:5012](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L5012)
