[@redhat-cloud-services/approval-client](../README.md) / [Exports](../modules.md) / Action

# Interface: Action

An action that changes the state of a request

**`Export`**

**`Interface`**

Action

## Table of contents

### Properties

- [comments](Action.md#comments)
- [created\_at](Action.md#created_at)
- [id](Action.md#id)
- [operation](Action.md#operation)
- [processed\_by](Action.md#processed_by)
- [request\_id](Action.md#request_id)

## Properties

### comments

• `Optional` **comments**: `string`

Comments for action

**`Memberof`**

Action

#### Defined in

[api.ts:63](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/approval/api.ts#L63)

___

### created\_at

• `Optional` **created\_at**: `string`

Time when the action was created

**`Memberof`**

Action

#### Defined in

[api.ts:39](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/approval/api.ts#L39)

___

### id

• `Optional` **id**: `string`

ID of the action

**`Memberof`**

Action

#### Defined in

[api.ts:33](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/approval/api.ts#L33)

___

### operation

• `Optional` **operation**: [`ActionOperationEnum`](../enums/ActionOperationEnum.md)

Action type, must be one of the predefined values. The request state will be updated according to the operation.

**`Memberof`**

Action

#### Defined in

[api.ts:57](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/approval/api.ts#L57)

___

### processed\_by

• `Optional` **processed\_by**: `string`

The person who performs the action

**`Memberof`**

Action

#### Defined in

[api.ts:51](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/approval/api.ts#L51)

___

### request\_id

• `Optional` **request\_id**: `string`

ID of the request that the action belongs to

**`Memberof`**

Action

#### Defined in

[api.ts:45](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/approval/api.ts#L45)
