[@redhat-cloud-services/approval-client](../README.md) > [RequestOut](../modules/requestout.md)

# Module: RequestOut

*__export__*: 

*__namespace__*: RequestOut

## Index

### Enumerations

* [DecisionEnum](../enums/requestout.decisionenum.md)
* [StateEnum](../enums/requestout.stateenum.md)

### Properties

* [activeStage](requestout.md#activestage)
* [content](requestout.md#content)
* [createdAt](requestout.md#createdat)
* [decision](requestout.md#decision)
* [description](requestout.md#description)
* [id](requestout.md#id)
* [name](requestout.md#name)
* [owner](requestout.md#owner)
* [reason](requestout.md#reason)
* [requesterName](requestout.md#requestername)
* [state](requestout.md#state)
* [totalStages](requestout.md#totalstages)
* [updatedAt](requestout.md#updatedat)
* [workflowId](requestout.md#workflowid)

---

## Properties

<a id="activestage"></a>

### `<Optional>` activeStage

**● activeStage**: *`number`*

*Defined in [api.ts:349](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L349)*

Current (or last) active stage. For regular approver this number is always 0

*__type__*: {number}

*__memberof__*: RequestOut

___
<a id="content"></a>

### `<Optional>` content

**● content**: *`any`*

*Defined in [api.ts:385](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L385)*

JSON object with request content

*__type__*: {any}

*__memberof__*: RequestOut

___
<a id="createdat"></a>

### `<Optional>` createdAt

**● createdAt**: *`Date`*

*Defined in [api.ts:337](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L337)*

Timestamp of creation

*__type__*: {Date}

*__memberof__*: RequestOut

___
<a id="decision"></a>

### `<Optional>` decision

**● decision**: *[DecisionEnum](../enums/requestout.decisionenum.md)*

*Defined in [api.ts:319](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L319)*

Final decision, may be one of the value (undecided, approved, canceled or denied)

*__type__*: {string}

*__memberof__*: RequestOut

___
<a id="description"></a>

### `<Optional>` description

**● description**: *`string`*

*Defined in [api.ts:379](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L379)*

Request description

*__type__*: {string}

*__memberof__*: RequestOut

___
<a id="id"></a>

### `<Optional>` id

**● id**: *`string`*

*Defined in [api.ts:307](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L307)*

*__type__*: {string}

*__memberof__*: RequestOut

___
<a id="name"></a>

### `<Optional>` name

**● name**: *`string`*

*Defined in [api.ts:373](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L373)*

Request name

*__type__*: {string}

*__memberof__*: RequestOut

___
<a id="owner"></a>

### `<Optional>` owner

**● owner**: *`string`*

*Defined in [api.ts:361](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L361)*

Owner id

*__type__*: {string}

*__memberof__*: RequestOut

___
<a id="reason"></a>

### `<Optional>` reason

**● reason**: *`string`*

*Defined in [api.ts:325](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L325)*

Comments for requests

*__type__*: {string}

*__memberof__*: RequestOut

___
<a id="requestername"></a>

### `<Optional>` requesterName

**● requesterName**: *`string`*

*Defined in [api.ts:367](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L367)*

Requester name

*__type__*: {string}

*__memberof__*: RequestOut

___
<a id="state"></a>

### `<Optional>` state

**● state**: *[StateEnum](../enums/requestout.stateenum.md)*

*Defined in [api.ts:313](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L313)*

The state of stage or request. It may be one of values (canceled, pending, skipped, notified or finished)

*__type__*: {string}

*__memberof__*: RequestOut

___
<a id="totalstages"></a>

### `<Optional>` totalStages

**● totalStages**: *`number`*

*Defined in [api.ts:355](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L355)*

Total number of stages. For regular approver this number is always 0.

*__type__*: {number}

*__memberof__*: RequestOut

___
<a id="updatedat"></a>

### `<Optional>` updatedAt

**● updatedAt**: *`Date`*

*Defined in [api.ts:343](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L343)*

Timestamp of last update

*__type__*: {Date}

*__memberof__*: RequestOut

___
<a id="workflowid"></a>

### `<Optional>` workflowId

**● workflowId**: *`string`*

*Defined in [api.ts:331](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L331)*

Associate workflow id

*__type__*: {string}

*__memberof__*: RequestOut

___

