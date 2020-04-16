[@redhat-cloud-services/notifications-client](../README.md) › [Globals](../globals.md) › [AppRegistrationApi](appregistrationapi.md)

# Class: AppRegistrationApi

AppRegistrationApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **AppRegistrationApi**

## Index

### Constructors

* [constructor](appregistrationapi.md#constructor)

### Properties

* [axios](appregistrationapi.md#protected-axios)
* [basePath](appregistrationapi.md#protected-basepath)
* [configuration](appregistrationapi.md#protected-configuration)

### Methods

* [appRegistrationCreate](appregistrationapi.md#appregistrationcreate)

## Constructors

###  constructor

\+ **new AppRegistrationApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[AppRegistrationApi](appregistrationapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

Defined in packages/hooks/base.ts:49

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** *[AppRegistrationApi](appregistrationapi.md)*

## Properties

### `Protected` axios

• **axios**: *AxiosInstance*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#protected-axios)*

Defined in packages/hooks/base.ts:51

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

Defined in packages/hooks/base.ts:51

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

Defined in packages/hooks/base.ts:49

## Methods

###  appRegistrationCreate

▸ **appRegistrationCreate**(`inlineObject`: [InlineObject](../interfaces/inlineobject.md), `options?`: any): *AxiosPromise‹[InlineResponse2001](../interfaces/inlineresponse2001.md)›*

*Defined in [packages/hooks/api.ts:983](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L983)*

Register an application

**`throws`** {RequiredError}

**`memberof`** AppRegistrationApi

**Parameters:**

Name | Type |
------ | ------ |
`inlineObject` | [InlineObject](../interfaces/inlineobject.md) |
`options?` | any |

**Returns:** *AxiosPromise‹[InlineResponse2001](../interfaces/inlineresponse2001.md)›*
