[@redhat-cloud-services/host-inventory-client](README.md) / Exports

# @redhat-cloud-services/host-inventory-client

## Table of contents

### Enumerations

- [SystemDefaultId](enums/SystemDefaultId.md)
- [SystemProfileGreenbootStatusEnum](enums/SystemProfileGreenbootStatusEnum.md)
- [SystemProfileHostTypeEnum](enums/SystemProfileHostTypeEnum.md)
- [SystemProfileOperatingSystemNameEnum](enums/SystemProfileOperatingSystemNameEnum.md)
- [SystemProfileSelinuxCurrentModeEnum](enums/SystemProfileSelinuxCurrentModeEnum.md)
- [SystemProfileSystemPurposeRoleEnum](enums/SystemProfileSystemPurposeRoleEnum.md)
- [SystemProfileSystemPurposeSlaEnum](enums/SystemProfileSystemPurposeSlaEnum.md)
- [SystemProfileSystemPurposeUsageEnum](enums/SystemProfileSystemPurposeUsageEnum.md)
- [SystemProfileSystemUpdateMethodEnum](enums/SystemProfileSystemUpdateMethodEnum.md)
- [SystemProfileSystemdStateEnum](enums/SystemProfileSystemdStateEnum.md)

### Classes

- [AccountsStalenessApi](classes/AccountsStalenessApi.md)
- [Configuration](classes/Configuration.md)
- [GroupsApi](classes/GroupsApi.md)
- [HostsApi](classes/HostsApi.md)
- [ResourceTypesApi](classes/ResourceTypesApi.md)
- [SystemProfileApi](classes/SystemProfileApi.md)
- [TagsApi](classes/TagsApi.md)

### Interfaces

- [ActiveTag](interfaces/ActiveTag.md)
- [ActiveTags](interfaces/ActiveTags.md)
- [ActiveTagsAllOf](interfaces/ActiveTagsAllOf.md)
- [AssignmentRuleIn](interfaces/AssignmentRuleIn.md)
- [AssignmentRuleOut](interfaces/AssignmentRuleOut.md)
- [AssignmentRuleQueryOutput](interfaces/AssignmentRuleQueryOutput.md)
- [AssignmentRuleQueryOutputAllOf](interfaces/AssignmentRuleQueryOutputAllOf.md)
- [CanonicalFactsIn](interfaces/CanonicalFactsIn.md)
- [CanonicalFactsInAllOf](interfaces/CanonicalFactsInAllOf.md)
- [CanonicalFactsOut](interfaces/CanonicalFactsOut.md)
- [ConfigurationParameters](interfaces/ConfigurationParameters.md)
- [CreateCheckIn](interfaces/CreateCheckIn.md)
- [CreateCheckInAllOf](interfaces/CreateCheckInAllOf.md)
- [DiskDevice](interfaces/DiskDevice.md)
- [DnfModule](interfaces/DnfModule.md)
- [FactSet](interfaces/FactSet.md)
- [GroupIn](interfaces/GroupIn.md)
- [GroupOut](interfaces/GroupOut.md)
- [GroupOutWithHostCount](interfaces/GroupOutWithHostCount.md)
- [GroupOutWithHostCountAllOf](interfaces/GroupOutWithHostCountAllOf.md)
- [GroupQueryOutput](interfaces/GroupQueryOutput.md)
- [GroupQueryOutputAllOf](interfaces/GroupQueryOutputAllOf.md)
- [HostOut](interfaces/HostOut.md)
- [HostOutAllOf](interfaces/HostOutAllOf.md)
- [HostQueryOutput](interfaces/HostQueryOutput.md)
- [HostQueryOutputAllOf](interfaces/HostQueryOutputAllOf.md)
- [HostSystemProfileOut](interfaces/HostSystemProfileOut.md)
- [InstalledProduct](interfaces/InstalledProduct.md)
- [InterSystemsRunningInstance](interfaces/InterSystemsRunningInstance.md)
- [Links](interfaces/Links.md)
- [Meta](interfaces/Meta.md)
- [NetworkInterface](interfaces/NetworkInterface.md)
- [PaginationOut](interfaces/PaginationOut.md)
- [PatchHostIn](interfaces/PatchHostIn.md)
- [PerReporterStaleness](interfaces/PerReporterStaleness.md)
- [RPMOSTreeDeployment](interfaces/RPMOSTreeDeployment.md)
- [ResourceTypesGroupsQueryOutput](interfaces/ResourceTypesGroupsQueryOutput.md)
- [ResourceTypesGroupsQueryOutputAllOf](interfaces/ResourceTypesGroupsQueryOutputAllOf.md)
- [ResourceTypesOut](interfaces/ResourceTypesOut.md)
- [ResourceTypesPaginationOut](interfaces/ResourceTypesPaginationOut.md)
- [ResourceTypesQueryOutput](interfaces/ResourceTypesQueryOutput.md)
- [ResourceTypesQueryOutputAllOf](interfaces/ResourceTypesQueryOutputAllOf.md)
- [StalenessIn](interfaces/StalenessIn.md)
- [StalenessOutput](interfaces/StalenessOutput.md)
- [StalenessOutputAllOf](interfaces/StalenessOutputAllOf.md)
- [StructuredTag](interfaces/StructuredTag.md)
- [SystemProfile](interfaces/SystemProfile.md)
- [SystemProfileAnsible](interfaces/SystemProfileAnsible.md)
- [SystemProfileBootcStatus](interfaces/SystemProfileBootcStatus.md)
- [SystemProfileBootcStatusBooted](interfaces/SystemProfileBootcStatusBooted.md)
- [SystemProfileByHostOut](interfaces/SystemProfileByHostOut.md)
- [SystemProfileByHostOutAllOf](interfaces/SystemProfileByHostOutAllOf.md)
- [SystemProfileConversions](interfaces/SystemProfileConversions.md)
- [SystemProfileDiskDevice](interfaces/SystemProfileDiskDevice.md)
- [SystemProfileDnfModule](interfaces/SystemProfileDnfModule.md)
- [SystemProfileInstalledProduct](interfaces/SystemProfileInstalledProduct.md)
- [SystemProfileIntersystems](interfaces/SystemProfileIntersystems.md)
- [SystemProfileMssql](interfaces/SystemProfileMssql.md)
- [SystemProfileNetworkInterface](interfaces/SystemProfileNetworkInterface.md)
- [SystemProfileOperatingSystem](interfaces/SystemProfileOperatingSystem.md)
- [SystemProfileOperatingSystemOut](interfaces/SystemProfileOperatingSystemOut.md)
- [SystemProfileOperatingSystemOutResults](interfaces/SystemProfileOperatingSystemOutResults.md)
- [SystemProfileOperatingSystemOutValue](interfaces/SystemProfileOperatingSystemOutValue.md)
- [SystemProfileRhsm](interfaces/SystemProfileRhsm.md)
- [SystemProfileSap](interfaces/SystemProfileSap.md)
- [SystemProfileSapSystemOut](interfaces/SystemProfileSapSystemOut.md)
- [SystemProfileSapSystemOutResults](interfaces/SystemProfileSapSystemOutResults.md)
- [SystemProfileSystemPurpose](interfaces/SystemProfileSystemPurpose.md)
- [SystemProfileSystemd](interfaces/SystemProfileSystemd.md)
- [SystemProfileThirdPartyServices](interfaces/SystemProfileThirdPartyServices.md)
- [SystemProfileThirdPartyServicesCrowdstrike](interfaces/SystemProfileThirdPartyServicesCrowdstrike.md)
- [SystemProfileYumRepo](interfaces/SystemProfileYumRepo.md)
- [TagCountOut](interfaces/TagCountOut.md)
- [TagCountOutAllOf](interfaces/TagCountOutAllOf.md)
- [TagsOut](interfaces/TagsOut.md)
- [TagsOutAllOf](interfaces/TagsOutAllOf.md)
- [UnleashToggleOut](interfaces/UnleashToggleOut.md)
- [YumRepo](interfaces/YumRepo.md)

