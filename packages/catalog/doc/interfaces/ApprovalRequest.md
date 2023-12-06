[@redhat-cloud-services/catalog-client](../README.md) / [Exports](../modules.md) / ApprovalRequest

# Interface: ApprovalRequest

**`Export`**

**`Interface`**

ApprovalRequest

## Table of contents

### Properties

- [approval\_request\_ref](ApprovalRequest.md#approval_request_ref)
- [id](ApprovalRequest.md#id)
- [order\_item\_id](ApprovalRequest.md#order_item_id)
- [reason](ApprovalRequest.md#reason)
- [request\_completed\_at](ApprovalRequest.md#request_completed_at)
- [state](ApprovalRequest.md#state)

## Properties

### approval\_request\_ref

• `Optional` **approval\_request\_ref**: `string`

The id of the approval submitted to approval-api

**`Memberof`**

ApprovalRequest

#### Defined in

[api.ts:71](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/catalog/api.ts#L71)

___

### id

• `Optional` **id**: `string`

The unique identifier for this approval request.

**`Memberof`**

ApprovalRequest

#### Defined in

[api.ts:65](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/catalog/api.ts#L65)

___

### order\_item\_id

• `Optional` **order\_item\_id**: `string`

The Order Item which the approval request belongs to

**`Memberof`**

ApprovalRequest

#### Defined in

[api.ts:77](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/catalog/api.ts#L77)

___

### reason

• `Optional` **reason**: `string`

The reason for the current state.

**`Memberof`**

ApprovalRequest

#### Defined in

[api.ts:83](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/catalog/api.ts#L83)

___

### request\_completed\_at

• `Optional` **request\_completed\_at**: `string`

**`Memberof`**

ApprovalRequest

#### Defined in

[api.ts:89](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/catalog/api.ts#L89)

___

### state

• `Optional` **state**: [`ApprovalRequestStateEnum`](../enums/ApprovalRequestStateEnum.md)

The state of the approval request (approved, denied, undecided, canceled, error)

**`Memberof`**

ApprovalRequest

#### Defined in

[api.ts:95](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/catalog/api.ts#L95)
