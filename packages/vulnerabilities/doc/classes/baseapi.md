[@redhat-cloud-services/vulnerabilities-client](../README.md) > [BaseAPI](../classes/baseapi.md)

# Class: BaseAPI

*__export__*: 

*__class__*: BaseAPI

## Hierarchy

**BaseAPI**

↳  [DefaultApi](defaultapi.md)

## Index

### Constructors

* [constructor](baseapi.md#constructor)

### Properties

* [axios](baseapi.md#axios)
* [basePath](baseapi.md#basepath)
* [configuration](baseapi.md#configuration)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new BaseAPI**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): [BaseAPI](baseapi.md)

*Defined in base.ts:48*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` axios | `AxiosInstance` |  globalAxios |

**Returns:** [BaseAPI](baseapi.md)

___

## Properties

<a id="axios"></a>

### `<Protected>` axios

**● axios**: *`AxiosInstance`*

*Defined in base.ts:50*

___
<a id="basepath"></a>

### `<Protected>` basePath

**● basePath**: *`string`*

*Defined in base.ts:50*

___
<a id="configuration"></a>

### `<Protected>` configuration

**● configuration**: *[Configuration](configuration.md) \| `undefined`*

*Defined in base.ts:48*

___

