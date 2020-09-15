[@redhat-cloud-services/host-inventory-client](../README.md) › [Globals](../globals.md) › [HostsApi](hostsapi.md)

# Class: HostsApi

HostsApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **HostsApi**

## Index

### Constructors

* [constructor](hostsapi.md#constructor)

### Properties

* [axios](hostsapi.md#protected-axios)
* [basePath](hostsapi.md#protected-basepath)
* [configuration](hostsapi.md#protected-configuration)

### Methods

* [apiHostAddHostList](hostsapi.md#apihostaddhostlist)
* [apiHostDeleteById](hostsapi.md#apihostdeletebyid)
* [apiHostGetHostById](hostsapi.md#apihostgethostbyid)
* [apiHostGetHostList](hostsapi.md#apihostgethostlist)
* [apiHostGetHostSystemProfileById](hostsapi.md#apihostgethostsystemprofilebyid)
* [apiHostGetHostTagCount](hostsapi.md#apihostgethosttagcount)
* [apiHostGetHostTags](hostsapi.md#apihostgethosttags)
* [apiHostMergeFacts](hostsapi.md#apihostmergefacts)
* [apiHostPatchById](hostsapi.md#apihostpatchbyid)
* [apiHostReplaceFacts](hostsapi.md#apihostreplacefacts)

## Constructors

###  constructor

\+ **new HostsApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[HostsApi](hostsapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [packages/host-inventory/base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/base.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** *[HostsApi](hostsapi.md)*

## Properties

### `Protected` axios

• **axios**: *AxiosInstance*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#protected-axios)*

*Defined in [packages/host-inventory/base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/base.ts#L51)*

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

*Defined in [packages/host-inventory/base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/base.ts#L51)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [packages/host-inventory/base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/base.ts#L49)*

## Methods

###  apiHostAddHostList

▸ **apiHostAddHostList**(`createHostIn`: Array‹[CreateHostIn](../interfaces/createhostin.md)›, `options?`: any): *AxiosPromise‹[BulkHostOut](../interfaces/bulkhostout.md)›*

*Defined in [packages/host-inventory/api.ts:2038](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2038)*

Create a new host and add it to the host list or update an existing hosts. A host is updated if there is already one with the same canonicals facts and belonging to the same account. <br /><br /> Required permissions: inventory:hosts:write <br /><br /> NOTICE: This operation is deprecated. The explicit creation of hosts is no longer supported. Hosts are created automatically based on uploads processed by the [payload ingress service](/docs/api/ingress#operations-default-post_upload) instead.

**`summary`** Create/update multiple host and add them to the host list

**`throws`** {RequiredError}

**`memberof`** HostsApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`createHostIn` | Array‹[CreateHostIn](../interfaces/createhostin.md)› | A list of host objects to be added to the host list |
`options?` | any | - |

**Returns:** *AxiosPromise‹[BulkHostOut](../interfaces/bulkhostout.md)›*

___

###  apiHostDeleteById

▸ **apiHostDeleteById**(`hostIdList`: Array‹string›, `branchId?`: string, `options?`: any): *AxiosPromise‹void›*

*Defined in [packages/host-inventory/api.ts:2051](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2051)*

Delete hosts by IDs <br /><br /> Required permissions: inventory:hosts:write

**`summary`** Delete hosts by IDs

**`throws`** {RequiredError}

**`memberof`** HostsApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`hostIdList` | Array‹string› | A comma separated list of host IDs. |
`branchId?` | string | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹void›*

___

###  apiHostGetHostById

▸ **apiHostGetHostById**(`hostIdList`: Array‹string›, `branchId?`: string, `perPage?`: number, `page?`: number, `orderBy?`: "display_name" | "updated", `orderHow?`: "ASC" | "DESC", `options?`: any): *AxiosPromise‹[HostQueryOutput](../interfaces/hostqueryoutput.md)›*

*Defined in [packages/host-inventory/api.ts:2068](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2068)*

Find one or more hosts by their ID. <br /><br /> Required permissions: inventory:hosts:read

**`summary`** Find hosts by their IDs

**`throws`** {RequiredError}

**`memberof`** HostsApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`hostIdList` | Array‹string› | A comma separated list of host IDs. |
`branchId?` | string | - |
`perPage?` | number | - |
`page?` | number | - |
`orderBy?` | "display_name" &#124; "updated" | - |
`orderHow?` | "ASC" &#124; "DESC" | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[HostQueryOutput](../interfaces/hostqueryoutput.md)›*

___

###  apiHostGetHostList

▸ **apiHostGetHostList**(`displayName?`: string, `fqdn?`: string, `hostnameOrId?`: string, `insightsId?`: string, `branchId?`: string, `perPage?`: number, `page?`: number, `orderBy?`: "display_name" | "updated", `orderHow?`: "ASC" | "DESC", `staleness?`: Array‹"fresh" | "stale" | "stale_warning" | "unknown"›, `tags?`: Array‹string›, `registeredWith?`: "insights", `options?`: any): *AxiosPromise‹[HostQueryOutput](../interfaces/hostqueryoutput.md)›*

*Defined in [packages/host-inventory/api.ts:2091](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2091)*

Read the entire list of all hosts available to the account. <br /><br /> Required permissions: inventory:hosts:read

**`summary`** Read the entire list of hosts

**`throws`** {RequiredError}

**`memberof`** HostsApi

**Parameters:**

Name | Type |
------ | ------ |
`displayName?` | string |
`fqdn?` | string |
`hostnameOrId?` | string |
`insightsId?` | string |
`branchId?` | string |
`perPage?` | number |
`page?` | number |
`orderBy?` | "display_name" &#124; "updated" |
`orderHow?` | "ASC" &#124; "DESC" |
`staleness?` | Array‹"fresh" &#124; "stale" &#124; "stale_warning" &#124; "unknown"› |
`tags?` | Array‹string› |
`registeredWith?` | "insights" |
`options?` | any |

**Returns:** *AxiosPromise‹[HostQueryOutput](../interfaces/hostqueryoutput.md)›*

___

###  apiHostGetHostSystemProfileById

▸ **apiHostGetHostSystemProfileById**(`hostIdList`: Array‹string›, `perPage?`: number, `page?`: number, `orderBy?`: "display_name" | "updated", `orderHow?`: "ASC" | "DESC", `branchId?`: string, `options?`: any): *AxiosPromise‹[SystemProfileByHostOut](../interfaces/systemprofilebyhostout.md)›*

*Defined in [packages/host-inventory/api.ts:2108](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2108)*

Find one or more hosts by their ID and return the id and system profile <br /><br /> Required permissions: inventory:hosts:read

**`summary`** Return one or more hosts system profile

**`throws`** {RequiredError}

**`memberof`** HostsApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`hostIdList` | Array‹string› | A comma separated list of host IDs. |
`perPage?` | number | - |
`page?` | number | - |
`orderBy?` | "display_name" &#124; "updated" | - |
`orderHow?` | "ASC" &#124; "DESC" | - |
`branchId?` | string | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[SystemProfileByHostOut](../interfaces/systemprofilebyhostout.md)›*

___

###  apiHostGetHostTagCount

▸ **apiHostGetHostTagCount**(`hostIdList`: Array‹string›, `perPage?`: number, `page?`: number, `orderBy?`: "display_name" | "updated", `orderHow?`: "ASC" | "DESC", `options?`: any): *AxiosPromise‹[TagCountOut](../interfaces/tagcountout.md)›*

*Defined in [packages/host-inventory/api.ts:2124](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2124)*

Get the number of tags on a host <br /><br /> Required permissions: inventory:hosts:read

**`summary`** Get the number of tags on a host

**`throws`** {RequiredError}

**`memberof`** HostsApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`hostIdList` | Array‹string› | A comma separated list of host IDs. |
`perPage?` | number | - |
`page?` | number | - |
`orderBy?` | "display_name" &#124; "updated" | - |
`orderHow?` | "ASC" &#124; "DESC" | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[TagCountOut](../interfaces/tagcountout.md)›*

___

###  apiHostGetHostTags

▸ **apiHostGetHostTags**(`hostIdList`: Array‹string›, `perPage?`: number, `page?`: number, `orderBy?`: "display_name" | "updated", `orderHow?`: "ASC" | "DESC", `search?`: string, `options?`: any): *AxiosPromise‹[TagsOut](../interfaces/tagsout.md)›*

*Defined in [packages/host-inventory/api.ts:2141](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2141)*

Get the tags on a host <br /><br /> Required permissions: inventory:hosts:read

**`summary`** Get the tags on a host

**`throws`** {RequiredError}

**`memberof`** HostsApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`hostIdList` | Array‹string› | A comma separated list of host IDs. |
`perPage?` | number | - |
`page?` | number | - |
`orderBy?` | "display_name" &#124; "updated" | - |
`orderHow?` | "ASC" &#124; "DESC" | - |
`search?` | string | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[TagsOut](../interfaces/tagsout.md)›*

___

###  apiHostMergeFacts

▸ **apiHostMergeFacts**(`hostIdList`: Array‹string›, `namespace`: string, `body`: object, `branchId?`: string, `options?`: any): *AxiosPromise‹void›*

*Defined in [packages/host-inventory/api.ts:2156](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2156)*

Merge one or multiple hosts facts under a namespace. <br /><br /> Required permissions: inventory:hosts:write

**`summary`** Merge facts under a namespace

**`throws`** {RequiredError}

**`memberof`** HostsApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`hostIdList` | Array‹string› | A comma separated list of host IDs. |
`namespace` | string | A namespace of the merged facts. |
`body` | object | A dictionary with the new facts to merge with the original ones. |
`branchId?` | string | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹void›*

___

###  apiHostPatchById

▸ **apiHostPatchById**(`hostIdList`: Array‹string›, `patchHostIn`: [PatchHostIn](../interfaces/patchhostin.md), `branchId?`: string, `options?`: any): *AxiosPromise‹void›*

*Defined in [packages/host-inventory/api.ts:2170](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2170)*

Update a host <br /><br /> Required permissions: inventory:hosts:write

**`summary`** Update a host

**`throws`** {RequiredError}

**`memberof`** HostsApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`hostIdList` | Array‹string› | A comma separated list of host IDs. |
`patchHostIn` | [PatchHostIn](../interfaces/patchhostin.md) | A group of fields to be updated on the host |
`branchId?` | string | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹void›*

___

###  apiHostReplaceFacts

▸ **apiHostReplaceFacts**(`hostIdList`: Array‹string›, `namespace`: string, `body`: object, `branchId?`: string, `options?`: any): *AxiosPromise‹void›*

*Defined in [packages/host-inventory/api.ts:2185](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2185)*

Replace facts under a namespace <br /><br /> Required permissions: inventory:hosts:write

**`summary`** Replace facts under a namespace

**`throws`** {RequiredError}

**`memberof`** HostsApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`hostIdList` | Array‹string› | A comma separated list of host IDs. |
`namespace` | string | A namespace of the merged facts. |
`body` | object | A dictionary with the new facts to replace the original ones. |
`branchId?` | string | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹void›*
