[@redhat-cloud-services/javascript-clients](../README.md) / [Exports](../modules.md) / v2/WorkspacesUpdate

# Module: v2/WorkspacesUpdate

## Table of contents

### References

- [default](v2_WorkspacesUpdate.md#default)

### Type Aliases

- [WorkspacesUpdateParams](v2_WorkspacesUpdate.md#workspacesupdateparams)

### Functions

- [workspacesUpdateParamCreator](v2_WorkspacesUpdate.md#workspacesupdateparamcreator)

## References

### default

Renames and re-exports [workspacesUpdateParamCreator](v2_WorkspacesUpdate.md#workspacesupdateparamcreator)

## Type Aliases

### WorkspacesUpdateParams

Ƭ **WorkspacesUpdateParams**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig` | - |
| `uuid` | `string` | Unique identification **`Memberof`** WorkspacesUpdateApi |
| `workspacesUpdateWorkspaceRequest` | [`WorkspacesUpdateWorkspaceRequest`](../interfaces/v2_types.WorkspacesUpdateWorkspaceRequest.md) | **`Memberof`** WorkspacesUpdateApi |

#### Defined in

v2/WorkspacesUpdate/index.ts:14

## Functions

### workspacesUpdateParamCreator

▸ **workspacesUpdateParamCreator**(`...config`): `Promise`\<`RequestArgs`\>

Edit a workspace

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [[`WorkspacesUpdateParams`](v2_WorkspacesUpdate.md#workspacesupdateparams)] \| [`string`, [`WorkspacesUpdateWorkspaceRequest`](../interfaces/v2_types.WorkspacesUpdateWorkspaceRequest.md), `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Edit the workspace name or description

**`Throws`**

#### Defined in

v2/WorkspacesUpdate/index.ts:40
