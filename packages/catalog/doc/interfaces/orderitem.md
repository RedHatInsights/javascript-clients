[@redhat-cloud-services/catalog-client](../README.md) › [Globals](../globals.md) › [OrderItem](orderitem.md)

# Interface: OrderItem

**`export`** 

**`interface`** OrderItem

## Hierarchy

* **OrderItem**

## Index

### Properties

* [artifacts](orderitem.md#optional-artifacts)
* [completed_at](orderitem.md#optional-completed_at)
* [count](orderitem.md#count)
* [created_at](orderitem.md#optional-created_at)
* [external_url](orderitem.md#optional-external_url)
* [id](orderitem.md#optional-id)
* [insights_request_id](orderitem.md#optional-insights_request_id)
* [name](orderitem.md#optional-name)
* [order_id](orderitem.md#optional-order_id)
* [order_request_sent_at](orderitem.md#optional-order_request_sent_at)
* [owner](orderitem.md#optional-owner)
* [portfolio_item_id](orderitem.md#portfolio_item_id)
* [process_scope](orderitem.md#optional-process_scope)
* [process_sequence](orderitem.md#optional-process_sequence)
* [provider_control_parameters](orderitem.md#optional-provider_control_parameters)
* [service_parameters](orderitem.md#optional-service_parameters)
* [state](orderitem.md#optional-state)
* [updated_at](orderitem.md#optional-updated_at)

## Properties

### `Optional` artifacts

• **artifacts**? : *object*

*Defined in [packages/catalog/api.ts:518](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L518)*

Contains a prefix-stripped key/value object that contains all of the information exposed from product provisioning. Must be exposed from Tower with prefix \'expose_to_cloud_redhat_com_\'

**`memberof`** OrderItem

___

### `Optional` completed_at

• **completed_at**? : *string*

*Defined in [packages/catalog/api.ts:476](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L476)*

**`memberof`** OrderItem

___

###  count

• **count**: *number*

*Defined in [packages/catalog/api.ts:428](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L428)*

**`memberof`** OrderItem

___

### `Optional` created_at

• **created_at**? : *string*

*Defined in [packages/catalog/api.ts:464](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L464)*

**`memberof`** OrderItem

___

### `Optional` external_url

• **external_url**? : *string*

*Defined in [packages/catalog/api.ts:494](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L494)*

The external url of the service instance used with relation to this order item

**`memberof`** OrderItem

___

### `Optional` id

• **id**? : *string*

*Defined in [packages/catalog/api.ts:416](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L416)*

**`memberof`** OrderItem

___

### `Optional` insights_request_id

• **insights_request_id**? : *string*

*Defined in [packages/catalog/api.ts:500](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L500)*

The insights request id can be used to collect log data for this order item as its processed by the system

**`memberof`** OrderItem

___

### `Optional` name

• **name**? : *string*

*Defined in [packages/catalog/api.ts:422](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L422)*

Name of the Portfolio Item or Order Process

**`memberof`** OrderItem

___

### `Optional` order_id

• **order_id**? : *string*

*Defined in [packages/catalog/api.ts:458](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L458)*

The Order that the OrderItem belongs to.

**`memberof`** OrderItem

___

### `Optional` order_request_sent_at

• **order_request_sent_at**? : *string*

*Defined in [packages/catalog/api.ts:470](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L470)*

The time at which the order request was sent to the Topology Service

**`memberof`** OrderItem

___

### `Optional` owner

• **owner**? : *string*

*Defined in [packages/catalog/api.ts:488](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L488)*

**`memberof`** OrderItem

___

###  portfolio_item_id

• **portfolio_item_id**: *string*

*Defined in [packages/catalog/api.ts:446](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L446)*

Stores the Portfolio Item ID.

**`memberof`** OrderItem

___

### `Optional` process_scope

• **process_scope**? : *string*

*Defined in [packages/catalog/api.ts:512](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L512)*

Denotes the scope in which the order item will run for the order it belongs to. It can be \'before\', \'after\', or \'applicable\'

**`memberof`** OrderItem

___

### `Optional` process_sequence

• **process_sequence**? : *number*

*Defined in [packages/catalog/api.ts:506](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L506)*

The sequence that this order item is ran relative to the other order items within the order.

**`memberof`** OrderItem

___

### `Optional` provider_control_parameters

• **provider_control_parameters**? : *object | null*

*Defined in [packages/catalog/api.ts:440](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L440)*

The provider specific parameters needed to provision this service. This might include namespaces, special keys.

**`memberof`** OrderItem

___

### `Optional` service_parameters

• **service_parameters**? : *object | null*

*Defined in [packages/catalog/api.ts:434](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L434)*

**`memberof`** OrderItem

___

### `Optional` state

• **state**? : *[OrderItemStateEnum](../enums/orderitemstateenum.md)*

*Defined in [packages/catalog/api.ts:452](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L452)*

Current state of this order item.

**`memberof`** OrderItem

___

### `Optional` updated_at

• **updated_at**? : *string*

*Defined in [packages/catalog/api.ts:482](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L482)*

**`memberof`** OrderItem
