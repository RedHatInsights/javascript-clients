[@redhat-cloud-services/approval-client](../README.md) › [Globals](../globals.md) › [Action](action.md)

# Module: Action

**`export`** 

**`namespace`** Action

## Index

### Enumerations

* [OperationEnum](../enums/action.operationenum.md)

### Properties

* [comments](action.md#optional-comments)
* [createdAt](action.md#optional-createdat)
* [id](action.md#optional-id)
* [operation](action.md#optional-operation)
* [processedBy](action.md#optional-processedby)
* [requestId](action.md#optional-requestid)

## Properties

### `Optional` comments

• **comments**? : *string | null*

*Defined in [api.ts:113](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L113)*

Comments for action

**`type`** {string}

**`memberof`** Action

___

### `Optional` createdAt

• **createdAt**? : *Date*

*Defined in [api.ts:89](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L89)*

Timestamp of creation

**`type`** {Date}

**`memberof`** Action

___

### `Optional` id

• **id**? : *string*

*Defined in [api.ts:83](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L83)*

**`type`** {string}

**`memberof`** Action

___

### `Optional` operation

• **operation**? : *[OperationEnum](../enums/action.operationenum.md)*

*Defined in [api.ts:107](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L107)*

Types of action, may be one of the value (approve, cancel, deny, notify, memo, skip, or start). The request state will be updated according to the operation.

**`type`** {string}

**`memberof`** Action

___

### `Optional` processedBy

• **processedBy**? : *string*

*Defined in [api.ts:101](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L101)*

The person who performs the action

**`type`** {string}

**`memberof`** Action

___

### `Optional` requestId

• **requestId**? : *string*

*Defined in [api.ts:95](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L95)*

Associated request id

**`type`** {string}

**`memberof`** Action
