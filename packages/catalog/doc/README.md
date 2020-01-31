
[

Javascript client for Catalog API
=================================

](#javascript-client-for-catalog-api)

If you want to use [ManageIQ/catalog-api](https://github.com/ManageIQ/catalog-api) you shouldn't use get requests directly, but rather use this client to integrate with this service.

[

Install
-------

](#install)

NPM

```bash
npm install --save @redhat-cloud-services/catalog-client
```

Or Yarn

```bash
yarn add @redhat-cloud-services/catalog-client
```

[

### Usage

](#usage)

This client is using typescript and axios. Types are distributed with this package, so no need to define or install them separately.

To correctly bootstrap this API you should use this config (no need to define it multiple times, just one config and reimport it anywhere you want to use it).

```JS
// api.js
import axios from 'axios';
import { AdminsApi } from '@redhat-cloud-services/catalog-client';
const instance = axios.create();

// BASE_PATH should be set in your constants file
const adminsApi = new AdminsApi(undefined, BASE_PATH, instance);
export adminsApi;
```

If you want to add some interceptors you can use axios build in interceptors

```JS
// api.js
import axios from 'axios';
import { AdminsApi } from '@redhat-cloud-services/catalog-client';
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
const adminsApi = new AdminsApi(undefined, BASE_PATH, instance);
export adminsApi;
```

[

API documentation
-----------------

](#api-documentation)

*   [README](doc/README.md)

## Index

### Modules

* [ApprovalRequest](modules/approvalrequest.md)
* [Order](modules/order.md)
* [OrderItem](modules/orderitem.md)
* [ProgressMessage](modules/progressmessage.md)
* [ShareInfo](modules/shareinfo.md)
* [SharePolicy](modules/sharepolicy.md)
* [UnsharePolicy](modules/unsharepolicy.md)

### Classes

* [BaseAPI](classes/baseapi.md)
* [Configuration](classes/configuration.md)
* [DefaultApi](classes/defaultapi.md)
* [IconApi](classes/iconapi.md)
* [OrderApi](classes/orderapi.md)
* [OrderItemApi](classes/orderitemapi.md)
* [PortfolioApi](classes/portfolioapi.md)
* [PortfolioItemApi](classes/portfolioitemapi.md)
* [RequiredError](classes/requirederror.md)
* [ServicePlansApi](classes/serviceplansapi.md)
* [SettingsApi](classes/settingsapi.md)
* [TagsApi](classes/tagsapi.md)
* [TenantApi](classes/tenantapi.md)

### Interfaces

* [ApprovalRequestsCollection](interfaces/approvalrequestscollection.md)
* [CollectionLinks](interfaces/collectionlinks.md)
* [CollectionMetadata](interfaces/collectionmetadata.md)
* [ConfigurationParameters](interfaces/configurationparameters.md)
* [CopyPortfolioItem](interfaces/copyportfolioitem.md)
* [CreateIcon](interfaces/createicon.md)
* [CreatePortfolioItem](interfaces/createportfolioitem.md)
* [GraphQLRequest](interfaces/graphqlrequest.md)
* [GraphQLResponse](interfaces/graphqlresponse.md)
* [Icon](interfaces/icon.md)
* [ImportServicePlan](interfaces/importserviceplan.md)
* [OrderItemsCollection](interfaces/orderitemscollection.md)
* [OrdersCollection](interfaces/orderscollection.md)
* [PatchModifiedServicePlan](interfaces/patchmodifiedserviceplan.md)
* [Portfolio](interfaces/portfolio.md)
* [PortfolioItem](interfaces/portfolioitem.md)
* [PortfolioItemNextName](interfaces/portfolioitemnextname.md)
* [PortfolioItemsCollection](interfaces/portfolioitemscollection.md)
* [PortfoliosCollection](interfaces/portfolioscollection.md)
* [ProgressMessagesCollection](interfaces/progressmessagescollection.md)
* [RequestArgs](interfaces/requestargs.md)
* [RestoreKey](interfaces/restorekey.md)
* [ServicePlan](interfaces/serviceplan.md)
* [Setting](interfaces/setting.md)
* [Tag](interfaces/tag.md)
* [TagsCollection](interfaces/tagscollection.md)
* [Tenant](interfaces/tenant.md)
* [TenantSettings](interfaces/tenantsettings.md)
* [TenantsCollection](interfaces/tenantscollection.md)

### Variables

* [BASE_PATH](#base_path)

### Functions

* [DefaultApiAxiosParamCreator](#defaultapiaxiosparamcreator)
* [DefaultApiFactory](#defaultapifactory)
* [DefaultApiFp](#defaultapifp)
* [IconApiAxiosParamCreator](#iconapiaxiosparamcreator)
* [IconApiFactory](#iconapifactory)
* [IconApiFp](#iconapifp)
* [OrderApiAxiosParamCreator](#orderapiaxiosparamcreator)
* [OrderApiFactory](#orderapifactory)
* [OrderApiFp](#orderapifp)
* [OrderItemApiAxiosParamCreator](#orderitemapiaxiosparamcreator)
* [OrderItemApiFactory](#orderitemapifactory)
* [OrderItemApiFp](#orderitemapifp)
* [PortfolioApiAxiosParamCreator](#portfolioapiaxiosparamcreator)
* [PortfolioApiFactory](#portfolioapifactory)
* [PortfolioApiFp](#portfolioapifp)
* [PortfolioItemApiAxiosParamCreator](#portfolioitemapiaxiosparamcreator)
* [PortfolioItemApiFactory](#portfolioitemapifactory)
* [PortfolioItemApiFp](#portfolioitemapifp)
* [ServicePlansApiAxiosParamCreator](#serviceplansapiaxiosparamcreator)
* [ServicePlansApiFactory](#serviceplansapifactory)
* [ServicePlansApiFp](#serviceplansapifp)
* [SettingsApiAxiosParamCreator](#settingsapiaxiosparamcreator)
* [SettingsApiFactory](#settingsapifactory)
* [SettingsApiFp](#settingsapifp)
* [TagsApiAxiosParamCreator](#tagsapiaxiosparamcreator)
* [TagsApiFactory](#tagsapifactory)
* [TagsApiFp](#tagsapifp)
* [TenantApiAxiosParamCreator](#tenantapiaxiosparamcreator)
* [TenantApiFactory](#tenantapifactory)
* [TenantApiFp](#tenantapifp)

### Object literals

* [COLLECTION_FORMATS](#collection_formats)

---

## Variables

<a id="base_path"></a>

### `<Const>` BASE_PATH

**● BASE_PATH**: *`string`* =  "https://cloud.redhat.com//api/catalog/v1.0".replace(/\/+$/, "")

*Defined in [api.ts:20](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L20)*

___

## Functions

<a id="defaultapiaxiosparamcreator"></a>

### `<Const>` DefaultApiAxiosParamCreator

▸ **DefaultApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:1235](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1235)*

DefaultApi - axios parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="defaultapifactory"></a>

### `<Const>` DefaultApiFactory

▸ **DefaultApiFactory**(configuration?: *[Configuration](classes/configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): `object`

*Defined in [api.ts:1355](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1355)*

DefaultApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |
| `Optional` basePath | `string` |
| `Optional` axios | `AxiosInstance` |

**Returns:** `object`

___
<a id="defaultapifp"></a>

### `<Const>` DefaultApiFp

▸ **DefaultApiFp**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:1319](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1319)*

DefaultApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="iconapiaxiosparamcreator"></a>

### `<Const>` IconApiAxiosParamCreator

▸ **IconApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:1415](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1415)*

IconApi - axios parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="iconapifactory"></a>

### `<Const>` IconApiFactory

▸ **IconApiFactory**(configuration?: *[Configuration](classes/configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): `object`

*Defined in [api.ts:1723](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1723)*

IconApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |
| `Optional` basePath | `string` |
| `Optional` axios | `AxiosInstance` |

**Returns:** `object`

___
<a id="iconapifp"></a>

### `<Const>` IconApiFp

▸ **IconApiFp**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:1641](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1641)*

IconApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="orderapiaxiosparamcreator"></a>

### `<Const>` OrderApiAxiosParamCreator

▸ **OrderApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:1857](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1857)*

OrderApi - axios parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="orderapifactory"></a>

### `<Const>` OrderApiFactory

▸ **OrderApiFactory**(configuration?: *[Configuration](classes/configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): `object`

*Defined in [api.ts:2454](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L2454)*

OrderApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |
| `Optional` basePath | `string` |
| `Optional` axios | `AxiosInstance` |

**Returns:** `object`

___
<a id="orderapifp"></a>

### `<Const>` OrderApiFp

▸ **OrderApiFp**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:2298](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L2298)*

OrderApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="orderitemapiaxiosparamcreator"></a>

### `<Const>` OrderItemApiAxiosParamCreator

▸ **OrderItemApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:2706](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L2706)*

OrderItemApi - axios parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="orderitemapifactory"></a>

### `<Const>` OrderItemApiFactory

▸ **OrderItemApiFactory**(configuration?: *[Configuration](classes/configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): `object`

*Defined in [api.ts:3099](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L3099)*

OrderItemApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |
| `Optional` basePath | `string` |
| `Optional` axios | `AxiosInstance` |

**Returns:** `object`

___
<a id="orderitemapifp"></a>

### `<Const>` OrderItemApiFp

▸ **OrderItemApiFp**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:2997](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L2997)*

OrderItemApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="portfolioapiaxiosparamcreator"></a>

### `<Const>` PortfolioApiAxiosParamCreator

▸ **PortfolioApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:3267](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L3267)*

PortfolioApi - axios parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="portfolioapifactory"></a>

### `<Const>` PortfolioApiFactory

▸ **PortfolioApiFactory**(configuration?: *[Configuration](classes/configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): `object`

*Defined in [api.ts:4190](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L4190)*

PortfolioApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |
| `Optional` basePath | `string` |
| `Optional` axios | `AxiosInstance` |

**Returns:** `object`

___
<a id="portfolioapifp"></a>

### `<Const>` PortfolioApiFp

▸ **PortfolioApiFp**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:3957](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L3957)*

PortfolioApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="portfolioitemapiaxiosparamcreator"></a>

### `<Const>` PortfolioItemApiAxiosParamCreator

▸ **PortfolioItemApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:4566](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L4566)*

PortfolioItemApi - axios parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="portfolioitemapifactory"></a>

### `<Const>` PortfolioItemApiFactory

▸ **PortfolioItemApiFactory**(configuration?: *[Configuration](classes/configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): `object`

*Defined in [api.ts:5410](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L5410)*

PortfolioItemApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |
| `Optional` basePath | `string` |
| `Optional` axios | `AxiosInstance` |

**Returns:** `object`

___
<a id="portfolioitemapifp"></a>

### `<Const>` PortfolioItemApiFp

▸ **PortfolioItemApiFp**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:5194](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L5194)*

PortfolioItemApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="serviceplansapiaxiosparamcreator"></a>

### `<Const>` ServicePlansApiAxiosParamCreator

▸ **ServicePlansApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:5758](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L5758)*

ServicePlansApi - axios parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="serviceplansapifactory"></a>

### `<Const>` ServicePlansApiFactory

▸ **ServicePlansApiFactory**(configuration?: *[Configuration](classes/configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): `object`

*Defined in [api.ts:6099](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L6099)*

ServicePlansApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |
| `Optional` basePath | `string` |
| `Optional` axios | `AxiosInstance` |

**Returns:** `object`

___
<a id="serviceplansapifp"></a>

### `<Const>` ServicePlansApiFp

▸ **ServicePlansApiFp**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:6005](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L6005)*

ServicePlansApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="settingsapiaxiosparamcreator"></a>

### `<Const>` SettingsApiAxiosParamCreator

▸ **SettingsApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:6251](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L6251)*

SettingsApi - axios parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="settingsapifactory"></a>

### `<Const>` SettingsApiFactory

▸ **SettingsApiFactory**(configuration?: *[Configuration](classes/configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): `object`

*Defined in [api.ts:6530](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L6530)*

SettingsApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |
| `Optional` basePath | `string` |
| `Optional` axios | `AxiosInstance` |

**Returns:** `object`

___
<a id="settingsapifp"></a>

### `<Const>` SettingsApiFp

▸ **SettingsApiFp**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:6452](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L6452)*

SettingsApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="tagsapiaxiosparamcreator"></a>

### `<Const>` TagsApiAxiosParamCreator

▸ **TagsApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:6656](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L6656)*

TagsApi - axios parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="tagsapifactory"></a>

### `<Const>` TagsApiFactory

▸ **TagsApiFactory**(configuration?: *[Configuration](classes/configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): `object`

*Defined in [api.ts:6720](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L6720)*

TagsApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |
| `Optional` basePath | `string` |
| `Optional` axios | `AxiosInstance` |

**Returns:** `object`

___
<a id="tagsapifp"></a>

### `<Const>` TagsApiFp

▸ **TagsApiFp**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:6698](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L6698)*

TagsApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="tenantapiaxiosparamcreator"></a>

### `<Const>` TenantApiAxiosParamCreator

▸ **TenantApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:6758](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L6758)*

TenantApi - axios parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="tenantapifactory"></a>

### `<Const>` TenantApiFactory

▸ **TenantApiFactory**(configuration?: *[Configuration](classes/configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): `object`

*Defined in [api.ts:6928](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L6928)*

TenantApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |
| `Optional` basePath | `string` |
| `Optional` axios | `AxiosInstance` |

**Returns:** `object`

___
<a id="tenantapifp"></a>

### `<Const>` TenantApiFp

▸ **TenantApiFp**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:6878](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L6878)*

TenantApi - functional programming interface

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

*Defined in [api.ts:26](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L26)*

*__export__*: 

<a id="collection_formats.csv"></a>

####  csv

**● csv**: *`string`* = ","

*Defined in [api.ts:27](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L27)*

___
<a id="collection_formats.pipes"></a>

####  pipes

**● pipes**: *`string`* = "|"

*Defined in [api.ts:30](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L30)*

___
<a id="collection_formats.ssv"></a>

####  ssv

**● ssv**: *`string`* = " "

*Defined in [api.ts:28](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L28)*

___
<a id="collection_formats.tsv"></a>

####  tsv

**● tsv**: *`string`* = "	"

*Defined in [api.ts:29](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L29)*

___

___

