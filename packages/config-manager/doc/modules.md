[@redhat-cloud-services/config-manager-client](README.md) / Exports

# @redhat-cloud-services/config-manager-client

## Table of contents

### Classes

- [Configuration](classes/Configuration.md)
- [DefaultApi](classes/DefaultApi.md)

### Interfaces

- [ConfigurationParameters](interfaces/ConfigurationParameters.md)
- [InlineObject](interfaces/InlineObject.md)
- [InlineResponse200](interfaces/InlineResponse200.md)
- [Profile](interfaces/Profile.md)

### Functions

- [DefaultApiAxiosParamCreator](modules.md#defaultapiaxiosparamcreator)
- [DefaultApiFactory](modules.md#defaultapifactory)
- [DefaultApiFp](modules.md#defaultapifp)

## Functions

### DefaultApiAxiosParamCreator

▸ **DefaultApiAxiosParamCreator**(`configuration?`): `Object`

DefaultApi - axios parameter creator

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type | Description |
| :------ | :------ | :------ |
| `createProfile` | (`inlineObject`: [`InlineObject`](interfaces/InlineObject.md), `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `getPlaybook` | (`profileId`: `string`, `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `getProfile` | (`id`: `string`, `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `getProfiles` | (`limit?`: `number`, `offset?`: `number`, `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |

**`Export`**

#### Defined in

[api.ts:162](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/config-manager/api.ts#L162)

___

### DefaultApiFactory

▸ **DefaultApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

DefaultApi - factory interface

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |
| `basePath?` | `string` |
| `axios?` | `AxiosInstance` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `createProfile` | (`inlineObject`: [`InlineObject`](interfaces/InlineObject.md), `options?`: `any`) => `AxiosPromise`\<[`Profile`](interfaces/Profile.md)\> |
| `getPlaybook` | (`profileId`: `string`, `options?`: `any`) => `AxiosPromise`\<`object`\> |
| `getProfile` | (`id`: `string`, `options?`: `any`) => `AxiosPromise`\<[`Profile`](interfaces/Profile.md)\> |
| `getProfiles` | (`limit?`: `number`, `offset?`: `number`, `options?`: `any`) => `AxiosPromise`\<[`InlineResponse200`](interfaces/InlineResponse200.md)\> |

**`Export`**

#### Defined in

[api.ts:391](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/config-manager/api.ts#L391)

___

### DefaultApiFp

▸ **DefaultApiFp**(`configuration?`): `Object`

DefaultApi - functional programming interface

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `createProfile` | (`inlineObject`: [`InlineObject`](interfaces/InlineObject.md), `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`Profile`](interfaces/Profile.md)\>\> |
| `getPlaybook` | (`profileId`: `string`, `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<`object`\>\> |
| `getProfile` | (`id`: `string`, `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`Profile`](interfaces/Profile.md)\>\> |
| `getProfiles` | (`limit?`: `number`, `offset?`: `number`, `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`InlineResponse200`](interfaces/InlineResponse200.md)\>\> |

**`Export`**

#### Defined in

[api.ts:325](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/config-manager/api.ts#L325)
