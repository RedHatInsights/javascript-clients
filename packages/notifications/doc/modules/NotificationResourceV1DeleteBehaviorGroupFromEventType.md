[@redhat-cloud-services/javascript-clients](../README.md) / [Exports](../modules.md) / NotificationResourceV1DeleteBehaviorGroupFromEventType

# Module: NotificationResourceV1DeleteBehaviorGroupFromEventType

## Table of contents

### References

- [default](NotificationResourceV1DeleteBehaviorGroupFromEventType.md#default)

### Type Aliases

- [NotificationResourceV1DeleteBehaviorGroupFromEventTypeParams](NotificationResourceV1DeleteBehaviorGroupFromEventType.md#notificationresourcev1deletebehaviorgroupfromeventtypeparams)

### Functions

- [notificationResourceV1DeleteBehaviorGroupFromEventTypeParamCreator](NotificationResourceV1DeleteBehaviorGroupFromEventType.md#notificationresourcev1deletebehaviorgroupfromeventtypeparamcreator)

## References

### default

Renames and re-exports [notificationResourceV1DeleteBehaviorGroupFromEventTypeParamCreator](NotificationResourceV1DeleteBehaviorGroupFromEventType.md#notificationresourcev1deletebehaviorgroupfromeventtypeparamcreator)

## Type Aliases

### NotificationResourceV1DeleteBehaviorGroupFromEventTypeParams

Ƭ **NotificationResourceV1DeleteBehaviorGroupFromEventTypeParams**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `behaviorGroupId` | `string` | **`Memberof`** NotificationResourceV1DeleteBehaviorGroupFromEventTypeApi |
| `eventTypeId` | `string` | **`Memberof`** NotificationResourceV1DeleteBehaviorGroupFromEventTypeApi |
| `options?` | `AxiosRequestConfig` | - |

#### Defined in

[packages/notifications/NotificationResourceV1DeleteBehaviorGroupFromEventType/index.ts:14](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/notifications/NotificationResourceV1DeleteBehaviorGroupFromEventType/index.ts#L14)

## Functions

### notificationResourceV1DeleteBehaviorGroupFromEventTypeParamCreator

▸ **notificationResourceV1DeleteBehaviorGroupFromEventTypeParamCreator**(`...config`): `Promise`\<`RequestArgs`\>

Adds a behavior group to the specified event type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`string`, `string`, `AxiosRequestConfig`\<`any`\>] \| [[`NotificationResourceV1DeleteBehaviorGroupFromEventTypeParams`](NotificationResourceV1DeleteBehaviorGroupFromEventType.md#notificationresourcev1deletebehaviorgroupfromeventtypeparams)] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Add a behavior group to an event type

**`Throws`**

#### Defined in

[packages/notifications/NotificationResourceV1DeleteBehaviorGroupFromEventType/index.ts:40](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/notifications/NotificationResourceV1DeleteBehaviorGroupFromEventType/index.ts#L40)
