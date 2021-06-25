[@redhat-cloud-services/remediations-client](README.md) › [Globals](globals.md)

# @redhat-cloud-services/remediations-client

## Index

### Enumerations

* [PlaybookExecutorStatusConnectionStatusEnum](enums/playbookexecutorstatusconnectionstatusenum.md)
* [PlaybookRunExecutorStatus](enums/playbookrunexecutorstatus.md)
* [PlaybookRunStatus](enums/playbookrunstatus.md)
* [PlaybookRunSystemStatus](enums/playbookrunsystemstatus.md)
* [ResolutionRisk](enums/resolutionrisk.md)

### Classes

* [BaseAPI](classes/baseapi.md)
* [Configuration](classes/configuration.md)
* [DiagnosisApi](classes/diagnosisapi.md)
* [GeneratorApi](classes/generatorapi.md)
* [RemediationsApi](classes/remediationsapi.md)
* [RequiredError](classes/requirederror.md)
* [ResolutionsApi](classes/resolutionsapi.md)
* [VersionApi](classes/versionapi.md)

### Interfaces

* [ConfigurationParameters](interfaces/configurationparameters.md)
* [Counts](interfaces/counts.md)
* [Diagnosis](interfaces/diagnosis.md)
* [ExecuteRemediation](interfaces/executeremediation.md)
* [InlineResponse200](interfaces/inlineresponse200.md)
* [Meta](interfaces/meta.md)
* [PlaybookDefinition](interfaces/playbookdefinition.md)
* [PlaybookDefinitionIssues](interfaces/playbookdefinitionissues.md)
* [PlaybookExecutorDetails](interfaces/playbookexecutordetails.md)
* [PlaybookExecutorStatus](interfaces/playbookexecutorstatus.md)
* [PlaybookExecutors](interfaces/playbookexecutors.md)
* [PlaybookRunDetails](interfaces/playbookrundetails.md)
* [PlaybookRunExecutorDetails](interfaces/playbookrunexecutordetails.md)
* [PlaybookRunSystemDetails](interfaces/playbookrunsystemdetails.md)
* [PlaybookRunSystemList](interfaces/playbookrunsystemlist.md)
* [PlaybookRunSystems](interfaces/playbookrunsystems.md)
* [PlaybookRunsList](interfaces/playbookrunslist.md)
* [RemediationConnectionStatus](interfaces/remediationconnectionstatus.md)
* [RemediationCreated](interfaces/remediationcreated.md)
* [RemediationDetails](interfaces/remediationdetails.md)
* [RemediationInput](interfaces/remediationinput.md)
* [RemediationInputAdd](interfaces/remediationinputadd.md)
* [RemediationInputAddIssues](interfaces/remediationinputaddissues.md)
* [RemediationIssue](interfaces/remediationissue.md)
* [RemediationIssueIn](interfaces/remediationissuein.md)
* [RemediationIssueResolution](interfaces/remediationissueresolution.md)
* [RemediationIssueSystemList](interfaces/remediationissuesystemlist.md)
* [RemediationList](interfaces/remediationlist.md)
* [RemediationListItem](interfaces/remediationlistitem.md)
* [RemediationListLinks](interfaces/remediationlistlinks.md)
* [RequestArgs](interfaces/requestargs.md)
* [RequestError](interfaces/requesterror.md)
* [RequestErrorErrors](interfaces/requesterrorerrors.md)
* [Resolutions](interfaces/resolutions.md)
* [ResolutionsBatchInput](interfaces/resolutionsbatchinput.md)
* [ResolutionsResolutions](interfaces/resolutionsresolutions.md)
* [SystemOut](interfaces/systemout.md)
* [UserOut](interfaces/userout.md)

### Variables

