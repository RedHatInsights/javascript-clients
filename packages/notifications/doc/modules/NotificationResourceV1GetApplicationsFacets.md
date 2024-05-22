[@redhat-cloud-services/javascript-clients](../README.md) / [Exports](../modules.md) / NotificationResourceV1GetApplicationsFacets

# Module: NotificationResourceV1GetApplicationsFacets

## Table of contents

### References

- [default](NotificationResourceV1GetApplicationsFacets.md#default)

### Type Aliases

- [NotificationResourceV1GetApplicationsFacetsParams](NotificationResourceV1GetApplicationsFacets.md#notificationresourcev1getapplicationsfacetsparams)

### Functions

- [notificationResourceV1GetApplicationsFacetsParamCreator](NotificationResourceV1GetApplicationsFacets.md#notificationresourcev1getapplicationsfacetsparamcreator)

## References

### default

Renames and re-exports [notificationResourceV1GetApplicationsFacetsParamCreator](NotificationResourceV1GetApplicationsFacets.md#notificationresourcev1getapplicationsfacetsparamcreator)

## Type Aliases

### NotificationResourceV1GetApplicationsFacetsParams

Ƭ **NotificationResourceV1GetApplicationsFacetsParams**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `bundleName?` | `string` | **`Memberof`** NotificationResourceV1GetApplicationsFacetsApi |
| `options?` | `AxiosRequestConfig` | - |

#### Defined in

[packages/notifications/NotificationResourceV1GetApplicationsFacets/index.ts:14](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/notifications/NotificationResourceV1GetApplicationsFacets/index.ts#L14)

## Functions

### notificationResourceV1GetApplicationsFacetsParamCreator

▸ **notificationResourceV1GetApplicationsFacetsParamCreator**(`...config`): `Promise`\<`RequestArgs`\>

Returns a list of configured applications that includes the application name, the display name, and the ID. You can use this list to configure a filter in the UI.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`string`, `AxiosRequestConfig`\<`any`\>] \| [[`NotificationResourceV1GetApplicationsFacetsParams`](NotificationResourceV1GetApplicationsFacets.md#notificationresourcev1getapplicationsfacetsparams)] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

List configured application

**`Throws`**

#### Defined in

[packages/notifications/NotificationResourceV1GetApplicationsFacets/index.ts:34](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/notifications/NotificationResourceV1GetApplicationsFacets/index.ts#L34)
