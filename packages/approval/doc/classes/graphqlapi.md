[@redhat-cloud-services/approval-client](../README.md) › [Globals](../globals.md) › [GraphqlApi](graphqlapi.md)

# Class: GraphqlApi

GraphqlApi - object-oriented interface

**`export`** 

**`class`** GraphqlApi

**`extends`** {BaseAPI}

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

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`axios` | AxiosInstance |  globalAxios |

**Returns:** *[GraphqlApi](graphqlapi.md)*

## Properties

### `Protected` axios

• **axios**: *AxiosInstance*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#protected-axios)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L51)*

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L51)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L49)*

## Methods

###  postGraphql

▸ **postGraphql**(`graphqlIn`: [GraphqlIn](../interfaces/graphqlin.md), `options?`: any): *AxiosPromise‹[GraphqlOut](../interfaces/graphqlout.md)›*

*Defined in [api.ts:1027](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1027)*

Performs a GraphQL Query

**`summary`** Perform a GraphQL Query

**`throws`** {RequiredError}

**`memberof`** GraphqlApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`graphqlIn` | [GraphqlIn](../interfaces/graphqlin.md) | GraphQL Query Request |
`options?` | any | - |

**Returns:** *AxiosPromise‹[GraphqlOut](../interfaces/graphqlout.md)›*
