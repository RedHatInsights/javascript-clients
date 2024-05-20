[@redhat-cloud-services/notifications-client](../README.md) / [Exports](../modules.md) / BaseAPI

# Class: BaseAPI

**`Export`**

BaseAPI

## Table of contents

### Constructors

- [constructor](BaseAPI.md#constructor)

### Properties

- [axios](BaseAPI.md#axios)
- [basePath](BaseAPI.md#basepath)
- [configuration](BaseAPI.md#configuration)

## Constructors

### constructor

• **new BaseAPI**(`configuration?`, `basePath?`, `axios?`): [`BaseAPI`](BaseAPI.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | `Configuration` | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Returns

[`BaseAPI`](BaseAPI.md)

#### Defined in

[packages/notifications/base.ts:53](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/notifications/base.ts#L53)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Defined in

[packages/notifications/base.ts:53](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/notifications/base.ts#L53)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Defined in

[packages/notifications/base.ts:53](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/notifications/base.ts#L53)

___

### configuration

• `Protected` **configuration**: `undefined` \| `Configuration`

#### Defined in

[packages/notifications/base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/notifications/base.ts#L51)
