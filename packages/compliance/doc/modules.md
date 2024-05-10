[@redhat-cloud-services/compliance-client](README.md) / Exports

# @redhat-cloud-services/compliance-client

## Table of contents

### Classes

- [Configuration](classes/Configuration.md)
- [ContentApi](classes/ContentApi.md)
- [PoliciesApi](classes/PoliciesApi.md)
- [SystemsApi](classes/SystemsApi.md)

### Interfaces

- [AssignRulesRequest](interfaces/AssignRulesRequest.md)
- [ConfigurationParameters](interfaces/ConfigurationParameters.md)
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
- [ValueDefinition](interfaces/ValueDefinition.md)
- [ValueDefinition200Response](interfaces/ValueDefinition200Response.md)
- [ValueDefinition200ResponseData](interfaces/ValueDefinition200ResponseData.md)
- [ValueDefinitions200Response](interfaces/ValueDefinitions200Response.md)

### Type Aliases

- [PolicyTypeEnum](modules.md#policytypeenum)
- [ProfileTypeEnum](modules.md#profiletypeenum)
- [RuleGroupTypeEnum](modules.md#rulegrouptypeenum)
- [RuleTypeEnum](modules.md#ruletypeenum)
- [SecurityGuideTypeEnum](modules.md#securityguidetypeenum)
- [SupportedProfileTypeEnum](modules.md#supportedprofiletypeenum)
- [SystemTypeEnum](modules.md#systemtypeenum)
- [TailoringTypeEnum](modules.md#tailoringtypeenum)
- [ValueDefinitionTypeEnum](modules.md#valuedefinitiontypeenum)

### Variables

- [PolicyTypeEnum](modules.md#policytypeenum-1)
- [ProfileTypeEnum](modules.md#profiletypeenum-1)
- [RuleGroupTypeEnum](modules.md#rulegrouptypeenum-1)
- [RuleTypeEnum](modules.md#ruletypeenum-1)
- [SecurityGuideTypeEnum](modules.md#securityguidetypeenum-1)
- [SupportedProfileTypeEnum](modules.md#supportedprofiletypeenum-1)
- [SystemTypeEnum](modules.md#systemtypeenum-1)
- [TailoringTypeEnum](modules.md#tailoringtypeenum-1)
- [ValueDefinitionTypeEnum](modules.md#valuedefinitiontypeenum-1)

### Functions

- [ContentApiAxiosParamCreator](modules.md#contentapiaxiosparamcreator)
- [ContentApiFactory](modules.md#contentapifactory)
- [ContentApiFp](modules.md#contentapifp)
- [PoliciesApiAxiosParamCreator](modules.md#policiesapiaxiosparamcreator)
- [PoliciesApiFactory](modules.md#policiesapifactory)
- [PoliciesApiFp](modules.md#policiesapifp)
- [SystemsApiAxiosParamCreator](modules.md#systemsapiaxiosparamcreator)
- [SystemsApiFactory](modules.md#systemsapifactory)
- [SystemsApiFp](modules.md#systemsapifp)

## Type Aliases

### PolicyTypeEnum

Ƭ **PolicyTypeEnum**: typeof [`PolicyTypeEnum`](modules.md#policytypeenum-1)[keyof typeof [`PolicyTypeEnum`](modules.md#policytypeenum-1)]

#### Defined in

api.ts:245

api.ts:249

___

### ProfileTypeEnum

Ƭ **ProfileTypeEnum**: typeof [`ProfileTypeEnum`](modules.md#profiletypeenum-1)[keyof typeof [`ProfileTypeEnum`](modules.md#profiletypeenum-1)]

#### Defined in

api.ts:320

api.ts:324

___

### RuleGroupTypeEnum

Ƭ **RuleGroupTypeEnum**: typeof [`RuleGroupTypeEnum`](modules.md#rulegrouptypeenum-1)[keyof typeof [`RuleGroupTypeEnum`](modules.md#rulegrouptypeenum-1)]

#### Defined in

api.ts:521

api.ts:525

___

### RuleTypeEnum

Ƭ **RuleTypeEnum**: typeof [`RuleTypeEnum`](modules.md#ruletypeenum-1)[keyof typeof [`RuleTypeEnum`](modules.md#ruletypeenum-1)]

#### Defined in

api.ts:439

api.ts:443

___

### SecurityGuideTypeEnum

Ƭ **SecurityGuideTypeEnum**: typeof [`SecurityGuideTypeEnum`](modules.md#securityguidetypeenum-1)[keyof typeof [`SecurityGuideTypeEnum`](modules.md#securityguidetypeenum-1)]

#### Defined in

api.ts:653

api.ts:657

___

### SupportedProfileTypeEnum

Ƭ **SupportedProfileTypeEnum**: typeof [`SupportedProfileTypeEnum`](modules.md#supportedprofiletypeenum-1)[keyof typeof [`SupportedProfileTypeEnum`](modules.md#supportedprofiletypeenum-1)]

#### Defined in

api.ts:760

api.ts:764

___

### SystemTypeEnum

Ƭ **SystemTypeEnum**: typeof [`SystemTypeEnum`](modules.md#systemtypeenum-1)[keyof typeof [`SystemTypeEnum`](modules.md#systemtypeenum-1)]

#### Defined in

api.ts:877

api.ts:881

___

### TailoringTypeEnum

Ƭ **TailoringTypeEnum**: typeof [`TailoringTypeEnum`](modules.md#tailoringtypeenum-1)[keyof typeof [`TailoringTypeEnum`](modules.md#tailoringtypeenum-1)]

#### Defined in

api.ts:978

api.ts:982

___

### ValueDefinitionTypeEnum

Ƭ **ValueDefinitionTypeEnum**: typeof [`ValueDefinitionTypeEnum`](modules.md#valuedefinitiontypeenum-1)[keyof typeof [`ValueDefinitionTypeEnum`](modules.md#valuedefinitiontypeenum-1)]

#### Defined in

api.ts:1100

api.ts:1104

## Variables

### PolicyTypeEnum

• `Const` **PolicyTypeEnum**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Policy` | ``"policy"`` |

#### Defined in

api.ts:245

api.ts:249

___

### ProfileTypeEnum

• `Const` **ProfileTypeEnum**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Profile` | ``"profile"`` |

#### Defined in

api.ts:320

api.ts:324

___

### RuleGroupTypeEnum

• `Const` **RuleGroupTypeEnum**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `RuleGroup` | ``"rule_group"`` |

#### Defined in

api.ts:521

api.ts:525

___

### RuleTypeEnum

• `Const` **RuleTypeEnum**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Rule` | ``"rule"`` |

#### Defined in

api.ts:439

api.ts:443

___

### SecurityGuideTypeEnum

• `Const` **SecurityGuideTypeEnum**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `SecurityGuide` | ``"security_guide"`` |

#### Defined in

api.ts:653

api.ts:657

___

### SupportedProfileTypeEnum

• `Const` **SupportedProfileTypeEnum**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `SupportedProfile` | ``"supported_profile"`` |

#### Defined in

api.ts:760

api.ts:764

___

### SystemTypeEnum

• `Const` **SystemTypeEnum**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `System` | ``"system"`` |

#### Defined in

api.ts:877

api.ts:881

___

### TailoringTypeEnum

• `Const` **TailoringTypeEnum**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Tailoring` | ``"tailoring"`` |

#### Defined in

api.ts:978

api.ts:982

___

### ValueDefinitionTypeEnum

• `Const` **ValueDefinitionTypeEnum**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ValueDefinition` | ``"value_definition"`` |

#### Defined in

api.ts:1100

api.ts:1104

## Functions

### ContentApiAxiosParamCreator

▸ **ContentApiAxiosParamCreator**(`configuration?`): `Object`

ContentApi - axios parameter creator

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type | Description |
| :------ | :------ | :------ |
| `profile` | (`securityGuideId`: `any`, `id`: `any`, `xRHIDENTITY?`: `any`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<`RequestArgs`\> | - |
| `profileRule` | (`securityGuideId`: `any`, `profileId`: `any`, `id`: `any`, `xRHIDENTITY?`: `any`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<`RequestArgs`\> | - |
| `profileRules` | (`securityGuideId`: `any`, `profileId`: `any`, `xRHIDENTITY?`: `any`, `limit?`: `any`, `offset?`: `any`, `sortBy?`: `any`, `filter?`: `any`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<`RequestArgs`\> | - |
| `profiles` | (`securityGuideId`: `any`, `xRHIDENTITY?`: `any`, `limit?`: `any`, `offset?`: `any`, `sortBy?`: `any`, `filter?`: `any`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<`RequestArgs`\> | - |
| `rule` | (`securityGuideId`: `any`, `id`: `any`, `xRHIDENTITY?`: `any`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<`RequestArgs`\> | - |
| `ruleGroup` | (`securityGuideId`: `any`, `id`: `any`, `xRHIDENTITY?`: `any`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<`RequestArgs`\> | - |
| `ruleGroups` | (`securityGuideId`: `any`, `xRHIDENTITY?`: `any`, `limit?`: `any`, `offset?`: `any`, `sortBy?`: `any`, `filter?`: `any`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<`RequestArgs`\> | - |
| `rules` | (`securityGuideId`: `any`, `xRHIDENTITY?`: `any`, `limit?`: `any`, `offset?`: `any`, `sortBy?`: `any`, `filter?`: `any`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<`RequestArgs`\> | - |
| `securityGuide` | (`id`: `any`, `xRHIDENTITY?`: `any`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<`RequestArgs`\> | - |
| `securityGuideRuleTree` | (`id`: `any`, `xRHIDENTITY?`: `any`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<`RequestArgs`\> | - |
| `securityGuides` | (`xRHIDENTITY?`: `any`, `limit?`: `any`, `offset?`: `any`, `sortBy?`: `any`, `filter?`: `any`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<`RequestArgs`\> | - |
| `supportedProfiles` | (`xRHIDENTITY?`: `any`, `limit?`: `any`, `offset?`: `any`, `sortBy?`: `any`, `filter?`: `any`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<`RequestArgs`\> | - |
| `valueDefinition` | (`securityGuideId`: `any`, `id`: `any`, `xRHIDENTITY?`: `any`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<`RequestArgs`\> | - |
| `valueDefinitions` | (`securityGuideId`: `any`, `xRHIDENTITY?`: `any`, `limit?`: `any`, `offset?`: `any`, `sortBy?`: `any`, `filter?`: `any`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<`RequestArgs`\> | - |

**`Export`**

#### Defined in

api.ts:1162

___

### ContentApiFactory

▸ **ContentApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

ContentApi - factory interface

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
| `profile` | (`securityGuideId`: `any`, `id`: `any`, `xRHIDENTITY?`: `any`, `options?`: `any`) => `AxiosPromise`\<[`Profile200Response`](interfaces/Profile200Response.md)\> |
| `profileRule` | (`securityGuideId`: `any`, `profileId`: `any`, `id`: `any`, `xRHIDENTITY?`: `any`, `options?`: `any`) => `AxiosPromise`\<[`Rule200Response`](interfaces/Rule200Response.md)\> |
| `profileRules` | (`securityGuideId`: `any`, `profileId`: `any`, `xRHIDENTITY?`: `any`, `limit?`: `any`, `offset?`: `any`, `sortBy?`: `any`, `filter?`: `any`, `options?`: `any`) => `AxiosPromise`\<[`Rules200Response`](interfaces/Rules200Response.md)\> |
| `profiles` | (`securityGuideId`: `any`, `xRHIDENTITY?`: `any`, `limit?`: `any`, `offset?`: `any`, `sortBy?`: `any`, `filter?`: `any`, `options?`: `any`) => `AxiosPromise`\<[`Profiles200Response`](interfaces/Profiles200Response.md)\> |
| `rule` | (`securityGuideId`: `any`, `id`: `any`, `xRHIDENTITY?`: `any`, `options?`: `any`) => `AxiosPromise`\<[`Rule200Response`](interfaces/Rule200Response.md)\> |
| `ruleGroup` | (`securityGuideId`: `any`, `id`: `any`, `xRHIDENTITY?`: `any`, `options?`: `any`) => `AxiosPromise`\<[`RuleGroup200Response`](interfaces/RuleGroup200Response.md)\> |
| `ruleGroups` | (`securityGuideId`: `any`, `xRHIDENTITY?`: `any`, `limit?`: `any`, `offset?`: `any`, `sortBy?`: `any`, `filter?`: `any`, `options?`: `any`) => `AxiosPromise`\<[`RuleGroups200Response`](interfaces/RuleGroups200Response.md)\> |
| `rules` | (`securityGuideId`: `any`, `xRHIDENTITY?`: `any`, `limit?`: `any`, `offset?`: `any`, `sortBy?`: `any`, `filter?`: `any`, `options?`: `any`) => `AxiosPromise`\<[`Rules200Response`](interfaces/Rules200Response.md)\> |
| `securityGuide` | (`id`: `any`, `xRHIDENTITY?`: `any`, `options?`: `any`) => `AxiosPromise`\<[`SecurityGuide200Response`](interfaces/SecurityGuide200Response.md)\> |
| `securityGuideRuleTree` | (`id`: `any`, `xRHIDENTITY?`: `any`, `options?`: `any`) => `AxiosPromise`\<`any`\> |
| `securityGuides` | (`xRHIDENTITY?`: `any`, `limit?`: `any`, `offset?`: `any`, `sortBy?`: `any`, `filter?`: `any`, `options?`: `any`) => `AxiosPromise`\<[`SecurityGuides200Response`](interfaces/SecurityGuides200Response.md)\> |
| `supportedProfiles` | (`xRHIDENTITY?`: `any`, `limit?`: `any`, `offset?`: `any`, `sortBy?`: `any`, `filter?`: `any`, `options?`: `any`) => `AxiosPromise`\<[`SupportedProfiles200Response`](interfaces/SupportedProfiles200Response.md)\> |
| `valueDefinition` | (`securityGuideId`: `any`, `id`: `any`, `xRHIDENTITY?`: `any`, `options?`: `any`) => `AxiosPromise`\<[`ValueDefinition200Response`](interfaces/ValueDefinition200Response.md)\> |
| `valueDefinitions` | (`securityGuideId`: `any`, `xRHIDENTITY?`: `any`, `limit?`: `any`, `offset?`: `any`, `sortBy?`: `any`, `filter?`: `any`, `options?`: `any`) => `AxiosPromise`\<[`ValueDefinitions200Response`](interfaces/ValueDefinitions200Response.md)\> |

**`Export`**

#### Defined in

api.ts:2116

___

### ContentApiFp

▸ **ContentApiFp**(`configuration?`): `Object`

ContentApi - functional programming interface

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `profile` | (`securityGuideId`: `any`, `id`: `any`, `xRHIDENTITY?`: `any`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`Profile200Response`](interfaces/Profile200Response.md)\>\> |
| `profileRule` | (`securityGuideId`: `any`, `profileId`: `any`, `id`: `any`, `xRHIDENTITY?`: `any`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`Rule200Response`](interfaces/Rule200Response.md)\>\> |
| `profileRules` | (`securityGuideId`: `any`, `profileId`: `any`, `xRHIDENTITY?`: `any`, `limit?`: `any`, `offset?`: `any`, `sortBy?`: `any`, `filter?`: `any`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`Rules200Response`](interfaces/Rules200Response.md)\>\> |
| `profiles` | (`securityGuideId`: `any`, `xRHIDENTITY?`: `any`, `limit?`: `any`, `offset?`: `any`, `sortBy?`: `any`, `filter?`: `any`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`Profiles200Response`](interfaces/Profiles200Response.md)\>\> |
| `rule` | (`securityGuideId`: `any`, `id`: `any`, `xRHIDENTITY?`: `any`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`Rule200Response`](interfaces/Rule200Response.md)\>\> |
| `ruleGroup` | (`securityGuideId`: `any`, `id`: `any`, `xRHIDENTITY?`: `any`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`RuleGroup200Response`](interfaces/RuleGroup200Response.md)\>\> |
| `ruleGroups` | (`securityGuideId`: `any`, `xRHIDENTITY?`: `any`, `limit?`: `any`, `offset?`: `any`, `sortBy?`: `any`, `filter?`: `any`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`RuleGroups200Response`](interfaces/RuleGroups200Response.md)\>\> |
| `rules` | (`securityGuideId`: `any`, `xRHIDENTITY?`: `any`, `limit?`: `any`, `offset?`: `any`, `sortBy?`: `any`, `filter?`: `any`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`Rules200Response`](interfaces/Rules200Response.md)\>\> |
| `securityGuide` | (`id`: `any`, `xRHIDENTITY?`: `any`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`SecurityGuide200Response`](interfaces/SecurityGuide200Response.md)\>\> |
| `securityGuideRuleTree` | (`id`: `any`, `xRHIDENTITY?`: `any`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<`any`\>\> |
| `securityGuides` | (`xRHIDENTITY?`: `any`, `limit?`: `any`, `offset?`: `any`, `sortBy?`: `any`, `filter?`: `any`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`SecurityGuides200Response`](interfaces/SecurityGuides200Response.md)\>\> |
| `supportedProfiles` | (`xRHIDENTITY?`: `any`, `limit?`: `any`, `offset?`: `any`, `sortBy?`: `any`, `filter?`: `any`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`SupportedProfiles200Response`](interfaces/SupportedProfiles200Response.md)\>\> |
| `valueDefinition` | (`securityGuideId`: `any`, `id`: `any`, `xRHIDENTITY?`: `any`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`ValueDefinition200Response`](interfaces/ValueDefinition200Response.md)\>\> |
| `valueDefinitions` | (`securityGuideId`: `any`, `xRHIDENTITY?`: `any`, `limit?`: `any`, `offset?`: `any`, `sortBy?`: `any`, `filter?`: `any`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`ValueDefinitions200Response`](interfaces/ValueDefinitions200Response.md)\>\> |

**`Export`**

#### Defined in

api.ts:1905

___

### PoliciesApiAxiosParamCreator

▸ **PoliciesApiAxiosParamCreator**(`configuration?`): `Object`

PoliciesApi - axios parameter creator

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type | Description |
| :------ | :------ | :------ |
| `assignRule` | (`policyId`: `any`, `tailoringId`: `any`, `id`: `any`, `xRHIDENTITY?`: `any`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<`RequestArgs`\> | - |
| `assignRules` | (`policyId`: `any`, `tailoringId`: `any`, `xRHIDENTITY?`: `any`, `assignRulesRequest?`: [`AssignRulesRequest`](interfaces/AssignRulesRequest.md), `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<`RequestArgs`\> | - |
| `assignSystem` | (`id`: `any`, `policyId`: `any`, `xRHIDENTITY?`: `any`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<`RequestArgs`\> | - |
| `assignSystems` | (`policyId`: `any`, `xRHIDENTITY?`: `any`, `assignRulesRequest?`: [`AssignRulesRequest`](interfaces/AssignRulesRequest.md), `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<`RequestArgs`\> | - |
| `createPolicy` | (`xRHIDENTITY?`: `any`, `policy?`: [`Policy`](interfaces/Policy.md), `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<`RequestArgs`\> | - |
| `deletePolicy` | (`id`: `any`, `xRHIDENTITY?`: `any`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<`RequestArgs`\> | - |
| `policies` | (`xRHIDENTITY?`: `any`, `limit?`: `any`, `offset?`: `any`, `sortBy?`: `any`, `filter?`: `any`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<`RequestArgs`\> | - |
| `policy` | (`id`: `any`, `xRHIDENTITY?`: `any`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<`RequestArgs`\> | - |
| `policySystems` | (`policyId`: `any`, `xRHIDENTITY?`: `any`, `limit?`: `any`, `offset?`: `any`, `sortBy?`: `any`, `filter?`: `any`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<`RequestArgs`\> | - |
| `tailoring` | (`policyId`: `any`, `id`: `any`, `xRHIDENTITY?`: `any`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<`RequestArgs`\> | - |
| `tailoringFile` | (`policyId`: `any`, `id`: `any`, `xRHIDENTITY?`: `any`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<`RequestArgs`\> | - |
| `tailoringRules` | (`policyId`: `any`, `tailoringId`: `any`, `xRHIDENTITY?`: `any`, `limit?`: `any`, `offset?`: `any`, `sortBy?`: `any`, `filter?`: `any`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<`RequestArgs`\> | - |
| `tailorings` | (`policyId`: `any`, `xRHIDENTITY?`: `any`, `limit?`: `any`, `offset?`: `any`, `sortBy?`: `any`, `filter?`: `any`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<`RequestArgs`\> | - |
| `unassignRule` | (`policyId`: `any`, `tailoringId`: `any`, `id`: `any`, `xRHIDENTITY?`: `any`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<`RequestArgs`\> | - |
| `unassignSystem` | (`id`: `any`, `policyId`: `any`, `xRHIDENTITY?`: `any`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<`RequestArgs`\> | - |
| `updatePolicy` | (`id`: `any`, `xRHIDENTITY?`: `any`, `policyUpdate?`: [`PolicyUpdate`](interfaces/PolicyUpdate.md), `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<`RequestArgs`\> | - |

**`Export`**

#### Defined in

api.ts:2537

___

### PoliciesApiFactory

▸ **PoliciesApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

PoliciesApi - factory interface

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
| `assignRule` | (`policyId`: `any`, `tailoringId`: `any`, `id`: `any`, `xRHIDENTITY?`: `any`, `options?`: `any`) => `AxiosPromise`\<`void`\> |
| `assignRules` | (`policyId`: `any`, `tailoringId`: `any`, `xRHIDENTITY?`: `any`, `assignRulesRequest?`: [`AssignRulesRequest`](interfaces/AssignRulesRequest.md), `options?`: `any`) => `AxiosPromise`\<[`Rules200Response`](interfaces/Rules200Response.md)\> |
| `assignSystem` | (`id`: `any`, `policyId`: `any`, `xRHIDENTITY?`: `any`, `options?`: `any`) => `AxiosPromise`\<[`System200Response`](interfaces/System200Response.md)\> |
| `assignSystems` | (`policyId`: `any`, `xRHIDENTITY?`: `any`, `assignRulesRequest?`: [`AssignRulesRequest`](interfaces/AssignRulesRequest.md), `options?`: `any`) => `AxiosPromise`\<[`Systems200Response`](interfaces/Systems200Response.md)\> |
| `createPolicy` | (`xRHIDENTITY?`: `any`, `policy?`: [`Policy`](interfaces/Policy.md), `options?`: `any`) => `AxiosPromise`\<[`CreatePolicy201Response`](interfaces/CreatePolicy201Response.md)\> |
| `deletePolicy` | (`id`: `any`, `xRHIDENTITY?`: `any`, `options?`: `any`) => `AxiosPromise`\<[`CreatePolicy201Response`](interfaces/CreatePolicy201Response.md)\> |
| `policies` | (`xRHIDENTITY?`: `any`, `limit?`: `any`, `offset?`: `any`, `sortBy?`: `any`, `filter?`: `any`, `options?`: `any`) => `AxiosPromise`\<[`Policies200Response`](interfaces/Policies200Response.md)\> |
| `policy` | (`id`: `any`, `xRHIDENTITY?`: `any`, `options?`: `any`) => `AxiosPromise`\<[`CreatePolicy201Response`](interfaces/CreatePolicy201Response.md)\> |
| `policySystems` | (`policyId`: `any`, `xRHIDENTITY?`: `any`, `limit?`: `any`, `offset?`: `any`, `sortBy?`: `any`, `filter?`: `any`, `options?`: `any`) => `AxiosPromise`\<[`Systems200Response`](interfaces/Systems200Response.md)\> |
| `tailoring` | (`policyId`: `any`, `id`: `any`, `xRHIDENTITY?`: `any`, `options?`: `any`) => `AxiosPromise`\<[`Tailoring200Response`](interfaces/Tailoring200Response.md)\> |
| `tailoringFile` | (`policyId`: `any`, `id`: `any`, `xRHIDENTITY?`: `any`, `options?`: `any`) => `AxiosPromise`\<[`TailoringFile`](interfaces/TailoringFile.md)\> |
| `tailoringRules` | (`policyId`: `any`, `tailoringId`: `any`, `xRHIDENTITY?`: `any`, `limit?`: `any`, `offset?`: `any`, `sortBy?`: `any`, `filter?`: `any`, `options?`: `any`) => `AxiosPromise`\<[`Rules200Response`](interfaces/Rules200Response.md)\> |
| `tailorings` | (`policyId`: `any`, `xRHIDENTITY?`: `any`, `limit?`: `any`, `offset?`: `any`, `sortBy?`: `any`, `filter?`: `any`, `options?`: `any`) => `AxiosPromise`\<[`Tailorings200Response`](interfaces/Tailorings200Response.md)\> |
| `unassignRule` | (`policyId`: `any`, `tailoringId`: `any`, `id`: `any`, `xRHIDENTITY?`: `any`, `options?`: `any`) => `AxiosPromise`\<`void`\> |
| `unassignSystem` | (`id`: `any`, `policyId`: `any`, `xRHIDENTITY?`: `any`, `options?`: `any`) => `AxiosPromise`\<[`System200Response`](interfaces/System200Response.md)\> |
| `updatePolicy` | (`id`: `any`, `xRHIDENTITY?`: `any`, `policyUpdate?`: [`PolicyUpdate`](interfaces/PolicyUpdate.md), `options?`: `any`) => `AxiosPromise`\<[`CreatePolicy201Response`](interfaces/CreatePolicy201Response.md)\> |

**`Export`**

#### Defined in

api.ts:3564

___

### PoliciesApiFp

▸ **PoliciesApiFp**(`configuration?`): `Object`

PoliciesApi - functional programming interface

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `assignRule` | (`policyId`: `any`, `tailoringId`: `any`, `id`: `any`, `xRHIDENTITY?`: `any`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<`void`\>\> |
| `assignRules` | (`policyId`: `any`, `tailoringId`: `any`, `xRHIDENTITY?`: `any`, `assignRulesRequest?`: [`AssignRulesRequest`](interfaces/AssignRulesRequest.md), `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`Rules200Response`](interfaces/Rules200Response.md)\>\> |
| `assignSystem` | (`id`: `any`, `policyId`: `any`, `xRHIDENTITY?`: `any`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`System200Response`](interfaces/System200Response.md)\>\> |
| `assignSystems` | (`policyId`: `any`, `xRHIDENTITY?`: `any`, `assignRulesRequest?`: [`AssignRulesRequest`](interfaces/AssignRulesRequest.md), `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`Systems200Response`](interfaces/Systems200Response.md)\>\> |
| `createPolicy` | (`xRHIDENTITY?`: `any`, `policy?`: [`Policy`](interfaces/Policy.md), `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`CreatePolicy201Response`](interfaces/CreatePolicy201Response.md)\>\> |
| `deletePolicy` | (`id`: `any`, `xRHIDENTITY?`: `any`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`CreatePolicy201Response`](interfaces/CreatePolicy201Response.md)\>\> |
| `policies` | (`xRHIDENTITY?`: `any`, `limit?`: `any`, `offset?`: `any`, `sortBy?`: `any`, `filter?`: `any`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`Policies200Response`](interfaces/Policies200Response.md)\>\> |
| `policy` | (`id`: `any`, `xRHIDENTITY?`: `any`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`CreatePolicy201Response`](interfaces/CreatePolicy201Response.md)\>\> |
| `policySystems` | (`policyId`: `any`, `xRHIDENTITY?`: `any`, `limit?`: `any`, `offset?`: `any`, `sortBy?`: `any`, `filter?`: `any`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`Systems200Response`](interfaces/Systems200Response.md)\>\> |
| `tailoring` | (`policyId`: `any`, `id`: `any`, `xRHIDENTITY?`: `any`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`Tailoring200Response`](interfaces/Tailoring200Response.md)\>\> |
| `tailoringFile` | (`policyId`: `any`, `id`: `any`, `xRHIDENTITY?`: `any`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`TailoringFile`](interfaces/TailoringFile.md)\>\> |
| `tailoringRules` | (`policyId`: `any`, `tailoringId`: `any`, `xRHIDENTITY?`: `any`, `limit?`: `any`, `offset?`: `any`, `sortBy?`: `any`, `filter?`: `any`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`Rules200Response`](interfaces/Rules200Response.md)\>\> |
| `tailorings` | (`policyId`: `any`, `xRHIDENTITY?`: `any`, `limit?`: `any`, `offset?`: `any`, `sortBy?`: `any`, `filter?`: `any`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`Tailorings200Response`](interfaces/Tailorings200Response.md)\>\> |
| `unassignRule` | (`policyId`: `any`, `tailoringId`: `any`, `id`: `any`, `xRHIDENTITY?`: `any`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<`void`\>\> |
| `unassignSystem` | (`id`: `any`, `policyId`: `any`, `xRHIDENTITY?`: `any`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`System200Response`](interfaces/System200Response.md)\>\> |
| `updatePolicy` | (`id`: `any`, `xRHIDENTITY?`: `any`, `policyUpdate?`: [`PolicyUpdate`](interfaces/PolicyUpdate.md), `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`CreatePolicy201Response`](interfaces/CreatePolicy201Response.md)\>\> |

**`Export`**

#### Defined in

api.ts:3332

___

### SystemsApiAxiosParamCreator

▸ **SystemsApiAxiosParamCreator**(`configuration?`): `Object`

SystemsApi - axios parameter creator

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type | Description |
| :------ | :------ | :------ |
| `system` | (`id`: `any`, `xRHIDENTITY?`: `any`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<`RequestArgs`\> | - |
| `systems` | (`xRHIDENTITY?`: `any`, `limit?`: `any`, `offset?`: `any`, `sortBy?`: `any`, `filter?`: `any`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<`RequestArgs`\> | - |
| `systemsPolicies` | (`systemId`: `any`, `xRHIDENTITY?`: `any`, `limit?`: `any`, `offset?`: `any`, `sortBy?`: `any`, `filter?`: `any`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<`RequestArgs`\> | - |

**`Export`**

#### Defined in

api.ts:4027

___

### SystemsApiFactory

▸ **SystemsApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

SystemsApi - factory interface

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
| `system` | (`id`: `any`, `xRHIDENTITY?`: `any`, `options?`: `any`) => `AxiosPromise`\<[`System200Response`](interfaces/System200Response.md)\> |
| `systems` | (`xRHIDENTITY?`: `any`, `limit?`: `any`, `offset?`: `any`, `sortBy?`: `any`, `filter?`: `any`, `options?`: `any`) => `AxiosPromise`\<[`Systems200Response`](interfaces/Systems200Response.md)\> |
| `systemsPolicies` | (`systemId`: `any`, `xRHIDENTITY?`: `any`, `limit?`: `any`, `offset?`: `any`, `sortBy?`: `any`, `filter?`: `any`, `options?`: `any`) => `AxiosPromise`\<[`Policies200Response`](interfaces/Policies200Response.md)\> |

**`Export`**

#### Defined in

api.ts:4248

___

### SystemsApiFp

▸ **SystemsApiFp**(`configuration?`): `Object`

SystemsApi - functional programming interface

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `system` | (`id`: `any`, `xRHIDENTITY?`: `any`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`System200Response`](interfaces/System200Response.md)\>\> |
| `systems` | (`xRHIDENTITY?`: `any`, `limit?`: `any`, `offset?`: `any`, `sortBy?`: `any`, `filter?`: `any`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`Systems200Response`](interfaces/Systems200Response.md)\>\> |
| `systemsPolicies` | (`systemId`: `any`, `xRHIDENTITY?`: `any`, `limit?`: `any`, `offset?`: `any`, `sortBy?`: `any`, `filter?`: `any`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`Policies200Response`](interfaces/Policies200Response.md)\>\> |

**`Export`**

#### Defined in

api.ts:4195
