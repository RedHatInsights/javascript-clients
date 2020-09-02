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
* [addOrderProcessTag](orderprocessapi.md#addorderprocesstag)
* [createOrderProcess](orderprocessapi.md#createorderprocess)
* [destroyOrderProcess](orderprocessapi.md#destroyorderprocess)
* [linkTagToOrderProcess](orderprocessapi.md#linktagtoorderprocess)
* [listOrderProcessTags](orderprocessapi.md#listorderprocesstags)
* [listOrderProcesses](orderprocessapi.md#listorderprocesses)
* [removeOrderProcessAssociation](orderprocessapi.md#removeorderprocessassociation)
* [removeOrderProcessTags](orderprocessapi.md#removeorderprocesstags)
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

*Defined in [packages/catalog/api.ts:4277](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L4277)*

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

*Defined in [packages/catalog/api.ts:4290](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L4290)*

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

###  addOrderProcessTag

▸ **addOrderProcessTag**(`id`: string, `tag`: Array‹[Tag](../interfaces/tag.md)›, `options?`: any): *AxiosPromise‹[Tag](../interfaces/tag.md)[]›*

*Defined in [packages/catalog/api.ts:4303](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L4303)*

Adds a single tag to a Order Process object

**`summary`** Add Tag for Order Process

**`throws`** {RequiredError}

**`memberof`** OrderProcessApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`tag` | Array‹[Tag](../interfaces/tag.md)› | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[Tag](../interfaces/tag.md)[]›*

___

###  createOrderProcess

▸ **createOrderProcess**(`orderProcess`: [OrderProcess](../interfaces/orderprocess.md), `options?`: any): *AxiosPromise‹[OrderProcess](../interfaces/orderprocess.md)›*

*Defined in [packages/catalog/api.ts:4315](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L4315)*

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

*Defined in [packages/catalog/api.ts:4327](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L4327)*

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

*Defined in [packages/catalog/api.ts:4340](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L4340)*

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

###  listOrderProcessTags

▸ **listOrderProcessTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string, `options?`: any): *AxiosPromise‹[TagsCollection](../interfaces/tagscollection.md)›*

*Defined in [packages/catalog/api.ts:4356](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L4356)*

Returns an array of Tag objects

**`summary`** List Tags for OrderProcess

**`throws`** {RequiredError}

**`memberof`** OrderProcessApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[TagsCollection](../interfaces/tagscollection.md)›*

___

###  listOrderProcesses

▸ **listOrderProcesses**(`appName?`: string, `objectId?`: string, `objectType?`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string, `options?`: any): *AxiosPromise‹[OrderProcessCollection](../interfaces/orderprocesscollection.md)›*

*Defined in [packages/catalog/api.ts:4374](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L4374)*

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

*Defined in [packages/catalog/api.ts:4387](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L4387)*

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

###  removeOrderProcessTags

▸ **removeOrderProcessTags**(`id`: string, `tag`: Array‹[Tag](../interfaces/tag.md)›, `options?`: any): *AxiosPromise‹void›*

*Defined in [packages/catalog/api.ts:4400](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L4400)*

Remove Tags from Order Process

**`summary`** Remove Tags from Order Process

**`throws`** {RequiredError}

**`memberof`** OrderProcessApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`tag` | Array‹[Tag](../interfaces/tag.md)› | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹void›*

___

###  showOrderProcess

▸ **showOrderProcess**(`id`: string, `options?`: any): *AxiosPromise‹[OrderProcess](../interfaces/orderprocess.md)›*

*Defined in [packages/catalog/api.ts:4412](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L4412)*

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

*Defined in [packages/catalog/api.ts:4425](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L4425)*

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

*Defined in [packages/catalog/api.ts:4438](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L4438)*

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
