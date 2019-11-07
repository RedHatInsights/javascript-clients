[@redhat-cloud-services/approval-client](../README.md) > [WorkflowOut](../interfaces/workflowout.md)

# Interface: WorkflowOut

The workflow to process approval requests. Each workflow is linked to multiple groups of approvals.

*__export__*: 

*__interface__*: WorkflowOut

## Hierarchy

**WorkflowOut**

## Index

### Properties

* [description](workflowout.md#description)
* [groupRefs](workflowout.md#grouprefs)
* [id](workflowout.md#id)
* [name](workflowout.md#name)
* [sequence](workflowout.md#sequence)
* [templateId](workflowout.md#templateid)

---

## Properties

<a id="description"></a>

### `<Optional>` description

**● description**: *`string`*

*Defined in [api.ts:771](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L771)*

*__type__*: {string}

*__memberof__*: WorkflowOut

___
<a id="grouprefs"></a>

### `<Optional>` groupRefs

**● groupRefs**: *`Array`<`string`>*

*Defined in [api.ts:783](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L783)*

Group reference ids associated with workflow

*__type__*: {Array}

*__memberof__*: WorkflowOut

___
<a id="id"></a>

### `<Optional>` id

**● id**: *`string`*

*Defined in [api.ts:753](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L753)*

*__type__*: {string}

*__memberof__*: WorkflowOut

___
<a id="name"></a>

### `<Optional>` name

**● name**: *`string`*

*Defined in [api.ts:765](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L765)*

*__type__*: {string}

*__memberof__*: WorkflowOut

___
<a id="sequence"></a>

### `<Optional>` sequence

**● sequence**: *`number`*

*Defined in [api.ts:777](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L777)*

an indicator of the execution order for selected workflows

*__type__*: {number}

*__memberof__*: WorkflowOut

___
<a id="templateid"></a>

### `<Optional>` templateId

**● templateId**: *`string`*

*Defined in [api.ts:759](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L759)*

Associated template id

*__type__*: {string}

*__memberof__*: WorkflowOut

___

