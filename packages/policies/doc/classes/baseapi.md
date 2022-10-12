[@redhat-cloud-services/policies-client](../README.md) › [Globals](../globals.md) › [BaseAPI](baseapi.md)

# Class: BaseAPI

**`export`** 

## Hierarchy

* **BaseAPI**

  ↳ [BasePathFillerServiceApi](basepathfillerserviceapi.md)

  ↳ [FactServiceApi](factserviceapi.md)

  ↳ [PolicyCrudServiceApi](policycrudserviceapi.md)

## Index

### Constructors

* [constructor](baseapi.md#constructor)

### Properties

* [axios](baseapi.md#protected-axios)
* [basePath](baseapi.md#protected-basepath)
* [configuration](baseapi.md#protected-configuration)

## Constructors

###  constructor

\+ **new BaseAPI**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[BaseAPI](baseapi.md)*

Defined in packages/policies/base.ts:50

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** *[BaseAPI](baseapi.md)*

## Properties

### `Protected` axios

• **axios**: *AxiosInstance*

Defined in packages/policies/base.ts:52

___

### `Protected` basePath

• **basePath**: *string*

Defined in packages/policies/base.ts:52

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

Defined in packages/policies/base.ts:50
