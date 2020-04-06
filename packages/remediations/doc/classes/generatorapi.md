[@redhat-cloud-services/remediations-client](../README.md) › [Globals](../globals.md) › [GeneratorApi](generatorapi.md)

# Class: GeneratorApi

GeneratorApi - object-oriented interface

**`export`** 

**`class`** GeneratorApi

**`extends`** {BaseAPI}

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **GeneratorApi**

## Index

### Constructors

* [constructor](generatorapi.md#constructor)

### Properties

* [axios](generatorapi.md#protected-axios)
* [basePath](generatorapi.md#protected-basepath)
* [configuration](generatorapi.md#protected-configuration)

### Methods

* [generate](generatorapi.md#generate)

## Constructors

###  constructor

\+ **new GeneratorApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[GeneratorApi](generatorapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`axios` | AxiosInstance |  globalAxios |

**Returns:** *[GeneratorApi](generatorapi.md)*

## Properties

### `Protected` axios

• **axios**: *AxiosInstance*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#protected-axios)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L51)*

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L51)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L49)*

## Methods

###  generate

▸ **generate**(`playbookDefinition`: [PlaybookDefinition](../interfaces/playbookdefinition.md), `options?`: any): *AxiosPromise‹string›*

*Defined in [api.ts:1425](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L1425)*

Generates an Ansible Playbook based on input parameters

**`summary`** Generate an Ansible Playbook

**`throws`** {RequiredError}

**`memberof`** GeneratorApi

**Parameters:**

Name | Type |
------ | ------ |
`playbookDefinition` | [PlaybookDefinition](../interfaces/playbookdefinition.md) |
`options?` | any |

**Returns:** *AxiosPromise‹string›*
