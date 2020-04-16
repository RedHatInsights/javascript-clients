[@redhat-cloud-services/catalog-client](../README.md) › [Globals](../globals.md) › [OrderItem](orderitem.md)

# Interface: OrderItem

**`export`** 

**`interface`** OrderItem

## Hierarchy

* **OrderItem**

## Index

### Properties

* [completed_at](orderitem.md#optional-completed_at)
* [count](orderitem.md#count)
* [created_at](orderitem.md#optional-created_at)
* [external_url](orderitem.md#optional-external_url)
* [id](orderitem.md#optional-id)
* [insights_request_id](orderitem.md#optional-insights_request_id)
* [order_id](orderitem.md#optional-order_id)
* [order_request_sent_at](orderitem.md#optional-order_request_sent_at)
* [owner](orderitem.md#optional-owner)
* [portfolio_item_id](orderitem.md#portfolio_item_id)
* [provider_control_parameters](orderitem.md#optional-provider_control_parameters)
* [service_parameters](orderitem.md#optional-service_parameters)
* [state](orderitem.md#optional-state)
* [updated_at](orderitem.md#optional-updated_at)

## Properties

### `Optional` completed_at

• **completed_at**? : *string*

*Defined in [packages/catalog/api.ts:437](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L437)*

**`memberof`** OrderItem

___

###  count

• **count**: *number*

*Defined in [packages/catalog/api.ts:389](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L389)*

**`memberof`** OrderItem

___

### `Optional` created_at

• **created_at**? : *string*

*Defined in [packages/catalog/api.ts:425](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L425)*

**`memberof`** OrderItem

___

### `Optional` external_url

• **external_url**? : *string*

*Defined in [packages/catalog/api.ts:455](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L455)*

The external url of the service instance used with relation to this order item

**`memberof`** OrderItem

___

### `Optional` id

• **id**? : *string*

*Defined in [packages/catalog/api.ts:383](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L383)*

**`memberof`** OrderItem

___

### `Optional` insights_request_id

• **insights_request_id**? : *string*

*Defined in [packages/catalog/api.ts:461](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L461)*

The insights request id can be used to collect log data for this order item as its processed by the system

**`memberof`** OrderItem

___

### `Optional` order_id

• **order_id**? : *string*

*Defined in [packages/catalog/api.ts:419](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L419)*

The Order that the OrderItem belongs to.

**`memberof`** OrderItem

___

### `Optional` order_request_sent_at

• **order_request_sent_at**? : *string*

*Defined in [packages/catalog/api.ts:431](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L431)*

The time at which the order request was sent to the Topology Service

**`memberof`** OrderItem

___

### `Optional` owner

• **owner**? : *string*

*Defined in [packages/catalog/api.ts:449](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L449)*

**`memberof`** OrderItem

___

###  portfolio_item_id

• **portfolio_item_id**: *string*

*Defined in [packages/catalog/api.ts:407](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L407)*

Stores the Portfolio Item ID.

**`memberof`** OrderItem

___

### `Optional` provider_control_parameters

• **provider_control_parameters**? : *object | null*

*Defined in [packages/catalog/api.ts:401](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L401)*

The provider specific parameters needed to provision this service. This might include namespaces, special keys.

**`memberof`** OrderItem

___

### `Optional` service_parameters

• **service_parameters**? : *object | null*

*Defined in [packages/catalog/api.ts:395](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L395)*

**`memberof`** OrderItem

___

### `Optional` state

• **state**? : *[OrderItemStateEnum](../enums/orderitemstateenum.md)*

*Defined in [packages/catalog/api.ts:413](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L413)*

Current state of this order item.

**`memberof`** OrderItem

___

### `Optional` updated_at

• **updated_at**? : *string*

*Defined in [packages/catalog/api.ts:443](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L443)*

**`memberof`** OrderItem
