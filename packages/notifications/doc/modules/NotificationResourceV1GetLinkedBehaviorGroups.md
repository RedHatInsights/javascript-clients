[@redhat-cloud-services/javascript-clients](../README.md) / [Exports](../modules.md) / NotificationResourceV1GetLinkedBehaviorGroups

# Module: NotificationResourceV1GetLinkedBehaviorGroups

## Table of contents

### References

- [default](NotificationResourceV1GetLinkedBehaviorGroups.md#default)

### Type Aliases

- [NotificationResourceV1GetLinkedBehaviorGroupsParams](NotificationResourceV1GetLinkedBehaviorGroups.md#notificationresourcev1getlinkedbehaviorgroupsparams)

### Functions

- [notificationResourceV1GetLinkedBehaviorGroupsParamCreator](NotificationResourceV1GetLinkedBehaviorGroups.md#notificationresourcev1getlinkedbehaviorgroupsparamcreator)

## References

### default

Renames and re-exports [notificationResourceV1GetLinkedBehaviorGroupsParamCreator](NotificationResourceV1GetLinkedBehaviorGroups.md#notificationresourcev1getlinkedbehaviorgroupsparamcreator)

## Type Aliases

### NotificationResourceV1GetLinkedBehaviorGroupsParams

Ƭ **NotificationResourceV1GetLinkedBehaviorGroupsParams**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventTypeId` | `string` | **`Memberof`** NotificationResourceV1GetLinkedBehaviorGroupsApi |
| `limit?` | `number` | **`Memberof`** NotificationResourceV1GetLinkedBehaviorGroupsApi |
| `offset?` | `number` | **`Memberof`** NotificationResourceV1GetLinkedBehaviorGroupsApi |
| `options?` | `AxiosRequestConfig` | - |
| `pageNumber?` | `number` | **`Memberof`** NotificationResourceV1GetLinkedBehaviorGroupsApi |
| `sortBy?` | `string` | **`Memberof`** NotificationResourceV1GetLinkedBehaviorGroupsApi |
| `sortBy2?` | `string` | **`Memberof`** NotificationResourceV1GetLinkedBehaviorGroupsApi |

#### Defined in

[NotificationResourceV1GetLinkedBehaviorGroups/index.ts:14](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/notifications/NotificationResourceV1GetLinkedBehaviorGroups/index.ts#L14)

## Functions

### notificationResourceV1GetLinkedBehaviorGroupsParamCreator

▸ **notificationResourceV1GetLinkedBehaviorGroupsParamCreator**(`...config`): `Promise`\<`RequestArgs`\>

Lists the behavior groups that are linked to an event type. Use this endpoint to see which behavior groups will be affected if you delete an event type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [[`NotificationResourceV1GetLinkedBehaviorGroupsParams`](NotificationResourceV1GetLinkedBehaviorGroups.md#notificationresourcev1getlinkedbehaviorgroupsparams)] \| [`string`, `number`, `number`, `number`, `string`, `string`, `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

List the behavior groups linked to an event type

**`Throws`**

#### Defined in

[NotificationResourceV1GetLinkedBehaviorGroups/index.ts:64](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/notifications/NotificationResourceV1GetLinkedBehaviorGroups/index.ts#L64)
