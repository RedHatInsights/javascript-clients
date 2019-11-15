[@redhat-cloud-services/approval-client](../README.md) > [GraphqlApi](../classes/graphqlapi.md)

# Class: GraphqlApi

GraphqlApi - object-oriented interface

*__export__*: 

*__class__*: GraphqlApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ GraphqlApi**

## Index

### Constructors

* [constructor](graphqlapi.md#constructor)

### Properties

* [axios](graphqlapi.md#axios)
* [basePath](graphqlapi.md#basepath)
* [configuration](graphqlapi.md#configuration)

### Methods

* [postGraphql](graphqlapi.md#postgraphql)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new GraphqlApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): [GraphqlApi](graphqlapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L49)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` axios | `AxiosInstance` |  globalAxios |

**Returns:** [GraphqlApi](graphqlapi.md)

___

## Properties

<a id="axios"></a>

### `<Protected>` axios

**● axios**: *`AxiosInstance`*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#axios)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L51)*

___
<a id="basepath"></a>

### `<Protected>` basePath

**● basePath**: *`string`*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#basepath)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L51)*

___
<a id="configuration"></a>

### `<Protected>` configuration

**● configuration**: *[Configuration](configuration.md) \| `undefined`*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#configuration)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L49)*

___

## Methods

<a id="postgraphql"></a>

###  postGraphql

▸ **postGraphql**(graphqlIn: *[GraphqlIn](../interfaces/graphqlin.md)*, options?: *`any`*): `AxiosPromise`<[GraphqlOut](../interfaces/graphqlout.md)>

*Defined in [api.ts:1025](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1025)*

Performs a GraphQL Query

*__summary__*: Perform a GraphQL Query

*__throws__*: {RequiredError}

*__memberof__*: GraphqlApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| graphqlIn | [GraphqlIn](../interfaces/graphqlin.md) |  GraphQL Query Request |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[GraphqlOut](../interfaces/graphqlout.md)>

___

