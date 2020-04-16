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

*Defined in [packages/catalog/api.ts:226](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L226)*

If the Query contains several named operations, the operationName controls which one should be executed

**`memberof`** GraphQLRequest

___

###  query

• **query**: *string*

*Defined in [packages/catalog/api.ts:220](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L220)*

The GraphQL query

**`memberof`** GraphQLRequest

___

### `Optional` variables

• **variables**? : *object | null*

*Defined in [packages/catalog/api.ts:232](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L232)*

Optional Query variables

**`memberof`** GraphQLRequest
