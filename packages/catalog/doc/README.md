
Javascript client for Catalog API
=================================

If you want to use [ManageIQ/catalog-api](https://github.com/ManageIQ/catalog-api) you shouldn't use get requests directly, but rather use this client to integrate with this service.

Install
-------

NPM

```bash
npm install --save @redhat-cloud-services/catalog-client
```

Or Yarn

```bash
yarn add @redhat-cloud-services/catalog-client
```

### Usage

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

API documentation
-----------------

*   [README](doc/README.md)

## Index

### Modules

* [ApprovalRequest](modules/approvalrequest.md)
* [Order](modules/order.md)
* [OrderItem](modules/orderitem.md)
* [ProgressMessage](modules/progressmessage.md)

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

### Interfaces

* [AddIcon](interfaces/addicon.md)
* [AddPortfolioItem](interfaces/addportfolioitem.md)
* [ApprovalRequestsCollection](interfaces/approvalrequestscollection.md)
* [CollectionLinks](interfaces/collectionlinks.md)
* [CollectionMetadata](interfaces/collectionmetadata.md)
* [ConfigurationParameters](interfaces/configurationparameters.md)
* [CopyPortfolioItem](interfaces/copyportfolioitem.md)
* [CreatePortfolioItem](interfaces/createportfolioitem.md)
* [Icon](interfaces/icon.md)
* [InlineObject](interfaces/inlineobject.md)
* [InlineResponse200](interfaces/inlineresponse200.md)
* [OrderItemsCollection](interfaces/orderitemscollection.md)
* [OrdersCollection](interfaces/orderscollection.md)
* [OverrideIcon](interfaces/overrideicon.md)
* [Portfolio](interfaces/portfolio.md)
* [PortfolioItem](interfaces/portfolioitem.md)
* [PortfolioItemNextName](interfaces/portfolioitemnextname.md)
* [PortfolioItemsCollection](interfaces/portfolioitemscollection.md)
* [PortfoliosCollection](interfaces/portfolioscollection.md)
* [ProgressMessagesCollection](interfaces/progressmessagescollection.md)
* [RequestArgs](interfaces/requestargs.md)
* [RestoreKey](interfaces/restorekey.md)
* [ServicePlan](interfaces/serviceplan.md)
* [ShareInfo](interfaces/shareinfo.md)
* [SharePolicy](interfaces/sharepolicy.md)
* [UnsharePolicy](interfaces/unsharepolicy.md)

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

*Defined in [api.ts:1022](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1022)*

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

*Defined in [api.ts:1142](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1142)*

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

*Defined in [api.ts:1106](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1106)*

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

*Defined in [api.ts:1202](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1202)*

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

*Defined in [api.ts:1553](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1553)*

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

*Defined in [api.ts:1458](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1458)*

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

*Defined in [api.ts:1707](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1707)*

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

*Defined in [api.ts:2135](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L2135)*

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

*Defined in [api.ts:2022](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L2022)*

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

*Defined in [api.ts:2319](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L2319)*

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

*Defined in [api.ts:2596](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L2596)*

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

*Defined in [api.ts:2523](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L2523)*

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

*Defined in [api.ts:2718](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L2718)*

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

*Defined in [api.ts:3454](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L3454)*

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

*Defined in [api.ts:3267](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L3267)*

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

*Defined in [api.ts:3756](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L3756)*

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

*Defined in [api.ts:4466](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L4466)*

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

*Defined in [api.ts:4282](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L4282)*

PortfolioItemApi - functional programming interface

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

