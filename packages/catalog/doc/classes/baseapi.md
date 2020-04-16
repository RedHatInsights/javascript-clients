[@redhat-cloud-services/catalog-client](../README.md) › [Globals](../globals.md) › [BaseAPI](baseapi.md)

# Class: BaseAPI

**`export`** 

## Hierarchy

* **BaseAPI**

  ↳ [DefaultApi](defaultapi.md)

  ↳ [IconApi](iconapi.md)

  ↳ [OrderApi](orderapi.md)

  ↳ [OrderItemApi](orderitemapi.md)

  ↳ [PortfolioApi](portfolioapi.md)

  ↳ [PortfolioItemApi](portfolioitemapi.md)

  ↳ [ServicePlansApi](serviceplansapi.md)

  ↳ [SettingsApi](settingsapi.md)

  ↳ [TagsApi](tagsapi.md)

  ↳ [TenantApi](tenantapi.md)

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

Defined in packages/catalog/base.ts:49

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

Defined in packages/catalog/base.ts:51

___

### `Protected` basePath

• **basePath**: *string*

Defined in packages/catalog/base.ts:51

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

Defined in packages/catalog/base.ts:49
