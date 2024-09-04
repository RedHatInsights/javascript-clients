[@redhat-cloud-services/config-manager-client](README.md) / Exports

# @redhat-cloud-services/config-manager-client

## Table of contents

### Interfaces

- [CreateProfileRequest](interfaces/CreateProfileRequest.md)
- [GetProfiles200Response](interfaces/GetProfiles200Response.md)
- [Profile](interfaces/Profile.md)

### Functions

- [createProfile](modules.md#createprofile)
- [getPlaybook](modules.md#getplaybook)
- [getProfile](modules.md#getprofile)
- [getProfiles](modules.md#getprofiles)

## Functions

### createProfile

▸ **createProfile**(`...config`): `Promise`\<`RequestArgs`\>

Create and optionally activate a new profile.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`CreateProfileParams`] \| [[`CreateProfileRequest`](interfaces/CreateProfileRequest.md), `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Create a new profile

**`Throws`**

#### Defined in

[CreateProfile/index.ts:34](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/config-manager/CreateProfile/index.ts#L34)

___

### getPlaybook

▸ **getPlaybook**(`...config`): `Promise`\<`RequestArgs`\>

Constructs and returns a Ansible playbook suitable to configure a host for the requested profile.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`GetPlaybookParams`] \| [`string`, `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Retrieve an Ansible playbook for the requested profile

**`Throws`**

#### Defined in

[GetPlaybook/index.ts:34](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/config-manager/GetPlaybook/index.ts#L34)

___

### getProfile

▸ **getProfile**(`...config`): `Promise`\<`RequestArgs`\>

Retrieve a specific profile identified by the \'id\' path parameter for the identified account. If the special value \"current\" is used for the \'id\' path parameter, the most recent profile is retrieved instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`string`, `AxiosRequestConfig`\<`any`\>] \| [`GetProfileParams`] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Get a specific profile

**`Throws`**

#### Defined in

[GetProfile/index.ts:34](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/config-manager/GetProfile/index.ts#L34)

___

### getProfiles

▸ **getProfiles**(`...config`): `Promise`\<`RequestArgs`\>

Retrieve a paginated array of profiles for the identified account. The URL query parameters \'limit\' and \'offset\' can be used to paginate the results. The default value of \'limit\' is 50. The default value of \'offset\' is 0.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`GetProfilesParams`] \| [`GetProfilesSortByEnum`, `number`, `number`, `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Get a list of all profiles

**`Throws`**

#### Defined in

[GetProfiles/index.ts:56](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/config-manager/GetProfiles/index.ts#L56)
