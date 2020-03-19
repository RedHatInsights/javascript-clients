[@redhat-cloud-services/approval-client](README.md) › [Globals](globals.md)

# @redhat-cloud-services/approval-client

## Index

### Modules

* [Action](modules/action.md)
* [Request](modules/request.md)

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

* [ActionCollection](interfaces/actioncollection.md)
* [CollectionLinks](interfaces/collectionlinks.md)
* [CollectionMetadata](interfaces/collectionmetadata.md)
* [ConfigurationParameters](interfaces/configurationparameters.md)
* [GraphqlIn](interfaces/graphqlin.md)
* [GraphqlOut](interfaces/graphqlout.md)
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

• **BASE_PATH**: *string* =  "https://cloud.redhat.com//api/approval/v1.0".replace(/\/+$/, "")

*Defined in [api.ts:20](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L20)*

## Functions

### `Const` ActionApiAxiosParamCreator

▸ **ActionApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:650](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L650)*

ActionApi - axios parameter creator

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **createAction**(`requestId`: string, `action`: [Action](modules/action.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listActionsByRequest**(`requestId`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **showAction**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

___

### `Const` ActionApiFactory

▸ **ActionApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [api.ts:837](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L837)*

ActionApi - factory interface

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`basePath?` | string |
`axios?` | AxiosInstance |

**Returns:** *object*

* **createAction**(`requestId`: string, `action`: [Action](modules/action.md), `options?`: any): *AxiosPromise‹[Action](modules/action.md)›*

* **listActionsByRequest**(`requestId`: string, `options?`: any): *AxiosPromise‹[ActionCollection](interfaces/actioncollection.md)›*

* **showAction**(`id`: string, `options?`: any): *AxiosPromise‹[Action](modules/action.md)›*

___

### `Const` ActionApiFp

▸ **ActionApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:785](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L785)*

ActionApi - functional programming interface

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **createAction**(`requestId`: string, `action`: [Action](modules/action.md), `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[Action](modules/action.md)›*

* **listActionsByRequest**(`requestId`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ActionCollection](interfaces/actioncollection.md)›*

* **showAction**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[Action](modules/action.md)›*

___

### `Const` GraphqlApiAxiosParamCreator

▸ **GraphqlApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:923](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L923)*

GraphqlApi - axios parameter creator

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **postGraphql**(`graphqlIn`: [GraphqlIn](interfaces/graphqlin.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

___

### `Const` GraphqlApiFactory

▸ **GraphqlApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [api.ts:997](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L997)*

GraphqlApi - factory interface

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

*Defined in [api.ts:974](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L974)*

GraphqlApi - functional programming interface

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

*Defined in [api.ts:1037](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1037)*

RequestApi - axios parameter creator

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **createRequest**(`requestIn`: [RequestIn](interfaces/requestin.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listRequests**(`xRhPersona?`: "approval/admin" | "approval/approver" | "approval/requester", `limit?`: number, `offset?`: number, `filter?`: any, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listRequestsByRequest**(`requestId`: string, `xRhPersona?`: "approval/admin" | "approval/approver" | "approval/requester", `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **showRequest**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **showRequestContent**(`requestId`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

___

### `Const` RequestApiFactory

▸ **RequestApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [api.ts:1346](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1346)*

RequestApi - factory interface

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`basePath?` | string |
`axios?` | AxiosInstance |

**Returns:** *object*

* **createRequest**(`requestIn`: [RequestIn](interfaces/requestin.md), `options?`: any): *AxiosPromise‹[Request](modules/request.md)›*

* **listRequests**(`xRhPersona?`: "approval/admin" | "approval/approver" | "approval/requester", `limit?`: number, `offset?`: number, `filter?`: any, `options?`: any): *AxiosPromise‹[RequestCollection](interfaces/requestcollection.md)›*

* **listRequestsByRequest**(`requestId`: string, `xRhPersona?`: "approval/admin" | "approval/approver" | "approval/requester", `options?`: any): *AxiosPromise‹[RequestCollection](interfaces/requestcollection.md)›*

* **showRequest**(`id`: string, `options?`: any): *AxiosPromise‹[Request](modules/request.md)›*

* **showRequestContent**(`requestId`: string, `options?`: any): *AxiosPromise‹any›*

___

### `Const` RequestApiFp

▸ **RequestApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:1263](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1263)*

RequestApi - functional programming interface

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **createRequest**(`requestIn`: [RequestIn](interfaces/requestin.md), `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[Request](modules/request.md)›*

* **listRequests**(`xRhPersona?`: "approval/admin" | "approval/approver" | "approval/requester", `limit?`: number, `offset?`: number, `filter?`: any, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[RequestCollection](interfaces/requestcollection.md)›*

* **listRequestsByRequest**(`requestId`: string, `xRhPersona?`: "approval/admin" | "approval/approver" | "approval/requester", `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[RequestCollection](interfaces/requestcollection.md)›*

* **showRequest**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[Request](modules/request.md)›*

* **showRequestContent**(`requestId`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹any›*

___

### `Const` TemplateApiAxiosParamCreator

▸ **TemplateApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:1482](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1482)*

TemplateApi - axios parameter creator

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **listTemplates**(`limit?`: number, `offset?`: number, `filter?`: any, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **showTemplate**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

___

### `Const` TemplateApiFactory

▸ **TemplateApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [api.ts:1617](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1617)*

TemplateApi - factory interface

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`basePath?` | string |
`axios?` | AxiosInstance |

**Returns:** *object*

* **listTemplates**(`limit?`: number, `offset?`: number, `filter?`: any, `options?`: any): *AxiosPromise‹[TemplateCollection](interfaces/templatecollection.md)›*

* **showTemplate**(`id`: string, `options?`: any): *AxiosPromise‹[Template](interfaces/template.md)›*

___

### `Const` TemplateApiFp

▸ **TemplateApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:1578](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1578)*

TemplateApi - functional programming interface

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **listTemplates**(`limit?`: number, `offset?`: number, `filter?`: any, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[TemplateCollection](interfaces/templatecollection.md)›*

* **showTemplate**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[Template](interfaces/template.md)›*

___

### `Const` WorkflowApiAxiosParamCreator

▸ **WorkflowApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:1683](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1683)*

WorkflowApi - axios parameter creator

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **addWorkflowToTemplate**(`templateId`: string, `workflow`: [Workflow](interfaces/workflow.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **destroyWorkflow**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **linkWorkflow**(`id`: string, `resourceObject`: [ResourceObject](interfaces/resourceobject.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listWorkflows**(`appName?`: string, `objectId?`: string, `objectType?`: string, `limit?`: number, `offset?`: number, `filter?`: any, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listWorkflowsByTemplate**(`templateId`: string, `limit?`: number, `offset?`: number, `filter?`: any, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **showWorkflow**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **unlinkWorkflow**(`id`: string, `resourceObject`: [ResourceObject](interfaces/resourceobject.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **updateWorkflow**(`id`: string, `workflow`: [Workflow](interfaces/workflow.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

___

### `Const` WorkflowApiFactory

▸ **WorkflowApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [api.ts:2212](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L2212)*

WorkflowApi - factory interface

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`basePath?` | string |
`axios?` | AxiosInstance |

**Returns:** *object*

* **addWorkflowToTemplate**(`templateId`: string, `workflow`: [Workflow](interfaces/workflow.md), `options?`: any): *AxiosPromise‹[Workflow](interfaces/workflow.md)›*

* **destroyWorkflow**(`id`: string, `options?`: any): *AxiosPromise‹Response›*

* **linkWorkflow**(`id`: string, `resourceObject`: [ResourceObject](interfaces/resourceobject.md), `options?`: any): *AxiosPromise‹Response›*

* **listWorkflows**(`appName?`: string, `objectId?`: string, `objectType?`: string, `limit?`: number, `offset?`: number, `filter?`: any, `options?`: any): *AxiosPromise‹[WorkflowCollection](interfaces/workflowcollection.md)›*

* **listWorkflowsByTemplate**(`templateId`: string, `limit?`: number, `offset?`: number, `filter?`: any, `options?`: any): *AxiosPromise‹[WorkflowCollection](interfaces/workflowcollection.md)›*

* **showWorkflow**(`id`: string, `options?`: any): *AxiosPromise‹[Workflow](interfaces/workflow.md)›*

* **unlinkWorkflow**(`id`: string, `resourceObject`: [ResourceObject](interfaces/resourceobject.md), `options?`: any): *AxiosPromise‹Response›*

* **updateWorkflow**(`id`: string, `workflow`: [Workflow](interfaces/workflow.md), `options?`: any): *AxiosPromise‹[Workflow](interfaces/workflow.md)›*

___

### `Const` WorkflowApiFp

▸ **WorkflowApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:2079](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L2079)*

WorkflowApi - functional programming interface

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **addWorkflowToTemplate**(`templateId`: string, `workflow`: [Workflow](interfaces/workflow.md), `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[Workflow](interfaces/workflow.md)›*

* **destroyWorkflow**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹Response›*

* **linkWorkflow**(`id`: string, `resourceObject`: [ResourceObject](interfaces/resourceobject.md), `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹Response›*

* **listWorkflows**(`appName?`: string, `objectId?`: string, `objectType?`: string, `limit?`: number, `offset?`: number, `filter?`: any, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[WorkflowCollection](interfaces/workflowcollection.md)›*

* **listWorkflowsByTemplate**(`templateId`: string, `limit?`: number, `offset?`: number, `filter?`: any, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[WorkflowCollection](interfaces/workflowcollection.md)›*

* **showWorkflow**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[Workflow](interfaces/workflow.md)›*

* **unlinkWorkflow**(`id`: string, `resourceObject`: [ResourceObject](interfaces/resourceobject.md), `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹Response›*

* **updateWorkflow**(`id`: string, `workflow`: [Workflow](interfaces/workflow.md), `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[Workflow](interfaces/workflow.md)›*

## Object literals

### `Const` COLLECTION_FORMATS

### ▪ **COLLECTION_FORMATS**: *object*

*Defined in [api.ts:26](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L26)*

**`export`** 

###  csv

• **csv**: *string* = ","

*Defined in [api.ts:27](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L27)*

###  pipes

• **pipes**: *string* = "|"

*Defined in [api.ts:30](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L30)*

###  ssv

• **ssv**: *string* = " "

*Defined in [api.ts:28](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L28)*

###  tsv

• **tsv**: *string* = "	"

*Defined in [api.ts:29](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L29)*
