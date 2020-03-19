[@redhat-cloud-services/approval-client](../README.md) › [Globals](../globals.md) › [WorkflowApi](workflowapi.md)

# Class: WorkflowApi

WorkflowApi - object-oriented interface

**`export`** 

**`class`** WorkflowApi

**`extends`** {BaseAPI}

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **WorkflowApi**

## Index

### Constructors

* [constructor](workflowapi.md#constructor)

### Properties

* [axios](workflowapi.md#protected-axios)
* [basePath](workflowapi.md#protected-basepath)
* [configuration](workflowapi.md#protected-configuration)

### Methods

* [addWorkflowToTemplate](workflowapi.md#addworkflowtotemplate)
* [destroyWorkflow](workflowapi.md#destroyworkflow)
* [linkWorkflow](workflowapi.md#linkworkflow)
* [listWorkflows](workflowapi.md#listworkflows)
* [listWorkflowsByTemplate](workflowapi.md#listworkflowsbytemplate)
* [showWorkflow](workflowapi.md#showworkflow)
* [unlinkWorkflow](workflowapi.md#unlinkworkflow)
* [updateWorkflow](workflowapi.md#updateworkflow)

## Constructors

###  constructor

\+ **new WorkflowApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[WorkflowApi](workflowapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`axios` | AxiosInstance |  globalAxios |

**Returns:** *[WorkflowApi](workflowapi.md)*

## Properties

### `Protected` axios

• **axios**: *AxiosInstance*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#protected-axios)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L51)*

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L51)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L49)*

## Methods

###  addWorkflowToTemplate

▸ **addWorkflowToTemplate**(`templateId`: string, `workflow`: [Workflow](../interfaces/workflow.md), `options?`: any): *AxiosPromise‹[Workflow](../interfaces/workflow.md)›*

*Defined in [api.ts:2325](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L2325)*

Add a workflow by given template id

**`summary`** Add a workflow by given template id, only available for admin

**`throws`** {RequiredError}

**`memberof`** WorkflowApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`templateId` | string | Id of template |
`workflow` | [Workflow](../interfaces/workflow.md) | Parameters need to create workflow |
`options?` | any | - |

**Returns:** *AxiosPromise‹[Workflow](../interfaces/workflow.md)›*

___

###  destroyWorkflow

▸ **destroyWorkflow**(`id`: string, `options?`: any): *AxiosPromise‹Response›*

*Defined in [api.ts:2337](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L2337)*

Delete approval workflow by given id

**`summary`** Delete approval workflow by given id, only available for admin

**`throws`** {RequiredError}

**`memberof`** WorkflowApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | Query by id |
`options?` | any | - |

**Returns:** *AxiosPromise‹Response›*

___

###  linkWorkflow

▸ **linkWorkflow**(`id`: string, `resourceObject`: [ResourceObject](../interfaces/resourceobject.md), `options?`: any): *AxiosPromise‹Response›*

*Defined in [api.ts:2350](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L2350)*

Link a resource object to a given workflow

**`summary`** Create a resource link to a given workflow

**`throws`** {RequiredError}

**`memberof`** WorkflowApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | Query by id |
`resourceObject` | [ResourceObject](../interfaces/resourceobject.md) | Parameters needed to create a link |
`options?` | any | - |

**Returns:** *AxiosPromise‹Response›*

___

###  listWorkflows

▸ **listWorkflows**(`appName?`: string, `objectId?`: string, `objectType?`: string, `limit?`: number, `offset?`: number, `filter?`: any, `options?`: any): *AxiosPromise‹[WorkflowCollection](../interfaces/workflowcollection.md)›*

*Defined in [api.ts:2367](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L2367)*

Depends on the query parameters, either return all workflows in ascending sequence order when no parameters are provided; or return the workflows linking to the resource object whose app_name, object_type and object_id are specified by query parameters

**`summary`** Return all approval workflows, only available for admin

**`throws`** {RequiredError}

**`memberof`** WorkflowApi

**Parameters:**

Name | Type |
------ | ------ |
`appName?` | string |
`objectId?` | string |
`objectType?` | string |
`limit?` | number |
`offset?` | number |
`filter?` | any |
`options?` | any |

**Returns:** *AxiosPromise‹[WorkflowCollection](../interfaces/workflowcollection.md)›*

___

###  listWorkflowsByTemplate

▸ **listWorkflowsByTemplate**(`templateId`: string, `limit?`: number, `offset?`: number, `filter?`: any, `options?`: any): *AxiosPromise‹[WorkflowCollection](../interfaces/workflowcollection.md)›*

*Defined in [api.ts:2382](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L2382)*

Return an array of workflows by given template id

**`summary`** Return an array of workflows by given template id, only available for admin

**`throws`** {RequiredError}

**`memberof`** WorkflowApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`templateId` | string | Id of template |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | any | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[WorkflowCollection](../interfaces/workflowcollection.md)›*

___

###  showWorkflow

▸ **showWorkflow**(`id`: string, `options?`: any): *AxiosPromise‹[Workflow](../interfaces/workflow.md)›*

*Defined in [api.ts:2394](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L2394)*

Return an approval workflow by given id

**`summary`** Return an approval workflow by given id, only available for admin

**`throws`** {RequiredError}

**`memberof`** WorkflowApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | Query by id |
`options?` | any | - |

**Returns:** *AxiosPromise‹[Workflow](../interfaces/workflow.md)›*

___

###  unlinkWorkflow

▸ **unlinkWorkflow**(`id`: string, `resourceObject`: [ResourceObject](../interfaces/resourceobject.md), `options?`: any): *AxiosPromise‹Response›*

*Defined in [api.ts:2407](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L2407)*

Break the link between a resource object and selected workflow

**`summary`** Break the link between a resource object and selected workflow

**`throws`** {RequiredError}

**`memberof`** WorkflowApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | Query by id |
`resourceObject` | [ResourceObject](../interfaces/resourceobject.md) | Parameters needed to remove a link |
`options?` | any | - |

**Returns:** *AxiosPromise‹Response›*

___

###  updateWorkflow

▸ **updateWorkflow**(`id`: string, `workflow`: [Workflow](../interfaces/workflow.md), `options?`: any): *AxiosPromise‹[Workflow](../interfaces/workflow.md)›*

*Defined in [api.ts:2420](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L2420)*

Update an approval workflow by given id

**`summary`** Update an approval workflow by given id, only available for admin

**`throws`** {RequiredError}

**`memberof`** WorkflowApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | Query by id |
`workflow` | [Workflow](../interfaces/workflow.md) | Parameters need to update approval workflow |
`options?` | any | - |

**Returns:** *AxiosPromise‹[Workflow](../interfaces/workflow.md)›*
