[@redhat-cloud-services/approval-client](../README.md) / [Exports](../modules.md) / GraphqlApi

# Class: GraphqlApi

GraphqlApi - object-oriented interface

**`Export`**

## Hierarchy

- `BaseAPI`

  ↳ **`GraphqlApi`**

## Table of contents

### Constructors

- [constructor](GraphqlApi.md#constructor)

### Properties

- [axios](GraphqlApi.md#axios)
- [basePath](GraphqlApi.md#basepath)
- [configuration](GraphqlApi.md#configuration)

### Methods

- [postGraphql](GraphqlApi.md#postgraphql)

## Constructors

### constructor

• **new GraphqlApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/base.ts#L51)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

BaseAPI.axios

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/base.ts#L51)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

BaseAPI.basePath

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/base.ts#L51)

___

### configuration

• `Protected` **configuration**: [`Configuration`](Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/base.ts#L49)

## Methods

### postGraphql

▸ **postGraphql**(`graphqlIn`, `options?`): `Promise`<`AxiosResponse`<[`GraphqlOut`](../interfaces/GraphqlOut.md), `any`\>\>

Perform a GraphQL query

**`Summary`**

Perform a GraphQL query

**`Throws`**

**`Memberof`**

GraphqlApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `graphqlIn` | [`GraphqlIn`](../interfaces/GraphqlIn.md) | GraphQL query request |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`GraphqlOut`](../interfaces/GraphqlOut.md), `any`\>\>

#### Defined in

[api.ts:1135](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1135)
