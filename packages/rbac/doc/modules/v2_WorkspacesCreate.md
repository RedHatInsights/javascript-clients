[@redhat-cloud-services/javascript-clients](../README.md) / [Exports](../modules.md) / v2/WorkspacesCreate

# Module: v2/WorkspacesCreate

## Table of contents

### References

- [default](v2_WorkspacesCreate.md#default)

### Type Aliases

- [WorkspacesCreateParams](v2_WorkspacesCreate.md#workspacescreateparams)

### Functions

- [workspacesCreateParamCreator](v2_WorkspacesCreate.md#workspacescreateparamcreator)

## References

### default

Renames and re-exports [workspacesCreateParamCreator](v2_WorkspacesCreate.md#workspacescreateparamcreator)

## Type Aliases

### WorkspacesCreateParams

Ƭ **WorkspacesCreateParams**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig` | - |
| `workspacesBasicWorkspace` | [`WorkspacesBasicWorkspace`](../interfaces/v2_types.WorkspacesBasicWorkspace.md) | **`Memberof`** WorkspacesCreateApi |

#### Defined in

v2/WorkspacesCreate/index.ts:14

## Functions

### workspacesCreateParamCreator

▸ **workspacesCreateParamCreator**(`...config`): `Promise`\<`RequestArgs`\>

Create workspace in tenant

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [[`WorkspacesCreateParams`](v2_WorkspacesCreate.md#workspacescreateparams)] \| [[`WorkspacesBasicWorkspace`](../interfaces/v2_types.WorkspacesBasicWorkspace.md), `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Create workspace in tenant

**`Throws`**

#### Defined in

v2/WorkspacesCreate/index.ts:34
