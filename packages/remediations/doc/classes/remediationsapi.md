[@redhat-cloud-services/remediations-client](../README.md) › [Globals](../globals.md) › [RemediationsApi](remediationsapi.md)

# Class: RemediationsApi

RemediationsApi - object-oriented interface

**`export`** 

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

* [cancelPlaybookRuns](remediationsapi.md#cancelplaybookruns)
* [checkExecutable](remediationsapi.md#checkexecutable)
* [createRemediation](remediationsapi.md#createremediation)
* [deleteRemediation](remediationsapi.md#deleteremediation)
* [deleteRemediationIssue](remediationsapi.md#deleteremediationissue)
* [deleteRemediationIssueSystem](remediationsapi.md#deleteremediationissuesystem)
* [downloadPlaybooks](remediationsapi.md#downloadplaybooks)
* [getPlaybookRunDetails](remediationsapi.md#getplaybookrundetails)
* [getPlaybookRunSystemDetails](remediationsapi.md#getplaybookrunsystemdetails)
* [getPlaybookRunSystems](remediationsapi.md#getplaybookrunsystems)
* [getRemediation](remediationsapi.md#getremediation)
* [getRemediationConnectionStatus](remediationsapi.md#getremediationconnectionstatus)
* [getRemediationIssueSystems](remediationsapi.md#getremediationissuesystems)
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

*Defined in [base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/base.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** *[RemediationsApi](remediationsapi.md)*

## Properties

### `Protected` axios

• **axios**: *AxiosInstance*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#protected-axios)*

*Defined in [base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/base.ts#L51)*

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

*Defined in [base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/base.ts#L51)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/base.ts#L49)*

## Methods

###  cancelPlaybookRuns

▸ **cancelPlaybookRuns**(`id`: string, `playbookRunId`: string, `options?`: any): *Promise‹AxiosResponse‹object››*

*Defined in [api.ts:2840](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L2840)*

Cancel execution of the remediation

**`summary`** Cancel execution of the remediation

**`throws`** {RequiredError}

**`memberof`** RemediationsApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | Remediation identifier |
`playbookRunId` | string | Playbook run identifier (UUID) |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹object››*

___

###  checkExecutable

▸ **checkExecutable**(`id`: string, `options?`: any): *Promise‹AxiosResponse‹void››*

*Defined in [api.ts:2852](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L2852)*

Checks remediation for the existence of smart_managment flaged systems

**`summary`** Check smart_managment systems

**`throws`** {RequiredError}

**`memberof`** RemediationsApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | Remediation identifier |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹void››*

___

###  createRemediation

▸ **createRemediation**(`remediationInput`: [RemediationInput](../interfaces/remediationinput.md), `options?`: any): *Promise‹AxiosResponse‹[RemediationCreated](../interfaces/remediationcreated.md)››*

*Defined in [api.ts:2864](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L2864)*

Creates a new Remediation based on given information, RBAC permission {remediations:remediation:write}

**`summary`** Create Remediation

**`throws`** {RequiredError}

**`memberof`** RemediationsApi

**Parameters:**

Name | Type |
------ | ------ |
`remediationInput` | [RemediationInput](../interfaces/remediationinput.md) |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[RemediationCreated](../interfaces/remediationcreated.md)››*

___

###  deleteRemediation

▸ **deleteRemediation**(`id`: string, `options?`: any): *Promise‹AxiosResponse‹void››*

*Defined in [api.ts:2876](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L2876)*

Removes the given Remediation, RBAC permission {remediations:remediation:write}

**`summary`** Remove Remediation

**`throws`** {RequiredError}

**`memberof`** RemediationsApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | Remediation identifier |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹void››*

___

###  deleteRemediationIssue

▸ **deleteRemediationIssue**(`id`: string, `issue`: string, `options?`: any): *Promise‹AxiosResponse‹void››*

*Defined in [api.ts:2889](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L2889)*

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

**Returns:** *Promise‹AxiosResponse‹void››*

___

###  deleteRemediationIssueSystem

▸ **deleteRemediationIssueSystem**(`id`: string, `issue`: string, `system`: string, `options?`: any): *Promise‹AxiosResponse‹void››*

*Defined in [api.ts:2903](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L2903)*

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

**Returns:** *Promise‹AxiosResponse‹void››*

___

###  downloadPlaybooks

▸ **downloadPlaybooks**(`selectedRemediations?`: Array‹string›, `options?`: any): *Promise‹AxiosResponse‹any››*

*Defined in [api.ts:2915](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L2915)*

Downloads a zip file containing selected Remediations, RBAC permission {remediations:remediation:read}

**`summary`** Download Remediations

**`throws`** {RequiredError}

**`memberof`** RemediationsApi

**Parameters:**

Name | Type |
------ | ------ |
`selectedRemediations?` | Array‹string› |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹any››*

___

###  getPlaybookRunDetails

▸ **getPlaybookRunDetails**(`id`: string, `playbookRunId`: string, `options?`: any): *Promise‹AxiosResponse‹[PlaybookRunExecutorDetails](../interfaces/playbookrunexecutordetails.md)››*

*Defined in [api.ts:2928](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L2928)*

Get details on execution of the remediation

**`summary`** Get details on execution of the remediation

**`throws`** {RequiredError}

**`memberof`** RemediationsApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | Remediation identifier |
`playbookRunId` | string | Playbook run identifier (UUID) |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[PlaybookRunExecutorDetails](../interfaces/playbookrunexecutordetails.md)››*

___

###  getPlaybookRunSystemDetails

▸ **getPlaybookRunSystemDetails**(`id`: string, `playbookRunId`: string, `system`: string, `options?`: any): *Promise‹AxiosResponse‹[PlaybookRunSystemDetails](../interfaces/playbookrunsystemdetails.md)››*

*Defined in [api.ts:2942](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L2942)*

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

**Returns:** *Promise‹AxiosResponse‹[PlaybookRunSystemDetails](../interfaces/playbookrunsystemdetails.md)››*

___

###  getPlaybookRunSystems

▸ **getPlaybookRunSystems**(`id`: string, `playbookRunId`: string, `executor?`: string, `limit?`: number, `offset?`: number, `ansibleHost?`: string, `sort?`: "system_name" | "-system_name", `options?`: any): *Promise‹AxiosResponse‹[PlaybookRunSystemList](../interfaces/playbookrunsystemlist.md)››*

*Defined in [api.ts:2960](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L2960)*

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
`limit?` | number | - |
`offset?` | number | - |
`ansibleHost?` | string | - |
`sort?` | "system_name" &#124; "-system_name" | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[PlaybookRunSystemList](../interfaces/playbookrunsystemlist.md)››*

___

###  getRemediation

▸ **getRemediation**(`id`: string, `options?`: any): *Promise‹AxiosResponse‹[RemediationDetails](../interfaces/remediationdetails.md)››*

*Defined in [api.ts:2972](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L2972)*

Provides information about the given Remediation, RBAC permission {remediations:remediation:read}

**`summary`** Get Remediation

**`throws`** {RequiredError}

**`memberof`** RemediationsApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | Remediation identifier |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[RemediationDetails](../interfaces/remediationdetails.md)››*

___

###  getRemediationConnectionStatus

▸ **getRemediationConnectionStatus**(`id`: string, `options?`: any): *Promise‹AxiosResponse‹[RemediationConnectionStatus](../interfaces/remediationconnectionstatus.md)››*

*Defined in [api.ts:2984](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L2984)*

Get satellite connection status for a given host, RBAC permission {remediations:remediation:execute}

**`summary`** Pre-flight check

**`throws`** {RequiredError}

**`memberof`** RemediationsApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | Remediation identifier |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[RemediationConnectionStatus](../interfaces/remediationconnectionstatus.md)››*

___

###  getRemediationIssueSystems

▸ **getRemediationIssueSystems**(`id`: string, `issue`: string, `limit?`: number, `offset?`: number, `sort?`: "display_name" | "-display_name", `options?`: any): *Promise‹AxiosResponse‹[RemediationIssueSystemList](../interfaces/remediationissuesystemlist.md)››*

*Defined in [api.ts:3000](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L3000)*

Get a paginated list of systems from a given issue, RBAC permission {remediations:remediation:read}

**`summary`** Get Remediation Issue Systems

**`throws`** {RequiredError}

**`memberof`** RemediationsApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | Remediation identifier |
`issue` | string | Issue identifier (e.g. &#x60;advisor:CVE_2017_6074_kernel|KERNEL_CVE_2017_6074&#x60;) |
`limit?` | number | - |
`offset?` | number | - |
`sort?` | "display_name" &#124; "-display_name" | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[RemediationIssueSystemList](../interfaces/remediationissuesystemlist.md)››*

___

###  getRemediationPlaybook

▸ **getRemediationPlaybook**(`id`: string, `hosts?`: Array‹string›, `localhost?`: boolean, `options?`: any): *Promise‹AxiosResponse‹string››*

*Defined in [api.ts:3014](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L3014)*

Provides Ansible Playbook, RBAC permission {remediations:remediation:read}

**`summary`** Get Remediation Playbook

**`throws`** {RequiredError}

**`memberof`** RemediationsApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | Remediation identifier |
`hosts?` | Array‹string› | - |
`localhost?` | boolean | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹string››*

___

###  getRemediations

▸ **getRemediations**(`sort?`: "updated_at" | "-updated_at" | "name" | "-name" | "system_count" | "-system_count" | "issue_count" | "-issue_count", `filter?`: string, `limit?`: number, `offset?`: number, `system?`: string, `hideArchived?`: boolean, `options?`: any): *Promise‹AxiosResponse‹[RemediationList](../interfaces/remediationlist.md)››*

*Defined in [api.ts:3031](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L3031)*

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
`hideArchived?` | boolean |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[RemediationList](../interfaces/remediationlist.md)››*

___

###  listPlaybookRuns

▸ **listPlaybookRuns**(`id`: string, `limit?`: number, `offset?`: number, `sort?`: "updated_at" | "-updated_at", `options?`: any): *Promise‹AxiosResponse‹[PlaybookRunsList](../interfaces/playbookrunslist.md)››*

*Defined in [api.ts:3046](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L3046)*

List of executions of this remediation

**`summary`** List of executions of this remediation

**`throws`** {RequiredError}

**`memberof`** RemediationsApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | Remediation identifier |
`limit?` | number | - |
`offset?` | number | - |
`sort?` | "updated_at" &#124; "-updated_at" | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[PlaybookRunsList](../interfaces/playbookrunslist.md)››*

___

###  runRemediation

▸ **runRemediation**(`id`: string, `data?`: any, `options?`: any): *Promise‹AxiosResponse‹[ExecuteRemediation](../interfaces/executeremediation.md)››*

*Defined in [api.ts:3059](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L3059)*

Execute remediation, RBAC permission {remediations:remediation:execute}

**`summary`** Execute remediation

**`throws`** {RequiredError}

**`memberof`** RemediationsApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | Remediation identifier |
`data?` | any | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ExecuteRemediation](../interfaces/executeremediation.md)››*

___

###  updateRemediation

▸ **updateRemediation**(`id`: string, `remediationInput`: [RemediationInput](../interfaces/remediationinput.md), `options?`: any): *Promise‹AxiosResponse‹void››*

*Defined in [api.ts:3072](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L3072)*

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

**Returns:** *Promise‹AxiosResponse‹void››*

___

###  updateRemediationIssue

▸ **updateRemediationIssue**(`id`: string, `issue`: string, `remediationIssueIn`: [RemediationIssueIn](../interfaces/remediationissuein.md), `options?`: any): *Promise‹AxiosResponse‹void››*

*Defined in [api.ts:3086](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L3086)*

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

**Returns:** *Promise‹AxiosResponse‹void››*
