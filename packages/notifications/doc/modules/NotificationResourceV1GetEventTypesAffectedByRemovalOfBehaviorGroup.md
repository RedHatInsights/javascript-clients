[@redhat-cloud-services/javascript-clients](../README.md) / [Exports](../modules.md) / NotificationResourceV1GetEventTypesAffectedByRemovalOfBehaviorGroup

# Module: NotificationResourceV1GetEventTypesAffectedByRemovalOfBehaviorGroup

## Table of contents

### References

- [default](NotificationResourceV1GetEventTypesAffectedByRemovalOfBehaviorGroup.md#default)

### Type Aliases

- [NotificationResourceV1GetEventTypesAffectedByRemovalOfBehaviorGroupParams](NotificationResourceV1GetEventTypesAffectedByRemovalOfBehaviorGroup.md#notificationresourcev1geteventtypesaffectedbyremovalofbehaviorgroupparams)

### Functions

- [notificationResourceV1GetEventTypesAffectedByRemovalOfBehaviorGroupParamCreator](NotificationResourceV1GetEventTypesAffectedByRemovalOfBehaviorGroup.md#notificationresourcev1geteventtypesaffectedbyremovalofbehaviorgroupparamcreator)

## References

### default

Renames and re-exports [notificationResourceV1GetEventTypesAffectedByRemovalOfBehaviorGroupParamCreator](NotificationResourceV1GetEventTypesAffectedByRemovalOfBehaviorGroup.md#notificationresourcev1geteventtypesaffectedbyremovalofbehaviorgroupparamcreator)

## Type Aliases

### NotificationResourceV1GetEventTypesAffectedByRemovalOfBehaviorGroupParams

Ƭ **NotificationResourceV1GetEventTypesAffectedByRemovalOfBehaviorGroupParams**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `behaviorGroupId` | `string` | The UUID of the behavior group to check **`Memberof`** NotificationResourceV1GetEventTypesAffectedByRemovalOfBehaviorGroupApi |
| `options?` | `AxiosRequestConfig` | - |

#### Defined in

[NotificationResourceV1GetEventTypesAffectedByRemovalOfBehaviorGroup/index.ts:14](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/notifications/NotificationResourceV1GetEventTypesAffectedByRemovalOfBehaviorGroup/index.ts#L14)

## Functions

### notificationResourceV1GetEventTypesAffectedByRemovalOfBehaviorGroupParamCreator

▸ **notificationResourceV1GetEventTypesAffectedByRemovalOfBehaviorGroupParamCreator**(`...config`): `Promise`\<`RequestArgs`\>

Lists the event types that will be affected by the removal of a behavior group. Use this endpoint to see which event types will be removed if you delete a behavior group.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`string`, `AxiosRequestConfig`\<`any`\>] \| [[`NotificationResourceV1GetEventTypesAffectedByRemovalOfBehaviorGroupParams`](NotificationResourceV1GetEventTypesAffectedByRemovalOfBehaviorGroup.md#notificationresourcev1geteventtypesaffectedbyremovalofbehaviorgroupparams)] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

List the event types affected by the removal of a behavior group

**`Throws`**

#### Defined in

[NotificationResourceV1GetEventTypesAffectedByRemovalOfBehaviorGroup/index.ts:34](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/notifications/NotificationResourceV1GetEventTypesAffectedByRemovalOfBehaviorGroup/index.ts#L34)
