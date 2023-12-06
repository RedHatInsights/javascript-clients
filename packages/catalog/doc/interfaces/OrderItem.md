[@redhat-cloud-services/catalog-client](../README.md) / [Exports](../modules.md) / OrderItem

# Interface: OrderItem

**`Export`**

**`Interface`**

OrderItem

## Table of contents

### Properties

- [artifacts](OrderItem.md#artifacts)
- [completed\_at](OrderItem.md#completed_at)
- [count](OrderItem.md#count)
- [created\_at](OrderItem.md#created_at)
- [external\_url](OrderItem.md#external_url)
- [id](OrderItem.md#id)
- [insights\_request\_id](OrderItem.md#insights_request_id)
- [name](OrderItem.md#name)
- [order\_id](OrderItem.md#order_id)
- [order\_request\_sent\_at](OrderItem.md#order_request_sent_at)
- [owner](OrderItem.md#owner)
- [portfolio\_item\_id](OrderItem.md#portfolio_item_id)
- [process\_scope](OrderItem.md#process_scope)
- [process\_sequence](OrderItem.md#process_sequence)
- [provider\_control\_parameters](OrderItem.md#provider_control_parameters)
- [service\_parameters](OrderItem.md#service_parameters)
- [state](OrderItem.md#state)
- [updated\_at](OrderItem.md#updated_at)

## Properties

### artifacts

• `Optional` **artifacts**: `object`

Contains a prefix-stripped key/value object that contains all of the information exposed from product provisioning. Must be exposed from Tower with prefix \'expose_to_cloud_redhat_com_\'

**`Memberof`**

OrderItem

#### Defined in

[api.ts:518](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/catalog/api.ts#L518)

___

### completed\_at

• `Optional` **completed\_at**: `string`

**`Memberof`**

OrderItem

#### Defined in

[api.ts:476](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/catalog/api.ts#L476)

___

### count

• **count**: `number`

**`Memberof`**

OrderItem

#### Defined in

[api.ts:428](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/catalog/api.ts#L428)

___

### created\_at

• `Optional` **created\_at**: `string`

**`Memberof`**

OrderItem

#### Defined in

[api.ts:464](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/catalog/api.ts#L464)

___

### external\_url

• `Optional` **external\_url**: `string`

The external url of the service instance used with relation to this order item

**`Memberof`**

OrderItem

#### Defined in

[api.ts:494](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/catalog/api.ts#L494)

___

### id

• `Optional` **id**: `string`

**`Memberof`**

OrderItem

#### Defined in

[api.ts:416](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/catalog/api.ts#L416)

___

### insights\_request\_id

• `Optional` **insights\_request\_id**: `string`

The insights request id can be used to collect log data for this order item as its processed by the system

**`Memberof`**

OrderItem

#### Defined in

[api.ts:500](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/catalog/api.ts#L500)

___

### name

• `Optional` **name**: `string`

Name of the Portfolio Item or Order Process

**`Memberof`**

OrderItem

#### Defined in

[api.ts:422](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/catalog/api.ts#L422)

___

### order\_id

• `Optional` **order\_id**: `string`

The Order that the OrderItem belongs to.

**`Memberof`**

OrderItem

#### Defined in

[api.ts:458](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/catalog/api.ts#L458)

___

### order\_request\_sent\_at

• `Optional` **order\_request\_sent\_at**: `string`

The time at which the order request was sent to the catalog inventory Service

**`Memberof`**

OrderItem

#### Defined in

[api.ts:470](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/catalog/api.ts#L470)

___

### owner

• `Optional` **owner**: `string`

**`Memberof`**

OrderItem

#### Defined in

[api.ts:488](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/catalog/api.ts#L488)

___

### portfolio\_item\_id

• **portfolio\_item\_id**: `string`

Stores the Portfolio Item ID.

**`Memberof`**

OrderItem

#### Defined in

[api.ts:446](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/catalog/api.ts#L446)

___

### process\_scope

• `Optional` **process\_scope**: `string`

Denotes the scope in which the order item will run for the order it belongs to. It can be \'before\', \'after\', or \'product\'

**`Memberof`**

OrderItem

#### Defined in

[api.ts:512](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/catalog/api.ts#L512)

___

### process\_sequence

• `Optional` **process\_sequence**: `number`

The sequence that this order item is ran relative to the other order items within the order.

**`Memberof`**

OrderItem

#### Defined in

[api.ts:506](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/catalog/api.ts#L506)

___

### provider\_control\_parameters

• `Optional` **provider\_control\_parameters**: `object`

The provider specific parameters needed to provision this service. This might include namespaces, special keys.

**`Memberof`**

OrderItem

#### Defined in

[api.ts:440](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/catalog/api.ts#L440)

___

### service\_parameters

• `Optional` **service\_parameters**: `object`

**`Memberof`**

OrderItem

#### Defined in

[api.ts:434](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/catalog/api.ts#L434)

___

### state

• `Optional` **state**: [`OrderItemStateEnum`](../enums/OrderItemStateEnum.md)

Current state of this order item.

**`Memberof`**

OrderItem

#### Defined in

[api.ts:452](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/catalog/api.ts#L452)

___

### updated\_at

• `Optional` **updated\_at**: `string`

**`Memberof`**

OrderItem

#### Defined in

[api.ts:482](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/catalog/api.ts#L482)
