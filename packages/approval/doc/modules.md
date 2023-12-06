[@redhat-cloud-services/approval-client](README.md) / Exports

# @redhat-cloud-services/approval-client

## Table of contents

### Enumerations

- [ActionOperationEnum](enums/ActionOperationEnum.md)
- [RepositionPlacementEnum](enums/RepositionPlacementEnum.md)
- [RequestDecisionEnum](enums/RequestDecisionEnum.md)
- [RequestStateEnum](enums/RequestStateEnum.md)

### Classes

- [ActionApi](classes/ActionApi.md)
- [Configuration](classes/Configuration.md)
- [DefaultApi](classes/DefaultApi.md)
- [GraphqlApi](classes/GraphqlApi.md)
- [RequestApi](classes/RequestApi.md)
- [TemplateApi](classes/TemplateApi.md)
- [WorkflowApi](classes/WorkflowApi.md)

### Interfaces

- [Action](interfaces/Action.md)
- [ActionCollection](interfaces/ActionCollection.md)
- [CollectionLinks](interfaces/CollectionLinks.md)
- [CollectionMetadata](interfaces/CollectionMetadata.md)
- [ConfigurationParameters](interfaces/ConfigurationParameters.md)
- [GraphqlIn](interfaces/GraphqlIn.md)
- [GraphqlOut](interfaces/GraphqlOut.md)
- [GroupRef](interfaces/GroupRef.md)
- [HttpApiError](interfaces/HttpApiError.md)
- [HttpApiErrorCollection](interfaces/HttpApiErrorCollection.md)
- [Reposition](interfaces/Reposition.md)
- [Request](interfaces/Request.md)
- [RequestCollection](interfaces/RequestCollection.md)
- [RequestIn](interfaces/RequestIn.md)
- [ResourceObject](interfaces/ResourceObject.md)
- [Tag](interfaces/Tag.md)
- [TagResource](interfaces/TagResource.md)
- [Template](interfaces/Template.md)
- [TemplateCollection](interfaces/TemplateCollection.md)
- [Workflow](interfaces/Workflow.md)
- [WorkflowCollection](interfaces/WorkflowCollection.md)

### Functions

