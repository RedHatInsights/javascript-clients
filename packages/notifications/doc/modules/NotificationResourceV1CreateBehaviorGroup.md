[@redhat-cloud-services/javascript-clients](../README.md) / [Exports](../modules.md) / NotificationResourceV1CreateBehaviorGroup

# Module: NotificationResourceV1CreateBehaviorGroup

## Table of contents

### References

- [default](NotificationResourceV1CreateBehaviorGroup.md#default)

### Type Aliases

- [NotificationResourceV1CreateBehaviorGroupParams](NotificationResourceV1CreateBehaviorGroup.md#notificationresourcev1createbehaviorgroupparams)

### Functions

- [notificationResourceV1CreateBehaviorGroupParamCreator](NotificationResourceV1CreateBehaviorGroup.md#notificationresourcev1createbehaviorgroupparamcreator)

## References

### default

Renames and re-exports [notificationResourceV1CreateBehaviorGroupParamCreator](NotificationResourceV1CreateBehaviorGroup.md#notificationresourcev1createbehaviorgroupparamcreator)

## Type Aliases

### NotificationResourceV1CreateBehaviorGroupParams

Ƭ **NotificationResourceV1CreateBehaviorGroupParams**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `createBehaviorGroupRequest` | [`CreateBehaviorGroupRequest`](../interfaces/types.CreateBehaviorGroupRequest.md) | **`Memberof`** NotificationResourceV1CreateBehaviorGroupApi |
| `options?` | `AxiosRequestConfig` | - |

#### Defined in

[NotificationResourceV1CreateBehaviorGroup/index.ts:14](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/notifications/NotificationResourceV1CreateBehaviorGroup/index.ts#L14)

## Functions

### notificationResourceV1CreateBehaviorGroupParamCreator

▸ **notificationResourceV1CreateBehaviorGroupParamCreator**(`...config`): `Promise`\<`RequestArgs`\>

Creates a behavior group that defines which notifications will be sent to external services after an event is received. Use this endpoint to control the types of events users are notified about.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [[`NotificationResourceV1CreateBehaviorGroupParams`](NotificationResourceV1CreateBehaviorGroup.md#notificationresourcev1createbehaviorgroupparams)] \| [[`CreateBehaviorGroupRequest`](../interfaces/types.CreateBehaviorGroupRequest.md), `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Create a behavior group

**`Throws`**

#### Defined in

[NotificationResourceV1CreateBehaviorGroup/index.ts:34](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/notifications/NotificationResourceV1CreateBehaviorGroup/index.ts#L34)
