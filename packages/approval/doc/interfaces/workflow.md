[@redhat-cloud-services/approval-client](../README.md) › [Globals](../globals.md) › [Workflow](workflow.md)

# Interface: Workflow

The workflow to process approval requests. Each workflow is linked to multiple groups of approvals.

**`export`** 

**`interface`** Workflow

## Hierarchy

* **Workflow**

## Index

### Properties

* [description](workflow.md#optional-description)
* [groupRefs](workflow.md#optional-grouprefs)
* [id](workflow.md#optional-id)
* [name](workflow.md#optional-name)
* [sequence](workflow.md#optional-sequence)
* [templateId](workflow.md#optional-templateid)

## Properties

### `Optional` description

• **description**? : *string | null*

*Defined in [api.ts:604](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L604)*

**`type`** {string}

**`memberof`** Workflow

___

### `Optional` groupRefs

• **groupRefs**? : *Array‹string›*

*Defined in [api.ts:616](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L616)*

Group reference ids associated with workflow

**`type`** {Array<string>}

**`memberof`** Workflow

___

### `Optional` id

• **id**? : *string*

*Defined in [api.ts:586](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L586)*

**`type`** {string}

**`memberof`** Workflow

___

### `Optional` name

• **name**? : *string*

*Defined in [api.ts:598](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L598)*

**`type`** {string}

**`memberof`** Workflow

___

### `Optional` sequence

• **sequence**? : *number*

*Defined in [api.ts:610](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L610)*

an indicator of the execution order for selected workflows

**`type`** {number}

**`memberof`** Workflow

___

### `Optional` templateId

• **templateId**? : *string*

*Defined in [api.ts:592](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L592)*

Associated template id

**`type`** {string}

**`memberof`** Workflow
