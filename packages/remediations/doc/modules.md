[@redhat-cloud-services/remediations-client](README.md) / Exports

# @redhat-cloud-services/remediations-client

## Table of contents

### Enumerations

- [PlaybookExecutorStatusConnectionStatusEnum](enums/PlaybookExecutorStatusConnectionStatusEnum.md)
- [PlaybookRunExecutorStatus](enums/PlaybookRunExecutorStatus.md)
- [PlaybookRunStatus](enums/PlaybookRunStatus.md)
- [PlaybookRunSystemStatus](enums/PlaybookRunSystemStatus.md)
- [ResolutionRisk](enums/ResolutionRisk.md)

### Classes

- [Configuration](classes/Configuration.md)
- [DiagnosisApi](classes/DiagnosisApi.md)
- [GeneratorApi](classes/GeneratorApi.md)
- [RemediationsApi](classes/RemediationsApi.md)
- [ResolutionsApi](classes/ResolutionsApi.md)
- [VersionApi](classes/VersionApi.md)

### Interfaces

- [ConfigurationParameters](interfaces/ConfigurationParameters.md)
- [Counts](interfaces/Counts.md)
- [Diagnosis](interfaces/Diagnosis.md)
- [ExecuteRemediation](interfaces/ExecuteRemediation.md)
- [InlineResponse200](interfaces/InlineResponse200.md)
- [Meta](interfaces/Meta.md)
- [MultipleDelete](interfaces/MultipleDelete.md)
- [NoExecutors](interfaces/NoExecutors.md)
- [NoExecutorsErrors](interfaces/NoExecutorsErrors.md)
- [PlaybookDefinition](interfaces/PlaybookDefinition.md)
- [PlaybookDefinitionIssues](interfaces/PlaybookDefinitionIssues.md)
- [PlaybookExecutorDetails](interfaces/PlaybookExecutorDetails.md)
- [PlaybookExecutorStatus](interfaces/PlaybookExecutorStatus.md)
- [PlaybookExecutors](interfaces/PlaybookExecutors.md)
- [PlaybookRunDetails](interfaces/PlaybookRunDetails.md)
- [PlaybookRunExecutorDetails](interfaces/PlaybookRunExecutorDetails.md)
- [PlaybookRunSystemDetails](interfaces/PlaybookRunSystemDetails.md)
- [PlaybookRunSystemList](interfaces/PlaybookRunSystemList.md)
- [PlaybookRunSystems](interfaces/PlaybookRunSystems.md)
- [PlaybookRunsInput](interfaces/PlaybookRunsInput.md)
- [PlaybookRunsList](interfaces/PlaybookRunsList.md)
- [RemediationConnectionStatus](interfaces/RemediationConnectionStatus.md)
- [RemediationCreated](interfaces/RemediationCreated.md)
- [RemediationDetails](interfaces/RemediationDetails.md)
- [RemediationInput](interfaces/RemediationInput.md)
- [RemediationInputAdd](interfaces/RemediationInputAdd.md)
- [RemediationInputAddIssues](interfaces/RemediationInputAddIssues.md)
- [RemediationIssue](interfaces/RemediationIssue.md)
- [RemediationIssueIn](interfaces/RemediationIssueIn.md)
- [RemediationIssueResolution](interfaces/RemediationIssueResolution.md)
- [RemediationIssueSystemList](interfaces/RemediationIssueSystemList.md)
- [RemediationList](interfaces/RemediationList.md)
- [RemediationListItem](interfaces/RemediationListItem.md)
- [RemediationListLinks](interfaces/RemediationListLinks.md)
- [RemediationNameList](interfaces/RemediationNameList.md)
- [RemediationNameListItem](interfaces/RemediationNameListItem.md)
- [RemediationsList](interfaces/RemediationsList.md)
- [RequestError](interfaces/RequestError.md)
- [RequestErrorErrors](interfaces/RequestErrorErrors.md)
- [Resolutions](interfaces/Resolutions.md)
- [ResolutionsBatchInput](interfaces/ResolutionsBatchInput.md)
- [ResolutionsResolutions](interfaces/ResolutionsResolutions.md)
- [SystemOut](interfaces/SystemOut.md)
- [UserOut](interfaces/UserOut.md)

