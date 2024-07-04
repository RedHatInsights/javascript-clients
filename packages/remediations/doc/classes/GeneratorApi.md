[@redhat-cloud-services/remediations-client](../README.md) / [Exports](../modules.md) / GeneratorApi

# Class: GeneratorApi

GeneratorApi - object-oriented interface

**`Export`**

GeneratorApi

## Hierarchy

- `BaseAPI`

  ↳ **`GeneratorApi`**

## Table of contents

### Constructors

- [constructor](GeneratorApi.md#constructor)

### Properties

- [axios](GeneratorApi.md#axios)
- [basePath](GeneratorApi.md#basepath)
- [configuration](GeneratorApi.md#configuration)

### Methods

- [generate](GeneratorApi.md#generate)

## Constructors

### constructor

• **new GeneratorApi**(`configuration?`, `basePath?`, `axios?`): [`GeneratorApi`](GeneratorApi.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Returns

[`GeneratorApi`](GeneratorApi.md)

#### Inherited from

BaseAPI.constructor

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/remediations/base.ts#L51)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

BaseAPI.axios

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/remediations/base.ts#L51)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

BaseAPI.basePath

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/remediations/base.ts#L51)

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/remediations/base.ts#L49)

## Methods

### generate

▸ **generate**(`playbookDefinition`, `options?`): `Promise`\<`AxiosResponse`\<`string`, `any`\>\>

Generates an Ansible Playbook based on input parameters

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `playbookDefinition` | [`PlaybookDefinition`](../interfaces/PlaybookDefinition.md) |  |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`string`, `any`\>\>

**`Summary`**

Generate an Ansible Playbook

**`Throws`**

**`Memberof`**

GeneratorApi

#### Defined in

[api.ts:1542](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/remediations/api.ts#L1542)
