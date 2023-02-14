[@redhat-cloud-services/host-inventory-client](README.md) › [Globals](globals.md)

# @redhat-cloud-services/host-inventory-client

## Index

### Enumerations

* [SystemProfileGreenbootStatusEnum](enums/systemprofilegreenbootstatusenum.md)
* [SystemProfileHostTypeEnum](enums/systemprofilehosttypeenum.md)
* [SystemProfileOperatingSystemNameEnum](enums/systemprofileoperatingsystemnameenum.md)
* [SystemProfileSelinuxCurrentModeEnum](enums/systemprofileselinuxcurrentmodeenum.md)
* [SystemProfileSystemPurposeRoleEnum](enums/systemprofilesystempurposeroleenum.md)
* [SystemProfileSystemPurposeSlaEnum](enums/systemprofilesystempurposeslaenum.md)
* [SystemProfileSystemPurposeUsageEnum](enums/systemprofilesystempurposeusageenum.md)
* [SystemProfileSystemUpdateMethodEnum](enums/systemprofilesystemupdatemethodenum.md)

### Classes

* [BaseAPI](classes/baseapi.md)
* [Configuration](classes/configuration.md)
* [DefaultApi](classes/defaultapi.md)
* [GroupsApi](classes/groupsapi.md)
* [HostsApi](classes/hostsapi.md)
* [RequiredError](classes/requirederror.md)
* [SystemProfileApi](classes/systemprofileapi.md)
* [TagsApi](classes/tagsapi.md)
* [UnleashApi](classes/unleashapi.md)

### Interfaces

* [ActiveTag](interfaces/activetag.md)
* [ActiveTags](interfaces/activetags.md)
* [ActiveTagsAllOf](interfaces/activetagsallof.md)
* [CanonicalFactsIn](interfaces/canonicalfactsin.md)
* [CanonicalFactsInAllOf](interfaces/canonicalfactsinallof.md)
* [CanonicalFactsOut](interfaces/canonicalfactsout.md)
* [ConfigurationParameters](interfaces/configurationparameters.md)
* [CreateCheckIn](interfaces/createcheckin.md)
* [CreateCheckInAllOf](interfaces/createcheckinallof.md)
* [CreateGroup](interfaces/creategroup.md)
* [CreateGroupAllOf](interfaces/creategroupallof.md)
* [CreateHostOut](interfaces/createhostout.md)
* [CreateHostOutAllOf](interfaces/createhostoutallof.md)
* [DiskDevice](interfaces/diskdevice.md)
* [DnfModule](interfaces/dnfmodule.md)
* [FactSet](interfaces/factset.md)
* [GroupIn](interfaces/groupin.md)
* [GroupInAllOf](interfaces/groupinallof.md)
* [GroupOut](interfaces/groupout.md)
* [GroupQueryOutput](interfaces/groupqueryoutput.md)
* [GroupQueryOutputAllOf](interfaces/groupqueryoutputallof.md)
* [HostOut](interfaces/hostout.md)
* [HostOutAllOf](interfaces/hostoutallof.md)
* [HostQueryOutput](interfaces/hostqueryoutput.md)
* [HostQueryOutputAllOf](interfaces/hostqueryoutputallof.md)
* [HostSystemProfileOut](interfaces/hostsystemprofileout.md)
* [InstalledProduct](interfaces/installedproduct.md)
* [NetworkInterface](interfaces/networkinterface.md)
* [PaginationOut](interfaces/paginationout.md)
* [PatchHostIn](interfaces/patchhostin.md)
* [PerReporterStaleness](interfaces/perreporterstaleness.md)
* [RPMOSTreeDeployment](interfaces/rpmostreedeployment.md)
* [RequestArgs](interfaces/requestargs.md)
* [StructuredTag](interfaces/structuredtag.md)
* [SystemProfile](interfaces/systemprofile.md)
* [SystemProfileAnsible](interfaces/systemprofileansible.md)
* [SystemProfileByHostOut](interfaces/systemprofilebyhostout.md)
* [SystemProfileByHostOutAllOf](interfaces/systemprofilebyhostoutallof.md)
* [SystemProfileDiskDevice](interfaces/systemprofilediskdevice.md)
* [SystemProfileDnfModule](interfaces/systemprofilednfmodule.md)
* [SystemProfileInstalledProduct](interfaces/systemprofileinstalledproduct.md)
* [SystemProfileMssql](interfaces/systemprofilemssql.md)
* [SystemProfileNetworkInterface](interfaces/systemprofilenetworkinterface.md)
* [SystemProfileOperatingSystem](interfaces/systemprofileoperatingsystem.md)
* [SystemProfileOperatingSystemOut](interfaces/systemprofileoperatingsystemout.md)
* [SystemProfileOperatingSystemOutResults](interfaces/systemprofileoperatingsystemoutresults.md)
* [SystemProfileOperatingSystemOutValue](interfaces/systemprofileoperatingsystemoutvalue.md)
* [SystemProfileRhsm](interfaces/systemprofilerhsm.md)
* [SystemProfileSap](interfaces/systemprofilesap.md)
* [SystemProfileSapSystemOut](interfaces/systemprofilesapsystemout.md)
* [SystemProfileSapSystemOutResults](interfaces/systemprofilesapsystemoutresults.md)
* [SystemProfileSystemPurpose](interfaces/systemprofilesystempurpose.md)
* [SystemProfileYumRepo](interfaces/systemprofileyumrepo.md)
* [TagCountOut](interfaces/tagcountout.md)
* [TagCountOutAllOf](interfaces/tagcountoutallof.md)
* [TagsOut](interfaces/tagsout.md)
* [TagsOutAllOf](interfaces/tagsoutallof.md)
* [UnleashToggleOut](interfaces/unleashtoggleout.md)
* [YumRepo](interfaces/yumrepo.md)

