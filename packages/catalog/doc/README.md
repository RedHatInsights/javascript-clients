
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
* [OrderApi](classes/orderapi.md)
* [OrderItemApi](classes/orderitemapi.md)
* [PortfolioApi](classes/portfolioapi.md)
* [PortfolioItemApi](classes/portfolioitemapi.md)
* [RequiredError](classes/requirederror.md)

### Interfaces

* [AddPortfolioItem](interfaces/addportfolioitem.md)
* [ApprovalRequestsCollection](interfaces/approvalrequestscollection.md)
* [CollectionLinks](interfaces/collectionlinks.md)
* [CollectionMetadata](interfaces/collectionmetadata.md)
* [ConfigurationParameters](interfaces/configurationparameters.md)
* [CopyPortfolioItem](interfaces/copyportfolioitem.md)
* [CreatePortfolioItem](interfaces/createportfolioitem.md)
* [InlineObject](interfaces/inlineobject.md)
* [InlineResponse200](interfaces/inlineresponse200.md)
* [OrderItemsCollection](interfaces/orderitemscollection.md)
* [OrdersCollection](interfaces/orderscollection.md)
* [Portfolio](interfaces/portfolio.md)
* [PortfolioItem](interfaces/portfolioitem.md)
* [PortfolioItemNextName](interfaces/portfolioitemnextname.md)
* [PortfolioItemsCollection](interfaces/portfolioitemscollection.md)
* [PortfoliosCollection](interfaces/portfolioscollection.md)
* [ProgressMessagesCollection](interfaces/progressmessagescollection.md)
* [RequestArgs](interfaces/requestargs.md)
* [RestoreKey](interfaces/restorekey.md)
* [ServiceOfferingIcon](interfaces/serviceofferingicon.md)
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

*Defined in [api.ts:992](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L992)*

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

*Defined in [api.ts:1112](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1112)*

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

*Defined in [api.ts:1076](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1076)*

DefaultApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="orderapiaxiosparamcreator"></a>

### `<Const>` OrderApiAxiosParamCreator

▸ **OrderApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:1172](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1172)*

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

*Defined in [api.ts:1547](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1547)*

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

*Defined in [api.ts:1448](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1448)*

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

*Defined in [api.ts:1709](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1709)*

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

*Defined in [api.ts:1986](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1986)*

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

*Defined in [api.ts:1913](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1913)*

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

*Defined in [api.ts:2108](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L2108)*

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

*Defined in [api.ts:2844](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L2844)*

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

*Defined in [api.ts:2657](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L2657)*

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

*Defined in [api.ts:3146](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L3146)*

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

*Defined in [api.ts:3793](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L3793)*

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

*Defined in [api.ts:3624](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L3624)*

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

