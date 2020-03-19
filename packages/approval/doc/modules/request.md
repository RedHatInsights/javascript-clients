[@redhat-cloud-services/approval-client](../README.md) › [Globals](../globals.md) › [Request](request.md)

# Module: Request

**`export`** 

**`namespace`** Request

## Index

### Enumerations

* [DecisionEnum](../enums/request.decisionenum.md)
* [StateEnum](../enums/request.stateenum.md)

### Properties

* [createdAt](request.md#optional-createdat)
* [decision](request.md#optional-decision)
* [description](request.md#optional-description)
* [finishedAt](request.md#optional-finishedat)
* [groupName](request.md#optional-groupname)
* [id](request.md#optional-id)
* [name](request.md#optional-name)
* [notifiedAt](request.md#optional-notifiedat)
* [numberOfChildren](request.md#optional-numberofchildren)
* [numberOfFinishedChildren](request.md#optional-numberoffinishedchildren)
* [owner](request.md#optional-owner)
* [parentId](request.md#optional-parentid)
* [reason](request.md#optional-reason)
* [requesterName](request.md#optional-requestername)
* [state](request.md#optional-state)
* [workflowId](request.md#optional-workflowid)

## Properties

### `Optional` createdAt

• **createdAt**? : *Date*

*Defined in [api.ts:307](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L307)*

Timestamp of creation

**`type`** {Date}

**`memberof`** Request

___

### `Optional` decision

• **decision**? : *[DecisionEnum](../enums/request.decisionenum.md)*

*Defined in [api.ts:289](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L289)*

Approval decision. Possible value: undecided, approved, canceled, or denied

**`type`** {string}

**`memberof`** Request

___

### `Optional` description

• **description**? : *string*

*Defined in [api.ts:355](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L355)*

Request description

**`type`** {string}

**`memberof`** Request

___

### `Optional` finishedAt

• **finishedAt**? : *Date | null*

*Defined in [api.ts:319](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L319)*

Timestamp of finishing (skipped, canceled, or completed)

**`type`** {Date}

**`memberof`** Request

___

### `Optional` groupName

• **groupName**? : *string*

*Defined in [api.ts:361](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L361)*

Name of approver group(s) assigned to approve this request

**`type`** {string}

**`memberof`** Request

___

### `Optional` id

• **id**? : *string*

*Defined in [api.ts:277](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L277)*

**`type`** {string}

**`memberof`** Request

___

### `Optional` name

• **name**? : *string*

*Defined in [api.ts:349](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L349)*

Request name

**`type`** {string}

**`memberof`** Request

___

### `Optional` notifiedAt

• **notifiedAt**? : *Date | null*

*Defined in [api.ts:313](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L313)*

Timestamp of notification sent to approvers

**`type`** {Date}

**`memberof`** Request

___

### `Optional` numberOfChildren

• **numberOfChildren**? : *number*

*Defined in [api.ts:325](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L325)*

Number of child requests

**`type`** {number}

**`memberof`** Request

___

### `Optional` numberOfFinishedChildren

• **numberOfFinishedChildren**? : *number*

*Defined in [api.ts:331](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L331)*

Number of finished child requests

**`type`** {number}

**`memberof`** Request

___

### `Optional` owner

• **owner**? : *string*

*Defined in [api.ts:337](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L337)*

Requester's id

**`type`** {string}

**`memberof`** Request

___

### `Optional` parentId

• **parentId**? : *string*

*Defined in [api.ts:367](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L367)*

Parent request id

**`type`** {string}

**`memberof`** Request

___

### `Optional` reason

• **reason**? : *string | null*

*Defined in [api.ts:295](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L295)*

Reason for the decision. Optional. Present normally when the decision is denied

**`type`** {string}

**`memberof`** Request

___

### `Optional` requesterName

• **requesterName**? : *string*

*Defined in [api.ts:343](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L343)*

Requester's full name

**`type`** {string}

**`memberof`** Request

___

### `Optional` state

• **state**? : *[StateEnum](../enums/request.stateenum.md)*

*Defined in [api.ts:283](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L283)*

The state of the request. Possible value: canceled, completed, notified, skipped, or started

**`type`** {string}

**`memberof`** Request

___

### `Optional` workflowId

• **workflowId**? : *string | null*

*Defined in [api.ts:301](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L301)*

Associate workflow id. Available only if the request is a leaf node

**`type`** {string}

**`memberof`** Request
