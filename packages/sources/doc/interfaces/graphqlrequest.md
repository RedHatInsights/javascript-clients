[@redhat-cloud-services/sources-client](../README.md) › [Globals](../globals.md) › [GraphQLRequest](graphqlrequest.md)

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

*Defined in [packages/sources/api.ts:563](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L563)*

If the Query contains several named operations, the operationName controls which one should be executed

**`memberof`** GraphQLRequest

___

###  query

• **query**: *string*

*Defined in [packages/sources/api.ts:557](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L557)*

The GraphQL query

**`memberof`** GraphQLRequest

___

### `Optional` variables

• **variables**? : *object | null*

*Defined in [packages/sources/api.ts:569](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L569)*

Optional Query variables

**`memberof`** GraphQLRequest
