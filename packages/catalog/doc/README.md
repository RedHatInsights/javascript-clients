
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

* [AddPortfolioItem](interfaces/addportfolioitem.md)
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
* [TagItem](interfaces/tagitem.md)
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

*Defined in [api.ts:1269](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1269)*

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

*Defined in [api.ts:1389](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1389)*

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

*Defined in [api.ts:1353](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1353)*

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

*Defined in [api.ts:1449](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1449)*

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

*Defined in [api.ts:1757](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1757)*

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

*Defined in [api.ts:1675](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1675)*

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

*Defined in [api.ts:1891](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1891)*

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

*Defined in [api.ts:2488](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L2488)*

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

*Defined in [api.ts:2332](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L2332)*

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

*Defined in [api.ts:2740](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L2740)*

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

*Defined in [api.ts:3133](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L3133)*

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

*Defined in [api.ts:3031](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L3031)*

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

*Defined in [api.ts:3301](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L3301)*

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

*Defined in [api.ts:4287](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L4287)*

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

*Defined in [api.ts:4039](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L4039)*

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

*Defined in [api.ts:4687](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L4687)*

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

*Defined in [api.ts:5531](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L5531)*

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

*Defined in [api.ts:5315](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L5315)*

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

*Defined in [api.ts:5879](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L5879)*

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

*Defined in [api.ts:6220](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L6220)*

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

*Defined in [api.ts:6126](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L6126)*

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

*Defined in [api.ts:6372](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L6372)*

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

*Defined in [api.ts:6651](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L6651)*

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

*Defined in [api.ts:6573](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L6573)*

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

*Defined in [api.ts:6777](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L6777)*

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

*Defined in [api.ts:7000](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L7000)*

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

*Defined in [api.ts:6936](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L6936)*

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

*Defined in [api.ts:7104](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L7104)*

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

*Defined in [api.ts:7274](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L7274)*

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

*Defined in [api.ts:7224](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L7224)*

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

