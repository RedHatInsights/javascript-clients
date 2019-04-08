[@redhat-cloud-services/host-inventory-client](../README.md) > [HostsApi](../classes/hostsapi.md)

# Class: HostsApi

HostsApi - object-oriented interface

*__export__*: 

*__class__*: HostsApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ HostsApi**

## Index

### Constructors

* [constructor](hostsapi.md#constructor)

### Properties

* [axios](hostsapi.md#axios)
* [basePath](hostsapi.md#basepath)
* [configuration](hostsapi.md#configuration)

### Methods

* [apiHostAddHostList](hostsapi.md#apihostaddhostlist)
* [apiHostGetHostById](hostsapi.md#apihostgethostbyid)
* [apiHostGetHostList](hostsapi.md#apihostgethostlist)
* [apiHostGetHostSystemProfileById](hostsapi.md#apihostgethostsystemprofilebyid)
* [apiHostMergeFacts](hostsapi.md#apihostmergefacts)
* [apiHostReplaceFacts](hostsapi.md#apihostreplacefacts)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new HostsApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): [HostsApi](hostsapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L49)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` axios | `AxiosInstance` |  globalAxios |

**Returns:** [HostsApi](hostsapi.md)

___

## Properties

<a id="axios"></a>

### `<Protected>` axios

**● axios**: *`AxiosInstance`*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#axios)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L51)*

___
<a id="basepath"></a>

### `<Protected>` basePath

**● basePath**: *`string`*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#basepath)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L51)*

___
<a id="configuration"></a>

### `<Protected>` configuration

**● configuration**: *[Configuration](configuration.md) \| `undefined`*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#configuration)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L49)*

___

## Methods

<a id="apihostaddhostlist"></a>

###  apiHostAddHostList

▸ **apiHostAddHostList**(createHostIn: *`Array`<[CreateHostIn](../interfaces/createhostin.md)>*, options?: *`any`*): `AxiosPromise`<[BulkHostOut](../interfaces/bulkhostout.md)>

*Defined in [api.ts:1418](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1418)*

Create a new host and add it to the host list or update an existing hosts. A host is updated if there is already one with the same canonicals facts and belonging to the same account.

*__summary__*: Create/update multiple host and add them to the host list

*__throws__*: {RequiredError}

*__memberof__*: HostsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| createHostIn | `Array`<[CreateHostIn](../interfaces/createhostin.md)> |  A list of host objects to be added to the host list |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[BulkHostOut](../interfaces/bulkhostout.md)>

___
<a id="apihostgethostbyid"></a>

###  apiHostGetHostById

▸ **apiHostGetHostById**(hostIdList: *`Array`<`string`>*, perPage?: *`number`*, page?: *`number`*, options?: *`any`*): `AxiosPromise`<[HostQueryOutput](../interfaces/hostqueryoutput.md)>

*Defined in [api.ts:1432](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1432)*

Find one or more hosts by their ID.

*__summary__*: Find hosts by their IDs

*__throws__*: {RequiredError}

*__memberof__*: HostsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| hostIdList | `Array`<`string`> |  A comma separated list of host IDs. |
| `Optional` perPage | `number` |
| `Optional` page | `number` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[HostQueryOutput](../interfaces/hostqueryoutput.md)>

___
<a id="apihostgethostlist"></a>

###  apiHostGetHostList

▸ **apiHostGetHostList**(displayName?: *`string`*, fqdn?: *`string`*, hostnameOrId?: *`string`*, insightsId?: *`string`*, perPage?: *`number`*, page?: *`number`*, options?: *`any`*): `AxiosPromise`<[HostQueryOutput](../interfaces/hostqueryoutput.md)>

*Defined in [api.ts:1449](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1449)*

Read the entire list of all hosts available to the account.

*__summary__*: Read the entire list of hosts

*__throws__*: {RequiredError}

*__memberof__*: HostsApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` displayName | `string` |
| `Optional` fqdn | `string` |
| `Optional` hostnameOrId | `string` |
| `Optional` insightsId | `string` |
| `Optional` perPage | `number` |
| `Optional` page | `number` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[HostQueryOutput](../interfaces/hostqueryoutput.md)>

___
<a id="apihostgethostsystemprofilebyid"></a>

###  apiHostGetHostSystemProfileById

▸ **apiHostGetHostSystemProfileById**(hostIdList: *`Array`<`string`>*, perPage?: *`number`*, page?: *`number`*, options?: *`any`*): `AxiosPromise`<[SystemProfileByHostOut](../interfaces/systemprofilebyhostout.md)>

*Defined in [api.ts:1463](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1463)*

Find one or more hosts by their ID and return the id and system profile

*__summary__*: Return one or more hosts system profile

*__throws__*: {RequiredError}

*__memberof__*: HostsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| hostIdList | `Array`<`string`> |  A comma separated list of host IDs. |
| `Optional` perPage | `number` |
| `Optional` page | `number` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[SystemProfileByHostOut](../interfaces/systemprofilebyhostout.md)>

___
<a id="apihostmergefacts"></a>

###  apiHostMergeFacts

▸ **apiHostMergeFacts**(hostIdList: *`Array`<`string`>*, namespace: *`string`*, body: *`any`*, options?: *`any`*): `AxiosPromise`<`Response`>

*Defined in [api.ts:1477](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1477)*

Merge one or multiple hosts facts under a namespace.

*__summary__*: Merge facts under a namespace

*__throws__*: {RequiredError}

*__memberof__*: HostsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| hostIdList | `Array`<`string`> |  IDs of the hosts that own the facts to be merged. |
| namespace | `string` |  A namespace of the merged facts. |
| body | `any` |  A dictionary with the new facts to merge with the original ones. |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<`Response`>

___
<a id="apihostreplacefacts"></a>

###  apiHostReplaceFacts

▸ **apiHostReplaceFacts**(hostIdList: *`Array`<`string`>*, namespace: *`string`*, body: *`any`*, options?: *`any`*): `AxiosPromise`<`Response`>

*Defined in [api.ts:1491](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1491)*

Replace facts under a namespace

*__summary__*: Replace facts under a namespace

*__throws__*: {RequiredError}

*__memberof__*: HostsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| hostIdList | `Array`<`string`> |  IDs of the hosts that own the facts to be replaced. |
| namespace | `string` |  A namespace of the merged facts. |
| body | `any` |  A dictionary with the new facts to replace the original ones. |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<`Response`>

___

