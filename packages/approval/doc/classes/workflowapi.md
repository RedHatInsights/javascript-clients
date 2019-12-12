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
* [showWorkflow](workflowapi.md#showworkflow)
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

*Defined in [api.ts:2253](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L2253)*

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

*Defined in [api.ts:2265](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L2265)*

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

*Defined in [api.ts:2278](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L2278)*

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

▸ **listWorkflows**(appName?: *`string`*, objectId?: *`string`*, objectType?: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[WorkflowCollection](../interfaces/workflowcollection.md)>

*Defined in [api.ts:2295](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L2295)*

Depends on the query parameters, either return all workflows in ascending sequence order when no parameters are provided; or return the workflows linking to the resource object whose app\_name, object\_type and object\_id are specified by query parameters

*__summary__*: Return all approval workflows, only available for admin

*__throws__*: {RequiredError}

*__memberof__*: WorkflowApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` appName | `string` |
| `Optional` objectId | `string` |
| `Optional` objectType | `string` |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[WorkflowCollection](../interfaces/workflowcollection.md)>

___
<a id="listworkflowsbytemplate"></a>

###  listWorkflowsByTemplate

▸ **listWorkflowsByTemplate**(templateId: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[WorkflowCollection](../interfaces/workflowcollection.md)>

*Defined in [api.ts:2310](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L2310)*

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
<a id="showworkflow"></a>

###  showWorkflow

▸ **showWorkflow**(id: *`string`*, options?: *`any`*): `AxiosPromise`<[Workflow](../interfaces/workflow.md)>

*Defined in [api.ts:2322](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L2322)*

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
<a id="unlinkworkflow"></a>

###  unlinkWorkflow

▸ **unlinkWorkflow**(id: *`string`*, resourceObject: *[ResourceObject](../interfaces/resourceobject.md)*, options?: *`any`*): `AxiosPromise`<`Response`>

*Defined in [api.ts:2335](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L2335)*

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

*Defined in [api.ts:2348](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L2348)*

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

