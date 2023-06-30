[@redhat-cloud-services/host-inventory-client](README.md) / Exports

# @redhat-cloud-services/host-inventory-client

## Table of contents

### Enumerations

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

- [Configuration](classes/Configuration.md)
- [DefaultApi](classes/DefaultApi.md)
- [GroupsApi](classes/GroupsApi.md)
- [HostsApi](classes/HostsApi.md)
- [ResourceTypesApi](classes/ResourceTypesApi.md)
- [SystemProfileApi](classes/SystemProfileApi.md)
- [TagsApi](classes/TagsApi.md)
- [UnleashApi](classes/UnleashApi.md)

### Interfaces

- [ActiveTag](interfaces/ActiveTag.md)
- [ActiveTags](interfaces/ActiveTags.md)
- [ActiveTagsAllOf](interfaces/ActiveTagsAllOf.md)
- [CanonicalFactsIn](interfaces/CanonicalFactsIn.md)
- [CanonicalFactsInAllOf](interfaces/CanonicalFactsInAllOf.md)
- [CanonicalFactsOut](interfaces/CanonicalFactsOut.md)
- [ConfigurationParameters](interfaces/ConfigurationParameters.md)
- [CreateCheckIn](interfaces/CreateCheckIn.md)
- [CreateCheckInAllOf](interfaces/CreateCheckInAllOf.md)
- [CreateHostOut](interfaces/CreateHostOut.md)
- [CreateHostOutAllOf](interfaces/CreateHostOutAllOf.md)
- [DiskDevice](interfaces/DiskDevice.md)
- [DnfModule](interfaces/DnfModule.md)
- [FactSet](interfaces/FactSet.md)
- [GroupIn](interfaces/GroupIn.md)
- [GroupInAllOf](interfaces/GroupInAllOf.md)
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
- [StructuredTag](interfaces/StructuredTag.md)
- [SystemProfile](interfaces/SystemProfile.md)
- [SystemProfileAnsible](interfaces/SystemProfileAnsible.md)
- [SystemProfileByHostOut](interfaces/SystemProfileByHostOut.md)
- [SystemProfileByHostOutAllOf](interfaces/SystemProfileByHostOutAllOf.md)
- [SystemProfileDiskDevice](interfaces/SystemProfileDiskDevice.md)
- [SystemProfileDnfModule](interfaces/SystemProfileDnfModule.md)
- [SystemProfileInstalledProduct](interfaces/SystemProfileInstalledProduct.md)
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
- [SystemProfileYumRepo](interfaces/SystemProfileYumRepo.md)
- [TagCountOut](interfaces/TagCountOut.md)
- [TagCountOutAllOf](interfaces/TagCountOutAllOf.md)
- [TagsOut](interfaces/TagsOut.md)
- [TagsOutAllOf](interfaces/TagsOutAllOf.md)
- [UnleashToggleOut](interfaces/UnleashToggleOut.md)
- [YumRepo](interfaces/YumRepo.md)

### Functions

