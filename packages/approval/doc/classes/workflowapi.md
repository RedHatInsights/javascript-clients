[@redhat-cloud-services/approval-client](../README.md) › [Globals](../globals.md) › [WorkflowApi](workflowapi.md)

# Class: WorkflowApi

WorkflowApi - object-oriented interface

**`export`** 

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
* [reposition](workflowapi.md#reposition)
* [showWorkflow](workflowapi.md#showworkflow)
* [unlinkWorkflow](workflowapi.md#unlinkworkflow)
* [updateWorkflow](workflowapi.md#updateworkflow)

## Constructors

###  constructor

\+ **new WorkflowApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[WorkflowApi](workflowapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [packages/approval/base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/base.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** *[WorkflowApi](workflowapi.md)*

## Properties

### `Protected` axios

• **axios**: *AxiosInstance*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#protected-axios)*

*Defined in [packages/approval/base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/base.ts#L51)*

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

*Defined in [packages/approval/base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/base.ts#L51)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [packages/approval/base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/base.ts#L49)*

## Methods

###  addWorkflowToTemplate

▸ **addWorkflowToTemplate**(`templateId`: string, `workflow`: [Workflow](../interfaces/workflow.md), `options?`: any): *AxiosPromise‹[Workflow](../interfaces/workflow.md)›*

*Defined in [packages/approval/api.ts:2498](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L2498)*

Create a workflow from a template identified by its id, available to admin only

**`summary`** Create a workflow from a template

**`throws`** {RequiredError}

**`memberof`** WorkflowApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`templateId` | string | ID of a template |
`workflow` | [Workflow](../interfaces/workflow.md) | Parameters needed to create a workflow |
`options?` | any | - |

**Returns:** *AxiosPromise‹[Workflow](../interfaces/workflow.md)›*

___

###  destroyWorkflow

▸ **destroyWorkflow**(`id`: string, `options?`: any): *AxiosPromise‹void›*

*Defined in [packages/approval/api.ts:2510](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L2510)*

Delete an approval workflow by its id, available to admin only

**`summary`** Delete an approval workflow

**`throws`** {RequiredError}

**`memberof`** WorkflowApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID used to select a resource |
`options?` | any | - |

**Returns:** *AxiosPromise‹void›*

___

###  linkWorkflow

▸ **linkWorkflow**(`id`: string, `resourceObject`: [ResourceObject](../interfaces/resourceobject.md), `options?`: any): *AxiosPromise‹void›*

*Defined in [packages/approval/api.ts:2523](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L2523)*

Link a resource object to a workflow identified by its id, available to admin only

**`summary`** Create a resource link to a workflow

**`throws`** {RequiredError}

**`memberof`** WorkflowApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID used to select a resource |
`resourceObject` | [ResourceObject](../interfaces/resourceobject.md) | Parameters needed to create a link |
`options?` | any | - |

**Returns:** *AxiosPromise‹void›*

___

###  listWorkflows

▸ **listWorkflows**(`appName?`: string, `objectId?`: string, `objectType?`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string, `options?`: any): *AxiosPromise‹[WorkflowCollection](../interfaces/workflowcollection.md)›*

*Defined in [packages/approval/api.ts:2541](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L2541)*

Find approval workflows matching search parameters, available to admin only. Optionally select workflows linked to a resource object whose app_name, object_type and object_id are specified by query parameters. Default sorting is by sequence number in ascending order.

**`summary`** List approval workflows

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
`filter?` | object |
`sortBy?` | string |
`options?` | any |

**Returns:** *AxiosPromise‹[WorkflowCollection](../interfaces/workflowcollection.md)›*

___

###  listWorkflowsByTemplate

▸ **listWorkflowsByTemplate**(`templateId`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string, `options?`: any): *AxiosPromise‹[WorkflowCollection](../interfaces/workflowcollection.md)›*

*Defined in [packages/approval/api.ts:2557](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L2557)*

Find workflows based on the template id, available to admin only

**`summary`** List all workflows belonging to a template

**`throws`** {RequiredError}

**`memberof`** WorkflowApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`templateId` | string | ID of a template |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[WorkflowCollection](../interfaces/workflowcollection.md)›*

___

###  reposition

▸ **reposition**(`id`: string, `reposition`: [Reposition](../interfaces/reposition.md), `options?`: any): *AxiosPromise‹void›*

*Defined in [packages/approval/api.ts:2570](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L2570)*

Adjust the position of a workflow related to others by an offset number

**`summary`** Adjust the position of a workflow

**`throws`** {RequiredError}

**`memberof`** WorkflowApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID used to select a resource |
`reposition` | [Reposition](../interfaces/reposition.md) | How many levels should the sequence be brought up or down |
`options?` | any | - |

**Returns:** *AxiosPromise‹void›*

___

###  showWorkflow

▸ **showWorkflow**(`id`: string, `options?`: any): *AxiosPromise‹[Workflow](../interfaces/workflow.md)›*

*Defined in [packages/approval/api.ts:2582](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L2582)*

Find an approval workflow by its id, available to admin only

**`summary`** Return an approval workflow

**`throws`** {RequiredError}

**`memberof`** WorkflowApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID used to select a resource |
`options?` | any | - |

**Returns:** *AxiosPromise‹[Workflow](../interfaces/workflow.md)›*

___

###  unlinkWorkflow

▸ **unlinkWorkflow**(`id`: string, `resourceObject`: [ResourceObject](../interfaces/resourceobject.md), `options?`: any): *AxiosPromise‹void›*

*Defined in [packages/approval/api.ts:2595](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L2595)*

Break the link between a resource object selected by the body and a workflow by its id, available to admin only

**`summary`** Break the link between a resource object and a workflow

**`throws`** {RequiredError}

**`memberof`** WorkflowApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID used to select a resource |
`resourceObject` | [ResourceObject](../interfaces/resourceobject.md) | Parameters needed to select a resource object |
`options?` | any | - |

**Returns:** *AxiosPromise‹void›*

___

###  updateWorkflow

▸ **updateWorkflow**(`id`: string, `workflow`: [Workflow](../interfaces/workflow.md), `options?`: any): *AxiosPromise‹[Workflow](../interfaces/workflow.md)›*

*Defined in [packages/approval/api.ts:2608](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L2608)*

Find an approval workflow by its id and update its content, available to admin only

**`summary`** Update an approval workflow

**`throws`** {RequiredError}

**`memberof`** WorkflowApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID used to select a resource |
`workflow` | [Workflow](../interfaces/workflow.md) | Parameters needed to update an approval workflow |
`options?` | any | - |

**Returns:** *AxiosPromise‹[Workflow](../interfaces/workflow.md)›*
