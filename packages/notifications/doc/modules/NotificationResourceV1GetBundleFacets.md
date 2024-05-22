[@redhat-cloud-services/javascript-clients](../README.md) / [Exports](../modules.md) / NotificationResourceV1GetBundleFacets

# Module: NotificationResourceV1GetBundleFacets

## Table of contents

### References

- [default](NotificationResourceV1GetBundleFacets.md#default)

### Type Aliases

- [NotificationResourceV1GetBundleFacetsParams](NotificationResourceV1GetBundleFacets.md#notificationresourcev1getbundlefacetsparams)

### Functions

- [notificationResourceV1GetBundleFacetsParamCreator](NotificationResourceV1GetBundleFacets.md#notificationresourcev1getbundlefacetsparamcreator)

## References

### default

Renames and re-exports [notificationResourceV1GetBundleFacetsParamCreator](NotificationResourceV1GetBundleFacets.md#notificationresourcev1getbundlefacetsparamcreator)

## Type Aliases

### NotificationResourceV1GetBundleFacetsParams

Ƭ **NotificationResourceV1GetBundleFacetsParams**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `includeApplications?` | `boolean` | **`Memberof`** NotificationResourceV1GetBundleFacetsApi |
| `options?` | `AxiosRequestConfig` | - |

#### Defined in

[packages/notifications/NotificationResourceV1GetBundleFacets/index.ts:14](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/notifications/NotificationResourceV1GetBundleFacets/index.ts#L14)

## Functions

### notificationResourceV1GetBundleFacetsParamCreator

▸ **notificationResourceV1GetBundleFacetsParamCreator**(`...config`): `Promise`\<`RequestArgs`\>

Returns a list of configured bundles that includes the bundle name, the display name, and the ID. You can use this list to configure a filter in the UI.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [[`NotificationResourceV1GetBundleFacetsParams`](NotificationResourceV1GetBundleFacets.md#notificationresourcev1getbundlefacetsparams)] \| [`boolean`, `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

List configured bundle

**`Throws`**

#### Defined in

[packages/notifications/NotificationResourceV1GetBundleFacets/index.ts:34](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/notifications/NotificationResourceV1GetBundleFacets/index.ts#L34)
