[@redhat-cloud-services/javascript-clients](../README.md) / [Exports](../modules.md) / v2/WorkspacesRead

# Module: v2/WorkspacesRead

## Table of contents

### References

- [default](v2_WorkspacesRead.md#default)

### Type Aliases

- [WorkspacesReadParams](v2_WorkspacesRead.md#workspacesreadparams)

### Functions

- [workspacesReadParamCreator](v2_WorkspacesRead.md#workspacesreadparamcreator)

## References

### default

Renames and re-exports [workspacesReadParamCreator](v2_WorkspacesRead.md#workspacesreadparamcreator)

## Type Aliases

### WorkspacesReadParams

Ƭ **WorkspacesReadParams**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig` | - |
| `uuid` | `string` | Unique identification **`Memberof`** WorkspacesReadApi |

#### Defined in

v2/WorkspacesRead/index.ts:14

## Functions

### workspacesReadParamCreator

▸ **workspacesReadParamCreator**(`...config`): `Promise`\<`RequestArgs`\>

Get a workspace in tenant

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`string`, `AxiosRequestConfig`\<`any`\>] \| [[`WorkspacesReadParams`](v2_WorkspacesRead.md#workspacesreadparams)] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Get a workspace in tenant

**`Throws`**

#### Defined in

v2/WorkspacesRead/index.ts:34
