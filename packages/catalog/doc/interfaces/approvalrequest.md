[@redhat-cloud-services/catalog-client](../README.md) › [Globals](../globals.md) › [ApprovalRequest](approvalrequest.md)

# Interface: ApprovalRequest

**`export`** 

**`interface`** ApprovalRequest

## Hierarchy

* **ApprovalRequest**

## Index

### Properties

* [approval_request_ref](approvalrequest.md#optional-approval_request_ref)
* [id](approvalrequest.md#optional-id)
* [order_item_id](approvalrequest.md#optional-order_item_id)
* [reason](approvalrequest.md#optional-reason)
* [request_completed_at](approvalrequest.md#optional-request_completed_at)
* [state](approvalrequest.md#optional-state)

## Properties

### `Optional` approval_request_ref

• **approval_request_ref**? : *string*

*Defined in [packages/catalog/api.ts:39](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L39)*

The id of the approval submitted to approval-api

**`memberof`** ApprovalRequest

___

### `Optional` id

• **id**? : *string*

*Defined in [packages/catalog/api.ts:33](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L33)*

The unique identifier for this approval request.

**`memberof`** ApprovalRequest

___

### `Optional` order_item_id

• **order_item_id**? : *string*

*Defined in [packages/catalog/api.ts:45](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L45)*

The Order Item which the approval request belongs to

**`memberof`** ApprovalRequest

___

### `Optional` reason

• **reason**? : *string*

*Defined in [packages/catalog/api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L51)*

The reason for the current state.

**`memberof`** ApprovalRequest

___

### `Optional` request_completed_at

• **request_completed_at**? : *string*

*Defined in [packages/catalog/api.ts:57](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L57)*

**`memberof`** ApprovalRequest

___

### `Optional` state

• **state**? : *[ApprovalRequestStateEnum](../enums/approvalrequeststateenum.md)*

*Defined in [packages/catalog/api.ts:63](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L63)*

The state of the approval request (approved, denied, undecided, canceled)

**`memberof`** ApprovalRequest
