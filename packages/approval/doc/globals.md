[@redhat-cloud-services/approval-client](README.md) › [Globals](globals.md)

# @redhat-cloud-services/approval-client

## Index

### Enumerations

* [ActionOperationEnum](enums/actionoperationenum.md)
* [RequestDecisionEnum](enums/requestdecisionenum.md)
* [RequestStateEnum](enums/requeststateenum.md)

### Classes

* [ActionApi](classes/actionapi.md)
* [BaseAPI](classes/baseapi.md)
* [Configuration](classes/configuration.md)
* [GraphqlApi](classes/graphqlapi.md)
* [RequestApi](classes/requestapi.md)
* [RequiredError](classes/requirederror.md)
* [TemplateApi](classes/templateapi.md)
* [WorkflowApi](classes/workflowapi.md)

### Interfaces

* [Action](interfaces/action.md)
* [ActionCollection](interfaces/actioncollection.md)
* [CollectionLinks](interfaces/collectionlinks.md)
* [CollectionMetadata](interfaces/collectionmetadata.md)
* [ConfigurationParameters](interfaces/configurationparameters.md)
* [GraphqlIn](interfaces/graphqlin.md)
* [GraphqlOut](interfaces/graphqlout.md)
* [GroupRef](interfaces/groupref.md)
* [HttpApiError](interfaces/httpapierror.md)
* [HttpApiErrorCollection](interfaces/httpapierrorcollection.md)
* [Request](interfaces/request.md)
* [RequestArgs](interfaces/requestargs.md)
* [RequestCollection](interfaces/requestcollection.md)
* [RequestIn](interfaces/requestin.md)
* [ResourceObject](interfaces/resourceobject.md)
* [Tag](interfaces/tag.md)
* [TagResource](interfaces/tagresource.md)
* [Template](interfaces/template.md)
* [TemplateCollection](interfaces/templatecollection.md)
* [Workflow](interfaces/workflow.md)
* [WorkflowCollection](interfaces/workflowcollection.md)

### Variables

