[@redhat-cloud-services/catalog-client](../README.md) / [Exports](../modules.md) / ServicePlansApi

# Class: ServicePlansApi

ServicePlansApi - object-oriented interface

**`Export`**

## Hierarchy

- `BaseAPI`

  ↳ **`ServicePlansApi`**

## Table of contents

### Constructors

- [constructor](ServicePlansApi.md#constructor)

### Properties

- [axios](ServicePlansApi.md#axios)
- [basePath](ServicePlansApi.md#basepath)
- [configuration](ServicePlansApi.md#configuration)

### Methods

- [createServicePlan](ServicePlansApi.md#createserviceplan)
- [patchServicePlanModified](ServicePlansApi.md#patchserviceplanmodified)
- [resetServicePlanModified](ServicePlansApi.md#resetserviceplanmodified)
- [showServicePlan](ServicePlansApi.md#showserviceplan)
- [showServicePlanBase](ServicePlansApi.md#showserviceplanbase)
- [showServicePlanModified](ServicePlansApi.md#showserviceplanmodified)

## Constructors

### constructor

• **new ServicePlansApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/base.ts#L51)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

BaseAPI.axios

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/base.ts#L51)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

BaseAPI.basePath

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/base.ts#L51)

___

### configuration

• `Protected` **configuration**: [`Configuration`](Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/base.ts#L49)

## Methods

### createServicePlan

▸ **createServicePlan**(`importServicePlan?`, `options?`): `Promise`<`AxiosResponse`<[`ServicePlan`](../interfaces/ServicePlan.md)[], `any`\>\>

Returns the new Service Plan

**`Summary`**

Create Service Plan

**`Throws`**

**`Memberof`**

ServicePlansApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `importServicePlan?` | [`ImportServicePlan`](../interfaces/ImportServicePlan.md) |  |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ServicePlan`](../interfaces/ServicePlan.md)[], `any`\>\>

#### Defined in

[api.ts:7539](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L7539)

___

### patchServicePlanModified

▸ **patchServicePlanModified**(`id`, `patchModifiedServicePlan?`, `options?`): `Promise`<`AxiosResponse`<`object`, `any`\>\>

**`Summary`**

Patch Service Plan Modified Schema

**`Throws`**

**`Memberof`**

ServicePlansApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `patchModifiedServicePlan?` | [`PatchModifiedServicePlan`](../interfaces/PatchModifiedServicePlan.md) |  |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`object`, `any`\>\>

#### Defined in

[api.ts:7552](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L7552)

___

### resetServicePlanModified

▸ **resetServicePlanModified**(`id`, `options?`): `Promise`<`AxiosResponse`<[`ServicePlan`](../interfaces/ServicePlan.md)[], `any`\>\>

Resets the Service Plan\'s Modified schema and returns the new one if it has been reset

**`Summary`**

Reset Service Plan Modified schema

**`Throws`**

**`Memberof`**

ServicePlansApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ServicePlan`](../interfaces/ServicePlan.md)[], `any`\>\>

#### Defined in

[api.ts:7564](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L7564)

___

### showServicePlan

▸ **showServicePlan**(`id`, `options?`): `Promise`<`AxiosResponse`<[`ServicePlan`](../interfaces/ServicePlan.md), `any`\>\>

Returns the specified Service Plan

**`Summary`**

Show Service Plan

**`Throws`**

**`Memberof`**

ServicePlansApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ServicePlan`](../interfaces/ServicePlan.md), `any`\>\>

#### Defined in

[api.ts:7576](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L7576)

___

### showServicePlanBase

▸ **showServicePlanBase**(`id`, `options?`): `Promise`<`AxiosResponse`<[`ServicePlan`](../interfaces/ServicePlan.md), `any`\>\>

Returns the specified Service Plan\'s base schema

**`Summary`**

Show Service Plan Base Schema

**`Throws`**

**`Memberof`**

ServicePlansApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ServicePlan`](../interfaces/ServicePlan.md), `any`\>\>

#### Defined in

[api.ts:7588](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L7588)

___

### showServicePlanModified

▸ **showServicePlanModified**(`id`, `options?`): `Promise`<`AxiosResponse`<[`ServicePlan`](../interfaces/ServicePlan.md), `any`\>\>

Returns the specified Service Plan\'s modified schema

**`Summary`**

Show Service Plan modified Schema

**`Throws`**

**`Memberof`**

ServicePlansApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ServicePlan`](../interfaces/ServicePlan.md), `any`\>\>

#### Defined in

[api.ts:7600](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L7600)
