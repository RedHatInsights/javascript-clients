[@redhat-cloud-services/compliance-client](README.md) / Exports

# @redhat-cloud-services/compliance-client

## Table of contents

### Interfaces

- [AssignRulesRequest](interfaces/AssignRulesRequest.md)
- [CreatePolicy201Response](interfaces/CreatePolicy201Response.md)
- [CreatePolicy201ResponseData](interfaces/CreatePolicy201ResponseData.md)
- [Errors](interfaces/Errors.md)
- [Links](interfaces/Links.md)
- [Metadata](interfaces/Metadata.md)
- [Policies200Response](interfaces/Policies200Response.md)
- [Policy](interfaces/Policy.md)
- [PolicyUpdate](interfaces/PolicyUpdate.md)
- [Profile](interfaces/Profile.md)
- [Profile200Response](interfaces/Profile200Response.md)
- [Profile200ResponseData](interfaces/Profile200ResponseData.md)
- [Profiles200Response](interfaces/Profiles200Response.md)
- [Report](interfaces/Report.md)
- [Report200Response](interfaces/Report200Response.md)
- [Report200ResponseData](interfaces/Report200ResponseData.md)
- [ReportTestResults200Response](interfaces/ReportTestResults200Response.md)
- [Reports200Response](interfaces/Reports200Response.md)
- [Rule](interfaces/Rule.md)
- [Rule200Response](interfaces/Rule200Response.md)
- [Rule200ResponseData](interfaces/Rule200ResponseData.md)
- [RuleGroup](interfaces/RuleGroup.md)
- [RuleGroup200Response](interfaces/RuleGroup200Response.md)
- [RuleGroup200ResponseData](interfaces/RuleGroup200ResponseData.md)
- [RuleGroups200Response](interfaces/RuleGroups200Response.md)
- [Rules200Response](interfaces/Rules200Response.md)
- [SecurityGuide](interfaces/SecurityGuide.md)
- [SecurityGuide200Response](interfaces/SecurityGuide200Response.md)
- [SecurityGuide200ResponseData](interfaces/SecurityGuide200ResponseData.md)
- [SecurityGuides200Response](interfaces/SecurityGuides200Response.md)
- [SupportedProfile](interfaces/SupportedProfile.md)
- [SupportedProfiles200Response](interfaces/SupportedProfiles200Response.md)
- [System](interfaces/System.md)
- [System200Response](interfaces/System200Response.md)
- [System200ResponseData](interfaces/System200ResponseData.md)
- [Systems200Response](interfaces/Systems200Response.md)
- [Tailoring](interfaces/Tailoring.md)
- [Tailoring200Response](interfaces/Tailoring200Response.md)
- [Tailoring200ResponseData](interfaces/Tailoring200ResponseData.md)
- [TailoringFile](interfaces/TailoringFile.md)
- [Tailorings200Response](interfaces/Tailorings200Response.md)
- [TestResult](interfaces/TestResult.md)
- [ValueDefinition](interfaces/ValueDefinition.md)
- [ValueDefinition200Response](interfaces/ValueDefinition200Response.md)
- [ValueDefinition200ResponseData](interfaces/ValueDefinition200ResponseData.md)
- [ValueDefinitions200Response](interfaces/ValueDefinitions200Response.md)

### Type Aliases

