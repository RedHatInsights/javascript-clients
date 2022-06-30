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
* [template_id](workflow.md#optional-template_id)

## Properties

### `Optional` description

• **description**? : *string | null*

*Defined in [api.ts:625](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/approval/api.ts#L625)*

Describe the workflow in more details

**`memberof`** Workflow

___

### `Optional` group_refs

• **group_refs**? : *Array‹[GroupRef](groupref.md)› | null*

*Defined in [api.ts:631](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/approval/api.ts#L631)*

Array of RBAC groups associated with workflow. The groups need to have approval permission

**`memberof`** Workflow

___

### `Optional` id

• **id**? : *string*

*Defined in [api.ts:607](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/approval/api.ts#L607)*

ID of the workflow

**`memberof`** Workflow

___

### `Optional` metadata

• **metadata**? : *object*

*Defined in [api.ts:637](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/approval/api.ts#L637)*

JSON metadata about the workflow

**`memberof`** Workflow

___

### `Optional` name

• **name**? : *string*

*Defined in [api.ts:619](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/approval/api.ts#L619)*

Name of the workflow

**`memberof`** Workflow

___

### `Optional` template_id

• **template_id**? : *string*

*Defined in [api.ts:613](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/approval/api.ts#L613)*

ID of the template that the workflow belongs to

**`memberof`** Workflow
