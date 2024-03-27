[@redhat-cloud-services/catalog-client](../README.md) / [Exports](../modules.md) / OrderProcessApi

# Class: OrderProcessApi

OrderProcessApi - object-oriented interface

**`Export`**

## Hierarchy

- `BaseAPI`

  ↳ **`OrderProcessApi`**

## Table of contents

### Constructors

- [constructor](OrderProcessApi.md#constructor)

### Properties

- [axios](OrderProcessApi.md#axios)
- [basePath](OrderProcessApi.md#basepath)
- [configuration](OrderProcessApi.md#configuration)

### Methods

- [addOrderProcessAfterItem](OrderProcessApi.md#addorderprocessafteritem)
- [addOrderProcessBeforeItem](OrderProcessApi.md#addorderprocessbeforeitem)
- [addOrderProcessReturnItem](OrderProcessApi.md#addorderprocessreturnitem)
- [createOrderProcess](OrderProcessApi.md#createorderprocess)
- [destroyOrderProcess](OrderProcessApi.md#destroyorderprocess)
- [linkTagToOrderProcess](OrderProcessApi.md#linktagtoorderprocess)
- [listOrderProcesses](OrderProcessApi.md#listorderprocesses)
- [removeOrderProcessAssociation](OrderProcessApi.md#removeorderprocessassociation)
- [reposition](OrderProcessApi.md#reposition)
- [showOrderProcess](OrderProcessApi.md#showorderprocess)
- [unlinkTagFromOrderProcess](OrderProcessApi.md#unlinktagfromorderprocess)
- [updateOrderProcess](OrderProcessApi.md#updateorderprocess)

## Constructors

### constructor

• **new OrderProcessApi**(`configuration?`, `basePath?`, `axios?`)

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

• `Protected` **configuration**: `undefined` \| [`Configuration`](Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/base.ts#L49)

## Methods

### addOrderProcessAfterItem

▸ **addOrderProcessAfterItem**(`id`, `orderProcessPortfolioItemId`, `options?`): `Promise`<`AxiosResponse`<[`OrderProcess`](../interfaces/OrderProcess.md), `any`\>\>

Defines the product that will be executed after ordering when using this Order Process

**`Summary`**

Adds an \'after\' product for an Order Process

**`Throws`**

**`Memberof`**

OrderProcessApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `orderProcessPortfolioItemId` | [`OrderProcessPortfolioItemId`](../interfaces/OrderProcessPortfolioItemId.md) |  |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`OrderProcess`](../interfaces/OrderProcess.md), `any`\>\>

#### Defined in

[api.ts:4385](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L4385)

___

### addOrderProcessBeforeItem

▸ **addOrderProcessBeforeItem**(`id`, `orderProcessPortfolioItemId`, `options?`): `Promise`<`AxiosResponse`<[`OrderProcess`](../interfaces/OrderProcess.md), `any`\>\>

Defines the product that will be executed before ordering when using this Order Process

**`Summary`**

Adds a \'before\' product for an Order Process

**`Throws`**

**`Memberof`**

OrderProcessApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `orderProcessPortfolioItemId` | [`OrderProcessPortfolioItemId`](../interfaces/OrderProcessPortfolioItemId.md) |  |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`OrderProcess`](../interfaces/OrderProcess.md), `any`\>\>

#### Defined in

[api.ts:4398](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L4398)

___

### addOrderProcessReturnItem

▸ **addOrderProcessReturnItem**(`id`, `orderProcessPortfolioItemId`, `options?`): `Promise`<`AxiosResponse`<[`OrderProcess`](../interfaces/OrderProcess.md), `any`\>\>

Defines the product that will be executed on return when using this Order Process

**`Summary`**

Adds \'return\' product for an Order Process

**`Throws`**

**`Memberof`**

OrderProcessApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `orderProcessPortfolioItemId` | [`OrderProcessPortfolioItemId`](../interfaces/OrderProcessPortfolioItemId.md) |  |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`OrderProcess`](../interfaces/OrderProcess.md), `any`\>\>

#### Defined in

[api.ts:4411](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L4411)

___

### createOrderProcess

▸ **createOrderProcess**(`orderProcess`, `options?`): `Promise`<`AxiosResponse`<[`OrderProcess`](../interfaces/OrderProcess.md), `any`\>\>

Adds an order process.

**`Summary`**

Add a new order process

**`Throws`**

**`Memberof`**

OrderProcessApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `orderProcess` | [`OrderProcess`](../interfaces/OrderProcess.md) | Parameters needed to add an OrderProcess |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`OrderProcess`](../interfaces/OrderProcess.md), `any`\>\>

#### Defined in

[api.ts:4423](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L4423)

___

### destroyOrderProcess

▸ **destroyOrderProcess**(`id`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

Deletes the order process specified by the ID.

**`Summary`**

Delete an existing order process

**`Throws`**

**`Memberof`**

OrderProcessApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[api.ts:4435](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L4435)

___

### linkTagToOrderProcess

▸ **linkTagToOrderProcess**(`id`, `resourceObject`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

Links a tag to an order process

**`Summary`**

Links a tag to an order process

**`Throws`**

**`Memberof`**

OrderProcessApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `resourceObject` | [`ResourceObject`](../interfaces/ResourceObject.md) |  |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[api.ts:4448](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L4448)

___

### listOrderProcesses

▸ **listOrderProcesses**(`appName?`, `objectId?`, `objectType?`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`OrderProcessCollection`](../interfaces/OrderProcessCollection.md), `any`\>\>

Gets a list of order processes. Optionally select order processes linked to a resource object whose app_name, object_type and object_id are specified by query parameters.

**`Summary`**

List OrderProcesses

**`Throws`**

**`Memberof`**

OrderProcessApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appName?` | `string` | Name of the application. |
| `objectId?` | `string` | Id of the resource object. |
| `objectType?` | `string` | Type of the resource object. |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` | Field to sort collection by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`OrderProcessCollection`](../interfaces/OrderProcessCollection.md), `any`\>\>

#### Defined in

[api.ts:4466](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L4466)

___

### removeOrderProcessAssociation

▸ **removeOrderProcessAssociation**(`id`, `orderProcessAssociationsToRemove`, `options?`): `Promise`<`AxiosResponse`<[`OrderProcess`](../interfaces/OrderProcess.md), `any`\>\>

Removes the association to the product(s) defined in the \'before\' and/or \'after\' that would be executed when using this Order Process

**`Summary`**

Removes the \'before\' and/or \'after\' product(s) for an Order Process

**`Throws`**

**`Memberof`**

OrderProcessApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `orderProcessAssociationsToRemove` | [`OrderProcessAssociationsToRemove`](../interfaces/OrderProcessAssociationsToRemove.md) |  |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`OrderProcess`](../interfaces/OrderProcess.md), `any`\>\>

#### Defined in

[api.ts:4479](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L4479)

___

### reposition

▸ **reposition**(`id`, `reposition`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

Adjust the position of an order process related to others by an offset number

**`Summary`**

Adjust the position of an order process

**`Throws`**

**`Memberof`**

OrderProcessApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `reposition` | [`Reposition`](../interfaces/Reposition.md) | How many levels should the sequence be brought up or down |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[api.ts:4492](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L4492)

___

### showOrderProcess

▸ **showOrderProcess**(`id`, `options?`): `Promise`<`AxiosResponse`<[`OrderProcess`](../interfaces/OrderProcess.md), `any`\>\>

Gets the order process specified by the order process ID.

**`Summary`**

Get a specific order process

**`Throws`**

**`Memberof`**

OrderProcessApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`OrderProcess`](../interfaces/OrderProcess.md), `any`\>\>

#### Defined in

[api.ts:4504](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L4504)

___

### unlinkTagFromOrderProcess

▸ **unlinkTagFromOrderProcess**(`id`, `resourceObject`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

Unlinks a tag from an order process

**`Summary`**

Unlinks a tag from an order process

**`Throws`**

**`Memberof`**

OrderProcessApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `resourceObject` | [`ResourceObject`](../interfaces/ResourceObject.md) |  |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[api.ts:4517](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L4517)

___

### updateOrderProcess

▸ **updateOrderProcess**(`id`, `orderProcess`, `options?`): `Promise`<`AxiosResponse`<[`OrderProcess`](../interfaces/OrderProcess.md), `any`\>\>

Returns the edited order process.

**`Summary`**

Edit an existing order process

**`Throws`**

**`Memberof`**

OrderProcessApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `orderProcess` | [`OrderProcess`](../interfaces/OrderProcess.md) | Parameters needed to update a OrderProcess |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`OrderProcess`](../interfaces/OrderProcess.md), `any`\>\>

#### Defined in

[api.ts:4530](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L4530)
