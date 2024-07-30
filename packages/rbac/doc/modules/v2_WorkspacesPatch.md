[@redhat-cloud-services/javascript-clients](../README.md) / [Exports](../modules.md) / v2/WorkspacesPatch

# Module: v2/WorkspacesPatch

## Table of contents

### References

- [default](v2_WorkspacesPatch.md#default)

### Type Aliases

- [WorkspacesPatchParams](v2_WorkspacesPatch.md#workspacespatchparams)

### Functions

- [workspacesPatchParamCreator](v2_WorkspacesPatch.md#workspacespatchparamcreator)

## References

### default

Renames and re-exports [workspacesPatchParamCreator](v2_WorkspacesPatch.md#workspacespatchparamcreator)

## Type Aliases

### WorkspacesPatchParams

Ƭ **WorkspacesPatchParams**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig` | - |
| `uuid` | `string` | Unique identification **`Memberof`** WorkspacesPatchApi |
| `workspacesPatchWorkspaceRequest` | [`WorkspacesPatchWorkspaceRequest`](../interfaces/v2_types.WorkspacesPatchWorkspaceRequest.md) | **`Memberof`** WorkspacesPatchApi |

#### Defined in

v2/WorkspacesPatch/index.ts:14

## Functions

### workspacesPatchParamCreator

▸ **workspacesPatchParamCreator**(`...config`): `Promise`\<`RequestArgs`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [[`WorkspacesPatchParams`](v2_WorkspacesPatch.md#workspacespatchparams)] \| [`string`, [`WorkspacesPatchWorkspaceRequest`](../interfaces/v2_types.WorkspacesPatchWorkspaceRequest.md), `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Throws`**

#### Defined in

v2/WorkspacesPatch/index.ts:39