- [DefaultApiAxiosParamCreator](modules.md#defaultapiaxiosparamcreator)
- [DefaultApiFactory](modules.md#defaultapifactory)
- [DefaultApiFp](modules.md#defaultapifp)
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
- [UnleashApiAxiosParamCreator](modules.md#unleashapiaxiosparamcreator)
- [UnleashApiFactory](modules.md#unleashapifactory)
- [UnleashApiFp](modules.md#unleashapifp)

## Functions

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
| `apiSystemProfileValidateSchema` | (`repoBranch`: `string`, `repoFork?`: `string`, `days?`: `number`, `maxMessages?`: `number`, `options?`: `any`) => `Promise`<`RequestArgs`\> |

#### Defined in

[api.ts:2497](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2497)

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
| `apiSystemProfileValidateSchema` | (`repoBranch`: `string`, `repoFork?`: `string`, `days?`: `number`, `maxMessages?`: `number`, `options?`: `any`) => `AxiosPromise`<`void`\> |

#### Defined in

[api.ts:2594](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2594)

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
| `apiSystemProfileValidateSchema` | (`repoBranch`: `string`, `repoFork?`: `string`, `days?`: `number`, `maxMessages?`: `number`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<`void`\>\> |

#### Defined in

[api.ts:2568](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2568)

___

### GroupsApiAxiosParamCreator

▸ **GroupsApiAxiosParamCreator**(`configuration?`): `Object`

GroupsApi - axios parameter creator

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `apiGroupCreateGroup` | (`groupIn`: [`GroupIn`](interfaces/GroupIn.md), `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `apiGroupDeleteGroups` | (`groupIdList`: `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `apiGroupGetGroupList` | (`name?`: `string`, `perPage?`: `number`, `page?`: `number`, `orderBy?`: ``"name"`` \| ``"host_ids"``, `orderHow?`: ``"ASC"`` \| ``"DESC"``, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `apiGroupGetGroupsById` | (`groupIdList`: `string`[], `perPage?`: `number`, `page?`: `number`, `orderBy?`: ``"name"`` \| ``"host_ids"``, `orderHow?`: ``"ASC"`` \| ``"DESC"``, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `apiGroupPatchGroupById` | (`groupId`: `string`, `groupIn`: [`GroupIn`](interfaces/GroupIn.md), `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `apiHostGroupAddHostListToGroup` | (`groupId`: `string`, `requestBody`: `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `apiHostGroupDeleteHostsFromGroup` | (`groupId`: `string`, `hostIdList`: `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |

#### Defined in

[api.ts:2641](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2641)

___

### GroupsApiFactory

▸ **GroupsApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

GroupsApi - factory interface

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
| `apiGroupCreateGroup` | (`groupIn`: [`GroupIn`](interfaces/GroupIn.md), `options?`: `any`) => `AxiosPromise`<[`GroupOutWithHostCount`](interfaces/GroupOutWithHostCount.md)\> |
| `apiGroupDeleteGroups` | (`groupIdList`: `string`[], `options?`: `any`) => `AxiosPromise`<`void`\> |
| `apiGroupGetGroupList` | (`name?`: `string`, `perPage?`: `number`, `page?`: `number`, `orderBy?`: ``"name"`` \| ``"host_ids"``, `orderHow?`: ``"ASC"`` \| ``"DESC"``, `options?`: `any`) => `AxiosPromise`<[`GroupQueryOutput`](interfaces/GroupQueryOutput.md)\> |
| `apiGroupGetGroupsById` | (`groupIdList`: `string`[], `perPage?`: `number`, `page?`: `number`, `orderBy?`: ``"name"`` \| ``"host_ids"``, `orderHow?`: ``"ASC"`` \| ``"DESC"``, `options?`: `any`) => `AxiosPromise`<[`GroupQueryOutput`](interfaces/GroupQueryOutput.md)\> |
| `apiGroupPatchGroupById` | (`groupId`: `string`, `groupIn`: [`GroupIn`](interfaces/GroupIn.md), `options?`: `any`) => `AxiosPromise`<[`GroupOutWithHostCount`](interfaces/GroupOutWithHostCount.md)\> |
| `apiHostGroupAddHostListToGroup` | (`groupId`: `string`, `requestBody`: `string`[], `options?`: `any`) => `AxiosPromise`<[`GroupOutWithHostCount`](interfaces/GroupOutWithHostCount.md)\> |
| `apiHostGroupDeleteHostsFromGroup` | (`groupId`: `string`, `hostIdList`: `string`[], `options?`: `any`) => `AxiosPromise`<`void`\> |

#### Defined in

[api.ts:3151](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L3151)

___

### GroupsApiFp

▸ **GroupsApiFp**(`configuration?`): `Object`

GroupsApi - functional programming interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `apiGroupCreateGroup` | (`groupIn`: [`GroupIn`](interfaces/GroupIn.md), `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`GroupOutWithHostCount`](interfaces/GroupOutWithHostCount.md)\>\> |
| `apiGroupDeleteGroups` | (`groupIdList`: `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<`void`\>\> |
| `apiGroupGetGroupList` | (`name?`: `string`, `perPage?`: `number`, `page?`: `number`, `orderBy?`: ``"name"`` \| ``"host_ids"``, `orderHow?`: ``"ASC"`` \| ``"DESC"``, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`GroupQueryOutput`](interfaces/GroupQueryOutput.md)\>\> |
| `apiGroupGetGroupsById` | (`groupIdList`: `string`[], `perPage?`: `number`, `page?`: `number`, `orderBy?`: ``"name"`` \| ``"host_ids"``, `orderHow?`: ``"ASC"`` \| ``"DESC"``, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`GroupQueryOutput`](interfaces/GroupQueryOutput.md)\>\> |
| `apiGroupPatchGroupById` | (`groupId`: `string`, `groupIn`: [`GroupIn`](interfaces/GroupIn.md), `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`GroupOutWithHostCount`](interfaces/GroupOutWithHostCount.md)\>\> |
| `apiHostGroupAddHostListToGroup` | (`groupId`: `string`, `requestBody`: `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`GroupOutWithHostCount`](interfaces/GroupOutWithHostCount.md)\>\> |
| `apiHostGroupDeleteHostsFromGroup` | (`groupId`: `string`, `hostIdList`: `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<`void`\>\> |

#### Defined in

[api.ts:3033](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L3033)

___

### HostsApiAxiosParamCreator

▸ **HostsApiAxiosParamCreator**(`configuration?`): `Object`

HostsApi - axios parameter creator

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `apiHostDeleteAllHosts` | (`confirmDeleteAll?`: `boolean`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `apiHostDeleteHostById` | (`hostIdList`: `string`[], `branchId?`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `apiHostDeleteHostsByFilter` | (`displayName?`: `string`, `fqdn?`: `string`, `hostnameOrId?`: `string`, `insightsId?`: `string`, `providerId?`: `string`, `providerType?`: ``"alibaba"`` \| ``"aws"`` \| ``"azure"`` \| ``"gcp"`` \| ``"ibm"``, `updatedStart?`: `string`, `updatedEnd?`: `string`, `groupName?`: `string`, `registeredWith?`: (``"insights"`` \| ``"yupana"`` \| ``"puptoo"`` \| ``"rhsm-conduit"`` \| ``"cloud-connector"`` \| ``"!yupana"`` \| ``"!puptoo"`` \| ``"!rhsm-conduit"`` \| ``"!cloud-connector"``)[], `staleness?`: (``"unknown"`` \| ``"fresh"`` \| ``"stale"`` \| ``"stale_warning"``)[], `tags?`: `string`[], `filter?`: { `[key: string]`: `object`;  }, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `apiHostGetHostById` | (`hostIdList`: `string`[], `branchId?`: `string`, `perPage?`: `number`, `page?`: `number`, `orderBy?`: ``"display_name"`` \| ``"updated"`` \| ``"operating_system"``, `orderHow?`: ``"ASC"`` \| ``"DESC"``, `fields?`: { `[key: string]`: `object`;  }, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `apiHostGetHostList` | (`displayName?`: `string`, `fqdn?`: `string`, `hostnameOrId?`: `string`, `insightsId?`: `string`, `providerId?`: `string`, `providerType?`: ``"alibaba"`` \| ``"aws"`` \| ``"azure"`` \| ``"gcp"`` \| ``"ibm"``, `updatedStart?`: `string`, `updatedEnd?`: `string`, `groupName?`: `string`, `branchId?`: `string`, `perPage?`: `number`, `page?`: `number`, `orderBy?`: ``"display_name"`` \| ``"updated"`` \| ``"operating_system"``, `orderHow?`: ``"ASC"`` \| ``"DESC"``, `staleness?`: (``"unknown"`` \| ``"fresh"`` \| ``"stale"`` \| ``"stale_warning"``)[], `tags?`: `string`[], `registeredWith?`: (``"insights"`` \| ``"yupana"`` \| ``"puptoo"`` \| ``"rhsm-conduit"`` \| ``"cloud-connector"`` \| ``"!yupana"`` \| ``"!puptoo"`` \| ``"!rhsm-conduit"`` \| ``"!cloud-connector"``)[], `filter?`: { `[key: string]`: `object`;  }, `fields?`: { `[key: string]`: `object`;  }, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `apiHostGetHostSystemProfileById` | (`hostIdList`: `string`[], `perPage?`: `number`, `page?`: `number`, `orderBy?`: ``"display_name"`` \| ``"updated"`` \| ``"operating_system"``, `orderHow?`: ``"ASC"`` \| ``"DESC"``, `branchId?`: `string`, `fields?`: { `[key: string]`: `object`;  }, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `apiHostGetHostTagCount` | (`hostIdList`: `string`[], `perPage?`: `number`, `page?`: `number`, `orderBy?`: ``"display_name"`` \| ``"updated"`` \| ``"operating_system"``, `orderHow?`: ``"ASC"`` \| ``"DESC"``, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `apiHostGetHostTags` | (`hostIdList`: `string`[], `perPage?`: `number`, `page?`: `number`, `orderBy?`: ``"display_name"`` \| ``"updated"`` \| ``"operating_system"``, `orderHow?`: ``"ASC"`` \| ``"DESC"``, `search?`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `apiHostHostCheckin` | (`createCheckIn`: [`CreateCheckIn`](interfaces/CreateCheckIn.md), `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `apiHostMergeFacts` | (`hostIdList`: `string`[], `namespace`: `string`, `body`: `object`, `branchId?`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `apiHostPatchHostById` | (`hostIdList`: `string`[], `patchHostIn`: [`PatchHostIn`](interfaces/PatchHostIn.md), `branchId?`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `apiHostReplaceFacts` | (`hostIdList`: `string`[], `namespace`: `string`, `body`: `object`, `branchId?`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |

#### Defined in

[api.ts:3346](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L3346)

___

### HostsApiFactory

▸ **HostsApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

HostsApi - factory interface

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
| `apiHostDeleteAllHosts` | (`confirmDeleteAll?`: `boolean`, `options?`: `any`) => `AxiosPromise`<`void`\> |
| `apiHostDeleteHostById` | (`hostIdList`: `string`[], `branchId?`: `string`, `options?`: `any`) => `AxiosPromise`<`void`\> |
| `apiHostDeleteHostsByFilter` | (`displayName?`: `string`, `fqdn?`: `string`, `hostnameOrId?`: `string`, `insightsId?`: `string`, `providerId?`: `string`, `providerType?`: ``"alibaba"`` \| ``"aws"`` \| ``"azure"`` \| ``"gcp"`` \| ``"ibm"``, `updatedStart?`: `string`, `updatedEnd?`: `string`, `groupName?`: `string`, `registeredWith?`: (``"insights"`` \| ``"yupana"`` \| ``"puptoo"`` \| ``"rhsm-conduit"`` \| ``"cloud-connector"`` \| ``"!yupana"`` \| ``"!puptoo"`` \| ``"!rhsm-conduit"`` \| ``"!cloud-connector"``)[], `staleness?`: (``"unknown"`` \| ``"fresh"`` \| ``"stale"`` \| ``"stale_warning"``)[], `tags?`: `string`[], `filter?`: { `[key: string]`: `object`;  }, `options?`: `any`) => `AxiosPromise`<`void`\> |
| `apiHostGetHostById` | (`hostIdList`: `string`[], `branchId?`: `string`, `perPage?`: `number`, `page?`: `number`, `orderBy?`: ``"display_name"`` \| ``"updated"`` \| ``"operating_system"``, `orderHow?`: ``"ASC"`` \| ``"DESC"``, `fields?`: { `[key: string]`: `object`;  }, `options?`: `any`) => `AxiosPromise`<[`HostQueryOutput`](interfaces/HostQueryOutput.md)\> |
| `apiHostGetHostList` | (`displayName?`: `string`, `fqdn?`: `string`, `hostnameOrId?`: `string`, `insightsId?`: `string`, `providerId?`: `string`, `providerType?`: ``"alibaba"`` \| ``"aws"`` \| ``"azure"`` \| ``"gcp"`` \| ``"ibm"``, `updatedStart?`: `string`, `updatedEnd?`: `string`, `groupName?`: `string`, `branchId?`: `string`, `perPage?`: `number`, `page?`: `number`, `orderBy?`: ``"display_name"`` \| ``"updated"`` \| ``"operating_system"``, `orderHow?`: ``"ASC"`` \| ``"DESC"``, `staleness?`: (``"unknown"`` \| ``"fresh"`` \| ``"stale"`` \| ``"stale_warning"``)[], `tags?`: `string`[], `registeredWith?`: (``"insights"`` \| ``"yupana"`` \| ``"puptoo"`` \| ``"rhsm-conduit"`` \| ``"cloud-connector"`` \| ``"!yupana"`` \| ``"!puptoo"`` \| ``"!rhsm-conduit"`` \| ``"!cloud-connector"``)[], `filter?`: { `[key: string]`: `object`;  }, `fields?`: { `[key: string]`: `object`;  }, `options?`: `any`) => `AxiosPromise`<[`HostQueryOutput`](interfaces/HostQueryOutput.md)\> |
| `apiHostGetHostSystemProfileById` | (`hostIdList`: `string`[], `perPage?`: `number`, `page?`: `number`, `orderBy?`: ``"display_name"`` \| ``"updated"`` \| ``"operating_system"``, `orderHow?`: ``"ASC"`` \| ``"DESC"``, `branchId?`: `string`, `fields?`: { `[key: string]`: `object`;  }, `options?`: `any`) => `AxiosPromise`<[`SystemProfileByHostOut`](interfaces/SystemProfileByHostOut.md)\> |
| `apiHostGetHostTagCount` | (`hostIdList`: `string`[], `perPage?`: `number`, `page?`: `number`, `orderBy?`: ``"display_name"`` \| ``"updated"`` \| ``"operating_system"``, `orderHow?`: ``"ASC"`` \| ``"DESC"``, `options?`: `any`) => `AxiosPromise`<[`TagCountOut`](interfaces/TagCountOut.md)\> |
| `apiHostGetHostTags` | (`hostIdList`: `string`[], `perPage?`: `number`, `page?`: `number`, `orderBy?`: ``"display_name"`` \| ``"updated"`` \| ``"operating_system"``, `orderHow?`: ``"ASC"`` \| ``"DESC"``, `search?`: `string`, `options?`: `any`) => `AxiosPromise`<[`TagsOut`](interfaces/TagsOut.md)\> |
| `apiHostHostCheckin` | (`createCheckIn`: [`CreateCheckIn`](interfaces/CreateCheckIn.md), `options?`: `any`) => `AxiosPromise`<[`CreateHostOut`](interfaces/CreateHostOut.md)\> |
| `apiHostMergeFacts` | (`hostIdList`: `string`[], `namespace`: `string`, `body`: `object`, `branchId?`: `string`, `options?`: `any`) => `AxiosPromise`<`void`\> |
| `apiHostPatchHostById` | (`hostIdList`: `string`[], `patchHostIn`: [`PatchHostIn`](interfaces/PatchHostIn.md), `branchId?`: `string`, `options?`: `any`) => `AxiosPromise`<`void`\> |
| `apiHostReplaceFacts` | (`hostIdList`: `string`[], `namespace`: `string`, `body`: `object`, `branchId?`: `string`, `options?`: `any`) => `AxiosPromise`<`void`\> |

#### Defined in

[api.ts:4451](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L4451)

___

### HostsApiFp

▸ **HostsApiFp**(`configuration?`): `Object`

HostsApi - functional programming interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `apiHostDeleteAllHosts` | (`confirmDeleteAll?`: `boolean`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<`void`\>\> |
| `apiHostDeleteHostById` | (`hostIdList`: `string`[], `branchId?`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<`void`\>\> |
| `apiHostDeleteHostsByFilter` | (`displayName?`: `string`, `fqdn?`: `string`, `hostnameOrId?`: `string`, `insightsId?`: `string`, `providerId?`: `string`, `providerType?`: ``"alibaba"`` \| ``"aws"`` \| ``"azure"`` \| ``"gcp"`` \| ``"ibm"``, `updatedStart?`: `string`, `updatedEnd?`: `string`, `groupName?`: `string`, `registeredWith?`: (``"insights"`` \| ``"yupana"`` \| ``"puptoo"`` \| ``"rhsm-conduit"`` \| ``"cloud-connector"`` \| ``"!yupana"`` \| ``"!puptoo"`` \| ``"!rhsm-conduit"`` \| ``"!cloud-connector"``)[], `staleness?`: (``"unknown"`` \| ``"fresh"`` \| ``"stale"`` \| ``"stale_warning"``)[], `tags?`: `string`[], `filter?`: { `[key: string]`: `object`;  }, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<`void`\>\> |
| `apiHostGetHostById` | (`hostIdList`: `string`[], `branchId?`: `string`, `perPage?`: `number`, `page?`: `number`, `orderBy?`: ``"display_name"`` \| ``"updated"`` \| ``"operating_system"``, `orderHow?`: ``"ASC"`` \| ``"DESC"``, `fields?`: { `[key: string]`: `object`;  }, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`HostQueryOutput`](interfaces/HostQueryOutput.md)\>\> |
| `apiHostGetHostList` | (`displayName?`: `string`, `fqdn?`: `string`, `hostnameOrId?`: `string`, `insightsId?`: `string`, `providerId?`: `string`, `providerType?`: ``"alibaba"`` \| ``"aws"`` \| ``"azure"`` \| ``"gcp"`` \| ``"ibm"``, `updatedStart?`: `string`, `updatedEnd?`: `string`, `groupName?`: `string`, `branchId?`: `string`, `perPage?`: `number`, `page?`: `number`, `orderBy?`: ``"display_name"`` \| ``"updated"`` \| ``"operating_system"``, `orderHow?`: ``"ASC"`` \| ``"DESC"``, `staleness?`: (``"unknown"`` \| ``"fresh"`` \| ``"stale"`` \| ``"stale_warning"``)[], `tags?`: `string`[], `registeredWith?`: (``"insights"`` \| ``"yupana"`` \| ``"puptoo"`` \| ``"rhsm-conduit"`` \| ``"cloud-connector"`` \| ``"!yupana"`` \| ``"!puptoo"`` \| ``"!rhsm-conduit"`` \| ``"!cloud-connector"``)[], `filter?`: { `[key: string]`: `object`;  }, `fields?`: { `[key: string]`: `object`;  }, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`HostQueryOutput`](interfaces/HostQueryOutput.md)\>\> |
| `apiHostGetHostSystemProfileById` | (`hostIdList`: `string`[], `perPage?`: `number`, `page?`: `number`, `orderBy?`: ``"display_name"`` \| ``"updated"`` \| ``"operating_system"``, `orderHow?`: ``"ASC"`` \| ``"DESC"``, `branchId?`: `string`, `fields?`: { `[key: string]`: `object`;  }, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`SystemProfileByHostOut`](interfaces/SystemProfileByHostOut.md)\>\> |
| `apiHostGetHostTagCount` | (`hostIdList`: `string`[], `perPage?`: `number`, `page?`: `number`, `orderBy?`: ``"display_name"`` \| ``"updated"`` \| ``"operating_system"``, `orderHow?`: ``"ASC"`` \| ``"DESC"``, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`TagCountOut`](interfaces/TagCountOut.md)\>\> |
| `apiHostGetHostTags` | (`hostIdList`: `string`[], `perPage?`: `number`, `page?`: `number`, `orderBy?`: ``"display_name"`` \| ``"updated"`` \| ``"operating_system"``, `orderHow?`: ``"ASC"`` \| ``"DESC"``, `search?`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`TagsOut`](interfaces/TagsOut.md)\>\> |
| `apiHostHostCheckin` | (`createCheckIn`: [`CreateCheckIn`](interfaces/CreateCheckIn.md), `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`CreateHostOut`](interfaces/CreateHostOut.md)\>\> |
| `apiHostMergeFacts` | (`hostIdList`: `string`[], `namespace`: `string`, `body`: `object`, `branchId?`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<`void`\>\> |
| `apiHostPatchHostById` | (`hostIdList`: `string`[], `patchHostIn`: [`PatchHostIn`](interfaces/PatchHostIn.md), `branchId?`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<`void`\>\> |
| `apiHostReplaceFacts` | (`hostIdList`: `string`[], `namespace`: `string`, `body`: `object`, `branchId?`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<`void`\>\> |

#### Defined in

[api.ts:4214](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L4214)

___

### ResourceTypesApiAxiosParamCreator

▸ **ResourceTypesApiAxiosParamCreator**(`configuration?`): `Object`

ResourceTypesApi - axios parameter creator

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `apiResourceTypeGetResourceTypeGroupsList` | (`perPage?`: `number`, `page?`: `number`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `apiResourceTypeGetResourceTypeList` | (`perPage?`: `number`, `page?`: `number`, `options?`: `any`) => `Promise`<`RequestArgs`\> |

#### Defined in

[api.ts:4854](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L4854)

___

### ResourceTypesApiFactory

▸ **ResourceTypesApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

ResourceTypesApi - factory interface

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
| `apiResourceTypeGetResourceTypeGroupsList` | (`perPage?`: `number`, `page?`: `number`, `options?`: `any`) => `AxiosPromise`<[`ResourceTypesGroupsQueryOutput`](interfaces/ResourceTypesGroupsQueryOutput.md)\> |
| `apiResourceTypeGetResourceTypeList` | (`perPage?`: `number`, `page?`: `number`, `options?`: `any`) => `AxiosPromise`<[`ResourceTypesQueryOutput`](interfaces/ResourceTypesQueryOutput.md)\> |

#### Defined in

[api.ts:4998](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L4998)

___

### ResourceTypesApiFp

▸ **ResourceTypesApiFp**(`configuration?`): `Object`

ResourceTypesApi - functional programming interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `apiResourceTypeGetResourceTypeGroupsList` | (`perPage?`: `number`, `page?`: `number`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ResourceTypesGroupsQueryOutput`](interfaces/ResourceTypesGroupsQueryOutput.md)\>\> |
| `apiResourceTypeGetResourceTypeList` | (`perPage?`: `number`, `page?`: `number`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ResourceTypesQueryOutput`](interfaces/ResourceTypesQueryOutput.md)\>\> |

#### Defined in

[api.ts:4959](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L4959)

___

### SystemProfileApiAxiosParamCreator

▸ **SystemProfileApiAxiosParamCreator**(`configuration?`): `Object`

SystemProfileApi - axios parameter creator

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `apiSystemProfileGetOperatingSystem` | (`tags?`: `string`[], `perPage?`: `number`, `page?`: `number`, `staleness?`: (``"unknown"`` \| ``"fresh"`` \| ``"stale"`` \| ``"stale_warning"``)[], `registeredWith?`: (``"insights"`` \| ``"yupana"`` \| ``"puptoo"`` \| ``"rhsm-conduit"`` \| ``"cloud-connector"`` \| ``"!yupana"`` \| ``"!puptoo"`` \| ``"!rhsm-conduit"`` \| ``"!cloud-connector"``)[], `filter?`: { `[key: string]`: `object`;  }, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `apiSystemProfileGetSapSids` | (`search?`: `string`, `tags?`: `string`[], `perPage?`: `number`, `page?`: `number`, `staleness?`: (``"unknown"`` \| ``"fresh"`` \| ``"stale"`` \| ``"stale_warning"``)[], `registeredWith?`: (``"insights"`` \| ``"yupana"`` \| ``"puptoo"`` \| ``"rhsm-conduit"`` \| ``"cloud-connector"`` \| ``"!yupana"`` \| ``"!puptoo"`` \| ``"!rhsm-conduit"`` \| ``"!cloud-connector"``)[], `filter?`: { `[key: string]`: `object`;  }, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `apiSystemProfileGetSapSystem` | (`tags?`: `string`[], `perPage?`: `number`, `page?`: `number`, `staleness?`: (``"unknown"`` \| ``"fresh"`` \| ``"stale"`` \| ``"stale_warning"``)[], `registeredWith?`: (``"insights"`` \| ``"yupana"`` \| ``"puptoo"`` \| ``"rhsm-conduit"`` \| ``"cloud-connector"`` \| ``"!yupana"`` \| ``"!puptoo"`` \| ``"!rhsm-conduit"`` \| ``"!cloud-connector"``)[], `filter?`: { `[key: string]`: `object`;  }, `options?`: `any`) => `Promise`<`RequestArgs`\> |

#### Defined in

[api.ts:5065](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L5065)

___

### SystemProfileApiFactory

▸ **SystemProfileApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

SystemProfileApi - factory interface

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
| `apiSystemProfileGetOperatingSystem` | (`tags?`: `string`[], `perPage?`: `number`, `page?`: `number`, `staleness?`: (``"unknown"`` \| ``"fresh"`` \| ``"stale"`` \| ``"stale_warning"``)[], `registeredWith?`: (``"insights"`` \| ``"yupana"`` \| ``"puptoo"`` \| ``"rhsm-conduit"`` \| ``"cloud-connector"`` \| ``"!yupana"`` \| ``"!puptoo"`` \| ``"!rhsm-conduit"`` \| ``"!cloud-connector"``)[], `filter?`: { `[key: string]`: `object`;  }, `options?`: `any`) => `AxiosPromise`<[`SystemProfileOperatingSystemOut`](interfaces/SystemProfileOperatingSystemOut.md)\> |
| `apiSystemProfileGetSapSids` | (`search?`: `string`, `tags?`: `string`[], `perPage?`: `number`, `page?`: `number`, `staleness?`: (``"unknown"`` \| ``"fresh"`` \| ``"stale"`` \| ``"stale_warning"``)[], `registeredWith?`: (``"insights"`` \| ``"yupana"`` \| ``"puptoo"`` \| ``"rhsm-conduit"`` \| ``"cloud-connector"`` \| ``"!yupana"`` \| ``"!puptoo"`` \| ``"!rhsm-conduit"`` \| ``"!cloud-connector"``)[], `filter?`: { `[key: string]`: `object`;  }, `options?`: `any`) => `AxiosPromise`<[`SystemProfileSapSystemOut`](interfaces/SystemProfileSapSystemOut.md)\> |
| `apiSystemProfileGetSapSystem` | (`tags?`: `string`[], `perPage?`: `number`, `page?`: `number`, `staleness?`: (``"unknown"`` \| ``"fresh"`` \| ``"stale"`` \| ``"stale_warning"``)[], `registeredWith?`: (``"insights"`` \| ``"yupana"`` \| ``"puptoo"`` \| ``"rhsm-conduit"`` \| ``"cloud-connector"`` \| ``"!yupana"`` \| ``"!puptoo"`` \| ``"!rhsm-conduit"`` \| ``"!cloud-connector"``)[], `filter?`: { `[key: string]`: `object`;  }, `options?`: `any`) => `AxiosPromise`<[`SystemProfileSapSystemOut`](interfaces/SystemProfileSapSystemOut.md)\> |

#### Defined in

[api.ts:5350](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L5350)

___

### SystemProfileApiFp

▸ **SystemProfileApiFp**(`configuration?`): `Object`

SystemProfileApi - functional programming interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `apiSystemProfileGetOperatingSystem` | (`tags?`: `string`[], `perPage?`: `number`, `page?`: `number`, `staleness?`: (``"unknown"`` \| ``"fresh"`` \| ``"stale"`` \| ``"stale_warning"``)[], `registeredWith?`: (``"insights"`` \| ``"yupana"`` \| ``"puptoo"`` \| ``"rhsm-conduit"`` \| ``"cloud-connector"`` \| ``"!yupana"`` \| ``"!puptoo"`` \| ``"!rhsm-conduit"`` \| ``"!cloud-connector"``)[], `filter?`: { `[key: string]`: `object`;  }, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`SystemProfileOperatingSystemOut`](interfaces/SystemProfileOperatingSystemOut.md)\>\> |
| `apiSystemProfileGetSapSids` | (`search?`: `string`, `tags?`: `string`[], `perPage?`: `number`, `page?`: `number`, `staleness?`: (``"unknown"`` \| ``"fresh"`` \| ``"stale"`` \| ``"stale_warning"``)[], `registeredWith?`: (``"insights"`` \| ``"yupana"`` \| ``"puptoo"`` \| ``"rhsm-conduit"`` \| ``"cloud-connector"`` \| ``"!yupana"`` \| ``"!puptoo"`` \| ``"!rhsm-conduit"`` \| ``"!cloud-connector"``)[], `filter?`: { `[key: string]`: `object`;  }, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`SystemProfileSapSystemOut`](interfaces/SystemProfileSapSystemOut.md)\>\> |
| `apiSystemProfileGetSapSystem` | (`tags?`: `string`[], `perPage?`: `number`, `page?`: `number`, `staleness?`: (``"unknown"`` \| ``"fresh"`` \| ``"stale"`` \| ``"stale_warning"``)[], `registeredWith?`: (``"insights"`` \| ``"yupana"`` \| ``"puptoo"`` \| ``"rhsm-conduit"`` \| ``"cloud-connector"`` \| ``"!yupana"`` \| ``"!puptoo"`` \| ``"!rhsm-conduit"`` \| ``"!cloud-connector"``)[], `filter?`: { `[key: string]`: `object`;  }, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`SystemProfileSapSystemOut`](interfaces/SystemProfileSapSystemOut.md)\>\> |

#### Defined in

[api.ts:5283](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L5283)

___

### TagsApiAxiosParamCreator

▸ **TagsApiAxiosParamCreator**(`configuration?`): `Object`

TagsApi - axios parameter creator

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `apiTagGetTags` | (`tags?`: `string`[], `orderBy?`: ``"tag"`` \| ``"count"``, `orderHow?`: ``"ASC"`` \| ``"DESC"``, `perPage?`: `number`, `page?`: `number`, `staleness?`: (``"unknown"`` \| ``"fresh"`` \| ``"stale"`` \| ``"stale_warning"``)[], `search?`: `string`, `displayName?`: `string`, `fqdn?`: `string`, `hostnameOrId?`: `string`, `insightsId?`: `string`, `providerId?`: `string`, `providerType?`: ``"alibaba"`` \| ``"aws"`` \| ``"azure"`` \| ``"gcp"`` \| ``"ibm"``, `updatedStart?`: `string`, `updatedEnd?`: `string`, `groupName?`: `string`, `registeredWith?`: (``"insights"`` \| ``"yupana"`` \| ``"puptoo"`` \| ``"rhsm-conduit"`` \| ``"cloud-connector"`` \| ``"!yupana"`` \| ``"!puptoo"`` \| ``"!rhsm-conduit"`` \| ``"!cloud-connector"``)[], `filter?`: { `[key: string]`: `object`;  }, `options?`: `any`) => `Promise`<`RequestArgs`\> |

#### Defined in

[api.ts:5467](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L5467)

___

### TagsApiFactory

▸ **TagsApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

TagsApi - factory interface

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
| `apiTagGetTags` | (`tags?`: `string`[], `orderBy?`: ``"tag"`` \| ``"count"``, `orderHow?`: ``"ASC"`` \| ``"DESC"``, `perPage?`: `number`, `page?`: `number`, `staleness?`: (``"unknown"`` \| ``"fresh"`` \| ``"stale"`` \| ``"stale_warning"``)[], `search?`: `string`, `displayName?`: `string`, `fqdn?`: `string`, `hostnameOrId?`: `string`, `insightsId?`: `string`, `providerId?`: `string`, `providerType?`: ``"alibaba"`` \| ``"aws"`` \| ``"azure"`` \| ``"gcp"`` \| ``"ibm"``, `updatedStart?`: `string`, `updatedEnd?`: `string`, `groupName?`: `string`, `registeredWith?`: (``"insights"`` \| ``"yupana"`` \| ``"puptoo"`` \| ``"rhsm-conduit"`` \| ``"cloud-connector"`` \| ``"!yupana"`` \| ``"!puptoo"`` \| ``"!rhsm-conduit"`` \| ``"!cloud-connector"``)[], `filter?`: { `[key: string]`: `object`;  }, `options?`: `any`) => `AxiosPromise`<[`ActiveTags`](interfaces/ActiveTags.md)\> |

#### Defined in

[api.ts:5648](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L5648)

___

### TagsApiFp

▸ **TagsApiFp**(`configuration?`): `Object`

TagsApi - functional programming interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `apiTagGetTags` | (`tags?`: `string`[], `orderBy?`: ``"tag"`` \| ``"count"``, `orderHow?`: ``"ASC"`` \| ``"DESC"``, `perPage?`: `number`, `page?`: `number`, `staleness?`: (``"unknown"`` \| ``"fresh"`` \| ``"stale"`` \| ``"stale_warning"``)[], `search?`: `string`, `displayName?`: `string`, `fqdn?`: `string`, `hostnameOrId?`: `string`, `insightsId?`: `string`, `providerId?`: `string`, `providerType?`: ``"alibaba"`` \| ``"aws"`` \| ``"azure"`` \| ``"gcp"`` \| ``"ibm"``, `updatedStart?`: `string`, `updatedEnd?`: `string`, `groupName?`: `string`, `registeredWith?`: (``"insights"`` \| ``"yupana"`` \| ``"puptoo"`` \| ``"rhsm-conduit"`` \| ``"cloud-connector"`` \| ``"!yupana"`` \| ``"!puptoo"`` \| ``"!rhsm-conduit"`` \| ``"!cloud-connector"``)[], `filter?`: { `[key: string]`: `object`;  }, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ActiveTags`](interfaces/ActiveTags.md)\>\> |

#### Defined in

[api.ts:5608](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L5608)

___

### UnleashApiAxiosParamCreator

▸ **UnleashApiAxiosParamCreator**(`configuration?`): `Object`

UnleashApi - axios parameter creator

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `apiUnleashGetInventoryGroupsToggle` | (`options?`: `any`) => `Promise`<`RequestArgs`\> |

#### Defined in

[api.ts:5723](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L5723)

___

### UnleashApiFactory

▸ **UnleashApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

UnleashApi - factory interface

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
| `apiUnleashGetInventoryGroupsToggle` | (`options?`: `any`) => `AxiosPromise`<[`UnleashToggleOut`](interfaces/UnleashToggleOut.md)\> |

#### Defined in

[api.ts:5792](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L5792)

___

### UnleashApiFp

▸ **UnleashApiFp**(`configuration?`): `Object`

UnleashApi - functional programming interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `apiUnleashGetInventoryGroupsToggle` | (`options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`UnleashToggleOut`](interfaces/UnleashToggleOut.md)\>\> |

#### Defined in

[api.ts:5770](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L5770)
