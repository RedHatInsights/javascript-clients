[@redhat-cloud-services/notifications-client](README.md) › [Globals](globals.md)

# @redhat-cloud-services/notifications-client

## Index

### Enumerations

* [AppTypeEnum](enums/apptypeenum.md)
* [EndpointAttributesLastDeliveryStatusEnum](enums/endpointattributeslastdeliverystatusenum.md)
* [EndpointTypeEnum](enums/endpointtypeenum.md)
* [EventTypeTypeEnum](enums/eventtypetypeenum.md)
* [InlineResponse2004DataTypeEnum](enums/inlineresponse2004datatypeenum.md)
* [LevelTypeEnum](enums/leveltypeenum.md)

### Classes

* [AppRegistrationApi](classes/appregistrationapi.md)
* [AppsApi](classes/appsapi.md)
* [BaseAPI](classes/baseapi.md)
* [Configuration](classes/configuration.md)
* [EndpointsApi](classes/endpointsapi.md)
* [FiltersApi](classes/filtersapi.md)
* [RequiredError](classes/requirederror.md)

### Interfaces

* [App](interfaces/app.md)
* [AppAttributes](interfaces/appattributes.md)
* [AppRelationships](interfaces/apprelationships.md)
* [AppsRegisterApplication](interfaces/appsregisterapplication.md)
* [AppsRegisterEventTypes](interfaces/appsregistereventtypes.md)
* [AppsRegisterEventTypesLevels](interfaces/appsregistereventtypeslevels.md)
* [ConfigurationParameters](interfaces/configurationparameters.md)
* [Endpoint](interfaces/endpoint.md)
* [EndpointAttributes](interfaces/endpointattributes.md)
* [EndpointsEndpoint](interfaces/endpointsendpoint.md)
* [EndpointsEndpointFilter](interfaces/endpointsendpointfilter.md)
* [EndpointsIdEndpoint](interfaces/endpointsidendpoint.md)
* [EndpointsIdEndpointFilter](interfaces/endpointsidendpointfilter.md)
* [Errors](interfaces/errors.md)
* [ErrorsErrors](interfaces/errorserrors.md)
* [ErrorsSource](interfaces/errorssource.md)
* [EventType](interfaces/eventtype.md)
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
* [InlineResponse2004Data](interfaces/inlineresponse2004data.md)
* [InlineResponse2004DataAttributes](interfaces/inlineresponse2004dataattributes.md)
* [InlineResponse2004DataRelationships](interfaces/inlineresponse2004datarelationships.md)
* [InlineResponse201](interfaces/inlineresponse201.md)
* [Level](interfaces/level.md)
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

• **BASE_PATH**: *string* = "http://localhost".replace(/\/+$/, "")

Defined in packages/hooks/base.ts:20

## Functions

### `Const` AppRegistrationApiAxiosParamCreator

▸ **AppRegistrationApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/hooks/api.ts:886](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L886)*

