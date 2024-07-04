[@redhat-cloud-services/javascript-clients](../README.md) / [Exports](../modules.md) / NotificationResourceV1GetEventTypesByNameAndBundleAndApplicationName

# Module: NotificationResourceV1GetEventTypesByNameAndBundleAndApplicationName

## Table of contents

### References

- [default](NotificationResourceV1GetEventTypesByNameAndBundleAndApplicationName.md#default)

### Type Aliases

- [NotificationResourceV1GetEventTypesByNameAndBundleAndApplicationNameParams](NotificationResourceV1GetEventTypesByNameAndBundleAndApplicationName.md#notificationresourcev1geteventtypesbynameandbundleandapplicationnameparams)

### Functions

- [notificationResourceV1GetEventTypesByNameAndBundleAndApplicationNameParamCreator](NotificationResourceV1GetEventTypesByNameAndBundleAndApplicationName.md#notificationresourcev1geteventtypesbynameandbundleandapplicationnameparamcreator)

## References

### default

Renames and re-exports [notificationResourceV1GetEventTypesByNameAndBundleAndApplicationNameParamCreator](NotificationResourceV1GetEventTypesByNameAndBundleAndApplicationName.md#notificationresourcev1geteventtypesbynameandbundleandapplicationnameparamcreator)

## Type Aliases

### NotificationResourceV1GetEventTypesByNameAndBundleAndApplicationNameParams

Ƭ **NotificationResourceV1GetEventTypesByNameAndBundleAndApplicationNameParams**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `applicationName` | `string` | **`Memberof`** NotificationResourceV1GetEventTypesByNameAndBundleAndApplicationNameApi |
| `bundleName` | `string` | **`Memberof`** NotificationResourceV1GetEventTypesByNameAndBundleAndApplicationNameApi |
| `eventTypeName` | `string` | **`Memberof`** NotificationResourceV1GetEventTypesByNameAndBundleAndApplicationNameApi |
| `options?` | `AxiosRequestConfig` | - |

#### Defined in

[NotificationResourceV1GetEventTypesByNameAndBundleAndApplicationName/index.ts:14](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/notifications/NotificationResourceV1GetEventTypesByNameAndBundleAndApplicationName/index.ts#L14)

## Functions

### notificationResourceV1GetEventTypesByNameAndBundleAndApplicationNameParamCreator

▸ **notificationResourceV1GetEventTypesByNameAndBundleAndApplicationNameParamCreator**(`...config`): `Promise`\<`RequestArgs`\>

Retrieves the details of an event type by specifying the bundle name, the application name, and the event type name.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [[`NotificationResourceV1GetEventTypesByNameAndBundleAndApplicationNameParams`](NotificationResourceV1GetEventTypesByNameAndBundleAndApplicationName.md#notificationresourcev1geteventtypesbynameandbundleandapplicationnameparams)] \| [`string`, `string`, `string`, `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Retrieve an event type by bundle, application and event type names

**`Throws`**

#### Defined in

[NotificationResourceV1GetEventTypesByNameAndBundleAndApplicationName/index.ts:46](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/notifications/NotificationResourceV1GetEventTypesByNameAndBundleAndApplicationName/index.ts#L46)
