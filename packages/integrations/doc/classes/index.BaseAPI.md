[@redhat-cloud-services/javascript-clients](../README.md) / [Exports](../modules.md) / [index](../modules/index.md) / BaseAPI

# Class: BaseAPI

[index](../modules/index.md).BaseAPI

**`Export`**

BaseAPI

## Table of contents

### Constructors

- [constructor](index.BaseAPI.md#constructor)

### Properties

- [axios](index.BaseAPI.md#axios)
- [basePath](index.BaseAPI.md#basepath)
- [configuration](index.BaseAPI.md#configuration)

## Constructors

### constructor

• **new BaseAPI**(`configuration?`, `basePath?`, `axios?`): [`BaseAPI`](index.BaseAPI.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | `Configuration` | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Returns

[`BaseAPI`](index.BaseAPI.md)

#### Defined in

[packages/integrations/base.ts:53](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/base.ts#L53)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Defined in

[packages/integrations/base.ts:53](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/base.ts#L53)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Defined in

[packages/integrations/base.ts:53](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/base.ts#L53)

___

### configuration

• `Protected` **configuration**: `undefined` \| `Configuration`

#### Defined in

[packages/integrations/base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/base.ts#L51)
