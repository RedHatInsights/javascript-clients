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
* [metadata](workflow.md#optional-metadata)
* [name](workflow.md#optional-name)
* [sequence](workflow.md#optional-sequence)
* [template_id](workflow.md#optional-template_id)

## Properties

### `Optional` description

• **description**? : *string | null*

*Defined in [packages/approval/api.ts:625](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L625)*

Describe the workflow in more details

**`memberof`** Workflow

___

### `Optional` group_refs

• **group_refs**? : *Array‹[GroupRef](groupref.md)› | null*

*Defined in [packages/approval/api.ts:637](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L637)*

Array of RBAC groups associated with workflow. The groups need to have approval permission

**`memberof`** Workflow

___

### `Optional` id

• **id**? : *string*

*Defined in [packages/approval/api.ts:607](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L607)*

ID of the workflow

**`memberof`** Workflow

___

### `Optional` metadata

• **metadata**? : *object*

*Defined in [packages/approval/api.ts:643](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L643)*

JSON metadata about the workflow

**`memberof`** Workflow

___

### `Optional` name

• **name**? : *string*

*Defined in [packages/approval/api.ts:619](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L619)*

Name of the workflow

**`memberof`** Workflow

___

### `Optional` sequence

• **sequence**? : *number*

*Defined in [packages/approval/api.ts:631](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L631)*

an indicator of the execution order for selected workflows

**`memberof`** Workflow

___

### `Optional` template_id

• **template_id**? : *string*

*Defined in [packages/approval/api.ts:613](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L613)*

ID of the template that the workflow belongs to

**`memberof`** Workflow
