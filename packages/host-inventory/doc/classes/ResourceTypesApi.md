[@redhat-cloud-services/host-inventory-client](../README.md) / [Exports](../modules.md) / ResourceTypesApi

# Class: ResourceTypesApi

ResourceTypesApi - object-oriented interface

**`Export`**

## Hierarchy

- `BaseAPI`

  ↳ **`ResourceTypesApi`**

## Table of contents

### Constructors

- [constructor](ResourceTypesApi.md#constructor)

### Properties

- [axios](ResourceTypesApi.md#axios)
- [basePath](ResourceTypesApi.md#basepath)
- [configuration](ResourceTypesApi.md#configuration)

### Methods

- [apiResourceTypeGetResourceTypeGroupsList](ResourceTypesApi.md#apiresourcetypegetresourcetypegroupslist)
- [apiResourceTypeGetResourceTypeList](ResourceTypesApi.md#apiresourcetypegetresourcetypelist)

## Constructors

### constructor

• **new ResourceTypesApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[base.ts:51](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/host-inventory/base.ts#L51)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

BaseAPI.axios

#### Defined in

[base.ts:51](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/host-inventory/base.ts#L51)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

BaseAPI.basePath

#### Defined in

[base.ts:51](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/host-inventory/base.ts#L51)

___

### configuration

• `Protected` **configuration**: [`Configuration`](Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[base.ts:49](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/host-inventory/base.ts#L49)

## Methods

### apiResourceTypeGetResourceTypeGroupsList

▸ **apiResourceTypeGetResourceTypeGroupsList**(`name?`, `perPage?`, `page?`, `options?`): `Promise`<`AxiosResponse`<[`ResourceTypesGroupsQueryOutput`](../interfaces/ResourceTypesGroupsQueryOutput.md), `any`\>\>

Returns the list of groups in the current account. <br /><br /> Required permissions: rbac:*:*

**`Summary`**

Get the list of inventory groups in resource-types format

**`Throws`**

**`Memberof`**

ResourceTypesApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name?` | `string` | Filter by group name |
| `perPage?` | `number` | A number of items to return per page. |
| `page?` | `number` | A page number of the items to return. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ResourceTypesGroupsQueryOutput`](../interfaces/ResourceTypesGroupsQueryOutput.md), `any`\>\>

#### Defined in

[api.ts:5942](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/host-inventory/api.ts#L5942)

___

### apiResourceTypeGetResourceTypeList

▸ **apiResourceTypeGetResourceTypeList**(`perPage?`, `page?`, `options?`): `Promise`<`AxiosResponse`<[`ResourceTypesQueryOutput`](../interfaces/ResourceTypesQueryOutput.md), `any`\>\>

Returns the list of available RBAC resource types. <br /><br /> Required permissions: rbac:*:*

**`Summary`**

Get the list of resource types

**`Throws`**

**`Memberof`**

ResourceTypesApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `perPage?` | `number` | A number of items to return per page. |
| `page?` | `number` | A page number of the items to return. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ResourceTypesQueryOutput`](../interfaces/ResourceTypesQueryOutput.md), `any`\>\>

#### Defined in

[api.ts:5955](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/host-inventory/api.ts#L5955)
