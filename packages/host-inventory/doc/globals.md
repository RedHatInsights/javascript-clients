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

### Classes

* [BaseAPI](classes/baseapi.md)
* [Configuration](classes/configuration.md)
* [DefaultApi](classes/defaultapi.md)
* [HostsApi](classes/hostsapi.md)
* [RequiredError](classes/requirederror.md)
* [SystemProfileApi](classes/systemprofileapi.md)
* [TagsApi](classes/tagsapi.md)

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
* [CreateHostOut](interfaces/createhostout.md)
* [CreateHostOutAllOf](interfaces/createhostoutallof.md)
* [DiskDevice](interfaces/diskdevice.md)
* [DnfModule](interfaces/dnfmodule.md)
* [FactSet](interfaces/factset.md)
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
* [SystemProfileSapSystemOut](interfaces/systemprofilesapsystemout.md)
* [SystemProfileSapSystemOutResults](interfaces/systemprofilesapsystemoutresults.md)
* [SystemProfileSystemPurpose](interfaces/systemprofilesystempurpose.md)
* [SystemProfileYumRepo](interfaces/systemprofileyumrepo.md)
* [TagCountOut](interfaces/tagcountout.md)
* [TagCountOutAllOf](interfaces/tagcountoutallof.md)
* [TagsOut](interfaces/tagsout.md)
* [TagsOutAllOf](interfaces/tagsoutallof.md)
* [YumRepo](interfaces/yumrepo.md)

### Variables

