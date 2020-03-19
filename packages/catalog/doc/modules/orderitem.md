[@redhat-cloud-services/catalog-client](../README.md) › [Globals](../globals.md) › [OrderItem](orderitem.md)

# Module: OrderItem

**`export`** 

**`namespace`** OrderItem

## Index

### Enumerations

* [StateEnum](../enums/orderitem.stateenum.md)

### Properties

* [completedAt](orderitem.md#optional-completedat)
* [count](orderitem.md#count)
* [createdAt](orderitem.md#optional-createdat)
* [externalUrl](orderitem.md#optional-externalurl)
* [id](orderitem.md#optional-id)
* [insightsRequestId](orderitem.md#optional-insightsrequestid)
* [orderId](orderitem.md#optional-orderid)
* [orderRequestSentAt](orderitem.md#optional-orderrequestsentat)
* [owner](orderitem.md#optional-owner)
* [portfolioItemId](orderitem.md#portfolioitemid)
* [providerControlParameters](orderitem.md#optional-providercontrolparameters)
* [serviceParameters](orderitem.md#optional-serviceparameters)
* [state](orderitem.md#optional-state)
* [updatedAt](orderitem.md#optional-updatedat)

## Properties

### `Optional` completedAt

• **completedAt**? : *Date*

*Defined in [api.ts:509](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L509)*

**`type`** {Date}

**`memberof`** OrderItem

___

###  count

• **count**: *number*

*Defined in [api.ts:461](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L461)*

**`type`** {number}

**`memberof`** OrderItem

___

### `Optional` createdAt

• **createdAt**? : *Date*

*Defined in [api.ts:497](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L497)*

**`type`** {Date}

**`memberof`** OrderItem

___

### `Optional` externalUrl

• **externalUrl**? : *string*

*Defined in [api.ts:527](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L527)*

The external url of the service instance used with relation to this order item

**`type`** {string}

**`memberof`** OrderItem

___

### `Optional` id

• **id**? : *string*

*Defined in [api.ts:455](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L455)*

**`type`** {string}

**`memberof`** OrderItem

___

### `Optional` insightsRequestId

• **insightsRequestId**? : *string*

*Defined in [api.ts:533](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L533)*

The insights request id can be used to collect log data for this order item as its processed by the system

**`type`** {string}

**`memberof`** OrderItem

___

### `Optional` orderId

• **orderId**? : *string*

*Defined in [api.ts:491](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L491)*

The Order that the OrderItem belongs to.

**`type`** {string}

**`memberof`** OrderItem

___

### `Optional` orderRequestSentAt

• **orderRequestSentAt**? : *Date*

*Defined in [api.ts:503](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L503)*

The time at which the order request was sent to the Topology Service

**`type`** {Date}

**`memberof`** OrderItem

___

### `Optional` owner

• **owner**? : *string*

*Defined in [api.ts:521](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L521)*

**`type`** {string}

**`memberof`** OrderItem

___

###  portfolioItemId

• **portfolioItemId**: *string*

*Defined in [api.ts:479](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L479)*

Stores the Portfolio Item ID.

**`type`** {string}

**`memberof`** OrderItem

___

### `Optional` providerControlParameters

• **providerControlParameters**? : *any | null*

*Defined in [api.ts:473](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L473)*

The provider specific parameters needed to provision this service. This might include namespaces, special keys.

**`type`** {any}

**`memberof`** OrderItem

___

### `Optional` serviceParameters

• **serviceParameters**? : *any | null*

*Defined in [api.ts:467](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L467)*

**`type`** {any}

**`memberof`** OrderItem

___

### `Optional` state

• **state**? : *[StateEnum](../enums/orderitem.stateenum.md)*

*Defined in [api.ts:485](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L485)*

Current state of this order item.

**`type`** {string}

**`memberof`** OrderItem

___

### `Optional` updatedAt

• **updatedAt**? : *Date*

*Defined in [api.ts:515](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L515)*

**`type`** {Date}

**`memberof`** OrderItem
