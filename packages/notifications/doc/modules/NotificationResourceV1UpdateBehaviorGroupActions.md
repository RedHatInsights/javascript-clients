[@redhat-cloud-services/javascript-clients](../README.md) / [Exports](../modules.md) / NotificationResourceV1UpdateBehaviorGroupActions

# Module: NotificationResourceV1UpdateBehaviorGroupActions

## Table of contents

### References

- [default](NotificationResourceV1UpdateBehaviorGroupActions.md#default)

### Type Aliases

- [NotificationResourceV1UpdateBehaviorGroupActionsParams](NotificationResourceV1UpdateBehaviorGroupActions.md#notificationresourcev1updatebehaviorgroupactionsparams)

### Functions

- [notificationResourceV1UpdateBehaviorGroupActionsParamCreator](NotificationResourceV1UpdateBehaviorGroupActions.md#notificationresourcev1updatebehaviorgroupactionsparamcreator)

## References

### default

Renames and re-exports [notificationResourceV1UpdateBehaviorGroupActionsParamCreator](NotificationResourceV1UpdateBehaviorGroupActions.md#notificationresourcev1updatebehaviorgroupactionsparamcreator)

## Type Aliases

### NotificationResourceV1UpdateBehaviorGroupActionsParams

Ƭ **NotificationResourceV1UpdateBehaviorGroupActionsParams**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `behaviorGroupId` | `string` | The UUID of the behavior group to update **`Memberof`** NotificationResourceV1UpdateBehaviorGroupActionsApi |
| `options?` | `AxiosRequestConfig` | - |
| `requestBody?` | `string`[] | **`Memberof`** NotificationResourceV1UpdateBehaviorGroupActionsApi |

#### Defined in

[packages/notifications/NotificationResourceV1UpdateBehaviorGroupActions/index.ts:14](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/notifications/NotificationResourceV1UpdateBehaviorGroupActions/index.ts#L14)

## Functions

### notificationResourceV1UpdateBehaviorGroupActionsParamCreator

▸ **notificationResourceV1UpdateBehaviorGroupActionsParamCreator**(`...config`): `Promise`\<`RequestArgs`\>

Updates the list of actions to be executed in that particular behavior group after an event is received.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [[`NotificationResourceV1UpdateBehaviorGroupActionsParams`](NotificationResourceV1UpdateBehaviorGroupActions.md#notificationresourcev1updatebehaviorgroupactionsparams)] \| [`string`, `string`[], `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Update the list of behavior group action

**`Throws`**

#### Defined in

[packages/notifications/NotificationResourceV1UpdateBehaviorGroupActions/index.ts:40](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/notifications/NotificationResourceV1UpdateBehaviorGroupActions/index.ts#L40)