### Variables

* [BASE_PATH](globals.md#const-base_path)

### Functions

* [DefaultApiAxiosParamCreator](globals.md#const-defaultapiaxiosparamcreator)
* [DefaultApiFactory](globals.md#const-defaultapifactory)
* [DefaultApiFp](globals.md#const-defaultapifp)
* [GroupsApiAxiosParamCreator](globals.md#const-groupsapiaxiosparamcreator)
* [GroupsApiFactory](globals.md#const-groupsapifactory)
* [GroupsApiFp](globals.md#const-groupsapifp)
* [HostsApiAxiosParamCreator](globals.md#const-hostsapiaxiosparamcreator)
* [HostsApiFactory](globals.md#const-hostsapifactory)
* [HostsApiFp](globals.md#const-hostsapifp)
* [SystemProfileApiAxiosParamCreator](globals.md#const-systemprofileapiaxiosparamcreator)
* [SystemProfileApiFactory](globals.md#const-systemprofileapifactory)
* [SystemProfileApiFp](globals.md#const-systemprofileapifp)
* [TagsApiAxiosParamCreator](globals.md#const-tagsapiaxiosparamcreator)
* [TagsApiFactory](globals.md#const-tagsapifactory)
* [TagsApiFp](globals.md#const-tagsapifp)
* [UnleashApiAxiosParamCreator](globals.md#const-unleashapiaxiosparamcreator)
* [UnleashApiFactory](globals.md#const-unleashapifactory)
* [UnleashApiFp](globals.md#const-unleashapifp)

### Object literals

* [COLLECTION_FORMATS](globals.md#const-collection_formats)

## Variables

### `Const` BASE_PATH

• **BASE_PATH**: *string* = "http://localhost".replace(/\/+$/, "")

*Defined in [base.ts:20](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/base.ts#L20)*

## Functions

### `Const` DefaultApiAxiosParamCreator

▸ **DefaultApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:2264](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2264)*

DefaultApi - axios parameter creator

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **apiSystemProfileValidateSchema**(`repoBranch`: string, `repoFork?`: string, `days?`: number, `maxMessages?`: number, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

___

### `Const` DefaultApiFactory

▸ **DefaultApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [api.ts:2361](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2361)*

DefaultApi - factory interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`basePath?` | string |
`axios?` | AxiosInstance |

**Returns:** *object*

* **apiSystemProfileValidateSchema**(`repoBranch`: string, `repoFork?`: string, `days?`: number, `maxMessages?`: number, `options?`: any): *AxiosPromise‹void›*

___

### `Const` DefaultApiFp

▸ **DefaultApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:2335](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2335)*

DefaultApi - functional programming interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **apiSystemProfileValidateSchema**(`repoBranch`: string, `repoFork?`: string, `days?`: number, `maxMessages?`: number, `options?`: any): *Promise‹function›*

___

### `Const` GroupsApiAxiosParamCreator

▸ **GroupsApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:2408](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2408)*

GroupsApi - axios parameter creator

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **apiGroupCreateGroup**(`createGroup`: [CreateGroup](interfaces/creategroup.md), `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **apiGroupDeleteGroup**(`groupId`: string, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **apiGroupDeleteHostsFromGroup**(`groupId`: string, `hostIdList`: Array‹string›, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **apiGroupGetGroup**(`groupId`: string, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **apiGroupGetGroupList**(`name?`: string, `perPage?`: number, `page?`: number, `orderBy?`: "display_name" | "updated" | "operating_system", `orderHow?`: "ASC" | "DESC", `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **apiGroupGetGroupsById**(`groupIdList`: Array‹string›, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **apiGroupPatchGroupById**(`groupId`: string, `groupIn`: [GroupIn](interfaces/groupin.md), `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **apiGroupUpdateGroupDetails**(`groupId`: string, `groupIn`: [GroupIn](interfaces/groupin.md), `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

___

### `Const` GroupsApiFactory

▸ **GroupsApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [api.ts:2952](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2952)*

GroupsApi - factory interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`basePath?` | string |
`axios?` | AxiosInstance |

**Returns:** *object*

* **apiGroupCreateGroup**(`createGroup`: [CreateGroup](interfaces/creategroup.md), `options?`: any): *AxiosPromise‹[GroupOut](interfaces/groupout.md)›*

* **apiGroupDeleteGroup**(`groupId`: string, `options?`: any): *AxiosPromise‹void›*

* **apiGroupDeleteHostsFromGroup**(`groupId`: string, `hostIdList`: Array‹string›, `options?`: any): *AxiosPromise‹void›*

* **apiGroupGetGroup**(`groupId`: string, `options?`: any): *AxiosPromise‹[GroupOut](interfaces/groupout.md)›*

* **apiGroupGetGroupList**(`name?`: string, `perPage?`: number, `page?`: number, `orderBy?`: "display_name" | "updated" | "operating_system", `orderHow?`: "ASC" | "DESC", `options?`: any): *AxiosPromise‹[GroupQueryOutput](interfaces/groupqueryoutput.md)›*

* **apiGroupGetGroupsById**(`groupIdList`: Array‹string›, `options?`: any): *AxiosPromise‹[GroupQueryOutput](interfaces/groupqueryoutput.md)›*

* **apiGroupPatchGroupById**(`groupId`: string, `groupIn`: [GroupIn](interfaces/groupin.md), `options?`: any): *AxiosPromise‹[GroupOut](interfaces/groupout.md)›*

* **apiGroupUpdateGroupDetails**(`groupId`: string, `groupIn`: [GroupIn](interfaces/groupin.md), `options?`: any): *AxiosPromise‹[GroupOut](interfaces/groupout.md)›*

___

### `Const` GroupsApiFp

▸ **GroupsApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:2824](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2824)*

GroupsApi - functional programming interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **apiGroupCreateGroup**(`createGroup`: [CreateGroup](interfaces/creategroup.md), `options?`: any): *Promise‹function›*

* **apiGroupDeleteGroup**(`groupId`: string, `options?`: any): *Promise‹function›*

* **apiGroupDeleteHostsFromGroup**(`groupId`: string, `hostIdList`: Array‹string›, `options?`: any): *Promise‹function›*

* **apiGroupGetGroup**(`groupId`: string, `options?`: any): *Promise‹function›*

* **apiGroupGetGroupList**(`name?`: string, `perPage?`: number, `page?`: number, `orderBy?`: "display_name" | "updated" | "operating_system", `orderHow?`: "ASC" | "DESC", `options?`: any): *Promise‹function›*

* **apiGroupGetGroupsById**(`groupIdList`: Array‹string›, `options?`: any): *Promise‹function›*

* **apiGroupPatchGroupById**(`groupId`: string, `groupIn`: [GroupIn](interfaces/groupin.md), `options?`: any): *Promise‹function›*

* **apiGroupUpdateGroupDetails**(`groupId`: string, `groupIn`: [GroupIn](interfaces/groupin.md), `options?`: any): *Promise‹function›*

___

### `Const` HostsApiAxiosParamCreator

▸ **HostsApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:3161](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L3161)*

HostsApi - axios parameter creator

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **apiHostDeleteAllHosts**(`confirmDeleteAll?`: boolean, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **apiHostDeleteHostById**(`hostIdList`: Array‹string›, `branchId?`: string, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **apiHostDeleteHostsByFilter**(`displayName?`: string, `fqdn?`: string, `hostnameOrId?`: string, `insightsId?`: string, `providerId?`: string, `providerType?`: "alibaba" | "aws" | "azure" | "gcp" | "ibm", `registeredWith?`: Array‹"insights" | "yupana" | "puptoo" | "rhsm-conduit" | "cloud-connector" | "!yupana" | "!puptoo" | "!rhsm-conduit" | "!cloud-connector"›, `staleness?`: Array‹"fresh" | "stale" | "stale_warning" | "unknown"›, `tags?`: Array‹string›, `filter?`: object, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **apiHostGetHostById**(`hostIdList`: Array‹string›, `branchId?`: string, `perPage?`: number, `page?`: number, `orderBy?`: "display_name" | "updated" | "operating_system", `orderHow?`: "ASC" | "DESC", `fields?`: object, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **apiHostGetHostList**(`displayName?`: string, `fqdn?`: string, `hostnameOrId?`: string, `insightsId?`: string, `providerId?`: string, `providerType?`: "alibaba" | "aws" | "azure" | "gcp" | "ibm", `branchId?`: string, `perPage?`: number, `page?`: number, `orderBy?`: "display_name" | "updated" | "operating_system", `orderHow?`: "ASC" | "DESC", `staleness?`: Array‹"fresh" | "stale" | "stale_warning" | "unknown"›, `tags?`: Array‹string›, `registeredWith?`: Array‹"insights" | "yupana" | "puptoo" | "rhsm-conduit" | "cloud-connector" | "!yupana" | "!puptoo" | "!rhsm-conduit" | "!cloud-connector"›, `filter?`: object, `fields?`: object, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **apiHostGetHostSystemProfileById**(`hostIdList`: Array‹string›, `perPage?`: number, `page?`: number, `orderBy?`: "display_name" | "updated" | "operating_system", `orderHow?`: "ASC" | "DESC", `branchId?`: string, `fields?`: object, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **apiHostGetHostTagCount**(`hostIdList`: Array‹string›, `perPage?`: number, `page?`: number, `orderBy?`: "display_name" | "updated" | "operating_system", `orderHow?`: "ASC" | "DESC", `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **apiHostGetHostTags**(`hostIdList`: Array‹string›, `perPage?`: number, `page?`: number, `orderBy?`: "display_name" | "updated" | "operating_system", `orderHow?`: "ASC" | "DESC", `search?`: string, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **apiHostHostCheckin**(`createCheckIn`: [CreateCheckIn](interfaces/createcheckin.md), `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **apiHostMergeFacts**(`hostIdList`: Array‹string›, `namespace`: string, `body`: object, `branchId?`: string, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **apiHostPatchHostById**(`hostIdList`: Array‹string›, `patchHostIn`: [PatchHostIn](interfaces/patchhostin.md), `branchId?`: string, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **apiHostReplaceFacts**(`hostIdList`: Array‹string›, `namespace`: string, `body`: object, `branchId?`: string, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

___

### `Const` HostsApiFactory

▸ **HostsApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [api.ts:4222](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L4222)*

HostsApi - factory interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`basePath?` | string |
`axios?` | AxiosInstance |

**Returns:** *object*

* **apiHostDeleteAllHosts**(`confirmDeleteAll?`: boolean, `options?`: any): *AxiosPromise‹void›*

* **apiHostDeleteHostById**(`hostIdList`: Array‹string›, `branchId?`: string, `options?`: any): *AxiosPromise‹void›*

* **apiHostDeleteHostsByFilter**(`displayName?`: string, `fqdn?`: string, `hostnameOrId?`: string, `insightsId?`: string, `providerId?`: string, `providerType?`: "alibaba" | "aws" | "azure" | "gcp" | "ibm", `registeredWith?`: Array‹"insights" | "yupana" | "puptoo" | "rhsm-conduit" | "cloud-connector" | "!yupana" | "!puptoo" | "!rhsm-conduit" | "!cloud-connector"›, `staleness?`: Array‹"fresh" | "stale" | "stale_warning" | "unknown"›, `tags?`: Array‹string›, `filter?`: object, `options?`: any): *AxiosPromise‹void›*

* **apiHostGetHostById**(`hostIdList`: Array‹string›, `branchId?`: string, `perPage?`: number, `page?`: number, `orderBy?`: "display_name" | "updated" | "operating_system", `orderHow?`: "ASC" | "DESC", `fields?`: object, `options?`: any): *AxiosPromise‹[HostQueryOutput](interfaces/hostqueryoutput.md)›*

* **apiHostGetHostList**(`displayName?`: string, `fqdn?`: string, `hostnameOrId?`: string, `insightsId?`: string, `providerId?`: string, `providerType?`: "alibaba" | "aws" | "azure" | "gcp" | "ibm", `branchId?`: string, `perPage?`: number, `page?`: number, `orderBy?`: "display_name" | "updated" | "operating_system", `orderHow?`: "ASC" | "DESC", `staleness?`: Array‹"fresh" | "stale" | "stale_warning" | "unknown"›, `tags?`: Array‹string›, `registeredWith?`: Array‹"insights" | "yupana" | "puptoo" | "rhsm-conduit" | "cloud-connector" | "!yupana" | "!puptoo" | "!rhsm-conduit" | "!cloud-connector"›, `filter?`: object, `fields?`: object, `options?`: any): *AxiosPromise‹[HostQueryOutput](interfaces/hostqueryoutput.md)›*

* **apiHostGetHostSystemProfileById**(`hostIdList`: Array‹string›, `perPage?`: number, `page?`: number, `orderBy?`: "display_name" | "updated" | "operating_system", `orderHow?`: "ASC" | "DESC", `branchId?`: string, `fields?`: object, `options?`: any): *AxiosPromise‹[SystemProfileByHostOut](interfaces/systemprofilebyhostout.md)›*

* **apiHostGetHostTagCount**(`hostIdList`: Array‹string›, `perPage?`: number, `page?`: number, `orderBy?`: "display_name" | "updated" | "operating_system", `orderHow?`: "ASC" | "DESC", `options?`: any): *AxiosPromise‹[TagCountOut](interfaces/tagcountout.md)›*

* **apiHostGetHostTags**(`hostIdList`: Array‹string›, `perPage?`: number, `page?`: number, `orderBy?`: "display_name" | "updated" | "operating_system", `orderHow?`: "ASC" | "DESC", `search?`: string, `options?`: any): *AxiosPromise‹[TagsOut](interfaces/tagsout.md)›*

* **apiHostHostCheckin**(`createCheckIn`: [CreateCheckIn](interfaces/createcheckin.md), `options?`: any): *AxiosPromise‹[CreateHostOut](interfaces/createhostout.md)›*

* **apiHostMergeFacts**(`hostIdList`: Array‹string›, `namespace`: string, `body`: object, `branchId?`: string, `options?`: any): *AxiosPromise‹void›*

* **apiHostPatchHostById**(`hostIdList`: Array‹string›, `patchHostIn`: [PatchHostIn](interfaces/patchhostin.md), `branchId?`: string, `options?`: any): *AxiosPromise‹void›*

* **apiHostReplaceFacts**(`hostIdList`: Array‹string›, `namespace`: string, `body`: object, `branchId?`: string, `options?`: any): *AxiosPromise‹void›*

___

### `Const` HostsApiFp

▸ **HostsApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:3991](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L3991)*

HostsApi - functional programming interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **apiHostDeleteAllHosts**(`confirmDeleteAll?`: boolean, `options?`: any): *Promise‹function›*

* **apiHostDeleteHostById**(`hostIdList`: Array‹string›, `branchId?`: string, `options?`: any): *Promise‹function›*

* **apiHostDeleteHostsByFilter**(`displayName?`: string, `fqdn?`: string, `hostnameOrId?`: string, `insightsId?`: string, `providerId?`: string, `providerType?`: "alibaba" | "aws" | "azure" | "gcp" | "ibm", `registeredWith?`: Array‹"insights" | "yupana" | "puptoo" | "rhsm-conduit" | "cloud-connector" | "!yupana" | "!puptoo" | "!rhsm-conduit" | "!cloud-connector"›, `staleness?`: Array‹"fresh" | "stale" | "stale_warning" | "unknown"›, `tags?`: Array‹string›, `filter?`: object, `options?`: any): *Promise‹function›*

* **apiHostGetHostById**(`hostIdList`: Array‹string›, `branchId?`: string, `perPage?`: number, `page?`: number, `orderBy?`: "display_name" | "updated" | "operating_system", `orderHow?`: "ASC" | "DESC", `fields?`: object, `options?`: any): *Promise‹function›*

* **apiHostGetHostList**(`displayName?`: string, `fqdn?`: string, `hostnameOrId?`: string, `insightsId?`: string, `providerId?`: string, `providerType?`: "alibaba" | "aws" | "azure" | "gcp" | "ibm", `branchId?`: string, `perPage?`: number, `page?`: number, `orderBy?`: "display_name" | "updated" | "operating_system", `orderHow?`: "ASC" | "DESC", `staleness?`: Array‹"fresh" | "stale" | "stale_warning" | "unknown"›, `tags?`: Array‹string›, `registeredWith?`: Array‹"insights" | "yupana" | "puptoo" | "rhsm-conduit" | "cloud-connector" | "!yupana" | "!puptoo" | "!rhsm-conduit" | "!cloud-connector"›, `filter?`: object, `fields?`: object, `options?`: any): *Promise‹function›*

* **apiHostGetHostSystemProfileById**(`hostIdList`: Array‹string›, `perPage?`: number, `page?`: number, `orderBy?`: "display_name" | "updated" | "operating_system", `orderHow?`: "ASC" | "DESC", `branchId?`: string, `fields?`: object, `options?`: any): *Promise‹function›*

* **apiHostGetHostTagCount**(`hostIdList`: Array‹string›, `perPage?`: number, `page?`: number, `orderBy?`: "display_name" | "updated" | "operating_system", `orderHow?`: "ASC" | "DESC", `options?`: any): *Promise‹function›*

* **apiHostGetHostTags**(`hostIdList`: Array‹string›, `perPage?`: number, `page?`: number, `orderBy?`: "display_name" | "updated" | "operating_system", `orderHow?`: "ASC" | "DESC", `search?`: string, `options?`: any): *Promise‹function›*

* **apiHostHostCheckin**(`createCheckIn`: [CreateCheckIn](interfaces/createcheckin.md), `options?`: any): *Promise‹function›*

* **apiHostMergeFacts**(`hostIdList`: Array‹string›, `namespace`: string, `body`: object, `branchId?`: string, `options?`: any): *Promise‹function›*

* **apiHostPatchHostById**(`hostIdList`: Array‹string›, `patchHostIn`: [PatchHostIn](interfaces/patchhostin.md), `branchId?`: string, `options?`: any): *Promise‹function›*

* **apiHostReplaceFacts**(`hostIdList`: Array‹string›, `namespace`: string, `body`: object, `branchId?`: string, `options?`: any): *Promise‹function›*

___

### `Const` SystemProfileApiAxiosParamCreator

▸ **SystemProfileApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:4613](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L4613)*

SystemProfileApi - axios parameter creator

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **apiSystemProfileGetOperatingSystem**(`tags?`: Array‹string›, `perPage?`: number, `page?`: number, `staleness?`: Array‹"fresh" | "stale" | "stale_warning" | "unknown"›, `registeredWith?`: Array‹"insights" | "yupana" | "puptoo" | "rhsm-conduit" | "cloud-connector" | "!yupana" | "!puptoo" | "!rhsm-conduit" | "!cloud-connector"›, `filter?`: object, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **apiSystemProfileGetSapSids**(`search?`: string, `tags?`: Array‹string›, `perPage?`: number, `page?`: number, `staleness?`: Array‹"fresh" | "stale" | "stale_warning" | "unknown"›, `registeredWith?`: Array‹"insights" | "yupana" | "puptoo" | "rhsm-conduit" | "cloud-connector" | "!yupana" | "!puptoo" | "!rhsm-conduit" | "!cloud-connector"›, `filter?`: object, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **apiSystemProfileGetSapSystem**(`tags?`: Array‹string›, `perPage?`: number, `page?`: number, `staleness?`: Array‹"fresh" | "stale" | "stale_warning" | "unknown"›, `registeredWith?`: Array‹"insights" | "yupana" | "puptoo" | "rhsm-conduit" | "cloud-connector" | "!yupana" | "!puptoo" | "!rhsm-conduit" | "!cloud-connector"›, `filter?`: object, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

___

### `Const` SystemProfileApiFactory

▸ **SystemProfileApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [api.ts:4898](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L4898)*

SystemProfileApi - factory interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`basePath?` | string |
`axios?` | AxiosInstance |

**Returns:** *object*

* **apiSystemProfileGetOperatingSystem**(`tags?`: Array‹string›, `perPage?`: number, `page?`: number, `staleness?`: Array‹"fresh" | "stale" | "stale_warning" | "unknown"›, `registeredWith?`: Array‹"insights" | "yupana" | "puptoo" | "rhsm-conduit" | "cloud-connector" | "!yupana" | "!puptoo" | "!rhsm-conduit" | "!cloud-connector"›, `filter?`: object, `options?`: any): *AxiosPromise‹[SystemProfileOperatingSystemOut](interfaces/systemprofileoperatingsystemout.md)›*

* **apiSystemProfileGetSapSids**(`search?`: string, `tags?`: Array‹string›, `perPage?`: number, `page?`: number, `staleness?`: Array‹"fresh" | "stale" | "stale_warning" | "unknown"›, `registeredWith?`: Array‹"insights" | "yupana" | "puptoo" | "rhsm-conduit" | "cloud-connector" | "!yupana" | "!puptoo" | "!rhsm-conduit" | "!cloud-connector"›, `filter?`: object, `options?`: any): *AxiosPromise‹[SystemProfileSapSystemOut](interfaces/systemprofilesapsystemout.md)›*

* **apiSystemProfileGetSapSystem**(`tags?`: Array‹string›, `perPage?`: number, `page?`: number, `staleness?`: Array‹"fresh" | "stale" | "stale_warning" | "unknown"›, `registeredWith?`: Array‹"insights" | "yupana" | "puptoo" | "rhsm-conduit" | "cloud-connector" | "!yupana" | "!puptoo" | "!rhsm-conduit" | "!cloud-connector"›, `filter?`: object, `options?`: any): *AxiosPromise‹[SystemProfileSapSystemOut](interfaces/systemprofilesapsystemout.md)›*

___

### `Const` SystemProfileApiFp

▸ **SystemProfileApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:4831](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L4831)*

SystemProfileApi - functional programming interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **apiSystemProfileGetOperatingSystem**(`tags?`: Array‹string›, `perPage?`: number, `page?`: number, `staleness?`: Array‹"fresh" | "stale" | "stale_warning" | "unknown"›, `registeredWith?`: Array‹"insights" | "yupana" | "puptoo" | "rhsm-conduit" | "cloud-connector" | "!yupana" | "!puptoo" | "!rhsm-conduit" | "!cloud-connector"›, `filter?`: object, `options?`: any): *Promise‹function›*

* **apiSystemProfileGetSapSids**(`search?`: string, `tags?`: Array‹string›, `perPage?`: number, `page?`: number, `staleness?`: Array‹"fresh" | "stale" | "stale_warning" | "unknown"›, `registeredWith?`: Array‹"insights" | "yupana" | "puptoo" | "rhsm-conduit" | "cloud-connector" | "!yupana" | "!puptoo" | "!rhsm-conduit" | "!cloud-connector"›, `filter?`: object, `options?`: any): *Promise‹function›*

* **apiSystemProfileGetSapSystem**(`tags?`: Array‹string›, `perPage?`: number, `page?`: number, `staleness?`: Array‹"fresh" | "stale" | "stale_warning" | "unknown"›, `registeredWith?`: Array‹"insights" | "yupana" | "puptoo" | "rhsm-conduit" | "cloud-connector" | "!yupana" | "!puptoo" | "!rhsm-conduit" | "!cloud-connector"›, `filter?`: object, `options?`: any): *Promise‹function›*

___

### `Const` TagsApiAxiosParamCreator

▸ **TagsApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:5015](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L5015)*

TagsApi - axios parameter creator

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **apiTagGetTags**(`tags?`: Array‹string›, `orderBy?`: "tag" | "count", `orderHow?`: "ASC" | "DESC", `perPage?`: number, `page?`: number, `staleness?`: Array‹"fresh" | "stale" | "stale_warning" | "unknown"›, `search?`: string, `displayName?`: string, `fqdn?`: string, `hostnameOrId?`: string, `insightsId?`: string, `providerId?`: string, `providerType?`: "alibaba" | "aws" | "azure" | "gcp" | "ibm", `registeredWith?`: Array‹"insights" | "yupana" | "puptoo" | "rhsm-conduit" | "cloud-connector" | "!yupana" | "!puptoo" | "!rhsm-conduit" | "!cloud-connector"›, `filter?`: object, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

___

### `Const` TagsApiFactory

▸ **TagsApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [api.ts:5174](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L5174)*

TagsApi - factory interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`basePath?` | string |
`axios?` | AxiosInstance |

**Returns:** *object*

* **apiTagGetTags**(`tags?`: Array‹string›, `orderBy?`: "tag" | "count", `orderHow?`: "ASC" | "DESC", `perPage?`: number, `page?`: number, `staleness?`: Array‹"fresh" | "stale" | "stale_warning" | "unknown"›, `search?`: string, `displayName?`: string, `fqdn?`: string, `hostnameOrId?`: string, `insightsId?`: string, `providerId?`: string, `providerType?`: "alibaba" | "aws" | "azure" | "gcp" | "ibm", `registeredWith?`: Array‹"insights" | "yupana" | "puptoo" | "rhsm-conduit" | "cloud-connector" | "!yupana" | "!puptoo" | "!rhsm-conduit" | "!cloud-connector"›, `filter?`: object, `options?`: any): *AxiosPromise‹[ActiveTags](interfaces/activetags.md)›*

___

### `Const` TagsApiFp

▸ **TagsApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:5137](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L5137)*

TagsApi - functional programming interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **apiTagGetTags**(`tags?`: Array‹string›, `orderBy?`: "tag" | "count", `orderHow?`: "ASC" | "DESC", `perPage?`: number, `page?`: number, `staleness?`: Array‹"fresh" | "stale" | "stale_warning" | "unknown"›, `search?`: string, `displayName?`: string, `fqdn?`: string, `hostnameOrId?`: string, `insightsId?`: string, `providerId?`: string, `providerType?`: "alibaba" | "aws" | "azure" | "gcp" | "ibm", `registeredWith?`: Array‹"insights" | "yupana" | "puptoo" | "rhsm-conduit" | "cloud-connector" | "!yupana" | "!puptoo" | "!rhsm-conduit" | "!cloud-connector"›, `filter?`: object, `options?`: any): *Promise‹function›*

___

### `Const` UnleashApiAxiosParamCreator

▸ **UnleashApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:5243](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L5243)*

UnleashApi - axios parameter creator

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **apiUnleashGetInventoryGroupsToggle**(`options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

___

### `Const` UnleashApiFactory

▸ **UnleashApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [api.ts:5312](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L5312)*

UnleashApi - factory interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`basePath?` | string |
`axios?` | AxiosInstance |

**Returns:** *object*

* **apiUnleashGetInventoryGroupsToggle**(`options?`: any): *AxiosPromise‹[UnleashToggleOut](interfaces/unleashtoggleout.md)›*

___

### `Const` UnleashApiFp

▸ **UnleashApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:5290](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L5290)*

UnleashApi - functional programming interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **apiUnleashGetInventoryGroupsToggle**(`options?`: any): *Promise‹function›*

## Object literals

### `Const` COLLECTION_FORMATS

### ▪ **COLLECTION_FORMATS**: *object*

*Defined in [base.ts:26](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/base.ts#L26)*

**`export`** 

###  csv

• **csv**: *string* = ","

*Defined in [base.ts:27](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/base.ts#L27)*

###  pipes

• **pipes**: *string* = "|"

*Defined in [base.ts:30](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/base.ts#L30)*

###  ssv

• **ssv**: *string* = " "

*Defined in [base.ts:28](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/base.ts#L28)*

###  tsv

• **tsv**: *string* = "	"

*Defined in [base.ts:29](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/base.ts#L29)*
