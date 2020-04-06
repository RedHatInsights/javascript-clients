[@redhat-cloud-services/remediations-client](README.md) › [Globals](globals.md)

# @redhat-cloud-services/remediations-client

## Index

### Modules

* [PlaybookExecutorStatus](modules/playbookexecutorstatus.md)

### Enumerations

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

• **BASE_PATH**: *string* =  "https://cloud.redhat.com/api/remediations/v1".replace(/\/+$/, "")

*Defined in [api.ts:20](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L20)*

___

### `Const` env

• **env**: *ProcessEnv* =  process.env

*Defined in [test/config.ts:1](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/test/config.ts#L1)*

## Functions

### `Const` DiagnosisApiAxiosParamCreator

▸ **DiagnosisApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:1214](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L1214)*

DiagnosisApi - axios parameter creator

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **getDiagnosis**(`system`: string, `remediation?`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

___

### `Const` DiagnosisApiFactory

▸ **DiagnosisApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [api.ts:1285](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L1285)*

DiagnosisApi - factory interface

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`basePath?` | string |
`axios?` | AxiosInstance |

**Returns:** *object*

* **getDiagnosis**(`system`: string, `remediation?`: string, `options?`: any): *AxiosPromise‹[Diagnosis](interfaces/diagnosis.md)›*

___

### `Const` DiagnosisApiFp

▸ **DiagnosisApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:1261](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L1261)*

DiagnosisApi - functional programming interface

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **getDiagnosis**(`system`: string, `remediation?`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[Diagnosis](interfaces/diagnosis.md)›*

___

### `Const` GeneratorApiAxiosParamCreator

▸ **GeneratorApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:1327](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L1327)*

