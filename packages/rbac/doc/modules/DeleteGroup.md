[@redhat-cloud-services/javascript-clients](../README.md) / [Exports](../modules.md) / DeleteGroup

# Module: DeleteGroup

## Table of contents

### References

- [default](DeleteGroup.md#default)

### Type Aliases

- [DeleteGroupParams](DeleteGroup.md#deletegroupparams)

### Functions

- [deleteGroupParamCreator](DeleteGroup.md#deletegroupparamcreator)

## References

### default

Renames and re-exports [deleteGroupParamCreator](DeleteGroup.md#deletegroupparamcreator)

## Type Aliases

### DeleteGroupParams

Ƭ **DeleteGroupParams**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig` | - |
| `uuid` | `string` | ID of group to delete **`Memberof`** DeleteGroupApi |

#### Defined in

DeleteGroup/index.ts:14

## Functions

### deleteGroupParamCreator

▸ **deleteGroupParamCreator**(`...config`): `Promise`\<`RequestArgs`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [[`DeleteGroupParams`](DeleteGroup.md#deletegroupparams)] \| [`string`, `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Delete a group in the tenant

**`Throws`**

#### Defined in

DeleteGroup/index.ts:34
