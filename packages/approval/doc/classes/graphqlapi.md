[@redhat-cloud-services/approval-client](../README.md) › [Globals](../globals.md) › [GraphqlApi](graphqlapi.md)

# Class: GraphqlApi

GraphqlApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **GraphqlApi**

## Index

### Constructors

* [constructor](graphqlapi.md#constructor)

### Properties

* [axios](graphqlapi.md#protected-axios)
* [basePath](graphqlapi.md#protected-basepath)
* [configuration](graphqlapi.md#protected-configuration)

### Methods

* [postGraphql](graphqlapi.md#postgraphql)

## Constructors

###  constructor

\+ **new GraphqlApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[GraphqlApi](graphqlapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/base.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** *[GraphqlApi](graphqlapi.md)*

## Properties

### `Protected` axios

• **axios**: *AxiosInstance*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#protected-axios)*

*Defined in [base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/base.ts#L51)*

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

*Defined in [base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/base.ts#L51)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/base.ts#L49)*

## Methods

###  postGraphql

▸ **postGraphql**(`graphqlIn`: [GraphqlIn](../interfaces/graphqlin.md), `options?`: any): *Promise‹AxiosResponse‹[GraphqlOut](../interfaces/graphqlout.md)››*

*Defined in [api.ts:1135](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1135)*

Perform a GraphQL query

**`summary`** Perform a GraphQL query

**`throws`** {RequiredError}

**`memberof`** GraphqlApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`graphqlIn` | [GraphqlIn](../interfaces/graphqlin.md) | GraphQL query request |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[GraphqlOut](../interfaces/graphqlout.md)››*
