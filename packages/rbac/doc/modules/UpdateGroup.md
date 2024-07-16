[@redhat-cloud-services/javascript-clients](../README.md) / [Exports](../modules.md) / UpdateGroup

# Module: UpdateGroup

## Table of contents

### References

- [default](UpdateGroup.md#default)

### Type Aliases

- [UpdateGroupParams](UpdateGroup.md#updategroupparams)

### Functions

- [updateGroupParamCreator](UpdateGroup.md#updategroupparamcreator)

## References

### default

Renames and re-exports [updateGroupParamCreator](UpdateGroup.md#updategroupparamcreator)

## Type Aliases

### UpdateGroupParams

Ƭ **UpdateGroupParams**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `group` | [`Group`](../interfaces/types.Group.md) | Group to update in tenant **`Memberof`** UpdateGroupApi |
| `options?` | `AxiosRequestConfig` | - |
| `uuid` | `string` | ID of group to update **`Memberof`** UpdateGroupApi |

#### Defined in

UpdateGroup/index.ts:14

## Functions

### updateGroupParamCreator

▸ **updateGroupParamCreator**(`...config`): `Promise`\<`RequestArgs`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [[`UpdateGroupParams`](UpdateGroup.md#updategroupparams)] \| [`string`, [`Group`](../interfaces/types.Group.md), `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Update a group in the tenant

**`Throws`**

#### Defined in

UpdateGroup/index.ts:40
