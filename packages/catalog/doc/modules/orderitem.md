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
* [orderedAt](orderitem.md#orderedat)
* [owner](orderitem.md#owner)
* [portfolioItemId](orderitem.md#portfolioitemid)
* [providerControlParameters](orderitem.md#providercontrolparameters)
* [serviceParameters](orderitem.md#serviceparameters)
* [servicePlanRef](orderitem.md#serviceplanref)
* [state](orderitem.md#state)
* [updatedAt](orderitem.md#updatedat)

---

## Properties

<a id="completedat"></a>

### `<Optional>` completedAt

**● completedAt**: *`Date`*

*Defined in [api.ts:485](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L485)*

*__type__*: {Date}

*__memberof__*: OrderItem

___
<a id="count"></a>

###  count

**● count**: *`number`*

*Defined in [api.ts:431](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L431)*

*__type__*: {number}

*__memberof__*: OrderItem

___
<a id="createdat"></a>

### `<Optional>` createdAt

**● createdAt**: *`Date`*

*Defined in [api.ts:473](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L473)*

*__type__*: {Date}

*__memberof__*: OrderItem

___
<a id="externalurl"></a>

### `<Optional>` externalUrl

**● externalUrl**: *`string`*

*Defined in [api.ts:503](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L503)*

The external url of the service instance used with relation to this order item

*__type__*: {string}

*__memberof__*: OrderItem

___
<a id="id"></a>

### `<Optional>` id

**● id**: *`string`*

*Defined in [api.ts:425](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L425)*

*__type__*: {string}

*__memberof__*: OrderItem

___
<a id="insightsrequestid"></a>

### `<Optional>` insightsRequestId

**● insightsRequestId**: *`string`*

*Defined in [api.ts:509](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L509)*

The insights request id can be used to collect log data for this order item as its processed by the system

*__type__*: {string}

*__memberof__*: OrderItem

___
<a id="orderid"></a>

### `<Optional>` orderId

**● orderId**: *`string`*

*Defined in [api.ts:467](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L467)*

The Order that the OrderItem belongs to.

*__type__*: {string}

*__memberof__*: OrderItem

___
<a id="orderedat"></a>

### `<Optional>` orderedAt

**● orderedAt**: *`Date`*

*Defined in [api.ts:479](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L479)*

*__type__*: {Date}

*__memberof__*: OrderItem

___
<a id="owner"></a>

### `<Optional>` owner

**● owner**: *`string`*

*Defined in [api.ts:497](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L497)*

*__type__*: {string}

*__memberof__*: OrderItem

___
<a id="portfolioitemid"></a>

###  portfolioItemId

**● portfolioItemId**: *`string`*

*Defined in [api.ts:455](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L455)*

Stores the Portfolio Item ID.

*__type__*: {string}

*__memberof__*: OrderItem

___
<a id="providercontrolparameters"></a>

###  providerControlParameters

**● providerControlParameters**: *`any`*

*Defined in [api.ts:443](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L443)*

The provider specific parameters needed to provision this service. This might include namespaces, special keys.

*__type__*: {any}

*__memberof__*: OrderItem

___
<a id="serviceparameters"></a>

###  serviceParameters

**● serviceParameters**: *`any`*

*Defined in [api.ts:437](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L437)*

*__type__*: {any}

*__memberof__*: OrderItem

___
<a id="serviceplanref"></a>

###  servicePlanRef

**● servicePlanRef**: *`string`*

*Defined in [api.ts:449](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L449)*

Stores the service plan ref from the Topology Service.

*__type__*: {string}

*__memberof__*: OrderItem

___
<a id="state"></a>

### `<Optional>` state

**● state**: *[StateEnum](../enums/orderitem.stateenum.md)*

*Defined in [api.ts:461](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L461)*

Current state of this order item.

*__type__*: {string}

*__memberof__*: OrderItem

___
<a id="updatedat"></a>

### `<Optional>` updatedAt

**● updatedAt**: *`Date`*

*Defined in [api.ts:491](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L491)*

*__type__*: {Date}

*__memberof__*: OrderItem

___

