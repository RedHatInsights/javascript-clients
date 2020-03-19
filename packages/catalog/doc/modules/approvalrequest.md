[@redhat-cloud-services/catalog-client](../README.md) › [Globals](../globals.md) › [ApprovalRequest](approvalrequest.md)

# Module: ApprovalRequest

**`export`** 

**`namespace`** ApprovalRequest

## Index

### Enumerations

* [StateEnum](../enums/approvalrequest.stateenum.md)

### Properties

* [approvalRequestRef](approvalrequest.md#optional-approvalrequestref)
* [id](approvalrequest.md#optional-id)
* [orderItemId](approvalrequest.md#optional-orderitemid)
* [reason](approvalrequest.md#optional-reason)
* [requestCompletedAt](approvalrequest.md#optional-requestcompletedat)
* [state](approvalrequest.md#optional-state)

## Properties

### `Optional` approvalRequestRef

• **approvalRequestRef**? : *string*

*Defined in [api.ts:89](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L89)*

The id of the approval submitted to approval-api

**`type`** {string}

**`memberof`** ApprovalRequest

___

### `Optional` id

• **id**? : *string*

*Defined in [api.ts:83](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L83)*

The unique identifier for this approval request.

**`type`** {string}

**`memberof`** ApprovalRequest

___

### `Optional` orderItemId

• **orderItemId**? : *string*

*Defined in [api.ts:95](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L95)*

The Order Item which the approval request belongs to

**`type`** {string}

**`memberof`** ApprovalRequest

___

### `Optional` reason

• **reason**? : *string*

*Defined in [api.ts:101](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L101)*

The reason for the current state.

**`type`** {string}

**`memberof`** ApprovalRequest

___

### `Optional` requestCompletedAt

• **requestCompletedAt**? : *Date*

*Defined in [api.ts:107](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L107)*

**`type`** {Date}

**`memberof`** ApprovalRequest

___

### `Optional` state

• **state**? : *[StateEnum](../enums/approvalrequest.stateenum.md)*

*Defined in [api.ts:113](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L113)*

The state of the approval request (approved, denied, undecided, canceled)

**`type`** {string}

**`memberof`** ApprovalRequest
