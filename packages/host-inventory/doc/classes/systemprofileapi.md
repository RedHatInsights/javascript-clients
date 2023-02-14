[@redhat-cloud-services/host-inventory-client](../README.md) › [Globals](../globals.md) › [SystemProfileApi](systemprofileapi.md)

# Class: SystemProfileApi

SystemProfileApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **SystemProfileApi**

## Index

### Constructors

* [constructor](systemprofileapi.md#constructor)

### Properties

* [axios](systemprofileapi.md#protected-axios)
* [basePath](systemprofileapi.md#protected-basepath)
* [configuration](systemprofileapi.md#protected-configuration)

### Methods

* [apiSystemProfileGetOperatingSystem](systemprofileapi.md#apisystemprofilegetoperatingsystem)
* [apiSystemProfileGetSapSids](systemprofileapi.md#apisystemprofilegetsapsids)
* [apiSystemProfileGetSapSystem](systemprofileapi.md#apisystemprofilegetsapsystem)

## Constructors

###  constructor

\+ **new SystemProfileApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[SystemProfileApi](systemprofileapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/base.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** *[SystemProfileApi](systemprofileapi.md)*

## Properties

### `Protected` axios

• **axios**: *AxiosInstance*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#protected-axios)*

*Defined in [base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/base.ts#L51)*

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

*Defined in [base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/base.ts#L51)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/base.ts#L49)*

## Methods

###  apiSystemProfileGetOperatingSystem

▸ **apiSystemProfileGetOperatingSystem**(`tags?`: Array‹string›, `perPage?`: number, `page?`: number, `staleness?`: Array‹"fresh" | "stale" | "stale_warning" | "unknown"›, `registeredWith?`: Array‹"insights" | "yupana" | "puptoo" | "rhsm-conduit" | "cloud-connector" | "!yupana" | "!puptoo" | "!rhsm-conduit" | "!cloud-connector"›, `filter?`: object, `options?`: any): *Promise‹AxiosResponse‹[SystemProfileOperatingSystemOut](../interfaces/systemprofileoperatingsystemout.md)››*

*Defined in [api.ts:4969](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L4969)*

Required permissions: inventory:hosts:read

**`summary`** get all operating system versions and counts on the account

**`throws`** {RequiredError}

**`memberof`** SystemProfileApi

**Parameters:**

Name | Type |
------ | ------ |
`tags?` | Array‹string› |
`perPage?` | number |
`page?` | number |
`staleness?` | Array‹"fresh" &#124; "stale" &#124; "stale_warning" &#124; "unknown"› |
`registeredWith?` | Array‹"insights" &#124; "yupana" &#124; "puptoo" &#124; "rhsm-conduit" &#124; "cloud-connector" &#124; "!yupana" &#124; "!puptoo" &#124; "!rhsm-conduit" &#124; "!cloud-connector"› |
`filter?` | object |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[SystemProfileOperatingSystemOut](../interfaces/systemprofileoperatingsystemout.md)››*

___

###  apiSystemProfileGetSapSids

▸ **apiSystemProfileGetSapSids**(`search?`: string, `tags?`: Array‹string›, `perPage?`: number, `page?`: number, `staleness?`: Array‹"fresh" | "stale" | "stale_warning" | "unknown"›, `registeredWith?`: Array‹"insights" | "yupana" | "puptoo" | "rhsm-conduit" | "cloud-connector" | "!yupana" | "!puptoo" | "!rhsm-conduit" | "!cloud-connector"›, `filter?`: object, `options?`: any): *Promise‹AxiosResponse‹[SystemProfileSapSystemOut](../interfaces/systemprofilesapsystemout.md)››*

*Defined in [api.ts:4987](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L4987)*

Required permissions: inventory:hosts:read

**`summary`** get all sap sids values and counts on the account

**`throws`** {RequiredError}

**`memberof`** SystemProfileApi

**Parameters:**

Name | Type |
------ | ------ |
`search?` | string |
`tags?` | Array‹string› |
`perPage?` | number |
`page?` | number |
`staleness?` | Array‹"fresh" &#124; "stale" &#124; "stale_warning" &#124; "unknown"› |
`registeredWith?` | Array‹"insights" &#124; "yupana" &#124; "puptoo" &#124; "rhsm-conduit" &#124; "cloud-connector" &#124; "!yupana" &#124; "!puptoo" &#124; "!rhsm-conduit" &#124; "!cloud-connector"› |
`filter?` | object |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[SystemProfileSapSystemOut](../interfaces/systemprofilesapsystemout.md)››*

___

###  apiSystemProfileGetSapSystem

▸ **apiSystemProfileGetSapSystem**(`tags?`: Array‹string›, `perPage?`: number, `page?`: number, `staleness?`: Array‹"fresh" | "stale" | "stale_warning" | "unknown"›, `registeredWith?`: Array‹"insights" | "yupana" | "puptoo" | "rhsm-conduit" | "cloud-connector" | "!yupana" | "!puptoo" | "!rhsm-conduit" | "!cloud-connector"›, `filter?`: object, `options?`: any): *Promise‹AxiosResponse‹[SystemProfileSapSystemOut](../interfaces/systemprofilesapsystemout.md)››*

*Defined in [api.ts:5004](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L5004)*

Required permissions: inventory:hosts:read

**`summary`** get all sap system values and counts on the account

**`throws`** {RequiredError}

**`memberof`** SystemProfileApi

**Parameters:**

Name | Type |
------ | ------ |
`tags?` | Array‹string› |
`perPage?` | number |
`page?` | number |
`staleness?` | Array‹"fresh" &#124; "stale" &#124; "stale_warning" &#124; "unknown"› |
`registeredWith?` | Array‹"insights" &#124; "yupana" &#124; "puptoo" &#124; "rhsm-conduit" &#124; "cloud-connector" &#124; "!yupana" &#124; "!puptoo" &#124; "!rhsm-conduit" &#124; "!cloud-connector"› |
`filter?` | object |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[SystemProfileSapSystemOut](../interfaces/systemprofilesapsystemout.md)››*
