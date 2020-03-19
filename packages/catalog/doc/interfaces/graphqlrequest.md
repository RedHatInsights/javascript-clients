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

*Defined in [api.ts:288](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L288)*

If the Query contains several named operations, the operationName controls which one should be executed

**`type`** {string}

**`memberof`** GraphQLRequest

___

###  query

• **query**: *string*

*Defined in [api.ts:282](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L282)*

The GraphQL query

**`type`** {string}

**`memberof`** GraphQLRequest

___

### `Optional` variables

• **variables**? : *any | null*

*Defined in [api.ts:294](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L294)*

Optional Query variables

**`type`** {any}

**`memberof`** GraphQLRequest
