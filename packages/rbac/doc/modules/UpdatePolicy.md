[@redhat-cloud-services/javascript-clients](../README.md) / [Exports](../modules.md) / UpdatePolicy

# Module: UpdatePolicy

## Table of contents

### References

- [default](UpdatePolicy.md#default)

### Type Aliases

- [UpdatePolicyParams](UpdatePolicy.md#updatepolicyparams)

### Functions

- [updatePolicyParamCreator](UpdatePolicy.md#updatepolicyparamcreator)

## References

### default

Renames and re-exports [updatePolicyParamCreator](UpdatePolicy.md#updatepolicyparamcreator)

## Type Aliases

### UpdatePolicyParams

Ƭ **UpdatePolicyParams**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig` | - |
| `policyIn` | [`PolicyIn`](../interfaces/types.PolicyIn.md) | Policy to update **`Memberof`** UpdatePolicyApi |
| `uuid` | `string` | ID of policy to update **`Memberof`** UpdatePolicyApi |

#### Defined in

[UpdatePolicy/index.ts:14](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/rbac/UpdatePolicy/index.ts#L14)

## Functions

### updatePolicyParamCreator

▸ **updatePolicyParamCreator**(`...config`): `Promise`\<`RequestArgs`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [[`UpdatePolicyParams`](UpdatePolicy.md#updatepolicyparams)] \| [`string`, [`PolicyIn`](../interfaces/types.PolicyIn.md), `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Update a policy in the tenant

**`Throws`**

#### Defined in

[UpdatePolicy/index.ts:40](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/rbac/UpdatePolicy/index.ts#L40)
