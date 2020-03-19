[@redhat-cloud-services/remediations-client](../README.md) › [Globals](../globals.md) › [RemediationsApi](remediationsapi.md)

# Class: RemediationsApi

RemediationsApi - object-oriented interface

**`export`** 

**`class`** RemediationsApi

**`extends`** {BaseAPI}

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **RemediationsApi**

## Index

### Constructors

* [constructor](remediationsapi.md#constructor)

### Properties

* [axios](remediationsapi.md#protected-axios)
* [basePath](remediationsapi.md#protected-basepath)
* [configuration](remediationsapi.md#protected-configuration)

### Methods

* [createRemediation](remediationsapi.md#createremediation)
* [deleteRemediation](remediationsapi.md#deleteremediation)
* [deleteRemediationIssue](remediationsapi.md#deleteremediationissue)
* [deleteRemediationIssueSystem](remediationsapi.md#deleteremediationissuesystem)
* [getPlaybookRunDetails](remediationsapi.md#getplaybookrundetails)
* [getPlaybookRunSystemDetails](remediationsapi.md#getplaybookrunsystemdetails)
* [getPlaybookRunSystems](remediationsapi.md#getplaybookrunsystems)
* [getRemediation](remediationsapi.md#getremediation)
* [getRemediationConnectionStatus](remediationsapi.md#getremediationconnectionstatus)
* [getRemediationPlaybook](remediationsapi.md#getremediationplaybook)
* [getRemediations](remediationsapi.md#getremediations)
* [listPlaybookRuns](remediationsapi.md#listplaybookruns)
* [runRemediation](remediationsapi.md#runremediation)
* [updateRemediation](remediationsapi.md#updateremediation)
* [updateRemediationIssue](remediationsapi.md#updateremediationissue)

## Constructors

###  constructor

\+ **new RemediationsApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[RemediationsApi](remediationsapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`axios` | AxiosInstance |  globalAxios |

**Returns:** *[RemediationsApi](remediationsapi.md)*

## Properties

### `Protected` axios

• **axios**: *AxiosInstance*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#protected-axios)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L51)*

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L51)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L49)*

## Methods

###  createRemediation

▸ **createRemediation**(`remediationInput`: [RemediationInput](../interfaces/remediationinput.md), `options?`: any): *AxiosPromise‹[RemediationCreated](../interfaces/remediationcreated.md)›*

*Defined in [api.ts:2382](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L2382)*

Creates a new Remediation based on given information, RBAC permission {remediations:remediation:write}

**`summary`** Create Remediation

**`throws`** {RequiredError}

**`memberof`** RemediationsApi

**Parameters:**

Name | Type |
------ | ------ |
`remediationInput` | [RemediationInput](../interfaces/remediationinput.md) |
`options?` | any |

**Returns:** *AxiosPromise‹[RemediationCreated](../interfaces/remediationcreated.md)›*

___

###  deleteRemediation

▸ **deleteRemediation**(`id`: string, `options?`: any): *AxiosPromise‹Response›*

*Defined in [api.ts:2394](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L2394)*

Removes the given Remediation, RBAC permission {remediations:remediation:write}

**`summary`** Remove Remediation

**`throws`** {RequiredError}

**`memberof`** RemediationsApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | Remediation identifier |
`options?` | any | - |

**Returns:** *AxiosPromise‹Response›*

___

###  deleteRemediationIssue

▸ **deleteRemediationIssue**(`id`: string, `issue`: string, `options?`: any): *AxiosPromise‹Response›*

*Defined in [api.ts:2407](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L2407)*

Removes the given Issue from the Remediation, RBAC permission {remediations:remediation:write}

**`summary`** Remove Remediation Issue

**`throws`** {RequiredError}

**`memberof`** RemediationsApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | Remediation identifier |
`issue` | string | Issue identifier (e.g. &#x60;advisor:CVE_2017_6074_kernel|KERNEL_CVE_2017_6074&#x60;) |
`options?` | any | - |

**Returns:** *AxiosPromise‹Response›*

___

###  deleteRemediationIssueSystem

▸ **deleteRemediationIssueSystem**(`id`: string, `issue`: string, `system`: string, `options?`: any): *AxiosPromise‹Response›*

*Defined in [api.ts:2421](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L2421)*

Removes the given System from the Issue Remediation, RBAC permission {remediations:remediation:write}

**`summary`** Remove Remediation Issue System

**`throws`** {RequiredError}

**`memberof`** RemediationsApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | Remediation identifier |
`issue` | string | Issue identifier (e.g. &#x60;advisor:CVE_2017_6074_kernel|KERNEL_CVE_2017_6074&#x60;) |
`system` | string | System identifier |
`options?` | any | - |

**Returns:** *AxiosPromise‹Response›*

___

###  getPlaybookRunDetails

▸ **getPlaybookRunDetails**(`id`: string, `playbookRunId`: string, `options?`: any): *AxiosPromise‹[PlaybookRunExecutorDetails](../interfaces/playbookrunexecutordetails.md)›*

*Defined in [api.ts:2434](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L2434)*

Get details on execution of the rememdiation

**`summary`** Get details on execution of the rememdiation

**`throws`** {RequiredError}

**`memberof`** RemediationsApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | Remediation identifier |
`playbookRunId` | string | Playbook run identifier (UUID) |
`options?` | any | - |

**Returns:** *AxiosPromise‹[PlaybookRunExecutorDetails](../interfaces/playbookrunexecutordetails.md)›*

___

###  getPlaybookRunSystemDetails

▸ **getPlaybookRunSystemDetails**(`id`: string, `playbookRunId`: string, `system`: string, `options?`: any): *AxiosPromise‹[PlaybookRunSystemDetails](../interfaces/playbookrunsystemdetails.md)›*

*Defined in [api.ts:2448](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L2448)*

Get details and updated log of system being executed on in specific playbook run

**`summary`** Get details and updated log of system being executed on in specific playbook run

**`throws`** {RequiredError}

**`memberof`** RemediationsApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | Remediation identifier |
`playbookRunId` | string | Playbook run identifier (UUID) |
`system` | string | System identifier |
`options?` | any | - |

**Returns:** *AxiosPromise‹[PlaybookRunSystemDetails](../interfaces/playbookrunsystemdetails.md)›*

___

###  getPlaybookRunSystems

▸ **getPlaybookRunSystems**(`id`: string, `playbookRunId`: string, `executor?`: string, `options?`: any): *AxiosPromise‹[PlaybookRunSystemList](../interfaces/playbookrunsystemlist.md)›*

*Defined in [api.ts:2462](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L2462)*

Get details on systems being executed on in specific playbook run

**`summary`** Get details on systems being executed on in specific playbook run

**`throws`** {RequiredError}

**`memberof`** RemediationsApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | Remediation identifier |
`playbookRunId` | string | Playbook run identifier (UUID) |
`executor?` | string | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[PlaybookRunSystemList](../interfaces/playbookrunsystemlist.md)›*

___

###  getRemediation

▸ **getRemediation**(`id`: string, `options?`: any): *AxiosPromise‹[RemediationDetails](../interfaces/remediationdetails.md)›*

*Defined in [api.ts:2474](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L2474)*

Provides information about the given Remediation, RBAC permission {remediations:remediation:read}

**`summary`** Get Remediation

**`throws`** {RequiredError}

**`memberof`** RemediationsApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | Remediation identifier |
`options?` | any | - |

**Returns:** *AxiosPromise‹[RemediationDetails](../interfaces/remediationdetails.md)›*

___

###  getRemediationConnectionStatus

▸ **getRemediationConnectionStatus**(`id`: string, `options?`: any): *AxiosPromise‹[RemediationConnectionStatus](../interfaces/remediationconnectionstatus.md)›*

*Defined in [api.ts:2486](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L2486)*

Get satellite connection status for a given host, RBAC permission {remediations:remediation:execute}

**`summary`** Pre-flight check

**`throws`** {RequiredError}

**`memberof`** RemediationsApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | Remediation identifier |
`options?` | any | - |

**Returns:** *AxiosPromise‹[RemediationConnectionStatus](../interfaces/remediationconnectionstatus.md)›*

___

###  getRemediationPlaybook

▸ **getRemediationPlaybook**(`id`: string, `options?`: any): *AxiosPromise‹string›*

*Defined in [api.ts:2498](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L2498)*

Provides Ansible Playbook, RBAC permission {remediations:remediation:read}

**`summary`** Get Remediation Playbook

**`throws`** {RequiredError}

**`memberof`** RemediationsApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | Remediation identifier |
`options?` | any | - |

**Returns:** *AxiosPromise‹string›*

___

###  getRemediations

▸ **getRemediations**(`sort?`: "updated_at" | "-updated_at" | "name" | "-name" | "system_count" | "-system_count" | "issue_count" | "-issue_count", `filter?`: string, `limit?`: number, `offset?`: number, `system?`: string, `options?`: any): *AxiosPromise‹[RemediationList](../interfaces/remediationlist.md)›*

*Defined in [api.ts:2514](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L2514)*

Provides information about Remediations, RBAC permission {remediations:remediation:read}

**`summary`** List Remediations

**`throws`** {RequiredError}

**`memberof`** RemediationsApi

**Parameters:**

Name | Type |
------ | ------ |
`sort?` | "updated_at" &#124; "-updated_at" &#124; "name" &#124; "-name" &#124; "system_count" &#124; "-system_count" &#124; "issue_count" &#124; "-issue_count" |
`filter?` | string |
`limit?` | number |
`offset?` | number |
`system?` | string |
`options?` | any |

**Returns:** *AxiosPromise‹[RemediationList](../interfaces/remediationlist.md)›*

___

###  listPlaybookRuns

▸ **listPlaybookRuns**(`id`: string, `options?`: any): *AxiosPromise‹[PlaybookRunsList](../interfaces/playbookrunslist.md)›*

*Defined in [api.ts:2526](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L2526)*

List of executions of this remediation

**`summary`** List of executions of this remediation

**`throws`** {RequiredError}

**`memberof`** RemediationsApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | Remediation identifier |
`options?` | any | - |

**Returns:** *AxiosPromise‹[PlaybookRunsList](../interfaces/playbookrunslist.md)›*

___

###  runRemediation

▸ **runRemediation**(`id`: string, `options?`: any): *AxiosPromise‹[ExecuteRemediation](../interfaces/executeremediation.md)›*

*Defined in [api.ts:2538](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L2538)*

Execute remediation, RBAC permission {remediations:remediation:execute}

**`summary`** Execute remediation

**`throws`** {RequiredError}

**`memberof`** RemediationsApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | Remediation identifier |
`options?` | any | - |

**Returns:** *AxiosPromise‹[ExecuteRemediation](../interfaces/executeremediation.md)›*

___

###  updateRemediation

▸ **updateRemediation**(`id`: string, `remediationInput`: [RemediationInput](../interfaces/remediationinput.md), `options?`: any): *AxiosPromise‹Response›*

*Defined in [api.ts:2551](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L2551)*

Updates the given Remediation, RBAC permission {remediations:remediation:write}

**`summary`** Update Remediation

**`throws`** {RequiredError}

**`memberof`** RemediationsApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | Remediation identifier |
`remediationInput` | [RemediationInput](../interfaces/remediationinput.md) | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹Response›*

___

###  updateRemediationIssue

▸ **updateRemediationIssue**(`id`: string, `issue`: string, `remediationIssueIn`: [RemediationIssueIn](../interfaces/remediationissuein.md), `options?`: any): *AxiosPromise‹Response›*

*Defined in [api.ts:2565](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L2565)*

Updates the given Remediation Issue, RBAC permission {remediations:remediation:write}

**`summary`** Update Remediation Issue

**`throws`** {RequiredError}

**`memberof`** RemediationsApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | Remediation identifier |
`issue` | string | Issue identifier (e.g. &#x60;advisor:CVE_2017_6074_kernel|KERNEL_CVE_2017_6074&#x60;) |
`remediationIssueIn` | [RemediationIssueIn](../interfaces/remediationissuein.md) | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹Response›*
