[@redhat-cloud-services/javascript-clients](../README.md) / [Exports](../modules.md) / NotificationResourceV1UpdateEventTypeBehaviors

# Module: NotificationResourceV1UpdateEventTypeBehaviors

## Table of contents

### References

- [default](NotificationResourceV1UpdateEventTypeBehaviors.md#default)

### Type Aliases

- [NotificationResourceV1UpdateEventTypeBehaviorsParams](NotificationResourceV1UpdateEventTypeBehaviors.md#notificationresourcev1updateeventtypebehaviorsparams)

### Functions

- [notificationResourceV1UpdateEventTypeBehaviorsParamCreator](NotificationResourceV1UpdateEventTypeBehaviors.md#notificationresourcev1updateeventtypebehaviorsparamcreator)

## References

### default

Renames and re-exports [notificationResourceV1UpdateEventTypeBehaviorsParamCreator](NotificationResourceV1UpdateEventTypeBehaviors.md#notificationresourcev1updateeventtypebehaviorsparamcreator)

## Type Aliases

### NotificationResourceV1UpdateEventTypeBehaviorsParams

Ƭ **NotificationResourceV1UpdateEventTypeBehaviorsParams**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventTypeId` | `string` | UUID of the eventType to associate with the behavior group(s) **`Memberof`** NotificationResourceV1UpdateEventTypeBehaviorsApi |
| `options?` | `AxiosRequestConfig` | - |
| `requestBody?` | `Set`\<`string`\> | **`Memberof`** NotificationResourceV1UpdateEventTypeBehaviorsApi |

#### Defined in

[NotificationResourceV1UpdateEventTypeBehaviors/index.ts:14](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/notifications/NotificationResourceV1UpdateEventTypeBehaviors/index.ts#L14)

## Functions

### notificationResourceV1UpdateEventTypeBehaviorsParamCreator

▸ **notificationResourceV1UpdateEventTypeBehaviorsParamCreator**(`...config`): `Promise`\<`RequestArgs`\>

Updates the list of behavior groups associated with an event type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [[`NotificationResourceV1UpdateEventTypeBehaviorsParams`](NotificationResourceV1UpdateEventTypeBehaviors.md#notificationresourcev1updateeventtypebehaviorsparams)] \| [`string`, `Set`\<`string`\>, `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Update the list of behavior groups for an event type

**`Throws`**

#### Defined in

[NotificationResourceV1UpdateEventTypeBehaviors/index.ts:40](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/notifications/NotificationResourceV1UpdateEventTypeBehaviors/index.ts#L40)
