[@redhat-cloud-services/approval-client](../README.md) > [RequestOut](../modules/requestout.md)

# Module: RequestOut

*__export__*: 

*__namespace__*: RequestOut

## Index

### Enumerations

* [DecisionEnum](../enums/requestout.decisionenum.md)
* [StateEnum](../enums/requestout.stateenum.md)

### Properties

* [content](requestout.md#content)
* [decision](requestout.md#decision)
* [description](requestout.md#description)
* [id](requestout.md#id)
* [name](requestout.md#name)
* [reason](requestout.md#reason)
* [requester](requestout.md#requester)
* [state](requestout.md#state)
* [workflowId](requestout.md#workflowid)

---

## Properties

<a id="content"></a>

###  content

**● content**: *`any`*

*Defined in [api.ts:311](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L311)*

JSON object with request content

*__type__*: {any}

*__memberof__*: RequestOut

___
<a id="decision"></a>

### `<Optional>` decision

**● decision**: *[DecisionEnum](../enums/requestout.decisionenum.md)*

*Defined in [api.ts:329](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L329)*

Final decision, may be one of the value (undecided, approved, or denied)

*__type__*: {string}

*__memberof__*: RequestOut

___
<a id="description"></a>

### `<Optional>` description

**● description**: *`string`*

*Defined in [api.ts:305](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L305)*

Request description

*__type__*: {string}

*__memberof__*: RequestOut

___
<a id="id"></a>

### `<Optional>` id

**● id**: *`string`*

*Defined in [api.ts:317](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L317)*

*__type__*: {string}

*__memberof__*: RequestOut

___
<a id="name"></a>

###  name

**● name**: *`string`*

*Defined in [api.ts:299](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L299)*

Request name

*__type__*: {string}

*__memberof__*: RequestOut

___
<a id="reason"></a>

### `<Optional>` reason

**● reason**: *`string`*

*Defined in [api.ts:335](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L335)*

Comments for requests

*__type__*: {string}

*__memberof__*: RequestOut

___
<a id="requester"></a>

### `<Optional>` requester

**● requester**: *`string`*

*Defined in [api.ts:293](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L293)*

Requester id

*__type__*: {string}

*__memberof__*: RequestOut

___
<a id="state"></a>

### `<Optional>` state

**● state**: *[StateEnum](../enums/requestout.stateenum.md)*

*Defined in [api.ts:323](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L323)*

The state of stage or request. It may be one of values (pending, skipped, notified or finished)

*__type__*: {string}

*__memberof__*: RequestOut

___
<a id="workflowid"></a>

### `<Optional>` workflowId

**● workflowId**: *`string`*

*Defined in [api.ts:341](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L341)*

Associate workflow id

*__type__*: {string}

*__memberof__*: RequestOut

___

