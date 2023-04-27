[@redhat-cloud-services/host-inventory-client](../README.md) / [Exports](../modules.md) / DefaultApi

# Class: DefaultApi

DefaultApi - object-oriented interface

**`Export`**

## Hierarchy

- `BaseAPI`

  ↳ **`DefaultApi`**

## Table of contents

### Constructors

- [constructor](DefaultApi.md#constructor)

### Properties

- [axios](DefaultApi.md#axios)
- [basePath](DefaultApi.md#basepath)
- [configuration](DefaultApi.md#configuration)

### Methods

- [apiSystemProfileValidateSchema](DefaultApi.md#apisystemprofilevalidateschema)

## Constructors

### constructor

• **new DefaultApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/base.ts#L51)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

BaseAPI.axios

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/base.ts#L51)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

BaseAPI.basePath

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/base.ts#L51)

___

### configuration

• `Protected` **configuration**: [`Configuration`](Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/base.ts#L49)

## Methods

### apiSystemProfileValidateSchema

▸ **apiSystemProfileValidateSchema**(`repoBranch`, `repoFork?`, `days?`, `maxMessages?`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

Validates System Profile data from recent Kafka messages against a given spec, and compares it with the current one. Only HBI Admins can access this endpoint.

**`Summary`**

validate system profile schema

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `repoBranch` | `string` | The branch of the inventory-schemas repo to use |
| `repoFork?` | `string` | The fork of the inventory-schemas repo to use |
| `days?` | `number` | How many days worth of data to validate |
| `maxMessages?` | `number` | Stops polling when this number of messages has been collected |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[api.ts:2377](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2377)
