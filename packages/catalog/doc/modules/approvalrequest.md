[@redhat-cloud-services/catalog-client](../README.md) > [ApprovalRequest](../modules/approvalrequest.md)

# Module: ApprovalRequest

*__export__*: 

*__namespace__*: ApprovalRequest

## Index

### Enumerations

* [StateEnum](../enums/approvalrequest.stateenum.md)

### Properties

* [approvalRequestRef](approvalrequest.md#approvalrequestref)
* [id](approvalrequest.md#id)
* [orderItemId](approvalrequest.md#orderitemid)
* [reason](approvalrequest.md#reason)
* [requestCompletedAt](approvalrequest.md#requestcompletedat)
* [state](approvalrequest.md#state)

---

## Properties

<a id="approvalrequestref"></a>

### `<Optional>` approvalRequestRef

**● approvalRequestRef**: *`string`*

*Defined in [api.ts:103](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L103)*

The id of the approval submitted to approval-api

*__type__*: {string}

*__memberof__*: ApprovalRequest

___
<a id="id"></a>

### `<Optional>` id

**● id**: *`string`*

*Defined in [api.ts:97](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L97)*

The unique identifier for this approval request.

*__type__*: {string}

*__memberof__*: ApprovalRequest

___
<a id="orderitemid"></a>

### `<Optional>` orderItemId

**● orderItemId**: *`string`*

*Defined in [api.ts:109](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L109)*

The Order Item which the approval request belongs to

*__type__*: {string}

*__memberof__*: ApprovalRequest

___
<a id="reason"></a>

### `<Optional>` reason

**● reason**: *`string`*

*Defined in [api.ts:115](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L115)*

The reason for the current state.

*__type__*: {string}

*__memberof__*: ApprovalRequest

___
<a id="requestcompletedat"></a>

### `<Optional>` requestCompletedAt

**● requestCompletedAt**: *`Date`*

*Defined in [api.ts:121](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L121)*

*__type__*: {Date}

*__memberof__*: ApprovalRequest

___
<a id="state"></a>

### `<Optional>` state

**● state**: *[StateEnum](../enums/approvalrequest.stateenum.md)*

*Defined in [api.ts:127](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L127)*

The state of the approval request (approved, denied, undecided, canceled)

*__type__*: {string}

*__memberof__*: ApprovalRequest

___

