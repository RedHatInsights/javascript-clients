[@redhat-cloud-services/host-inventory-client](../README.md) › [Globals](../globals.md) › [SapSystemApi](sapsystemapi.md)

# Class: SapSystemApi

SapSystemApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **SapSystemApi**

## Index

### Constructors

* [constructor](sapsystemapi.md#constructor)

### Properties

* [axios](sapsystemapi.md#protected-axios)
* [basePath](sapsystemapi.md#protected-basepath)
* [configuration](sapsystemapi.md#protected-configuration)

### Methods

* [apiSystemProfileGetSapSids](sapsystemapi.md#apisystemprofilegetsapsids)
* [apiSystemProfileGetSapSystem](sapsystemapi.md#apisystemprofilegetsapsystem)

## Constructors

###  constructor

\+ **new SapSystemApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[SapSystemApi](sapsystemapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [packages/host-inventory/base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/base.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** *[SapSystemApi](sapsystemapi.md)*

## Properties

### `Protected` axios

• **axios**: *AxiosInstance*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#protected-axios)*

*Defined in [packages/host-inventory/base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/base.ts#L51)*

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

*Defined in [packages/host-inventory/base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/base.ts#L51)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [packages/host-inventory/base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/base.ts#L49)*

## Methods

###  apiSystemProfileGetSapSids

▸ **apiSystemProfileGetSapSids**(`tags?`: Array‹string›, `perPage?`: number, `page?`: number, `staleness?`: Array‹"fresh" | "stale" | "stale_warning" | "unknown"›, `registeredWith?`: "insights", `filter?`: object, `options?`: any): *AxiosPromise‹[SystemProfileSapSystemOut](../interfaces/systemprofilesapsystemout.md)›*

*Defined in [packages/host-inventory/api.ts:2463](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2463)*

Required permissions: inventory:hosts:read

**`summary`** get sap system values

**`throws`** {RequiredError}

**`memberof`** SapSystemApi

**Parameters:**

Name | Type |
------ | ------ |
`tags?` | Array‹string› |
`perPage?` | number |
`page?` | number |
`staleness?` | Array‹"fresh" &#124; "stale" &#124; "stale_warning" &#124; "unknown"› |
`registeredWith?` | "insights" |
`filter?` | object |
`options?` | any |

**Returns:** *AxiosPromise‹[SystemProfileSapSystemOut](../interfaces/systemprofilesapsystemout.md)›*

___

###  apiSystemProfileGetSapSystem

▸ **apiSystemProfileGetSapSystem**(`tags?`: Array‹string›, `perPage?`: number, `page?`: number, `staleness?`: Array‹"fresh" | "stale" | "stale_warning" | "unknown"›, `registeredWith?`: "insights", `filter?`: object, `options?`: any): *AxiosPromise‹[SystemProfileSapSystemOut](../interfaces/systemprofilesapsystemout.md)›*

*Defined in [packages/host-inventory/api.ts:2480](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2480)*

Required permissions: inventory:hosts:read

**`summary`** get sap system values

**`throws`** {RequiredError}

**`memberof`** SapSystemApi

**Parameters:**

Name | Type |
------ | ------ |
`tags?` | Array‹string› |
`perPage?` | number |
`page?` | number |
`staleness?` | Array‹"fresh" &#124; "stale" &#124; "stale_warning" &#124; "unknown"› |
`registeredWith?` | "insights" |
`filter?` | object |
`options?` | any |

**Returns:** *AxiosPromise‹[SystemProfileSapSystemOut](../interfaces/systemprofilesapsystemout.md)›*