GeneratorApi - axios parameter creator

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **generate**(`playbookDefinition`: [PlaybookDefinition](interfaces/playbookdefinition.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

___

### `Const` GeneratorApiFactory

▸ **GeneratorApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [api.ts:1395](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L1395)*

GeneratorApi - factory interface

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

*Defined in [api.ts:1372](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L1372)*

GeneratorApi - functional programming interface

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **generate**(`playbookDefinition`: [PlaybookDefinition](interfaces/playbookdefinition.md), `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹string›*

___

### `Const` RemediationsApiAxiosParamCreator

▸ **RemediationsApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:1435](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L1435)*

RemediationsApi - axios parameter creator

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **cancelPlaybookRuns**(`id`: string, `playbookRunId`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **createRemediation**(`remediationInput`: [RemediationInput](interfaces/remediationinput.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **deleteRemediation**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **deleteRemediationIssue**(`id`: string, `issue`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **deleteRemediationIssueSystem**(`id`: string, `issue`: string, `system`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **getPlaybookRunDetails**(`id`: string, `playbookRunId`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **getPlaybookRunSystemDetails**(`id`: string, `playbookRunId`: string, `system`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **getPlaybookRunSystems**(`id`: string, `playbookRunId`: string, `executor?`: string, `limit?`: number, `offset?`: number, `ansibleHost?`: string, `sort?`: "system_name" | "-system_name", `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **getRemediation**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **getRemediationConnectionStatus**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **getRemediationPlaybook**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **getRemediations**(`sort?`: "updated_at" | "-updated_at" | "name" | "-name" | "system_count" | "-system_count" | "issue_count" | "-issue_count", `filter?`: string, `limit?`: number, `offset?`: number, `system?`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listPlaybookRuns**(`id`: string, `limit?`: number, `offset?`: number, `sort?`: "updated_at" | "-updated_at", `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **runRemediation**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **updateRemediation**(`id`: string, `remediationInput`: [RemediationInput](interfaces/remediationinput.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **updateRemediationIssue**(`id`: string, `issue`: string, `remediationIssueIn`: [RemediationIssueIn](interfaces/remediationissuein.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

___

### `Const` RemediationsApiFactory

▸ **RemediationsApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [api.ts:2362](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L2362)*

RemediationsApi - factory interface

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`basePath?` | string |
`axios?` | AxiosInstance |

**Returns:** *object*

* **cancelPlaybookRuns**(`id`: string, `playbookRunId`: string, `options?`: any): *AxiosPromise‹any›*

* **createRemediation**(`remediationInput`: [RemediationInput](interfaces/remediationinput.md), `options?`: any): *AxiosPromise‹[RemediationCreated](interfaces/remediationcreated.md)›*

* **deleteRemediation**(`id`: string, `options?`: any): *AxiosPromise‹Response›*

* **deleteRemediationIssue**(`id`: string, `issue`: string, `options?`: any): *AxiosPromise‹Response›*

* **deleteRemediationIssueSystem**(`id`: string, `issue`: string, `system`: string, `options?`: any): *AxiosPromise‹Response›*

* **getPlaybookRunDetails**(`id`: string, `playbookRunId`: string, `options?`: any): *AxiosPromise‹[PlaybookRunExecutorDetails](interfaces/playbookrunexecutordetails.md)›*

* **getPlaybookRunSystemDetails**(`id`: string, `playbookRunId`: string, `system`: string, `options?`: any): *AxiosPromise‹[PlaybookRunSystemDetails](interfaces/playbookrunsystemdetails.md)›*

* **getPlaybookRunSystems**(`id`: string, `playbookRunId`: string, `executor?`: string, `limit?`: number, `offset?`: number, `ansibleHost?`: string, `sort?`: "system_name" | "-system_name", `options?`: any): *AxiosPromise‹[PlaybookRunSystemList](interfaces/playbookrunsystemlist.md)›*

* **getRemediation**(`id`: string, `options?`: any): *AxiosPromise‹[RemediationDetails](interfaces/remediationdetails.md)›*

* **getRemediationConnectionStatus**(`id`: string, `options?`: any): *AxiosPromise‹[RemediationConnectionStatus](interfaces/remediationconnectionstatus.md)›*

* **getRemediationPlaybook**(`id`: string, `options?`: any): *AxiosPromise‹string›*

* **getRemediations**(`sort?`: "updated_at" | "-updated_at" | "name" | "-name" | "system_count" | "-system_count" | "issue_count" | "-issue_count", `filter?`: string, `limit?`: number, `offset?`: number, `system?`: string, `options?`: any): *AxiosPromise‹[RemediationList](interfaces/remediationlist.md)›*

* **listPlaybookRuns**(`id`: string, `limit?`: number, `offset?`: number, `sort?`: "updated_at" | "-updated_at", `options?`: any): *AxiosPromise‹[PlaybookRunsList](interfaces/playbookrunslist.md)›*

* **runRemediation**(`id`: string, `options?`: any): *AxiosPromise‹[ExecuteRemediation](interfaces/executeremediation.md)›*

* **updateRemediation**(`id`: string, `remediationInput`: [RemediationInput](interfaces/remediationinput.md), `options?`: any): *AxiosPromise‹Response›*

* **updateRemediationIssue**(`id`: string, `issue`: string, `remediationIssueIn`: [RemediationIssueIn](interfaces/remediationissuein.md), `options?`: any): *AxiosPromise‹Response›*

___

### `Const` RemediationsApiFp

▸ **RemediationsApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:2106](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L2106)*

RemediationsApi - functional programming interface

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **cancelPlaybookRuns**(`id`: string, `playbookRunId`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹any›*

* **createRemediation**(`remediationInput`: [RemediationInput](interfaces/remediationinput.md), `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[RemediationCreated](interfaces/remediationcreated.md)›*

* **deleteRemediation**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹Response›*

* **deleteRemediationIssue**(`id`: string, `issue`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹Response›*

* **deleteRemediationIssueSystem**(`id`: string, `issue`: string, `system`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹Response›*

* **getPlaybookRunDetails**(`id`: string, `playbookRunId`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[PlaybookRunExecutorDetails](interfaces/playbookrunexecutordetails.md)›*

* **getPlaybookRunSystemDetails**(`id`: string, `playbookRunId`: string, `system`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[PlaybookRunSystemDetails](interfaces/playbookrunsystemdetails.md)›*

* **getPlaybookRunSystems**(`id`: string, `playbookRunId`: string, `executor?`: string, `limit?`: number, `offset?`: number, `ansibleHost?`: string, `sort?`: "system_name" | "-system_name", `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[PlaybookRunSystemList](interfaces/playbookrunsystemlist.md)›*

* **getRemediation**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[RemediationDetails](interfaces/remediationdetails.md)›*

* **getRemediationConnectionStatus**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[RemediationConnectionStatus](interfaces/remediationconnectionstatus.md)›*

* **getRemediationPlaybook**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹string›*

* **getRemediations**(`sort?`: "updated_at" | "-updated_at" | "name" | "-name" | "system_count" | "-system_count" | "issue_count" | "-issue_count", `filter?`: string, `limit?`: number, `offset?`: number, `system?`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[RemediationList](interfaces/remediationlist.md)›*

* **listPlaybookRuns**(`id`: string, `limit?`: number, `offset?`: number, `sort?`: "updated_at" | "-updated_at", `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[PlaybookRunsList](interfaces/playbookrunslist.md)›*

* **runRemediation**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ExecuteRemediation](interfaces/executeremediation.md)›*

* **updateRemediation**(`id`: string, `remediationInput`: [RemediationInput](interfaces/remediationinput.md), `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹Response›*

* **updateRemediationIssue**(`id`: string, `issue`: string, `remediationIssueIn`: [RemediationIssueIn](interfaces/remediationissuein.md), `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹Response›*

___

### `Const` ResolutionsApiAxiosParamCreator

▸ **ResolutionsApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:2778](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L2778)*

ResolutionsApi - axios parameter creator

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **getResolutionsForIssue**(`issue`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **getResolutionsForIssues**(`resolutionsBatchInput`: [ResolutionsBatchInput](interfaces/resolutionsbatchinput.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

___

### `Const` ResolutionsApiFactory

▸ **ResolutionsApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [api.ts:2893](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L2893)*

ResolutionsApi - factory interface

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

*Defined in [api.ts:2856](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L2856)*

ResolutionsApi - functional programming interface

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **getResolutionsForIssue**(`issue`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[Resolutions](interfaces/resolutions.md)›*

* **getResolutionsForIssues**(`resolutionsBatchInput`: [ResolutionsBatchInput](interfaces/resolutionsbatchinput.md), `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹object›*

___

### `Const` VersionApiAxiosParamCreator

▸ **VersionApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:2955](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L2955)*

VersionApi - axios parameter creator

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **getVersion**(`options`: any): *[RequestArgs](interfaces/requestargs.md)*

___

### `Const` VersionApiFactory

▸ **VersionApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [api.ts:3013](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L3013)*

VersionApi - factory interface

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

*Defined in [api.ts:2991](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L2991)*

VersionApi - functional programming interface

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **getVersion**(`options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[InlineResponse200](interfaces/inlineresponse200.md)›*

## Object literals

### `Const` COLLECTION_FORMATS

### ▪ **COLLECTION_FORMATS**: *object*

*Defined in [api.ts:26](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L26)*

**`export`** 

###  csv

• **csv**: *string* = ","

*Defined in [api.ts:27](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L27)*

###  pipes

• **pipes**: *string* = "|"

*Defined in [api.ts:30](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L30)*

###  ssv

• **ssv**: *string* = " "

*Defined in [api.ts:28](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L28)*

###  tsv

• **tsv**: *string* = "	"

*Defined in [api.ts:29](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L29)*

___

### `Const` config

### ▪ **config**: *object*

*Defined in [test/config.ts:5](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/test/config.ts#L5)*

###  baseOptions

• **baseOptions**: *object*

*Defined in [test/config.ts:7](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/test/config.ts#L7)*

#### Type declaration:

###  basePath

• **basePath**: *string* =  env.TEST_BASEPATH || 'http://localhost:9002/api/remediations/v1'

*Defined in [test/config.ts:6](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/test/config.ts#L6)*
