[@redhat-cloud-services/approval-client](../README.md) / [Exports](../modules.md) / Workflow

# Interface: Workflow

The workflow to process approval requests. Each workflow is linked to multiple groups of approvals.

**`Export`**

**`Interface`**

Workflow

## Table of contents

### Properties

- [description](Workflow.md#description)
- [group\_refs](Workflow.md#group_refs)
- [id](Workflow.md#id)
- [metadata](Workflow.md#metadata)
- [name](Workflow.md#name)
- [template\_id](Workflow.md#template_id)

## Properties

### description

• `Optional` **description**: `string`

Describe the workflow in more details

**`Memberof`**

Workflow

#### Defined in

[api.ts:625](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L625)

___

### group\_refs

• `Optional` **group\_refs**: [`GroupRef`](GroupRef.md)[]

Array of RBAC groups associated with workflow. The groups need to have approval permission

**`Memberof`**

Workflow

#### Defined in

[api.ts:631](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L631)

___

### id

• `Optional` **id**: `string`

ID of the workflow

**`Memberof`**

Workflow

#### Defined in

[api.ts:607](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L607)

___

### metadata

• `Optional` **metadata**: `object`

JSON metadata about the workflow

**`Memberof`**

Workflow

#### Defined in

[api.ts:637](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L637)

___

### name

• `Optional` **name**: `string`

Name of the workflow

**`Memberof`**

Workflow

#### Defined in

[api.ts:619](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L619)

___

### template\_id

• `Optional` **template\_id**: `string`

ID of the template that the workflow belongs to

**`Memberof`**

Workflow

#### Defined in

[api.ts:613](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L613)
