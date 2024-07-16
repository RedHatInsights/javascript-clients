[@redhat-cloud-services/javascript-clients](../README.md) / [Exports](../modules.md) / CreatePolicies

# Module: CreatePolicies

## Table of contents

### References

- [default](CreatePolicies.md#default)

### Type Aliases

- [CreatePoliciesParams](CreatePolicies.md#createpoliciesparams)

### Functions

- [createPoliciesParamCreator](CreatePolicies.md#createpoliciesparamcreator)

## References

### default

Renames and re-exports [createPoliciesParamCreator](CreatePolicies.md#createpoliciesparamcreator)

## Type Aliases

### CreatePoliciesParams

Ƭ **CreatePoliciesParams**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig` | - |
| `policyIn` | [`PolicyIn`](../interfaces/types.PolicyIn.md) | Policy to create **`Memberof`** CreatePoliciesApi |

#### Defined in

CreatePolicies/index.ts:14

## Functions

### createPoliciesParamCreator

▸ **createPoliciesParamCreator**(`...config`): `Promise`\<`RequestArgs`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [[`CreatePoliciesParams`](CreatePolicies.md#createpoliciesparams)] \| [[`PolicyIn`](../interfaces/types.PolicyIn.md), `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Create a policy in a tenant

**`Throws`**

#### Defined in

CreatePolicies/index.ts:34