### Type Aliases

- [StalenessId](modules.md#stalenessid)

### Functions

- [AccountsStalenessApiAxiosParamCreator](modules.md#accountsstalenessapiaxiosparamcreator)
- [AccountsStalenessApiFactory](modules.md#accountsstalenessapifactory)
- [AccountsStalenessApiFp](modules.md#accountsstalenessapifp)
- [GroupsApiAxiosParamCreator](modules.md#groupsapiaxiosparamcreator)
- [GroupsApiFactory](modules.md#groupsapifactory)
- [GroupsApiFp](modules.md#groupsapifp)
- [HostsApiAxiosParamCreator](modules.md#hostsapiaxiosparamcreator)
- [HostsApiFactory](modules.md#hostsapifactory)
- [HostsApiFp](modules.md#hostsapifp)
- [ResourceTypesApiAxiosParamCreator](modules.md#resourcetypesapiaxiosparamcreator)
- [ResourceTypesApiFactory](modules.md#resourcetypesapifactory)
- [ResourceTypesApiFp](modules.md#resourcetypesapifp)
- [SystemProfileApiAxiosParamCreator](modules.md#systemprofileapiaxiosparamcreator)
- [SystemProfileApiFactory](modules.md#systemprofileapifactory)
- [SystemProfileApiFp](modules.md#systemprofileapifp)
- [TagsApiAxiosParamCreator](modules.md#tagsapiaxiosparamcreator)
- [TagsApiFactory](modules.md#tagsapifactory)
- [TagsApiFp](modules.md#tagsapifp)

## Type Aliases

### StalenessId

Ƭ **StalenessId**: [`SystemDefaultId`](enums/SystemDefaultId.md) \| `string`

**`Export`**

#### Defined in

[api.ts:1412](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1412)

## Functions

### AccountsStalenessApiAxiosParamCreator

▸ **AccountsStalenessApiAxiosParamCreator**(`configuration?`): `Object`

AccountsStalenessApi - axios parameter creator

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type | Description |
| :------ | :------ | :------ |
| `apiStalenessCreateStaleness` | (`stalenessIn`: [`StalenessIn`](interfaces/StalenessIn.md), `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `apiStalenessDeleteStaleness` | (`options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `apiStalenessGetDefaultStaleness` | (`options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `apiStalenessGetStaleness` | (`options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `apiStalenessUpdateStaleness` | (`stalenessIn`: [`StalenessIn`](interfaces/StalenessIn.md), `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |

**`Export`**

#### Defined in

[api.ts:2885](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L2885)

___

### AccountsStalenessApiFactory

▸ **AccountsStalenessApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

AccountsStalenessApi - factory interface

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
| `apiStalenessCreateStaleness` | (`stalenessIn`: [`StalenessIn`](interfaces/StalenessIn.md), `options?`: `any`) => `AxiosPromise`\<[`StalenessOutput`](interfaces/StalenessOutput.md)\> |
| `apiStalenessDeleteStaleness` | (`options?`: `any`) => `AxiosPromise`\<`void`\> |
| `apiStalenessGetDefaultStaleness` | (`options?`: `any`) => `AxiosPromise`\<[`StalenessOutput`](interfaces/StalenessOutput.md)\> |
| `apiStalenessGetStaleness` | (`options?`: `any`) => `AxiosPromise`\<[`StalenessOutput`](interfaces/StalenessOutput.md)\> |
| `apiStalenessUpdateStaleness` | (`stalenessIn`: [`StalenessIn`](interfaces/StalenessIn.md), `options?`: `any`) => `AxiosPromise`\<[`StalenessOutput`](interfaces/StalenessOutput.md)\> |

**`Export`**

#### Defined in

[api.ts:3223](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L3223)

___

### AccountsStalenessApiFp

▸ **AccountsStalenessApiFp**(`configuration?`): `Object`

AccountsStalenessApi - functional programming interface

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `apiStalenessCreateStaleness` | (`stalenessIn`: [`StalenessIn`](interfaces/StalenessIn.md), `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`StalenessOutput`](interfaces/StalenessOutput.md)\>\> |
| `apiStalenessDeleteStaleness` | (`options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<`void`\>\> |
| `apiStalenessGetDefaultStaleness` | (`options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`StalenessOutput`](interfaces/StalenessOutput.md)\>\> |
| `apiStalenessGetStaleness` | (`options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`StalenessOutput`](interfaces/StalenessOutput.md)\>\> |
| `apiStalenessUpdateStaleness` | (`stalenessIn`: [`StalenessIn`](interfaces/StalenessIn.md), `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`StalenessOutput`](interfaces/StalenessOutput.md)\>\> |

**`Export`**

#### Defined in

[api.ts:3147](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L3147)

___

### GroupsApiAxiosParamCreator

▸ **GroupsApiAxiosParamCreator**(`configuration?`): `Object`

GroupsApi - axios parameter creator

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type | Description |
| :------ | :------ | :------ |
| `apiAssignmentRuleCreateAssignmentRule` | (`assignmentRuleIn`: [`AssignmentRuleIn`](interfaces/AssignmentRuleIn.md), `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `apiAssignmentRuleGetAssignmentRulesById` | (`assignmentRuleIdList`: `string`[], `perPage?`: `number`, `page?`: `number`, `orderBy?`: ``"name"`` \| ``"group_id"``, `orderHow?`: ``"ASC"`` \| ``"DESC"``, `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `apiAssignmentRuleGetAssignmentRulesList` | (`name?`: `string`, `perPage?`: `number`, `page?`: `number`, `orderBy?`: ``"name"`` \| ``"group_id"``, `orderHow?`: ``"ASC"`` \| ``"DESC"``, `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `apiGroupCreateGroup` | (`groupIn`: [`GroupIn`](interfaces/GroupIn.md), `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `apiGroupDeleteGroups` | (`groupIdList`: `string`[], `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `apiGroupDeleteHostsFromDifferentGroups` | (`hostIdList`: `string`[], `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `apiGroupGetGroupList` | (`name?`: `string`, `perPage?`: `number`, `page?`: `number`, `orderBy?`: ``"name"`` \| ``"host_count"`` \| ``"updated"``, `orderHow?`: ``"ASC"`` \| ``"DESC"``, `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `apiGroupGetGroupsById` | (`groupIdList`: `string`[], `perPage?`: `number`, `page?`: `number`, `orderBy?`: ``"name"`` \| ``"host_count"`` \| ``"updated"``, `orderHow?`: ``"ASC"`` \| ``"DESC"``, `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `apiGroupPatchGroupById` | (`groupId`: `string`, `groupIn`: [`GroupIn`](interfaces/GroupIn.md), `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `apiHostGroupAddHostListToGroup` | (`groupId`: `string`, `requestBody`: `string`[], `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `apiHostGroupDeleteHostsFromGroup` | (`groupId`: `string`, `hostIdList`: `string`[], `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |

**`Export`**

#### Defined in

[api.ts:3346](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L3346)

___

### GroupsApiFactory

▸ **GroupsApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

GroupsApi - factory interface

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
| `apiAssignmentRuleCreateAssignmentRule` | (`assignmentRuleIn`: [`AssignmentRuleIn`](interfaces/AssignmentRuleIn.md), `options?`: `any`) => `AxiosPromise`\<[`AssignmentRuleOut`](interfaces/AssignmentRuleOut.md)\> |
| `apiAssignmentRuleGetAssignmentRulesById` | (`assignmentRuleIdList`: `string`[], `perPage?`: `number`, `page?`: `number`, `orderBy?`: ``"name"`` \| ``"group_id"``, `orderHow?`: ``"ASC"`` \| ``"DESC"``, `options?`: `any`) => `AxiosPromise`\<[`AssignmentRuleQueryOutput`](interfaces/AssignmentRuleQueryOutput.md)\> |
| `apiAssignmentRuleGetAssignmentRulesList` | (`name?`: `string`, `perPage?`: `number`, `page?`: `number`, `orderBy?`: ``"name"`` \| ``"group_id"``, `orderHow?`: ``"ASC"`` \| ``"DESC"``, `options?`: `any`) => `AxiosPromise`\<[`AssignmentRuleQueryOutput`](interfaces/AssignmentRuleQueryOutput.md)\> |
| `apiGroupCreateGroup` | (`groupIn`: [`GroupIn`](interfaces/GroupIn.md), `options?`: `any`) => `AxiosPromise`\<[`GroupOutWithHostCount`](interfaces/GroupOutWithHostCount.md)\> |
| `apiGroupDeleteGroups` | (`groupIdList`: `string`[], `options?`: `any`) => `AxiosPromise`\<`void`\> |
| `apiGroupDeleteHostsFromDifferentGroups` | (`hostIdList`: `string`[], `options?`: `any`) => `AxiosPromise`\<`void`\> |
| `apiGroupGetGroupList` | (`name?`: `string`, `perPage?`: `number`, `page?`: `number`, `orderBy?`: ``"name"`` \| ``"host_count"`` \| ``"updated"``, `orderHow?`: ``"ASC"`` \| ``"DESC"``, `options?`: `any`) => `AxiosPromise`\<[`GroupQueryOutput`](interfaces/GroupQueryOutput.md)\> |
| `apiGroupGetGroupsById` | (`groupIdList`: `string`[], `perPage?`: `number`, `page?`: `number`, `orderBy?`: ``"name"`` \| ``"host_count"`` \| ``"updated"``, `orderHow?`: ``"ASC"`` \| ``"DESC"``, `options?`: `any`) => `AxiosPromise`\<[`GroupQueryOutput`](interfaces/GroupQueryOutput.md)\> |
| `apiGroupPatchGroupById` | (`groupId`: `string`, `groupIn`: [`GroupIn`](interfaces/GroupIn.md), `options?`: `any`) => `AxiosPromise`\<[`GroupOutWithHostCount`](interfaces/GroupOutWithHostCount.md)\> |
| `apiHostGroupAddHostListToGroup` | (`groupId`: `string`, `requestBody`: `string`[], `options?`: `any`) => `AxiosPromise`\<[`GroupOutWithHostCount`](interfaces/GroupOutWithHostCount.md)\> |
| `apiHostGroupDeleteHostsFromGroup` | (`groupId`: `string`, `hostIdList`: `string`[], `options?`: `any`) => `AxiosPromise`\<`void`\> |

**`Export`**

#### Defined in

[api.ts:4147](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L4147)

___

### GroupsApiFp

▸ **GroupsApiFp**(`configuration?`): `Object`

GroupsApi - functional programming interface

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `apiAssignmentRuleCreateAssignmentRule` | (`assignmentRuleIn`: [`AssignmentRuleIn`](interfaces/AssignmentRuleIn.md), `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`AssignmentRuleOut`](interfaces/AssignmentRuleOut.md)\>\> |
| `apiAssignmentRuleGetAssignmentRulesById` | (`assignmentRuleIdList`: `string`[], `perPage?`: `number`, `page?`: `number`, `orderBy?`: ``"name"`` \| ``"group_id"``, `orderHow?`: ``"ASC"`` \| ``"DESC"``, `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`AssignmentRuleQueryOutput`](interfaces/AssignmentRuleQueryOutput.md)\>\> |
| `apiAssignmentRuleGetAssignmentRulesList` | (`name?`: `string`, `perPage?`: `number`, `page?`: `number`, `orderBy?`: ``"name"`` \| ``"group_id"``, `orderHow?`: ``"ASC"`` \| ``"DESC"``, `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`AssignmentRuleQueryOutput`](interfaces/AssignmentRuleQueryOutput.md)\>\> |
| `apiGroupCreateGroup` | (`groupIn`: [`GroupIn`](interfaces/GroupIn.md), `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`GroupOutWithHostCount`](interfaces/GroupOutWithHostCount.md)\>\> |
| `apiGroupDeleteGroups` | (`groupIdList`: `string`[], `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<`void`\>\> |
| `apiGroupDeleteHostsFromDifferentGroups` | (`hostIdList`: `string`[], `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<`void`\>\> |
| `apiGroupGetGroupList` | (`name?`: `string`, `perPage?`: `number`, `page?`: `number`, `orderBy?`: ``"name"`` \| ``"host_count"`` \| ``"updated"``, `orderHow?`: ``"ASC"`` \| ``"DESC"``, `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`GroupQueryOutput`](interfaces/GroupQueryOutput.md)\>\> |
| `apiGroupGetGroupsById` | (`groupIdList`: `string`[], `perPage?`: `number`, `page?`: `number`, `orderBy?`: ``"name"`` \| ``"host_count"`` \| ``"updated"``, `orderHow?`: ``"ASC"`` \| ``"DESC"``, `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`GroupQueryOutput`](interfaces/GroupQueryOutput.md)\>\> |
| `apiGroupPatchGroupById` | (`groupId`: `string`, `groupIn`: [`GroupIn`](interfaces/GroupIn.md), `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`GroupOutWithHostCount`](interfaces/GroupOutWithHostCount.md)\>\> |
| `apiHostGroupAddHostListToGroup` | (`groupId`: `string`, `requestBody`: `string`[], `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`GroupOutWithHostCount`](interfaces/GroupOutWithHostCount.md)\>\> |
| `apiHostGroupDeleteHostsFromGroup` | (`groupId`: `string`, `hostIdList`: `string`[], `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<`void`\>\> |

**`Export`**

#### Defined in

[api.ts:3965](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L3965)

___

### HostsApiAxiosParamCreator

▸ **HostsApiAxiosParamCreator**(`configuration?`): `Object`

HostsApi - axios parameter creator

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type | Description |
| :------ | :------ | :------ |
| `apiHostDeleteAllHosts` | (`confirmDeleteAll?`: `boolean`, `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `apiHostDeleteHostById` | (`hostIdList`: `string`[], `branchId?`: `string`, `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `apiHostDeleteHostsByFilter` | (`displayName?`: `string`, `fqdn?`: `string`, `hostnameOrId?`: `string`, `insightsId?`: `string`, `providerId?`: `string`, `providerType?`: ``"alibaba"`` \| ``"aws"`` \| ``"azure"`` \| ``"gcp"`` \| ``"ibm"``, `updatedStart?`: `string`, `updatedEnd?`: `string`, `groupName?`: `string`[], `registeredWith?`: (``"insights"`` \| ``"yupana"`` \| ``"satellite"`` \| ``"discovery"`` \| ``"puptoo"`` \| ``"rhsm-conduit"`` \| ``"cloud-connector"`` \| ``"!yupana"`` \| ``"!satellite"`` \| ``"!discovery"`` \| ``"!puptoo"`` \| ``"!rhsm-conduit"`` \| ``"!cloud-connector"``)[], `staleness?`: (``"fresh"`` \| ``"stale"`` \| ``"stale_warning"`` \| ``"unknown"``)[], `tags?`: `string`[], `filter?`: \{ `[key: string]`: `object`;  }, `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `apiHostGetHostById` | (`hostIdList`: `string`[], `branchId?`: `string`, `perPage?`: `number`, `page?`: `number`, `orderBy?`: ``"updated"`` \| ``"display_name"`` \| ``"group_name"`` \| ``"operating_system"``, `orderHow?`: ``"ASC"`` \| ``"DESC"``, `fields?`: \{ `[key: string]`: `object`;  }, `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `apiHostGetHostList` | (`displayName?`: `string`, `fqdn?`: `string`, `hostnameOrId?`: `string`, `insightsId?`: `string`, `providerId?`: `string`, `providerType?`: ``"alibaba"`` \| ``"aws"`` \| ``"azure"`` \| ``"gcp"`` \| ``"ibm"``, `updatedStart?`: `string`, `updatedEnd?`: `string`, `groupName?`: `string`[], `branchId?`: `string`, `perPage?`: `number`, `page?`: `number`, `orderBy?`: ``"updated"`` \| ``"display_name"`` \| ``"group_name"`` \| ``"operating_system"``, `orderHow?`: ``"ASC"`` \| ``"DESC"``, `staleness?`: (``"fresh"`` \| ``"stale"`` \| ``"stale_warning"`` \| ``"unknown"``)[], `tags?`: `string`[], `registeredWith?`: (``"insights"`` \| ``"yupana"`` \| ``"satellite"`` \| ``"discovery"`` \| ``"puptoo"`` \| ``"rhsm-conduit"`` \| ``"cloud-connector"`` \| ``"!yupana"`` \| ``"!satellite"`` \| ``"!discovery"`` \| ``"!puptoo"`` \| ``"!rhsm-conduit"`` \| ``"!cloud-connector"``)[], `filter?`: \{ `[key: string]`: `object`;  }, `fields?`: \{ `[key: string]`: `object`;  }, `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `apiHostGetHostSystemProfileById` | (`hostIdList`: `string`[], `perPage?`: `number`, `page?`: `number`, `orderBy?`: ``"updated"`` \| ``"display_name"`` \| ``"group_name"`` \| ``"operating_system"``, `orderHow?`: ``"ASC"`` \| ``"DESC"``, `branchId?`: `string`, `fields?`: \{ `[key: string]`: `object`;  }, `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `apiHostGetHostTagCount` | (`hostIdList`: `string`[], `perPage?`: `number`, `page?`: `number`, `orderBy?`: ``"updated"`` \| ``"display_name"`` \| ``"group_name"`` \| ``"operating_system"``, `orderHow?`: ``"ASC"`` \| ``"DESC"``, `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `apiHostGetHostTags` | (`hostIdList`: `string`[], `perPage?`: `number`, `page?`: `number`, `orderBy?`: ``"updated"`` \| ``"display_name"`` \| ``"group_name"`` \| ``"operating_system"``, `orderHow?`: ``"ASC"`` \| ``"DESC"``, `search?`: `string`, `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `apiHostHostCheckin` | (`createCheckIn`: [`CreateCheckIn`](interfaces/CreateCheckIn.md), `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `apiHostMergeFacts` | (`hostIdList`: `string`[], `namespace`: `string`, `body`: `object`, `branchId?`: `string`, `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `apiHostPatchHostById` | (`hostIdList`: `string`[], `patchHostIn`: [`PatchHostIn`](interfaces/PatchHostIn.md), `branchId?`: `string`, `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `apiHostReplaceFacts` | (`hostIdList`: `string`[], `namespace`: `string`, `body`: `object`, `branchId?`: `string`, `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |

**`Export`**

#### Defined in

[api.ts:4446](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L4446)

___

### HostsApiFactory

▸ **HostsApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

HostsApi - factory interface

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
| `apiHostDeleteAllHosts` | (`confirmDeleteAll?`: `boolean`, `options?`: `any`) => `AxiosPromise`\<`void`\> |
| `apiHostDeleteHostById` | (`hostIdList`: `string`[], `branchId?`: `string`, `options?`: `any`) => `AxiosPromise`\<`void`\> |
| `apiHostDeleteHostsByFilter` | (`displayName?`: `string`, `fqdn?`: `string`, `hostnameOrId?`: `string`, `insightsId?`: `string`, `providerId?`: `string`, `providerType?`: ``"alibaba"`` \| ``"aws"`` \| ``"azure"`` \| ``"gcp"`` \| ``"ibm"``, `updatedStart?`: `string`, `updatedEnd?`: `string`, `groupName?`: `string`[], `registeredWith?`: (``"insights"`` \| ``"yupana"`` \| ``"satellite"`` \| ``"discovery"`` \| ``"puptoo"`` \| ``"rhsm-conduit"`` \| ``"cloud-connector"`` \| ``"!yupana"`` \| ``"!satellite"`` \| ``"!discovery"`` \| ``"!puptoo"`` \| ``"!rhsm-conduit"`` \| ``"!cloud-connector"``)[], `staleness?`: (``"fresh"`` \| ``"stale"`` \| ``"stale_warning"`` \| ``"unknown"``)[], `tags?`: `string`[], `filter?`: \{ `[key: string]`: `object`;  }, `options?`: `any`) => `AxiosPromise`\<`void`\> |
| `apiHostGetHostById` | (`hostIdList`: `string`[], `branchId?`: `string`, `perPage?`: `number`, `page?`: `number`, `orderBy?`: ``"updated"`` \| ``"display_name"`` \| ``"group_name"`` \| ``"operating_system"``, `orderHow?`: ``"ASC"`` \| ``"DESC"``, `fields?`: \{ `[key: string]`: `object`;  }, `options?`: `any`) => `AxiosPromise`\<[`HostQueryOutput`](interfaces/HostQueryOutput.md)\> |
| `apiHostGetHostList` | (`displayName?`: `string`, `fqdn?`: `string`, `hostnameOrId?`: `string`, `insightsId?`: `string`, `providerId?`: `string`, `providerType?`: ``"alibaba"`` \| ``"aws"`` \| ``"azure"`` \| ``"gcp"`` \| ``"ibm"``, `updatedStart?`: `string`, `updatedEnd?`: `string`, `groupName?`: `string`[], `branchId?`: `string`, `perPage?`: `number`, `page?`: `number`, `orderBy?`: ``"updated"`` \| ``"display_name"`` \| ``"group_name"`` \| ``"operating_system"``, `orderHow?`: ``"ASC"`` \| ``"DESC"``, `staleness?`: (``"fresh"`` \| ``"stale"`` \| ``"stale_warning"`` \| ``"unknown"``)[], `tags?`: `string`[], `registeredWith?`: (``"insights"`` \| ``"yupana"`` \| ``"satellite"`` \| ``"discovery"`` \| ``"puptoo"`` \| ``"rhsm-conduit"`` \| ``"cloud-connector"`` \| ``"!yupana"`` \| ``"!satellite"`` \| ``"!discovery"`` \| ``"!puptoo"`` \| ``"!rhsm-conduit"`` \| ``"!cloud-connector"``)[], `filter?`: \{ `[key: string]`: `object`;  }, `fields?`: \{ `[key: string]`: `object`;  }, `options?`: `any`) => `AxiosPromise`\<[`HostQueryOutput`](interfaces/HostQueryOutput.md)\> |
| `apiHostGetHostSystemProfileById` | (`hostIdList`: `string`[], `perPage?`: `number`, `page?`: `number`, `orderBy?`: ``"updated"`` \| ``"display_name"`` \| ``"group_name"`` \| ``"operating_system"``, `orderHow?`: ``"ASC"`` \| ``"DESC"``, `branchId?`: `string`, `fields?`: \{ `[key: string]`: `object`;  }, `options?`: `any`) => `AxiosPromise`\<[`SystemProfileByHostOut`](interfaces/SystemProfileByHostOut.md)\> |
| `apiHostGetHostTagCount` | (`hostIdList`: `string`[], `perPage?`: `number`, `page?`: `number`, `orderBy?`: ``"updated"`` \| ``"display_name"`` \| ``"group_name"`` \| ``"operating_system"``, `orderHow?`: ``"ASC"`` \| ``"DESC"``, `options?`: `any`) => `AxiosPromise`\<[`TagCountOut`](interfaces/TagCountOut.md)\> |
| `apiHostGetHostTags` | (`hostIdList`: `string`[], `perPage?`: `number`, `page?`: `number`, `orderBy?`: ``"updated"`` \| ``"display_name"`` \| ``"group_name"`` \| ``"operating_system"``, `orderHow?`: ``"ASC"`` \| ``"DESC"``, `search?`: `string`, `options?`: `any`) => `AxiosPromise`\<[`TagsOut`](interfaces/TagsOut.md)\> |
| `apiHostHostCheckin` | (`createCheckIn`: [`CreateCheckIn`](interfaces/CreateCheckIn.md), `options?`: `any`) => `AxiosPromise`\<[`HostOut`](interfaces/HostOut.md)\> |
| `apiHostMergeFacts` | (`hostIdList`: `string`[], `namespace`: `string`, `body`: `object`, `branchId?`: `string`, `options?`: `any`) => `AxiosPromise`\<`void`\> |
| `apiHostPatchHostById` | (`hostIdList`: `string`[], `patchHostIn`: [`PatchHostIn`](interfaces/PatchHostIn.md), `branchId?`: `string`, `options?`: `any`) => `AxiosPromise`\<`void`\> |
| `apiHostReplaceFacts` | (`hostIdList`: `string`[], `namespace`: `string`, `body`: `object`, `branchId?`: `string`, `options?`: `any`) => `AxiosPromise`\<`void`\> |

**`Export`**

#### Defined in

[api.ts:5551](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L5551)

___

### HostsApiFp

▸ **HostsApiFp**(`configuration?`): `Object`

HostsApi - functional programming interface

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `apiHostDeleteAllHosts` | (`confirmDeleteAll?`: `boolean`, `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<`void`\>\> |
| `apiHostDeleteHostById` | (`hostIdList`: `string`[], `branchId?`: `string`, `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<`void`\>\> |
| `apiHostDeleteHostsByFilter` | (`displayName?`: `string`, `fqdn?`: `string`, `hostnameOrId?`: `string`, `insightsId?`: `string`, `providerId?`: `string`, `providerType?`: ``"alibaba"`` \| ``"aws"`` \| ``"azure"`` \| ``"gcp"`` \| ``"ibm"``, `updatedStart?`: `string`, `updatedEnd?`: `string`, `groupName?`: `string`[], `registeredWith?`: (``"insights"`` \| ``"yupana"`` \| ``"satellite"`` \| ``"discovery"`` \| ``"puptoo"`` \| ``"rhsm-conduit"`` \| ``"cloud-connector"`` \| ``"!yupana"`` \| ``"!satellite"`` \| ``"!discovery"`` \| ``"!puptoo"`` \| ``"!rhsm-conduit"`` \| ``"!cloud-connector"``)[], `staleness?`: (``"fresh"`` \| ``"stale"`` \| ``"stale_warning"`` \| ``"unknown"``)[], `tags?`: `string`[], `filter?`: \{ `[key: string]`: `object`;  }, `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<`void`\>\> |
| `apiHostGetHostById` | (`hostIdList`: `string`[], `branchId?`: `string`, `perPage?`: `number`, `page?`: `number`, `orderBy?`: ``"updated"`` \| ``"display_name"`` \| ``"group_name"`` \| ``"operating_system"``, `orderHow?`: ``"ASC"`` \| ``"DESC"``, `fields?`: \{ `[key: string]`: `object`;  }, `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`HostQueryOutput`](interfaces/HostQueryOutput.md)\>\> |
| `apiHostGetHostList` | (`displayName?`: `string`, `fqdn?`: `string`, `hostnameOrId?`: `string`, `insightsId?`: `string`, `providerId?`: `string`, `providerType?`: ``"alibaba"`` \| ``"aws"`` \| ``"azure"`` \| ``"gcp"`` \| ``"ibm"``, `updatedStart?`: `string`, `updatedEnd?`: `string`, `groupName?`: `string`[], `branchId?`: `string`, `perPage?`: `number`, `page?`: `number`, `orderBy?`: ``"updated"`` \| ``"display_name"`` \| ``"group_name"`` \| ``"operating_system"``, `orderHow?`: ``"ASC"`` \| ``"DESC"``, `staleness?`: (``"fresh"`` \| ``"stale"`` \| ``"stale_warning"`` \| ``"unknown"``)[], `tags?`: `string`[], `registeredWith?`: (``"insights"`` \| ``"yupana"`` \| ``"satellite"`` \| ``"discovery"`` \| ``"puptoo"`` \| ``"rhsm-conduit"`` \| ``"cloud-connector"`` \| ``"!yupana"`` \| ``"!satellite"`` \| ``"!discovery"`` \| ``"!puptoo"`` \| ``"!rhsm-conduit"`` \| ``"!cloud-connector"``)[], `filter?`: \{ `[key: string]`: `object`;  }, `fields?`: \{ `[key: string]`: `object`;  }, `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`HostQueryOutput`](interfaces/HostQueryOutput.md)\>\> |
| `apiHostGetHostSystemProfileById` | (`hostIdList`: `string`[], `perPage?`: `number`, `page?`: `number`, `orderBy?`: ``"updated"`` \| ``"display_name"`` \| ``"group_name"`` \| ``"operating_system"``, `orderHow?`: ``"ASC"`` \| ``"DESC"``, `branchId?`: `string`, `fields?`: \{ `[key: string]`: `object`;  }, `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`SystemProfileByHostOut`](interfaces/SystemProfileByHostOut.md)\>\> |
| `apiHostGetHostTagCount` | (`hostIdList`: `string`[], `perPage?`: `number`, `page?`: `number`, `orderBy?`: ``"updated"`` \| ``"display_name"`` \| ``"group_name"`` \| ``"operating_system"``, `orderHow?`: ``"ASC"`` \| ``"DESC"``, `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`TagCountOut`](interfaces/TagCountOut.md)\>\> |
| `apiHostGetHostTags` | (`hostIdList`: `string`[], `perPage?`: `number`, `page?`: `number`, `orderBy?`: ``"updated"`` \| ``"display_name"`` \| ``"group_name"`` \| ``"operating_system"``, `orderHow?`: ``"ASC"`` \| ``"DESC"``, `search?`: `string`, `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`TagsOut`](interfaces/TagsOut.md)\>\> |
| `apiHostHostCheckin` | (`createCheckIn`: [`CreateCheckIn`](interfaces/CreateCheckIn.md), `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`HostOut`](interfaces/HostOut.md)\>\> |
| `apiHostMergeFacts` | (`hostIdList`: `string`[], `namespace`: `string`, `body`: `object`, `branchId?`: `string`, `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<`void`\>\> |
| `apiHostPatchHostById` | (`hostIdList`: `string`[], `patchHostIn`: [`PatchHostIn`](interfaces/PatchHostIn.md), `branchId?`: `string`, `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<`void`\>\> |
| `apiHostReplaceFacts` | (`hostIdList`: `string`[], `namespace`: `string`, `body`: `object`, `branchId?`: `string`, `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<`void`\>\> |

**`Export`**

#### Defined in

[api.ts:5314](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L5314)

___

### ResourceTypesApiAxiosParamCreator

▸ **ResourceTypesApiAxiosParamCreator**(`configuration?`): `Object`

ResourceTypesApi - axios parameter creator

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type | Description |
| :------ | :------ | :------ |
| `apiResourceTypeGetResourceTypeGroupsList` | (`name?`: `string`, `perPage?`: `number`, `page?`: `number`, `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `apiResourceTypeGetResourceTypeList` | (`perPage?`: `number`, `page?`: `number`, `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |

**`Export`**

#### Defined in

[api.ts:5954](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L5954)

___

### ResourceTypesApiFactory

▸ **ResourceTypesApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

ResourceTypesApi - factory interface

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
| `apiResourceTypeGetResourceTypeGroupsList` | (`name?`: `string`, `perPage?`: `number`, `page?`: `number`, `options?`: `any`) => `AxiosPromise`\<[`ResourceTypesGroupsQueryOutput`](interfaces/ResourceTypesGroupsQueryOutput.md)\> |
| `apiResourceTypeGetResourceTypeList` | (`perPage?`: `number`, `page?`: `number`, `options?`: `any`) => `AxiosPromise`\<[`ResourceTypesQueryOutput`](interfaces/ResourceTypesQueryOutput.md)\> |

**`Export`**

#### Defined in

[api.ts:6104](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L6104)

___

### ResourceTypesApiFp

▸ **ResourceTypesApiFp**(`configuration?`): `Object`

ResourceTypesApi - functional programming interface

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `apiResourceTypeGetResourceTypeGroupsList` | (`name?`: `string`, `perPage?`: `number`, `page?`: `number`, `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`ResourceTypesGroupsQueryOutput`](interfaces/ResourceTypesGroupsQueryOutput.md)\>\> |
| `apiResourceTypeGetResourceTypeList` | (`perPage?`: `number`, `page?`: `number`, `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`ResourceTypesQueryOutput`](interfaces/ResourceTypesQueryOutput.md)\>\> |

**`Export`**

#### Defined in

[api.ts:6064](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L6064)

___

### SystemProfileApiAxiosParamCreator

▸ **SystemProfileApiAxiosParamCreator**(`configuration?`): `Object`

SystemProfileApi - axios parameter creator

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type | Description |
| :------ | :------ | :------ |
| `apiSystemProfileGetOperatingSystem` | (`tags?`: `string`[], `perPage?`: `number`, `page?`: `number`, `staleness?`: (``"fresh"`` \| ``"stale"`` \| ``"stale_warning"`` \| ``"unknown"``)[], `registeredWith?`: (``"insights"`` \| ``"yupana"`` \| ``"satellite"`` \| ``"discovery"`` \| ``"puptoo"`` \| ``"rhsm-conduit"`` \| ``"cloud-connector"`` \| ``"!yupana"`` \| ``"!satellite"`` \| ``"!discovery"`` \| ``"!puptoo"`` \| ``"!rhsm-conduit"`` \| ``"!cloud-connector"``)[], `filter?`: \{ `[key: string]`: `object`;  }, `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `apiSystemProfileGetSapSids` | (`search?`: `string`, `tags?`: `string`[], `perPage?`: `number`, `page?`: `number`, `staleness?`: (``"fresh"`` \| ``"stale"`` \| ``"stale_warning"`` \| ``"unknown"``)[], `registeredWith?`: (``"insights"`` \| ``"yupana"`` \| ``"satellite"`` \| ``"discovery"`` \| ``"puptoo"`` \| ``"rhsm-conduit"`` \| ``"cloud-connector"`` \| ``"!yupana"`` \| ``"!satellite"`` \| ``"!discovery"`` \| ``"!puptoo"`` \| ``"!rhsm-conduit"`` \| ``"!cloud-connector"``)[], `filter?`: \{ `[key: string]`: `object`;  }, `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `apiSystemProfileGetSapSystem` | (`tags?`: `string`[], `perPage?`: `number`, `page?`: `number`, `staleness?`: (``"fresh"`` \| ``"stale"`` \| ``"stale_warning"`` \| ``"unknown"``)[], `registeredWith?`: (``"insights"`` \| ``"yupana"`` \| ``"satellite"`` \| ``"discovery"`` \| ``"puptoo"`` \| ``"rhsm-conduit"`` \| ``"cloud-connector"`` \| ``"!yupana"`` \| ``"!satellite"`` \| ``"!discovery"`` \| ``"!puptoo"`` \| ``"!rhsm-conduit"`` \| ``"!cloud-connector"``)[], `filter?`: \{ `[key: string]`: `object`;  }, `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `apiSystemProfileValidateSchema` | (`repoBranch`: `string`, `repoFork?`: `string`, `days?`: `number`, `maxMessages?`: `number`, `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |

**`Export`**

#### Defined in

[api.ts:6173](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L6173)

___

### SystemProfileApiFactory

▸ **SystemProfileApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

SystemProfileApi - factory interface

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
| `apiSystemProfileGetOperatingSystem` | (`tags?`: `string`[], `perPage?`: `number`, `page?`: `number`, `staleness?`: (``"fresh"`` \| ``"stale"`` \| ``"stale_warning"`` \| ``"unknown"``)[], `registeredWith?`: (``"insights"`` \| ``"yupana"`` \| ``"satellite"`` \| ``"discovery"`` \| ``"puptoo"`` \| ``"rhsm-conduit"`` \| ``"cloud-connector"`` \| ``"!yupana"`` \| ``"!satellite"`` \| ``"!discovery"`` \| ``"!puptoo"`` \| ``"!rhsm-conduit"`` \| ``"!cloud-connector"``)[], `filter?`: \{ `[key: string]`: `object`;  }, `options?`: `any`) => `AxiosPromise`\<[`SystemProfileOperatingSystemOut`](interfaces/SystemProfileOperatingSystemOut.md)\> |
| `apiSystemProfileGetSapSids` | (`search?`: `string`, `tags?`: `string`[], `perPage?`: `number`, `page?`: `number`, `staleness?`: (``"fresh"`` \| ``"stale"`` \| ``"stale_warning"`` \| ``"unknown"``)[], `registeredWith?`: (``"insights"`` \| ``"yupana"`` \| ``"satellite"`` \| ``"discovery"`` \| ``"puptoo"`` \| ``"rhsm-conduit"`` \| ``"cloud-connector"`` \| ``"!yupana"`` \| ``"!satellite"`` \| ``"!discovery"`` \| ``"!puptoo"`` \| ``"!rhsm-conduit"`` \| ``"!cloud-connector"``)[], `filter?`: \{ `[key: string]`: `object`;  }, `options?`: `any`) => `AxiosPromise`\<[`SystemProfileSapSystemOut`](interfaces/SystemProfileSapSystemOut.md)\> |
| `apiSystemProfileGetSapSystem` | (`tags?`: `string`[], `perPage?`: `number`, `page?`: `number`, `staleness?`: (``"fresh"`` \| ``"stale"`` \| ``"stale_warning"`` \| ``"unknown"``)[], `registeredWith?`: (``"insights"`` \| ``"yupana"`` \| ``"satellite"`` \| ``"discovery"`` \| ``"puptoo"`` \| ``"rhsm-conduit"`` \| ``"cloud-connector"`` \| ``"!yupana"`` \| ``"!satellite"`` \| ``"!discovery"`` \| ``"!puptoo"`` \| ``"!rhsm-conduit"`` \| ``"!cloud-connector"``)[], `filter?`: \{ `[key: string]`: `object`;  }, `options?`: `any`) => `AxiosPromise`\<[`SystemProfileSapSystemOut`](interfaces/SystemProfileSapSystemOut.md)\> |
| `apiSystemProfileValidateSchema` | (`repoBranch`: `string`, `repoFork?`: `string`, `days?`: `number`, `maxMessages?`: `number`, `options?`: `any`) => `AxiosPromise`\<`void`\> |

**`Export`**

#### Defined in

[api.ts:6537](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L6537)

___

### SystemProfileApiFp

▸ **SystemProfileApiFp**(`configuration?`): `Object`

SystemProfileApi - functional programming interface

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `apiSystemProfileGetOperatingSystem` | (`tags?`: `string`[], `perPage?`: `number`, `page?`: `number`, `staleness?`: (``"fresh"`` \| ``"stale"`` \| ``"stale_warning"`` \| ``"unknown"``)[], `registeredWith?`: (``"insights"`` \| ``"yupana"`` \| ``"satellite"`` \| ``"discovery"`` \| ``"puptoo"`` \| ``"rhsm-conduit"`` \| ``"cloud-connector"`` \| ``"!yupana"`` \| ``"!satellite"`` \| ``"!discovery"`` \| ``"!puptoo"`` \| ``"!rhsm-conduit"`` \| ``"!cloud-connector"``)[], `filter?`: \{ `[key: string]`: `object`;  }, `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`SystemProfileOperatingSystemOut`](interfaces/SystemProfileOperatingSystemOut.md)\>\> |
| `apiSystemProfileGetSapSids` | (`search?`: `string`, `tags?`: `string`[], `perPage?`: `number`, `page?`: `number`, `staleness?`: (``"fresh"`` \| ``"stale"`` \| ``"stale_warning"`` \| ``"unknown"``)[], `registeredWith?`: (``"insights"`` \| ``"yupana"`` \| ``"satellite"`` \| ``"discovery"`` \| ``"puptoo"`` \| ``"rhsm-conduit"`` \| ``"cloud-connector"`` \| ``"!yupana"`` \| ``"!satellite"`` \| ``"!discovery"`` \| ``"!puptoo"`` \| ``"!rhsm-conduit"`` \| ``"!cloud-connector"``)[], `filter?`: \{ `[key: string]`: `object`;  }, `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`SystemProfileSapSystemOut`](interfaces/SystemProfileSapSystemOut.md)\>\> |
| `apiSystemProfileGetSapSystem` | (`tags?`: `string`[], `perPage?`: `number`, `page?`: `number`, `staleness?`: (``"fresh"`` \| ``"stale"`` \| ``"stale_warning"`` \| ``"unknown"``)[], `registeredWith?`: (``"insights"`` \| ``"yupana"`` \| ``"satellite"`` \| ``"discovery"`` \| ``"puptoo"`` \| ``"rhsm-conduit"`` \| ``"cloud-connector"`` \| ``"!yupana"`` \| ``"!satellite"`` \| ``"!discovery"`` \| ``"!puptoo"`` \| ``"!rhsm-conduit"`` \| ``"!cloud-connector"``)[], `filter?`: \{ `[key: string]`: `object`;  }, `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`SystemProfileSapSystemOut`](interfaces/SystemProfileSapSystemOut.md)\>\> |
| `apiSystemProfileValidateSchema` | (`repoBranch`: `string`, `repoFork?`: `string`, `days?`: `number`, `maxMessages?`: `number`, `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<`void`\>\> |

**`Export`**

#### Defined in

[api.ts:6453](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L6453)

___

### TagsApiAxiosParamCreator

▸ **TagsApiAxiosParamCreator**(`configuration?`): `Object`

TagsApi - axios parameter creator

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type | Description |
| :------ | :------ | :------ |
| `apiTagGetTags` | (`tags?`: `string`[], `orderBy?`: ``"tag"`` \| ``"count"``, `orderHow?`: ``"ASC"`` \| ``"DESC"``, `perPage?`: `number`, `page?`: `number`, `staleness?`: (``"fresh"`` \| ``"stale"`` \| ``"stale_warning"`` \| ``"unknown"``)[], `search?`: `string`, `displayName?`: `string`, `fqdn?`: `string`, `hostnameOrId?`: `string`, `insightsId?`: `string`, `providerId?`: `string`, `providerType?`: ``"alibaba"`` \| ``"aws"`` \| ``"azure"`` \| ``"gcp"`` \| ``"ibm"``, `updatedStart?`: `string`, `updatedEnd?`: `string`, `groupName?`: `string`[], `registeredWith?`: (``"insights"`` \| ``"yupana"`` \| ``"satellite"`` \| ``"discovery"`` \| ``"puptoo"`` \| ``"rhsm-conduit"`` \| ``"cloud-connector"`` \| ``"!yupana"`` \| ``"!satellite"`` \| ``"!discovery"`` \| ``"!puptoo"`` \| ``"!rhsm-conduit"`` \| ``"!cloud-connector"``)[], `filter?`: \{ `[key: string]`: `object`;  }, `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |

**`Export`**

#### Defined in

[api.ts:6682](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L6682)

___

### TagsApiFactory

▸ **TagsApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

TagsApi - factory interface

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
| `apiTagGetTags` | (`tags?`: `string`[], `orderBy?`: ``"tag"`` \| ``"count"``, `orderHow?`: ``"ASC"`` \| ``"DESC"``, `perPage?`: `number`, `page?`: `number`, `staleness?`: (``"fresh"`` \| ``"stale"`` \| ``"stale_warning"`` \| ``"unknown"``)[], `search?`: `string`, `displayName?`: `string`, `fqdn?`: `string`, `hostnameOrId?`: `string`, `insightsId?`: `string`, `providerId?`: `string`, `providerType?`: ``"alibaba"`` \| ``"aws"`` \| ``"azure"`` \| ``"gcp"`` \| ``"ibm"``, `updatedStart?`: `string`, `updatedEnd?`: `string`, `groupName?`: `string`[], `registeredWith?`: (``"insights"`` \| ``"yupana"`` \| ``"satellite"`` \| ``"discovery"`` \| ``"puptoo"`` \| ``"rhsm-conduit"`` \| ``"cloud-connector"`` \| ``"!yupana"`` \| ``"!satellite"`` \| ``"!discovery"`` \| ``"!puptoo"`` \| ``"!rhsm-conduit"`` \| ``"!cloud-connector"``)[], `filter?`: \{ `[key: string]`: `object`;  }, `options?`: `any`) => `AxiosPromise`\<[`ActiveTags`](interfaces/ActiveTags.md)\> |

**`Export`**

#### Defined in

[api.ts:6863](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L6863)

___

### TagsApiFp

▸ **TagsApiFp**(`configuration?`): `Object`

TagsApi - functional programming interface

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `apiTagGetTags` | (`tags?`: `string`[], `orderBy?`: ``"tag"`` \| ``"count"``, `orderHow?`: ``"ASC"`` \| ``"DESC"``, `perPage?`: `number`, `page?`: `number`, `staleness?`: (``"fresh"`` \| ``"stale"`` \| ``"stale_warning"`` \| ``"unknown"``)[], `search?`: `string`, `displayName?`: `string`, `fqdn?`: `string`, `hostnameOrId?`: `string`, `insightsId?`: `string`, `providerId?`: `string`, `providerType?`: ``"alibaba"`` \| ``"aws"`` \| ``"azure"`` \| ``"gcp"`` \| ``"ibm"``, `updatedStart?`: `string`, `updatedEnd?`: `string`, `groupName?`: `string`[], `registeredWith?`: (``"insights"`` \| ``"yupana"`` \| ``"satellite"`` \| ``"discovery"`` \| ``"puptoo"`` \| ``"rhsm-conduit"`` \| ``"cloud-connector"`` \| ``"!yupana"`` \| ``"!satellite"`` \| ``"!discovery"`` \| ``"!puptoo"`` \| ``"!rhsm-conduit"`` \| ``"!cloud-connector"``)[], `filter?`: \{ `[key: string]`: `object`;  }, `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`ActiveTags`](interfaces/ActiveTags.md)\>\> |

**`Export`**

#### Defined in

[api.ts:6823](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L6823)
