[@redhat-cloud-services/javascript-clients](../README.md) / [Exports](../modules.md) / OrgConfigResourceV1SaveDailyDigestTimePreference

# Module: OrgConfigResourceV1SaveDailyDigestTimePreference

## Table of contents

### References

- [default](OrgConfigResourceV1SaveDailyDigestTimePreference.md#default)

### Type Aliases

- [OrgConfigResourceV1SaveDailyDigestTimePreferenceParams](OrgConfigResourceV1SaveDailyDigestTimePreference.md#orgconfigresourcev1savedailydigesttimepreferenceparams)

### Functions

- [orgConfigResourceV1SaveDailyDigestTimePreferenceParamCreator](OrgConfigResourceV1SaveDailyDigestTimePreference.md#orgconfigresourcev1savedailydigesttimepreferenceparamcreator)

## References

### default

Renames and re-exports [orgConfigResourceV1SaveDailyDigestTimePreferenceParamCreator](OrgConfigResourceV1SaveDailyDigestTimePreference.md#orgconfigresourcev1savedailydigesttimepreferenceparamcreator)

## Type Aliases

### OrgConfigResourceV1SaveDailyDigestTimePreferenceParams

Ƭ **OrgConfigResourceV1SaveDailyDigestTimePreferenceParams**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `body?` | `string` | **`Memberof`** OrgConfigResourceV1SaveDailyDigestTimePreferenceApi |
| `options?` | `AxiosRequestConfig` | - |

#### Defined in

[packages/notifications/OrgConfigResourceV1SaveDailyDigestTimePreference/index.ts:14](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/notifications/OrgConfigResourceV1SaveDailyDigestTimePreference/index.ts#L14)

## Functions

### orgConfigResourceV1SaveDailyDigestTimePreferenceParamCreator

▸ **orgConfigResourceV1SaveDailyDigestTimePreferenceParamCreator**(`...config`): `Promise`\<`RequestArgs`\>

Sets the daily digest UTC time. The accepted minute values are 00, 15, 30, and 45. Use this endpoint to set the time when daily emails are sent.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`string`, `AxiosRequestConfig`\<`any`\>] \| [[`OrgConfigResourceV1SaveDailyDigestTimePreferenceParams`](OrgConfigResourceV1SaveDailyDigestTimePreference.md#orgconfigresourcev1savedailydigesttimepreferenceparams)] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Set the daily digest time

**`Throws`**

#### Defined in

[packages/notifications/OrgConfigResourceV1SaveDailyDigestTimePreference/index.ts:34](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/notifications/OrgConfigResourceV1SaveDailyDigestTimePreference/index.ts#L34)
