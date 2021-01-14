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

* [apiHostDeleteById](hostsapi.md#apihostdeletebyid)
* [apiHostGetHostById](hostsapi.md#apihostgethostbyid)
* [apiHostGetHostList](hostsapi.md#apihostgethostlist)
* [apiHostGetHostSystemProfileById](hostsapi.md#apihostgethostsystemprofilebyid)
* [apiHostGetHostTagCount](hostsapi.md#apihostgethosttagcount)
* [apiHostGetHostTags](hostsapi.md#apihostgethosttags)
* [apiHostHostCheckin](hostsapi.md#apihosthostcheckin)
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

###  apiHostDeleteById

▸ **apiHostDeleteById**(`hostIdList`: Array‹string›, `branchId?`: string, `options?`: any): *Promise‹AxiosResponse‹void››*

*Defined in [packages/host-inventory/api.ts:2457](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2457)*

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

**Returns:** *Promise‹AxiosResponse‹void››*

___

###  apiHostGetHostById

▸ **apiHostGetHostById**(`hostIdList`: Array‹string›, `branchId?`: string, `perPage?`: number, `page?`: number, `orderBy?`: "display_name" | "updated", `orderHow?`: "ASC" | "DESC", `options?`: any): *Promise‹AxiosResponse‹[HostQueryOutput](../interfaces/hostqueryoutput.md)››*

*Defined in [packages/host-inventory/api.ts:2474](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2474)*

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

**Returns:** *Promise‹AxiosResponse‹[HostQueryOutput](../interfaces/hostqueryoutput.md)››*

___

###  apiHostGetHostList

▸ **apiHostGetHostList**(`displayName?`: string, `fqdn?`: string, `hostnameOrId?`: string, `insightsId?`: string, `branchId?`: string, `perPage?`: number, `page?`: number, `orderBy?`: "display_name" | "updated", `orderHow?`: "ASC" | "DESC", `staleness?`: Array‹"fresh" | "stale" | "stale_warning" | "unknown"›, `tags?`: Array‹string›, `registeredWith?`: "insights", `filter?`: object, `options?`: any): *Promise‹AxiosResponse‹[HostQueryOutput](../interfaces/hostqueryoutput.md)››*

*Defined in [packages/host-inventory/api.ts:2498](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2498)*

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
`filter?` | object |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[HostQueryOutput](../interfaces/hostqueryoutput.md)››*

___

###  apiHostGetHostSystemProfileById

▸ **apiHostGetHostSystemProfileById**(`hostIdList`: Array‹string›, `perPage?`: number, `page?`: number, `orderBy?`: "display_name" | "updated", `orderHow?`: "ASC" | "DESC", `branchId?`: string, `options?`: any): *Promise‹AxiosResponse‹[SystemProfileByHostOut](../interfaces/systemprofilebyhostout.md)››*

*Defined in [packages/host-inventory/api.ts:2515](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2515)*

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

**Returns:** *Promise‹AxiosResponse‹[SystemProfileByHostOut](../interfaces/systemprofilebyhostout.md)››*

___

###  apiHostGetHostTagCount

▸ **apiHostGetHostTagCount**(`hostIdList`: Array‹string›, `perPage?`: number, `page?`: number, `orderBy?`: "display_name" | "updated", `orderHow?`: "ASC" | "DESC", `options?`: any): *Promise‹AxiosResponse‹[TagCountOut](../interfaces/tagcountout.md)››*

*Defined in [packages/host-inventory/api.ts:2531](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2531)*

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

**Returns:** *Promise‹AxiosResponse‹[TagCountOut](../interfaces/tagcountout.md)››*

___

###  apiHostGetHostTags

▸ **apiHostGetHostTags**(`hostIdList`: Array‹string›, `perPage?`: number, `page?`: number, `orderBy?`: "display_name" | "updated", `orderHow?`: "ASC" | "DESC", `search?`: string, `options?`: any): *Promise‹AxiosResponse‹[TagsOut](../interfaces/tagsout.md)››*

*Defined in [packages/host-inventory/api.ts:2548](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2548)*

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

**Returns:** *Promise‹AxiosResponse‹[TagsOut](../interfaces/tagsout.md)››*

___

###  apiHostHostCheckin

▸ **apiHostHostCheckin**(`createCheckIn`: [CreateCheckIn](../interfaces/createcheckin.md), `options?`: any): *Promise‹AxiosResponse‹[CreateHostOut](../interfaces/createhostout.md)››*

*Defined in [packages/host-inventory/api.ts:2560](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2560)*

Finds a host and updates its staleness timestamps. It uses the supplied canonical facts to determine which host to update. By default, the staleness timestamp is set to 1 hour from when the request is received; however, this can be overridden by supplying the interval. <br /><br /> Required permissions: inventory:hosts:write

**`summary`** Update staleness timestamps for a host matching the provided facts

**`throws`** {RequiredError}

**`memberof`** HostsApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`createCheckIn` | [CreateCheckIn](../interfaces/createcheckin.md) | Data required to create a check-in record for a host. |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[CreateHostOut](../interfaces/createhostout.md)››*

___

###  apiHostMergeFacts

▸ **apiHostMergeFacts**(`hostIdList`: Array‹string›, `namespace`: string, `body`: object, `branchId?`: string, `options?`: any): *Promise‹AxiosResponse‹void››*

*Defined in [packages/host-inventory/api.ts:2575](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2575)*

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

**Returns:** *Promise‹AxiosResponse‹void››*

___

###  apiHostPatchById

▸ **apiHostPatchById**(`hostIdList`: Array‹string›, `patchHostIn`: [PatchHostIn](../interfaces/patchhostin.md), `branchId?`: string, `options?`: any): *Promise‹AxiosResponse‹void››*

*Defined in [packages/host-inventory/api.ts:2589](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2589)*

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

**Returns:** *Promise‹AxiosResponse‹void››*

___

###  apiHostReplaceFacts

▸ **apiHostReplaceFacts**(`hostIdList`: Array‹string›, `namespace`: string, `body`: object, `branchId?`: string, `options?`: any): *Promise‹AxiosResponse‹void››*

*Defined in [packages/host-inventory/api.ts:2604](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2604)*

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

**Returns:** *Promise‹AxiosResponse‹void››*
