[@redhat-cloud-services/javascript-clients](../README.md) / [Exports](../modules.md) / NotificationResourceV1GetBehaviorGroupsAffectedByRemovalOfEndpoint

# Module: NotificationResourceV1GetBehaviorGroupsAffectedByRemovalOfEndpoint

## Table of contents

### References

- [default](NotificationResourceV1GetBehaviorGroupsAffectedByRemovalOfEndpoint.md#default)

### Type Aliases

- [NotificationResourceV1GetBehaviorGroupsAffectedByRemovalOfEndpointParams](NotificationResourceV1GetBehaviorGroupsAffectedByRemovalOfEndpoint.md#notificationresourcev1getbehaviorgroupsaffectedbyremovalofendpointparams)

### Functions

- [notificationResourceV1GetBehaviorGroupsAffectedByRemovalOfEndpointParamCreator](NotificationResourceV1GetBehaviorGroupsAffectedByRemovalOfEndpoint.md#notificationresourcev1getbehaviorgroupsaffectedbyremovalofendpointparamcreator)

## References

### default

Renames and re-exports [notificationResourceV1GetBehaviorGroupsAffectedByRemovalOfEndpointParamCreator](NotificationResourceV1GetBehaviorGroupsAffectedByRemovalOfEndpoint.md#notificationresourcev1getbehaviorgroupsaffectedbyremovalofendpointparamcreator)

## Type Aliases

### NotificationResourceV1GetBehaviorGroupsAffectedByRemovalOfEndpointParams

Ƭ **NotificationResourceV1GetBehaviorGroupsAffectedByRemovalOfEndpointParams**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `endpointId` | `string` | **`Memberof`** NotificationResourceV1GetBehaviorGroupsAffectedByRemovalOfEndpointApi |
| `options?` | `AxiosRequestConfig` | - |

#### Defined in

[packages/notifications/NotificationResourceV1GetBehaviorGroupsAffectedByRemovalOfEndpoint/index.ts:14](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/notifications/NotificationResourceV1GetBehaviorGroupsAffectedByRemovalOfEndpoint/index.ts#L14)

## Functions

### notificationResourceV1GetBehaviorGroupsAffectedByRemovalOfEndpointParamCreator

▸ **notificationResourceV1GetBehaviorGroupsAffectedByRemovalOfEndpointParamCreator**(`...config`): `Promise`\<`RequestArgs`\>

Lists the behavior groups that are affected by the removal of an endpoint. Use this endpoint to understand how removing an endpoint affects existing behavior groups.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`string`, `AxiosRequestConfig`\<`any`\>] \| [[`NotificationResourceV1GetBehaviorGroupsAffectedByRemovalOfEndpointParams`](NotificationResourceV1GetBehaviorGroupsAffectedByRemovalOfEndpoint.md#notificationresourcev1getbehaviorgroupsaffectedbyremovalofendpointparams)] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

List the behavior groups affected by the removal of an endpoint

**`Throws`**

#### Defined in

[packages/notifications/NotificationResourceV1GetBehaviorGroupsAffectedByRemovalOfEndpoint/index.ts:34](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/notifications/NotificationResourceV1GetBehaviorGroupsAffectedByRemovalOfEndpoint/index.ts#L34)
