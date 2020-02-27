[@redhat-cloud-services/approval-client](../README.md) > [Request](../modules/request.md)

# Module: Request

*__export__*: 

*__namespace__*: Request

## Index

### Enumerations

* [DecisionEnum](../enums/request.decisionenum.md)
* [StateEnum](../enums/request.stateenum.md)

### Properties

* [createdAt](request.md#createdat)
* [decision](request.md#decision)
* [description](request.md#description)
* [finishedAt](request.md#finishedat)
* [groupName](request.md#groupname)
* [id](request.md#id)
* [name](request.md#name)
* [notifiedAt](request.md#notifiedat)
* [numberOfChildren](request.md#numberofchildren)
* [numberOfFinishedChildren](request.md#numberoffinishedchildren)
* [owner](request.md#owner)
* [parentId](request.md#parentid)
* [reason](request.md#reason)
* [requesterName](request.md#requestername)
* [state](request.md#state)
* [workflowId](request.md#workflowid)

---

## Properties

<a id="createdat"></a>

### `<Optional>` createdAt

**● createdAt**: *`Date`*

*Defined in [api.ts:308](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L308)*

Timestamp of creation

*__type__*: {Date}

*__memberof__*: Request

___
<a id="decision"></a>

### `<Optional>` decision

**● decision**: *[DecisionEnum](../enums/request.decisionenum.md)*

*Defined in [api.ts:290](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L290)*

Approval decision. Possible value: undecided, approved, canceled, denied, or error

*__type__*: {string}

*__memberof__*: Request

___
<a id="description"></a>

### `<Optional>` description

**● description**: *`string`*

*Defined in [api.ts:356](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L356)*

Request description

*__type__*: {string}

*__memberof__*: Request

___
<a id="finishedat"></a>

### `<Optional>` finishedAt

**● finishedAt**: *`Date` \| `null`*

*Defined in [api.ts:320](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L320)*

Timestamp of finishing (skipped, canceled, or completed)

*__type__*: {Date}

*__memberof__*: Request

___
<a id="groupname"></a>

### `<Optional>` groupName

**● groupName**: *`string`*

*Defined in [api.ts:362](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L362)*

Name of approver group(s) assigned to approve this request

*__type__*: {string}

*__memberof__*: Request

___
<a id="id"></a>

### `<Optional>` id

**● id**: *`string`*

*Defined in [api.ts:278](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L278)*

*__type__*: {string}

*__memberof__*: Request

___
<a id="name"></a>

### `<Optional>` name

**● name**: *`string`*

*Defined in [api.ts:350](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L350)*

Request name

*__type__*: {string}

*__memberof__*: Request

___
<a id="notifiedat"></a>

### `<Optional>` notifiedAt

**● notifiedAt**: *`Date` \| `null`*

*Defined in [api.ts:314](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L314)*

Timestamp of notification sent to approvers

*__type__*: {Date}

*__memberof__*: Request

___
<a id="numberofchildren"></a>

### `<Optional>` numberOfChildren

**● numberOfChildren**: *`number`*

*Defined in [api.ts:326](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L326)*

Number of child requests

*__type__*: {number}

*__memberof__*: Request

___
<a id="numberoffinishedchildren"></a>

### `<Optional>` numberOfFinishedChildren

**● numberOfFinishedChildren**: *`number`*

*Defined in [api.ts:332](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L332)*

Number of finished child requests

*__type__*: {number}

*__memberof__*: Request

___
<a id="owner"></a>

### `<Optional>` owner

**● owner**: *`string`*

*Defined in [api.ts:338](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L338)*

Requester's id

*__type__*: {string}

*__memberof__*: Request

___
<a id="parentid"></a>

### `<Optional>` parentId

**● parentId**: *`string`*

*Defined in [api.ts:368](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L368)*

Parent request id

*__type__*: {string}

*__memberof__*: Request

___
<a id="reason"></a>

### `<Optional>` reason

**● reason**: *`string` \| `null`*

*Defined in [api.ts:296](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L296)*

Reason for the decision. Optional. Present normally when the decision is denied

*__type__*: {string}

*__memberof__*: Request

___
<a id="requestername"></a>

### `<Optional>` requesterName

**● requesterName**: *`string`*

*Defined in [api.ts:344](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L344)*

Requester's full name

*__type__*: {string}

*__memberof__*: Request

___
<a id="state"></a>

### `<Optional>` state

**● state**: *[StateEnum](../enums/request.stateenum.md)*

*Defined in [api.ts:284](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L284)*

The state of the request. Possible value: canceled, completed, failed, notified, skipped, or started

*__type__*: {string}

*__memberof__*: Request

___
<a id="workflowid"></a>

### `<Optional>` workflowId

**● workflowId**: *`string` \| `null`*

*Defined in [api.ts:302](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L302)*

Associate workflow id. Available only if the request is a leaf node

*__type__*: {string}

*__memberof__*: Request

___

