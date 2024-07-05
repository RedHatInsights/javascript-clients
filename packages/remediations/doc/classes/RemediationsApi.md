[@redhat-cloud-services/remediations-client](../README.md) / [Exports](../modules.md) / RemediationsApi

# Class: RemediationsApi

RemediationsApi - object-oriented interface

**`Export`**

RemediationsApi

## Hierarchy

- `BaseAPI`

  ↳ **`RemediationsApi`**

## Table of contents

### Constructors

- [constructor](RemediationsApi.md#constructor)

### Properties

- [axios](RemediationsApi.md#axios)
- [basePath](RemediationsApi.md#basepath)
- [configuration](RemediationsApi.md#configuration)

### Methods

- [bulkGetRemediationPlaybook](RemediationsApi.md#bulkgetremediationplaybook)
- [cancelPlaybookRuns](RemediationsApi.md#cancelplaybookruns)
- [checkExecutable](RemediationsApi.md#checkexecutable)
- [createRemediation](RemediationsApi.md#createremediation)
- [deleteRemediation](RemediationsApi.md#deleteremediation)
- [deleteRemediationIssue](RemediationsApi.md#deleteremediationissue)
- [deleteRemediationIssueSystem](RemediationsApi.md#deleteremediationissuesystem)
- [deleteRemediations](RemediationsApi.md#deleteremediations)
- [downloadPlaybooks](RemediationsApi.md#downloadplaybooks)
- [getPlaybookRunDetails](RemediationsApi.md#getplaybookrundetails)
- [getPlaybookRunSystemDetails](RemediationsApi.md#getplaybookrunsystemdetails)
- [getPlaybookRunSystems](RemediationsApi.md#getplaybookrunsystems)
- [getRemediation](RemediationsApi.md#getremediation)
- [getRemediationConnectionStatus](RemediationsApi.md#getremediationconnectionstatus)
- [getRemediationIssueSystems](RemediationsApi.md#getremediationissuesystems)
- [getRemediationPlaybook](RemediationsApi.md#getremediationplaybook)
- [getRemediations](RemediationsApi.md#getremediations)
- [listPlaybookRuns](RemediationsApi.md#listplaybookruns)
- [runRemediation](RemediationsApi.md#runremediation)
- [updateRemediation](RemediationsApi.md#updateremediation)
- [updateRemediationIssue](RemediationsApi.md#updateremediationissue)

## Constructors

### constructor

• **new RemediationsApi**(`configuration?`, `basePath?`, `axios?`): [`RemediationsApi`](RemediationsApi.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Returns

[`RemediationsApi`](RemediationsApi.md)

#### Inherited from

BaseAPI.constructor

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/remediations/base.ts#L51)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

BaseAPI.axios

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/remediations/base.ts#L51)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

BaseAPI.basePath

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/remediations/base.ts#L51)

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/remediations/base.ts#L49)

## Methods

### bulkGetRemediationPlaybook

▸ **bulkGetRemediationPlaybook**(`id`, `requestBody`, `satOrg?`, `localhost?`, `options?`): `Promise`\<`AxiosResponse`\<`string`, `any`\>\>

Fetch Ansible Playbook - for use with large list of target systems, RBAC permission {remediations:remediation:read}

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | Remediation identifier |
| `requestBody` | `string`[] | Array of system inventory identifiers. |
| `satOrg?` | `string` | Organization ID passed by satellite |
| `localhost?` | `boolean` | Flag for localhost playbook generation |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`string`, `any`\>\>

**`Summary`**

Fetch Remediation Plan Playbook

**`Throws`**

**`Memberof`**

RemediationsApi

#### Defined in

[api.ts:3132](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/remediations/api.ts#L3132)

___

### cancelPlaybookRuns

▸ **cancelPlaybookRuns**(`id`, `playbookRunId`, `options?`): `Promise`\<`AxiosResponse`\<`object`, `any`\>\>

Cancel execution of the remediation

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | Remediation identifier |
| `playbookRunId` | `string` | Playbook run identifier (UUID) |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`object`, `any`\>\>

**`Summary`**

Cancel execution of the remediation

**`Throws`**

**`Memberof`**

RemediationsApi

#### Defined in

[api.ts:3145](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/remediations/api.ts#L3145)

___

### checkExecutable

▸ **checkExecutable**(`id`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Checks remediation for the existence of smart_managment flaged systems

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | Remediation identifier |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Check smart_managment systems

**`Throws`**

**`Memberof`**

RemediationsApi

#### Defined in

[api.ts:3157](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/remediations/api.ts#L3157)

___

### createRemediation

▸ **createRemediation**(`remediationInput`, `options?`): `Promise`\<`AxiosResponse`\<[`RemediationCreated`](../interfaces/RemediationCreated.md), `any`\>\>

Creates a new Remediation based on given information, RBAC permission {remediations:remediation:write}

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `remediationInput` | [`RemediationInput`](../interfaces/RemediationInput.md) |  |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`RemediationCreated`](../interfaces/RemediationCreated.md), `any`\>\>

**`Summary`**

Create Remediation

**`Throws`**

**`Memberof`**

RemediationsApi

#### Defined in

[api.ts:3169](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/remediations/api.ts#L3169)

___

### deleteRemediation

▸ **deleteRemediation**(`id`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Removes the given Remediation, RBAC permission {remediations:remediation:write}

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | Remediation identifier |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Remove Remediation

**`Throws`**

**`Memberof`**

RemediationsApi

#### Defined in

[api.ts:3181](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/remediations/api.ts#L3181)

___

### deleteRemediationIssue

▸ **deleteRemediationIssue**(`id`, `issue`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Removes the given Issue from the Remediation, RBAC permission {remediations:remediation:write}

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | Remediation identifier |
| `issue` | `string` | Issue identifier (e.g. &#x60;advisor:CVE_2017_6074_kernel\|KERNEL_CVE_2017_6074&#x60;) |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Remove Remediation Issue

**`Throws`**

**`Memberof`**

RemediationsApi

#### Defined in

[api.ts:3194](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/remediations/api.ts#L3194)

___

### deleteRemediationIssueSystem

▸ **deleteRemediationIssueSystem**(`id`, `issue`, `system`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Removes the given System from the Issue Remediation, RBAC permission {remediations:remediation:write}

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | Remediation identifier |
| `issue` | `string` | Issue identifier (e.g. &#x60;advisor:CVE_2017_6074_kernel\|KERNEL_CVE_2017_6074&#x60;) |
| `system` | `string` | System identifier |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Remove Remediation Issue System

**`Throws`**

**`Memberof`**

RemediationsApi

#### Defined in

[api.ts:3208](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/remediations/api.ts#L3208)

___

### deleteRemediations

▸ **deleteRemediations**(`remediationsList`, `options?`): `Promise`\<`AxiosResponse`\<[`MultipleDelete`](../interfaces/MultipleDelete.md), `any`\>\>

Removes the given list of Remediations.  Requests containing malformed remediation IDs are rejected.  Duplicate or missing IDs are ignored. RBAC permission {remediations:remediation:write}

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `remediationsList` | [`RemediationsList`](../interfaces/RemediationsList.md) |  |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`MultipleDelete`](../interfaces/MultipleDelete.md), `any`\>\>

**`Summary`**

Bulk Delete Remediations

**`Throws`**

**`Memberof`**

RemediationsApi

#### Defined in

[api.ts:3220](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/remediations/api.ts#L3220)

___

### downloadPlaybooks

▸ **downloadPlaybooks**(`selectedRemediations?`, `options?`): `Promise`\<`AxiosResponse`\<`any`, `any`\>\>

Downloads a zip file containing selected Remediations, RBAC permission {remediations:remediation:read}

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selectedRemediations?` | `string`[] | Selected Remediations for download |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`any`, `any`\>\>

**`Summary`**

Download Remediations

**`Throws`**

**`Memberof`**

RemediationsApi

#### Defined in

[api.ts:3232](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/remediations/api.ts#L3232)

___

### getPlaybookRunDetails

▸ **getPlaybookRunDetails**(`id`, `playbookRunId`, `options?`): `Promise`\<`AxiosResponse`\<[`PlaybookRunExecutorDetails`](../interfaces/PlaybookRunExecutorDetails.md), `any`\>\>

Get details on execution of the remediation

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | Remediation identifier |
| `playbookRunId` | `string` | Playbook run identifier (UUID) |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`PlaybookRunExecutorDetails`](../interfaces/PlaybookRunExecutorDetails.md), `any`\>\>

**`Summary`**

Get details on execution of the remediation

**`Throws`**

**`Memberof`**

RemediationsApi

#### Defined in

[api.ts:3245](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/remediations/api.ts#L3245)

___

### getPlaybookRunSystemDetails

▸ **getPlaybookRunSystemDetails**(`id`, `playbookRunId`, `system`, `options?`): `Promise`\<`AxiosResponse`\<[`PlaybookRunSystemDetails`](../interfaces/PlaybookRunSystemDetails.md), `any`\>\>

Get details and updated log of system being executed on in specific playbook run

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | Remediation identifier |
| `playbookRunId` | `string` | Playbook run identifier (UUID) |
| `system` | `string` | System identifier |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`PlaybookRunSystemDetails`](../interfaces/PlaybookRunSystemDetails.md), `any`\>\>

**`Summary`**

Get details and updated log of system being executed on in specific playbook run

**`Throws`**

**`Memberof`**

RemediationsApi

#### Defined in

[api.ts:3259](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/remediations/api.ts#L3259)

___

### getPlaybookRunSystems

▸ **getPlaybookRunSystems**(`id`, `playbookRunId`, `executor?`, `limit?`, `offset?`, `ansibleHost?`, `sort?`, `options?`): `Promise`\<`AxiosResponse`\<[`PlaybookRunSystemList`](../interfaces/PlaybookRunSystemList.md), `any`\>\>

Get details on systems being executed on in specific playbook run

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | Remediation identifier |
| `playbookRunId` | `string` | Playbook run identifier (UUID) |
| `executor?` | `string` | Playbook run executor identifier (UUID) |
| `limit?` | `number` | Maximum number of results to return |
| `offset?` | `number` | Indicates the starting position of the query relative to the complete set of items that match the query |
| `ansibleHost?` | `string` | System Name (STRING) |
| `sort?` | ``"system_name"`` \| ``"-system_name"`` | Playbook run systems sort order by ASC or DESC |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`PlaybookRunSystemList`](../interfaces/PlaybookRunSystemList.md), `any`\>\>

**`Summary`**

Get details on systems being executed on in specific playbook run

**`Throws`**

**`Memberof`**

RemediationsApi

#### Defined in

[api.ts:3277](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/remediations/api.ts#L3277)

___

### getRemediation

▸ **getRemediation**(`id`, `options?`): `Promise`\<`AxiosResponse`\<[`RemediationDetails`](../interfaces/RemediationDetails.md), `any`\>\>

Provides information about the given Remediation, RBAC permission {remediations:remediation:read}

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | Remediation identifier |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`RemediationDetails`](../interfaces/RemediationDetails.md), `any`\>\>

**`Summary`**

Get Remediation

**`Throws`**

**`Memberof`**

RemediationsApi

#### Defined in

[api.ts:3289](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/remediations/api.ts#L3289)

___

### getRemediationConnectionStatus

▸ **getRemediationConnectionStatus**(`id`, `options?`): `Promise`\<`AxiosResponse`\<[`RemediationConnectionStatus`](../interfaces/RemediationConnectionStatus.md), `any`\>\>

Get connection status for remediation plan targets, RBAC permission {remediations:remediation:execute}  Returns an array of the following objects:  - One object for all systems belonging to a unique satellite organization - One object for all direct-connected systems in each of the status categories:    - connected   - disconnected   - no_rhc

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | Remediation identifier |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`RemediationConnectionStatus`](../interfaces/RemediationConnectionStatus.md), `any`\>\>

**`Summary`**

Pre-flight check

**`Throws`**

**`Memberof`**

RemediationsApi

#### Defined in

[api.ts:3301](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/remediations/api.ts#L3301)

___

### getRemediationIssueSystems

▸ **getRemediationIssueSystems**(`id`, `issue`, `limit?`, `offset?`, `sort?`, `options?`): `Promise`\<`AxiosResponse`\<[`RemediationIssueSystemList`](../interfaces/RemediationIssueSystemList.md), `any`\>\>

Get a paginated list of systems from a given issue, RBAC permission {remediations:remediation:read}

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | Remediation identifier |
| `issue` | `string` | Issue identifier (e.g. &#x60;advisor:CVE_2017_6074_kernel\|KERNEL_CVE_2017_6074&#x60;) |
| `limit?` | `number` | Maximum number of results to return |
| `offset?` | `number` | Indicates the starting position of the query relative to the complete set of items that match the query |
| `sort?` | ``"display_name"`` \| ``"-display_name"`` | Sort order |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`RemediationIssueSystemList`](../interfaces/RemediationIssueSystemList.md), `any`\>\>

**`Summary`**

Get Remediation Issue Systems

**`Throws`**

**`Memberof`**

RemediationsApi

#### Defined in

[api.ts:3317](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/remediations/api.ts#L3317)

___

### getRemediationPlaybook

▸ **getRemediationPlaybook**(`id`, `hosts?`, `satOrg?`, `localhost?`, `options?`): `Promise`\<`AxiosResponse`\<`string`, `any`\>\>

Provides Ansible Playbook, RBAC permission {remediations:remediation:read}

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | Remediation identifier |
| `hosts?` | `string`[] | Selected hosts to be included in playbook |
| `satOrg?` | `string` | Organization ID passed by satellite |
| `localhost?` | `boolean` | Flag for localhost playbook generation |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`string`, `any`\>\>

**`Summary`**

Get Remediation Playbook

**`Throws`**

**`Memberof`**

RemediationsApi

#### Defined in

[api.ts:3332](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/remediations/api.ts#L3332)

___

### getRemediations

▸ **getRemediations**(`sort?`, `filter?`, `limit?`, `offset?`, `system?`, `hideArchived?`, `fieldsData?`, `options?`): `Promise`\<`AxiosResponse`\<[`RemediationList`](../interfaces/RemediationList.md) \| [`RemediationNameList`](../interfaces/RemediationNameList.md), `any`\>\>

Provides information about Remediations, RBAC permission {remediations:remediation:read}

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sort?` | ``"updated_at"`` \| ``"-updated_at"`` \| ``"name"`` \| ``"-name"`` \| ``"system_count"`` \| ``"-system_count"`` \| ``"issue_count"`` \| ``"-issue_count"`` | Sort order |
| `filter?` | `string` | Remediation name filter. If specified only remediations whose name matches the given string will be returned. |
| `limit?` | `number` | Maximum number of results to return |
| `offset?` | `number` | Indicates the starting position of the query relative to the complete set of items that match the query |
| `system?` | `string` | System identifier. If specified only remediations that involve the given system will be returned. |
| `hideArchived?` | `boolean` | Hide archived playbooks |
| `fieldsData?` | (``"name"`` \| ``"playbook_runs"``)[] | Include specified items - name: list all remediation plan names in organization (cannot be combined with other fields) - playbook_runs: include playbook run data in the response |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`RemediationList`](../interfaces/RemediationList.md) \| [`RemediationNameList`](../interfaces/RemediationNameList.md), `any`\>\>

**`Summary`**

List Remediations

**`Throws`**

**`Memberof`**

RemediationsApi

#### Defined in

[api.ts:3350](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/remediations/api.ts#L3350)

___

### listPlaybookRuns

▸ **listPlaybookRuns**(`id`, `limit?`, `offset?`, `sort?`, `options?`): `Promise`\<`AxiosResponse`\<[`PlaybookRunsList`](../interfaces/PlaybookRunsList.md), `any`\>\>

List of executions of this remediation

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | Remediation identifier |
| `limit?` | `number` | Maximum number of results to return |
| `offset?` | `number` | Indicates the starting position of the query relative to the complete set of items that match the query |
| `sort?` | ``"updated_at"`` \| ``"-updated_at"`` | Sort Order for Playbook Run |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`PlaybookRunsList`](../interfaces/PlaybookRunsList.md), `any`\>\>

**`Summary`**

List of executions of this remediation

**`Throws`**

**`Memberof`**

RemediationsApi

#### Defined in

[api.ts:3365](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/remediations/api.ts#L3365)

___

### runRemediation

▸ **runRemediation**(`id`, `playbookRunsInput?`, `options?`): `Promise`\<`AxiosResponse`\<[`ExecuteRemediation`](../interfaces/ExecuteRemediation.md), `any`\>\>

Execute remediation, RBAC permission {remediations:remediation:execute}

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | Remediation identifier |
| `playbookRunsInput?` | [`PlaybookRunsInput`](../interfaces/PlaybookRunsInput.md) |  |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`ExecuteRemediation`](../interfaces/ExecuteRemediation.md), `any`\>\>

**`Summary`**

Execute remediation

**`Throws`**

**`Memberof`**

RemediationsApi

#### Defined in

[api.ts:3378](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/remediations/api.ts#L3378)

___

### updateRemediation

▸ **updateRemediation**(`id`, `remediationInput`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Updates the given Remediation, RBAC permission {remediations:remediation:write}

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | Remediation identifier |
| `remediationInput` | [`RemediationInput`](../interfaces/RemediationInput.md) |  |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Update Remediation

**`Throws`**

**`Memberof`**

RemediationsApi

#### Defined in

[api.ts:3391](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/remediations/api.ts#L3391)

___

### updateRemediationIssue

▸ **updateRemediationIssue**(`id`, `issue`, `remediationIssueIn`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Updates the given Remediation Issue, RBAC permission {remediations:remediation:write}

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | Remediation identifier |
| `issue` | `string` | Issue identifier (e.g. &#x60;advisor:CVE_2017_6074_kernel\|KERNEL_CVE_2017_6074&#x60;) |
| `remediationIssueIn` | [`RemediationIssueIn`](../interfaces/RemediationIssueIn.md) |  |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Update Remediation Issue

**`Throws`**

**`Memberof`**

RemediationsApi

#### Defined in

[api.ts:3405](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/remediations/api.ts#L3405)
