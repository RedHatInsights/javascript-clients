[@redhat-cloud-services/javascript-clients](../README.md) / [Exports](../modules.md) / GetGroup

# Module: GetGroup

## Table of contents

### References

- [default](GetGroup.md#default)

### Type Aliases

- [GetGroupParams](GetGroup.md#getgroupparams)

### Functions

- [getGroupParamCreator](GetGroup.md#getgroupparamcreator)

## References

### default

Renames and re-exports [getGroupParamCreator](GetGroup.md#getgroupparamcreator)

## Type Aliases

### GetGroupParams

Ƭ **GetGroupParams**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig` | - |
| `uuid` | `string` | ID of group to get **`Memberof`** GetGroupApi |

#### Defined in

GetGroup/index.ts:14

## Functions

### getGroupParamCreator

▸ **getGroupParamCreator**(`...config`): `Promise`\<`RequestArgs`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`string`, `AxiosRequestConfig`\<`any`\>] \| [[`GetGroupParams`](GetGroup.md#getgroupparams)] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Get a group in the tenant

**`Throws`**

#### Defined in

GetGroup/index.ts:34
