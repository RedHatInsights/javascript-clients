[@redhat-cloud-services/remediations-client](../README.md) › [Globals](../globals.md) › [GeneratorApi](generatorapi.md)

# Class: GeneratorApi

GeneratorApi - object-oriented interface

**`export`** 

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

*Defined in [base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/base.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** *[GeneratorApi](generatorapi.md)*

## Properties

### `Protected` axios

• **axios**: *AxiosInstance*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#protected-axios)*

*Defined in [base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/base.ts#L51)*

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

*Defined in [base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/base.ts#L51)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/base.ts#L49)*

## Methods

###  generate

▸ **generate**(`playbookDefinition`: [PlaybookDefinition](../interfaces/playbookdefinition.md), `options?`: any): *Promise‹AxiosResponse‹string››*

*Defined in [api.ts:1427](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L1427)*

Generates an Ansible Playbook based on input parameters

**`summary`** Generate an Ansible Playbook

**`throws`** {RequiredError}

**`memberof`** GeneratorApi

**Parameters:**

Name | Type |
------ | ------ |
`playbookDefinition` | [PlaybookDefinition](../interfaces/playbookdefinition.md) |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹string››*