- [ActionApiAxiosParamCreator](modules.md#actionapiaxiosparamcreator)
- [ActionApiFactory](modules.md#actionapifactory)
- [ActionApiFp](modules.md#actionapifp)
- [DefaultApiAxiosParamCreator](modules.md#defaultapiaxiosparamcreator)
- [DefaultApiFactory](modules.md#defaultapifactory)
- [DefaultApiFp](modules.md#defaultapifp)
- [GraphqlApiAxiosParamCreator](modules.md#graphqlapiaxiosparamcreator)
- [GraphqlApiFactory](modules.md#graphqlapifactory)
- [GraphqlApiFp](modules.md#graphqlapifp)
- [RequestApiAxiosParamCreator](modules.md#requestapiaxiosparamcreator)
- [RequestApiFactory](modules.md#requestapifactory)
- [RequestApiFp](modules.md#requestapifp)
- [TemplateApiAxiosParamCreator](modules.md#templateapiaxiosparamcreator)
- [TemplateApiFactory](modules.md#templateapifactory)
- [TemplateApiFp](modules.md#templateapifp)
- [WorkflowApiAxiosParamCreator](modules.md#workflowapiaxiosparamcreator)
- [WorkflowApiFactory](modules.md#workflowapifactory)
- [WorkflowApiFp](modules.md#workflowapifp)

## Functions

### ActionApiAxiosParamCreator

▸ **ActionApiAxiosParamCreator**(`configuration?`): `Object`

ActionApi - axios parameter creator

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `createAction` | (`requestId`: `string`, `action`: [`Action`](interfaces/Action.md), `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listActionsByRequest` | (`requestId`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `showAction` | (`id`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |

#### Defined in

[api.ts:669](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/approval/api.ts#L669)

___

### ActionApiFactory

▸ **ActionApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

ActionApi - factory interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |
| `basePath?` | `string` |
| `axios?` | `AxiosInstance` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `createAction` | (`requestId`: `string`, `action`: [`Action`](interfaces/Action.md), `options?`: `any`) => `AxiosPromise`<[`Action`](interfaces/Action.md)\> |
| `listActionsByRequest` | (`requestId`: `string`, `options?`: `any`) => `AxiosPromise`<[`ActionCollection`](interfaces/ActionCollection.md)\> |
| `showAction` | (`id`: `string`, `options?`: `any`) => `AxiosPromise`<[`Action`](interfaces/Action.md)\> |

#### Defined in

[api.ts:847](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/approval/api.ts#L847)

___

### ActionApiFp

▸ **ActionApiFp**(`configuration?`): `Object`

ActionApi - functional programming interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `createAction` | (`requestId`: `string`, `action`: [`Action`](interfaces/Action.md), `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`Action`](interfaces/Action.md)\>\> |
| `listActionsByRequest` | (`requestId`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ActionCollection`](interfaces/ActionCollection.md)\>\> |
| `showAction` | (`id`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`Action`](interfaces/Action.md)\>\> |

#### Defined in

[api.ts:795](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/approval/api.ts#L795)

___

### DefaultApiAxiosParamCreator

▸ **DefaultApiAxiosParamCreator**(`configuration?`): `Object`

DefaultApi - axios parameter creator

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `getDocumentation` | (`options?`: `any`) => `Promise`<`RequestArgs`\> |

#### Defined in

[api.ts:934](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/approval/api.ts#L934)

___

### DefaultApiFactory

▸ **DefaultApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

DefaultApi - factory interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |
| `basePath?` | `string` |
| `axios?` | `AxiosInstance` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `getDocumentation` | (`options?`: `any`) => `AxiosPromise`<`object`\> |

#### Defined in

[api.ts:995](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/approval/api.ts#L995)

___

### DefaultApiFp

▸ **DefaultApiFp**(`configuration?`): `Object`

DefaultApi - functional programming interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `getDocumentation` | (`options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<`object`\>\> |

#### Defined in

[api.ts:973](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/approval/api.ts#L973)

___

### GraphqlApiAxiosParamCreator

▸ **GraphqlApiAxiosParamCreator**(`configuration?`): `Object`

GraphqlApi - axios parameter creator

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `postGraphql` | (`graphqlIn`: [`GraphqlIn`](interfaces/GraphqlIn.md), `options?`: `any`) => `Promise`<`RequestArgs`\> |

#### Defined in

[api.ts:1034](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/approval/api.ts#L1034)

___

### GraphqlApiFactory

▸ **GraphqlApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

GraphqlApi - factory interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |
| `basePath?` | `string` |
| `axios?` | `AxiosInstance` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `postGraphql` | (`graphqlIn`: [`GraphqlIn`](interfaces/GraphqlIn.md), `options?`: `any`) => `AxiosPromise`<[`GraphqlOut`](interfaces/GraphqlOut.md)\> |

#### Defined in

[api.ts:1105](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/approval/api.ts#L1105)

___

### GraphqlApiFp

▸ **GraphqlApiFp**(`configuration?`): `Object`

GraphqlApi - functional programming interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `postGraphql` | (`graphqlIn`: [`GraphqlIn`](interfaces/GraphqlIn.md), `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`GraphqlOut`](interfaces/GraphqlOut.md)\>\> |

#### Defined in

[api.ts:1082](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/approval/api.ts#L1082)

___

### RequestApiAxiosParamCreator

▸ **RequestApiAxiosParamCreator**(`configuration?`): `Object`

RequestApi - axios parameter creator

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `createRequest` | (`requestIn`: [`RequestIn`](interfaces/RequestIn.md), `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listRequests` | (`xRhPersona?`: ``"approval/admin"`` \| ``"approval/approver"`` \| ``"approval/requester"``, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listRequestsByRequest` | (`requestId`: `string`, `xRhPersona?`: ``"approval/admin"`` \| ``"approval/approver"`` \| ``"approval/requester"``, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `showRequest` | (`id`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `showRequestContent` | (`requestId`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |

#### Defined in

[api.ts:1146](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/approval/api.ts#L1146)

___

### RequestApiFactory

▸ **RequestApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

RequestApi - factory interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |
| `basePath?` | `string` |
| `axios?` | `AxiosInstance` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `createRequest` | (`requestIn`: [`RequestIn`](interfaces/RequestIn.md), `options?`: `any`) => `AxiosPromise`<[`Request`](interfaces/Request.md)\> |
| `listRequests` | (`xRhPersona?`: ``"approval/admin"`` \| ``"approval/approver"`` \| ``"approval/requester"``, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string`, `options?`: `any`) => `AxiosPromise`<[`RequestCollection`](interfaces/RequestCollection.md)\> |
| `listRequestsByRequest` | (`requestId`: `string`, `xRhPersona?`: ``"approval/admin"`` \| ``"approval/approver"`` \| ``"approval/requester"``, `options?`: `any`) => `AxiosPromise`<[`RequestCollection`](interfaces/RequestCollection.md)\> |
| `showRequest` | (`id`: `string`, `options?`: `any`) => `AxiosPromise`<[`Request`](interfaces/Request.md)\> |
| `showRequestContent` | (`requestId`: `string`, `options?`: `any`) => `AxiosPromise`<`object`\> |

#### Defined in

[api.ts:1446](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/approval/api.ts#L1446)

___

### RequestApiFp

▸ **RequestApiFp**(`configuration?`): `Object`

RequestApi - functional programming interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `createRequest` | (`requestIn`: [`RequestIn`](interfaces/RequestIn.md), `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`Request`](interfaces/Request.md)\>\> |
| `listRequests` | (`xRhPersona?`: ``"approval/admin"`` \| ``"approval/approver"`` \| ``"approval/requester"``, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`RequestCollection`](interfaces/RequestCollection.md)\>\> |
| `listRequestsByRequest` | (`requestId`: `string`, `xRhPersona?`: ``"approval/admin"`` \| ``"approval/approver"`` \| ``"approval/requester"``, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`RequestCollection`](interfaces/RequestCollection.md)\>\> |
| `showRequest` | (`id`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`Request`](interfaces/Request.md)\>\> |
| `showRequestContent` | (`requestId`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<`object`\>\> |

#### Defined in

[api.ts:1362](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/approval/api.ts#L1362)

___

### TemplateApiAxiosParamCreator

▸ **TemplateApiAxiosParamCreator**(`configuration?`): `Object`

TemplateApi - axios parameter creator

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `listTemplates` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `showTemplate` | (`id`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |

#### Defined in

[api.ts:1585](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/approval/api.ts#L1585)

___

### TemplateApiFactory

▸ **TemplateApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

TemplateApi - factory interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |
| `basePath?` | `string` |
| `axios?` | `AxiosInstance` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `listTemplates` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string`, `options?`: `any`) => `AxiosPromise`<[`TemplateCollection`](interfaces/TemplateCollection.md)\> |
| `showTemplate` | (`id`: `string`, `options?`: `any`) => `AxiosPromise`<[`Template`](interfaces/Template.md)\> |

#### Defined in

[api.ts:1720](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/approval/api.ts#L1720)

___

### TemplateApiFp

▸ **TemplateApiFp**(`configuration?`): `Object`

TemplateApi - functional programming interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `listTemplates` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`TemplateCollection`](interfaces/TemplateCollection.md)\>\> |
| `showTemplate` | (`id`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`Template`](interfaces/Template.md)\>\> |

#### Defined in

[api.ts:1680](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/approval/api.ts#L1680)

___

### WorkflowApiAxiosParamCreator

▸ **WorkflowApiAxiosParamCreator**(`configuration?`): `Object`

WorkflowApi - axios parameter creator

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `addWorkflowToTemplate` | (`templateId`: `string`, `workflow`: [`Workflow`](interfaces/Workflow.md), `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `destroyWorkflow` | (`id`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `linkWorkflow` | (`id`: `string`, `resourceObject`: [`ResourceObject`](interfaces/ResourceObject.md), `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listWorkflows` | (`appName?`: `string`, `objectId?`: `string`, `objectType?`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listWorkflowsByTemplate` | (`templateId`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `reposition` | (`id`: `string`, `reposition`: [`Reposition`](interfaces/Reposition.md), `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `showWorkflow` | (`id`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `unlinkWorkflow` | (`id`: `string`, `resourceObject`: [`ResourceObject`](interfaces/ResourceObject.md), `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `updateWorkflow` | (`id`: `string`, `workflow`: [`Workflow`](interfaces/Workflow.md), `options?`: `any`) => `Promise`<`RequestArgs`\> |

#### Defined in

[api.ts:1789](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/approval/api.ts#L1789)

___

### WorkflowApiFactory

▸ **WorkflowApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

WorkflowApi - factory interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |
| `basePath?` | `string` |
| `axios?` | `AxiosInstance` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `addWorkflowToTemplate` | (`templateId`: `string`, `workflow`: [`Workflow`](interfaces/Workflow.md), `options?`: `any`) => `AxiosPromise`<[`Workflow`](interfaces/Workflow.md)\> |
| `destroyWorkflow` | (`id`: `string`, `options?`: `any`) => `AxiosPromise`<`void`\> |
| `linkWorkflow` | (`id`: `string`, `resourceObject`: [`ResourceObject`](interfaces/ResourceObject.md), `options?`: `any`) => `AxiosPromise`<`void`\> |
| `listWorkflows` | (`appName?`: `string`, `objectId?`: `string`, `objectType?`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string`, `options?`: `any`) => `AxiosPromise`<[`WorkflowCollection`](interfaces/WorkflowCollection.md)\> |
| `listWorkflowsByTemplate` | (`templateId`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string`, `options?`: `any`) => `AxiosPromise`<[`WorkflowCollection`](interfaces/WorkflowCollection.md)\> |
| `reposition` | (`id`: `string`, `reposition`: [`Reposition`](interfaces/Reposition.md), `options?`: `any`) => `AxiosPromise`<`void`\> |
| `showWorkflow` | (`id`: `string`, `options?`: `any`) => `AxiosPromise`<[`Workflow`](interfaces/Workflow.md)\> |
| `unlinkWorkflow` | (`id`: `string`, `resourceObject`: [`ResourceObject`](interfaces/ResourceObject.md), `options?`: `any`) => `AxiosPromise`<`void`\> |
| `updateWorkflow` | (`id`: `string`, `workflow`: [`Workflow`](interfaces/Workflow.md), `options?`: `any`) => `AxiosPromise`<[`Workflow`](interfaces/Workflow.md)\> |

#### Defined in

[api.ts:2366](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/approval/api.ts#L2366)

___

### WorkflowApiFp

▸ **WorkflowApiFp**(`configuration?`): `Object`

WorkflowApi - functional programming interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `addWorkflowToTemplate` | (`templateId`: `string`, `workflow`: [`Workflow`](interfaces/Workflow.md), `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`Workflow`](interfaces/Workflow.md)\>\> |
| `destroyWorkflow` | (`id`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<`void`\>\> |
| `linkWorkflow` | (`id`: `string`, `resourceObject`: [`ResourceObject`](interfaces/ResourceObject.md), `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<`void`\>\> |
| `listWorkflows` | (`appName?`: `string`, `objectId?`: `string`, `objectType?`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`WorkflowCollection`](interfaces/WorkflowCollection.md)\>\> |
| `listWorkflowsByTemplate` | (`templateId`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`WorkflowCollection`](interfaces/WorkflowCollection.md)\>\> |
| `reposition` | (`id`: `string`, `reposition`: [`Reposition`](interfaces/Reposition.md), `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<`void`\>\> |
| `showWorkflow` | (`id`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`Workflow`](interfaces/Workflow.md)\>\> |
| `unlinkWorkflow` | (`id`: `string`, `resourceObject`: [`ResourceObject`](interfaces/ResourceObject.md), `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<`void`\>\> |
| `updateWorkflow` | (`id`: `string`, `workflow`: [`Workflow`](interfaces/Workflow.md), `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`Workflow`](interfaces/Workflow.md)\>\> |

#### Defined in

[api.ts:2216](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/approval/api.ts#L2216)
