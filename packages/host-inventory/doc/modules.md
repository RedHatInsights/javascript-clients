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

### Classes

- [Configuration](classes/Configuration.md)
- [DefaultApi](classes/DefaultApi.md)
- [HostsApi](classes/HostsApi.md)
- [SystemProfileApi](classes/SystemProfileApi.md)
- [TagsApi](classes/TagsApi.md)

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
- [HostOut](interfaces/HostOut.md)
- [HostOutAllOf](interfaces/HostOutAllOf.md)
- [HostQueryOutput](interfaces/HostQueryOutput.md)
- [HostQueryOutputAllOf](interfaces/HostQueryOutputAllOf.md)
- [HostSystemProfileOut](interfaces/HostSystemProfileOut.md)
- [InstalledProduct](interfaces/InstalledProduct.md)
- [NetworkInterface](interfaces/NetworkInterface.md)
- [PaginationOut](interfaces/PaginationOut.md)
- [PatchHostIn](interfaces/PatchHostIn.md)
- [PerReporterStaleness](interfaces/PerReporterStaleness.md)
- [RPMOSTreeDeployment](interfaces/RPMOSTreeDeployment.md)
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
- [SystemProfileSapSystemOut](interfaces/SystemProfileSapSystemOut.md)
- [SystemProfileSapSystemOutResults](interfaces/SystemProfileSapSystemOutResults.md)
- [SystemProfileSystemPurpose](interfaces/SystemProfileSystemPurpose.md)
- [SystemProfileYumRepo](interfaces/SystemProfileYumRepo.md)
- [TagCountOut](interfaces/TagCountOut.md)
- [TagCountOutAllOf](interfaces/TagCountOutAllOf.md)
- [TagsOut](interfaces/TagsOut.md)
- [TagsOutAllOf](interfaces/TagsOutAllOf.md)
- [YumRepo](interfaces/YumRepo.md)

### Functions

