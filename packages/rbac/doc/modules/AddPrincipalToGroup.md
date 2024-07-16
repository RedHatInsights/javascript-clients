[@redhat-cloud-services/javascript-clients](../README.md) / [Exports](../modules.md) / AddPrincipalToGroup

# Module: AddPrincipalToGroup

## Table of contents

### References

- [default](AddPrincipalToGroup.md#default)

### Type Aliases

- [AddPrincipalToGroupParams](AddPrincipalToGroup.md#addprincipaltogroupparams)

### Functions

- [addPrincipalToGroupParamCreator](AddPrincipalToGroup.md#addprincipaltogroupparamcreator)

## References

### default

Renames and re-exports [addPrincipalToGroupParamCreator](AddPrincipalToGroup.md#addprincipaltogroupparamcreator)

## Type Aliases

### AddPrincipalToGroupParams

Ƭ **AddPrincipalToGroupParams**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `groupPrincipalIn` | [`GroupPrincipalIn`](../interfaces/types.GroupPrincipalIn.md) | Principal to add to a group **`Memberof`** AddPrincipalToGroupApi |
| `options?` | `AxiosRequestConfig` | - |
| `uuid` | `string` | ID of group to update **`Memberof`** AddPrincipalToGroupApi |

#### Defined in

AddPrincipalToGroup/index.ts:14

## Functions

### addPrincipalToGroupParamCreator

▸ **addPrincipalToGroupParamCreator**(`...config`): `Promise`\<`RequestArgs`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [[`AddPrincipalToGroupParams`](AddPrincipalToGroup.md#addprincipaltogroupparams)] \| [`string`, [`GroupPrincipalIn`](../interfaces/types.GroupPrincipalIn.md), `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Add a principal to a group in the tenant

**`Throws`**

#### Defined in

AddPrincipalToGroup/index.ts:40
