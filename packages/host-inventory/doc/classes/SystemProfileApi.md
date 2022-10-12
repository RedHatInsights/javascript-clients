[@redhat-cloud-services/host-inventory-client](../README.md) / [Exports](../modules.md) / SystemProfileApi

# Class: SystemProfileApi

SystemProfileApi - object-oriented interface

**`Export`**

## Hierarchy

- `BaseAPI`

  ↳ **`SystemProfileApi`**

## Table of contents

### Constructors

- [constructor](SystemProfileApi.md#constructor)

### Properties

- [axios](SystemProfileApi.md#axios)
- [basePath](SystemProfileApi.md#basepath)
- [configuration](SystemProfileApi.md#configuration)

### Methods

- [apiSystemProfileGetOperatingSystem](SystemProfileApi.md#apisystemprofilegetoperatingsystem)
- [apiSystemProfileGetSapSids](SystemProfileApi.md#apisystemprofilegetsapsids)
- [apiSystemProfileGetSapSystem](SystemProfileApi.md#apisystemprofilegetsapsystem)

## Constructors

### constructor

• **new SystemProfileApi**(`configuration?`, `basePath?`, `axios?`)

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

### apiSystemProfileGetOperatingSystem

▸ **apiSystemProfileGetOperatingSystem**(`tags?`, `perPage?`, `page?`, `staleness?`, `registeredWith?`, `filter?`, `options?`): `Promise`<`AxiosResponse`<[`SystemProfileOperatingSystemOut`](../interfaces/SystemProfileOperatingSystemOut.md)\>\>

Required permissions: inventory:hosts:read

**`Summary`**

get all operating system versions and counts on the account

**`Throws`**

**`Memberof`**

SystemProfileApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tags?` | `string`[] | filters out hosts not tagged by the given tags |
| `perPage?` | `number` | A number of items to return per page. |
| `page?` | `number` | A page number of the items to return. |
| `staleness?` | (``"unknown"`` \| ``"fresh"`` \| ``"stale"`` \| ``"stale_warning"``)[] | Culling states of the hosts. Default: fresh,stale,unknown |
| `registeredWith?` | (``"insights"`` \| ``"yupana"`` \| ``"puptoo"`` \| ``"rhsm-conduit"`` \| ``"cloud-connector"`` \| ``"!yupana"`` \| ``"!puptoo"`` \| ``"!rhsm-conduit"`` \| ``"!cloud-connector"``)[] | Filters out any host not registered by the specified reporters |
| `filter?` | `Object` | Filters hosts based on system_profile fields |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`SystemProfileOperatingSystemOut`](../interfaces/SystemProfileOperatingSystemOut.md)\>\>

#### Defined in

[api.ts:3976](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L3976)

___

### apiSystemProfileGetSapSids

▸ **apiSystemProfileGetSapSids**(`search?`, `tags?`, `perPage?`, `page?`, `staleness?`, `registeredWith?`, `filter?`, `options?`): `Promise`<`AxiosResponse`<[`SystemProfileSapSystemOut`](../interfaces/SystemProfileSapSystemOut.md)\>\>

Required permissions: inventory:hosts:read

**`Summary`**

get all sap sids values and counts on the account

**`Throws`**

**`Memberof`**

SystemProfileApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `search?` | `string` | Used for searching tags and sap_sids that match the given search string. For searching tags, a tag\&#39;s namespace, key, and/or value is used for matching. |
| `tags?` | `string`[] | filters out hosts not tagged by the given tags |
| `perPage?` | `number` | A number of items to return per page. |
| `page?` | `number` | A page number of the items to return. |
| `staleness?` | (``"unknown"`` \| ``"fresh"`` \| ``"stale"`` \| ``"stale_warning"``)[] | Culling states of the hosts. Default: fresh,stale,unknown |
| `registeredWith?` | (``"insights"`` \| ``"yupana"`` \| ``"puptoo"`` \| ``"rhsm-conduit"`` \| ``"cloud-connector"`` \| ``"!yupana"`` \| ``"!puptoo"`` \| ``"!rhsm-conduit"`` \| ``"!cloud-connector"``)[] | Filters out any host not registered by the specified reporters |
| `filter?` | `Object` | Filters hosts based on system_profile fields |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`SystemProfileSapSystemOut`](../interfaces/SystemProfileSapSystemOut.md)\>\>

#### Defined in

[api.ts:3994](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L3994)

___

### apiSystemProfileGetSapSystem

▸ **apiSystemProfileGetSapSystem**(`tags?`, `perPage?`, `page?`, `staleness?`, `registeredWith?`, `filter?`, `options?`): `Promise`<`AxiosResponse`<[`SystemProfileSapSystemOut`](../interfaces/SystemProfileSapSystemOut.md)\>\>

Required permissions: inventory:hosts:read

**`Summary`**

get all sap system values and counts on the account

**`Throws`**

**`Memberof`**

SystemProfileApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tags?` | `string`[] | filters out hosts not tagged by the given tags |
| `perPage?` | `number` | A number of items to return per page. |
| `page?` | `number` | A page number of the items to return. |
| `staleness?` | (``"unknown"`` \| ``"fresh"`` \| ``"stale"`` \| ``"stale_warning"``)[] | Culling states of the hosts. Default: fresh,stale,unknown |
| `registeredWith?` | (``"insights"`` \| ``"yupana"`` \| ``"puptoo"`` \| ``"rhsm-conduit"`` \| ``"cloud-connector"`` \| ``"!yupana"`` \| ``"!puptoo"`` \| ``"!rhsm-conduit"`` \| ``"!cloud-connector"``)[] | Filters out any host not registered by the specified reporters |
| `filter?` | `Object` | Filters hosts based on system_profile fields |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`SystemProfileSapSystemOut`](../interfaces/SystemProfileSapSystemOut.md)\>\>

#### Defined in

[api.ts:4011](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L4011)
