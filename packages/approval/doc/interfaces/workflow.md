[@redhat-cloud-services/approval-client](../README.md) > [Workflow](../interfaces/workflow.md)

# Interface: Workflow

The workflow to process approval requests. Each workflow is linked to multiple groups of approvals.

*__export__*: 

*__interface__*: Workflow

## Hierarchy

**Workflow**

## Index

### Properties

* [description](workflow.md#description)
* [groupRefs](workflow.md#grouprefs)
* [id](workflow.md#id)
* [name](workflow.md#name)
* [sequence](workflow.md#sequence)
* [templateId](workflow.md#templateid)

---

## Properties

<a id="description"></a>

### `<Optional>` description

**● description**: *`string` \| `null`*

*Defined in [api.ts:615](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L615)*

*__type__*: {string}

*__memberof__*: Workflow

___
<a id="grouprefs"></a>

### `<Optional>` groupRefs

**● groupRefs**: *`Array`<`string`>*

*Defined in [api.ts:627](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L627)*

Group reference ids associated with workflow

*__type__*: {Array}

*__memberof__*: Workflow

___
<a id="id"></a>

### `<Optional>` id

**● id**: *`string`*

*Defined in [api.ts:597](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L597)*

*__type__*: {string}

*__memberof__*: Workflow

___
<a id="name"></a>

### `<Optional>` name

**● name**: *`string`*

*Defined in [api.ts:609](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L609)*

*__type__*: {string}

*__memberof__*: Workflow

___
<a id="sequence"></a>

### `<Optional>` sequence

**● sequence**: *`number`*

*Defined in [api.ts:621](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L621)*

an indicator of the execution order for selected workflows

*__type__*: {number}

*__memberof__*: Workflow

___
<a id="templateid"></a>

### `<Optional>` templateId

**● templateId**: *`string`*

*Defined in [api.ts:603](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L603)*

Associated template id

*__type__*: {string}

*__memberof__*: Workflow

___

