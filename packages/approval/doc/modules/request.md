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
* [id](request.md#id)
* [name](request.md#name)
* [numberOfChildren](request.md#numberofchildren)
* [numberOfFinishedChildren](request.md#numberoffinishedchildren)
* [owner](request.md#owner)
* [reason](request.md#reason)
* [requesterName](request.md#requestername)
* [state](request.md#state)
* [updatedAt](request.md#updatedat)
* [workflowId](request.md#workflowid)

---

## Properties

<a id="createdat"></a>

### `<Optional>` createdAt

**● createdAt**: *`Date`*

*Defined in [api.ts:351](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L351)*

Timestamp of creation

*__type__*: {Date}

*__memberof__*: Request

___
<a id="decision"></a>

### `<Optional>` decision

**● decision**: *[DecisionEnum](../enums/request.decisionenum.md)*

*Defined in [api.ts:333](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L333)*

Approval decision. Possible value: undecided, approved, canceled, or denied

*__type__*: {string}

*__memberof__*: Request

___
<a id="description"></a>

### `<Optional>` description

**● description**: *`string`*

*Defined in [api.ts:393](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L393)*

Request description

*__type__*: {string}

*__memberof__*: Request

___
<a id="id"></a>

### `<Optional>` id

**● id**: *`string`*

*Defined in [api.ts:321](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L321)*

*__type__*: {string}

*__memberof__*: Request

___
<a id="name"></a>

### `<Optional>` name

**● name**: *`string`*

*Defined in [api.ts:387](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L387)*

Request name

*__type__*: {string}

*__memberof__*: Request

___
<a id="numberofchildren"></a>

### `<Optional>` numberOfChildren

**● numberOfChildren**: *`number`*

*Defined in [api.ts:363](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L363)*

Number of child requests

*__type__*: {number}

*__memberof__*: Request

___
<a id="numberoffinishedchildren"></a>

### `<Optional>` numberOfFinishedChildren

**● numberOfFinishedChildren**: *`number`*

*Defined in [api.ts:369](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L369)*

Number of finished child requests

*__type__*: {number}

*__memberof__*: Request

___
<a id="owner"></a>

### `<Optional>` owner

**● owner**: *`string`*

*Defined in [api.ts:375](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L375)*

Requester's id

*__type__*: {string}

*__memberof__*: Request

___
<a id="reason"></a>

### `<Optional>` reason

**● reason**: *`string`*

*Defined in [api.ts:339](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L339)*

Reason for the decision. Optional. Present normally when the decision is denied

*__type__*: {string}

*__memberof__*: Request

___
<a id="requestername"></a>

### `<Optional>` requesterName

**● requesterName**: *`string`*

*Defined in [api.ts:381](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L381)*

Requester's full name

*__type__*: {string}

*__memberof__*: Request

___
<a id="state"></a>

### `<Optional>` state

**● state**: *[StateEnum](../enums/request.stateenum.md)*

*Defined in [api.ts:327](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L327)*

The state of the request. Possible value: canceled, pending, skipped, notified, or finished

*__type__*: {string}

*__memberof__*: Request

___
<a id="updatedat"></a>

### `<Optional>` updatedAt

**● updatedAt**: *`Date`*

*Defined in [api.ts:357](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L357)*

Timestamp of last update

*__type__*: {Date}

*__memberof__*: Request

___
<a id="workflowid"></a>

### `<Optional>` workflowId

**● workflowId**: *`string`*

*Defined in [api.ts:345](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L345)*

Associate workflow id. Available only if the request is a leaf node

*__type__*: {string}

*__memberof__*: Request

___