* [BASE_PATH](globals.md#const-base_path)

### Functions

* [DefaultApiAxiosParamCreator](globals.md#const-defaultapiaxiosparamcreator)
* [DefaultApiFactory](globals.md#const-defaultapifactory)
* [DefaultApiFp](globals.md#const-defaultapifp)
* [HostsApiAxiosParamCreator](globals.md#const-hostsapiaxiosparamcreator)
* [HostsApiFactory](globals.md#const-hostsapifactory)
* [HostsApiFp](globals.md#const-hostsapifp)
* [SystemProfileApiAxiosParamCreator](globals.md#const-systemprofileapiaxiosparamcreator)
* [SystemProfileApiFactory](globals.md#const-systemprofileapifactory)
* [SystemProfileApiFp](globals.md#const-systemprofileapifp)
* [TagsApiAxiosParamCreator](globals.md#const-tagsapiaxiosparamcreator)
* [TagsApiFactory](globals.md#const-tagsapifactory)
* [TagsApiFp](globals.md#const-tagsapifp)

### Object literals

* [COLLECTION_FORMATS](globals.md#const-collection_formats)

## Variables

### `Const` BASE_PATH

• **BASE_PATH**: *string* = "http://localhost".replace(/\/+$/, "")

*Defined in [base.ts:20](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/base.ts#L20)*

## Functions

### `Const` DefaultApiAxiosParamCreator

▸ **DefaultApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:2024](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2024)*

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

*Defined in [api.ts:2121](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2121)*

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

*Defined in [api.ts:2095](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2095)*

DefaultApi - functional programming interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **apiSystemProfileValidateSchema**(`repoBranch`: string, `repoFork?`: string, `days?`: number, `maxMessages?`: number, `options?`: any): *Promise‹function›*

___

### `Const` HostsApiAxiosParamCreator

▸ **HostsApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:2168](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2168)*

HostsApi - axios parameter creator

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **apiHostDeleteAllHosts**(`confirmDeleteAll?`: boolean, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **apiHostDeleteById**(`hostIdList`: Array‹string›, `branchId?`: string, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **apiHostDeleteHostsByFilter**(`displayName?`: string, `fqdn?`: string, `hostnameOrId?`: string, `insightsId?`: string, `providerId?`: string, `providerType?`: "alibaba" | "aws" | "azure" | "gcp" | "ibm", `registeredWith?`: Array‹"insights" | "yupana" | "puptoo" | "rhsm-conduit" | "cloud-connector" | "!yupana" | "!puptoo" | "!rhsm-conduit" | "!cloud-connector"›, `staleness?`: Array‹"fresh" | "stale" | "stale_warning" | "unknown"›, `tags?`: Array‹string›, `filter?`: object, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **apiHostGetHostById**(`hostIdList`: Array‹string›, `branchId?`: string, `perPage?`: number, `page?`: number, `orderBy?`: "display_name" | "updated" | "operating_system", `orderHow?`: "ASC" | "DESC", `fields?`: object, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **apiHostGetHostList**(`displayName?`: string, `fqdn?`: string, `hostnameOrId?`: string, `insightsId?`: string, `providerId?`: string, `providerType?`: "alibaba" | "aws" | "azure" | "gcp" | "ibm", `branchId?`: string, `perPage?`: number, `page?`: number, `orderBy?`: "display_name" | "updated" | "operating_system", `orderHow?`: "ASC" | "DESC", `staleness?`: Array‹"fresh" | "stale" | "stale_warning" | "unknown"›, `tags?`: Array‹string›, `registeredWith?`: Array‹"insights" | "yupana" | "puptoo" | "rhsm-conduit" | "cloud-connector" | "!yupana" | "!puptoo" | "!rhsm-conduit" | "!cloud-connector"›, `filter?`: object, `fields?`: object, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **apiHostGetHostSystemProfileById**(`hostIdList`: Array‹string›, `perPage?`: number, `page?`: number, `orderBy?`: "display_name" | "updated" | "operating_system", `orderHow?`: "ASC" | "DESC", `branchId?`: string, `fields?`: object, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **apiHostGetHostTagCount**(`hostIdList`: Array‹string›, `perPage?`: number, `page?`: number, `orderBy?`: "display_name" | "updated" | "operating_system", `orderHow?`: "ASC" | "DESC", `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **apiHostGetHostTags**(`hostIdList`: Array‹string›, `perPage?`: number, `page?`: number, `orderBy?`: "display_name" | "updated" | "operating_system", `orderHow?`: "ASC" | "DESC", `search?`: string, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **apiHostHostCheckin**(`createCheckIn`: [CreateCheckIn](interfaces/createcheckin.md), `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **apiHostMergeFacts**(`hostIdList`: Array‹string›, `namespace`: string, `body`: object, `branchId?`: string, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **apiHostPatchById**(`hostIdList`: Array‹string›, `patchHostIn`: [PatchHostIn](interfaces/patchhostin.md), `branchId?`: string, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **apiHostReplaceFacts**(`hostIdList`: Array‹string›, `namespace`: string, `body`: object, `branchId?`: string, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

___

### `Const` HostsApiFactory

▸ **HostsApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [api.ts:3229](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L3229)*

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

* **apiHostDeleteById**(`hostIdList`: Array‹string›, `branchId?`: string, `options?`: any): *AxiosPromise‹void›*

* **apiHostDeleteHostsByFilter**(`displayName?`: string, `fqdn?`: string, `hostnameOrId?`: string, `insightsId?`: string, `providerId?`: string, `providerType?`: "alibaba" | "aws" | "azure" | "gcp" | "ibm", `registeredWith?`: Array‹"insights" | "yupana" | "puptoo" | "rhsm-conduit" | "cloud-connector" | "!yupana" | "!puptoo" | "!rhsm-conduit" | "!cloud-connector"›, `staleness?`: Array‹"fresh" | "stale" | "stale_warning" | "unknown"›, `tags?`: Array‹string›, `filter?`: object, `options?`: any): *AxiosPromise‹void›*

* **apiHostGetHostById**(`hostIdList`: Array‹string›, `branchId?`: string, `perPage?`: number, `page?`: number, `orderBy?`: "display_name" | "updated" | "operating_system", `orderHow?`: "ASC" | "DESC", `fields?`: object, `options?`: any): *AxiosPromise‹[HostQueryOutput](interfaces/hostqueryoutput.md)›*

* **apiHostGetHostList**(`displayName?`: string, `fqdn?`: string, `hostnameOrId?`: string, `insightsId?`: string, `providerId?`: string, `providerType?`: "alibaba" | "aws" | "azure" | "gcp" | "ibm", `branchId?`: string, `perPage?`: number, `page?`: number, `orderBy?`: "display_name" | "updated" | "operating_system", `orderHow?`: "ASC" | "DESC", `staleness?`: Array‹"fresh" | "stale" | "stale_warning" | "unknown"›, `tags?`: Array‹string›, `registeredWith?`: Array‹"insights" | "yupana" | "puptoo" | "rhsm-conduit" | "cloud-connector" | "!yupana" | "!puptoo" | "!rhsm-conduit" | "!cloud-connector"›, `filter?`: object, `fields?`: object, `options?`: any): *AxiosPromise‹[HostQueryOutput](interfaces/hostqueryoutput.md)›*

* **apiHostGetHostSystemProfileById**(`hostIdList`: Array‹string›, `perPage?`: number, `page?`: number, `orderBy?`: "display_name" | "updated" | "operating_system", `orderHow?`: "ASC" | "DESC", `branchId?`: string, `fields?`: object, `options?`: any): *AxiosPromise‹[SystemProfileByHostOut](interfaces/systemprofilebyhostout.md)›*

* **apiHostGetHostTagCount**(`hostIdList`: Array‹string›, `perPage?`: number, `page?`: number, `orderBy?`: "display_name" | "updated" | "operating_system", `orderHow?`: "ASC" | "DESC", `options?`: any): *AxiosPromise‹[TagCountOut](interfaces/tagcountout.md)›*

* **apiHostGetHostTags**(`hostIdList`: Array‹string›, `perPage?`: number, `page?`: number, `orderBy?`: "display_name" | "updated" | "operating_system", `orderHow?`: "ASC" | "DESC", `search?`: string, `options?`: any): *AxiosPromise‹[TagsOut](interfaces/tagsout.md)›*

* **apiHostHostCheckin**(`createCheckIn`: [CreateCheckIn](interfaces/createcheckin.md), `options?`: any): *AxiosPromise‹[CreateHostOut](interfaces/createhostout.md)›*

* **apiHostMergeFacts**(`hostIdList`: Array‹string›, `namespace`: string, `body`: object, `branchId?`: string, `options?`: any): *AxiosPromise‹void›*

* **apiHostPatchById**(`hostIdList`: Array‹string›, `patchHostIn`: [PatchHostIn](interfaces/patchhostin.md), `branchId?`: string, `options?`: any): *AxiosPromise‹void›*

* **apiHostReplaceFacts**(`hostIdList`: Array‹string›, `namespace`: string, `body`: object, `branchId?`: string, `options?`: any): *AxiosPromise‹void›*

___

### `Const` HostsApiFp

▸ **HostsApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:2998](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2998)*

HostsApi - functional programming interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **apiHostDeleteAllHosts**(`confirmDeleteAll?`: boolean, `options?`: any): *Promise‹function›*

* **apiHostDeleteById**(`hostIdList`: Array‹string›, `branchId?`: string, `options?`: any): *Promise‹function›*

* **apiHostDeleteHostsByFilter**(`displayName?`: string, `fqdn?`: string, `hostnameOrId?`: string, `insightsId?`: string, `providerId?`: string, `providerType?`: "alibaba" | "aws" | "azure" | "gcp" | "ibm", `registeredWith?`: Array‹"insights" | "yupana" | "puptoo" | "rhsm-conduit" | "cloud-connector" | "!yupana" | "!puptoo" | "!rhsm-conduit" | "!cloud-connector"›, `staleness?`: Array‹"fresh" | "stale" | "stale_warning" | "unknown"›, `tags?`: Array‹string›, `filter?`: object, `options?`: any): *Promise‹function›*

* **apiHostGetHostById**(`hostIdList`: Array‹string›, `branchId?`: string, `perPage?`: number, `page?`: number, `orderBy?`: "display_name" | "updated" | "operating_system", `orderHow?`: "ASC" | "DESC", `fields?`: object, `options?`: any): *Promise‹function›*

* **apiHostGetHostList**(`displayName?`: string, `fqdn?`: string, `hostnameOrId?`: string, `insightsId?`: string, `providerId?`: string, `providerType?`: "alibaba" | "aws" | "azure" | "gcp" | "ibm", `branchId?`: string, `perPage?`: number, `page?`: number, `orderBy?`: "display_name" | "updated" | "operating_system", `orderHow?`: "ASC" | "DESC", `staleness?`: Array‹"fresh" | "stale" | "stale_warning" | "unknown"›, `tags?`: Array‹string›, `registeredWith?`: Array‹"insights" | "yupana" | "puptoo" | "rhsm-conduit" | "cloud-connector" | "!yupana" | "!puptoo" | "!rhsm-conduit" | "!cloud-connector"›, `filter?`: object, `fields?`: object, `options?`: any): *Promise‹function›*

* **apiHostGetHostSystemProfileById**(`hostIdList`: Array‹string›, `perPage?`: number, `page?`: number, `orderBy?`: "display_name" | "updated" | "operating_system", `orderHow?`: "ASC" | "DESC", `branchId?`: string, `fields?`: object, `options?`: any): *Promise‹function›*

* **apiHostGetHostTagCount**(`hostIdList`: Array‹string›, `perPage?`: number, `page?`: number, `orderBy?`: "display_name" | "updated" | "operating_system", `orderHow?`: "ASC" | "DESC", `options?`: any): *Promise‹function›*

* **apiHostGetHostTags**(`hostIdList`: Array‹string›, `perPage?`: number, `page?`: number, `orderBy?`: "display_name" | "updated" | "operating_system", `orderHow?`: "ASC" | "DESC", `search?`: string, `options?`: any): *Promise‹function›*

* **apiHostHostCheckin**(`createCheckIn`: [CreateCheckIn](interfaces/createcheckin.md), `options?`: any): *Promise‹function›*

* **apiHostMergeFacts**(`hostIdList`: Array‹string›, `namespace`: string, `body`: object, `branchId?`: string, `options?`: any): *Promise‹function›*

* **apiHostPatchById**(`hostIdList`: Array‹string›, `patchHostIn`: [PatchHostIn](interfaces/patchhostin.md), `branchId?`: string, `options?`: any): *Promise‹function›*

* **apiHostReplaceFacts**(`hostIdList`: Array‹string›, `namespace`: string, `body`: object, `branchId?`: string, `options?`: any): *Promise‹function›*

___

### `Const` SystemProfileApiAxiosParamCreator

▸ **SystemProfileApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:3620](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L3620)*

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

*Defined in [api.ts:3905](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L3905)*

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

*Defined in [api.ts:3838](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L3838)*

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

*Defined in [api.ts:4022](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L4022)*

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

*Defined in [api.ts:4181](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L4181)*

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

*Defined in [api.ts:4144](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L4144)*

TagsApi - functional programming interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **apiTagGetTags**(`tags?`: Array‹string›, `orderBy?`: "tag" | "count", `orderHow?`: "ASC" | "DESC", `perPage?`: number, `page?`: number, `staleness?`: Array‹"fresh" | "stale" | "stale_warning" | "unknown"›, `search?`: string, `displayName?`: string, `fqdn?`: string, `hostnameOrId?`: string, `insightsId?`: string, `providerId?`: string, `providerType?`: "alibaba" | "aws" | "azure" | "gcp" | "ibm", `registeredWith?`: Array‹"insights" | "yupana" | "puptoo" | "rhsm-conduit" | "cloud-connector" | "!yupana" | "!puptoo" | "!rhsm-conduit" | "!cloud-connector"›, `filter?`: object, `options?`: any): *Promise‹function›*

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
