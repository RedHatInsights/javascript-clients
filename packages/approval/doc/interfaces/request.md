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
* [metadata](request.md#optional-metadata)
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

*Defined in [packages/approval/api.ts:327](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L327)*

Time when the request was created

**`memberof`** Request

___

### `Optional` decision

• **decision**? : *[RequestDecisionEnum](../enums/requestdecisionenum.md)*

*Defined in [packages/approval/api.ts:309](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L309)*

Approval decision, must be one of the predefined values

**`memberof`** Request

___

### `Optional` description

• **description**? : *string*

*Defined in [packages/approval/api.ts:375](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L375)*

Describe the request in more details

**`memberof`** Request

___

### `Optional` finished_at

• **finished_at**? : *string | null*

*Defined in [packages/approval/api.ts:339](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L339)*

Time when the request was finished (skipped, canceled, or completed)

**`memberof`** Request

___

### `Optional` group_name

• **group_name**? : *string*

*Defined in [packages/approval/api.ts:381](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L381)*

Name of approver group(s) assigned to approve this request

**`memberof`** Request

___

### `Optional` id

• **id**? : *string*

*Defined in [packages/approval/api.ts:297](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L297)*

ID of the request

**`memberof`** Request

___

### `Optional` metadata

• **metadata**? : *object*

*Defined in [packages/approval/api.ts:393](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L393)*

JSON metadata about the request

**`memberof`** Request

___

### `Optional` name

• **name**? : *string*

*Defined in [packages/approval/api.ts:369](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L369)*

Name of the request to be created

**`memberof`** Request

___

### `Optional` notified_at

• **notified_at**? : *string | null*

*Defined in [packages/approval/api.ts:333](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L333)*

Time when a notification was sent to approvers

**`memberof`** Request

___

### `Optional` number_of_children

• **number_of_children**? : *number*

*Defined in [packages/approval/api.ts:345](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L345)*

Number of child requests

**`memberof`** Request

___

### `Optional` number_of_finished_children

• **number_of_finished_children**? : *number*

*Defined in [packages/approval/api.ts:351](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L351)*

Number of finished child requests

**`memberof`** Request

___

### `Optional` owner

• **owner**? : *string*

*Defined in [packages/approval/api.ts:357](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L357)*

Identification of whom made the request

**`memberof`** Request

___

### `Optional` parent_id

• **parent_id**? : *string*

*Defined in [packages/approval/api.ts:387](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L387)*

ID of the parent group if present

**`memberof`** Request

___

### `Optional` reason

• **reason**? : *string | null*

*Defined in [packages/approval/api.ts:315](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L315)*

Optional reason for the decision, present normally when the decision is denied

**`memberof`** Request

___

### `Optional` requester_name

• **requester_name**? : *string*

*Defined in [packages/approval/api.ts:363](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L363)*

Full name of the requester

**`memberof`** Request

___

### `Optional` state

• **state**? : *[RequestStateEnum](../enums/requeststateenum.md)*

*Defined in [packages/approval/api.ts:303](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L303)*

The state of the request, must be one of the predefined values

**`memberof`** Request

___

### `Optional` workflow_id

• **workflow_id**? : *string | null*

*Defined in [packages/approval/api.ts:321](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L321)*

ID of the workflow that the request belongs to. Present only if the request is a leaf node

**`memberof`** Request
