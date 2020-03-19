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

*Defined in [api.ts:1469](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L1469)*

If the Query contains several named operations, the operationName controls which one should be executed

**`type`** {string}

**`memberof`** GraphQLRequest

___

###  query

• **query**: *string*

*Defined in [api.ts:1463](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L1463)*

The GraphQL query

**`type`** {string}

**`memberof`** GraphQLRequest

___

### `Optional` variables

• **variables**? : *any | null*

*Defined in [api.ts:1475](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L1475)*

Optional Query variables

**`type`** {any}

**`memberof`** GraphQLRequest
