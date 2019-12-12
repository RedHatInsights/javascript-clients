[@redhat-cloud-services/approval-client](../README.md) > [Action](../modules/action.md)

# Module: Action

*__export__*: 

*__namespace__*: Action

## Index

### Enumerations

* [OperationEnum](../enums/action.operationenum.md)

### Properties

* [comments](action.md#comments)
* [createdAt](action.md#createdat)
* [id](action.md#id)
* [operation](action.md#operation)
* [processedBy](action.md#processedby)
* [requestId](action.md#requestid)
* [updatedAt](action.md#updatedat)

---

## Properties

<a id="comments"></a>

### `<Optional>` comments

**● comments**: *`string`*

*Defined in [api.ts:119](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L119)*

Comments for action

*__type__*: {string}

*__memberof__*: Action

___
<a id="createdat"></a>

### `<Optional>` createdAt

**● createdAt**: *`Date`*

*Defined in [api.ts:89](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L89)*

Timestamp of creation

*__type__*: {Date}

*__memberof__*: Action

___
<a id="id"></a>

### `<Optional>` id

**● id**: *`string`*

*Defined in [api.ts:83](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L83)*

*__type__*: {string}

*__memberof__*: Action

___
<a id="operation"></a>

### `<Optional>` operation

**● operation**: *[OperationEnum](../enums/action.operationenum.md)*

*Defined in [api.ts:113](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L113)*

Types of action, may be one of the value (approve, cancel, deny, notify, memo, or skip). The request will be updated according to the operation.

*__type__*: {string}

*__memberof__*: Action

___
<a id="processedby"></a>

### `<Optional>` processedBy

**● processedBy**: *`string`*

*Defined in [api.ts:107](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L107)*

The person who performs the action

*__type__*: {string}

*__memberof__*: Action

___
<a id="requestid"></a>

### `<Optional>` requestId

**● requestId**: *`string`*

*Defined in [api.ts:101](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L101)*

Associated request id

*__type__*: {string}

*__memberof__*: Action

___
<a id="updatedat"></a>

### `<Optional>` updatedAt

**● updatedAt**: *`Date`*

*Defined in [api.ts:95](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L95)*

Timestamp of update

*__type__*: {Date}

*__memberof__*: Action

___

