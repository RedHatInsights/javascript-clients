[@redhat-cloud-services/cost-management-client](../README.md) › [Globals](../globals.md) › [TagsApi](tagsapi.md)

# Class: TagsApi

TagsApi - object-oriented interface

**`export`** 

**`class`** TagsApi

**`extends`** {BaseAPI}

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **TagsApi**

## Index

### Constructors

* [constructor](tagsapi.md#constructor)

### Properties

* [axios](tagsapi.md#protected-axios)
* [basePath](tagsapi.md#protected-basepath)
* [configuration](tagsapi.md#protected-configuration)

### Methods

* [getAWSTagData](tagsapi.md#getawstagdata)
* [getAzureTagData](tagsapi.md#getazuretagdata)
* [getOpenShiftAWSTagData](tagsapi.md#getopenshiftawstagdata)
* [getOpenShiftAzureTagData](tagsapi.md#getopenshiftazuretagdata)
* [getOpenShiftTagData](tagsapi.md#getopenshifttagdata)

## Constructors

###  constructor

\+ **new TagsApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[TagsApi](tagsapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`axios` | AxiosInstance |  globalAxios |

**Returns:** *[TagsApi](tagsapi.md)*

## Properties

### `Protected` axios

• **axios**: *AxiosInstance*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#protected-axios)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L51)*

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L51)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L49)*

## Methods

###  getAWSTagData

▸ **getAWSTagData**(`filter?`: any, `keyOnly?`: boolean, `offset?`: number, `limit?`: number, `options?`: any): *AxiosPromise‹[Tags](../interfaces/tags.md)›*

*Defined in [api.ts:6708](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L6708)*

**`summary`** Query to obtain AWS tags

**`throws`** {RequiredError}

**`memberof`** TagsApi

**Parameters:**

Name | Type |
------ | ------ |
`filter?` | any |
`keyOnly?` | boolean |
`offset?` | number |
`limit?` | number |
`options?` | any |

**Returns:** *AxiosPromise‹[Tags](../interfaces/tags.md)›*

___

###  getAzureTagData

▸ **getAzureTagData**(`filter?`: any, `keyOnly?`: boolean, `offset?`: number, `limit?`: number, `options?`: any): *AxiosPromise‹[Tags](../interfaces/tags.md)›*

*Defined in [api.ts:6723](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L6723)*

**`summary`** Query to obtain AWS tags

**`throws`** {RequiredError}

**`memberof`** TagsApi

**Parameters:**

Name | Type |
------ | ------ |
`filter?` | any |
`keyOnly?` | boolean |
`offset?` | number |
`limit?` | number |
`options?` | any |

**Returns:** *AxiosPromise‹[Tags](../interfaces/tags.md)›*

___

###  getOpenShiftAWSTagData

▸ **getOpenShiftAWSTagData**(`filter?`: any, `keyOnly?`: boolean, `offset?`: number, `limit?`: number, `options?`: any): *AxiosPromise‹[Tags](../interfaces/tags.md)›*

*Defined in [api.ts:6738](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L6738)*

**`summary`** Query to obtain OpenShift-on-AWS tags

**`throws`** {RequiredError}

**`memberof`** TagsApi

**Parameters:**

Name | Type |
------ | ------ |
`filter?` | any |
`keyOnly?` | boolean |
`offset?` | number |
`limit?` | number |
`options?` | any |

**Returns:** *AxiosPromise‹[Tags](../interfaces/tags.md)›*

___

###  getOpenShiftAzureTagData

▸ **getOpenShiftAzureTagData**(`filter?`: any, `keyOnly?`: boolean, `offset?`: number, `limit?`: number, `options?`: any): *AxiosPromise‹[Tags](../interfaces/tags.md)›*

*Defined in [api.ts:6753](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L6753)*

**`summary`** Query to obtain OpenShift-on-Azure tags

**`throws`** {RequiredError}

**`memberof`** TagsApi

**Parameters:**

Name | Type |
------ | ------ |
`filter?` | any |
`keyOnly?` | boolean |
`offset?` | number |
`limit?` | number |
`options?` | any |

**Returns:** *AxiosPromise‹[Tags](../interfaces/tags.md)›*

___

###  getOpenShiftTagData

▸ **getOpenShiftTagData**(`filter?`: any, `keyOnly?`: boolean, `offset?`: number, `limit?`: number, `options?`: any): *AxiosPromise‹[Tags](../interfaces/tags.md)›*

*Defined in [api.ts:6768](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L6768)*

**`summary`** Query to obtain OpenShift tags

**`throws`** {RequiredError}

**`memberof`** TagsApi

**Parameters:**

Name | Type |
------ | ------ |
`filter?` | any |
`keyOnly?` | boolean |
`offset?` | number |
`limit?` | number |
`options?` | any |

**Returns:** *AxiosPromise‹[Tags](../interfaces/tags.md)›*
