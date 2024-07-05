[@redhat-cloud-services/javascript-clients](../README.md) / [Exports](../modules.md) / NotificationResourceV1FindBehaviorGroupsByBundleId

# Module: NotificationResourceV1FindBehaviorGroupsByBundleId

## Table of contents

### References

- [default](NotificationResourceV1FindBehaviorGroupsByBundleId.md#default)

### Type Aliases

- [NotificationResourceV1FindBehaviorGroupsByBundleIdParams](NotificationResourceV1FindBehaviorGroupsByBundleId.md#notificationresourcev1findbehaviorgroupsbybundleidparams)

### Functions

- [notificationResourceV1FindBehaviorGroupsByBundleIdParamCreator](NotificationResourceV1FindBehaviorGroupsByBundleId.md#notificationresourcev1findbehaviorgroupsbybundleidparamcreator)

## References

### default

Renames and re-exports [notificationResourceV1FindBehaviorGroupsByBundleIdParamCreator](NotificationResourceV1FindBehaviorGroupsByBundleId.md#notificationresourcev1findbehaviorgroupsbybundleidparamcreator)

## Type Aliases

### NotificationResourceV1FindBehaviorGroupsByBundleIdParams

Ƭ **NotificationResourceV1FindBehaviorGroupsByBundleIdParams**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `bundleId` | `string` | UUID of the bundle to retrieve the behavior groups for. **`Memberof`** NotificationResourceV1FindBehaviorGroupsByBundleIdApi |
| `options?` | `AxiosRequestConfig` | - |

#### Defined in

[NotificationResourceV1FindBehaviorGroupsByBundleId/index.ts:14](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/notifications/NotificationResourceV1FindBehaviorGroupsByBundleId/index.ts#L14)

## Functions

### notificationResourceV1FindBehaviorGroupsByBundleIdParamCreator

▸ **notificationResourceV1FindBehaviorGroupsByBundleIdParamCreator**(`...config`): `Promise`\<`RequestArgs`\>

Lists the behavior groups associated with a bundle. Use this endpoint to see the behavior groups that are configured for a particular bundle for a particular tenant.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`string`, `AxiosRequestConfig`\<`any`\>] \| [[`NotificationResourceV1FindBehaviorGroupsByBundleIdParams`](NotificationResourceV1FindBehaviorGroupsByBundleId.md#notificationresourcev1findbehaviorgroupsbybundleidparams)] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

List behavior groups in a bundle

**`Throws`**

#### Defined in

[NotificationResourceV1FindBehaviorGroupsByBundleId/index.ts:34](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/notifications/NotificationResourceV1FindBehaviorGroupsByBundleId/index.ts#L34)
