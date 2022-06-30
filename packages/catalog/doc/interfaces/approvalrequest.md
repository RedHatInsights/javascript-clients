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

*Defined in [api.ts:71](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/catalog/api.ts#L71)*

The id of the approval submitted to approval-api

**`memberof`** ApprovalRequest

___

### `Optional` id

• **id**? : *string*

*Defined in [api.ts:65](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/catalog/api.ts#L65)*

The unique identifier for this approval request.

**`memberof`** ApprovalRequest

___

### `Optional` order_item_id

• **order_item_id**? : *string*

*Defined in [api.ts:77](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/catalog/api.ts#L77)*

The Order Item which the approval request belongs to

**`memberof`** ApprovalRequest

___

### `Optional` reason

• **reason**? : *string*

*Defined in [api.ts:83](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/catalog/api.ts#L83)*

The reason for the current state.

**`memberof`** ApprovalRequest

___

### `Optional` request_completed_at

• **request_completed_at**? : *string*

*Defined in [api.ts:89](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/catalog/api.ts#L89)*

**`memberof`** ApprovalRequest

___

### `Optional` state

• **state**? : *[ApprovalRequestStateEnum](../enums/approvalrequeststateenum.md)*

*Defined in [api.ts:95](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/catalog/api.ts#L95)*

The state of the approval request (approved, denied, undecided, canceled, error)

**`memberof`** ApprovalRequest
