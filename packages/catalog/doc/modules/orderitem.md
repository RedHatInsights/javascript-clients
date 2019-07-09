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

*Defined in [api.ts:439](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L439)*

*__type__*: {Date}

*__memberof__*: OrderItem

___
<a id="count"></a>

###  count

**● count**: *`number`*

*Defined in [api.ts:385](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L385)*

*__type__*: {number}

*__memberof__*: OrderItem

___
<a id="createdat"></a>

### `<Optional>` createdAt

**● createdAt**: *`Date`*

*Defined in [api.ts:427](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L427)*

*__type__*: {Date}

*__memberof__*: OrderItem

___
<a id="externalurl"></a>

### `<Optional>` externalUrl

**● externalUrl**: *`string`*

*Defined in [api.ts:457](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L457)*

The external url of the service instance used with relation to this order item

*__type__*: {string}

*__memberof__*: OrderItem

___
<a id="id"></a>

### `<Optional>` id

**● id**: *`string`*

*Defined in [api.ts:379](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L379)*

*__type__*: {string}

*__memberof__*: OrderItem

___
<a id="insightsrequestid"></a>

### `<Optional>` insightsRequestId

**● insightsRequestId**: *`string`*

*Defined in [api.ts:463](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L463)*

The insights request id can be used to collect log data for this order item as its processed by the system

*__type__*: {string}

*__memberof__*: OrderItem

___
<a id="orderid"></a>

### `<Optional>` orderId

**● orderId**: *`string`*

*Defined in [api.ts:421](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L421)*

The Order that the OrderItem belongs to.

*__type__*: {string}

*__memberof__*: OrderItem

___
<a id="orderedat"></a>

### `<Optional>` orderedAt

**● orderedAt**: *`Date`*

*Defined in [api.ts:433](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L433)*

*__type__*: {Date}

*__memberof__*: OrderItem

___
<a id="owner"></a>

### `<Optional>` owner

**● owner**: *`string`*

*Defined in [api.ts:451](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L451)*

*__type__*: {string}

*__memberof__*: OrderItem

___
<a id="portfolioitemid"></a>

###  portfolioItemId

**● portfolioItemId**: *`string`*

*Defined in [api.ts:409](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L409)*

Stores the Portfolio Item ID.

*__type__*: {string}

*__memberof__*: OrderItem

___
<a id="providercontrolparameters"></a>

###  providerControlParameters

**● providerControlParameters**: *`any`*

*Defined in [api.ts:397](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L397)*

The provider specific parameters needed to provision this service. This might include namespaces, special keys.

*__type__*: {any}

*__memberof__*: OrderItem

___
<a id="serviceparameters"></a>

###  serviceParameters

**● serviceParameters**: *`any`*

*Defined in [api.ts:391](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L391)*

*__type__*: {any}

*__memberof__*: OrderItem

___
<a id="serviceplanref"></a>

###  servicePlanRef

**● servicePlanRef**: *`string`*

*Defined in [api.ts:403](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L403)*

Stores the service plan ref from the Topology Service.

*__type__*: {string}

*__memberof__*: OrderItem

___
<a id="state"></a>

### `<Optional>` state

**● state**: *[StateEnum](../enums/orderitem.stateenum.md)*

*Defined in [api.ts:415](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L415)*

Current state of this order item.

*__type__*: {string}

*__memberof__*: OrderItem

___
<a id="updatedat"></a>

### `<Optional>` updatedAt

**● updatedAt**: *`Date`*

*Defined in [api.ts:445](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L445)*

*__type__*: {Date}

*__memberof__*: OrderItem

___