* [BASE_PATH](globals.md#const-base_path)
* [env](globals.md#const-env)

### Functions

* [DiagnosisApiAxiosParamCreator](globals.md#const-diagnosisapiaxiosparamcreator)
* [DiagnosisApiFactory](globals.md#const-diagnosisapifactory)
* [DiagnosisApiFp](globals.md#const-diagnosisapifp)
* [GeneratorApiAxiosParamCreator](globals.md#const-generatorapiaxiosparamcreator)
* [GeneratorApiFactory](globals.md#const-generatorapifactory)
* [GeneratorApiFp](globals.md#const-generatorapifp)
* [RemediationsApiAxiosParamCreator](globals.md#const-remediationsapiaxiosparamcreator)
* [RemediationsApiFactory](globals.md#const-remediationsapifactory)
* [RemediationsApiFp](globals.md#const-remediationsapifp)
* [ResolutionsApiAxiosParamCreator](globals.md#const-resolutionsapiaxiosparamcreator)
* [ResolutionsApiFactory](globals.md#const-resolutionsapifactory)
* [ResolutionsApiFp](globals.md#const-resolutionsapifp)
* [VersionApiAxiosParamCreator](globals.md#const-versionapiaxiosparamcreator)
* [VersionApiFactory](globals.md#const-versionapifactory)
* [VersionApiFp](globals.md#const-versionapifp)

### Object literals

* [COLLECTION_FORMATS](globals.md#const-collection_formats)
* [config](globals.md#const-config)

## Variables

### `Const` BASE_PATH

• **BASE_PATH**: *string* = "https://cloud.redhat.com/api/remediations/v1".replace(/\/+$/, "")

*Defined in [base.ts:20](https://github.com/fhlavac/javascript-clients/blob/master/packages/remediations/base.ts#L20)*

___

### `Const` env

• **env**: *ProcessEnv‹›* = process.env

*Defined in [test/config.ts:1](https://github.com/fhlavac/javascript-clients/blob/master/packages/remediations/test/config.ts#L1)*

## Functions

### `Const` DiagnosisApiAxiosParamCreator

▸ **DiagnosisApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:1188](https://github.com/fhlavac/javascript-clients/blob/master/packages/remediations/api.ts#L1188)*

DiagnosisApi - axios parameter creator

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **getDiagnosis**(`system`: string, `remediation?`: string, `branchId?`: string, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

___

### `Const` DiagnosisApiFactory

▸ **DiagnosisApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [api.ts:1268](https://github.com/fhlavac/javascript-clients/blob/master/packages/remediations/api.ts#L1268)*

DiagnosisApi - factory interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`basePath?` | string |
`axios?` | AxiosInstance |

**Returns:** *object*

* **getDiagnosis**(`system`: string, `remediation?`: string, `branchId?`: string, `options?`: any): *AxiosPromise‹[Diagnosis](interfaces/diagnosis.md)›*

___

### `Const` DiagnosisApiFp

▸ **DiagnosisApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:1243](https://github.com/fhlavac/javascript-clients/blob/master/packages/remediations/api.ts#L1243)*

DiagnosisApi - functional programming interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **getDiagnosis**(`system`: string, `remediation?`: string, `branchId?`: string, `options?`: any): *Promise‹function›*

___

### `Const` GeneratorApiAxiosParamCreator

▸ **GeneratorApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:1313](https://github.com/fhlavac/javascript-clients/blob/master/packages/remediations/api.ts#L1313)*

GeneratorApi - axios parameter creator

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **generate**(`playbookDefinition`: [PlaybookDefinition](interfaces/playbookdefinition.md), `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

___

### `Const` GeneratorApiFactory

▸ **GeneratorApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [api.ts:1384](https://github.com/fhlavac/javascript-clients/blob/master/packages/remediations/api.ts#L1384)*

GeneratorApi - factory interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`basePath?` | string |
`axios?` | AxiosInstance |

**Returns:** *object*

* **generate**(`playbookDefinition`: [PlaybookDefinition](interfaces/playbookdefinition.md), `options?`: any): *AxiosPromise‹string›*

___

### `Const` GeneratorApiFp

▸ **GeneratorApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:1361](https://github.com/fhlavac/javascript-clients/blob/master/packages/remediations/api.ts#L1361)*

GeneratorApi - functional programming interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **generate**(`playbookDefinition`: [PlaybookDefinition](interfaces/playbookdefinition.md), `options?`: any): *Promise‹function›*

___

### `Const` RemediationsApiAxiosParamCreator

▸ **RemediationsApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:1425](https://github.com/fhlavac/javascript-clients/blob/master/packages/remediations/api.ts#L1425)*

RemediationsApi - axios parameter creator

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **cancelPlaybookRuns**(`id`: string, `playbookRunId`: string, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **checkExecutable**(`id`: string, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **createRemediation**(`remediationInput`: [RemediationInput](interfaces/remediationinput.md), `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **deleteRemediation**(`id`: string, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **deleteRemediationIssue**(`id`: string, `issue`: string, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **deleteRemediationIssueSystem**(`id`: string, `issue`: string, `system`: string, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **downloadPlaybooks**(`selectedRemediations?`: Array‹string›, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **getPlaybookRunDetails**(`id`: string, `playbookRunId`: string, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **getPlaybookRunSystemDetails**(`id`: string, `playbookRunId`: string, `system`: string, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **getPlaybookRunSystems**(`id`: string, `playbookRunId`: string, `executor?`: string, `limit?`: number, `offset?`: number, `ansibleHost?`: string, `sort?`: "system_name" | "-system_name", `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **getRemediation**(`id`: string, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **getRemediationConnectionStatus**(`id`: string, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **getRemediationIssueSystems**(`id`: string, `issue`: string, `limit?`: number, `offset?`: number, `sort?`: "display_name" | "-display_name", `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **getRemediationPlaybook**(`id`: string, `hosts?`: Array‹string›, `localhost?`: boolean, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **getRemediations**(`sort?`: "updated_at" | "-updated_at" | "name" | "-name" | "system_count" | "-system_count" | "issue_count" | "-issue_count", `filter?`: string, `limit?`: number, `offset?`: number, `system?`: string, `hideArchived?`: boolean, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **listPlaybookRuns**(`id`: string, `limit?`: number, `offset?`: number, `sort?`: "updated_at" | "-updated_at", `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **runRemediation**(`id`: string, `data?`: any, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **updateRemediation**(`id`: string, `remediationInput`: [RemediationInput](interfaces/remediationinput.md), `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **updateRemediationIssue**(`id`: string, `issue`: string, `remediationIssueIn`: [RemediationIssueIn](interfaces/remediationissuein.md), `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

___

### `Const` RemediationsApiFactory

▸ **RemediationsApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [api.ts:2598](https://github.com/fhlavac/javascript-clients/blob/master/packages/remediations/api.ts#L2598)*

RemediationsApi - factory interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`basePath?` | string |
`axios?` | AxiosInstance |

**Returns:** *object*

* **cancelPlaybookRuns**(`id`: string, `playbookRunId`: string, `options?`: any): *AxiosPromise‹object›*

* **checkExecutable**(`id`: string, `options?`: any): *AxiosPromise‹void›*

* **createRemediation**(`remediationInput`: [RemediationInput](interfaces/remediationinput.md), `options?`: any): *AxiosPromise‹[RemediationCreated](interfaces/remediationcreated.md)›*

* **deleteRemediation**(`id`: string, `options?`: any): *AxiosPromise‹void›*

* **deleteRemediationIssue**(`id`: string, `issue`: string, `options?`: any): *AxiosPromise‹void›*

* **deleteRemediationIssueSystem**(`id`: string, `issue`: string, `system`: string, `options?`: any): *AxiosPromise‹void›*

* **downloadPlaybooks**(`selectedRemediations?`: Array‹string›, `options?`: any): *AxiosPromise‹any›*

* **getPlaybookRunDetails**(`id`: string, `playbookRunId`: string, `options?`: any): *AxiosPromise‹[PlaybookRunExecutorDetails](interfaces/playbookrunexecutordetails.md)›*

* **getPlaybookRunSystemDetails**(`id`: string, `playbookRunId`: string, `system`: string, `options?`: any): *AxiosPromise‹[PlaybookRunSystemDetails](interfaces/playbookrunsystemdetails.md)›*

* **getPlaybookRunSystems**(`id`: string, `playbookRunId`: string, `executor?`: string, `limit?`: number, `offset?`: number, `ansibleHost?`: string, `sort?`: "system_name" | "-system_name", `options?`: any): *AxiosPromise‹[PlaybookRunSystemList](interfaces/playbookrunsystemlist.md)›*

* **getRemediation**(`id`: string, `options?`: any): *AxiosPromise‹[RemediationDetails](interfaces/remediationdetails.md)›*

* **getRemediationConnectionStatus**(`id`: string, `options?`: any): *AxiosPromise‹[RemediationConnectionStatus](interfaces/remediationconnectionstatus.md)›*

* **getRemediationIssueSystems**(`id`: string, `issue`: string, `limit?`: number, `offset?`: number, `sort?`: "display_name" | "-display_name", `options?`: any): *AxiosPromise‹[RemediationIssueSystemList](interfaces/remediationissuesystemlist.md)›*

* **getRemediationPlaybook**(`id`: string, `hosts?`: Array‹string›, `localhost?`: boolean, `options?`: any): *AxiosPromise‹string›*

* **getRemediations**(`sort?`: "updated_at" | "-updated_at" | "name" | "-name" | "system_count" | "-system_count" | "issue_count" | "-issue_count", `filter?`: string, `limit?`: number, `offset?`: number, `system?`: string, `hideArchived?`: boolean, `options?`: any): *AxiosPromise‹[RemediationList](interfaces/remediationlist.md)›*

* **listPlaybookRuns**(`id`: string, `limit?`: number, `offset?`: number, `sort?`: "updated_at" | "-updated_at", `options?`: any): *AxiosPromise‹[PlaybookRunsList](interfaces/playbookrunslist.md)›*

* **runRemediation**(`id`: string, `data?`: any, `options?`: any): *AxiosPromise‹[ExecuteRemediation](interfaces/executeremediation.md)›*

* **updateRemediation**(`id`: string, `remediationInput`: [RemediationInput](interfaces/remediationinput.md), `options?`: any): *AxiosPromise‹void›*

* **updateRemediationIssue**(`id`: string, `issue`: string, `remediationIssueIn`: [RemediationIssueIn](interfaces/remediationissuein.md), `options?`: any): *AxiosPromise‹void›*

___

### `Const` RemediationsApiFp

▸ **RemediationsApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:2292](https://github.com/fhlavac/javascript-clients/blob/master/packages/remediations/api.ts#L2292)*

RemediationsApi - functional programming interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **cancelPlaybookRuns**(`id`: string, `playbookRunId`: string, `options?`: any): *Promise‹function›*

* **checkExecutable**(`id`: string, `options?`: any): *Promise‹function›*

* **createRemediation**(`remediationInput`: [RemediationInput](interfaces/remediationinput.md), `options?`: any): *Promise‹function›*

* **deleteRemediation**(`id`: string, `options?`: any): *Promise‹function›*

* **deleteRemediationIssue**(`id`: string, `issue`: string, `options?`: any): *Promise‹function›*

* **deleteRemediationIssueSystem**(`id`: string, `issue`: string, `system`: string, `options?`: any): *Promise‹function›*

* **downloadPlaybooks**(`selectedRemediations?`: Array‹string›, `options?`: any): *Promise‹function›*

* **getPlaybookRunDetails**(`id`: string, `playbookRunId`: string, `options?`: any): *Promise‹function›*

* **getPlaybookRunSystemDetails**(`id`: string, `playbookRunId`: string, `system`: string, `options?`: any): *Promise‹function›*

* **getPlaybookRunSystems**(`id`: string, `playbookRunId`: string, `executor?`: string, `limit?`: number, `offset?`: number, `ansibleHost?`: string, `sort?`: "system_name" | "-system_name", `options?`: any): *Promise‹function›*

* **getRemediation**(`id`: string, `options?`: any): *Promise‹function›*

* **getRemediationConnectionStatus**(`id`: string, `options?`: any): *Promise‹function›*

* **getRemediationIssueSystems**(`id`: string, `issue`: string, `limit?`: number, `offset?`: number, `sort?`: "display_name" | "-display_name", `options?`: any): *Promise‹function›*

* **getRemediationPlaybook**(`id`: string, `hosts?`: Array‹string›, `localhost?`: boolean, `options?`: any): *Promise‹function›*

* **getRemediations**(`sort?`: "updated_at" | "-updated_at" | "name" | "-name" | "system_count" | "-system_count" | "issue_count" | "-issue_count", `filter?`: string, `limit?`: number, `offset?`: number, `system?`: string, `hideArchived?`: boolean, `options?`: any): *Promise‹function›*

* **listPlaybookRuns**(`id`: string, `limit?`: number, `offset?`: number, `sort?`: "updated_at" | "-updated_at", `options?`: any): *Promise‹function›*

* **runRemediation**(`id`: string, `data?`: any, `options?`: any): *Promise‹function›*

* **updateRemediation**(`id`: string, `remediationInput`: [RemediationInput](interfaces/remediationinput.md), `options?`: any): *Promise‹function›*

* **updateRemediationIssue**(`id`: string, `issue`: string, `remediationIssueIn`: [RemediationIssueIn](interfaces/remediationissuein.md), `options?`: any): *Promise‹function›*

___

### `Const` ResolutionsApiAxiosParamCreator

▸ **ResolutionsApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:3097](https://github.com/fhlavac/javascript-clients/blob/master/packages/remediations/api.ts#L3097)*

ResolutionsApi - axios parameter creator

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **getResolutionsForIssue**(`issue`: string, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **getResolutionsForIssues**(`resolutionsBatchInput`: [ResolutionsBatchInput](interfaces/resolutionsbatchinput.md), `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

___

### `Const` ResolutionsApiFactory

▸ **ResolutionsApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [api.ts:3218](https://github.com/fhlavac/javascript-clients/blob/master/packages/remediations/api.ts#L3218)*

ResolutionsApi - factory interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`basePath?` | string |
`axios?` | AxiosInstance |

**Returns:** *object*

* **getResolutionsForIssue**(`issue`: string, `options?`: any): *AxiosPromise‹[Resolutions](interfaces/resolutions.md)›*

* **getResolutionsForIssues**(`resolutionsBatchInput`: [ResolutionsBatchInput](interfaces/resolutionsbatchinput.md), `options?`: any): *AxiosPromise‹object›*

___

### `Const` ResolutionsApiFp

▸ **ResolutionsApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:3181](https://github.com/fhlavac/javascript-clients/blob/master/packages/remediations/api.ts#L3181)*

ResolutionsApi - functional programming interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **getResolutionsForIssue**(`issue`: string, `options?`: any): *Promise‹function›*

* **getResolutionsForIssues**(`resolutionsBatchInput`: [ResolutionsBatchInput](interfaces/resolutionsbatchinput.md), `options?`: any): *Promise‹function›*

___

### `Const` VersionApiAxiosParamCreator

▸ **VersionApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:3281](https://github.com/fhlavac/javascript-clients/blob/master/packages/remediations/api.ts#L3281)*

VersionApi - axios parameter creator

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **getVersion**(`options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

___

### `Const` VersionApiFactory

▸ **VersionApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [api.ts:3342](https://github.com/fhlavac/javascript-clients/blob/master/packages/remediations/api.ts#L3342)*

VersionApi - factory interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`basePath?` | string |
`axios?` | AxiosInstance |

**Returns:** *object*

* **getVersion**(`options?`: any): *AxiosPromise‹[InlineResponse200](interfaces/inlineresponse200.md)›*

___

### `Const` VersionApiFp

▸ **VersionApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:3320](https://github.com/fhlavac/javascript-clients/blob/master/packages/remediations/api.ts#L3320)*

VersionApi - functional programming interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **getVersion**(`options?`: any): *Promise‹function›*

## Object literals

### `Const` COLLECTION_FORMATS

### ▪ **COLLECTION_FORMATS**: *object*

*Defined in [base.ts:26](https://github.com/fhlavac/javascript-clients/blob/master/packages/remediations/base.ts#L26)*

**`export`** 

###  csv

• **csv**: *string* = ","

*Defined in [base.ts:27](https://github.com/fhlavac/javascript-clients/blob/master/packages/remediations/base.ts#L27)*

###  pipes

• **pipes**: *string* = "|"

*Defined in [base.ts:30](https://github.com/fhlavac/javascript-clients/blob/master/packages/remediations/base.ts#L30)*

###  ssv

• **ssv**: *string* = " "

*Defined in [base.ts:28](https://github.com/fhlavac/javascript-clients/blob/master/packages/remediations/base.ts#L28)*

###  tsv

• **tsv**: *string* = "	"

*Defined in [base.ts:29](https://github.com/fhlavac/javascript-clients/blob/master/packages/remediations/base.ts#L29)*

___

### `Const` config

### ▪ **config**: *object*

*Defined in [test/config.ts:5](https://github.com/fhlavac/javascript-clients/blob/master/packages/remediations/test/config.ts#L5)*

###  baseOptions

• **baseOptions**: *object*

*Defined in [test/config.ts:7](https://github.com/fhlavac/javascript-clients/blob/master/packages/remediations/test/config.ts#L7)*

#### Type declaration:

###  basePath

• **basePath**: *string* = env.TEST_BASEPATH || 'http://localhost:9002/api/remediations/v1'

*Defined in [test/config.ts:6](https://github.com/fhlavac/javascript-clients/blob/master/packages/remediations/test/config.ts#L6)*
