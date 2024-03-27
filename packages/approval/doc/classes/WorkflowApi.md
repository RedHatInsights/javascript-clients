[@redhat-cloud-services/approval-client](../README.md) / [Exports](../modules.md) / WorkflowApi

# Class: WorkflowApi

WorkflowApi - object-oriented interface

**`Export`**

## Hierarchy

- `BaseAPI`

  ↳ **`WorkflowApi`**

## Table of contents

### Constructors

- [constructor](WorkflowApi.md#constructor)

### Properties

- [axios](WorkflowApi.md#axios)
- [basePath](WorkflowApi.md#basepath)
- [configuration](WorkflowApi.md#configuration)

### Methods

- [addWorkflowToTemplate](WorkflowApi.md#addworkflowtotemplate)
- [destroyWorkflow](WorkflowApi.md#destroyworkflow)
- [linkWorkflow](WorkflowApi.md#linkworkflow)
- [listWorkflows](WorkflowApi.md#listworkflows)
- [listWorkflowsByTemplate](WorkflowApi.md#listworkflowsbytemplate)
- [reposition](WorkflowApi.md#reposition)
- [showWorkflow](WorkflowApi.md#showworkflow)
- [unlinkWorkflow](WorkflowApi.md#unlinkworkflow)
- [updateWorkflow](WorkflowApi.md#updateworkflow)

## Constructors

### constructor

• **new WorkflowApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/base.ts#L51)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

BaseAPI.axios

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/base.ts#L51)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

BaseAPI.basePath

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/base.ts#L51)

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/base.ts#L49)

## Methods

### addWorkflowToTemplate

▸ **addWorkflowToTemplate**(`templateId`, `workflow`, `options?`): `Promise`<`AxiosResponse`<[`Workflow`](../interfaces/Workflow.md), `any`\>\>

Create a workflow from a template identified by its id, available to admin only

**`Summary`**

Create a workflow from a template

**`Throws`**

**`Memberof`**

WorkflowApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `templateId` | `string` | ID of a template |
| `workflow` | [`Workflow`](../interfaces/Workflow.md) | Parameters needed to create a workflow |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`Workflow`](../interfaces/Workflow.md), `any`\>\>

#### Defined in

[api.ts:2492](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L2492)

___

### destroyWorkflow

▸ **destroyWorkflow**(`id`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

Delete an approval workflow by its id, available to admin only

**`Summary`**

Delete an approval workflow

**`Throws`**

**`Memberof`**

WorkflowApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID used to select a resource |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[api.ts:2504](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L2504)

___

### linkWorkflow

▸ **linkWorkflow**(`id`, `resourceObject`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

Link a resource object to a workflow identified by its id, available to admin only

**`Summary`**

Create a resource link to a workflow

**`Throws`**

**`Memberof`**

WorkflowApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID used to select a resource |
| `resourceObject` | [`ResourceObject`](../interfaces/ResourceObject.md) | Parameters needed to create a link |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[api.ts:2517](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L2517)

___

### listWorkflows

▸ **listWorkflows**(`appName?`, `objectId?`, `objectType?`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`WorkflowCollection`](../interfaces/WorkflowCollection.md), `any`\>\>

Find approval workflows matching search parameters, available to admin only. Optionally select workflows linked to a resource object whose app_name, object_type and object_id are specified by query parameters. Default sorting is by sequence number in ascending order.

**`Summary`**

List approval workflows

**`Throws`**

**`Memberof`**

WorkflowApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appName?` | `string` | Name of the application |
| `objectId?` | `string` | ID of a resource object |
| `objectType?` | `string` | Type of a resource object |
| `limit?` | `number` | Maximum number of items per page. Used by pagination |
| `offset?` | `number` | Number of items to skip before starting to collect the result set. Used by pagination |
| `filter?` | `object` | Filter for querying collections |
| `sortBy?` | `string` | Attribute used to sort a collection |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`WorkflowCollection`](../interfaces/WorkflowCollection.md), `any`\>\>

#### Defined in

[api.ts:2535](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L2535)

___

### listWorkflowsByTemplate

▸ **listWorkflowsByTemplate**(`templateId`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`WorkflowCollection`](../interfaces/WorkflowCollection.md), `any`\>\>

Find workflows based on the template id, available to admin only

**`Summary`**

List all workflows belonging to a template

**`Throws`**

**`Memberof`**

WorkflowApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `templateId` | `string` | ID of a template |
| `limit?` | `number` | Maximum number of items per page. Used by pagination |
| `offset?` | `number` | Number of items to skip before starting to collect the result set. Used by pagination |
| `filter?` | `object` | Filter for querying collections |
| `sortBy?` | `string` | Attribute used to sort a collection |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`WorkflowCollection`](../interfaces/WorkflowCollection.md), `any`\>\>

#### Defined in

[api.ts:2551](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L2551)

___

### reposition

▸ **reposition**(`id`, `reposition`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

Adjust the position of a workflow related to others by an offset number

**`Summary`**

Adjust the position of a workflow

**`Throws`**

**`Memberof`**

WorkflowApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID used to select a resource |
| `reposition` | [`Reposition`](../interfaces/Reposition.md) | How many levels should the sequence be brought up or down |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[api.ts:2564](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L2564)

___

### showWorkflow

▸ **showWorkflow**(`id`, `options?`): `Promise`<`AxiosResponse`<[`Workflow`](../interfaces/Workflow.md), `any`\>\>

Find an approval workflow by its id, available to admin only

**`Summary`**

Return an approval workflow

**`Throws`**

**`Memberof`**

WorkflowApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID used to select a resource |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`Workflow`](../interfaces/Workflow.md), `any`\>\>

#### Defined in

[api.ts:2576](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L2576)

___

### unlinkWorkflow

▸ **unlinkWorkflow**(`id`, `resourceObject`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

Break the link between a resource object selected by the body and a workflow by its id, available to admin only

**`Summary`**

Break the link between a resource object and a workflow

**`Throws`**

**`Memberof`**

WorkflowApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID used to select a resource |
| `resourceObject` | [`ResourceObject`](../interfaces/ResourceObject.md) | Parameters needed to select a resource object |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[api.ts:2589](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L2589)

___

### updateWorkflow

▸ **updateWorkflow**(`id`, `workflow`, `options?`): `Promise`<`AxiosResponse`<[`Workflow`](../interfaces/Workflow.md), `any`\>\>

Find an approval workflow by its id and update its content, available to admin only

**`Summary`**

Update an approval workflow

**`Throws`**

**`Memberof`**

WorkflowApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID used to select a resource |
| `workflow` | [`Workflow`](../interfaces/Workflow.md) | Parameters needed to update an approval workflow |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`Workflow`](../interfaces/Workflow.md), `any`\>\>

#### Defined in

[api.ts:2602](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L2602)
