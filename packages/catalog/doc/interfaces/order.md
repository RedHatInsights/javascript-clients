[@redhat-cloud-services/catalog-client](../README.md) › [Globals](../globals.md) › [Order](order.md)

# Interface: Order

**`export`** 

**`interface`** Order

## Hierarchy

* **Order**

## Index

### Properties

* [completed_at](order.md#optional-completed_at)
* [created_at](order.md#optional-created_at)
* [id](order.md#optional-id)
* [order_request_sent_at](order.md#optional-order_request_sent_at)
* [owner](order.md#optional-owner)
* [state](order.md#optional-state)
* [user_id](order.md#optional-user_id)

## Properties

### `Optional` completed_at

• **completed_at**? : *string*

*Defined in [packages/catalog/api.ts:350](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L350)*

**`memberof`** Order

___

### `Optional` created_at

• **created_at**? : *string*

*Defined in [packages/catalog/api.ts:338](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L338)*

**`memberof`** Order

___

### `Optional` id

• **id**? : *string*

*Defined in [packages/catalog/api.ts:320](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L320)*

**`memberof`** Order

___

### `Optional` order_request_sent_at

• **order_request_sent_at**? : *string | null*

*Defined in [packages/catalog/api.ts:344](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L344)*

The time at which the order request was sent to the Topology Service

**`memberof`** Order

___

### `Optional` owner

• **owner**? : *string*

*Defined in [packages/catalog/api.ts:356](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L356)*

**`memberof`** Order

___

### `Optional` state

• **state**? : *[OrderStateEnum](../enums/orderstateenum.md)*

*Defined in [packages/catalog/api.ts:332](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L332)*

Current State of the order.

**`memberof`** Order

___

### `Optional` user_id

• **user_id**? : *string*

*Defined in [packages/catalog/api.ts:326](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L326)*

**`memberof`** Order
