
javascript-clients
==================

Javascript clients for swagger API

## Index

### Modules

* [Order](modules/order.md)
* [OrderItem](modules/orderitem.md)
* [ProgressMessage](modules/progressmessage.md)

### Classes

* [AdminsApi](classes/adminsapi.md)
* [BaseAPI](classes/baseapi.md)
* [Configuration](classes/configuration.md)
* [DefaultApi](classes/defaultapi.md)
* [RequiredError](classes/requirederror.md)
* [UsersApi](classes/usersapi.md)

### Interfaces

* [AddPortfolioItem](interfaces/addportfolioitem.md)
* [CollectionLinks](interfaces/collectionlinks.md)
* [CollectionMetadata](interfaces/collectionmetadata.md)
* [ConfigurationParameters](interfaces/configurationparameters.md)
* [CreatePortfolioItem](interfaces/createportfolioitem.md)
* [OrderItemsCollection](interfaces/orderitemscollection.md)
* [OrdersCollection](interfaces/orderscollection.md)
* [Organization](interfaces/organization.md)
* [Portfolio](interfaces/portfolio.md)
* [PortfolioItem](interfaces/portfolioitem.md)
* [PortfolioItemsCollection](interfaces/portfolioitemscollection.md)
* [PortfoliosCollection](interfaces/portfolioscollection.md)
* [ProgressMessagesCollection](interfaces/progressmessagescollection.md)
* [RequestArgs](interfaces/requestargs.md)
* [ServicePlan](interfaces/serviceplan.md)
* [ShareInfo](interfaces/shareinfo.md)
* [SharePolicy](interfaces/sharepolicy.md)
* [UnsharePolicy](interfaces/unsharepolicy.md)

### Variables

* [BASE_PATH](#base_path)

### Functions

* [AdminsApiAxiosParamCreator](#adminsapiaxiosparamcreator)
* [AdminsApiFactory](#adminsapifactory)
* [AdminsApiFp](#adminsapifp)
* [DefaultApiAxiosParamCreator](#defaultapiaxiosparamcreator)
* [DefaultApiFactory](#defaultapifactory)
* [DefaultApiFp](#defaultapifp)
* [UsersApiAxiosParamCreator](#usersapiaxiosparamcreator)
* [UsersApiFactory](#usersapifactory)
* [UsersApiFp](#usersapifp)

### Object literals

* [COLLECTION_FORMATS](#collection_formats)

---

## Variables

<a id="base_path"></a>

### `<Const>` BASE_PATH

**● BASE_PATH**: *`string`* =  "https://localhost/api/catalog".replace(/\/+$/, "")

*Defined in api.ts:20*

___

## Functions

<a id="adminsapiaxiosparamcreator"></a>

### `<Const>` AdminsApiAxiosParamCreator

▸ **AdminsApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in api.ts:742*

AdminsApi - axios parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="adminsapifactory"></a>

### `<Const>` AdminsApiFactory

▸ **AdminsApiFactory**(configuration?: *[Configuration](classes/configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): `object`

*Defined in api.ts:2270*

AdminsApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |
| `Optional` basePath | `string` |
| `Optional` axios | `AxiosInstance` |

**Returns:** `object`

___
<a id="adminsapifp"></a>

### `<Const>` AdminsApiFp

▸ **AdminsApiFp**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in api.ts:1925*

AdminsApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="defaultapiaxiosparamcreator"></a>

### `<Const>` DefaultApiAxiosParamCreator

▸ **DefaultApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in api.ts:2822*

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

*Defined in api.ts:2911*

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

*Defined in api.ts:2887*

DefaultApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="usersapiaxiosparamcreator"></a>

### `<Const>` UsersApiAxiosParamCreator

▸ **UsersApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in api.ts:2953*

UsersApi - axios parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="usersapifactory"></a>

### `<Const>` UsersApiFactory

▸ **UsersApiFactory**(configuration?: *[Configuration](classes/configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): `object`

*Defined in api.ts:3832*

UsersApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |
| `Optional` basePath | `string` |
| `Optional` axios | `AxiosInstance` |

**Returns:** `object`

___
<a id="usersapifp"></a>

### `<Const>` UsersApiFp

▸ **UsersApiFp**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in api.ts:3630*

UsersApi - functional programming interface

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

