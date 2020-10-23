[@redhat-cloud-services/catalog-client](../README.md) › [Globals](../globals.md) › [OrderProcessApi](orderprocessapi.md)

# Class: OrderProcessApi

OrderProcessApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **OrderProcessApi**

## Index

### Constructors

* [constructor](orderprocessapi.md#constructor)

### Properties

* [axios](orderprocessapi.md#protected-axios)
* [basePath](orderprocessapi.md#protected-basepath)
* [configuration](orderprocessapi.md#protected-configuration)

### Methods

* [addOrderProcessAfterItem](orderprocessapi.md#addorderprocessafteritem)
* [addOrderProcessBeforeItem](orderprocessapi.md#addorderprocessbeforeitem)
* [createOrderProcess](orderprocessapi.md#createorderprocess)
* [destroyOrderProcess](orderprocessapi.md#destroyorderprocess)
* [linkTagToOrderProcess](orderprocessapi.md#linktagtoorderprocess)
* [listOrderProcesses](orderprocessapi.md#listorderprocesses)
* [removeOrderProcessAssociation](orderprocessapi.md#removeorderprocessassociation)
* [showOrderProcess](orderprocessapi.md#showorderprocess)
* [unlinkTagFromOrderProcess](orderprocessapi.md#unlinktagfromorderprocess)
* [updateOrderProcess](orderprocessapi.md#updateorderprocess)

## Constructors

###  constructor

\+ **new OrderProcessApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[OrderProcessApi](orderprocessapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [packages/catalog/base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/base.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** *[OrderProcessApi](orderprocessapi.md)*

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

###  addOrderProcessAfterItem

▸ **addOrderProcessAfterItem**(`id`: string, `orderProcessPortfolioItemId`: [OrderProcessPortfolioItemId](../interfaces/orderprocessportfolioitemid.md), `options?`: any): *AxiosPromise‹[OrderProcess](../interfaces/orderprocess.md)›*

*Defined in [packages/catalog/api.ts:4029](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L4029)*

Defines the product that will be executed after ordering when using this Order Process

**`summary`** Adds an \'after\' product for an Order Process

**`throws`** {RequiredError}

**`memberof`** OrderProcessApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`orderProcessPortfolioItemId` | [OrderProcessPortfolioItemId](../interfaces/orderprocessportfolioitemid.md) | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[OrderProcess](../interfaces/orderprocess.md)›*

___

###  addOrderProcessBeforeItem

▸ **addOrderProcessBeforeItem**(`id`: string, `orderProcessPortfolioItemId`: [OrderProcessPortfolioItemId](../interfaces/orderprocessportfolioitemid.md), `options?`: any): *AxiosPromise‹[OrderProcess](../interfaces/orderprocess.md)›*

*Defined in [packages/catalog/api.ts:4042](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L4042)*

Defines the product that will be executed before ordering when using this Order Process

**`summary`** Adds a \'before\' product for an Order Process

**`throws`** {RequiredError}

**`memberof`** OrderProcessApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`orderProcessPortfolioItemId` | [OrderProcessPortfolioItemId](../interfaces/orderprocessportfolioitemid.md) | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[OrderProcess](../interfaces/orderprocess.md)›*

___

###  createOrderProcess

▸ **createOrderProcess**(`orderProcess`: [OrderProcess](../interfaces/orderprocess.md), `options?`: any): *AxiosPromise‹[OrderProcess](../interfaces/orderprocess.md)›*

*Defined in [packages/catalog/api.ts:4054](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L4054)*

Adds an order process.

**`summary`** Add a new order process

**`throws`** {RequiredError}

**`memberof`** OrderProcessApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`orderProcess` | [OrderProcess](../interfaces/orderprocess.md) | Parameters needed to add an OrderProcess |
`options?` | any | - |

**Returns:** *AxiosPromise‹[OrderProcess](../interfaces/orderprocess.md)›*

___

###  destroyOrderProcess

▸ **destroyOrderProcess**(`id`: string, `options?`: any): *AxiosPromise‹void›*

*Defined in [packages/catalog/api.ts:4066](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L4066)*

Deletes the order process specified by the ID.

**`summary`** Delete an existing order process

**`throws`** {RequiredError}

**`memberof`** OrderProcessApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *AxiosPromise‹void›*

___

###  linkTagToOrderProcess

▸ **linkTagToOrderProcess**(`id`: string, `resourceObject`: [ResourceObject](../interfaces/resourceobject.md), `options?`: any): *AxiosPromise‹void›*

*Defined in [packages/catalog/api.ts:4079](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L4079)*

Links a tag to an order process

**`summary`** Links a tag to an order process

**`throws`** {RequiredError}

**`memberof`** OrderProcessApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`resourceObject` | [ResourceObject](../interfaces/resourceobject.md) | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹void›*

___

###  listOrderProcesses

▸ **listOrderProcesses**(`appName?`: string, `objectId?`: string, `objectType?`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string, `options?`: any): *AxiosPromise‹[OrderProcessCollection](../interfaces/orderprocesscollection.md)›*

*Defined in [packages/catalog/api.ts:4097](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L4097)*

Gets a list of order processes. Optionally select order processes linked to a resource object whose app_name, object_type and object_id are specified by query parameters.

**`summary`** List OrderProcesses

**`throws`** {RequiredError}

**`memberof`** OrderProcessApi

**Parameters:**

Name | Type |
------ | ------ |
`appName?` | string |
`objectId?` | string |
`objectType?` | string |
`limit?` | number |
`offset?` | number |
`filter?` | object |
`sortBy?` | string |
`options?` | any |

**Returns:** *AxiosPromise‹[OrderProcessCollection](../interfaces/orderprocesscollection.md)›*

___

###  removeOrderProcessAssociation

▸ **removeOrderProcessAssociation**(`id`: string, `orderProcessAssociationsToRemove`: [OrderProcessAssociationsToRemove](../interfaces/orderprocessassociationstoremove.md), `options?`: any): *AxiosPromise‹[OrderProcess](../interfaces/orderprocess.md)›*

*Defined in [packages/catalog/api.ts:4110](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L4110)*

Removes the association to the product(s) defined in the \'before\' and/or \'after\' that would be executed when using this Order Process

**`summary`** Removes the \'before\' and/or \'after\' product(s) for an Order Process

**`throws`** {RequiredError}

**`memberof`** OrderProcessApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`orderProcessAssociationsToRemove` | [OrderProcessAssociationsToRemove](../interfaces/orderprocessassociationstoremove.md) | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[OrderProcess](../interfaces/orderprocess.md)›*

___

###  showOrderProcess

▸ **showOrderProcess**(`id`: string, `options?`: any): *AxiosPromise‹[OrderProcess](../interfaces/orderprocess.md)›*

*Defined in [packages/catalog/api.ts:4122](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L4122)*

Gets the order process specified by the order process ID.

**`summary`** Get a specific order process

**`throws`** {RequiredError}

**`memberof`** OrderProcessApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *AxiosPromise‹[OrderProcess](../interfaces/orderprocess.md)›*

___

###  unlinkTagFromOrderProcess

▸ **unlinkTagFromOrderProcess**(`id`: string, `resourceObject`: [ResourceObject](../interfaces/resourceobject.md), `options?`: any): *AxiosPromise‹void›*

*Defined in [packages/catalog/api.ts:4135](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L4135)*

Unlinks a tag from an order process

**`summary`** Unlinks a tag from an order process

**`throws`** {RequiredError}

**`memberof`** OrderProcessApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`resourceObject` | [ResourceObject](../interfaces/resourceobject.md) | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹void›*

___

###  updateOrderProcess

▸ **updateOrderProcess**(`id`: string, `orderProcess`: [OrderProcess](../interfaces/orderprocess.md), `options?`: any): *AxiosPromise‹[OrderProcess](../interfaces/orderprocess.md)›*

*Defined in [packages/catalog/api.ts:4148](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L4148)*

Returns the edited order process.

**`summary`** Edit an existing order process

**`throws`** {RequiredError}

**`memberof`** OrderProcessApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`orderProcess` | [OrderProcess](../interfaces/orderprocess.md) | Parameters needed to update a OrderProcess |
`options?` | any | - |

**Returns:** *AxiosPromise‹[OrderProcess](../interfaces/orderprocess.md)›*
