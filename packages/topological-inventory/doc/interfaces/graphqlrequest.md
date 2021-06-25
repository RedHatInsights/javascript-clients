[@redhat-cloud-services/topological-inventory-client](../README.md) › [Globals](../globals.md) › [GraphQLRequest](graphqlrequest.md)

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

*Defined in [packages/topological-inventory/api.ts:1392](https://github.com/fhlavac/javascript-clients/blob/master/packages/topological-inventory/api.ts#L1392)*

If the Query contains several named operations, the operationName controls which one should be executed

**`memberof`** GraphQLRequest

___

###  query

• **query**: *string*

*Defined in [packages/topological-inventory/api.ts:1386](https://github.com/fhlavac/javascript-clients/blob/master/packages/topological-inventory/api.ts#L1386)*

The GraphQL query

**`memberof`** GraphQLRequest

___

### `Optional` variables

• **variables**? : *object | null*

*Defined in [packages/topological-inventory/api.ts:1398](https://github.com/fhlavac/javascript-clients/blob/master/packages/topological-inventory/api.ts#L1398)*

Optional Query variables

**`memberof`** GraphQLRequest
