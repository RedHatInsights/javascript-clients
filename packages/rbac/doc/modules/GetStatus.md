[@redhat-cloud-services/javascript-clients](../README.md) / [Exports](../modules.md) / GetStatus

# Module: GetStatus

## Table of contents

### References

- [default](GetStatus.md#default)

### Type Aliases

- [GetStatusParams](GetStatus.md#getstatusparams)

### Functions

- [getStatusParamCreator](GetStatus.md#getstatusparamcreator)

## References

### default

Renames and re-exports [getStatusParamCreator](GetStatus.md#getstatusparamcreator)

## Type Aliases

### GetStatusParams

Ƭ **GetStatusParams**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `options?` | `AxiosRequestConfig` |

#### Defined in

[GetStatus/index.ts:14](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/rbac/GetStatus/index.ts#L14)

## Functions

### getStatusParamCreator

▸ **getStatusParamCreator**(`...config`): `Promise`\<`RequestArgs`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [[`GetStatusParams`](GetStatus.md#getstatusparams)] \| [`AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Obtain server status

**`Throws`**

#### Defined in

[GetStatus/index.ts:28](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/rbac/GetStatus/index.ts#L28)
