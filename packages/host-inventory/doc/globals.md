[@redhat-cloud-services/host-inventory-client](README.md) › [Globals](globals.md)

# @redhat-cloud-services/host-inventory-client

## Index

### Classes

* [BaseAPI](classes/baseapi.md)
* [Configuration](classes/configuration.md)
* [HostsApi](classes/hostsapi.md)
* [RequiredError](classes/requirederror.md)
* [TagsApi](classes/tagsapi.md)

### Interfaces

* [ActiveTag](interfaces/activetag.md)
* [ActiveTags](interfaces/activetags.md)
* [BulkHostOut](interfaces/bulkhostout.md)
* [BulkHostOutDetails](interfaces/bulkhostoutdetails.md)
* [ConfigurationParameters](interfaces/configurationparameters.md)
* [CreateHostIn](interfaces/createhostin.md)
* [CreateHostOut](interfaces/createhostout.md)
* [DiskDevice](interfaces/diskdevice.md)
* [DiskDeviceOptions](interfaces/diskdeviceoptions.md)
* [DnfModule](interfaces/dnfmodule.md)
* [FactSet](interfaces/factset.md)
* [HostOut](interfaces/hostout.md)
* [HostOutAllOf](interfaces/hostoutallof.md)
* [HostQueryOutput](interfaces/hostqueryoutput.md)
* [HostSystemProfileOut](interfaces/hostsystemprofileout.md)
* [InstalledProduct](interfaces/installedproduct.md)
* [NetworkInterface](interfaces/networkinterface.md)
* [PatchHostIn](interfaces/patchhostin.md)
* [RequestArgs](interfaces/requestargs.md)
* [StructuredTag](interfaces/structuredtag.md)
* [SystemProfile](interfaces/systemprofile.md)
* [SystemProfileByHostOut](interfaces/systemprofilebyhostout.md)
* [TagCountOut](interfaces/tagcountout.md)
* [TagsOut](interfaces/tagsout.md)
* [YumRepo](interfaces/yumrepo.md)

### Variables

