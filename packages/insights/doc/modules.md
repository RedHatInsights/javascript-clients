[@redhat-cloud-services/insights-client](README.md) / Exports

# @redhat-cloud-services/insights-client

## Table of contents

### Classes

- [Configuration](classes/Configuration.md)
- [KcsApi](classes/KcsApi.md)
- [RulecategoryApi](classes/RulecategoryApi.md)
- [StatusApi](classes/StatusApi.md)
- [SystemtypeApi](classes/SystemtypeApi.md)

### Interfaces

- [ConfigurationParameters](interfaces/ConfigurationParameters.md)
- [Kcs](interfaces/Kcs.md)
- [RuleCategory](interfaces/RuleCategory.md)
- [SystemType](interfaces/SystemType.md)

### Functions

- [KcsApiAxiosParamCreator](modules.md#kcsapiaxiosparamcreator)
- [KcsApiFactory](modules.md#kcsapifactory)
- [KcsApiFp](modules.md#kcsapifp)
- [RulecategoryApiAxiosParamCreator](modules.md#rulecategoryapiaxiosparamcreator)
- [RulecategoryApiFactory](modules.md#rulecategoryapifactory)
- [RulecategoryApiFp](modules.md#rulecategoryapifp)
- [StatusApiAxiosParamCreator](modules.md#statusapiaxiosparamcreator)
- [StatusApiFactory](modules.md#statusapifactory)
- [StatusApiFp](modules.md#statusapifp)
- [SystemtypeApiAxiosParamCreator](modules.md#systemtypeapiaxiosparamcreator)
- [SystemtypeApiFactory](modules.md#systemtypeapifactory)
- [SystemtypeApiFp](modules.md#systemtypeapifp)

## Functions

### KcsApiAxiosParamCreator

▸ **KcsApiAxiosParamCreator**(`configuration?`): `Object`

KcsApi - axios parameter creator

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `kcsList` | (`nodeIds?`: `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `kcsRetrieve` | (`nodeId`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |

#### Defined in

[api.ts:90](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L90)

___

### KcsApiFactory

▸ **KcsApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

KcsApi - factory interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |
| `basePath?` | `string` |
| `axios?` | `AxiosInstance` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `kcsList` | (`nodeIds?`: `string`[], `options?`: `any`) => `AxiosPromise`<[`Kcs`](interfaces/Kcs.md)[]\> |
| `kcsRetrieve` | (`nodeId`: `string`, `options?`: `any`) => `AxiosPromise`<`string`[]\> |

#### Defined in

[api.ts:203](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L203)

___

### KcsApiFp

▸ **KcsApiFp**(`configuration?`): `Object`

KcsApi - functional programming interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `kcsList` | (`nodeIds?`: `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`Kcs`](interfaces/Kcs.md)[]\>\> |
| `kcsRetrieve` | (`nodeId`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<`string`[]\>\> |

#### Defined in

[api.ts:168](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L168)

___

### RulecategoryApiAxiosParamCreator

▸ **RulecategoryApiAxiosParamCreator**(`configuration?`): `Object`

RulecategoryApi - axios parameter creator

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `rulecategoryList` | (`options?`: `any`) => `Promise`<`RequestArgs`\> |
| `rulecategoryRetrieve` | (`id`: `number`, `options?`: `any`) => `Promise`<`RequestArgs`\> |

#### Defined in

[api.ts:262](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L262)

___

### RulecategoryApiFactory

▸ **RulecategoryApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

RulecategoryApi - factory interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |
| `basePath?` | `string` |
| `axios?` | `AxiosInstance` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `rulecategoryList` | (`options?`: `any`) => `AxiosPromise`<[`RuleCategory`](interfaces/RuleCategory.md)[]\> |
| `rulecategoryRetrieve` | (`id`: `number`, `options?`: `any`) => `AxiosPromise`<[`RuleCategory`](interfaces/RuleCategory.md)\> |

#### Defined in

[api.ts:369](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L369)

___

### RulecategoryApiFp

▸ **RulecategoryApiFp**(`configuration?`): `Object`

RulecategoryApi - functional programming interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `rulecategoryList` | (`options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`RuleCategory`](interfaces/RuleCategory.md)[]\>\> |
| `rulecategoryRetrieve` | (`id`: `number`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`RuleCategory`](interfaces/RuleCategory.md)\>\> |

#### Defined in

[api.ts:335](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L335)

___

### StatusApiAxiosParamCreator

▸ **StatusApiAxiosParamCreator**(`configuration?`): `Object`

StatusApi - axios parameter creator

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `statusLiveRetrieve` | (`options?`: `any`) => `Promise`<`RequestArgs`\> |
| `statusReadyRetrieve` | (`options?`: `any`) => `Promise`<`RequestArgs`\> |
| `statusRetrieve` | (`options?`: `any`) => `Promise`<`RequestArgs`\> |

#### Defined in

[api.ts:426](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L426)

___

### StatusApiFactory

▸ **StatusApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

StatusApi - factory interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |
| `basePath?` | `string` |
| `axios?` | `AxiosInstance` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `statusLiveRetrieve` | (`options?`: `any`) => `AxiosPromise`<`void`\> |
| `statusReadyRetrieve` | (`options?`: `any`) => `AxiosPromise`<`void`\> |
| `statusRetrieve` | (`options?`: `any`) => `AxiosPromise`<`void`\> |

#### Defined in

[api.ts:567](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L567)

___

### StatusApiFp

▸ **StatusApiFp**(`configuration?`): `Object`

StatusApi - functional programming interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `statusLiveRetrieve` | (`options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<`void`\>\> |
| `statusReadyRetrieve` | (`options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<`void`\>\> |
| `statusRetrieve` | (`options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<`void`\>\> |

#### Defined in

[api.ts:522](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L522)

___

### SystemtypeApiAxiosParamCreator

▸ **SystemtypeApiAxiosParamCreator**(`configuration?`): `Object`

SystemtypeApi - axios parameter creator

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `systemtypeList` | (`options?`: `any`) => `Promise`<`RequestArgs`\> |
| `systemtypeRetrieve` | (`id`: `number`, `options?`: `any`) => `Promise`<`RequestArgs`\> |

#### Defined in

[api.ts:640](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L640)

___

### SystemtypeApiFactory

▸ **SystemtypeApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

SystemtypeApi - factory interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |
| `basePath?` | `string` |
| `axios?` | `AxiosInstance` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `systemtypeList` | (`options?`: `any`) => `AxiosPromise`<[`SystemType`](interfaces/SystemType.md)[]\> |
| `systemtypeRetrieve` | (`id`: `number`, `options?`: `any`) => `AxiosPromise`<[`SystemType`](interfaces/SystemType.md)\> |

#### Defined in

[api.ts:751](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L751)

___

### SystemtypeApiFp

▸ **SystemtypeApiFp**(`configuration?`): `Object`

SystemtypeApi - functional programming interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `systemtypeList` | (`options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`SystemType`](interfaces/SystemType.md)[]\>\> |
| `systemtypeRetrieve` | (`id`: `number`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`SystemType`](interfaces/SystemType.md)\>\> |

#### Defined in

[api.ts:715](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L715)
