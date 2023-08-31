[@redhat-cloud-services/remediations-client](../README.md) / [Exports](../modules.md) / GeneratorApi

# Class: GeneratorApi

GeneratorApi - object-oriented interface

**`Export`**

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

• **new GeneratorApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/base.ts#L51)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

BaseAPI.axios

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/base.ts#L51)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

BaseAPI.basePath

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/base.ts#L51)

___

### configuration

• `Protected` **configuration**: [`Configuration`](Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/base.ts#L49)

## Methods

### generate

▸ **generate**(`playbookDefinition`, `options?`): `Promise`<`AxiosResponse`<`string`, `any`\>\>

Generates an Ansible Playbook based on input parameters

**`Summary`**

Generate an Ansible Playbook

**`Throws`**

**`Memberof`**

GeneratorApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `playbookDefinition` | [`PlaybookDefinition`](../interfaces/PlaybookDefinition.md) |  |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`string`, `any`\>\>

#### Defined in

[api.ts:1459](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L1459)
