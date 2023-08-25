[@redhat-cloud-services/host-inventory-client](../README.md) / [Exports](../modules.md) / UnleashApi

# Class: UnleashApi

UnleashApi - object-oriented interface

**`Export`**

## Hierarchy

- `BaseAPI`

  ↳ **`UnleashApi`**

## Table of contents

### Constructors

- [constructor](UnleashApi.md#constructor)

### Properties

- [axios](UnleashApi.md#axios)
- [basePath](UnleashApi.md#basepath)
- [configuration](UnleashApi.md#configuration)

### Methods

- [apiUnleashGetInventoryGroupsToggle](UnleashApi.md#apiunleashgetinventorygroupstoggle)

## Constructors

### constructor

• **new UnleashApi**(`configuration?`, `basePath?`, `axios?`)

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

### apiUnleashGetInventoryGroupsToggle

▸ **apiUnleashGetInventoryGroupsToggle**(`options?`): `Promise`<`AxiosResponse`<[`UnleashToggleOut`](../interfaces/UnleashToggleOut.md)\>\>

Returns the value of the hbi.api.inventory-groups toggle, if able to be retrieved.

**`Summary`**

Check whether the Groups feature is enabled

**`Throws`**

**`Memberof`**

UnleashApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`UnleashToggleOut`](../interfaces/UnleashToggleOut.md)\>\>

#### Defined in

[api.ts:6553](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L6553)
