[@redhat-cloud-services/config-manager-client](../README.md) › [Globals](../globals.md) › [DefaultApi](defaultapi.md)

# Class: DefaultApi

DefaultApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **DefaultApi**

## Index

### Constructors

* [constructor](defaultapi.md#constructor)

### Properties

* [axios](defaultapi.md#protected-axios)
* [basePath](defaultapi.md#protected-basepath)
* [configuration](defaultapi.md#protected-configuration)

### Methods

* [createProfile](defaultapi.md#createprofile)
* [getPlaybook](defaultapi.md#getplaybook)
* [getProfile](defaultapi.md#getprofile)
* [getProfiles](defaultapi.md#getprofiles)

## Constructors

###  constructor

\+ **new DefaultApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[DefaultApi](defaultapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/config-manager/base.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** *[DefaultApi](defaultapi.md)*

## Properties

### `Protected` axios

• **axios**: *AxiosInstance*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#protected-axios)*

*Defined in [base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/config-manager/base.ts#L51)*

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

*Defined in [base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/config-manager/base.ts#L51)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/config-manager/base.ts#L49)*

## Methods

###  createProfile

▸ **createProfile**(`inlineObject`: [InlineObject](../interfaces/inlineobject.md), `options?`: any): *Promise‹AxiosResponse‹[Profile](../interfaces/profile.md)››*

*Defined in [api.ts:452](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/config-manager/api.ts#L452)*

Create and optionally activate a new profile.

**`summary`** Create a new profile

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`inlineObject` | [InlineObject](../interfaces/inlineobject.md) |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[Profile](../interfaces/profile.md)››*

___

###  getPlaybook

▸ **getPlaybook**(`profileId`: string, `options?`: any): *Promise‹AxiosResponse‹object››*

*Defined in [api.ts:464](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/config-manager/api.ts#L464)*

Constructs and returns a Ansible playbook suitable to configure a host for the requested profile.

**`summary`** Retrieve an Ansible playbook for the requested profile

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`profileId` | string |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹object››*

___

###  getProfile

▸ **getProfile**(`id`: string, `options?`: any): *Promise‹AxiosResponse‹[Profile](../interfaces/profile.md)››*

*Defined in [api.ts:476](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/config-manager/api.ts#L476)*

Retrieve a specific profile identified by the \'id\' path parameter for the identified account. If the special value \"current\" is used for the \'id\' path parameter, the most recent profile is retrieved instead.

**`summary`** Get a specific profile

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[Profile](../interfaces/profile.md)››*

___

###  getProfiles

▸ **getProfiles**(`limit?`: number, `offset?`: number, `options?`: any): *Promise‹AxiosResponse‹[InlineResponse200](../interfaces/inlineresponse200.md)››*

*Defined in [api.ts:489](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/config-manager/api.ts#L489)*

Retrieve a paginated array of profiles for the identified account. The URL query parameters \'limit\' and \'offset\' can be used to paginate the results. The default value of \'limit\' is 50. The default value of \'offset\' is 0.

**`summary`** Get a list of all profiles

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[InlineResponse200](../interfaces/inlineresponse200.md)››*
