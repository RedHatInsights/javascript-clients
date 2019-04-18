[@redhat-cloud-services/approval-client](../README.md) > [StageOut](../modules/stageout.md)

# Module: StageOut

*__export__*: 

*__namespace__*: StageOut

## Index

### Enumerations

* [DecisionEnum](../enums/stageout.decisionenum.md)
* [StateEnum](../enums/stageout.stateenum.md)

### Properties

* [decision](stageout.md#decision)
* [groupRef](stageout.md#groupref)
* [id](stageout.md#id)
* [name](stageout.md#name)
* [notifiedAt](stageout.md#notifiedat)
* [state](stageout.md#state)

---

## Properties

<a id="decision"></a>

### `<Optional>` decision

**● decision**: *[DecisionEnum](../enums/stageout.decisionenum.md)*

*Defined in [api.ts:455](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L455)*

Final decision, may be one of the value (undecided, approved, or denied)

*__type__*: {string}

*__memberof__*: StageOut

___
<a id="groupref"></a>

### `<Optional>` groupRef

**● groupRef**: *`string`*

*Defined in [api.ts:443](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L443)*

Associated group reference id

*__type__*: {string}

*__memberof__*: StageOut

___
<a id="id"></a>

### `<Optional>` id

**● id**: *`string`*

*Defined in [api.ts:431](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L431)*

*__type__*: {string}

*__memberof__*: StageOut

___
<a id="name"></a>

### `<Optional>` name

**● name**: *`string`*

*Defined in [api.ts:437](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L437)*

name of the group that processes the stage

*__type__*: {string}

*__memberof__*: StageOut

___
<a id="notifiedat"></a>

### `<Optional>` notifiedAt

**● notifiedAt**: *`string`*

*Defined in [api.ts:461](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L461)*

the time approvers in the stage are notified

*__type__*: {string}

*__memberof__*: StageOut

___
<a id="state"></a>

### `<Optional>` state

**● state**: *[StateEnum](../enums/stageout.stateenum.md)*

*Defined in [api.ts:449](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L449)*

The state of stage or request. It may be one of values (pending, skipped, notified or finished)

*__type__*: {string}

*__memberof__*: StageOut

___

