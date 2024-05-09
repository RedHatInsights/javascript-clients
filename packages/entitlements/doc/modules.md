[@redhat-cloud-services/entitlements-client](README.md) / Exports

# @redhat-cloud-services/entitlements-client

## Table of contents

### Classes

- [Configuration](classes/Configuration.md)
- [ServicesApi](classes/ServicesApi.md)

### Interfaces

- [ConfigurationParameters](interfaces/ConfigurationParameters.md)
- [ServiceDetails](interfaces/ServiceDetails.md)

### Functions

- [ServicesApiAxiosParamCreator](modules.md#servicesapiaxiosparamcreator)
- [ServicesApiFactory](modules.md#servicesapifactory)
- [ServicesApiFp](modules.md#servicesapifp)

## Functions

### ServicesApiAxiosParamCreator

▸ **ServicesApiAxiosParamCreator**(`configuration?`): `Object`

ServicesApi - axios parameter creator

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type | Description |
| :------ | :------ | :------ |
| `servicesGet` | (`options?`: `any`) => `Promise`\<`RequestArgs`\> | - |

**`Export`**

#### Defined in

[api.ts:40](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/entitlements/api.ts#L40)

___

### ServicesApiFactory

▸ **ServicesApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

ServicesApi - factory interface

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
| `servicesGet` | (`options?`: `any`) => `AxiosPromise`\<\{ `[key: string]`: [`ServiceDetails`](interfaces/ServiceDetails.md);  }\> |

**`Export`**

#### Defined in

[api.ts:101](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/entitlements/api.ts#L101)

___

### ServicesApiFp

▸ **ServicesApiFp**(`configuration?`): `Object`

ServicesApi - functional programming interface

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `servicesGet` | (`options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<\{ `[key: string]`: [`ServiceDetails`](interfaces/ServiceDetails.md);  }\>\> |

**`Export`**

#### Defined in

[api.ts:79](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/entitlements/api.ts#L79)