- [PolicyTypeEnum](modules.md#policytypeenum)
- [ProfileTypeEnum](modules.md#profiletypeenum)
- [ReportTypeEnum](modules.md#reporttypeenum)
- [RuleGroupTypeEnum](modules.md#rulegrouptypeenum)
- [RuleTypeEnum](modules.md#ruletypeenum)
- [SecurityGuideTypeEnum](modules.md#securityguidetypeenum)
- [SupportedProfileTypeEnum](modules.md#supportedprofiletypeenum)
- [SystemTypeEnum](modules.md#systemtypeenum)
- [TailoringTypeEnum](modules.md#tailoringtypeenum)
- [TestResultTypeEnum](modules.md#testresulttypeenum)
- [ValueDefinitionTypeEnum](modules.md#valuedefinitiontypeenum)

### Variables

- [PolicyTypeEnum](modules.md#policytypeenum-1)
- [ProfileTypeEnum](modules.md#profiletypeenum-1)
- [ReportTypeEnum](modules.md#reporttypeenum-1)
- [RuleGroupTypeEnum](modules.md#rulegrouptypeenum-1)
- [RuleTypeEnum](modules.md#ruletypeenum-1)
- [SecurityGuideTypeEnum](modules.md#securityguidetypeenum-1)
- [SupportedProfileTypeEnum](modules.md#supportedprofiletypeenum-1)
- [SystemTypeEnum](modules.md#systemtypeenum-1)
- [TailoringTypeEnum](modules.md#tailoringtypeenum-1)
- [TestResultTypeEnum](modules.md#testresulttypeenum-1)
- [ValueDefinitionTypeEnum](modules.md#valuedefinitiontypeenum-1)

### Functions

- [assignRule](modules.md#assignrule)
- [assignRules](modules.md#assignrules)
- [assignSystem](modules.md#assignsystem)
- [assignSystems](modules.md#assignsystems)
- [createPolicy](modules.md#createpolicy)
- [deletePolicy](modules.md#deletepolicy)
- [deleteReport](modules.md#deletereport)
- [policies](modules.md#policies)
- [policy](modules.md#policy)
- [policySystems](modules.md#policysystems)
- [profile](modules.md#profile)
- [profileRule](modules.md#profilerule)
- [profileRules](modules.md#profilerules)
- [profiles](modules.md#profiles)
- [report](modules.md#report)
- [reportSystem](modules.md#reportsystem)
- [reportSystems](modules.md#reportsystems)
- [reportTestResult](modules.md#reporttestresult)
- [reportTestResults](modules.md#reporttestresults)
- [reports](modules.md#reports)
- [rule](modules.md#rule)
- [ruleGroup](modules.md#rulegroup)
- [ruleGroups](modules.md#rulegroups)
- [rules](modules.md#rules)
- [securityGuide](modules.md#securityguide)
- [securityGuideRuleTree](modules.md#securityguideruletree)
- [securityGuides](modules.md#securityguides)
- [supportedProfiles](modules.md#supportedprofiles)
- [system](modules.md#system)
- [systems](modules.md#systems)
- [systemsPolicies](modules.md#systemspolicies)
- [tailoring](modules.md#tailoring)
- [tailoringFile](modules.md#tailoringfile)
- [tailoringRules](modules.md#tailoringrules)
- [tailorings](modules.md#tailorings)
- [unassignRule](modules.md#unassignrule)
- [unassignSystem](modules.md#unassignsystem)
- [updatePolicy](modules.md#updatepolicy)
- [updateTailoring](modules.md#updatetailoring)
- [valueDefinition](modules.md#valuedefinition)
- [valueDefinitions](modules.md#valuedefinitions)

## Type Aliases

### PolicyTypeEnum

Ƭ **PolicyTypeEnum**: typeof [`PolicyTypeEnum`](modules.md#policytypeenum-1)[keyof typeof [`PolicyTypeEnum`](modules.md#policytypeenum-1)]

#### Defined in

[types/index.ts:220](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/types/index.ts#L220)

[types/index.ts:224](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/types/index.ts#L224)

___

### ProfileTypeEnum

Ƭ **ProfileTypeEnum**: typeof [`ProfileTypeEnum`](modules.md#profiletypeenum-1)[keyof typeof [`ProfileTypeEnum`](modules.md#profiletypeenum-1)]

#### Defined in

[types/index.ts:295](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/types/index.ts#L295)

[types/index.ts:299](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/types/index.ts#L299)

___

### ReportTypeEnum

Ƭ **ReportTypeEnum**: typeof [`ReportTypeEnum`](modules.md#reporttypeenum-1)[keyof typeof [`ReportTypeEnum`](modules.md#reporttypeenum-1)]

#### Defined in

[types/index.ts:438](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/types/index.ts#L438)

[types/index.ts:442](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/types/index.ts#L442)

___

### RuleGroupTypeEnum

Ƭ **RuleGroupTypeEnum**: typeof [`RuleGroupTypeEnum`](modules.md#rulegrouptypeenum-1)[keyof typeof [`RuleGroupTypeEnum`](modules.md#rulegrouptypeenum-1)]

#### Defined in

[types/index.ts:664](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/types/index.ts#L664)

[types/index.ts:668](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/types/index.ts#L668)

___

### RuleTypeEnum

Ƭ **RuleTypeEnum**: typeof [`RuleTypeEnum`](modules.md#ruletypeenum-1)[keyof typeof [`RuleTypeEnum`](modules.md#ruletypeenum-1)]

#### Defined in

[types/index.ts:582](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/types/index.ts#L582)

[types/index.ts:586](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/types/index.ts#L586)

___

### SecurityGuideTypeEnum

Ƭ **SecurityGuideTypeEnum**: typeof [`SecurityGuideTypeEnum`](modules.md#securityguidetypeenum-1)[keyof typeof [`SecurityGuideTypeEnum`](modules.md#securityguidetypeenum-1)]

#### Defined in

[types/index.ts:796](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/types/index.ts#L796)

[types/index.ts:800](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/types/index.ts#L800)

___

### SupportedProfileTypeEnum

Ƭ **SupportedProfileTypeEnum**: typeof [`SupportedProfileTypeEnum`](modules.md#supportedprofiletypeenum-1)[keyof typeof [`SupportedProfileTypeEnum`](modules.md#supportedprofiletypeenum-1)]

#### Defined in

[types/index.ts:909](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/types/index.ts#L909)

[types/index.ts:913](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/types/index.ts#L913)

___

### SystemTypeEnum

Ƭ **SystemTypeEnum**: typeof [`SystemTypeEnum`](modules.md#systemtypeenum-1)[keyof typeof [`SystemTypeEnum`](modules.md#systemtypeenum-1)]

#### Defined in

[types/index.ts:1026](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/types/index.ts#L1026)

[types/index.ts:1030](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/types/index.ts#L1030)

___

### TailoringTypeEnum

Ƭ **TailoringTypeEnum**: typeof [`TailoringTypeEnum`](modules.md#tailoringtypeenum-1)[keyof typeof [`TailoringTypeEnum`](modules.md#tailoringtypeenum-1)]

#### Defined in

[types/index.ts:1133](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/types/index.ts#L1133)

[types/index.ts:1137](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/types/index.ts#L1137)

___

### TestResultTypeEnum

Ƭ **TestResultTypeEnum**: typeof [`TestResultTypeEnum`](modules.md#testresulttypeenum-1)[keyof typeof [`TestResultTypeEnum`](modules.md#testresulttypeenum-1)]

#### Defined in

[types/index.ts:1285](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/types/index.ts#L1285)

[types/index.ts:1289](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/types/index.ts#L1289)

___

### ValueDefinitionTypeEnum

Ƭ **ValueDefinitionTypeEnum**: typeof [`ValueDefinitionTypeEnum`](modules.md#valuedefinitiontypeenum-1)[keyof typeof [`ValueDefinitionTypeEnum`](modules.md#valuedefinitiontypeenum-1)]

#### Defined in

[types/index.ts:1341](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/types/index.ts#L1341)

[types/index.ts:1345](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/types/index.ts#L1345)

## Variables

### PolicyTypeEnum

• `Const` **PolicyTypeEnum**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Policy` | ``"policy"`` |

#### Defined in

[types/index.ts:220](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/types/index.ts#L220)

[types/index.ts:224](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/types/index.ts#L224)

___

### ProfileTypeEnum

• `Const` **ProfileTypeEnum**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Profile` | ``"profile"`` |

#### Defined in

[types/index.ts:295](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/types/index.ts#L295)

[types/index.ts:299](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/types/index.ts#L299)

___

### ReportTypeEnum

• `Const` **ReportTypeEnum**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Report` | ``"report"`` |

#### Defined in

[types/index.ts:438](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/types/index.ts#L438)

[types/index.ts:442](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/types/index.ts#L442)

___

### RuleGroupTypeEnum

• `Const` **RuleGroupTypeEnum**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `RuleGroup` | ``"rule_group"`` |

#### Defined in

[types/index.ts:664](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/types/index.ts#L664)

[types/index.ts:668](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/types/index.ts#L668)

___

### RuleTypeEnum

• `Const` **RuleTypeEnum**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Rule` | ``"rule"`` |

#### Defined in

[types/index.ts:582](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/types/index.ts#L582)

[types/index.ts:586](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/types/index.ts#L586)

___

### SecurityGuideTypeEnum

• `Const` **SecurityGuideTypeEnum**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `SecurityGuide` | ``"security_guide"`` |

#### Defined in

[types/index.ts:796](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/types/index.ts#L796)

[types/index.ts:800](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/types/index.ts#L800)

___

### SupportedProfileTypeEnum

• `Const` **SupportedProfileTypeEnum**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `SupportedProfile` | ``"supported_profile"`` |

#### Defined in

[types/index.ts:909](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/types/index.ts#L909)

[types/index.ts:913](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/types/index.ts#L913)

___

### SystemTypeEnum

• `Const` **SystemTypeEnum**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `System` | ``"system"`` |

#### Defined in

[types/index.ts:1026](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/types/index.ts#L1026)

[types/index.ts:1030](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/types/index.ts#L1030)

___

### TailoringTypeEnum

• `Const` **TailoringTypeEnum**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Tailoring` | ``"tailoring"`` |

#### Defined in

[types/index.ts:1133](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/types/index.ts#L1133)

[types/index.ts:1137](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/types/index.ts#L1137)

___

### TestResultTypeEnum

• `Const` **TestResultTypeEnum**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `TestResult` | ``"test_result"`` |

#### Defined in

[types/index.ts:1285](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/types/index.ts#L1285)

[types/index.ts:1289](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/types/index.ts#L1289)

___

### ValueDefinitionTypeEnum

• `Const` **ValueDefinitionTypeEnum**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ValueDefinition` | ``"value_definition"`` |

#### Defined in

[types/index.ts:1341](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/types/index.ts#L1341)

[types/index.ts:1345](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/types/index.ts#L1345)

## Functions

### assignRule

▸ **assignRule**(`...config`): `Promise`\<`RequestArgs`\>

Assigns a Rule to a Tailoring

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`AssignRuleParams`] \| [`any`, `any`, `any`, `any`, `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Assign a Rule to a Tailoring

**`Throws`**

#### Defined in

[AssignRule/index.ts:52](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/AssignRule/index.ts#L52)

___

### assignRules

▸ **assignRules**(`...config`): `Promise`\<`RequestArgs`\>

This feature is exclusively used by the frontend

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`AssignRulesParams`] \| [`any`, `any`, `any`, [`AssignRulesRequest`](interfaces/AssignRulesRequest.md), `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Bulk assign Rules to a Tailoring

**`Deprecated`**

**`Throws`**

#### Defined in

[AssignRules/index.ts:53](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/AssignRules/index.ts#L53)

___

### assignSystem

▸ **assignSystem**(`...config`): `Promise`\<`RequestArgs`\>

Assigns a System to a Policy

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`AssignSystemParams`] \| [`any`, `any`, `any`, `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Assign a System to a Policy

**`Throws`**

#### Defined in

[AssignSystem/index.ts:46](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/AssignSystem/index.ts#L46)

___

### assignSystems

▸ **assignSystems**(`...config`): `Promise`\<`RequestArgs`\>

This feature is exclusively used by the frontend

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`AssignSystemsParams`] \| [`any`, `any`, [`AssignRulesRequest`](interfaces/AssignRulesRequest.md), `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Bulk assign Systems to a Policy

**`Deprecated`**

**`Throws`**

#### Defined in

[AssignSystems/index.ts:47](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/AssignSystems/index.ts#L47)

___

### createPolicy

▸ **createPolicy**(`...config`): `Promise`\<`RequestArgs`\>

Create a Policy with the provided attributes

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`CreatePolicyParams`] \| [`any`, [`Policy`](interfaces/Policy.md), `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Create a Policy

**`Throws`**

#### Defined in

[CreatePolicy/index.ts:40](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/CreatePolicy/index.ts#L40)

___

### deletePolicy

▸ **deletePolicy**(`...config`): `Promise`\<`RequestArgs`\>

Deletes a Policy

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`DeletePolicyParams`] \| [`any`, `any`, `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Delete a Policy

**`Throws`**

#### Defined in

[DeletePolicy/index.ts:40](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/DeletePolicy/index.ts#L40)

___

### deleteReport

▸ **deleteReport**(`...config`): `Promise`\<`RequestArgs`\>

Deletes a Report results

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`any`, `any`, `AxiosRequestConfig`\<`any`\>] \| [`DeleteReportParams`] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Delete a Report results

**`Throws`**

#### Defined in

DeleteReport/index.ts:40

___

### policies

▸ **policies**(`...config`): `Promise`\<`RequestArgs`\>

Lists Policies

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`PoliciesParams`] \| [`any`, `any`, `any`, `any`, `any`, `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Request Policies

**`Throws`**

#### Defined in

[Policies/index.ts:58](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/Policies/index.ts#L58)

___

### policy

▸ **policy**(`...config`): `Promise`\<`RequestArgs`\>

Returns a Policy

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`any`, `any`, `AxiosRequestConfig`\<`any`\>] \| [`PolicyParams`] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Request a Policy

**`Throws`**

#### Defined in

[Policy/index.ts:40](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/Policy/index.ts#L40)

___

### policySystems

▸ **policySystems**(`...config`): `Promise`\<`RequestArgs`\>

Lists Systems assigned to a Policy

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`PolicySystemsParams`] \| [`any`, `any`, `any`, `any`, `any`, `any`, `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Request Systems assigned to a Policy

**`Throws`**

#### Defined in

[PolicySystems/index.ts:64](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/PolicySystems/index.ts#L64)

___

### profile

▸ **profile**(`...config`): `Promise`\<`RequestArgs`\>

Returns a Profile

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`any`, `any`, `any`, `AxiosRequestConfig`\<`any`\>] \| [`ProfileParams`] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Request a Profile

**`Throws`**

#### Defined in

[Profile/index.ts:46](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/Profile/index.ts#L46)

___

### profileRule

▸ **profileRule**(`...config`): `Promise`\<`RequestArgs`\>

Returns a Rule assigned to a Profile

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`any`, `any`, `any`, `any`, `AxiosRequestConfig`\<`any`\>] \| [`ProfileRuleParams`] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Request a Rule assigned to a Profile

**`Throws`**

#### Defined in

[ProfileRule/index.ts:52](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/ProfileRule/index.ts#L52)

___

### profileRules

▸ **profileRules**(`...config`): `Promise`\<`RequestArgs`\>

Lists Rules assigned to a Profile

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`ProfileRulesParams`] \| [`any`, `any`, `any`, `any`, `any`, `any`, `any`, `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Request Rules assigned to a Profile

**`Throws`**

#### Defined in

[ProfileRules/index.ts:70](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/ProfileRules/index.ts#L70)

___

### profiles

▸ **profiles**(`...config`): `Promise`\<`RequestArgs`\>

Lists Profiles

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`any`, `any`, `any`, `any`, `any`, `any`, `AxiosRequestConfig`\<`any`\>] \| [`ProfilesParams`] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Request Profiles

**`Throws`**

#### Defined in

[Profiles/index.ts:64](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/Profiles/index.ts#L64)

___

### report

▸ **report**(`...config`): `Promise`\<`RequestArgs`\>

Returns a Report

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`any`, `any`, `AxiosRequestConfig`\<`any`\>] \| [`ReportParams`] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Request a Report

**`Throws`**

#### Defined in

[Report/index.ts:40](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/Report/index.ts#L40)

___

### reportSystem

▸ **reportSystem**(`...config`): `Promise`\<`RequestArgs`\>

Returns a System under a Report

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`any`, `any`, `any`, `AxiosRequestConfig`\<`any`\>] \| [`ReportSystemParams`] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Request a System

**`Throws`**

#### Defined in

ReportSystem/index.ts:46

___

### reportSystems

▸ **reportSystems**(`...config`): `Promise`\<`RequestArgs`\>

Lists Systems assigned to a Report

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`any`, `any`, `any`, `any`, `any`, `any`, `AxiosRequestConfig`\<`any`\>] \| [`ReportSystemsParams`] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Request Systems assigned to a Report

**`Throws`**

#### Defined in

ReportSystems/index.ts:64

___

### reportTestResult

▸ **reportTestResult**(`...config`): `Promise`\<`RequestArgs`\>

Returns a Test Result under a Report

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`any`, `any`, `any`, `AxiosRequestConfig`\<`any`\>] \| [`ReportTestResultParams`] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Request a Test Result

**`Throws`**

#### Defined in

ReportTestResult/index.ts:46

___

### reportTestResults

▸ **reportTestResults**(`...config`): `Promise`\<`RequestArgs`\>

Lists Test Results under a Report

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`any`, `any`, `any`, `any`, `any`, `any`, `AxiosRequestConfig`\<`any`\>] \| [`ReportTestResultsParams`] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Request Test Results under a Report

**`Throws`**

#### Defined in

ReportTestResults/index.ts:64

___

### reports

▸ **reports**(`...config`): `Promise`\<`RequestArgs`\>

Lists Reports

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`any`, `any`, `any`, `any`, `any`, `AxiosRequestConfig`\<`any`\>] \| [`ReportsParams`] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Request Reports

**`Throws`**

#### Defined in

[Reports/index.ts:58](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/Reports/index.ts#L58)

___

### rule

▸ **rule**(`...config`): `Promise`\<`RequestArgs`\>

Returns a Rule

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`any`, `any`, `any`, `AxiosRequestConfig`\<`any`\>] \| [`RuleParams`] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Request a Rule

**`Throws`**

#### Defined in

[Rule/index.ts:46](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/Rule/index.ts#L46)

___

### ruleGroup

▸ **ruleGroup**(`...config`): `Promise`\<`RequestArgs`\>

Returns a Rule Group

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`any`, `any`, `any`, `AxiosRequestConfig`\<`any`\>] \| [`RuleGroupParams`] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Request a Rule Group

**`Throws`**

#### Defined in

[RuleGroup/index.ts:46](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/RuleGroup/index.ts#L46)

___

### ruleGroups

▸ **ruleGroups**(`...config`): `Promise`\<`RequestArgs`\>

Lists Rule Groups

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`any`, `any`, `any`, `any`, `any`, `any`, `AxiosRequestConfig`\<`any`\>] \| [`RuleGroupsParams`] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Request Rule Groups

**`Throws`**

#### Defined in

[RuleGroups/index.ts:64](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/RuleGroups/index.ts#L64)

___

### rules

▸ **rules**(`...config`): `Promise`\<`RequestArgs`\>

Lists Rules assigned

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`any`, `any`, `any`, `any`, `any`, `any`, `AxiosRequestConfig`\<`any`\>] \| [`RulesParams`] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Request Rules

**`Throws`**

#### Defined in

[Rules/index.ts:64](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/Rules/index.ts#L64)

___

### securityGuide

▸ **securityGuide**(`...config`): `Promise`\<`RequestArgs`\>

Returns a Security Guide

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`any`, `any`, `AxiosRequestConfig`\<`any`\>] \| [`SecurityGuideParams`] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Request a Security Guide

**`Throws`**

#### Defined in

[SecurityGuide/index.ts:40](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/SecurityGuide/index.ts#L40)

___

### securityGuideRuleTree

▸ **securityGuideRuleTree**(`...config`): `Promise`\<`RequestArgs`\>

Returns the Rule Tree of a Security Guide

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`any`, `any`, `AxiosRequestConfig`\<`any`\>] \| [`SecurityGuideRuleTreeParams`] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Request the Rule Tree of a Security Guide

**`Throws`**

#### Defined in

[SecurityGuideRuleTree/index.ts:40](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/SecurityGuideRuleTree/index.ts#L40)

___

### securityGuides

▸ **securityGuides**(`...config`): `Promise`\<`RequestArgs`\>

Lists Security Guides

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`any`, `any`, `any`, `any`, `any`, `AxiosRequestConfig`\<`any`\>] \| [`SecurityGuidesParams`] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Request Security Guides

**`Throws`**

#### Defined in

[SecurityGuides/index.ts:58](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/SecurityGuides/index.ts#L58)

___

### supportedProfiles

▸ **supportedProfiles**(`...config`): `Promise`\<`RequestArgs`\>

Lists Supported Profiles

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`any`, `any`, `any`, `any`, `any`, `AxiosRequestConfig`\<`any`\>] \| [`SupportedProfilesParams`] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Request Supported Profiles

**`Throws`**

#### Defined in

[SupportedProfiles/index.ts:58](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/SupportedProfiles/index.ts#L58)

___

### system

▸ **system**(`...config`): `Promise`\<`RequestArgs`\>

Returns a System

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`any`, `any`, `AxiosRequestConfig`\<`any`\>] \| [`SystemParams`] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Request a System

**`Throws`**

#### Defined in

[System/index.ts:40](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/System/index.ts#L40)

___

### systems

▸ **systems**(`...config`): `Promise`\<`RequestArgs`\>

Lists Systems

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`any`, `any`, `any`, `any`, `any`, `AxiosRequestConfig`\<`any`\>] \| [`SystemsParams`] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Request Systems

**`Throws`**

#### Defined in

[Systems/index.ts:58](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/Systems/index.ts#L58)

___

### systemsPolicies

▸ **systemsPolicies**(`...config`): `Promise`\<`RequestArgs`\>

Lists Policies under a System

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`any`, `any`, `any`, `any`, `any`, `any`, `AxiosRequestConfig`\<`any`\>] \| [`SystemsPoliciesParams`] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Request Policies assigned to a System

**`Throws`**

#### Defined in

[SystemsPolicies/index.ts:64](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/SystemsPolicies/index.ts#L64)

___

### tailoring

▸ **tailoring**(`...config`): `Promise`\<`RequestArgs`\>

Returns a Tailoring

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`any`, `any`, `any`, `AxiosRequestConfig`\<`any`\>] \| [`TailoringParams`] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Request a Tailoring

**`Throws`**

#### Defined in

[Tailoring/index.ts:46](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/Tailoring/index.ts#L46)

___

### tailoringFile

▸ **tailoringFile**(`...config`): `Promise`\<`RequestArgs`\>

Returns a Tailoring File

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`any`, `any`, `any`, `AxiosRequestConfig`\<`any`\>] \| [`TailoringFileParams`] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Request a Tailoring file

**`Throws`**

#### Defined in

[TailoringFile/index.ts:46](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/TailoringFile/index.ts#L46)

___

### tailoringRules

▸ **tailoringRules**(`...config`): `Promise`\<`RequestArgs`\>

Lists Rules assigned to a Tailoring

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`any`, `any`, `any`, `any`, `any`, `any`, `any`, `AxiosRequestConfig`\<`any`\>] \| [`TailoringRulesParams`] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Request Rules assigned to a Tailoring

**`Throws`**

#### Defined in

[TailoringRules/index.ts:70](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/TailoringRules/index.ts#L70)

___

### tailorings

▸ **tailorings**(`...config`): `Promise`\<`RequestArgs`\>

Lists Tailorings

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`any`, `any`, `any`, `any`, `any`, `any`, `AxiosRequestConfig`\<`any`\>] \| [`TailoringsParams`] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Request Tailorings

**`Throws`**

#### Defined in

[Tailorings/index.ts:64](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/Tailorings/index.ts#L64)

___

### unassignRule

▸ **unassignRule**(`...config`): `Promise`\<`RequestArgs`\>

Unassigns a Rule from a Tailoring

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`any`, `any`, `any`, `any`, `AxiosRequestConfig`\<`any`\>] \| [`UnassignRuleParams`] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Unassign a Rule from a Tailoring

**`Throws`**

#### Defined in

[UnassignRule/index.ts:52](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/UnassignRule/index.ts#L52)

___

### unassignSystem

▸ **unassignSystem**(`...config`): `Promise`\<`RequestArgs`\>

Unassigns a System from a Policy

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`any`, `any`, `any`, `AxiosRequestConfig`\<`any`\>] \| [`UnassignSystemParams`] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Unassign a System from a Policy

**`Throws`**

#### Defined in

[UnassignSystem/index.ts:46](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/UnassignSystem/index.ts#L46)

___

### updatePolicy

▸ **updatePolicy**(`...config`): `Promise`\<`RequestArgs`\>

Updates a Policy with the provided attributes

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`UpdatePolicyParams`] \| [`any`, `any`, [`PolicyUpdate`](interfaces/PolicyUpdate.md), `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Update a Policy

**`Throws`**

#### Defined in

[UpdatePolicy/index.ts:46](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/UpdatePolicy/index.ts#L46)

___

### updateTailoring

▸ **updateTailoring**(`...config`): `Promise`\<`RequestArgs`\>

Updates a Tailoring with the provided value_overrides

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`UpdateTailoringParams`] \| [`any`, `any`, `any`, [`Tailoring`](interfaces/Tailoring.md), `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Update a Tailoring

**`Throws`**

#### Defined in

[UpdateTailoring/index.ts:52](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/UpdateTailoring/index.ts#L52)

___

### valueDefinition

▸ **valueDefinition**(`...config`): `Promise`\<`RequestArgs`\>

Returns a Value Definition

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`any`, `any`, `any`, `AxiosRequestConfig`\<`any`\>] \| [`ValueDefinitionParams`] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Request a Value Definition

**`Throws`**

#### Defined in

[ValueDefinition/index.ts:46](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/ValueDefinition/index.ts#L46)

___

### valueDefinitions

▸ **valueDefinitions**(`...config`): `Promise`\<`RequestArgs`\>

Lists Value Definitions

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`any`, `any`, `any`, `any`, `any`, `any`, `AxiosRequestConfig`\<`any`\>] \| [`ValueDefinitionsParams`] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Request Value Definitions

**`Throws`**

#### Defined in

[ValueDefinitions/index.ts:64](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/compliance/ValueDefinitions/index.ts#L64)
