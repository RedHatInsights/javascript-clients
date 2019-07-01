[@redhat-cloud-services/approval-client](../README.md) > [ActionOut](../modules/actionout.md)

# Module: ActionOut

*__export__*: 

*__namespace__*: ActionOut

## Index

### Enumerations

* [OperationEnum](../enums/actionout.operationenum.md)

### Properties

* [comments](actionout.md#comments)
* [createdAt](actionout.md#createdat)
* [id](actionout.md#id)
* [operation](actionout.md#operation)
* [processedBy](actionout.md#processedby)
* [stageId](actionout.md#stageid)

---

## Properties

<a id="comments"></a>

### `<Optional>` comments

**● comments**: *`string`*

*Defined in [api.ts:158](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L158)*

Comments for action

*__type__*: {string}

*__memberof__*: ActionOut

___
<a id="createdat"></a>

### `<Optional>` createdAt

**● createdAt**: *`Date`*

*Defined in [api.ts:134](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L134)*

Timestamp of creation

*__type__*: {Date}

*__memberof__*: ActionOut

___
<a id="id"></a>

###  id

**● id**: *`string`*

*Defined in [api.ts:128](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L128)*

*__type__*: {string}

*__memberof__*: ActionOut

___
<a id="operation"></a>

### `<Optional>` operation

**● operation**: *[OperationEnum](../enums/actionout.operationenum.md)*

*Defined in [api.ts:152](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L152)*

Types of action, may be one of the value (approve, cancel, deny, notify, memo, or skip). The stage will be updated according to the operation.

*__type__*: {string}

*__memberof__*: ActionOut

___
<a id="processedby"></a>

### `<Optional>` processedBy

**● processedBy**: *`string`*

*Defined in [api.ts:146](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L146)*

The person who performs the action

*__type__*: {string}

*__memberof__*: ActionOut

___
<a id="stageid"></a>

###  stageId

**● stageId**: *`string`*

*Defined in [api.ts:140](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L140)*

Associated stage id

*__type__*: {string}

*__memberof__*: ActionOut

___

