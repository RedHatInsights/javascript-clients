[@redhat-cloud-services/approval-client](../README.md) › [Globals](../globals.md) › [Request](request.md)

# Interface: Request

Approval request. It may have child requests. Only a leaf node request can have workflow_id

**`export`** 

**`interface`** Request

## Hierarchy

* **Request**

## Index

### Properties

* [created_at](request.md#optional-created_at)
* [decision](request.md#optional-decision)
* [description](request.md#optional-description)
* [finished_at](request.md#optional-finished_at)
* [group_name](request.md#optional-group_name)
* [id](request.md#optional-id)
* [name](request.md#optional-name)
* [notified_at](request.md#optional-notified_at)
* [number_of_children](request.md#optional-number_of_children)
* [number_of_finished_children](request.md#optional-number_of_finished_children)
* [owner](request.md#optional-owner)
* [parent_id](request.md#optional-parent_id)
* [reason](request.md#optional-reason)
* [requester_name](request.md#optional-requester_name)
* [state](request.md#optional-state)
* [workflow_id](request.md#optional-workflow_id)

## Properties

### `Optional` created_at

• **created_at**? : *string*

*Defined in [packages/approval/api.ts:246](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L246)*

Timestamp of creation

**`memberof`** Request

___

### `Optional` decision

• **decision**? : *[RequestDecisionEnum](../enums/requestdecisionenum.md)*

*Defined in [packages/approval/api.ts:228](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L228)*

Approval decision. Possible value: undecided, approved, canceled, or denied

**`memberof`** Request

___

### `Optional` description

• **description**? : *string*

*Defined in [packages/approval/api.ts:294](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L294)*

Request description

**`memberof`** Request

___

### `Optional` finished_at

• **finished_at**? : *string | null*

*Defined in [packages/approval/api.ts:258](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L258)*

Timestamp of finishing (skipped, canceled, or completed)

**`memberof`** Request

___

### `Optional` group_name

• **group_name**? : *string*

*Defined in [packages/approval/api.ts:300](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L300)*

Name of approver group(s) assigned to approve this request

**`memberof`** Request

___

### `Optional` id

• **id**? : *string*

*Defined in [packages/approval/api.ts:216](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L216)*

**`memberof`** Request

___

### `Optional` name

• **name**? : *string*

*Defined in [packages/approval/api.ts:288](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L288)*

Request name

**`memberof`** Request

___

### `Optional` notified_at

• **notified_at**? : *string | null*

*Defined in [packages/approval/api.ts:252](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L252)*

Timestamp of notification sent to approvers

**`memberof`** Request

___

### `Optional` number_of_children

• **number_of_children**? : *number*

*Defined in [packages/approval/api.ts:264](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L264)*

Number of child requests

**`memberof`** Request

___

### `Optional` number_of_finished_children

• **number_of_finished_children**? : *number*

*Defined in [packages/approval/api.ts:270](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L270)*

Number of finished child requests

**`memberof`** Request

___

### `Optional` owner

• **owner**? : *string*

*Defined in [packages/approval/api.ts:276](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L276)*

Requester\'s id

**`memberof`** Request

___

### `Optional` parent_id

• **parent_id**? : *string*

*Defined in [packages/approval/api.ts:306](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L306)*

Parent request id

**`memberof`** Request

___

### `Optional` reason

• **reason**? : *string | null*

*Defined in [packages/approval/api.ts:234](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L234)*

Reason for the decision. Optional. Present normally when the decision is denied

**`memberof`** Request

___

### `Optional` requester_name

• **requester_name**? : *string*

*Defined in [packages/approval/api.ts:282](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L282)*

Requester\'s full name

**`memberof`** Request

___

### `Optional` state

• **state**? : *[RequestStateEnum](../enums/requeststateenum.md)*

*Defined in [packages/approval/api.ts:222](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L222)*

The state of the request. Possible value: canceled, completed, notified, skipped, or started

**`memberof`** Request

___

### `Optional` workflow_id

• **workflow_id**? : *string | null*

*Defined in [packages/approval/api.ts:240](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L240)*

Associate workflow id. Available only if the request is a leaf node

**`memberof`** Request
