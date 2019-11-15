
[

Javascript client for Hooks API
===============================

](#javascript-client-for-hooks-api)

If you want to use [RedHatInsights/notifications-backend](https://github.com/RedHatInsights/notifications-backend) you shouldn't use get requests directly, but rather use this client to integrate with this service.

[

Install
-------

](#install)

NPM

```bash
npm install --save @redhat-cloud-services/notifications-client
```

Or Yarn

```bash
yarn add @redhat-cloud-services/notifications-client
```

[

### Usage

](#usage)

This client is using typescript and axios. Types are distributed with this package, so no need to define or install them separately.

To correctly bootstrap this API you should use this config (no need to define it multiple times, just one config and reimport it anywhere you want to use it).

```JS
// api.js
import axios from 'axios';
import { BaseAPI } from '@redhat-cloud-services/notifications-client';
const instance = axios.create();

// BASE_PATH should be set in your constants file
const hooksApi = new BaseAPI(undefined, BASE_PATH, instance);
export hooksApi;
```

If you want to add some interceptors you can use axios build in interceptors

```JS
// api.js
import axios from 'axios';
import { BaseAPI } from '@redhat-cloud-services/host-inventory-client';
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
const hooksApi = new BaseAPI(undefined, BASE_PATH, instance);
export hooksApi;
```

[

API documentation
-----------------

](#api-documentation)

*   [README](doc/README.md)

## Index

### Modules

* [App](modules/app.md)
* [Endpoint](modules/endpoint.md)
* [EndpointAttributes](modules/endpointattributes.md)
* [EventType](modules/eventtype.md)
* [InlineResponse2004Data](modules/inlineresponse2004data.md)
* [Level](modules/level.md)

### Classes

* [AppRegistrationApi](classes/appregistrationapi.md)
* [AppsApi](classes/appsapi.md)
* [BaseAPI](classes/baseapi.md)
* [Configuration](classes/configuration.md)
* [EndpointsApi](classes/endpointsapi.md)
* [FiltersApi](classes/filtersapi.md)
* [RequiredError](classes/requirederror.md)

### Interfaces

* [AppAttributes](interfaces/appattributes.md)
* [AppRelationships](interfaces/apprelationships.md)
* [AppsRegisterApplication](interfaces/appsregisterapplication.md)
* [AppsRegisterEventTypes](interfaces/appsregistereventtypes.md)
* [AppsRegisterEventTypesLevels](interfaces/appsregistereventtypeslevels.md)
* [ConfigurationParameters](interfaces/configurationparameters.md)
* [EndpointsEndpoint](interfaces/endpointsendpoint.md)
* [EndpointsEndpointFilter](interfaces/endpointsendpointfilter.md)
* [EndpointsIdEndpoint](interfaces/endpointsidendpoint.md)
* [EndpointsIdEndpointFilter](interfaces/endpointsidendpointfilter.md)
* [Errors](interfaces/errors.md)
* [ErrorsErrors](interfaces/errorserrors.md)
* [ErrorsSource](interfaces/errorssource.md)
* [EventTypeAttributes](interfaces/eventtypeattributes.md)
* [EventTypeRelationships](interfaces/eventtyperelationships.md)
* [InlineObject](interfaces/inlineobject.md)
* [InlineObject1](interfaces/inlineobject1.md)
* [InlineObject2](interfaces/inlineobject2.md)
* [InlineResponse200](interfaces/inlineresponse200.md)
* [InlineResponse2001](interfaces/inlineresponse2001.md)
* [InlineResponse2002](interfaces/inlineresponse2002.md)
* [InlineResponse2003](interfaces/inlineresponse2003.md)
* [InlineResponse2004](interfaces/inlineresponse2004.md)
* [InlineResponse2004DataAttributes](interfaces/inlineresponse2004dataattributes.md)
* [InlineResponse2004DataRelationships](interfaces/inlineresponse2004datarelationships.md)
* [InlineResponse201](interfaces/inlineresponse201.md)
* [LevelAttributes](interfaces/levelattributes.md)
* [Links](interfaces/links.md)
* [Metadata](interfaces/metadata.md)
* [Relationship](interfaces/relationship.md)
* [Relationships](interfaces/relationships.md)
* [RequestArgs](interfaces/requestargs.md)

### Variables

* [BASE_PATH](#base_path)

### Functions

* [AppRegistrationApiAxiosParamCreator](#appregistrationapiaxiosparamcreator)
* [AppRegistrationApiFactory](#appregistrationapifactory)
* [AppRegistrationApiFp](#appregistrationapifp)
* [AppsApiAxiosParamCreator](#appsapiaxiosparamcreator)
* [AppsApiFactory](#appsapifactory)
* [AppsApiFp](#appsapifp)
* [EndpointsApiAxiosParamCreator](#endpointsapiaxiosparamcreator)
* [EndpointsApiFactory](#endpointsapifactory)
* [EndpointsApiFp](#endpointsapifp)
* [FiltersApiAxiosParamCreator](#filtersapiaxiosparamcreator)
* [FiltersApiFactory](#filtersapifactory)
* [FiltersApiFp](#filtersapifp)

### Object literals

* [COLLECTION_FORMATS](#collection_formats)

---

## Variables

<a id="base_path"></a>

### `<Const>` BASE_PATH

**● BASE_PATH**: *`string`* =  "http://localhost".replace(/\/+$/, "")

*Defined in [api.ts:20](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L20)*

___

## Functions

<a id="appregistrationapiaxiosparamcreator"></a>

### `<Const>` AppRegistrationApiAxiosParamCreator

▸ **AppRegistrationApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:1002](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L1002)*

AppRegistrationApi - axios parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="appregistrationapifactory"></a>

### `<Const>` AppRegistrationApiFactory

▸ **AppRegistrationApiFactory**(configuration?: *[Configuration](classes/configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): `object`

*Defined in [api.ts:1068](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L1068)*

AppRegistrationApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |
| `Optional` basePath | `string` |
| `Optional` axios | `AxiosInstance` |

**Returns:** `object`

___
<a id="appregistrationapifp"></a>

### `<Const>` AppRegistrationApiFp

▸ **AppRegistrationApiFp**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:1046](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L1046)*

AppRegistrationApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="appsapiaxiosparamcreator"></a>

### `<Const>` AppsApiAxiosParamCreator

▸ **AppsApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:1106](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L1106)*

AppsApi - axios parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="appsapifactory"></a>

### `<Const>` AppsApiFactory

▸ **AppsApiFactory**(configuration?: *[Configuration](classes/configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): `object`

*Defined in [api.ts:1227](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L1227)*

AppsApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |
| `Optional` basePath | `string` |
| `Optional` axios | `AxiosInstance` |

**Returns:** `object`

___
<a id="appsapifp"></a>

### `<Const>` AppsApiFp

▸ **AppsApiFp**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:1191](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L1191)*

AppsApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="endpointsapiaxiosparamcreator"></a>

### `<Const>` EndpointsApiAxiosParamCreator

▸ **EndpointsApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:1287](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L1287)*

EndpointsApi - axios parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="endpointsapifactory"></a>

### `<Const>` EndpointsApiFactory

▸ **EndpointsApiFactory**(configuration?: *[Configuration](classes/configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): `object`

*Defined in [api.ts:1659](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L1659)*

EndpointsApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |
| `Optional` basePath | `string` |
| `Optional` axios | `AxiosInstance` |

**Returns:** `object`

___
<a id="endpointsapifp"></a>

### `<Const>` EndpointsApiFp

▸ **EndpointsApiFp**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:1563](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L1563)*

EndpointsApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="filtersapiaxiosparamcreator"></a>

### `<Const>` FiltersApiAxiosParamCreator

▸ **FiltersApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:1815](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L1815)*

FiltersApi - axios parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="filtersapifactory"></a>

### `<Const>` FiltersApiFactory

▸ **FiltersApiFactory**(configuration?: *[Configuration](classes/configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): `object`

*Defined in [api.ts:1888](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L1888)*

FiltersApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |
| `Optional` basePath | `string` |
| `Optional` axios | `AxiosInstance` |

**Returns:** `object`

___
<a id="filtersapifp"></a>

### `<Const>` FiltersApiFp

▸ **FiltersApiFp**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:1865](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L1865)*

FiltersApi - functional programming interface

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

*Defined in [api.ts:26](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L26)*

*__export__*: 

<a id="collection_formats.csv"></a>

####  csv

**● csv**: *`string`* = ","

*Defined in [api.ts:27](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L27)*

___
<a id="collection_formats.pipes"></a>

####  pipes

**● pipes**: *`string`* = "|"

*Defined in [api.ts:30](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L30)*

___
<a id="collection_formats.ssv"></a>

####  ssv

**● ssv**: *`string`* = " "

*Defined in [api.ts:28](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L28)*

___
<a id="collection_formats.tsv"></a>

####  tsv

**● tsv**: *`string`* = "	"

*Defined in [api.ts:29](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L29)*

___

___

