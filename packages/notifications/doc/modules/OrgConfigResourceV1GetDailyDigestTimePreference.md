[@redhat-cloud-services/javascript-clients](../README.md) / [Exports](../modules.md) / OrgConfigResourceV1GetDailyDigestTimePreference

# Module: OrgConfigResourceV1GetDailyDigestTimePreference

## Table of contents

### References

- [default](OrgConfigResourceV1GetDailyDigestTimePreference.md#default)

### Type Aliases

- [OrgConfigResourceV1GetDailyDigestTimePreferenceParams](OrgConfigResourceV1GetDailyDigestTimePreference.md#orgconfigresourcev1getdailydigesttimepreferenceparams)

### Functions

- [orgConfigResourceV1GetDailyDigestTimePreferenceParamCreator](OrgConfigResourceV1GetDailyDigestTimePreference.md#orgconfigresourcev1getdailydigesttimepreferenceparamcreator)

## References

### default

Renames and re-exports [orgConfigResourceV1GetDailyDigestTimePreferenceParamCreator](OrgConfigResourceV1GetDailyDigestTimePreference.md#orgconfigresourcev1getdailydigesttimepreferenceparamcreator)

## Type Aliases

### OrgConfigResourceV1GetDailyDigestTimePreferenceParams

Ƭ **OrgConfigResourceV1GetDailyDigestTimePreferenceParams**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `options?` | `AxiosRequestConfig` |

#### Defined in

[OrgConfigResourceV1GetDailyDigestTimePreference/index.ts:14](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/notifications/OrgConfigResourceV1GetDailyDigestTimePreference/index.ts#L14)

## Functions

### orgConfigResourceV1GetDailyDigestTimePreferenceParamCreator

▸ **orgConfigResourceV1GetDailyDigestTimePreferenceParamCreator**(`...config`): `Promise`\<`RequestArgs`\>

Retrieves the daily digest time setting. Use this endpoint to check the time that daily emails are sent.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [[`OrgConfigResourceV1GetDailyDigestTimePreferenceParams`](OrgConfigResourceV1GetDailyDigestTimePreference.md#orgconfigresourcev1getdailydigesttimepreferenceparams)] \| [`AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Retrieve the daily digest time

**`Throws`**

#### Defined in

[OrgConfigResourceV1GetDailyDigestTimePreference/index.ts:28](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/notifications/OrgConfigResourceV1GetDailyDigestTimePreference/index.ts#L28)
