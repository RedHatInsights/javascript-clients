[@redhat-cloud-services/catalog-client](../README.md) › [Globals](../globals.md) › [ServicePlansApi](serviceplansapi.md)

# Class: ServicePlansApi

ServicePlansApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **ServicePlansApi**

## Index

### Constructors

* [constructor](serviceplansapi.md#constructor)

### Properties

* [axios](serviceplansapi.md#protected-axios)
* [basePath](serviceplansapi.md#protected-basepath)
* [configuration](serviceplansapi.md#protected-configuration)

### Methods

* [createServicePlan](serviceplansapi.md#createserviceplan)
* [patchServicePlanModified](serviceplansapi.md#patchserviceplanmodified)
* [resetServicePlanModified](serviceplansapi.md#resetserviceplanmodified)
* [showServicePlan](serviceplansapi.md#showserviceplan)
* [showServicePlanBase](serviceplansapi.md#showserviceplanbase)
* [showServicePlanModified](serviceplansapi.md#showserviceplanmodified)

## Constructors

###  constructor

\+ **new ServicePlansApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[ServicePlansApi](serviceplansapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [packages/catalog/base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/base.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** *[ServicePlansApi](serviceplansapi.md)*

## Properties

### `Protected` axios

• **axios**: *AxiosInstance*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#protected-axios)*

*Defined in [packages/catalog/base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/base.ts#L51)*

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

*Defined in [packages/catalog/base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/base.ts#L51)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [packages/catalog/base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/base.ts#L49)*

## Methods

###  createServicePlan

▸ **createServicePlan**(`importServicePlan?`: [ImportServicePlan](../interfaces/importserviceplan.md), `options?`: any): *Promise‹AxiosResponse‹[ServicePlan](../interfaces/serviceplan.md)[]››*

*Defined in [packages/catalog/api.ts:7357](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L7357)*

Returns the new Service Plan

**`summary`** Create Service Plan

**`throws`** {RequiredError}

**`memberof`** ServicePlansApi

**Parameters:**

Name | Type |
------ | ------ |
`importServicePlan?` | [ImportServicePlan](../interfaces/importserviceplan.md) |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[ServicePlan](../interfaces/serviceplan.md)[]››*

___

###  patchServicePlanModified

▸ **patchServicePlanModified**(`id`: string, `patchModifiedServicePlan?`: [PatchModifiedServicePlan](../interfaces/patchmodifiedserviceplan.md), `options?`: any): *Promise‹AxiosResponse‹object››*

*Defined in [packages/catalog/api.ts:7370](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L7370)*

**`summary`** Patch Service Plan Modified Schema

**`throws`** {RequiredError}

**`memberof`** ServicePlansApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`patchModifiedServicePlan?` | [PatchModifiedServicePlan](../interfaces/patchmodifiedserviceplan.md) | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹object››*

___

###  resetServicePlanModified

▸ **resetServicePlanModified**(`id`: string, `options?`: any): *Promise‹AxiosResponse‹[ServicePlan](../interfaces/serviceplan.md)[]››*

*Defined in [packages/catalog/api.ts:7382](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L7382)*

Resets the Service Plan\'s Modified schema and returns the new one if it has been reset

**`summary`** Reset Service Plan Modified schema

**`throws`** {RequiredError}

**`memberof`** ServicePlansApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ServicePlan](../interfaces/serviceplan.md)[]››*

___

###  showServicePlan

▸ **showServicePlan**(`id`: string, `options?`: any): *Promise‹AxiosResponse‹[ServicePlan](../interfaces/serviceplan.md)››*

*Defined in [packages/catalog/api.ts:7394](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L7394)*

Returns the specified Service Plan

**`summary`** Show Service Plan

**`throws`** {RequiredError}

**`memberof`** ServicePlansApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ServicePlan](../interfaces/serviceplan.md)››*

___

###  showServicePlanBase

▸ **showServicePlanBase**(`id`: string, `options?`: any): *Promise‹AxiosResponse‹[ServicePlan](../interfaces/serviceplan.md)››*

*Defined in [packages/catalog/api.ts:7406](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L7406)*

Returns the specified Service Plan\'s base schema

**`summary`** Show Service Plan Base Schema

**`throws`** {RequiredError}

**`memberof`** ServicePlansApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ServicePlan](../interfaces/serviceplan.md)››*

___

###  showServicePlanModified

▸ **showServicePlanModified**(`id`: string, `options?`: any): *Promise‹AxiosResponse‹[ServicePlan](../interfaces/serviceplan.md)››*

*Defined in [packages/catalog/api.ts:7418](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L7418)*

Returns the specified Service Plan\'s modified schema

**`summary`** Show Service Plan modified Schema

**`throws`** {RequiredError}

**`memberof`** ServicePlansApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ServicePlan](../interfaces/serviceplan.md)››*
