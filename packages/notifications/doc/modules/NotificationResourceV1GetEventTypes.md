[@redhat-cloud-services/javascript-clients](../README.md) / [Exports](../modules.md) / NotificationResourceV1GetEventTypes

# Module: NotificationResourceV1GetEventTypes

## Table of contents

### References

- [default](NotificationResourceV1GetEventTypes.md#default)

### Type Aliases

- [NotificationResourceV1GetEventTypesParams](NotificationResourceV1GetEventTypes.md#notificationresourcev1geteventtypesparams)

### Functions

- [notificationResourceV1GetEventTypesParamCreator](NotificationResourceV1GetEventTypes.md#notificationresourcev1geteventtypesparamcreator)

## References

### default

Renames and re-exports [notificationResourceV1GetEventTypesParamCreator](NotificationResourceV1GetEventTypes.md#notificationresourcev1geteventtypesparamcreator)

## Type Aliases

### NotificationResourceV1GetEventTypesParams

Ƭ **NotificationResourceV1GetEventTypesParams**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `applicationIds?` | `Set`\<`string`\> | **`Memberof`** NotificationResourceV1GetEventTypesApi |
| `bundleId?` | `string` | **`Memberof`** NotificationResourceV1GetEventTypesApi |
| `eventTypeName?` | `string` | **`Memberof`** NotificationResourceV1GetEventTypesApi |
| `limit?` | `number` | **`Memberof`** NotificationResourceV1GetEventTypesApi |
| `offset?` | `number` | **`Memberof`** NotificationResourceV1GetEventTypesApi |
| `options?` | `AxiosRequestConfig` | - |
| `pageNumber?` | `number` | **`Memberof`** NotificationResourceV1GetEventTypesApi |
| `sortBy?` | `string` | **`Memberof`** NotificationResourceV1GetEventTypesApi |
| `sortBy2?` | `string` | **`Memberof`** NotificationResourceV1GetEventTypesApi |

#### Defined in

[packages/notifications/NotificationResourceV1GetEventTypes/index.ts:14](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/notifications/NotificationResourceV1GetEventTypes/index.ts#L14)

## Functions

### notificationResourceV1GetEventTypesParamCreator

▸ **notificationResourceV1GetEventTypesParamCreator**(`...config`): `Promise`\<`RequestArgs`\>

Lists all event types. You can filter the returned list by bundle or application name.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [[`NotificationResourceV1GetEventTypesParams`](NotificationResourceV1GetEventTypes.md#notificationresourcev1geteventtypesparams)] \| [`Set`\<`string`\>, `string`, `string`, `number`, `number`, `number`, `string`, `string`, `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

List all event type

**`Throws`**

#### Defined in

[packages/notifications/NotificationResourceV1GetEventTypes/index.ts:76](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/notifications/NotificationResourceV1GetEventTypes/index.ts#L76)