AppRegistrationApi - axios parameter creator

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **appRegistrationCreate**(`inlineObject`: [InlineObject](interfaces/inlineobject.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

___

### `Const` AppRegistrationApiFactory

▸ **AppRegistrationApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [packages/hooks/api.ts:955](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L955)*

AppRegistrationApi - factory interface

**`export`** 

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

*Defined in [packages/hooks/api.ts:933](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L933)*

AppRegistrationApi - functional programming interface

**`export`** 

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

*Defined in [packages/hooks/api.ts:994](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L994)*

AppsApi - axios parameter creator

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **appsIndex**(`xRHIDENTITY`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **appsShow**(`xRHIDENTITY`: string, `id`: number, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

___

### `Const` AppsApiFactory

▸ **AppsApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [packages/hooks/api.ts:1121](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L1121)*

AppsApi - factory interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`basePath?` | string |
`axios?` | AxiosInstance |

**Returns:** *object*

* **appsIndex**(`xRHIDENTITY`: string, `options?`: any): *AxiosPromise‹[InlineResponse200](interfaces/inlineresponse200.md)›*

* **appsShow**(`xRHIDENTITY`: string, `id`: number, `options?`: any): *AxiosPromise‹[InlineResponse2002](interfaces/inlineresponse2002.md)›*

___

### `Const` AppsApiFp

▸ **AppsApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/hooks/api.ts:1085](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L1085)*

AppsApi - functional programming interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **appsIndex**(`xRHIDENTITY`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[InlineResponse200](interfaces/inlineresponse200.md)›*

* **appsShow**(`xRHIDENTITY`: string, `id`: number, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[InlineResponse2002](interfaces/inlineresponse2002.md)›*

___

### `Const` EndpointsApiAxiosParamCreator

▸ **EndpointsApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/hooks/api.ts:1182](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L1182)*

EndpointsApi - axios parameter creator

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **endpointsCreate**(`xRHIDENTITY`: string, `inlineObject1`: [InlineObject1](interfaces/inlineobject1.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **endpointsDestroy**(`xRHIDENTITY`: string, `id`: number, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **endpointsIndex**(`xRHIDENTITY`: string, `order?`: string, `offset?`: number, `limit?`: number, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **endpointsShow**(`xRHIDENTITY`: string, `id`: number, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **endpointsTest**(`xRHIDENTITY`: string, `id`: number, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **endpointsUpdate**(`xRHIDENTITY`: string, `id`: number, `inlineObject2`: [InlineObject2](interfaces/inlineobject2.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

___

### `Const` EndpointsApiFactory

▸ **EndpointsApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [packages/hooks/api.ts:1572](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L1572)*

EndpointsApi - factory interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`basePath?` | string |
`axios?` | AxiosInstance |

**Returns:** *object*

* **endpointsCreate**(`xRHIDENTITY`: string, `inlineObject1`: [InlineObject1](interfaces/inlineobject1.md), `options?`: any): *AxiosPromise‹[InlineResponse201](interfaces/inlineresponse201.md)›*

* **endpointsDestroy**(`xRHIDENTITY`: string, `id`: number, `options?`: any): *AxiosPromise‹void›*

* **endpointsIndex**(`xRHIDENTITY`: string, `order?`: string, `offset?`: number, `limit?`: number, `options?`: any): *AxiosPromise‹[InlineResponse2003](interfaces/inlineresponse2003.md)›*

* **endpointsShow**(`xRHIDENTITY`: string, `id`: number, `options?`: any): *AxiosPromise‹[InlineResponse201](interfaces/inlineresponse201.md)›*

* **endpointsTest**(`xRHIDENTITY`: string, `id`: number, `options?`: any): *AxiosPromise‹void›*

* **endpointsUpdate**(`xRHIDENTITY`: string, `id`: number, `inlineObject2`: [InlineObject2](interfaces/inlineobject2.md), `options?`: any): *AxiosPromise‹[InlineResponse201](interfaces/inlineresponse201.md)›*

___

### `Const` EndpointsApiFp

▸ **EndpointsApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/hooks/api.ts:1476](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L1476)*

EndpointsApi - functional programming interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **endpointsCreate**(`xRHIDENTITY`: string, `inlineObject1`: [InlineObject1](interfaces/inlineobject1.md), `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[InlineResponse201](interfaces/inlineresponse201.md)›*

* **endpointsDestroy**(`xRHIDENTITY`: string, `id`: number, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹void›*

* **endpointsIndex**(`xRHIDENTITY`: string, `order?`: string, `offset?`: number, `limit?`: number, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[InlineResponse2003](interfaces/inlineresponse2003.md)›*

* **endpointsShow**(`xRHIDENTITY`: string, `id`: number, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[InlineResponse201](interfaces/inlineresponse201.md)›*

* **endpointsTest**(`xRHIDENTITY`: string, `id`: number, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹void›*

* **endpointsUpdate**(`xRHIDENTITY`: string, `id`: number, `inlineObject2`: [InlineObject2](interfaces/inlineobject2.md), `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[InlineResponse201](interfaces/inlineresponse201.md)›*

___

### `Const` FiltersApiAxiosParamCreator

▸ **FiltersApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/hooks/api.ts:1729](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L1729)*

FiltersApi - axios parameter creator

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **filtersShow**(`xRHIDENTITY`: string, `endpointId`: number, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

___

### `Const` FiltersApiFactory

▸ **FiltersApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [packages/hooks/api.ts:1805](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L1805)*

FiltersApi - factory interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`basePath?` | string |
`axios?` | AxiosInstance |

**Returns:** *object*

* **filtersShow**(`xRHIDENTITY`: string, `endpointId`: number, `options?`: any): *AxiosPromise‹[InlineResponse2004](interfaces/inlineresponse2004.md)›*

___

### `Const` FiltersApiFp

▸ **FiltersApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/hooks/api.ts:1782](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L1782)*

FiltersApi - functional programming interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **filtersShow**(`xRHIDENTITY`: string, `endpointId`: number, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[InlineResponse2004](interfaces/inlineresponse2004.md)›*

## Object literals

### `Const` COLLECTION_FORMATS

### ▪ **COLLECTION_FORMATS**: *object*

Defined in packages/hooks/base.ts:26

**`export`** 

###  csv

• **csv**: *string* = ","

Defined in packages/hooks/base.ts:27

###  pipes

• **pipes**: *string* = "|"

Defined in packages/hooks/base.ts:30

###  ssv

• **ssv**: *string* = " "

Defined in packages/hooks/base.ts:28

###  tsv

• **tsv**: *string* = "	"

Defined in packages/hooks/base.ts:29
