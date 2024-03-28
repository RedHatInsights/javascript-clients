[@redhat-cloud-services/insights-client](../README.md) / [Exports](../modules.md) / StatusApi

# Class: StatusApi

StatusApi - object-oriented interface

**`Export`**

## Hierarchy

- `BaseAPI`

  ↳ **`StatusApi`**

## Table of contents

### Constructors

- [constructor](StatusApi.md#constructor)

### Properties

- [axios](StatusApi.md#axios)
- [basePath](StatusApi.md#basepath)
- [configuration](StatusApi.md#configuration)

### Methods

- [statusLiveRetrieve](StatusApi.md#statusliveretrieve)
- [statusReadyRetrieve](StatusApi.md#statusreadyretrieve)
- [statusRetrieve](StatusApi.md#statusretrieve)

## Constructors

### constructor

• **new StatusApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L51)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

BaseAPI.axios

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L51)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

BaseAPI.basePath

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L51)

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L49)

## Methods

### statusLiveRetrieve

▸ **statusLiveRetrieve**(`options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

Is the Advisor API live and serving requests?  This returns a dictionary with properties defining the status of the components Advisor relies on.  At the moment this is the same as the Readiness check (see `/ready/`). In the future it may include other checks if we need to, but the properties of `/ready/` will always be included.

**`Throws`**

**`Memberof`**

StatusApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[api.ts:8533](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L8533)

___

### statusReadyRetrieve

▸ **statusReadyRetrieve**(`options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

Is the Advisor API ready to serve requests?  This returns a dictionary with properties defining the status of the components Advisor relies on.  * \'django\' should always be True.  If Django isn\'t ready, you can\'t   get this information :-) * \'database\' is True when a database access returns successfully with   valid information. * \'rbac\' is True when we can make a request to the RBAC API and get   a valid response. * \'advisor\' is True if all of the above are True.

**`Throws`**

**`Memberof`**

StatusApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[api.ts:8543](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L8543)

___

### statusRetrieve

▸ **statusRetrieve**(`options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

Provide a simple list of URLs contained here.  A list of statistics views.

**`Throws`**

**`Memberof`**

StatusApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[api.ts:8553](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L8553)
