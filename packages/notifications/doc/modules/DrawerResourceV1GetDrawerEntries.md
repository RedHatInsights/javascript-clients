[@redhat-cloud-services/javascript-clients](../README.md) / [Exports](../modules.md) / DrawerResourceV1GetDrawerEntries

# Module: DrawerResourceV1GetDrawerEntries

## Table of contents

### References

- [default](DrawerResourceV1GetDrawerEntries.md#default)

### Type Aliases

- [DrawerResourceV1GetDrawerEntriesParams](DrawerResourceV1GetDrawerEntries.md#drawerresourcev1getdrawerentriesparams)

### Functions

- [drawerResourceV1GetDrawerEntriesParamCreator](DrawerResourceV1GetDrawerEntries.md#drawerresourcev1getdrawerentriesparamcreator)

## References

### default

Renames and re-exports [drawerResourceV1GetDrawerEntriesParamCreator](DrawerResourceV1GetDrawerEntries.md#drawerresourcev1getdrawerentriesparamcreator)

## Type Aliases

### DrawerResourceV1GetDrawerEntriesParams

Ƭ **DrawerResourceV1GetDrawerEntriesParams**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `appIds?` | `Set`\<`string`\> | **`Memberof`** DrawerResourceV1GetDrawerEntriesApi |
| `bundleIds?` | `Set`\<`string`\> | **`Memberof`** DrawerResourceV1GetDrawerEntriesApi |
| `endDate?` | `string` | **`Memberof`** DrawerResourceV1GetDrawerEntriesApi |
| `eventTypeIds?` | `Set`\<`string`\> | **`Memberof`** DrawerResourceV1GetDrawerEntriesApi |
| `limit?` | `number` | **`Memberof`** DrawerResourceV1GetDrawerEntriesApi |
| `offset?` | `number` | **`Memberof`** DrawerResourceV1GetDrawerEntriesApi |
| `options?` | `AxiosRequestConfig` | - |
| `pageNumber?` | `number` | **`Memberof`** DrawerResourceV1GetDrawerEntriesApi |
| `readStatus?` | `boolean` | **`Memberof`** DrawerResourceV1GetDrawerEntriesApi |
| `sortBy?` | `string` | **`Memberof`** DrawerResourceV1GetDrawerEntriesApi |
| `sortBy2?` | `string` | **`Memberof`** DrawerResourceV1GetDrawerEntriesApi |
| `startDate?` | `string` | **`Memberof`** DrawerResourceV1GetDrawerEntriesApi |

#### Defined in

[DrawerResourceV1GetDrawerEntries/index.ts:14](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/notifications/DrawerResourceV1GetDrawerEntries/index.ts#L14)

## Functions

### drawerResourceV1GetDrawerEntriesParamCreator

▸ **drawerResourceV1GetDrawerEntriesParamCreator**(`...config`): `Promise`\<`RequestArgs`\>

Allowed `sort_by` fields are `bundleIds`, `applicationIds`, `eventTypeIds`, `startTime`, `endTime` and `read`. The ordering can be optionally specified by appending `:asc` or `:desc` to the field, e.g. `bundle:desc`. Defaults to `desc` for the `created` field and to `asc` for all other fields.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [[`DrawerResourceV1GetDrawerEntriesParams`](DrawerResourceV1GetDrawerEntries.md#drawerresourcev1getdrawerentriesparams)] \| [`Set`\<`string`\>, `Set`\<`string`\>, `string`, `Set`\<`string`\>, `number`, `number`, `number`, `boolean`, `string`, `string`, `string`, `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Retrieve drawer notifications entries.

**`Throws`**

#### Defined in

[DrawerResourceV1GetDrawerEntries/index.ts:94](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/notifications/DrawerResourceV1GetDrawerEntries/index.ts#L94)
