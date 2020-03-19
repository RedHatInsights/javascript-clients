[@redhat-cloud-services/notifications-client](README.md) › [Globals](globals.md)

# @redhat-cloud-services/notifications-client

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

* [BASE_PATH](globals.md#const-base_path)

### Functions

* [AppRegistrationApiAxiosParamCreator](globals.md#const-appregistrationapiaxiosparamcreator)
* [AppRegistrationApiFactory](globals.md#const-appregistrationapifactory)
* [AppRegistrationApiFp](globals.md#const-appregistrationapifp)
* [AppsApiAxiosParamCreator](globals.md#const-appsapiaxiosparamcreator)
* [AppsApiFactory](globals.md#const-appsapifactory)
* [AppsApiFp](globals.md#const-appsapifp)
* [EndpointsApiAxiosParamCreator](globals.md#const-endpointsapiaxiosparamcreator)
* [EndpointsApiFactory](globals.md#const-endpointsapifactory)
* [EndpointsApiFp](globals.md#const-endpointsapifp)
* [FiltersApiAxiosParamCreator](globals.md#const-filtersapiaxiosparamcreator)
* [FiltersApiFactory](globals.md#const-filtersapifactory)
* [FiltersApiFp](globals.md#const-filtersapifp)

### Object literals

* [COLLECTION_FORMATS](globals.md#const-collection_formats)

## Variables

### `Const` BASE_PATH

• **BASE_PATH**: *string* =  "http://localhost".replace(/\/+$/, "")

*Defined in [api.ts:20](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L20)*

## Functions

### `Const` AppRegistrationApiAxiosParamCreator

▸ **AppRegistrationApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:1002](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L1002)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **appRegistrationCreate**(`inlineObject`: [InlineObject](interfaces/inlineobject.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

___

### `Const` AppRegistrationApiFactory

▸ **AppRegistrationApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [api.ts:1068](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L1068)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`basePath?` | string |
`axios?` | AxiosInstance |

**Returns:** *object*

* **appRegistrationCreate**(`inlineObject`: [InlineObject](interfaces/inlineobject.md), `options?`: any): *AxiosPromise‹[InlineResponse2001](interfaces/inlineresponse2001.md)›*

___

### `Const` AppRegistrationApiFp

▸ **AppRegistrationApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:1046](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L1046)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **appRegistrationCreate**(`inlineObject`: [InlineObject](interfaces/inlineobject.md), `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[InlineResponse2001](interfaces/inlineresponse2001.md)›*

___

### `Const` AppsApiAxiosParamCreator

▸ **AppsApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:1106](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L1106)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **appsIndex**(`X_RH_IDENTITY`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **appsShow**(`X_RH_IDENTITY`: string, `id`: number, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

___

### `Const` AppsApiFactory

▸ **AppsApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [api.ts:1227](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L1227)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`basePath?` | string |
`axios?` | AxiosInstance |

**Returns:** *object*

* **appsIndex**(`X_RH_IDENTITY`: string, `options?`: any): *AxiosPromise‹[InlineResponse200](interfaces/inlineresponse200.md)›*

* **appsShow**(`X_RH_IDENTITY`: string, `id`: number, `options?`: any): *AxiosPromise‹[InlineResponse2002](interfaces/inlineresponse2002.md)›*

___

### `Const` AppsApiFp

▸ **AppsApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:1191](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L1191)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **appsIndex**(`X_RH_IDENTITY`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[InlineResponse200](interfaces/inlineresponse200.md)›*

* **appsShow**(`X_RH_IDENTITY`: string, `id`: number, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[InlineResponse2002](interfaces/inlineresponse2002.md)›*

___

### `Const` EndpointsApiAxiosParamCreator

▸ **EndpointsApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:1287](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L1287)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **endpointsCreate**(`X_RH_IDENTITY`: string, `inlineObject1`: [InlineObject1](interfaces/inlineobject1.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **endpointsDestroy**(`X_RH_IDENTITY`: string, `id`: number, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **endpointsIndex**(`X_RH_IDENTITY`: string, `order?`: string, `offset?`: number, `limit?`: number, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **endpointsShow**(`X_RH_IDENTITY`: string, `id`: number, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **endpointsTest**(`X_RH_IDENTITY`: string, `id`: number, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **endpointsUpdate**(`X_RH_IDENTITY`: string, `id`: number, `inlineObject2`: [InlineObject2](interfaces/inlineobject2.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

___

### `Const` EndpointsApiFactory

▸ **EndpointsApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [api.ts:1659](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L1659)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`basePath?` | string |
`axios?` | AxiosInstance |

**Returns:** *object*

* **endpointsCreate**(`X_RH_IDENTITY`: string, `inlineObject1`: [InlineObject1](interfaces/inlineobject1.md), `options?`: any): *AxiosPromise‹[InlineResponse201](interfaces/inlineresponse201.md)›*

* **endpointsDestroy**(`X_RH_IDENTITY`: string, `id`: number, `options?`: any): *AxiosPromise‹Response›*

* **endpointsIndex**(`X_RH_IDENTITY`: string, `order?`: string, `offset?`: number, `limit?`: number, `options?`: any): *AxiosPromise‹[InlineResponse2003](interfaces/inlineresponse2003.md)›*

* **endpointsShow**(`X_RH_IDENTITY`: string, `id`: number, `options?`: any): *AxiosPromise‹[InlineResponse201](interfaces/inlineresponse201.md)›*

* **endpointsTest**(`X_RH_IDENTITY`: string, `id`: number, `options?`: any): *AxiosPromise‹Response›*

* **endpointsUpdate**(`X_RH_IDENTITY`: string, `id`: number, `inlineObject2`: [InlineObject2](interfaces/inlineobject2.md), `options?`: any): *AxiosPromise‹[InlineResponse201](interfaces/inlineresponse201.md)›*

___

### `Const` EndpointsApiFp

▸ **EndpointsApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:1563](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L1563)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **endpointsCreate**(`X_RH_IDENTITY`: string, `inlineObject1`: [InlineObject1](interfaces/inlineobject1.md), `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[InlineResponse201](interfaces/inlineresponse201.md)›*

* **endpointsDestroy**(`X_RH_IDENTITY`: string, `id`: number, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹Response›*

* **endpointsIndex**(`X_RH_IDENTITY`: string, `order?`: string, `offset?`: number, `limit?`: number, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[InlineResponse2003](interfaces/inlineresponse2003.md)›*

* **endpointsShow**(`X_RH_IDENTITY`: string, `id`: number, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[InlineResponse201](interfaces/inlineresponse201.md)›*

* **endpointsTest**(`X_RH_IDENTITY`: string, `id`: number, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹Response›*

* **endpointsUpdate**(`X_RH_IDENTITY`: string, `id`: number, `inlineObject2`: [InlineObject2](interfaces/inlineobject2.md), `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[InlineResponse201](interfaces/inlineresponse201.md)›*

___

### `Const` FiltersApiAxiosParamCreator

▸ **FiltersApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:1815](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L1815)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **filtersShow**(`X_RH_IDENTITY`: string, `endpointId`: number, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

___

### `Const` FiltersApiFactory

▸ **FiltersApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [api.ts:1888](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L1888)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`basePath?` | string |
`axios?` | AxiosInstance |

**Returns:** *object*

* **filtersShow**(`X_RH_IDENTITY`: string, `endpointId`: number, `options?`: any): *AxiosPromise‹[InlineResponse2004](interfaces/inlineresponse2004.md)›*

___

### `Const` FiltersApiFp

▸ **FiltersApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:1865](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L1865)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **filtersShow**(`X_RH_IDENTITY`: string, `endpointId`: number, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[InlineResponse2004](interfaces/inlineresponse2004.md)›*

## Object literals

### `Const` COLLECTION_FORMATS

### ▪ **COLLECTION_FORMATS**: *object*

*Defined in [api.ts:26](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L26)*

###  csv

• **csv**: *string* = ","

*Defined in [api.ts:27](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L27)*

###  pipes

• **pipes**: *string* = "|"

*Defined in [api.ts:30](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L30)*

###  ssv

• **ssv**: *string* = " "

*Defined in [api.ts:28](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L28)*

###  tsv

• **tsv**: *string* = "	"

*Defined in [api.ts:29](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L29)*
