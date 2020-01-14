[@redhat-cloud-services/catalog-client](../README.md) > [OrderItem](../modules/orderitem.md)

# Module: OrderItem

*__export__*: 

*__namespace__*: OrderItem

## Index

### Enumerations

* [StateEnum](../enums/orderitem.stateenum.md)

### Properties

* [completedAt](orderitem.md#completedat)
* [count](orderitem.md#count)
* [createdAt](orderitem.md#createdat)
* [externalUrl](orderitem.md#externalurl)
* [id](orderitem.md#id)
* [insightsRequestId](orderitem.md#insightsrequestid)
* [orderId](orderitem.md#orderid)
* [orderRequestSentAt](orderitem.md#orderrequestsentat)
* [owner](orderitem.md#owner)
* [portfolioItemId](orderitem.md#portfolioitemid)
* [providerControlParameters](orderitem.md#providercontrolparameters)
* [serviceParameters](orderitem.md#serviceparameters)
* [state](orderitem.md#state)
* [updatedAt](orderitem.md#updatedat)

---

## Properties

<a id="completedat"></a>

### `<Optional>` completedAt

**● completedAt**: *`Date`*

*Defined in [api.ts:517](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L517)*

*__type__*: {Date}

*__memberof__*: OrderItem

___
<a id="count"></a>

###  count

**● count**: *`number`*

*Defined in [api.ts:469](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L469)*

*__type__*: {number}

*__memberof__*: OrderItem

___
<a id="createdat"></a>

### `<Optional>` createdAt

**● createdAt**: *`Date`*

*Defined in [api.ts:505](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L505)*

*__type__*: {Date}

*__memberof__*: OrderItem

___
<a id="externalurl"></a>

### `<Optional>` externalUrl

**● externalUrl**: *`string`*

*Defined in [api.ts:535](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L535)*

The external url of the service instance used with relation to this order item

*__type__*: {string}

*__memberof__*: OrderItem

___
<a id="id"></a>

### `<Optional>` id

**● id**: *`string`*

*Defined in [api.ts:463](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L463)*

*__type__*: {string}

*__memberof__*: OrderItem

___
<a id="insightsrequestid"></a>

### `<Optional>` insightsRequestId

**● insightsRequestId**: *`string`*

*Defined in [api.ts:541](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L541)*

The insights request id can be used to collect log data for this order item as its processed by the system

*__type__*: {string}

*__memberof__*: OrderItem

___
<a id="orderid"></a>

### `<Optional>` orderId

**● orderId**: *`string`*

*Defined in [api.ts:499](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L499)*

The Order that the OrderItem belongs to.

*__type__*: {string}

*__memberof__*: OrderItem

___
<a id="orderrequestsentat"></a>

### `<Optional>` orderRequestSentAt

**● orderRequestSentAt**: *`Date`*

*Defined in [api.ts:511](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L511)*

The time at which the order request was sent to the Topology Service

*__type__*: {Date}

*__memberof__*: OrderItem

___
<a id="owner"></a>

### `<Optional>` owner

**● owner**: *`string`*

*Defined in [api.ts:529](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L529)*

*__type__*: {string}

*__memberof__*: OrderItem

___
<a id="portfolioitemid"></a>

###  portfolioItemId

**● portfolioItemId**: *`string`*

*Defined in [api.ts:487](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L487)*

Stores the Portfolio Item ID.

*__type__*: {string}

*__memberof__*: OrderItem

___
<a id="providercontrolparameters"></a>

### `<Optional>` providerControlParameters

**● providerControlParameters**: *`any` \| `null`*

*Defined in [api.ts:481](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L481)*

The provider specific parameters needed to provision this service. This might include namespaces, special keys.

*__type__*: {any}

*__memberof__*: OrderItem

___
<a id="serviceparameters"></a>

### `<Optional>` serviceParameters

**● serviceParameters**: *`any` \| `null`*

*Defined in [api.ts:475](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L475)*

*__type__*: {any}

*__memberof__*: OrderItem

___
<a id="state"></a>

### `<Optional>` state

**● state**: *[StateEnum](../enums/orderitem.stateenum.md)*

*Defined in [api.ts:493](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L493)*

Current state of this order item.

*__type__*: {string}

*__memberof__*: OrderItem

___
<a id="updatedat"></a>

### `<Optional>` updatedAt

**● updatedAt**: *`Date`*

*Defined in [api.ts:523](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L523)*

*__type__*: {Date}

*__memberof__*: OrderItem

___