* [BASE_PATH](globals.md#const-base_path)

### Functions

* [HostsApiAxiosParamCreator](globals.md#const-hostsapiaxiosparamcreator)
* [HostsApiFactory](globals.md#const-hostsapifactory)
* [HostsApiFp](globals.md#const-hostsapifp)
* [TagsApiAxiosParamCreator](globals.md#const-tagsapiaxiosparamcreator)
* [TagsApiFactory](globals.md#const-tagsapifactory)
* [TagsApiFp](globals.md#const-tagsapifp)

### Object literals

* [COLLECTION_FORMATS](globals.md#const-collection_formats)

## Variables

### `Const` BASE_PATH

• **BASE_PATH**: *string* = "http://localhost".replace(/\/+$/, "")

*Defined in [packages/host-inventory/base.ts:20](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/base.ts#L20)*

## Functions

### `Const` HostsApiAxiosParamCreator

▸ **HostsApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/host-inventory/api.ts:1010](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1010)*

HostsApi - axios parameter creator

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **apiHostAddHostList**(`createHostIn`: Array‹[CreateHostIn](interfaces/createhostin.md)›, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **apiHostDeleteById**(`hostIdList`: Array‹string›, `branchId?`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **apiHostGetHostById**(`hostIdList`: Array‹string›, `branchId?`: string, `perPage?`: number, `page?`: number, `orderBy?`: "display_name" | "updated", `orderHow?`: "ASC" | "DESC", `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **apiHostGetHostList**(`displayName?`: string, `fqdn?`: string, `hostnameOrId?`: string, `insightsId?`: string, `branchId?`: string, `perPage?`: number, `page?`: number, `orderBy?`: "display_name" | "updated", `orderHow?`: "ASC" | "DESC", `staleness?`: Array‹"fresh" | "stale" | "stale_warning" | "unknown"›, `tags?`: Array‹string›, `registeredWith?`: "insights", `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **apiHostGetHostSystemProfileById**(`hostIdList`: Array‹string›, `perPage?`: number, `page?`: number, `orderBy?`: "display_name" | "updated", `orderHow?`: "ASC" | "DESC", `branchId?`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **apiHostGetHostTagCount**(`hostIdList`: Array‹string›, `perPage?`: number, `page?`: number, `orderBy?`: "display_name" | "updated", `orderHow?`: "ASC" | "DESC", `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **apiHostGetHostTags**(`hostIdList`: Array‹string›, `perPage?`: number, `page?`: number, `orderBy?`: "display_name" | "updated", `orderHow?`: "ASC" | "DESC", `search?`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **apiHostMergeFacts**(`hostIdList`: Array‹string›, `namespace`: string, `body`: object, `branchId?`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **apiHostPatchById**(`hostIdList`: Array‹string›, `patchHostIn`: [PatchHostIn](interfaces/patchhostin.md), `branchId?`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **apiHostReplaceFacts**(`hostIdList`: Array‹string›, `namespace`: string, `body`: object, `branchId?`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

___

### `Const` HostsApiFactory

▸ **HostsApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [packages/host-inventory/api.ts:1867](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1867)*

HostsApi - factory interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`basePath?` | string |
`axios?` | AxiosInstance |

**Returns:** *object*

* **apiHostAddHostList**(`createHostIn`: Array‹[CreateHostIn](interfaces/createhostin.md)›, `options?`: any): *AxiosPromise‹[BulkHostOut](interfaces/bulkhostout.md)›*

* **apiHostDeleteById**(`hostIdList`: Array‹string›, `branchId?`: string, `options?`: any): *AxiosPromise‹void›*

* **apiHostGetHostById**(`hostIdList`: Array‹string›, `branchId?`: string, `perPage?`: number, `page?`: number, `orderBy?`: "display_name" | "updated", `orderHow?`: "ASC" | "DESC", `options?`: any): *AxiosPromise‹[HostQueryOutput](interfaces/hostqueryoutput.md)›*

* **apiHostGetHostList**(`displayName?`: string, `fqdn?`: string, `hostnameOrId?`: string, `insightsId?`: string, `branchId?`: string, `perPage?`: number, `page?`: number, `orderBy?`: "display_name" | "updated", `orderHow?`: "ASC" | "DESC", `staleness?`: Array‹"fresh" | "stale" | "stale_warning" | "unknown"›, `tags?`: Array‹string›, `registeredWith?`: "insights", `options?`: any): *AxiosPromise‹[HostQueryOutput](interfaces/hostqueryoutput.md)›*

* **apiHostGetHostSystemProfileById**(`hostIdList`: Array‹string›, `perPage?`: number, `page?`: number, `orderBy?`: "display_name" | "updated", `orderHow?`: "ASC" | "DESC", `branchId?`: string, `options?`: any): *AxiosPromise‹[SystemProfileByHostOut](interfaces/systemprofilebyhostout.md)›*

* **apiHostGetHostTagCount**(`hostIdList`: Array‹string›, `perPage?`: number, `page?`: number, `orderBy?`: "display_name" | "updated", `orderHow?`: "ASC" | "DESC", `options?`: any): *AxiosPromise‹[TagCountOut](interfaces/tagcountout.md)›*

* **apiHostGetHostTags**(`hostIdList`: Array‹string›, `perPage?`: number, `page?`: number, `orderBy?`: "display_name" | "updated", `orderHow?`: "ASC" | "DESC", `search?`: string, `options?`: any): *AxiosPromise‹[TagsOut](interfaces/tagsout.md)›*

* **apiHostMergeFacts**(`hostIdList`: Array‹string›, `namespace`: string, `body`: object, `branchId?`: string, `options?`: any): *AxiosPromise‹void›*

* **apiHostPatchById**(`hostIdList`: Array‹string›, `patchHostIn`: [PatchHostIn](interfaces/patchhostin.md), `branchId?`: string, `options?`: any): *AxiosPromise‹void›*

* **apiHostReplaceFacts**(`hostIdList`: Array‹string›, `namespace`: string, `body`: object, `branchId?`: string, `options?`: any): *AxiosPromise‹void›*

___

### `Const` HostsApiFp

▸ **HostsApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/host-inventory/api.ts:1679](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1679)*

HostsApi - functional programming interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **apiHostAddHostList**(`createHostIn`: Array‹[CreateHostIn](interfaces/createhostin.md)›, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[BulkHostOut](interfaces/bulkhostout.md)›*

* **apiHostDeleteById**(`hostIdList`: Array‹string›, `branchId?`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹void›*

* **apiHostGetHostById**(`hostIdList`: Array‹string›, `branchId?`: string, `perPage?`: number, `page?`: number, `orderBy?`: "display_name" | "updated", `orderHow?`: "ASC" | "DESC", `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[HostQueryOutput](interfaces/hostqueryoutput.md)›*

* **apiHostGetHostList**(`displayName?`: string, `fqdn?`: string, `hostnameOrId?`: string, `insightsId?`: string, `branchId?`: string, `perPage?`: number, `page?`: number, `orderBy?`: "display_name" | "updated", `orderHow?`: "ASC" | "DESC", `staleness?`: Array‹"fresh" | "stale" | "stale_warning" | "unknown"›, `tags?`: Array‹string›, `registeredWith?`: "insights", `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[HostQueryOutput](interfaces/hostqueryoutput.md)›*

* **apiHostGetHostSystemProfileById**(`hostIdList`: Array‹string›, `perPage?`: number, `page?`: number, `orderBy?`: "display_name" | "updated", `orderHow?`: "ASC" | "DESC", `branchId?`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[SystemProfileByHostOut](interfaces/systemprofilebyhostout.md)›*

* **apiHostGetHostTagCount**(`hostIdList`: Array‹string›, `perPage?`: number, `page?`: number, `orderBy?`: "display_name" | "updated", `orderHow?`: "ASC" | "DESC", `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[TagCountOut](interfaces/tagcountout.md)›*

* **apiHostGetHostTags**(`hostIdList`: Array‹string›, `perPage?`: number, `page?`: number, `orderBy?`: "display_name" | "updated", `orderHow?`: "ASC" | "DESC", `search?`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[TagsOut](interfaces/tagsout.md)›*

* **apiHostMergeFacts**(`hostIdList`: Array‹string›, `namespace`: string, `body`: object, `branchId?`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹void›*

* **apiHostPatchById**(`hostIdList`: Array‹string›, `patchHostIn`: [PatchHostIn](interfaces/patchhostin.md), `branchId?`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹void›*

* **apiHostReplaceFacts**(`hostIdList`: Array‹string›, `namespace`: string, `body`: object, `branchId?`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹void›*

___

### `Const` TagsApiAxiosParamCreator

▸ **TagsApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/host-inventory/api.ts:2184](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2184)*

TagsApi - axios parameter creator

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **apiTagGetTags**(`tags?`: Array‹string›, `orderBy?`: "tag" | "count", `orderHow?`: "ASC" | "DESC", `perPage?`: number, `page?`: number, `staleness?`: Array‹"fresh" | "stale" | "stale_warning" | "unknown"›, `search?`: string, `registeredWith?`: "insights", `options`: any): *[RequestArgs](interfaces/requestargs.md)*

___

### `Const` TagsApiFactory

▸ **TagsApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [packages/host-inventory/api.ts:2301](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2301)*

TagsApi - factory interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`basePath?` | string |
`axios?` | AxiosInstance |

**Returns:** *object*

* **apiTagGetTags**(`tags?`: Array‹string›, `orderBy?`: "tag" | "count", `orderHow?`: "ASC" | "DESC", `perPage?`: number, `page?`: number, `staleness?`: Array‹"fresh" | "stale" | "stale_warning" | "unknown"›, `search?`: string, `registeredWith?`: "insights", `options?`: any): *AxiosPromise‹[ActiveTags](interfaces/activetags.md)›*

___

### `Const` TagsApiFp

▸ **TagsApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/host-inventory/api.ts:2271](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2271)*

TagsApi - functional programming interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **apiTagGetTags**(`tags?`: Array‹string›, `orderBy?`: "tag" | "count", `orderHow?`: "ASC" | "DESC", `perPage?`: number, `page?`: number, `staleness?`: Array‹"fresh" | "stale" | "stale_warning" | "unknown"›, `search?`: string, `registeredWith?`: "insights", `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ActiveTags](interfaces/activetags.md)›*

## Object literals

### `Const` COLLECTION_FORMATS

### ▪ **COLLECTION_FORMATS**: *object*

*Defined in [packages/host-inventory/base.ts:26](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/base.ts#L26)*

**`export`** 

###  csv

• **csv**: *string* = ","

*Defined in [packages/host-inventory/base.ts:27](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/base.ts#L27)*

###  pipes

• **pipes**: *string* = "|"

*Defined in [packages/host-inventory/base.ts:30](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/base.ts#L30)*

###  ssv

• **ssv**: *string* = " "

*Defined in [packages/host-inventory/base.ts:28](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/base.ts#L28)*

###  tsv

• **tsv**: *string* = "	"

*Defined in [packages/host-inventory/base.ts:29](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/base.ts#L29)*