- [DefaultApiAxiosParamCreator](modules.md#defaultapiaxiosparamcreator)
- [DefaultApiFactory](modules.md#defaultapifactory)
- [DefaultApiFp](modules.md#defaultapifp)
- [HostsApiAxiosParamCreator](modules.md#hostsapiaxiosparamcreator)
- [HostsApiFactory](modules.md#hostsapifactory)
- [HostsApiFp](modules.md#hostsapifp)
- [SystemProfileApiAxiosParamCreator](modules.md#systemprofileapiaxiosparamcreator)
- [SystemProfileApiFactory](modules.md#systemprofileapifactory)
- [SystemProfileApiFp](modules.md#systemprofileapifp)
- [TagsApiAxiosParamCreator](modules.md#tagsapiaxiosparamcreator)
- [TagsApiFactory](modules.md#tagsapifactory)
- [TagsApiFp](modules.md#tagsapifp)

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

[api.ts:2024](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2024)

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

[api.ts:2121](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2121)

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

[api.ts:2095](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2095)

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
| `apiHostDeleteById` | (`hostIdList`: `string`[], `branchId?`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `apiHostDeleteHostsByFilter` | (`displayName?`: `string`, `fqdn?`: `string`, `hostnameOrId?`: `string`, `insightsId?`: `string`, `providerId?`: `string`, `providerType?`: ``"alibaba"`` \| ``"aws"`` \| ``"azure"`` \| ``"gcp"`` \| ``"ibm"``, `registeredWith?`: (``"insights"`` \| ``"yupana"`` \| ``"puptoo"`` \| ``"rhsm-conduit"`` \| ``"cloud-connector"`` \| ``"!yupana"`` \| ``"!puptoo"`` \| ``"!rhsm-conduit"`` \| ``"!cloud-connector"``)[], `staleness?`: (``"unknown"`` \| ``"fresh"`` \| ``"stale"`` \| ``"stale_warning"``)[], `tags?`: `string`[], `filter?`: { `[key: string]`: `object`;  }, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `apiHostGetHostById` | (`hostIdList`: `string`[], `branchId?`: `string`, `perPage?`: `number`, `page?`: `number`, `orderBy?`: ``"display_name"`` \| ``"updated"`` \| ``"operating_system"``, `orderHow?`: ``"ASC"`` \| ``"DESC"``, `fields?`: { `[key: string]`: `object`;  }, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `apiHostGetHostList` | (`displayName?`: `string`, `fqdn?`: `string`, `hostnameOrId?`: `string`, `insightsId?`: `string`, `providerId?`: `string`, `providerType?`: ``"alibaba"`` \| ``"aws"`` \| ``"azure"`` \| ``"gcp"`` \| ``"ibm"``, `branchId?`: `string`, `perPage?`: `number`, `page?`: `number`, `orderBy?`: ``"display_name"`` \| ``"updated"`` \| ``"operating_system"``, `orderHow?`: ``"ASC"`` \| ``"DESC"``, `staleness?`: (``"unknown"`` \| ``"fresh"`` \| ``"stale"`` \| ``"stale_warning"``)[], `tags?`: `string`[], `registeredWith?`: (``"insights"`` \| ``"yupana"`` \| ``"puptoo"`` \| ``"rhsm-conduit"`` \| ``"cloud-connector"`` \| ``"!yupana"`` \| ``"!puptoo"`` \| ``"!rhsm-conduit"`` \| ``"!cloud-connector"``)[], `filter?`: { `[key: string]`: `object`;  }, `fields?`: { `[key: string]`: `object`;  }, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `apiHostGetHostSystemProfileById` | (`hostIdList`: `string`[], `perPage?`: `number`, `page?`: `number`, `orderBy?`: ``"display_name"`` \| ``"updated"`` \| ``"operating_system"``, `orderHow?`: ``"ASC"`` \| ``"DESC"``, `branchId?`: `string`, `fields?`: { `[key: string]`: `object`;  }, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `apiHostGetHostTagCount` | (`hostIdList`: `string`[], `perPage?`: `number`, `page?`: `number`, `orderBy?`: ``"display_name"`` \| ``"updated"`` \| ``"operating_system"``, `orderHow?`: ``"ASC"`` \| ``"DESC"``, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `apiHostGetHostTags` | (`hostIdList`: `string`[], `perPage?`: `number`, `page?`: `number`, `orderBy?`: ``"display_name"`` \| ``"updated"`` \| ``"operating_system"``, `orderHow?`: ``"ASC"`` \| ``"DESC"``, `search?`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `apiHostHostCheckin` | (`createCheckIn`: [`CreateCheckIn`](interfaces/CreateCheckIn.md), `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `apiHostMergeFacts` | (`hostIdList`: `string`[], `namespace`: `string`, `body`: `object`, `branchId?`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `apiHostPatchById` | (`hostIdList`: `string`[], `patchHostIn`: [`PatchHostIn`](interfaces/PatchHostIn.md), `branchId?`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `apiHostReplaceFacts` | (`hostIdList`: `string`[], `namespace`: `string`, `body`: `object`, `branchId?`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |

#### Defined in

[api.ts:2168](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2168)

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
| `apiHostDeleteById` | (`hostIdList`: `string`[], `branchId?`: `string`, `options?`: `any`) => `AxiosPromise`<`void`\> |
| `apiHostDeleteHostsByFilter` | (`displayName?`: `string`, `fqdn?`: `string`, `hostnameOrId?`: `string`, `insightsId?`: `string`, `providerId?`: `string`, `providerType?`: ``"alibaba"`` \| ``"aws"`` \| ``"azure"`` \| ``"gcp"`` \| ``"ibm"``, `registeredWith?`: (``"insights"`` \| ``"yupana"`` \| ``"puptoo"`` \| ``"rhsm-conduit"`` \| ``"cloud-connector"`` \| ``"!yupana"`` \| ``"!puptoo"`` \| ``"!rhsm-conduit"`` \| ``"!cloud-connector"``)[], `staleness?`: (``"unknown"`` \| ``"fresh"`` \| ``"stale"`` \| ``"stale_warning"``)[], `tags?`: `string`[], `filter?`: { `[key: string]`: `object`;  }, `options?`: `any`) => `AxiosPromise`<`void`\> |
| `apiHostGetHostById` | (`hostIdList`: `string`[], `branchId?`: `string`, `perPage?`: `number`, `page?`: `number`, `orderBy?`: ``"display_name"`` \| ``"updated"`` \| ``"operating_system"``, `orderHow?`: ``"ASC"`` \| ``"DESC"``, `fields?`: { `[key: string]`: `object`;  }, `options?`: `any`) => `AxiosPromise`<[`HostQueryOutput`](interfaces/HostQueryOutput.md)\> |
| `apiHostGetHostList` | (`displayName?`: `string`, `fqdn?`: `string`, `hostnameOrId?`: `string`, `insightsId?`: `string`, `providerId?`: `string`, `providerType?`: ``"alibaba"`` \| ``"aws"`` \| ``"azure"`` \| ``"gcp"`` \| ``"ibm"``, `branchId?`: `string`, `perPage?`: `number`, `page?`: `number`, `orderBy?`: ``"display_name"`` \| ``"updated"`` \| ``"operating_system"``, `orderHow?`: ``"ASC"`` \| ``"DESC"``, `staleness?`: (``"unknown"`` \| ``"fresh"`` \| ``"stale"`` \| ``"stale_warning"``)[], `tags?`: `string`[], `registeredWith?`: (``"insights"`` \| ``"yupana"`` \| ``"puptoo"`` \| ``"rhsm-conduit"`` \| ``"cloud-connector"`` \| ``"!yupana"`` \| ``"!puptoo"`` \| ``"!rhsm-conduit"`` \| ``"!cloud-connector"``)[], `filter?`: { `[key: string]`: `object`;  }, `fields?`: { `[key: string]`: `object`;  }, `options?`: `any`) => `AxiosPromise`<[`HostQueryOutput`](interfaces/HostQueryOutput.md)\> |
| `apiHostGetHostSystemProfileById` | (`hostIdList`: `string`[], `perPage?`: `number`, `page?`: `number`, `orderBy?`: ``"display_name"`` \| ``"updated"`` \| ``"operating_system"``, `orderHow?`: ``"ASC"`` \| ``"DESC"``, `branchId?`: `string`, `fields?`: { `[key: string]`: `object`;  }, `options?`: `any`) => `AxiosPromise`<[`SystemProfileByHostOut`](interfaces/SystemProfileByHostOut.md)\> |
| `apiHostGetHostTagCount` | (`hostIdList`: `string`[], `perPage?`: `number`, `page?`: `number`, `orderBy?`: ``"display_name"`` \| ``"updated"`` \| ``"operating_system"``, `orderHow?`: ``"ASC"`` \| ``"DESC"``, `options?`: `any`) => `AxiosPromise`<[`TagCountOut`](interfaces/TagCountOut.md)\> |
| `apiHostGetHostTags` | (`hostIdList`: `string`[], `perPage?`: `number`, `page?`: `number`, `orderBy?`: ``"display_name"`` \| ``"updated"`` \| ``"operating_system"``, `orderHow?`: ``"ASC"`` \| ``"DESC"``, `search?`: `string`, `options?`: `any`) => `AxiosPromise`<[`TagsOut`](interfaces/TagsOut.md)\> |
| `apiHostHostCheckin` | (`createCheckIn`: [`CreateCheckIn`](interfaces/CreateCheckIn.md), `options?`: `any`) => `AxiosPromise`<[`CreateHostOut`](interfaces/CreateHostOut.md)\> |
| `apiHostMergeFacts` | (`hostIdList`: `string`[], `namespace`: `string`, `body`: `object`, `branchId?`: `string`, `options?`: `any`) => `AxiosPromise`<`void`\> |
| `apiHostPatchById` | (`hostIdList`: `string`[], `patchHostIn`: [`PatchHostIn`](interfaces/PatchHostIn.md), `branchId?`: `string`, `options?`: `any`) => `AxiosPromise`<`void`\> |
| `apiHostReplaceFacts` | (`hostIdList`: `string`[], `namespace`: `string`, `body`: `object`, `branchId?`: `string`, `options?`: `any`) => `AxiosPromise`<`void`\> |

#### Defined in

[api.ts:3229](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L3229)

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
| `apiHostDeleteById` | (`hostIdList`: `string`[], `branchId?`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<`void`\>\> |
| `apiHostDeleteHostsByFilter` | (`displayName?`: `string`, `fqdn?`: `string`, `hostnameOrId?`: `string`, `insightsId?`: `string`, `providerId?`: `string`, `providerType?`: ``"alibaba"`` \| ``"aws"`` \| ``"azure"`` \| ``"gcp"`` \| ``"ibm"``, `registeredWith?`: (``"insights"`` \| ``"yupana"`` \| ``"puptoo"`` \| ``"rhsm-conduit"`` \| ``"cloud-connector"`` \| ``"!yupana"`` \| ``"!puptoo"`` \| ``"!rhsm-conduit"`` \| ``"!cloud-connector"``)[], `staleness?`: (``"unknown"`` \| ``"fresh"`` \| ``"stale"`` \| ``"stale_warning"``)[], `tags?`: `string`[], `filter?`: { `[key: string]`: `object`;  }, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<`void`\>\> |
| `apiHostGetHostById` | (`hostIdList`: `string`[], `branchId?`: `string`, `perPage?`: `number`, `page?`: `number`, `orderBy?`: ``"display_name"`` \| ``"updated"`` \| ``"operating_system"``, `orderHow?`: ``"ASC"`` \| ``"DESC"``, `fields?`: { `[key: string]`: `object`;  }, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`HostQueryOutput`](interfaces/HostQueryOutput.md)\>\> |
| `apiHostGetHostList` | (`displayName?`: `string`, `fqdn?`: `string`, `hostnameOrId?`: `string`, `insightsId?`: `string`, `providerId?`: `string`, `providerType?`: ``"alibaba"`` \| ``"aws"`` \| ``"azure"`` \| ``"gcp"`` \| ``"ibm"``, `branchId?`: `string`, `perPage?`: `number`, `page?`: `number`, `orderBy?`: ``"display_name"`` \| ``"updated"`` \| ``"operating_system"``, `orderHow?`: ``"ASC"`` \| ``"DESC"``, `staleness?`: (``"unknown"`` \| ``"fresh"`` \| ``"stale"`` \| ``"stale_warning"``)[], `tags?`: `string`[], `registeredWith?`: (``"insights"`` \| ``"yupana"`` \| ``"puptoo"`` \| ``"rhsm-conduit"`` \| ``"cloud-connector"`` \| ``"!yupana"`` \| ``"!puptoo"`` \| ``"!rhsm-conduit"`` \| ``"!cloud-connector"``)[], `filter?`: { `[key: string]`: `object`;  }, `fields?`: { `[key: string]`: `object`;  }, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`HostQueryOutput`](interfaces/HostQueryOutput.md)\>\> |
| `apiHostGetHostSystemProfileById` | (`hostIdList`: `string`[], `perPage?`: `number`, `page?`: `number`, `orderBy?`: ``"display_name"`` \| ``"updated"`` \| ``"operating_system"``, `orderHow?`: ``"ASC"`` \| ``"DESC"``, `branchId?`: `string`, `fields?`: { `[key: string]`: `object`;  }, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`SystemProfileByHostOut`](interfaces/SystemProfileByHostOut.md)\>\> |
| `apiHostGetHostTagCount` | (`hostIdList`: `string`[], `perPage?`: `number`, `page?`: `number`, `orderBy?`: ``"display_name"`` \| ``"updated"`` \| ``"operating_system"``, `orderHow?`: ``"ASC"`` \| ``"DESC"``, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`TagCountOut`](interfaces/TagCountOut.md)\>\> |
| `apiHostGetHostTags` | (`hostIdList`: `string`[], `perPage?`: `number`, `page?`: `number`, `orderBy?`: ``"display_name"`` \| ``"updated"`` \| ``"operating_system"``, `orderHow?`: ``"ASC"`` \| ``"DESC"``, `search?`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`TagsOut`](interfaces/TagsOut.md)\>\> |
| `apiHostHostCheckin` | (`createCheckIn`: [`CreateCheckIn`](interfaces/CreateCheckIn.md), `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`CreateHostOut`](interfaces/CreateHostOut.md)\>\> |
| `apiHostMergeFacts` | (`hostIdList`: `string`[], `namespace`: `string`, `body`: `object`, `branchId?`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<`void`\>\> |
| `apiHostPatchById` | (`hostIdList`: `string`[], `patchHostIn`: [`PatchHostIn`](interfaces/PatchHostIn.md), `branchId?`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<`void`\>\> |
| `apiHostReplaceFacts` | (`hostIdList`: `string`[], `namespace`: `string`, `body`: `object`, `branchId?`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<`void`\>\> |

#### Defined in

[api.ts:2998](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2998)

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

[api.ts:3620](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L3620)

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

[api.ts:3905](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L3905)

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

[api.ts:3838](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L3838)

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
| `apiTagGetTags` | (`tags?`: `string`[], `orderBy?`: ``"tag"`` \| ``"count"``, `orderHow?`: ``"ASC"`` \| ``"DESC"``, `perPage?`: `number`, `page?`: `number`, `staleness?`: (``"unknown"`` \| ``"fresh"`` \| ``"stale"`` \| ``"stale_warning"``)[], `search?`: `string`, `displayName?`: `string`, `fqdn?`: `string`, `hostnameOrId?`: `string`, `insightsId?`: `string`, `providerId?`: `string`, `providerType?`: ``"alibaba"`` \| ``"aws"`` \| ``"azure"`` \| ``"gcp"`` \| ``"ibm"``, `registeredWith?`: (``"insights"`` \| ``"yupana"`` \| ``"puptoo"`` \| ``"rhsm-conduit"`` \| ``"cloud-connector"`` \| ``"!yupana"`` \| ``"!puptoo"`` \| ``"!rhsm-conduit"`` \| ``"!cloud-connector"``)[], `filter?`: { `[key: string]`: `object`;  }, `options?`: `any`) => `Promise`<`RequestArgs`\> |

#### Defined in

[api.ts:4022](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L4022)

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
| `apiTagGetTags` | (`tags?`: `string`[], `orderBy?`: ``"tag"`` \| ``"count"``, `orderHow?`: ``"ASC"`` \| ``"DESC"``, `perPage?`: `number`, `page?`: `number`, `staleness?`: (``"unknown"`` \| ``"fresh"`` \| ``"stale"`` \| ``"stale_warning"``)[], `search?`: `string`, `displayName?`: `string`, `fqdn?`: `string`, `hostnameOrId?`: `string`, `insightsId?`: `string`, `providerId?`: `string`, `providerType?`: ``"alibaba"`` \| ``"aws"`` \| ``"azure"`` \| ``"gcp"`` \| ``"ibm"``, `registeredWith?`: (``"insights"`` \| ``"yupana"`` \| ``"puptoo"`` \| ``"rhsm-conduit"`` \| ``"cloud-connector"`` \| ``"!yupana"`` \| ``"!puptoo"`` \| ``"!rhsm-conduit"`` \| ``"!cloud-connector"``)[], `filter?`: { `[key: string]`: `object`;  }, `options?`: `any`) => `AxiosPromise`<[`ActiveTags`](interfaces/ActiveTags.md)\> |

#### Defined in

[api.ts:4181](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L4181)

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
| `apiTagGetTags` | (`tags?`: `string`[], `orderBy?`: ``"tag"`` \| ``"count"``, `orderHow?`: ``"ASC"`` \| ``"DESC"``, `perPage?`: `number`, `page?`: `number`, `staleness?`: (``"unknown"`` \| ``"fresh"`` \| ``"stale"`` \| ``"stale_warning"``)[], `search?`: `string`, `displayName?`: `string`, `fqdn?`: `string`, `hostnameOrId?`: `string`, `insightsId?`: `string`, `providerId?`: `string`, `providerType?`: ``"alibaba"`` \| ``"aws"`` \| ``"azure"`` \| ``"gcp"`` \| ``"ibm"``, `registeredWith?`: (``"insights"`` \| ``"yupana"`` \| ``"puptoo"`` \| ``"rhsm-conduit"`` \| ``"cloud-connector"`` \| ``"!yupana"`` \| ``"!puptoo"`` \| ``"!rhsm-conduit"`` \| ``"!cloud-connector"``)[], `filter?`: { `[key: string]`: `object`;  }, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ActiveTags`](interfaces/ActiveTags.md)\>\> |

#### Defined in

[api.ts:4144](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L4144)
