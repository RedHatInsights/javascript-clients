[@redhat-cloud-services/config-manager-client](../README.md) / [Exports](../modules.md) / DefaultApi

# Class: DefaultApi

DefaultApi - object-oriented interface

**`Export`**

DefaultApi

## Hierarchy

- `BaseAPI`

  ↳ **`DefaultApi`**

## Table of contents

### Constructors

- [constructor](DefaultApi.md#constructor)

### Properties

- [axios](DefaultApi.md#axios)
- [basePath](DefaultApi.md#basepath)
- [configuration](DefaultApi.md#configuration)

### Methods

- [createProfile](DefaultApi.md#createprofile)
- [getPlaybook](DefaultApi.md#getplaybook)
- [getProfile](DefaultApi.md#getprofile)
- [getProfiles](DefaultApi.md#getprofiles)

## Constructors

### constructor

• **new DefaultApi**(`configuration?`, `basePath?`, `axios?`): [`DefaultApi`](DefaultApi.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Returns

[`DefaultApi`](DefaultApi.md)

#### Inherited from

BaseAPI.constructor

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/config-manager/base.ts#L51)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

BaseAPI.axios

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/config-manager/base.ts#L51)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

BaseAPI.basePath

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/config-manager/base.ts#L51)

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/config-manager/base.ts#L49)

## Methods

### createProfile

▸ **createProfile**(`inlineObject`, `options?`): `Promise`\<`AxiosResponse`\<[`Profile`](../interfaces/Profile.md), `any`\>\>

Create and optionally activate a new profile.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inlineObject` | [`InlineObject`](../interfaces/InlineObject.md) |  |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Profile`](../interfaces/Profile.md), `any`\>\>

**`Summary`**

Create a new profile

**`Throws`**

**`Memberof`**

DefaultApi

#### Defined in

[api.ts:447](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/config-manager/api.ts#L447)

___

### getPlaybook

▸ **getPlaybook**(`profileId`, `options?`): `Promise`\<`AxiosResponse`\<`object`, `any`\>\>

Constructs and returns a Ansible playbook suitable to configure a host for the requested profile.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `profileId` | `string` |  |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`object`, `any`\>\>

**`Summary`**

Retrieve an Ansible playbook for the requested profile

**`Throws`**

**`Memberof`**

DefaultApi

#### Defined in

[api.ts:459](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/config-manager/api.ts#L459)

___

### getProfile

▸ **getProfile**(`id`, `options?`): `Promise`\<`AxiosResponse`\<[`Profile`](../interfaces/Profile.md), `any`\>\>

Retrieve a specific profile identified by the \'id\' path parameter for the identified account. If the special value \"current\" is used for the \'id\' path parameter, the most recent profile is retrieved instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` |  |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Profile`](../interfaces/Profile.md), `any`\>\>

**`Summary`**

Get a specific profile

**`Throws`**

**`Memberof`**

DefaultApi

#### Defined in

[api.ts:471](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/config-manager/api.ts#L471)

___

### getProfiles

▸ **getProfiles**(`sortBy?`, `limit?`, `offset?`, `options?`): `Promise`\<`AxiosResponse`\<[`InlineResponse200`](../interfaces/InlineResponse200.md), `any`\>\>

Retrieve a paginated array of profiles for the identified account. The URL query parameters \'limit\' and \'offset\' can be used to paginate the results. The default value of \'limit\' is 50. The default value of \'offset\' is 0.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sortBy?` | ``"created_at"`` \| ``"created_at:asc"`` \| ``"created_at:desc"`` |  |
| `limit?` | `number` |  |
| `offset?` | `number` |  |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`InlineResponse200`](../interfaces/InlineResponse200.md), `any`\>\>

**`Summary`**

Get a list of all profiles

**`Throws`**

**`Memberof`**

DefaultApi

#### Defined in

[api.ts:485](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/config-manager/api.ts#L485)
