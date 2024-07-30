[@redhat-cloud-services/javascript-clients](../README.md) / [Exports](../modules.md) / v2/WorkspacesDelete

# Module: v2/WorkspacesDelete

## Table of contents

### References

- [default](v2_WorkspacesDelete.md#default)

### Type Aliases

- [WorkspacesDeleteParams](v2_WorkspacesDelete.md#workspacesdeleteparams)

### Functions

- [workspacesDeleteParamCreator](v2_WorkspacesDelete.md#workspacesdeleteparamcreator)

## References

### default

Renames and re-exports [workspacesDeleteParamCreator](v2_WorkspacesDelete.md#workspacesdeleteparamcreator)

## Type Aliases

### WorkspacesDeleteParams

Ƭ **WorkspacesDeleteParams**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig` | - |
| `uuid` | `string` | Unique identification **`Memberof`** WorkspacesDeleteApi |

#### Defined in

v2/WorkspacesDelete/index.ts:14

## Functions

### workspacesDeleteParamCreator

▸ **workspacesDeleteParamCreator**(`...config`): `Promise`\<`RequestArgs`\>

Delete a workspace

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`string`, `AxiosRequestConfig`\<`any`\>] \| [[`WorkspacesDeleteParams`](v2_WorkspacesDelete.md#workspacesdeleteparams)] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Delete the workspace

**`Throws`**

#### Defined in

v2/WorkspacesDelete/index.ts:34
