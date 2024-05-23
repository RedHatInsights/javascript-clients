[@redhat-cloud-services/javascript-clients](../README.md) / [Exports](../modules.md) / NotificationResourceV1GetApplicationByNameAndBundleName

# Module: NotificationResourceV1GetApplicationByNameAndBundleName

## Table of contents

### References

- [default](NotificationResourceV1GetApplicationByNameAndBundleName.md#default)

### Type Aliases

- [NotificationResourceV1GetApplicationByNameAndBundleNameParams](NotificationResourceV1GetApplicationByNameAndBundleName.md#notificationresourcev1getapplicationbynameandbundlenameparams)

### Functions

- [notificationResourceV1GetApplicationByNameAndBundleNameParamCreator](NotificationResourceV1GetApplicationByNameAndBundleName.md#notificationresourcev1getapplicationbynameandbundlenameparamcreator)

## References

### default

Renames and re-exports [notificationResourceV1GetApplicationByNameAndBundleNameParamCreator](NotificationResourceV1GetApplicationByNameAndBundleName.md#notificationresourcev1getapplicationbynameandbundlenameparamcreator)

## Type Aliases

### NotificationResourceV1GetApplicationByNameAndBundleNameParams

Ƭ **NotificationResourceV1GetApplicationByNameAndBundleNameParams**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `applicationName` | `string` | **`Memberof`** NotificationResourceV1GetApplicationByNameAndBundleNameApi |
| `bundleName` | `string` | **`Memberof`** NotificationResourceV1GetApplicationByNameAndBundleNameApi |
| `options?` | `AxiosRequestConfig` | - |

#### Defined in

[packages/notifications/NotificationResourceV1GetApplicationByNameAndBundleName/index.ts:14](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/notifications/NotificationResourceV1GetApplicationByNameAndBundleName/index.ts#L14)

## Functions

### notificationResourceV1GetApplicationByNameAndBundleNameParamCreator

▸ **notificationResourceV1GetApplicationByNameAndBundleNameParamCreator**(`...config`): `Promise`\<`RequestArgs`\>

Retrieves an application by bundle and application names. Use this endpoint to  find an application by searching for the bundle that the application is part of. This is useful if you do not know the UUID of the bundle or application.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`string`, `string`, `AxiosRequestConfig`\<`any`\>] \| [[`NotificationResourceV1GetApplicationByNameAndBundleNameParams`](NotificationResourceV1GetApplicationByNameAndBundleName.md#notificationresourcev1getapplicationbynameandbundlenameparams)] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Retrieve an application by bundle and application name

**`Throws`**

#### Defined in

[packages/notifications/NotificationResourceV1GetApplicationByNameAndBundleName/index.ts:40](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/notifications/NotificationResourceV1GetApplicationByNameAndBundleName/index.ts#L40)