* [BASE_PATH](globals.md#const-base_path)

### Functions

* [ActionApiAxiosParamCreator](globals.md#const-actionapiaxiosparamcreator)
* [ActionApiFactory](globals.md#const-actionapifactory)
* [ActionApiFp](globals.md#const-actionapifp)
* [GraphqlApiAxiosParamCreator](globals.md#const-graphqlapiaxiosparamcreator)
* [GraphqlApiFactory](globals.md#const-graphqlapifactory)
* [GraphqlApiFp](globals.md#const-graphqlapifp)
* [RequestApiAxiosParamCreator](globals.md#const-requestapiaxiosparamcreator)
* [RequestApiFactory](globals.md#const-requestapifactory)
* [RequestApiFp](globals.md#const-requestapifp)
* [TemplateApiAxiosParamCreator](globals.md#const-templateapiaxiosparamcreator)
* [TemplateApiFactory](globals.md#const-templateapifactory)
* [TemplateApiFp](globals.md#const-templateapifp)
* [WorkflowApiAxiosParamCreator](globals.md#const-workflowapiaxiosparamcreator)
* [WorkflowApiFactory](globals.md#const-workflowapifactory)
* [WorkflowApiFp](globals.md#const-workflowapifp)

### Object literals

* [COLLECTION_FORMATS](globals.md#const-collection_formats)

## Variables

### `Const` BASE_PATH

• **BASE_PATH**: *string* = "https://cloud.redhat.com//api/approval/v1.2".replace(/\/+$/, "")

*Defined in [packages/approval/base.ts:20](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/base.ts#L20)*

## Functions

### `Const` ActionApiAxiosParamCreator

▸ **ActionApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/approval/api.ts:646](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L646)*

ActionApi - axios parameter creator

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **createAction**(`requestId`: string, `action`: [Action](interfaces/action.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listActionsByRequest**(`requestId`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **showAction**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

___

### `Const` ActionApiFactory

▸ **ActionApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [packages/approval/api.ts:842](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L842)*

ActionApi - factory interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`basePath?` | string |
`axios?` | AxiosInstance |

**Returns:** *object*

* **createAction**(`requestId`: string, `action`: [Action](interfaces/action.md), `options?`: any): *AxiosPromise‹[Action](interfaces/action.md)›*

* **listActionsByRequest**(`requestId`: string, `options?`: any): *AxiosPromise‹[ActionCollection](interfaces/actioncollection.md)›*

* **showAction**(`id`: string, `options?`: any): *AxiosPromise‹[Action](interfaces/action.md)›*

___

### `Const` ActionApiFp

▸ **ActionApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/approval/api.ts:790](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L790)*

ActionApi - functional programming interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **createAction**(`requestId`: string, `action`: [Action](interfaces/action.md), `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[Action](interfaces/action.md)›*

* **listActionsByRequest**(`requestId`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ActionCollection](interfaces/actioncollection.md)›*

* **showAction**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[Action](interfaces/action.md)›*

___

### `Const` GraphqlApiAxiosParamCreator

▸ **GraphqlApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/approval/api.ts:929](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L929)*

GraphqlApi - axios parameter creator

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **postGraphql**(`graphqlIn`: [GraphqlIn](interfaces/graphqlin.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

___

### `Const` GraphqlApiFactory

▸ **GraphqlApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [packages/approval/api.ts:1006](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1006)*

GraphqlApi - factory interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`basePath?` | string |
`axios?` | AxiosInstance |

**Returns:** *object*

* **postGraphql**(`graphqlIn`: [GraphqlIn](interfaces/graphqlin.md), `options?`: any): *AxiosPromise‹[GraphqlOut](interfaces/graphqlout.md)›*

___

### `Const` GraphqlApiFp

▸ **GraphqlApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/approval/api.ts:983](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L983)*

GraphqlApi - functional programming interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **postGraphql**(`graphqlIn`: [GraphqlIn](interfaces/graphqlin.md), `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[GraphqlOut](interfaces/graphqlout.md)›*

___

### `Const` RequestApiAxiosParamCreator

▸ **RequestApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/approval/api.ts:1047](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1047)*

RequestApi - axios parameter creator

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **createRequest**(`requestIn`: [RequestIn](interfaces/requestin.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listRequests**(`xRhPersona?`: "approval/admin" | "approval/approver" | "approval/requester", `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listRequestsByRequest**(`requestId`: string, `xRhPersona?`: "approval/admin" | "approval/approver" | "approval/requester", `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **showRequest**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **showRequestContent**(`requestId`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

___

### `Const` RequestApiFactory

▸ **RequestApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [packages/approval/api.ts:1377](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1377)*

RequestApi - factory interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`basePath?` | string |
`axios?` | AxiosInstance |

**Returns:** *object*

* **createRequest**(`requestIn`: [RequestIn](interfaces/requestin.md), `options?`: any): *AxiosPromise‹[Request](interfaces/request.md)›*

* **listRequests**(`xRhPersona?`: "approval/admin" | "approval/approver" | "approval/requester", `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string, `options?`: any): *AxiosPromise‹[RequestCollection](interfaces/requestcollection.md)›*

* **listRequestsByRequest**(`requestId`: string, `xRhPersona?`: "approval/admin" | "approval/approver" | "approval/requester", `options?`: any): *AxiosPromise‹[RequestCollection](interfaces/requestcollection.md)›*

* **showRequest**(`id`: string, `options?`: any): *AxiosPromise‹[Request](interfaces/request.md)›*

* **showRequestContent**(`requestId`: string, `options?`: any): *AxiosPromise‹object›*

___

### `Const` RequestApiFp

▸ **RequestApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/approval/api.ts:1293](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1293)*

RequestApi - functional programming interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **createRequest**(`requestIn`: [RequestIn](interfaces/requestin.md), `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[Request](interfaces/request.md)›*

* **listRequests**(`xRhPersona?`: "approval/admin" | "approval/approver" | "approval/requester", `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[RequestCollection](interfaces/requestcollection.md)›*

* **listRequestsByRequest**(`requestId`: string, `xRhPersona?`: "approval/admin" | "approval/approver" | "approval/requester", `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[RequestCollection](interfaces/requestcollection.md)›*

* **showRequest**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[Request](interfaces/request.md)›*

* **showRequestContent**(`requestId`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹object›*

___

### `Const` TemplateApiAxiosParamCreator

▸ **TemplateApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/approval/api.ts:1516](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1516)*

TemplateApi - axios parameter creator

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **listTemplates**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **showTemplate**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

___

### `Const` TemplateApiFactory

▸ **TemplateApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [packages/approval/api.ts:1663](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1663)*

TemplateApi - factory interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`basePath?` | string |
`axios?` | AxiosInstance |

**Returns:** *object*

* **listTemplates**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string, `options?`: any): *AxiosPromise‹[TemplateCollection](interfaces/templatecollection.md)›*

* **showTemplate**(`id`: string, `options?`: any): *AxiosPromise‹[Template](interfaces/template.md)›*

___

### `Const` TemplateApiFp

▸ **TemplateApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/approval/api.ts:1623](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1623)*

TemplateApi - functional programming interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **listTemplates**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[TemplateCollection](interfaces/templatecollection.md)›*

* **showTemplate**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[Template](interfaces/template.md)›*

___

### `Const` WorkflowApiAxiosParamCreator

▸ **WorkflowApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/approval/api.ts:1732](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1732)*

WorkflowApi - axios parameter creator

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **addWorkflowToTemplate**(`templateId`: string, `workflow`: [Workflow](interfaces/workflow.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **destroyWorkflow**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **linkWorkflow**(`id`: string, `resourceObject`: [ResourceObject](interfaces/resourceobject.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listWorkflows**(`appName?`: string, `objectId?`: string, `objectType?`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listWorkflowsByTemplate**(`templateId`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **showWorkflow**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **unlinkWorkflow**(`id`: string, `resourceObject`: [ResourceObject](interfaces/resourceobject.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **updateWorkflow**(`id`: string, `workflow`: [Workflow](interfaces/workflow.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

___

### `Const` WorkflowApiFactory

▸ **WorkflowApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [packages/approval/api.ts:2297](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L2297)*

WorkflowApi - factory interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`basePath?` | string |
`axios?` | AxiosInstance |

**Returns:** *object*

* **addWorkflowToTemplate**(`templateId`: string, `workflow`: [Workflow](interfaces/workflow.md), `options?`: any): *AxiosPromise‹[Workflow](interfaces/workflow.md)›*

* **destroyWorkflow**(`id`: string, `options?`: any): *AxiosPromise‹void›*

* **linkWorkflow**(`id`: string, `resourceObject`: [ResourceObject](interfaces/resourceobject.md), `options?`: any): *AxiosPromise‹void›*

* **listWorkflows**(`appName?`: string, `objectId?`: string, `objectType?`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string, `options?`: any): *AxiosPromise‹[WorkflowCollection](interfaces/workflowcollection.md)›*

* **listWorkflowsByTemplate**(`templateId`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string, `options?`: any): *AxiosPromise‹[WorkflowCollection](interfaces/workflowcollection.md)›*

* **showWorkflow**(`id`: string, `options?`: any): *AxiosPromise‹[Workflow](interfaces/workflow.md)›*

* **unlinkWorkflow**(`id`: string, `resourceObject`: [ResourceObject](interfaces/resourceobject.md), `options?`: any): *AxiosPromise‹void›*

* **updateWorkflow**(`id`: string, `workflow`: [Workflow](interfaces/workflow.md), `options?`: any): *AxiosPromise‹[Workflow](interfaces/workflow.md)›*

___

### `Const` WorkflowApiFp

▸ **WorkflowApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/approval/api.ts:2162](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L2162)*

WorkflowApi - functional programming interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **addWorkflowToTemplate**(`templateId`: string, `workflow`: [Workflow](interfaces/workflow.md), `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[Workflow](interfaces/workflow.md)›*

* **destroyWorkflow**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹void›*

* **linkWorkflow**(`id`: string, `resourceObject`: [ResourceObject](interfaces/resourceobject.md), `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹void›*

* **listWorkflows**(`appName?`: string, `objectId?`: string, `objectType?`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[WorkflowCollection](interfaces/workflowcollection.md)›*

* **listWorkflowsByTemplate**(`templateId`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[WorkflowCollection](interfaces/workflowcollection.md)›*

* **showWorkflow**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[Workflow](interfaces/workflow.md)›*

* **unlinkWorkflow**(`id`: string, `resourceObject`: [ResourceObject](interfaces/resourceobject.md), `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹void›*

* **updateWorkflow**(`id`: string, `workflow`: [Workflow](interfaces/workflow.md), `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[Workflow](interfaces/workflow.md)›*

## Object literals

### `Const` COLLECTION_FORMATS

### ▪ **COLLECTION_FORMATS**: *object*

*Defined in [packages/approval/base.ts:26](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/base.ts#L26)*

**`export`** 

###  csv

• **csv**: *string* = ","

*Defined in [packages/approval/base.ts:27](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/base.ts#L27)*

###  pipes

• **pipes**: *string* = "|"

*Defined in [packages/approval/base.ts:30](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/base.ts#L30)*

###  ssv

• **ssv**: *string* = " "

*Defined in [packages/approval/base.ts:28](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/base.ts#L28)*

###  tsv

• **tsv**: *string* = "	"

*Defined in [packages/approval/base.ts:29](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/base.ts#L29)*
