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

*Defined in [api.ts:543](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L543)*

Final decision, may be one of the value (undecided, approved, canceled or denied)

*__type__*: {string}

*__memberof__*: StageOut

___
<a id="groupref"></a>

### `<Optional>` groupRef

**● groupRef**: *`string`*

*Defined in [api.ts:531](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L531)*

Associated group reference id

*__type__*: {string}

*__memberof__*: StageOut

___
<a id="id"></a>

### `<Optional>` id

**● id**: *`string`*

*Defined in [api.ts:519](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L519)*

*__type__*: {string}

*__memberof__*: StageOut

___
<a id="name"></a>

### `<Optional>` name

**● name**: *`string`*

*Defined in [api.ts:525](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L525)*

name of the group that processes the stage

*__type__*: {string}

*__memberof__*: StageOut

___
<a id="notifiedat"></a>

### `<Optional>` notifiedAt

**● notifiedAt**: *`string`*

*Defined in [api.ts:549](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L549)*

the time approvers in the stage are notified

*__type__*: {string}

*__memberof__*: StageOut

___
<a id="state"></a>

### `<Optional>` state

**● state**: *[StateEnum](../enums/stageout.stateenum.md)*

*Defined in [api.ts:537](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L537)*

The state of stage or request. It may be one of values (canceled, pending, skipped, notified or finished)

*__type__*: {string}

*__memberof__*: StageOut

___

