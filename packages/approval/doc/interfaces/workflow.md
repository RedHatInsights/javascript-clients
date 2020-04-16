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
* [group_refs](workflow.md#optional-group_refs)
* [id](workflow.md#optional-id)
* [name](workflow.md#optional-name)
* [sequence](workflow.md#optional-sequence)
* [template_id](workflow.md#optional-template_id)

## Properties

### `Optional` description

• **description**? : *string | null*

*Defined in [packages/approval/api.ts:530](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L530)*

**`memberof`** Workflow

___

### `Optional` group_refs

• **group_refs**? : *Array‹string›*

*Defined in [packages/approval/api.ts:542](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L542)*

Group reference ids associated with workflow

**`memberof`** Workflow

___

### `Optional` id

• **id**? : *string*

*Defined in [packages/approval/api.ts:512](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L512)*

**`memberof`** Workflow

___

### `Optional` name

• **name**? : *string*

*Defined in [packages/approval/api.ts:524](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L524)*

**`memberof`** Workflow

___

### `Optional` sequence

• **sequence**? : *number*

*Defined in [packages/approval/api.ts:536](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L536)*

an indicator of the execution order for selected workflows

**`memberof`** Workflow

___

### `Optional` template_id

• **template_id**? : *string*

*Defined in [packages/approval/api.ts:518](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L518)*

Associated template id

**`memberof`** Workflow
