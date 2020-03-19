[@redhat-cloud-services/catalog-client](../README.md) › [Globals](../globals.md) › [Order](order.md)

# Module: Order

**`export`** 

**`namespace`** Order

## Index

### Enumerations

* [StateEnum](../enums/order.stateenum.md)

### Properties

* [completedAt](order.md#optional-completedat)
* [createdAt](order.md#optional-createdat)
* [id](order.md#optional-id)
* [orderRequestSentAt](order.md#optional-orderrequestsentat)
* [owner](order.md#optional-owner)
* [state](order.md#optional-state)
* [userId](order.md#optional-userid)

## Properties

### `Optional` completedAt

• **completedAt**? : *Date*

*Defined in [api.ts:416](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L416)*

**`type`** {Date}

**`memberof`** Order

___

### `Optional` createdAt

• **createdAt**? : *Date*

*Defined in [api.ts:404](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L404)*

**`type`** {Date}

**`memberof`** Order

___

### `Optional` id

• **id**? : *string*

*Defined in [api.ts:386](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L386)*

**`type`** {string}

**`memberof`** Order

___

### `Optional` orderRequestSentAt

• **orderRequestSentAt**? : *Date | null*

*Defined in [api.ts:410](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L410)*

The time at which the order request was sent to the Topology Service

**`type`** {Date}

**`memberof`** Order

___

### `Optional` owner

• **owner**? : *string*

*Defined in [api.ts:422](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L422)*

**`type`** {string}

**`memberof`** Order

___

### `Optional` state

• **state**? : *[StateEnum](../enums/order.stateenum.md)*

*Defined in [api.ts:398](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L398)*

Current State of the order.

**`type`** {string}

**`memberof`** Order

___

### `Optional` userId

• **userId**? : *string*

*Defined in [api.ts:392](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L392)*

**`type`** {string}

**`memberof`** Order
