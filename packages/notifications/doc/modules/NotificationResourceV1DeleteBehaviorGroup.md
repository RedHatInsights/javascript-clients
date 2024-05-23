[@redhat-cloud-services/javascript-clients](../README.md) / [Exports](../modules.md) / NotificationResourceV1DeleteBehaviorGroup

# Module: NotificationResourceV1DeleteBehaviorGroup

## Table of contents

### References

- [default](NotificationResourceV1DeleteBehaviorGroup.md#default)

### Type Aliases

- [NotificationResourceV1DeleteBehaviorGroupParams](NotificationResourceV1DeleteBehaviorGroup.md#notificationresourcev1deletebehaviorgroupparams)

### Functions

- [notificationResourceV1DeleteBehaviorGroupParamCreator](NotificationResourceV1DeleteBehaviorGroup.md#notificationresourcev1deletebehaviorgroupparamcreator)

## References

### default

Renames and re-exports [notificationResourceV1DeleteBehaviorGroupParamCreator](NotificationResourceV1DeleteBehaviorGroup.md#notificationresourcev1deletebehaviorgroupparamcreator)

## Type Aliases

### NotificationResourceV1DeleteBehaviorGroupParams

Ƭ **NotificationResourceV1DeleteBehaviorGroupParams**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The UUID of the behavior group to delete **`Memberof`** NotificationResourceV1DeleteBehaviorGroupApi |
| `options?` | `AxiosRequestConfig` | - |

#### Defined in

[packages/notifications/NotificationResourceV1DeleteBehaviorGroup/index.ts:14](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/notifications/NotificationResourceV1DeleteBehaviorGroup/index.ts#L14)

## Functions

### notificationResourceV1DeleteBehaviorGroupParamCreator

▸ **notificationResourceV1DeleteBehaviorGroupParamCreator**(`...config`): `Promise`\<`RequestArgs`\>

Deletes a behavior group and all of its configured actions. Use this endpoint when you no longer need a behavior group.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [[`NotificationResourceV1DeleteBehaviorGroupParams`](NotificationResourceV1DeleteBehaviorGroup.md#notificationresourcev1deletebehaviorgroupparams)] \| [`string`, `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Delete a behavior group

**`Throws`**

#### Defined in

[packages/notifications/NotificationResourceV1DeleteBehaviorGroup/index.ts:34](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/notifications/NotificationResourceV1DeleteBehaviorGroup/index.ts#L34)
