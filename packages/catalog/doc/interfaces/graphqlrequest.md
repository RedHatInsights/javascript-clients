[@redhat-cloud-services/catalog-client](../README.md) › [Globals](../globals.md) › [GraphQLRequest](graphqlrequest.md)

# Interface: GraphQLRequest

**`export`** 

**`interface`** GraphQLRequest

## Hierarchy

* **GraphQLRequest**

## Index

### Properties

* [operationName](graphqlrequest.md#optional-operationname)
* [query](graphqlrequest.md#query)
* [variables](graphqlrequest.md#optional-variables)

## Properties

### `Optional` operationName

• **operationName**? : *string*

*Defined in [packages/catalog/api.ts:259](https://github.com/fhlavac/javascript-clients/blob/master/packages/catalog/api.ts#L259)*

If the Query contains several named operations, the operationName controls which one should be executed

**`memberof`** GraphQLRequest

___

###  query

• **query**: *string*

*Defined in [packages/catalog/api.ts:253](https://github.com/fhlavac/javascript-clients/blob/master/packages/catalog/api.ts#L253)*

The GraphQL query

**`memberof`** GraphQLRequest

___

### `Optional` variables

• **variables**? : *object | null*

*Defined in [packages/catalog/api.ts:265](https://github.com/fhlavac/javascript-clients/blob/master/packages/catalog/api.ts#L265)*

Optional Query variables

**`memberof`** GraphQLRequest
