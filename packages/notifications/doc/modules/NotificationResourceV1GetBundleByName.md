[@redhat-cloud-services/javascript-clients](../README.md) / [Exports](../modules.md) / NotificationResourceV1GetBundleByName

# Module: NotificationResourceV1GetBundleByName

## Table of contents

### References

- [default](NotificationResourceV1GetBundleByName.md#default)

### Type Aliases

- [NotificationResourceV1GetBundleByNameParams](NotificationResourceV1GetBundleByName.md#notificationresourcev1getbundlebynameparams)

### Functions

- [notificationResourceV1GetBundleByNameParamCreator](NotificationResourceV1GetBundleByName.md#notificationresourcev1getbundlebynameparamcreator)

## References

### default

Renames and re-exports [notificationResourceV1GetBundleByNameParamCreator](NotificationResourceV1GetBundleByName.md#notificationresourcev1getbundlebynameparamcreator)

## Type Aliases

### NotificationResourceV1GetBundleByNameParams

Ƭ **NotificationResourceV1GetBundleByNameParams**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `bundleName` | `string` | **`Memberof`** NotificationResourceV1GetBundleByNameApi |
| `options?` | `AxiosRequestConfig` | - |

#### Defined in

[NotificationResourceV1GetBundleByName/index.ts:14](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/notifications/NotificationResourceV1GetBundleByName/index.ts#L14)

## Functions

### notificationResourceV1GetBundleByNameParamCreator

▸ **notificationResourceV1GetBundleByNameParamCreator**(`...config`): `Promise`\<`RequestArgs`\>

Retrieves the details of a bundle by searching by its name.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`string`, `AxiosRequestConfig`\<`any`\>] \| [[`NotificationResourceV1GetBundleByNameParams`](NotificationResourceV1GetBundleByName.md#notificationresourcev1getbundlebynameparams)] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Retrieve a bundle by name

**`Throws`**

#### Defined in

[NotificationResourceV1GetBundleByName/index.ts:34](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/notifications/NotificationResourceV1GetBundleByName/index.ts#L34)
