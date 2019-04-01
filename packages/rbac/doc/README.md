
Javascript client for Inventory API
===================================

If you want to use [RedHatInsights/insights-host-inventory](https://github.com/RedHatInsights/insights-host-inventory) you shouldn't use get requests directly, but rather use this client to integrate with this service.

Install
-------

NPM

```bash
npm install --save @redhat-cloud-services/host-inventory-client
```

Or Yarn

```bash
yarn add @redhat-cloud-services/host-inventory-client
```

### Usage

This client is using typescript and axios. Types are distributed with this package, so no need to define or install them separately.

To correctly bootstrap this API you should use this config (no need to define it multiple times, just one config and reimport it anywhere you want to use it).

```JS
// api.js
import axios from 'axios';
import { HostsApi } from '@redhat-cloud-services/host-inventory-client';
const instance = axios.create();

// BASE_PATH should be set in your constants file
const hostsApi = new HostsApi(undefined, BASE_PATH, instance);
export hostsApi;
```

If you want to add some interceptors you can use axios build in interceptors

```JS
// api.js
import axios from 'axios';
import { HostsApi } from '@redhat-cloud-services/host-inventory-client';
const instance = axios.create();

// Request interceptor
instance.interceptors.request.use((request) => {
    // some logic to do with request
});

// Response interceptor
instance.interceptors.response.use((response) => {
    // some logic to do with request
});

// Error interceptor
instance.interceptors.response.use(null, (error) => {
    // some logic to do with error
});

// BASE_PATH should be set in your constants file
const hostsApi = new HostsApi(undefined, BASE_PATH, instance);
export hostsApi;
```

API documentation
-----------------

*   [README](doc/README.md)

## Index

### Modules

* [ResourceDefinitionFilter](modules/resourcedefinitionfilter.md)

### Classes

* [AccessApi](classes/accessapi.md)
* [BaseAPI](classes/baseapi.md)
* [Configuration](classes/configuration.md)
* [GroupApi](classes/groupapi.md)
* [PolicyApi](classes/policyapi.md)
* [PrincipalApi](classes/principalapi.md)
* [RequiredError](classes/requirederror.md)
* [RoleApi](classes/roleapi.md)
* [StatusApi](classes/statusapi.md)

### Interfaces

* [Access](interfaces/access.md)
* [AccessPagination](interfaces/accesspagination.md)
* [ConfigurationParameters](interfaces/configurationparameters.md)
* [Group](interfaces/group.md)
* [GroupOut](interfaces/groupout.md)
* [GroupPagination](interfaces/grouppagination.md)
* [GroupPrincipalIn](interfaces/groupprincipalin.md)
* [GroupWithPrincipals](interfaces/groupwithprincipals.md)
* [ListPagination](interfaces/listpagination.md)
* [ModelError](interfaces/modelerror.md)
* [PaginationLinks](interfaces/paginationlinks.md)
* [PaginationMeta](interfaces/paginationmeta.md)
* [Policy](interfaces/policy.md)
* [PolicyExtended](interfaces/policyextended.md)
* [PolicyIn](interfaces/policyin.md)
* [PolicyPagination](interfaces/policypagination.md)
* [Principal](interfaces/principal.md)
* [PrincipalIn](interfaces/principalin.md)
* [PrincipalOut](interfaces/principalout.md)
* [PrincipalPagination](interfaces/principalpagination.md)
* [RequestArgs](interfaces/requestargs.md)
* [ResourceDefinition](interfaces/resourcedefinition.md)
* [Role](interfaces/role.md)
* [RoleIn](interfaces/rolein.md)
* [RoleOut](interfaces/roleout.md)
* [RolePagination](interfaces/rolepagination.md)
* [RoleWithAccess](interfaces/rolewithaccess.md)
* [Status](interfaces/status.md)
* [Timestamped](interfaces/timestamped.md)
* [UUID](interfaces/uuid.md)

### Variables

* [BASE_PATH](#base_path)

### Functions

* [AccessApiAxiosParamCreator](#accessapiaxiosparamcreator)
* [AccessApiFactory](#accessapifactory)
* [AccessApiFp](#accessapifp)
* [GroupApiAxiosParamCreator](#groupapiaxiosparamcreator)
* [GroupApiFactory](#groupapifactory)
* [GroupApiFp](#groupapifp)
* [PolicyApiAxiosParamCreator](#policyapiaxiosparamcreator)
* [PolicyApiFactory](#policyapifactory)
* [PolicyApiFp](#policyapifp)
* [PrincipalApiAxiosParamCreator](#principalapiaxiosparamcreator)
* [PrincipalApiFactory](#principalapifactory)
* [PrincipalApiFp](#principalapifp)
* [RoleApiAxiosParamCreator](#roleapiaxiosparamcreator)
* [RoleApiFactory](#roleapifactory)
* [RoleApiFp](#roleapifp)
* [StatusApiAxiosParamCreator](#statusapiaxiosparamcreator)
* [StatusApiFactory](#statusapifactory)
* [StatusApiFp](#statusapifp)

### Object literals

* [COLLECTION_FORMATS](#collection_formats)

---

## Variables

<a id="base_path"></a>

### `<Const>` BASE_PATH

**● BASE_PATH**: *`string`* =  "https://raw.githubusercontent.com/api/rbac/v1".replace(/\/+$/, "")

*Defined in api.ts:20*

___

## Functions

<a id="accessapiaxiosparamcreator"></a>

### `<Const>` AccessApiAxiosParamCreator

▸ **AccessApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in api.ts:882*

AccessApi - axios parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="accessapifactory"></a>

### `<Const>` AccessApiFactory

▸ **AccessApiFactory**(configuration?: *[Configuration](classes/configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): `object`

*Defined in api.ts:974*

AccessApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |
| `Optional` basePath | `string` |
| `Optional` axios | `AxiosInstance` |

**Returns:** `object`

___
<a id="accessapifp"></a>

### `<Const>` AccessApiFp

▸ **AccessApiFp**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in api.ts:948*

AccessApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="groupapiaxiosparamcreator"></a>

### `<Const>` GroupApiAxiosParamCreator

▸ **GroupApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in api.ts:1020*

GroupApi - axios parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="groupapifactory"></a>

### `<Const>` GroupApiFactory

▸ **GroupApiFactory**(configuration?: *[Configuration](classes/configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): `object`

*Defined in api.ts:1465*

GroupApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |
| `Optional` basePath | `string` |
| `Optional` axios | `AxiosInstance` |

**Returns:** `object`

___
<a id="groupapifp"></a>

### `<Const>` GroupApiFp

▸ **GroupApiFp**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in api.ts:1351*

GroupApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="policyapiaxiosparamcreator"></a>

### `<Const>` PolicyApiAxiosParamCreator

▸ **PolicyApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in api.ts:1651*

PolicyApi - axios parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="policyapifactory"></a>

### `<Const>` PolicyApiFactory

▸ **PolicyApiFactory**(configuration?: *[Configuration](classes/configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): `object`

*Defined in api.ts:1964*

PolicyApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |
| `Optional` basePath | `string` |
| `Optional` axios | `AxiosInstance` |

**Returns:** `object`

___
<a id="policyapifp"></a>

### `<Const>` PolicyApiFp

▸ **PolicyApiFp**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in api.ts:1881*

PolicyApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="principalapiaxiosparamcreator"></a>

### `<Const>` PrincipalApiAxiosParamCreator

▸ **PrincipalApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in api.ts:2100*

PrincipalApi - axios parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="principalapifactory"></a>

### `<Const>` PrincipalApiFactory

▸ **PrincipalApiFactory**(configuration?: *[Configuration](classes/configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): `object`

*Defined in api.ts:2229*

PrincipalApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |
| `Optional` basePath | `string` |
| `Optional` axios | `AxiosInstance` |

**Returns:** `object`

___
<a id="principalapifp"></a>

### `<Const>` PrincipalApiFp

▸ **PrincipalApiFp**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in api.ts:2191*

PrincipalApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="roleapiaxiosparamcreator"></a>

### `<Const>` RoleApiAxiosParamCreator

▸ **RoleApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in api.ts:2293*

RoleApi - axios parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="roleapifactory"></a>

### `<Const>` RoleApiFactory

▸ **RoleApiFactory**(configuration?: *[Configuration](classes/configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): `object`

*Defined in api.ts:2606*

RoleApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |
| `Optional` basePath | `string` |
| `Optional` axios | `AxiosInstance` |

**Returns:** `object`

___
<a id="roleapifp"></a>

### `<Const>` RoleApiFp

▸ **RoleApiFp**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in api.ts:2523*

RoleApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="statusapiaxiosparamcreator"></a>

### `<Const>` StatusApiAxiosParamCreator

▸ **StatusApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in api.ts:2742*

StatusApi - axios parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="statusapifactory"></a>

### `<Const>` StatusApiFactory

▸ **StatusApiFactory**(configuration?: *[Configuration](classes/configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): `object`

*Defined in api.ts:2806*

StatusApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |
| `Optional` basePath | `string` |
| `Optional` axios | `AxiosInstance` |

**Returns:** `object`

___
<a id="statusapifp"></a>

### `<Const>` StatusApiFp

▸ **StatusApiFp**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in api.ts:2784*

StatusApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___

## Object literals

<a id="collection_formats"></a>

### `<Const>` COLLECTION_FORMATS

**COLLECTION_FORMATS**: *`object`*

*Defined in api.ts:26*

*__export__*: 

<a id="collection_formats.csv"></a>

####  csv

**● csv**: *`string`* = ","

*Defined in api.ts:27*

___
<a id="collection_formats.pipes"></a>

####  pipes

**● pipes**: *`string`* = "|"

*Defined in api.ts:30*

___
<a id="collection_formats.ssv"></a>

####  ssv

**● ssv**: *`string`* = " "

*Defined in api.ts:28*

___
<a id="collection_formats.tsv"></a>

####  tsv

**● tsv**: *`string`* = "	"

*Defined in api.ts:29*

___

___

