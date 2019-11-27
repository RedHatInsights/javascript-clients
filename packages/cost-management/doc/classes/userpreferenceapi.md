[@redhat-cloud-services/cost-management-client](../README.md) > [UserPreferenceApi](../classes/userpreferenceapi.md)

# Class: UserPreferenceApi

UserPreferenceApi - object-oriented interface

*__export__*: 

*__class__*: UserPreferenceApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ UserPreferenceApi**

## Index

### Constructors

* [constructor](userpreferenceapi.md#constructor)

### Properties

* [axios](userpreferenceapi.md#axios)
* [basePath](userpreferenceapi.md#basepath)
* [configuration](userpreferenceapi.md#configuration)

### Methods

* [createUserPreference](userpreferenceapi.md#createuserpreference)
* [deleteUserPreference](userpreferenceapi.md#deleteuserpreference)
* [getUserPreference](userpreferenceapi.md#getuserpreference)
* [listUserPreferences](userpreferenceapi.md#listuserpreferences)
* [updateUserPreference](userpreferenceapi.md#updateuserpreference)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new UserPreferenceApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): [UserPreferenceApi](userpreferenceapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L49)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` axios | `AxiosInstance` |  globalAxios |

**Returns:** [UserPreferenceApi](userpreferenceapi.md)

___

## Properties

<a id="axios"></a>

### `<Protected>` axios

**● axios**: *`AxiosInstance`*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#axios)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L51)*

___
<a id="basepath"></a>

### `<Protected>` basePath

**● basePath**: *`string`*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#basepath)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L51)*

___
<a id="configuration"></a>

### `<Protected>` configuration

**● configuration**: *[Configuration](configuration.md) \| `undefined`*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#configuration)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L49)*

___

## Methods

<a id="createuserpreference"></a>

###  createUserPreference

▸ **createUserPreference**(userPreference: *[UserPreference](../interfaces/userpreference.md)*, options?: *`any`*): `AxiosPromise`<[UserPreferenceOut](../interfaces/userpreferenceout.md)>

*Defined in [api.ts:7247](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L7247)*

*__summary__*: Create a user preference

*__throws__*: {RequiredError}

*__memberof__*: UserPreferenceApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| userPreference | [UserPreference](../interfaces/userpreference.md) |  Preference to add to a Preference |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[UserPreferenceOut](../interfaces/userpreferenceout.md)>

___
<a id="deleteuserpreference"></a>

###  deleteUserPreference

▸ **deleteUserPreference**(prefUuid: *`string`*, options?: *`any`*): `AxiosPromise`<`Response`>

*Defined in [api.ts:7259](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L7259)*

*__summary__*: Delete a user preference

*__throws__*: {RequiredError}

*__memberof__*: UserPreferenceApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| prefUuid | `string` |  ID of preference to get |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<`Response`>

___
<a id="getuserpreference"></a>

###  getUserPreference

▸ **getUserPreference**(prefUuid: *`string`*, options?: *`any`*): `AxiosPromise`<[UserPreferenceOut](../interfaces/userpreferenceout.md)>

*Defined in [api.ts:7271](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L7271)*

*__summary__*: Get a user preference

*__throws__*: {RequiredError}

*__memberof__*: UserPreferenceApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| prefUuid | `string` |  ID of preference to get |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[UserPreferenceOut](../interfaces/userpreferenceout.md)>

___
<a id="listuserpreferences"></a>

###  listUserPreferences

▸ **listUserPreferences**(offset?: *`number`*, limit?: *`number`*, options?: *`any`*): `AxiosPromise`<[UserPreferencePagination](../interfaces/userpreferencepagination.md)>

*Defined in [api.ts:7284](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L7284)*

*__summary__*: List the user's preferences

*__throws__*: {RequiredError}

*__memberof__*: UserPreferenceApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` offset | `number` |
| `Optional` limit | `number` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[UserPreferencePagination](../interfaces/userpreferencepagination.md)>

___
<a id="updateuserpreference"></a>

###  updateUserPreference

▸ **updateUserPreference**(prefUuid: *`string`*, userPreference: *[UserPreference](../interfaces/userpreference.md)*, options?: *`any`*): `AxiosPromise`<`Response`>

*Defined in [api.ts:7297](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L7297)*

*__summary__*: Update a user preference

*__throws__*: {RequiredError}

*__memberof__*: UserPreferenceApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| prefUuid | `string` |  ID of preference to get |
| userPreference | [UserPreference](../interfaces/userpreference.md) |  Update to a Preference |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<`Response`>

___

