[@redhat-cloud-services/entitlements-client](../README.md) / [Exports](../modules.md) / ServicesApi

# Class: ServicesApi

ServicesApi - object-oriented interface

**`Export`**

ServicesApi

## Hierarchy

- `BaseAPI`

  ↳ **`ServicesApi`**

## Table of contents

### Constructors

- [constructor](ServicesApi.md#constructor)

### Properties

- [axios](ServicesApi.md#axios)
- [basePath](ServicesApi.md#basepath)
- [configuration](ServicesApi.md#configuration)

### Methods

- [servicesGet](ServicesApi.md#servicesget)

## Constructors

### constructor

• **new ServicesApi**(`configuration?`, `basePath?`, `axios?`): [`ServicesApi`](ServicesApi.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Returns

[`ServicesApi`](ServicesApi.md)

#### Inherited from

BaseAPI.constructor

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/entitlements/base.ts#L51)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

BaseAPI.axios

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/entitlements/base.ts#L51)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

BaseAPI.basePath

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/entitlements/base.ts#L51)

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/entitlements/base.ts#L49)

## Methods

### servicesGet

▸ **servicesGet**(`options?`): `Promise`\<`AxiosResponse`\<\{ `[key: string]`: [`ServiceDetails`](../interfaces/ServiceDetails.md);  }, `any`\>\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<\{ `[key: string]`: [`ServiceDetails`](../interfaces/ServiceDetails.md);  }, `any`\>\>

**`Summary`**

get a list of services a user is entitled to

**`Throws`**

**`Memberof`**

ServicesApi

#### Defined in

[api.ts:129](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/entitlements/api.ts#L129)