### Functions

- [DiagnosisApiAxiosParamCreator](modules.md#diagnosisapiaxiosparamcreator)
- [DiagnosisApiFactory](modules.md#diagnosisapifactory)
- [DiagnosisApiFp](modules.md#diagnosisapifp)
- [GeneratorApiAxiosParamCreator](modules.md#generatorapiaxiosparamcreator)
- [GeneratorApiFactory](modules.md#generatorapifactory)
- [GeneratorApiFp](modules.md#generatorapifp)
- [RemediationsApiAxiosParamCreator](modules.md#remediationsapiaxiosparamcreator)
- [RemediationsApiFactory](modules.md#remediationsapifactory)
- [RemediationsApiFp](modules.md#remediationsapifp)
- [ResolutionsApiAxiosParamCreator](modules.md#resolutionsapiaxiosparamcreator)
- [ResolutionsApiFactory](modules.md#resolutionsapifactory)
- [ResolutionsApiFp](modules.md#resolutionsapifp)
- [VersionApiAxiosParamCreator](modules.md#versionapiaxiosparamcreator)
- [VersionApiFactory](modules.md#versionapifactory)
- [VersionApiFp](modules.md#versionapifp)

## Functions

### DiagnosisApiAxiosParamCreator

▸ **DiagnosisApiAxiosParamCreator**(`configuration?`): `Object`

DiagnosisApi - axios parameter creator

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type | Description |
| :------ | :------ | :------ |
| `getDiagnosis` | (`system`: `string`, `remediation?`: `string`, `branchId?`: `string`, `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |

**`Export`**

#### Defined in

[api.ts:1316](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/remediations/api.ts#L1316)

___

### DiagnosisApiFactory

▸ **DiagnosisApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

DiagnosisApi - factory interface

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
| `getDiagnosis` | (`system`: `string`, `remediation?`: `string`, `branchId?`: `string`, `options?`: `any`) => `AxiosPromise`\<[`Diagnosis`](interfaces/Diagnosis.md)\> |

**`Export`**

#### Defined in

[api.ts:1396](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/remediations/api.ts#L1396)

___

### DiagnosisApiFp

▸ **DiagnosisApiFp**(`configuration?`): `Object`

DiagnosisApi - functional programming interface

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `getDiagnosis` | (`system`: `string`, `remediation?`: `string`, `branchId?`: `string`, `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`Diagnosis`](interfaces/Diagnosis.md)\>\> |

**`Export`**

#### Defined in

[api.ts:1371](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/remediations/api.ts#L1371)

___

### GeneratorApiAxiosParamCreator

▸ **GeneratorApiAxiosParamCreator**(`configuration?`): `Object`

GeneratorApi - axios parameter creator

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type | Description |
| :------ | :------ | :------ |
| `generate` | (`playbookDefinition`: [`PlaybookDefinition`](interfaces/PlaybookDefinition.md), `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |

**`Export`**

#### Defined in

[api.ts:1441](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/remediations/api.ts#L1441)

___

### GeneratorApiFactory

▸ **GeneratorApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

GeneratorApi - factory interface

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
| `generate` | (`playbookDefinition`: [`PlaybookDefinition`](interfaces/PlaybookDefinition.md), `options?`: `any`) => `AxiosPromise`\<`string`\> |

**`Export`**

#### Defined in

[api.ts:1512](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/remediations/api.ts#L1512)

___

### GeneratorApiFp

▸ **GeneratorApiFp**(`configuration?`): `Object`

GeneratorApi - functional programming interface

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `generate` | (`playbookDefinition`: [`PlaybookDefinition`](interfaces/PlaybookDefinition.md), `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<`string`\>\> |

**`Export`**

#### Defined in

[api.ts:1489](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/remediations/api.ts#L1489)

___

### RemediationsApiAxiosParamCreator

▸ **RemediationsApiAxiosParamCreator**(`configuration?`): `Object`

RemediationsApi - axios parameter creator

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type | Description |
| :------ | :------ | :------ |
| `bulkGetRemediationPlaybook` | (`id`: `string`, `requestBody`: `string`[], `satOrg?`: `string`, `localhost?`: `boolean`, `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `cancelPlaybookRuns` | (`id`: `string`, `playbookRunId`: `string`, `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `checkExecutable` | (`id`: `string`, `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `createRemediation` | (`remediationInput`: [`RemediationInput`](interfaces/RemediationInput.md), `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `deleteRemediation` | (`id`: `string`, `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `deleteRemediationIssue` | (`id`: `string`, `issue`: `string`, `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `deleteRemediationIssueSystem` | (`id`: `string`, `issue`: `string`, `system`: `string`, `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `deleteRemediations` | (`remediationsList`: [`RemediationsList`](interfaces/RemediationsList.md), `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `downloadPlaybooks` | (`selectedRemediations?`: `string`[], `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `getPlaybookRunDetails` | (`id`: `string`, `playbookRunId`: `string`, `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `getPlaybookRunSystemDetails` | (`id`: `string`, `playbookRunId`: `string`, `system`: `string`, `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `getPlaybookRunSystems` | (`id`: `string`, `playbookRunId`: `string`, `executor?`: `string`, `limit?`: `number`, `offset?`: `number`, `ansibleHost?`: `string`, `sort?`: ``"system_name"`` \| ``"-system_name"``, `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `getRemediation` | (`id`: `string`, `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `getRemediationConnectionStatus` | (`id`: `string`, `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `getRemediationIssueSystems` | (`id`: `string`, `issue`: `string`, `limit?`: `number`, `offset?`: `number`, `sort?`: ``"display_name"`` \| ``"-display_name"``, `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `getRemediationPlaybook` | (`id`: `string`, `hosts?`: `string`[], `satOrg?`: `string`, `localhost?`: `boolean`, `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `getRemediations` | (`sort?`: ``"updated_at"`` \| ``"-updated_at"`` \| ``"name"`` \| ``"-name"`` \| ``"system_count"`` \| ``"-system_count"`` \| ``"issue_count"`` \| ``"-issue_count"``, `filter?`: `string`, `limit?`: `number`, `offset?`: `number`, `system?`: `string`, `hideArchived?`: `boolean`, `fieldsData?`: (``"name"`` \| ``"playbook_runs"``)[], `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `listPlaybookRuns` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `sort?`: ``"updated_at"`` \| ``"-updated_at"``, `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `runRemediation` | (`id`: `string`, `playbookRunsInput?`: [`PlaybookRunsInput`](interfaces/PlaybookRunsInput.md), `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `updateRemediation` | (`id`: `string`, `remediationInput`: [`RemediationInput`](interfaces/RemediationInput.md), `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `updateRemediationIssue` | (`id`: `string`, `issue`: `string`, `remediationIssueIn`: [`RemediationIssueIn`](interfaces/RemediationIssueIn.md), `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |

**`Export`**

#### Defined in

[api.ts:1553](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/remediations/api.ts#L1553)

___

### RemediationsApiFactory

▸ **RemediationsApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

RemediationsApi - factory interface

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
| `bulkGetRemediationPlaybook` | (`id`: `string`, `requestBody`: `string`[], `satOrg?`: `string`, `localhost?`: `boolean`, `options?`: `any`) => `AxiosPromise`\<`string`\> |
| `cancelPlaybookRuns` | (`id`: `string`, `playbookRunId`: `string`, `options?`: `any`) => `AxiosPromise`\<`object`\> |
| `checkExecutable` | (`id`: `string`, `options?`: `any`) => `AxiosPromise`\<`void`\> |
| `createRemediation` | (`remediationInput`: [`RemediationInput`](interfaces/RemediationInput.md), `options?`: `any`) => `AxiosPromise`\<[`RemediationCreated`](interfaces/RemediationCreated.md)\> |
| `deleteRemediation` | (`id`: `string`, `options?`: `any`) => `AxiosPromise`\<`void`\> |
| `deleteRemediationIssue` | (`id`: `string`, `issue`: `string`, `options?`: `any`) => `AxiosPromise`\<`void`\> |
| `deleteRemediationIssueSystem` | (`id`: `string`, `issue`: `string`, `system`: `string`, `options?`: `any`) => `AxiosPromise`\<`void`\> |
| `deleteRemediations` | (`remediationsList`: [`RemediationsList`](interfaces/RemediationsList.md), `options?`: `any`) => `AxiosPromise`\<[`MultipleDelete`](interfaces/MultipleDelete.md)\> |
| `downloadPlaybooks` | (`selectedRemediations?`: `string`[], `options?`: `any`) => `AxiosPromise`\<`any`\> |
| `getPlaybookRunDetails` | (`id`: `string`, `playbookRunId`: `string`, `options?`: `any`) => `AxiosPromise`\<[`PlaybookRunExecutorDetails`](interfaces/PlaybookRunExecutorDetails.md)\> |
| `getPlaybookRunSystemDetails` | (`id`: `string`, `playbookRunId`: `string`, `system`: `string`, `options?`: `any`) => `AxiosPromise`\<[`PlaybookRunSystemDetails`](interfaces/PlaybookRunSystemDetails.md)\> |
| `getPlaybookRunSystems` | (`id`: `string`, `playbookRunId`: `string`, `executor?`: `string`, `limit?`: `number`, `offset?`: `number`, `ansibleHost?`: `string`, `sort?`: ``"system_name"`` \| ``"-system_name"``, `options?`: `any`) => `AxiosPromise`\<[`PlaybookRunSystemList`](interfaces/PlaybookRunSystemList.md)\> |
| `getRemediation` | (`id`: `string`, `options?`: `any`) => `AxiosPromise`\<[`RemediationDetails`](interfaces/RemediationDetails.md)\> |
| `getRemediationConnectionStatus` | (`id`: `string`, `options?`: `any`) => `AxiosPromise`\<[`RemediationConnectionStatus`](interfaces/RemediationConnectionStatus.md)\> |
| `getRemediationIssueSystems` | (`id`: `string`, `issue`: `string`, `limit?`: `number`, `offset?`: `number`, `sort?`: ``"display_name"`` \| ``"-display_name"``, `options?`: `any`) => `AxiosPromise`\<[`RemediationIssueSystemList`](interfaces/RemediationIssueSystemList.md)\> |
| `getRemediationPlaybook` | (`id`: `string`, `hosts?`: `string`[], `satOrg?`: `string`, `localhost?`: `boolean`, `options?`: `any`) => `AxiosPromise`\<`string`\> |
| `getRemediations` | (`sort?`: ``"updated_at"`` \| ``"-updated_at"`` \| ``"name"`` \| ``"-name"`` \| ``"system_count"`` \| ``"-system_count"`` \| ``"issue_count"`` \| ``"-issue_count"``, `filter?`: `string`, `limit?`: `number`, `offset?`: `number`, `system?`: `string`, `hideArchived?`: `boolean`, `fieldsData?`: (``"name"`` \| ``"playbook_runs"``)[], `options?`: `any`) => `AxiosPromise`\<[`RemediationList`](interfaces/RemediationList.md) \| [`RemediationNameList`](interfaces/RemediationNameList.md)\> |
| `listPlaybookRuns` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `sort?`: ``"updated_at"`` \| ``"-updated_at"``, `options?`: `any`) => `AxiosPromise`\<[`PlaybookRunsList`](interfaces/PlaybookRunsList.md)\> |
| `runRemediation` | (`id`: `string`, `playbookRunsInput?`: [`PlaybookRunsInput`](interfaces/PlaybookRunsInput.md), `options?`: `any`) => `AxiosPromise`\<[`ExecuteRemediation`](interfaces/ExecuteRemediation.md)\> |
| `updateRemediation` | (`id`: `string`, `remediationInput`: [`RemediationInput`](interfaces/RemediationInput.md), `options?`: `any`) => `AxiosPromise`\<`void`\> |
| `updateRemediationIssue` | (`id`: `string`, `issue`: `string`, `remediationIssueIn`: [`RemediationIssueIn`](interfaces/RemediationIssueIn.md), `options?`: `any`) => `AxiosPromise`\<`void`\> |

**`Export`**

#### Defined in

[api.ts:2863](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/remediations/api.ts#L2863)

___

### RemediationsApiFp

▸ **RemediationsApiFp**(`configuration?`): `Object`

RemediationsApi - functional programming interface

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `bulkGetRemediationPlaybook` | (`id`: `string`, `requestBody`: `string`[], `satOrg?`: `string`, `localhost?`: `boolean`, `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<`string`\>\> |
| `cancelPlaybookRuns` | (`id`: `string`, `playbookRunId`: `string`, `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<`object`\>\> |
| `checkExecutable` | (`id`: `string`, `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<`void`\>\> |
| `createRemediation` | (`remediationInput`: [`RemediationInput`](interfaces/RemediationInput.md), `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`RemediationCreated`](interfaces/RemediationCreated.md)\>\> |
| `deleteRemediation` | (`id`: `string`, `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<`void`\>\> |
| `deleteRemediationIssue` | (`id`: `string`, `issue`: `string`, `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<`void`\>\> |
| `deleteRemediationIssueSystem` | (`id`: `string`, `issue`: `string`, `system`: `string`, `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<`void`\>\> |
| `deleteRemediations` | (`remediationsList`: [`RemediationsList`](interfaces/RemediationsList.md), `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`MultipleDelete`](interfaces/MultipleDelete.md)\>\> |
| `downloadPlaybooks` | (`selectedRemediations?`: `string`[], `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<`any`\>\> |
| `getPlaybookRunDetails` | (`id`: `string`, `playbookRunId`: `string`, `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`PlaybookRunExecutorDetails`](interfaces/PlaybookRunExecutorDetails.md)\>\> |
| `getPlaybookRunSystemDetails` | (`id`: `string`, `playbookRunId`: `string`, `system`: `string`, `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`PlaybookRunSystemDetails`](interfaces/PlaybookRunSystemDetails.md)\>\> |
| `getPlaybookRunSystems` | (`id`: `string`, `playbookRunId`: `string`, `executor?`: `string`, `limit?`: `number`, `offset?`: `number`, `ansibleHost?`: `string`, `sort?`: ``"system_name"`` \| ``"-system_name"``, `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`PlaybookRunSystemList`](interfaces/PlaybookRunSystemList.md)\>\> |
| `getRemediation` | (`id`: `string`, `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`RemediationDetails`](interfaces/RemediationDetails.md)\>\> |
| `getRemediationConnectionStatus` | (`id`: `string`, `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`RemediationConnectionStatus`](interfaces/RemediationConnectionStatus.md)\>\> |
| `getRemediationIssueSystems` | (`id`: `string`, `issue`: `string`, `limit?`: `number`, `offset?`: `number`, `sort?`: ``"display_name"`` \| ``"-display_name"``, `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`RemediationIssueSystemList`](interfaces/RemediationIssueSystemList.md)\>\> |
| `getRemediationPlaybook` | (`id`: `string`, `hosts?`: `string`[], `satOrg?`: `string`, `localhost?`: `boolean`, `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<`string`\>\> |
| `getRemediations` | (`sort?`: ``"updated_at"`` \| ``"-updated_at"`` \| ``"name"`` \| ``"-name"`` \| ``"system_count"`` \| ``"-system_count"`` \| ``"issue_count"`` \| ``"-issue_count"``, `filter?`: `string`, `limit?`: `number`, `offset?`: `number`, `system?`: `string`, `hideArchived?`: `boolean`, `fieldsData?`: (``"name"`` \| ``"playbook_runs"``)[], `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`RemediationList`](interfaces/RemediationList.md) \| [`RemediationNameList`](interfaces/RemediationNameList.md)\>\> |
| `listPlaybookRuns` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `sort?`: ``"updated_at"`` \| ``"-updated_at"``, `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`PlaybookRunsList`](interfaces/PlaybookRunsList.md)\>\> |
| `runRemediation` | (`id`: `string`, `playbookRunsInput?`: [`PlaybookRunsInput`](interfaces/PlaybookRunsInput.md), `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`ExecuteRemediation`](interfaces/ExecuteRemediation.md)\>\> |
| `updateRemediation` | (`id`: `string`, `remediationInput`: [`RemediationInput`](interfaces/RemediationInput.md), `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<`void`\>\> |
| `updateRemediationIssue` | (`id`: `string`, `issue`: `string`, `remediationIssueIn`: [`RemediationIssueIn`](interfaces/RemediationIssueIn.md), `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<`void`\>\> |

**`Export`**

#### Defined in

[api.ts:2524](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/remediations/api.ts#L2524)

___

### ResolutionsApiAxiosParamCreator

▸ **ResolutionsApiAxiosParamCreator**(`configuration?`): `Object`

ResolutionsApi - axios parameter creator

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type | Description |
| :------ | :------ | :------ |
| `getResolutionsForIssue` | (`issue`: `string`, `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `getResolutionsForIssues` | (`resolutionsBatchInput`: [`ResolutionsBatchInput`](interfaces/ResolutionsBatchInput.md), `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |

**`Export`**

#### Defined in

[api.ts:3416](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/remediations/api.ts#L3416)

___

### ResolutionsApiFactory

▸ **ResolutionsApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

ResolutionsApi - factory interface

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
| `getResolutionsForIssue` | (`issue`: `string`, `options?`: `any`) => `AxiosPromise`\<[`Resolutions`](interfaces/Resolutions.md)\> |
| `getResolutionsForIssues` | (`resolutionsBatchInput`: [`ResolutionsBatchInput`](interfaces/ResolutionsBatchInput.md), `options?`: `any`) => `AxiosPromise`\<\{ `[key: string]`: [`Resolutions`](interfaces/Resolutions.md) \| `boolean`;  }\> |

**`Export`**

#### Defined in

[api.ts:3537](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/remediations/api.ts#L3537)

___

### ResolutionsApiFp

▸ **ResolutionsApiFp**(`configuration?`): `Object`

ResolutionsApi - functional programming interface

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `getResolutionsForIssue` | (`issue`: `string`, `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`Resolutions`](interfaces/Resolutions.md)\>\> |
| `getResolutionsForIssues` | (`resolutionsBatchInput`: [`ResolutionsBatchInput`](interfaces/ResolutionsBatchInput.md), `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<\{ `[key: string]`: [`Resolutions`](interfaces/Resolutions.md) \| `boolean`;  }\>\> |

**`Export`**

#### Defined in

[api.ts:3500](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/remediations/api.ts#L3500)

___

### VersionApiAxiosParamCreator

▸ **VersionApiAxiosParamCreator**(`configuration?`): `Object`

VersionApi - axios parameter creator

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type | Description |
| :------ | :------ | :------ |
| `getVersion` | (`options?`: `any`) => `Promise`\<`RequestArgs`\> | - |

**`Export`**

#### Defined in

[api.ts:3600](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/remediations/api.ts#L3600)

___

### VersionApiFactory

▸ **VersionApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

VersionApi - factory interface

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
| `getVersion` | (`options?`: `any`) => `AxiosPromise`\<[`InlineResponse200`](interfaces/InlineResponse200.md)\> |

**`Export`**

#### Defined in

[api.ts:3661](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/remediations/api.ts#L3661)

___

### VersionApiFp

▸ **VersionApiFp**(`configuration?`): `Object`

VersionApi - functional programming interface

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `getVersion` | (`options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`InlineResponse200`](interfaces/InlineResponse200.md)\>\> |

**`Export`**

#### Defined in

[api.ts:3639](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/remediations/api.ts#L3639)
