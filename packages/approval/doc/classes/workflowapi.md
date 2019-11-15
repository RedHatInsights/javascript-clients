[@redhat-cloud-services/approval-client](../README.md) > [WorkflowApi](../classes/workflowapi.md)

# Class: WorkflowApi

WorkflowApi - object-oriented interface

*__export__*: 

*__class__*: WorkflowApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ WorkflowApi**

## Index

### Constructors

* [constructor](workflowapi.md#constructor)

### Properties

* [axios](workflowapi.md#axios)
* [basePath](workflowapi.md#basepath)
* [configuration](workflowapi.md#configuration)

### Methods

* [addWorkflowToTemplate](workflowapi.md#addworkflowtotemplate)
* [destroyWorkflow](workflowapi.md#destroyworkflow)
* [linkWorkflow](workflowapi.md#linkworkflow)
* [listWorkflows](workflowapi.md#listworkflows)
* [listWorkflowsByTemplate](workflowapi.md#listworkflowsbytemplate)
* [resolveWorkflows](workflowapi.md#resolveworkflows)
* [showWorkflow](workflowapi.md#showworkflow)
* [unlinkAll](workflowapi.md#unlinkall)
* [unlinkWorkflow](workflowapi.md#unlinkworkflow)
* [updateWorkflow](workflowapi.md#updateworkflow)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new WorkflowApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): [WorkflowApi](workflowapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L49)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` axios | `AxiosInstance` |  globalAxios |

**Returns:** [WorkflowApi](workflowapi.md)

___

## Properties

<a id="axios"></a>

### `<Protected>` axios

**● axios**: *`AxiosInstance`*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#axios)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L51)*

___
<a id="basepath"></a>

### `<Protected>` basePath

**● basePath**: *`string`*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#basepath)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L51)*

___
<a id="configuration"></a>

### `<Protected>` configuration

**● configuration**: *[Configuration](configuration.md) \| `undefined`*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#configuration)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L49)*

___

## Methods

<a id="addworkflowtotemplate"></a>

###  addWorkflowToTemplate

▸ **addWorkflowToTemplate**(templateId: *`string`*, workflow: *[Workflow](../interfaces/workflow.md)*, options?: *`any`*): `AxiosPromise`<[Workflow](../interfaces/workflow.md)>

*Defined in [api.ts:2351](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L2351)*

Add a workflow by given template id

*__summary__*: Add a workflow by given template id, only available for admin

*__throws__*: {RequiredError}

*__memberof__*: WorkflowApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| templateId | `string` |  Id of template |
| workflow | [Workflow](../interfaces/workflow.md) |  Parameters need to create workflow |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[Workflow](../interfaces/workflow.md)>

___
<a id="destroyworkflow"></a>

###  destroyWorkflow

▸ **destroyWorkflow**(id: *`string`*, options?: *`any`*): `AxiosPromise`<`Response`>

*Defined in [api.ts:2363](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L2363)*

Delete approval workflow by given id

*__summary__*: Delete approval workflow by given id, only available for admin

*__throws__*: {RequiredError}

*__memberof__*: WorkflowApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  Query by id |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<`Response`>

___
<a id="linkworkflow"></a>

###  linkWorkflow

▸ **linkWorkflow**(id: *`string`*, resourceObject: *[ResourceObject](../interfaces/resourceobject.md)*, options?: *`any`*): `AxiosPromise`<`Response`>

*Defined in [api.ts:2376](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L2376)*

Link a resource object to a given workflow

*__summary__*: Create a resource link to a given workflow

*__throws__*: {RequiredError}

*__memberof__*: WorkflowApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  Query by id |
| resourceObject | [ResourceObject](../interfaces/resourceobject.md) |  Parameters needed to create a link |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<`Response`>

___
<a id="listworkflows"></a>

###  listWorkflows

▸ **listWorkflows**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[WorkflowCollection](../interfaces/workflowcollection.md)>

*Defined in [api.ts:2390](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L2390)*

Return all approval workflows in ascending sequence order

*__summary__*: Return all approval workflows, only available for admin

*__throws__*: {RequiredError}

*__memberof__*: WorkflowApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[WorkflowCollection](../interfaces/workflowcollection.md)>

___
<a id="listworkflowsbytemplate"></a>

###  listWorkflowsByTemplate

▸ **listWorkflowsByTemplate**(templateId: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[WorkflowCollection](../interfaces/workflowcollection.md)>

*Defined in [api.ts:2405](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L2405)*

Return an array of workflows by given template id

*__summary__*: Return an array of workflows by given template id, only available for admin

*__throws__*: {RequiredError}

*__memberof__*: WorkflowApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| templateId | `string` |  Id of template |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[WorkflowCollection](../interfaces/workflowcollection.md)>

___
<a id="resolveworkflows"></a>

###  resolveWorkflows

▸ **resolveWorkflows**(resourceObject: *[ResourceObject](../interfaces/resourceobject.md)*, options?: *`any`*): `AxiosPromise`<[Workflow](../interfaces/workflow.md)[]>

*Defined in [api.ts:2417](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L2417)*

Get all workflows linked to a resource object.

*__summary__*: Get all workflows linked to a resource object.

*__throws__*: {RequiredError}

*__memberof__*: WorkflowApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| resourceObject | [ResourceObject](../interfaces/resourceobject.md) |  Resource object used to resolve workflows. |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[Workflow](../interfaces/workflow.md)[]>

___
<a id="showworkflow"></a>

###  showWorkflow

▸ **showWorkflow**(id: *`string`*, options?: *`any`*): `AxiosPromise`<[Workflow](../interfaces/workflow.md)>

*Defined in [api.ts:2429](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L2429)*

Return an approval workflow by given id

*__summary__*: Return an approval workflow by given id, only available for admin

*__throws__*: {RequiredError}

*__memberof__*: WorkflowApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  Query by id |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[Workflow](../interfaces/workflow.md)>

___
<a id="unlinkall"></a>

###  unlinkAll

▸ **unlinkAll**(resourceObject: *[ResourceObject](../interfaces/resourceobject.md)*, options?: *`any`*): `AxiosPromise`<`Response`>

*Defined in [api.ts:2441](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L2441)*

Break all links between a resource object and its assigned workflows

*__summary__*: Break all links between a resource object and its assigned workflows

*__throws__*: {RequiredError}

*__memberof__*: WorkflowApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| resourceObject | [ResourceObject](../interfaces/resourceobject.md) |  Parameters needed to remove a link |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<`Response`>

___
<a id="unlinkworkflow"></a>

###  unlinkWorkflow

▸ **unlinkWorkflow**(id: *`string`*, resourceObject: *[ResourceObject](../interfaces/resourceobject.md)*, options?: *`any`*): `AxiosPromise`<`Response`>

*Defined in [api.ts:2454](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L2454)*

Break the link between a resource object and selected workflow

*__summary__*: Break the link between a resource object and selected workflow

*__throws__*: {RequiredError}

*__memberof__*: WorkflowApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  Query by id |
| resourceObject | [ResourceObject](../interfaces/resourceobject.md) |  Parameters needed to remove a link |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<`Response`>

___
<a id="updateworkflow"></a>

###  updateWorkflow

▸ **updateWorkflow**(id: *`string`*, workflow: *[Workflow](../interfaces/workflow.md)*, options?: *`any`*): `AxiosPromise`<[Workflow](../interfaces/workflow.md)>

*Defined in [api.ts:2467](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L2467)*

Update an approval workflow by given id

*__summary__*: Update an approval workflow by given id, only available for admin

*__throws__*: {RequiredError}

*__memberof__*: WorkflowApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  Query by id |
| workflow | [Workflow](../interfaces/workflow.md) |  Parameters need to update approval workflow |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[Workflow](../interfaces/workflow.md)>

___

