[@redhat-cloud-services/javascript-clients](../README.md) / [Exports](../modules.md) / NotificationResourceV1AppendBehaviorGroupToEventType

# Module: NotificationResourceV1AppendBehaviorGroupToEventType

## Table of contents

### References

- [default](NotificationResourceV1AppendBehaviorGroupToEventType.md#default)

### Type Aliases

- [NotificationResourceV1AppendBehaviorGroupToEventTypeParams](NotificationResourceV1AppendBehaviorGroupToEventType.md#notificationresourcev1appendbehaviorgrouptoeventtypeparams)

### Functions

- [notificationResourceV1AppendBehaviorGroupToEventTypeParamCreator](NotificationResourceV1AppendBehaviorGroupToEventType.md#notificationresourcev1appendbehaviorgrouptoeventtypeparamcreator)

## References

### default

Renames and re-exports [notificationResourceV1AppendBehaviorGroupToEventTypeParamCreator](NotificationResourceV1AppendBehaviorGroupToEventType.md#notificationresourcev1appendbehaviorgrouptoeventtypeparamcreator)

## Type Aliases

### NotificationResourceV1AppendBehaviorGroupToEventTypeParams

Ƭ **NotificationResourceV1AppendBehaviorGroupToEventTypeParams**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `behaviorGroupUuid` | `string` | **`Memberof`** NotificationResourceV1AppendBehaviorGroupToEventTypeApi |
| `eventTypeUuid` | `string` | **`Memberof`** NotificationResourceV1AppendBehaviorGroupToEventTypeApi |
| `options?` | `AxiosRequestConfig` | - |

#### Defined in

[packages/notifications/NotificationResourceV1AppendBehaviorGroupToEventType/index.ts:14](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/notifications/NotificationResourceV1AppendBehaviorGroupToEventType/index.ts#L14)

## Functions

### notificationResourceV1AppendBehaviorGroupToEventTypeParamCreator

▸ **notificationResourceV1AppendBehaviorGroupToEventTypeParamCreator**(`...config`): `Promise`\<`RequestArgs`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [[`NotificationResourceV1AppendBehaviorGroupToEventTypeParams`](NotificationResourceV1AppendBehaviorGroupToEventType.md#notificationresourcev1appendbehaviorgrouptoeventtypeparams)] \| [`string`, `string`, `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Add a behavior group to the given event type.

**`Throws`**

#### Defined in

[packages/notifications/NotificationResourceV1AppendBehaviorGroupToEventType/index.ts:40](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/notifications/NotificationResourceV1AppendBehaviorGroupToEventType/index.ts#L40)
