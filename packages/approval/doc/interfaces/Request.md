[@redhat-cloud-services/approval-client](../README.md) / [Exports](../modules.md) / Request

# Interface: Request

Approval request. It may have child requests. Only a leaf node request can have workflow_id

**`Export`**

**`Interface`**

Request

## Table of contents

### Properties

- [created\_at](Request.md#created_at)
- [decision](Request.md#decision)
- [description](Request.md#description)
- [finished\_at](Request.md#finished_at)
- [group\_name](Request.md#group_name)
- [id](Request.md#id)
- [metadata](Request.md#metadata)
- [name](Request.md#name)
- [notified\_at](Request.md#notified_at)
- [number\_of\_children](Request.md#number_of_children)
- [number\_of\_finished\_children](Request.md#number_of_finished_children)
- [owner](Request.md#owner)
- [parent\_id](Request.md#parent_id)
- [reason](Request.md#reason)
- [requester\_name](Request.md#requester_name)
- [state](Request.md#state)
- [workflow\_id](Request.md#workflow_id)

## Properties

### created\_at

• `Optional` **created\_at**: `string`

Time when the request was created

**`Memberof`**

Request

#### Defined in

[api.ts:327](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/approval/api.ts#L327)

___

### decision

• `Optional` **decision**: [`RequestDecisionEnum`](../enums/RequestDecisionEnum.md)

Approval decision, must be one of the predefined values

**`Memberof`**

Request

#### Defined in

[api.ts:309](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/approval/api.ts#L309)

___

### description

• `Optional` **description**: `string`

Describe the request in more details

**`Memberof`**

Request

#### Defined in

[api.ts:375](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/approval/api.ts#L375)

___

### finished\_at

• `Optional` **finished\_at**: `string`

Time when the request was finished (skipped, canceled, or completed)

**`Memberof`**

Request

#### Defined in

[api.ts:339](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/approval/api.ts#L339)

___

### group\_name

• `Optional` **group\_name**: `string`

Name of approver group(s) assigned to approve this request

**`Memberof`**

Request

#### Defined in

[api.ts:381](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/approval/api.ts#L381)

___

### id

• `Optional` **id**: `string`

ID of the request

**`Memberof`**

Request

#### Defined in

[api.ts:297](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/approval/api.ts#L297)

___

### metadata

• `Optional` **metadata**: `object`

JSON metadata about the request

**`Memberof`**

Request

#### Defined in

[api.ts:393](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/approval/api.ts#L393)

___

### name

• `Optional` **name**: `string`

Name of the request to be created

**`Memberof`**

Request

#### Defined in

[api.ts:369](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/approval/api.ts#L369)

___

### notified\_at

• `Optional` **notified\_at**: `string`

Time when a notification was sent to approvers

**`Memberof`**

Request

#### Defined in

[api.ts:333](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/approval/api.ts#L333)

___

### number\_of\_children

• `Optional` **number\_of\_children**: `number`

Number of child requests

**`Memberof`**

Request

#### Defined in

[api.ts:345](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/approval/api.ts#L345)

___

### number\_of\_finished\_children

• `Optional` **number\_of\_finished\_children**: `number`

Number of finished child requests

**`Memberof`**

Request

#### Defined in

[api.ts:351](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/approval/api.ts#L351)

___

### owner

• `Optional` **owner**: `string`

Identification of whom made the request

**`Memberof`**

Request

#### Defined in

[api.ts:357](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/approval/api.ts#L357)

___

### parent\_id

• `Optional` **parent\_id**: `string`

ID of the parent group if present

**`Memberof`**

Request

#### Defined in

[api.ts:387](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/approval/api.ts#L387)

___

### reason

• `Optional` **reason**: `string`

Optional reason for the decision, present normally when the decision is denied

**`Memberof`**

Request

#### Defined in

[api.ts:315](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/approval/api.ts#L315)

___

### requester\_name

• `Optional` **requester\_name**: `string`

Full name of the requester

**`Memberof`**

Request

#### Defined in

[api.ts:363](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/approval/api.ts#L363)

___

### state

• `Optional` **state**: [`RequestStateEnum`](../enums/RequestStateEnum.md)

The state of the request, must be one of the predefined values

**`Memberof`**

Request

#### Defined in

[api.ts:303](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/approval/api.ts#L303)

___

### workflow\_id

• `Optional` **workflow\_id**: `string`

ID of the workflow that the request belongs to. Present only if the request is a leaf node

**`Memberof`**

Request

#### Defined in

[api.ts:321](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/approval/api.ts#L321)
