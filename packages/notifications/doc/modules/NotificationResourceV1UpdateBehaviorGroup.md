[@redhat-cloud-services/javascript-clients](../README.md) / [Exports](../modules.md) / NotificationResourceV1UpdateBehaviorGroup

# Module: NotificationResourceV1UpdateBehaviorGroup

## Table of contents

### References

- [default](NotificationResourceV1UpdateBehaviorGroup.md#default)

### Type Aliases

- [NotificationResourceV1UpdateBehaviorGroupParams](NotificationResourceV1UpdateBehaviorGroup.md#notificationresourcev1updatebehaviorgroupparams)

### Functions

- [notificationResourceV1UpdateBehaviorGroupParamCreator](NotificationResourceV1UpdateBehaviorGroup.md#notificationresourcev1updatebehaviorgroupparamcreator)

## References

### default

Renames and re-exports [notificationResourceV1UpdateBehaviorGroupParamCreator](NotificationResourceV1UpdateBehaviorGroup.md#notificationresourcev1updatebehaviorgroupparamcreator)

## Type Aliases

### NotificationResourceV1UpdateBehaviorGroupParams

Ƭ **NotificationResourceV1UpdateBehaviorGroupParams**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The UUID of the behavior group to update **`Memberof`** NotificationResourceV1UpdateBehaviorGroupApi |
| `options?` | `AxiosRequestConfig` | - |
| `updateBehaviorGroupRequest` | [`UpdateBehaviorGroupRequest`](../interfaces/types.UpdateBehaviorGroupRequest.md) | New parameters **`Memberof`** NotificationResourceV1UpdateBehaviorGroupApi |

#### Defined in

[NotificationResourceV1UpdateBehaviorGroup/index.ts:14](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/notifications/NotificationResourceV1UpdateBehaviorGroup/index.ts#L14)

## Functions

### notificationResourceV1UpdateBehaviorGroupParamCreator

▸ **notificationResourceV1UpdateBehaviorGroupParamCreator**(`...config`): `Promise`\<`RequestArgs`\>

Updates the details of a behavior group. Use this endpoint to update the list of related endpoints and event types associated with this behavior group.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [[`NotificationResourceV1UpdateBehaviorGroupParams`](NotificationResourceV1UpdateBehaviorGroup.md#notificationresourcev1updatebehaviorgroupparams)] \| [`string`, [`UpdateBehaviorGroupRequest`](../interfaces/types.UpdateBehaviorGroupRequest.md), `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Update a behavior group

**`Throws`**

#### Defined in

[NotificationResourceV1UpdateBehaviorGroup/index.ts:40](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/notifications/NotificationResourceV1UpdateBehaviorGroup/index.ts#L40)
